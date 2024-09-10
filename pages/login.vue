<template>
    <div class="flex items-center justify-center h-screen bg-white">
      <div class="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingrese su correo electrónico"
              required
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Iniciar sesión
          </button>
          <p v-if="errorMessage" class="mt-4 text-red-600 text-center">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isSubmitting: false,
        errorMessage: '',
      };
    },
    methods: {
      async handleLogin() {
        this.isSubmitting = true;
        this.errorMessage = '';
        
        try {
          const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
          
          if (response.ok) {
            this.$router.push('/dashboard'); // Cambiar la ruta según tu aplicación
          } else {
            const data = await response.json();
            this.errorMessage = data.message || 'Error al iniciar sesión';
          }
        } catch (error) {
          this.errorMessage = 'Error de red. Inténtalo de nuevo.';
        } finally {
          this.isSubmitting = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  
  