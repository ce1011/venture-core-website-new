<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
const div3Ref = ref(null);
const div4Ref = ref(null);
const div5Ref = ref(null);
const div6Ref = ref(null);
const div7Ref = ref(null);

</script>

<template>
  <div class="min-h-screen bg-black">
    <div class="grid grid-cols-1 lg:grid-cols-2 justify-center w-full h-fit px-4 py-3 lg:p-0">
      <ClientOnly>
        <div
            ref="containerRef"
            class="relative flex h-[650px] lg:h-[900px] w-full items-center justify-center overflow-hidden rounded-lg p-10 md:shadow-xl m-auto"
        >
          <div
              class="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10"
          >
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div1Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
              >
                <Icon
                    icon="logos:google-analytics"
                    height="24"
                />
              </div>
              <div
                  ref="div5Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <Icon
                    icon="logos:segment-icon"
                    height="24"
                />
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div2Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
              >
                <Icon
                    icon="logos:meta-icon"
                    height="24"
                />
              </div>
              <div
                  ref="div4Ref"
                  class="z-10 flex size-20 items-center justify-center rounded-full border-2 bg-white p-2 text-black shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <VentureLogo/>
              </div>
              <div
                  ref="div6Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <Icon
                    icon="logos:mongodb-icon"
                    height="24"
                />
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div
                  ref="div3Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
              >
                <Icon
                    icon="logos:whatsapp-icon"
                    height="24"
                />
              </div>
              <div
                  ref="div7Ref"
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
              >
                <Icon
                    icon="logos:messenger"
                    height="24"
                />
              </div>
            </div>
          </div>

          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div1Ref"
              :to-ref="div4Ref"
              :curvature="-75"
              :end-y-offset="-10"
              :path-width="6"
              :reverse="true"
          />
          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div2Ref"
              :to-ref="div4Ref"
              :path-width="6"
              :reverse="true"
          />
          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div3Ref"
              :to-ref="div4Ref"
              :curvature="75"
              :end-y-offset="10"
              :path-width="6"
              :reverse="true"
          />
          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div5Ref"
              :to-ref="div4Ref"
              :curvature="-75"
              :end-y-offset="-10"
              :path-width="6"
              :reverse="true"
          />
          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div6Ref"
              :to-ref="div4Ref"
              :path-width="6"
              :reverse="true"
          />
          <UtilityAnimateBeam
              :container-ref="containerRef"
              :from-ref="div7Ref"
              :to-ref="div4Ref"
              :curvature="75"
              :end-y-offset="10"
              :path-width="6"
              :reverse="true"
          />
        </div>
      </ClientOnly>
      <div class="text-center px-6 mt-4 lg:m-auto">
        <h1 class="text-4xl font-bold text-white tracking-tight"><UtilityTextHighlight class="bg-gradient-to-r from-[#6625ff] to-[#06b6ff]" :duration="2">Maximize</UtilityTextHighlight> Your Data from Day One</h1>
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