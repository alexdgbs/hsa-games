<template>
  <div>
    <Navbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  head() {
    return {
      script: [
        {
          src: 'https://js.stripe.com/v3/',
          defer: true
        }
      ]
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del layout (si es necesario) */
</style>

  