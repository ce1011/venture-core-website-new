<script setup lang="ts">

import CommunicationErrorDescription from "~/components/index/CommunicationErrorDescription.vue";
import CommunicationErrorSection from "~/components/index/CommunicationErrorSection.vue";
</script>

<template>
  <div>
    <IndexHeroSection />
    <CommunicationErrorSection />
    <CommunicationErrorDescription />
    <IndexCustomerDataSection />
    <IndexSecurityDataSection />
    <LayoutFooter />
  </div>
</template>

<style scoped></style>