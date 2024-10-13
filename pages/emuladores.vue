<template>
  <div class="emuladores-container">
    <h1 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Emuladores</h1>
    <p class="mt-4 text-sm leading-6 text-gray-600">Links de las páginas oficiales</p>
    <div class="emulador-grid">
      <div 
        v-for="(emulador, index) in emuladores" 
        :key="index" 
        class="emulador-card"
        @mouseover="hoveredIndex = index" 
        @mouseleave="hoveredIndex = null"
      >
        <a :href="emulador.link" target="_blank" class="emulador-link">
          <img :src="emulador.imagen" :alt="'Imagen de ' + emulador.nombre" class="emulador-imagen" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emuladores: [
        { nombre: 'PSP', link: 'https://www.ppsspp.org/', imagen: '/img/psp.png' },
        { nombre: 'PS2', link: 'https://pcsx2.net/', imagen: '/img/ps2.png' },
        { nombre: 'GameCube', link: 'https://es.dolphin-emu.org/?cr=es', imagen: '/img/nintendogamecube.png' },
        { nombre: 'GBA', link: 'https://visualboyadvance.org/', imagen: '/img/gameboyadvance.png' },
        { nombre: 'Snes', link: 'https://www.snes9x.com/', imagen: '/img/nes.png' },
        { nombre: 'Nintendo 64', link: 'https://www.pj64-emu.com/', imagen: '/img/nintendo64.png' },
      ],
      hoveredIndex: null,
    };
  },
};
</script>

<style scoped>
.emuladores-container {
  max-width: 800px; 
  margin: 0 auto;
  padding: 20px; 
  text-align: center;
}

h1 {
  font-size: 1.5rem; 
  margin-bottom: 20px;
}

.emulador-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
  gap: 20px; 
}

.emulador-card {
  width: 120px; 
  height: 120px; 
  background-color: #f9f9f9; 
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.emulador-card:hover {
  transform: scale(1.05); 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); 
} 

.emulador-imagen {
  width: 50%; 
  height: auto;
}

.emulador-link {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: center;
  align-items: center; 
}

.mt-4 {
  margin-top: 1rem; 
  margin-bottom: 1.5rem; 
}

.text-sm {
  font-size: 0.875rem; 
}

.leading-6 {
  line-height: 1.5; 
}

.text-gray-600 {
  color: #4b5563; 
}

/* Media Queries */
@media (max-width: 640px) {
  h1 {
    font-size: 1.25rem; 
  }

  .emulador-card {
    width: 100px; 
    height: 100px; 
  }

  .emulador-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); 
  }
}
</style>
