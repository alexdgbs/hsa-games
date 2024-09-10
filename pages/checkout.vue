<template>
    <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold mb-6 text-gray-800 text-center">Suscribirse</h2>
      
      <div class="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <form @submit.prevent="checkout" id="payment-form">
          <div id="card-element" class="bg-gray-100 p-4 rounded-md mb-4 border border-gray-300"></div>
          
          <button 
            type="submit" 
            class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
          >
            Pagar con tarjeta
          </button>
          
          <div id="card-errors" class="text-red-600 mt-2 text-sm"></div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stripe: null,
        cardElement: null
      };
    },
    mounted() {
      
      this.stripe = window.Stripe('pk_test_51PwyqZ02vVZvxUTMtJ93GyAfsDZVVckeLbjZP2BfqtfiUqn0wZmEzR98NkIba7kv52kZV455uYCq24QKmid7NnFu00YPdFperq'); 
      const elements = this.stripe.elements();
      
      
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    },
    methods: {
      async checkout() {
        try {
       
          const {token, error} = await this.stripe.createToken(this.cardElement);
          
          if (error) {
            document.getElementById('card-errors').textContent = error.message;
          } else {
            
            const response = await fetch('/api/create-checkout-session', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: token.id }),
            });
  
            const session = await response.json();
            
        
            const {error: redirectError} = await this.stripe.redirectToCheckout({ sessionId: session.id });
            
            if (redirectError) {
              alert('Error en el proceso de pago: ' + redirectError.message);
            }
          }
        } catch (error) {
          console.error('Error creando la sesión de pago:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  