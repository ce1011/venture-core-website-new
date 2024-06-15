<script lang="ts" setup>
import anime from 'animejs';
import gsap from 'gsap';

let lockPattern = 
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

onMounted(() => {
  var animateLockPattern = anime({targets: '.lock-square-shape', translateY: -5, duration: 2000,delay: anime.stagger(10), loop: true, direction: 'alternate', easing: 'cubicBezier(.5, .05, .1, .3)' })

  //Stagger Animation of hidden-text by GSAP, animation start when the element enter view port, lock-pattern will appear first, then hidden-text will appear while the lock-pattern faded out
  if (process.client) {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#security-data-section',
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: 'bottom top', // end after scrolling 500px beyond the start
        toggleActions: 'play none none none',
        scrub: true,
        pin: "#security-data-section",
        anticipatePin: 1
      }
    })

    // timeline.fromTo('.lock-pattern', {opacity: 0}, {opacity: 1, duration: 0.5});
    // timeline.to('.lock-pattern', {opacity: 0, duration: 0.5})
    timeline.from('.hidden-text', {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.5
    });

    timeline.fromTo('#security-data-description', {opacity: 0}, {opacity: 1, duration: 0.5})

    // gsap.from('.hidden-text', {
    //   scrollTrigger: {
    //     trigger: '.hidden-text',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'play none none none',
    //     scrub: true,
    //   },
    //   duration: 1,
    //   opacity: 0,
    //   y: 50,
    //   stagger: 0.5
    // });

  }


});

function lockPatternColor(i: number, j: number) {
  return lockPattern[i][j] === 1 ? 'lock-square-shape bg-gradient-to-r from-[#6625ff] to-[#06b6ff]' : 'lock-square-bg bg-gray-300'
}
</script>

<template>
  <div class="bg-black" id="security-data-section">
    <!-- <div class=" absolute inset-1/4 lock-pattern">
      <div class="flex" v-for="(i,index) in lockPattern">
        <div class="w-[10px] h-[10px] mx-1 my-1 rounded-xl" v-for="j in 30" :class="lockPatternColor(index,j)">
        </div>
      </div>
    </div> -->
    <div class="h-screen flex-col justify-center flex px-8">
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