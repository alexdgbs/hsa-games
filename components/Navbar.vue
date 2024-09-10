<template>
  <nav class="bg-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      
      <div class="text-black text-2xl font-bold">
        <a href="/" class="hover:text-gray-500">HSA//Games</a>
      </div>

      <div class="block lg:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

    
      <ul class="hidden lg:flex space-x-6 text-black text-sm">
        <li><a href="/precios" class="hover:text-gray-500">Precios</a></li>
        <li><a href="/consolas" class="hover:text-gray-500">Consolas</a></li>
        <li><a href="/emuladores" class="hover:text-gray-500">Emuladores</a></li>
        <li><a href="/team" class="hover:text-gray-500">Team</a></li>
      </ul>

      
      <div class="hidden lg:block">
        <a href="/registro" class="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500 text-sm">Crear Cuenta</a>
      </div>
    </div>

    
    <div v-if="menuOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-10" @click="toggleMenu"></div>
    <div :class="menuOpen ? 'translate-x-0' : '-translate-x-full'" class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-20">
      <div class="flex justify-end p-4">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul class="space-y-6 text-black text-sm p-4">
        <li><a href="/inicio" class="hover:text-gray-500">Inicio</a></li>
        <li><a href="/precios" class="hover:text-gray-500">Precios</a></li>
        <li><a href="/consolas" class="hover:text-gray-500">Consolas</a></li>
        <li><a href="/emuladores" class="hover:text-gray-500">Emuladores</a></li>
        <li><a href="/registro" class="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500 text-sm">Crear Cuenta</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>

</style>

  