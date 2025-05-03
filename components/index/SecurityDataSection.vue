<script lang="ts" setup>
import anime from 'animejs';
import gsap from 'gsap';
import FlickeringGrid from "~/components/utility/FlickeringGrid.vue";
import InteractiveGridPattern from "~/components/utility/InteractiveGridPattern.vue";

</script>

<template>
  <div class="bg-black" id="security-data-section">
    <div class="h-fit min:h-screen flex-col justify-center flex px-8">
      <h1 class="hidden-text text-white lg:text-9xl text-4xl tracking-tight font-bold">
        <span class="text-green-400">Security</span> First
      </h1>
      <h1 class="hidden-text text-white lg:text-9xl text-4xl tracking-tight font-bold lg:mt-4 mt-2">
        Worry-Free Use
      </h1>
      <div class="text-white mt-8 space-y-2 text-sm lg:text-base" id="security-data-description">
        <div> We prioritize security above all else, whether it's your data or our systems, even if it means higher
          costs.
        </div>
        <div> Our customized security strategies ensure your applications and systems are protected at the highest level
          at
          all times. </div>
        <div> From development to deployment, we meticulously monitor every step to ensure delivery is both
          fast
          and secure, giving you peace of mind.</div>
      </div>
    </div>

  </div>
</template>

<style></style>