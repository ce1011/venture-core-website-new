<script lang="ts" setup>
import anime from 'animejs/lib/anime.es.js';

onMounted(() => {
  anime({targets: '.data-square-up-to-down', translateY: anime.random(0,200), duration: 1500,delay: anime.stagger(10), loop: true, easing: 'cubicBezier(.5, .05, .1, .3)' })

  anime({targets: '.data-square-down-to-up', translateY: anime.random(0,-200), duration: 1500,delay: anime.stagger(10), loop: true, easing: 'cubicBezier(.5, .05, .1, .3)' })


});

</script>

<template>
  <div class="h-screen bg-black">
    <div class="grid grid-cols-1 lg:grid-cols-2 justify-center w-full h-screen px-4 py-3 lg:p-0">
      <div class="px-2 py-3 m-auto">
        <IndexCustomerDataSectionMacCard :defaultPadding="true">
          <!-- <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Your application
          </h5> -->
          <div class="flex w-36 items-center">
            <VentureLogo />
            <VentureCoreTypeface />
          </div>
        </IndexCustomerDataSectionMacCard>

        <div class="flex">
          <div class="data-square-up-to-down w-[10px] h-[10px] bg-blue-50 mt-4 mx-2" v-for="i in 15"></div>
        </div>

        <div class="flex h-[240px] items-end">
          <div class="data-square-down-to-up w-[10px] h-[10px] bg-blue-50 mt-4 mx-2" v-for="i in 15"></div>
        </div>

        <IndexCustomerDataSectionMacCard :defaultPadding="false">
          <img src="/img/ga4logo.webp" class="w-48" />
          <img src="/img/graph.svg" class="w-4" />
        </IndexCustomerDataSectionMacCard>
      </div>
      <div class="text-center px-6 mt-4 lg:m-auto">
        <h1 class="text-4xl font-bold text-white tracking-tight">Maximize Your Data from Day One</h1>
        <div class="text-gray-400 mt-4">
          We go the extra mile to effortlessly ensure your website or app is fully integrated with your existing
          analytics and advertising platforms. While other vendors overlook these critical connections, our team
          proactively handles the technical setup. This means you'll have valuable data and insights at your fingertips
          from the moment your project launches, empowering you to make informed decisions and optimize your digital
          marketing efforts.
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.glow {
  box-shadow: rgba(72, 135, 202, 0.8) 0 0 200px 50px;
}
</style>