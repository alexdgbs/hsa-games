<template>
    <div class="container mx-auto p-4">
        <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos Snes</h1>
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
                { id: 1, name: 'FIFA 96', cover: '/img/fifa-soccer-96.png' },
                { id: 2, name: 'Kirby Super Star', cover: '/img/kirby-super-star.png' },
                { id: 3, name: 'Super Metroid', cover: '/img/super-metroid.jpg' },
                { id: 4, name: 'Mega Man Soccer', cover: '/img/mega-man-s-soccer.png' },
                { id: 5, name: 'Star Wars 3', cover: '/img/super-star-wars-31438.png' },
                { id: 6, name: 'Donkey Kong Country', cover: '/img/donkey-kong-country-competition-cartridge.png' },
                { id: 7, name: 'Untouchables', cover: '/img/untouchables-the.png' },
                { id: 8, name: 'Super Mario World', cover: '/img/super-mario-world.png' },
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