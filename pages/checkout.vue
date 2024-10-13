<template>
  <div class="relative z-0 bg-white flex items-center justify-center py-6 px-2 sm:px-4 lg:px-6">
    <div class="max-w-sm w-full space-y-6">
      <div>
        <h2 class="text-center text-2xl font-semibold text-gray-900">Suscríbete por solo $49</h2>
        <p class="mt-1 text-center text-xs text-gray-600">
          Elige el método de pago y accede a contenido exclusivo.
        </p>
      </div>
      <div class="bg-gray-100 py-4 px-2 shadow sm:rounded-lg sm:px-6">
        <h3 class="text-lg font-medium text-gray-700 text-center mb-4">Métodos de Pago</h3>
        <div id="paypal-button-container" class="mt-2 relative z-10"></div>
      </div>
    </div>
    <div class="absolute inset-0 bg-transparent" style="z-index: 5;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AXQeb763-UfMzlLsheOGAQdXyM-xzZ4MPxXXZAaZ44MQT-7bWdbDuiRxl6-gwxuCgXf6Jnc0LKSdL1vk&currency=MXN";
    script.addEventListener('load', this.renderPayPalButton);
    document.body.appendChild(script);
  },
  methods: {
    renderPayPalButton() {
      if (!window.paypal) {
        console.error('PayPal SDK no está cargado.');
        return;
      }
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '49.00'
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transacción completada por ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('Error en el proceso de pago:', err);
        }
      }).render('#paypal-button-container');
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}

h2 {
  color: #1F2937;
  font-size: 1.25rem; 
}

h3 {
  color: #374151;
  font-size: 1rem; 
}

.bg-white {
  background-color: white;
}

#paypal-button-container {
  display: flex;
  justify-content: center;
  z-index: 10; 
}

.bg-gray-100 {
  padding: 0.5rem; 
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.flex {
  margin-top: 1rem; 
}

.menu {
  z-index: 50; 
}
</style>
