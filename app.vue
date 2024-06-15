<template>
  <div class="bg-black">
    <div class="">
      <LayoutHeader v-if="isOpeningEnded" />
      <div id="gaussian-blur-layer" class="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-[80px]"
        aria-hidden="true">
        <canvas id="gradient-canvas"
          class="relative aspect-[1155/678] w-[36.125rem] opacity-80 sm:left-[calc(25%)] sm:w-[72.1875rem]"
          data-transition-in />
      </div>
      <VentureOpening v-model="isOpeningEnded" class="venture-opening" v-if="!isOpeningEnded" />
      <NuxtPage class="h-screen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Gradient } from './components/index/gradientHelper'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

if(process.client){
  gsap.registerPlugin(ScrollTrigger);
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')
}

const isOpeningEnded = ref<boolean>(true);
</script>

<style scoped>
#gradient-canvas {
  width: 100%;
  height: 100%;
  --gradient-color-1: #7f00ff;
  --gradient-color-2: #5e32ff;
  --gradient-color-3: #405fff;
  --gradient-color-4: #00bfff;
  mask-image: url(/img/Venture%20Core_Transparent.svg);
  mask-repeat: no-repeat;
}
</style>