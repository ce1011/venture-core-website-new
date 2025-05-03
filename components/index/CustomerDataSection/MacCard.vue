<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  defaultPadding: boolean
}>();

const padding = props.defaultPadding ? 'p-6' : 'p-0'

</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden w-fit">
    <div class="flex items-center h-10 bg-gray-100 dark:bg-gray-800 px-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
    <div :class="padding">
      <slot></slot>
    </div>
  </div>
</template>

<style></style>