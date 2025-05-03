<script setup lang="ts">

import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="relative grid h-fit min:h-screen place-content-center overflow-hidden bg-black">
    <div class="container mx-auto px-4 mt-[10%]">
      <div class="text-5xl text-white">We make <UtilityContainerTextFlip :words="['Innovative', 'Creative', 'Cutting-Edge']"/> Digital Solutions</div>
      <div class="h-[100px]"/>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div class="p-6">
            <div class="flex space-x-3">
              <Icon
                  icon="logos:vue"
                  height="36"
              />
              <Icon
                  icon="logos:nuxt-icon"
                  height="36"
              />
              <Icon
                  icon="logos:tailwindcss-icon"
                  height="36"
              />
            </div>
          </div>

          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900">Website</h2>
            <p class="mt-2 text-gray-600">We craft stunning, responsive websites using Vue, Nuxt, and Tailwind CSS, ensuring seamless performance and modern design tailored to your brand.</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div class="p-6">
            <div class="flex space-x-3">
              <Icon
                  icon="logos:c-sharp"
                  height="36"
              />
              <Icon
                  icon="logos:nestjs"
                  height="36"
              />
              <Icon
                  icon="logos:typescript-icon"
                  height="36"
              />
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900">Customized System</h2>
            <p class="mt-2 text-gray-600">Our team builds robust, scalable systems with C#, NestJS, and TypeScript, delivering tailored solutions to streamline your business operations.</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div class="p-6">
            <div class="flex space-x-3">
          <Icon
              icon="logos:google-tag-manager"
              height="36"
          />
          <Icon
              icon="logos:google-analytics"
              height="36"
          />
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900">Search Engine Optimization</h2>
            <p class="mt-2 text-gray-600">Boost your online visibility with our SEO expertise, leveraging Google Tag Manager and Analytics to optimize performance and drive traffic.</p>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<style scoped>

</style>