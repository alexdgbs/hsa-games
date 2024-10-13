<template>
    <div class="container mx-auto p-4">
        <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos PS2</h1>
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
                { id: 1, name: 'Grand Theft Auto: Vice City', cover: '/img/ps2-gtavicecity.jpg' },
                { id: 2, name: 'WWE SmackDown vs. Raw 2011', cover: '/img/ps2-wwe2011.jpg' },
                { id: 3, name: 'Midnight Club 3 - DUB Edition', cover: '/img/ps2-midnightclub3.jpg' },
                { id: 4, name: 'Guitar Hero III – Legends of Rock', cover: '/img/ps2-Guitar-Hero-III-Legends-of-Rock.jpg' },
                { id: 5, name: 'Grand Theft Auto III', cover: '/img/ps2-grand_theft_auto3.jpg' },
                { id: 6, name: 'ATV Offroad Fury 4', cover: '/img/atv-offroad-fury-4-ps2.jpg' },
                { id: 7, name: 'God Of War', cover: '/img/ps2-godofwar.jpg' },
                { id: 8, name: 'Dragon Ball Z: Budokai Tenkaichi 2', cover: '/img/ps2-Dragon-Ball-Z-Budokai-Tenkaichi.jpg' },
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