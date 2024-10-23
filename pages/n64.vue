<template>
    <div class="container mx-auto p-4 fadeIn">
      <transition name="fade" @before-enter="beforeEnter" @enter="enter">
        <h1 v-if="isVisible" class="text-xl font-bold mb-6">Catálogo de Juegos N64</h1>
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
  { id: 1, name: 'Super Smash Bros', cover: '/img/super-smash-bros.png', description: 'Lucha', downloadLink: 'http://example.com/download/super-smash-bros' },
  { id: 2, name: 'Super Mario 64', cover: '/img/Super_Mario_64_29.png', description: 'Plataformas', downloadLink: 'http://example.com/download/super-mario-64' },
  { id: 3, name: 'Mario Kart 64', cover: '/img/MK64_Cover.png', description: 'Carreras', downloadLink: 'http://example.com/download/mario-kart-64' },
  { id: 4, name: 'Donkey Kong 64', cover: '/img/na.png', description: 'Aventura', downloadLink: 'http://example.com/download/donkey-kong-64' },
  { id: 5, name: 'Mortal Kombat 4', cover: '/img/mortal-kombat-4.png', description: 'Lucha', downloadLink: 'http://example.com/download/mortal-kombat-4' },
  { id: 6, name: 'FIFA 99', cover: '/img/fifa-99.png', description: 'Deportes', downloadLink: 'http://example.com/download/fifa-99' },
  { id: 7, name: 'Fighting Force 64', cover: '/img/fighting-force-64.png', description: 'Acción', downloadLink: 'http://example.com/download/fighting-force-64' },
  { id: 8, name: 'NBA Jam 2000', cover: '/img/nba-jam-2000.png', description: 'Deportes', downloadLink: 'http://example.com/download/nba-jam-2000' },
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
  