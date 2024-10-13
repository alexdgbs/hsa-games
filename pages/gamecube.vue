<template>
    <div class="container mx-auto p-4">
        <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos Gamecube</h1>
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
                { id: 1, name: 'Super Mario Sunshine', cover: '/img/gamecube-Super-Mario-Sunshine.jpg' },
                { id: 2, name: 'Mario Kart: Double Dash!!', cover: '/img/Mario-Kart-Double-Dash.jpg' },
                { id: 3, name: 'Twilight Princess', cover: '/img/The-Legend-of-Zelda-Twilight-Princess.jpg' },
                { id: 4, name: 'Ultimate Spider-Man', cover: '/img/spiderman.jpg' },
                { id: 5, name: 'Splinter Cell', cover: '/img/splintercellnintendo.jpg' },
                { id: 6, name: 'Mario Party 4', cover: '/img/Mario-Party-4.jpg' },
                { id: 7, name: '2002 FIFA World Cup', cover: '/img/fifa2002.jpg' },
                { id: 8, name: 'Super Mario Strikers', cover: '/img/Super_Mario_Strikers_cover.png' },
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