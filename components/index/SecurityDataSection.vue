<script lang="ts" setup>
import anime from 'animejs';
import gsap from 'gsap';
import FlickeringGrid from "~/components/utility/FlickeringGrid.vue";
import InteractiveGridPattern from "~/components/utility/InteractiveGridPattern.vue";
import ParticleImage from "~/components/utility/ParticleImage.vue";

</script>

<template>
  <div class="bg-black" id="security-data-section">
    <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-center px-8 py-3">
      <div class="content-center md:hidden">
        <ParticleImage
            image-src="/img/privacy-policy.png"
            :responsiveWidth="true"
            :particleGap="'4'"
            :color="'#4ade80'"
        />
      </div>
      <div class="flex-col justify-center flex px-8 md:py-0 py-32">
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
      <div class="content-center hidden md:block">
      <ParticleImage
          image-src="/img/privacy-policy.png"
          :responsiveWidth="true"
          :particleGap="'4'"
          :color="'#4ade80'"
      />
      </div>
    </div>
  </div>
</template>

<style></style>