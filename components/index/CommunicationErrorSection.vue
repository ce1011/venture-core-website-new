<script setup lang="ts">
import gsap from 'gsap';
import type {IndexCommunicationErrorSectionEmojiSea} from "#components";

const initialTitle = "Headache talking to IT Vendors ?";
const secondaryTitle = "Not Here !";

const communicationErrorSectionTitle = ref(initialTitle);

const emojiSeaRef = ref<typeof IndexCommunicationErrorSectionEmojiSea>();

onMounted(() => {
  if (process.client) {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#communicationErrorSection',
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom top', // end after scrolling 500px beyond the start
        toggleActions: 'play none none none',
        scrub: true,
        pin: "#communicationErrorSection",
        anticipatePin: 1
      }
    })

    timeline.fromTo('#communicationErrorEmojiSea', {opacity: 0}, {opacity: 1, duration: 0.5});

    timeline.from('#communicationErrorSectionTitle', {
      duration: 0.5, delay: 0.25,
      'transform': 'scale(2.0)', 'opacity': 0, onComplete: () => {
          communicationErrorSectionTitle.value = secondaryTitle;
          emojiSeaRef.value?.turnToAllow();
      }, onReverseComplete: () => {
        communicationErrorSectionTitle.value = initialTitle;
        emojiSeaRef.value?.turnToBlock();
      },
    });

    timeline.from('#communicationErrorSectionTitle', {
      duration: 0.75,
    });
  }
});

//Calculate CSS for title, if it is initial title, then it will white color, otherwise it will be red color
const titleColor = computed(() => {
  let baseClass = "lg:text-8xl sm:text-5xl text-2xl font-semibold tracking-tight  whitespace-nowrap"

  if (communicationErrorSectionTitle.value === initialTitle) {
    return baseClass + " text-white"
  } else {
    return baseClass + " bg-gradient-to-r from-[#6625ff] to-[#06b6ff] to-danger bg-clip-text text-transparent"
  }
});
</script>

<template>
  <div class="py-24 bg-black min-h-screen flex justify-center items-center overflow-x-hidden overflow-y-hidden"
    id="communicationErrorSection">
    <div id="communicationErrorSectionScrollContainer">
      <dl class=" gap-x-8 gap-y-16  text-center">
        <IndexCommunicationErrorSectionEmojiSea id="communicationErrorEmojiSea" ref="emojiSeaRef" />
        <div :class="titleColor" id="communicationErrorSectionTitle">{{ communicationErrorSectionTitle }}
        </div>
      </dl>
    </div>
  </div>

</template>

<style scoped></style>
