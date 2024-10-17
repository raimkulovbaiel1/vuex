<template>
    <ul class="flex gap-[20px]"> 
        <li v-for="i in [1,2,3,4]" :key="i" class="bg-[#C4C4C4] text-[#699999] rounded -[5px] px-[5px] "> 
         {{job['tag' + i] }}
        </li>   
    </ul>   
</template> 
 
<script setup >   

  defineProps(['job'])
</script>