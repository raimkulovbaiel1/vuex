<template>
    <header class="bg-[#755454] h-[150px] flex justify-center items-center">
    <label for="search" class="flex bg-white w-1/2 p-[5px] rounded">
      <img class="w-[30px]" src="./assets/search-icon.svg" alt="search-icon" />
      <input  v-model.trim="inputVal" type="text" placeholder="Поиск..." class="flex-1" id="search" />
    </label>
  </header>
</template> 
 
<script setup >    
  import { ref ,watch } from 'vue' 
  
  const inputVal = ref('') ;
  const emit = defineEmits();
    
     
    watch(inputVal, () => { 
        emit ('search', inputVal.value.toLowerCase());
    })
</script>