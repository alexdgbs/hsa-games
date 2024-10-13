<template>
  <div class="container mx-auto p-4">
      <h1 class="text-1xl font-bold mb-6">Catálogo de Juegos Gameboy</h1>
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
              { id: 1, name: 'The Legend of Zelda: The Minish Cap', cover: '/img/gba-zelda.png' },
              { id: 2, name: 'Rayman: Hoodlums Revenge', cover: '/img/gba-rayman.png' },
              { id: 3, name: 'Pokémon: Inclement Emerald', cover: '/img/gba-pokemon.png' },
              { id: 4, name: 'Dragon Ball Z: Taiketsu', cover: '/img/gba-dbztaiketsu.jpg' },
              { id: 5, name: 'Doom', cover: '/img/gba-doom.jpg' },
              { id: 6, name: 'Super Mario Advance 2', cover: '/img/gba-supermario2.jpg' },
              { id: 7, name: 'Mario Kart: Super Circuit', cover: '/img/gba-mariokart.jpg' },
              { id: 8, name: 'Metroid: Fusion', cover: '/img/gba-metroidfusion.jpg' },
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
