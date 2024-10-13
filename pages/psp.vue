<template>
    <div class="container mx-auto p-4">
      <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos PSP</h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="game in games" :key="game.id" class="bg-slate-50 rounded-lg p-2 shadow hover:shadow-lg transition">
          <img :src="game.cover" alt="Carátula del juego" class="w-full h-32 object-contain rounded-lg mb-2" />
          <h2 class="text-xs font-semibold">{{ game.name }}</h2>
          <button
            v-if="isSubscribed"
            class="mt-2 bg-blue-500 text-white text-xs py-1 px-2 rounded hover:bg-blue-600 transition"
            @click="downloadGame(game)"
          >
            Descargar
          </button>
          <p v-else class="mt-2 text-red-500 text-xs">Suscríbete para descargar</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSubscribed: false,
        games: [
          { id: 1, name: 'Gran Turismo', cover: '/img/psp-granturismo.jpg', downloadLink: 'http://example.com/download/granturismo' },
          { id: 2, name: 'Tekken 6', cover: '/img/psp-tekken6.jpg', downloadLink: 'http://example.com/download/tekken6' },
          { id: 3, name: 'WWE 2011', cover: '/img/psp-wwe2011.png', downloadLink: 'https://drive.google.com/file/d/1MPz-unexl9FrkeUmHf2goF11DFlGsfac/view?usp=drive_link' },
          { id: 4, name: 'Fifa Street 2', cover: '/img/psp-fifastreet2.jpg', downloadLink: 'http://example.com/download/fifastreet2' },
          { id: 5, name: 'Midnight Club: Los Angeles', cover: '/img/psp-mcremix.jpg', downloadLink: 'http://example.com/download/midnightclub' },
          { id: 6, name: 'Syphon Filter: Dark Mirror', cover: '/img/psp-syphondarkmirror.jpg', downloadLink: 'http://example.com/download/syphondarkmirror' },
          { id: 7, name: 'Silent Hill: Shattered Memories', cover: '/img/psp-shmemories.jpg', downloadLink: 'http://example.com/download/silenthill' },
          { id: 8, name: 'Monster Hunter Freedom Unite', cover: '/img/psp-monsterhunter.jpg', downloadLink: 'http://example.com/download/monsterhunter' },
        ],
      };
    },
    methods: {
      downloadGame(game) {
        
        window.location.href = game.downloadLink;
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  