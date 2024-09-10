<template>
    <div class="container mx-auto py-8">
      <h2 class="text-2xl font-bold mb-6">Suscribirse</h2>
      
      <form @submit.prevent="checkout" id="payment-form">
        <div id="card-element" class="bg-gray-100 p-4 rounded-md mb-4"></div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-4 w-full">Pagar con tarjeta</button>
        <div id="card-errors" class="text-red-600 mt-2"></div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (window.Stripe) {
        this.stripe = Stripe('pk_test_51PwyqZ02vVZvxUTMtJ93GyAfsDZVVckeLbjZP2BfqtfiUqn0wZmEzR98NkIba7kv52kZV455uYCq24QKmid7NnFu00YPdFperq'); 
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card');
        this.cardElement.mount('#card-element');
      } else {
        console.error('Stripe no está cargado.');
      }
    },
    methods: {
      async checkout() {
        try {
          
          event.preventDefault();
          
          
          const { token, error } = await this.stripe.createToken(this.cardElement);
          
          if (error) {
            document.getElementById('card-errors').textContent = error.message;
          } else {
            
            const response = await fetch('/api/create-checkout-session', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: token.id }),
            });
            
            const session = await response.json();
            const { error } = await this.stripe.redirectToCheckout({ sessionId: session.id });
            
            if (error) {
              alert('Error en el proceso de pago: ' + error.message);
            }
          }
        } catch (error) {
          console.error('Error creando la sesión de pago:', error);
        }
      }
    }
  };
  </script>
  