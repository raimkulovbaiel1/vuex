<template>
  <ul class="flex gap-[22px] text-[#B6B6B6] text-[12px]">
    <li v-for="item in items" :key="item" class="cursor-pointer">{{ item }}</li>
  </ul>
</template>

<script setup>

defineProps(['items'])
</script>
