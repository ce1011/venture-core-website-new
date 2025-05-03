<script setup lang="ts">
</script>

<template>
  <section class="relative isolate px-6 pt-14 lg:px-8 bg-transparent dark:from-gray-950 h-screen dark:to-gray-90">
    <div class="max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-left">
        <h1 class="text-3xl lg:text-6xl font-bold tracking-tight text-white dark:text-gray-50">
          THE <span
            class="text-3xl lg:text-6xl bg-gradient-to-r from-[#6625ff] to-[#06b6ff] to-danger bg-clip-text text-transparent ">VISIONARIES</span>
          OF
        </h1>
        <UtilityFlipword
            :words="['WEB', 'SOFTWARE', 'APP']"
            :duration="1500"
            class="lg:text-6xl font-bold tracking-tight text-white"
        />
      </div>
      <div class="text-left">
        <h1 class="text-3xl  lg:text-6xl font-bold tracking-tight text-white ">
          CREATION
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped></style>