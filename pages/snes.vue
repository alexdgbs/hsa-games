<template>
  <div class="container mx-auto p-4 fadeIn">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <h1 v-if="isVisible" class="text-xl font-bold mb-6">Catálogo de Juegos SNES</h1>
    </transition>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div 
        v-for="game in games" 
        :key="game.id" 
        class="bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card"
      >
        <img 
          :src="game.cover" 
          alt="Carátula del juego" 
          class="game-image w-full h-24 object-contain rounded-lg mb-1" 
        />
        <h2 class="text-xs font-bold">{{ game.name }}</h2>
        <p class="text-xs text-gray-600">{{ game.description }}</p>
        <button
          v-if="isSubscribed || isAdmin"
          class="mt-1 bg-slate-50 text-sky-800 text-xs"
          @click="downloadGame(game)"
        >
          Descargar
        </button>
        <p v-else class="mt-1 text-red-500 text-xs">Suscríbete para descargar</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    isVisible: false,
    isAdmin: false,
    isSubscribed: false,
    games: [
      { id: 1, name: 'FIFA 96', cover: '/img/fifa-soccer-96.png', downloadLink: 'http://example.com/download/fifa-96', description: 'Deportes' },
      { id: 2, name: 'Kirby Super Star', cover: '/img/kirby-super-star.png', downloadLink: 'http://example.com/download/kirby-super-star', description: 'Plataformas' },
      { id: 3, name: 'Super Metroid', cover: '/img/super-metroid.jpg', downloadLink: 'http://example.com/download/super-metroid', description: 'Acción/Aventura' },
      { id: 4, name: 'Mega Man Soccer', cover: '/img/mega-man-s-soccer.png', downloadLink: 'http://example.com/download/mega-man-soccer', description: 'Deportes' },
      { id: 5, name: 'Star Wars 3', cover: '/img/super-star-wars-31438.png', downloadLink: 'http://example.com/download/star-wars-3', description: 'Acción/Aventura' },
      { id: 6, name: 'Donkey Kong Country', cover: '/img/donkey-kong-country-competition-cartridge.png', downloadLink: 'http://example.com/download/donkey-kong-country', description: 'Plataformas' },
      { id: 7, name: 'Untouchables', cover: '/img/untouchables-the.png', downloadLink: 'http://example.com/download/untouchables', description: 'Acción' },
      { id: 8, name: 'Super Mario World', cover: '/img/super-mario-world.png', downloadLink: 'http://example.com/download/super-mario-world', description: 'Plataformas' },
    ],
  };
},
mounted() {
  this.isVisible = true;
  const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
  if (emailCookie) {
    const emailValue = emailCookie.split('=')[1];
    this.isAdmin = emailValue === '8hsabitgames@gmail.com';
    this.getUserInfo(emailValue);
  }
},
methods: {
  async getUserInfo(email) {
    try {
      const response = await fetch(`http://localhost:3001/api/user?email=${email}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const userData = await response.json();
      this.isSubscribed = userData.isSubscribed;
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  },
  downloadGame(game) {
    window.location.href = game.downloadLink;
  },
  beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = 'translateY(-20px)';
  },
  enter(el, done) {
    el.offsetHeight;
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
    done();
  },
},
};
</script>

<style scoped>
.container {
max-width: 1200px;
animation: fadeIn 0.5s ease-in;
}

.game-card {
transition: background-color 0.3s, box-shadow 0.3s;
padding: 0.5rem;
}

.game-card:hover {
background-color: #ffffff;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.game-image {
transition: transform 0.3s;
}

@keyframes fadeIn {
from {
  opacity: 0;
  transform: translateY(-20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
opacity: 0;
transform: translateY(-20px);
}
</style>

  