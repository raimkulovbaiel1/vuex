<template>
  <div
    v-for="(job, i) in store.state.filteredJobs"
    :key="i"
    class="jobs__item bg-white px-[35px] py-[25px] flex items-center justify-between rounded"
  >
    <div class="flex gap-[26px] items-center">
      <img
        v-if="job.avatarUrl"
        :src="job.avatarUrl"
        alt="avatar-sample"
        class="rounded-full w-[100px] h-[100px]"
      />
      <img v-else src="../assets/avatar-sample.svg" alt="avatar-sample" />
      <div>
        <div class="flex gap-[13px] items-center">
          <span class="text-[#699B9A] text-[12px]">{{ job.company }}</span>
          <span
            v-if="job.featured"
            class="bg-[#323232] rounded-[25px] text-[#fff] text-[12px] px-[10px] py-[5px]"
          >
            FEATURED!
          </span>
        </div>
        <h2 class="text-[22px] mt-[7px] mb-[17px] leading-none">
          {{ job.title }}
        </h2>
        <Conditions :items="job.conditions" />
      </div>
    </div> 
    <Tags @filterByTags="filterByTags" :jobs="job"/>
    <ul class="flex gap-[20px]">
      <li class="bg-[#C4C4C4] text-[#699999] rounded-[5px] px-[5px]">
        Frontend
      </li>
      <li class="bg-[#C4C4C4] text-[#699999] rounded-[5px] px-[5px]">JS</li>
      <li class="bg-[#C4C4C4] text-[#699999] rounded-[5px] px-[5px]">VueJS</li>
      <li class="bg-[#C4C4C4] text-[#699999] rounded-[5px] px-[5px]">
        Tailwind CSS
      </li>
    </ul> 
   
  </div>
</template>

<script setup>
import Conditions from './Conditions.vue';
import Tags from './Tags.vue';
 import { useStore } from "vuex"
  
 const store = useStore() ;

 const emit = defineEmits() ;
 defineProps(['jobs']);
 
 const filterByTags = (Seitek) =>{ 
  emit("filterByTags", Seitek)
}


</script>
