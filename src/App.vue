

<template>
<div class="bg-grey h-full">
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
      Home
    </router-link>
    <div class="flex items-center gap-1 ">
    <router-link :to="{name: 'dogsByBreeds'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-green-100">
     Search Dogs by Breeds
    </router-link>
   
  </div>
    </header>
    <main>
    <router-view/>
  </main>
</div>

</template>

<script setup>


</script>

<style scoped>

</style>
