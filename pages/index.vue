<script setup lang="ts">

import CommunicationErrorDescription from "~/components/index/CommunicationErrorDescription.vue";
import CommunicationErrorSection from "~/components/index/CommunicationErrorSection.vue";
import BusinessFocusSection from "~/components/index/BusinessFocusSection.vue";
import ContactUsSection from "~/components/index/ContactUsSection.vue";

useSeoMeta({
  title: "Venture Core"
})
</script>

<template>
  <div>
    <IndexHeroSection />
    <CommunicationErrorSection />
    <CommunicationErrorDescription />
    <BusinessFocusSection/>
    <IndexCustomerDataSection />
    <IndexSecurityDataSection />
    <ContactUsSection/>
    <LayoutFooter />
  </div>
</template>

<style scoped></style>