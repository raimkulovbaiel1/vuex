<script setup>
import Jobs from './components/Jobs.vue';
import Header from './components/Header.vue'; 
import { onMounted, ref } from 'vue'; 
 import {userStore} from "vue"
 
const store = userStore();
  
  const search = (e) => {
    filteredJobs.value = jobs.filter(item => item.title.tolowerCase().includes(e)) 
  } ;
   
  const filterByCondition = (Condition) =>{ 
    filteredJobs.value = jobs.filter(item => item.condition .includes(Condition))
  };
    
  const filterByTags = (tags) => { 
    filteredJobs.value = jobs.filter(item => 
    item.tad1.includes(tags) ||   
    item.tad2.includes(tags) || 
    item.tad3.includes(tags) || 
    item.tad4.includes(tags) 
    )
  };
   
   onMounted(() => { 
    store.commit ('setfilteredjobs')
   })
</script>

<template>
 
  <header @search="search" /> 
  <div class=" flex items-center flex-col"> 
   <span>{{ store.state.count }}</span> 
   <button class="bg-white" @click="store.commit('increment')" >clicr</button> 
   <button class="bg-white" @click="store.commit('increment',10)" >clicr 10</button> 
  </div>
  <main>
    <Jobs  
    @filterByTags="filterByTags"  
     />
  </main>
</template>
