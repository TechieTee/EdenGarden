<template>
   <div class="max-w-[800px] mx-auto p-8">
     <span>Image Url:</span><h1 class="text-l font-bold mb-5 text-green-500">{{ dog.message }}</h1>
     <img :src="dog.message" :alt="dog-detailed-img" class="max-w-[100%]">
    
 
 
 
   </div>
 </template>
 
 <script setup>
 import { onMounted, ref } from 'vue'
 import { useRoute } from 'vue-router';
 import axiosClient from '../axiosClient';
 
 const route = useRoute();
 const dog = ref({})
 
 onMounted(() => {
   route.params
   axiosClient.get(`breed/pug/images/random`)
   .then(({data}) => {

      dog.value =  data
      console.log("first", data)
   })
 })
 
 </script>
 