<template>
    <div class="container mx-auto p-4">
        <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos N64</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div v-for="game in games" :key="game.id" class="bg-slate-50 rounded-lg p-2 shadow hover:shadow-lg transition">
                <img :src="game.cover" alt="Carátula del juego" class="w-full h-32 object-contain rounded-lg mb-2"/>
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
                { id: 1, name: 'Super Smash Bros', cover: '/img/super-smash-bros.png' },
                { id: 2, name: 'Super Mario 64', cover: '/img/Super_Mario_64_29.png' },
                { id: 3, name: 'Mario Kart 64', cover: '/img/MK64_Cover.png' },
                { id: 4, name: 'Donkey Kong 64', cover: '/img/na.png' },
                { id: 5, name: 'Mortal Kombat 4', cover: '/img/mortal-kombat-4.png' },
                { id: 6, name: 'FIFA 99', cover: '/img/fifa-99.png' },
                { id: 7, name: 'Fighting Force 64', cover: '/img/fighting-force-64.png' },
                { id: 8, name: 'NBA Jam 2000', cover: '/img/nba-jam-2000.png' },
            ],
        };
    },
    methods: {
        downloadGame(game) {
            console.log(`Descargando ${game.name}`);
        },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>