<template>
  <section
    class="jobs max-w-[1100px] mx-auto flex flex-col gap-[40px] py-[60px]"
  >
    <JobItem @filterByTags="filterByTags"  />
  </section>
</template>

<script setup>
import JobItem from "./JobItem.vue"
  
const emit = defineEmits()  

const filterByTags = (Seitek) =>{ 
  emit("filterByTags", Seitek)
}

</script>
