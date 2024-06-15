<script lang="ts" setup>
import gsap from 'gsap';

const messageFromVenture = [
  "Good communication runs in our blood.",
  "We think from the client's perspective and speak your language, not just technical jargons.",
  "Be assured that every step of your project will be a ",
  "smooth",
  "transparent",
  "and happy experience.",
]

onMounted(() => {
  if (process.client) {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#communicationErrorDescription',
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom top', // end after scrolling 500px beyond the start
        toggleActions: 'play none none none',
        scrub: true,
        pin: "#communicationErrorDescription",
      }
    })

    //message show one by one when scrolling

    messageFromVenture.forEach((message, index) => {
      timeline.from(`#message${index}`, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        delay: index * 0.5
      })
    })

    timeline.from('#great-message', {
      duration: 0.5,
      opacity: 0,
      y: 50,
      delay: 0.5
    })

    timeline.from('#great-message', {
      duration: 0.5,
      delay: 0.5
    })

  }
});


</script>

<template>
  <!-- <div class="h-screen bg-black text-white flex justify-center items-center">
    <div class="text-center">
      Good communication runs in our blood. We think from the client's perspective and speak your language, not just
      technical jargons. Be assured that every step of your project will be a smooth, transparent, and happy experience.
    </div>

  </div> -->
  <div class="flex flex-col h-screen bg-gray-100" id="communicationErrorDescription">
    <header class="bg-black text-white flex items-center h-16 px-8 shadow">
      <div class="text-lg font-medium">Venture Core</div>
    </header>
    <div class="flex-1 overflow-auto p-6 space-y-6">
      <div class="flex items-start space-x-3" :id="`message${index}`" v-for="(message, index) in messageFromVenture">
        <span class="relative flex overflow-hidden rounded-full shrink-0 w-8 h-8 bg-gray-900">
          <img src="/img/Venture%20Core_Transparent.svg" alt="Avatar" />
          <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
        </span>
        <div class="bg-gray-900 text-white rounded-md px-3 py-2 max-w-[75%] text-sm">
          <p>{{ message }}</p>
        </div>
      </div>
      <div class="flex justify-end items-start space-x-3" id="great-message">
        <div class="bg-[#6625ff] rounded-md px-3 py-2 max-w-[75%] text-sm text-white">
          <p>Great!</p>
        </div>
        <span class="relative flex overflow-hidden rounded-full shrink-0 w-8 h-8 bg-white">
          <div class="flex items-center w-full justify-center">
            <svg width="24" height="24" fill="currentColor">
              <path fill-rule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clip-rule="evenodd" />
            </svg>
          </div>
        </span>
      </div>
    </div>
    <div class="bg-gray-100 p-2 border-t border-gray-300  flex items-center">
      <textarea
        class="flex min-h-[10px] h-10 w-full text-sm ring-offset-background placeholder:text-muted-foreground outline-none flex-1 rounded-2xl bg-white border border-gray-300 px-4 py-2 resize-none"
        placeholder="Type your message..." disabled></textarea>
      <button
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="w-5 h-5 text-blue-500">
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style></style>