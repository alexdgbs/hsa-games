<template>
  <div class="container mx-auto py-8">
    <h2 class="text-2xl font-bold mb-6">Suscribirse</h2>
    <div id="paypal-button-container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.paypal) {
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
          return actions.order.capture().then(function(details) {
            alert('Transacción completada por ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('Error en el proceso de pago:', err);
        }
      }).render('#paypal-button-container');
    } else {
      console.error('PayPal SDK no está cargado.');
    }
  }
}
</script>
