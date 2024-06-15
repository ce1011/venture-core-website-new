<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js';

const isOpeningEnded = defineModel({default: false, type: Boolean});

onMounted(() => {
  var animateTimeline = anime.timeline({easing: 'easeInOutSine'});
  animateTimeline.add({targets: ".full-venture-core-logo", opacity: [0, 1], duration: 2000},);
  animateTimeline.add({
    targets: '.full-venture-core-logo', scale: 10, duration: 700,complete: (anim) => {
      isOpeningEnded.value = true;
    }
  },);
})

</script>

<template>
  <div class="bg-black h-screen w-screen">
    <div class="h-screen flex items-center justify-center full-venture-core-logo">
      <VentureLogo class="h-32"/>
      <div class="w-4">
      </div>
      <VentureCoreTypeface class="h-32"/>
    </div>
  </div>
</template>

<style scoped>

</style>