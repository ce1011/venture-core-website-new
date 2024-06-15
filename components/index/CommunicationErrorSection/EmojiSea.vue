@ -0,0 +1,64 @@
<script setup lang="ts">
const emojis = ['💬', '🧑‍💻', '🗣']

function randomEmoji() {
  // return emojis[Math.floor(Math.random() * emojis.length)]
  return '💬';
}

//

const emojiState = ref<boolean>(false);

function blockAllowEmoji() {
  if (emojiState.value) {
    return "😆"
  } else {
    return "🤯"
  }
}

const turnToAllow = function () {
  emojiState.value = true;
}

const turnToBlock = function () {
  emojiState.value = false;
}

defineExpose({
  turnToAllow,
  turnToBlock
});
</script>

<template>
  <div class="text-white overflow-x-hidden">
    <div class="absolute top-20 -left-6 p-2 text-8xl md:text-9xl">{{blockAllowEmoji()}}</div>
    <div class="absolute top-16 md:left-[30rem] sm:left-[20rem] right-2 p-2 text-8xl">
      {{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute top-36 left-[48rem] p-2 text-7xl">{{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute top-10 right-96 p-2 text-7xl">{{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute top-4 right-52 transform p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="hidden sm:inline-block absolute top-28 -right-2 p-2 text-9xl">{{blockAllowEmoji()}}</div>
    <div class="absolute top-[16rem] left-24 p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="absolute bottom-1/3 right-4 p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="hidden md:inline-block absolute bottom-1/4 left-28 p-2 text-8xl">{{blockAllowEmoji()}}</div>
    <div class="absolute bottom-12 left-0 md:left-12 p-2 text-8xl">{{blockAllowEmoji()}}</div>
    <div class="hidden sm:inline-block absolute -bottom-4 left-1/4 p-2 text-9xl">{{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute bottom-40 left-[40rem] p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute bottom-12 right-[40rem] p-2 text-8xl">{{blockAllowEmoji()}}</div>
    <div class="absolute bottom-1/4 right-[30rem] p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="hidden lg:inline-block absolute -bottom-8 right-80 p-2 text-9xl">{{blockAllowEmoji()}}</div>
    <div class="absolute bottom-8 right-28 p-2 text-6xl">{{blockAllowEmoji()}}</div>
    <div class="absolute bottom-52 sm:bottom-40 right-48 p-2 text-8xl">{{blockAllowEmoji()}}</div>
  </div>
</template>

<style scoped>
.custom-position {
  position: absolute;
}
</style>