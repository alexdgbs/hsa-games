<template>
  <section class="text-center pt-5 bg-white mx-auto my-5 max-w-7xl">
    <h2 class="text-xl font-bold mb-12 text-gray-900">Consolas</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <nuxt-link
        to="/psp"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/psp.png"
          alt="PlayStation Portable PSP"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">PlayStation Portable</h3>
      </nuxt-link>

      <nuxt-link
        to="/gamecube"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/nintendogamecube.png"
          alt="Nintendo Gamecube"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">Nintendo Gamecube</h3>
      </nuxt-link>

      <nuxt-link
        to="/n64"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/nintendo64.png"
          alt="Nintendo 64"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">Nintendo 64</h3>
      </nuxt-link>

      <nuxt-link
        to="/gba"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/gameboyadvance.png"
          alt="Gameboy Advance"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">Gameboy Advance</h3>
      </nuxt-link>

      <nuxt-link
        to="/snes"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/nes.png"
          alt="Super Nintendo"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">Super Nintendo</h3>
      </nuxt-link>

      <nuxt-link
        to="/ps2"
        class="transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center border border-gray-300 hover:shadow-xl"
      >
        <img
          src="/img/ps2.png"
          alt="Playstation 2"
          class="mx-auto w-28 h-auto mb-4"
        />
        <h3 class="text-1x1 font-semibold text-gray-800">Playstation 2</h3>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConsolasSection",
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.border {
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
}
</style>
