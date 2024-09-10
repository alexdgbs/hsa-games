<template>
    <section class="bg-white min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md bg-gray-100 rounded-lg shadow-lg">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Crear cuenta
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Correo Electrónico</label>
              <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
              <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900">Confirmar contraseña</label>
              <input type="password" v-model="confirmPassword" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" v-model="acceptTerms" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required>
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500">Acepto los <a class="font-medium text-primary-600 hover:underline" href="#">términos y condiciones</a></label>
              </div>
            </div>
            <button type="submit" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear cuenta</button>
            <p class="text-sm font-light text-gray-500">
              ¿Ya tienes una cuenta? <a href="#" class="font-medium text-primary-600 hover:underline">Inicia sesión</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
      };
    },
    methods: {
      handleSubmit() {
        // Manejo de la lógica de envío del formulario
        console.log('Form submitted');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Aquí puedes agregar estilos adicionales si es necesario */
  </style>
  

  