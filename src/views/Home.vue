

<template>
  
  <div class="p-8 pb-0 text-green-500">
   <img :src="breeds.message" alt="dogs-gallery" class="rounded-xl w-90 h-50 object-cover"/>
   <a :href="breeds.message"
    target="_blank"
    class="px-5 py-3 rounded text-white bg-green-500 hover:bg-green-600 transition-colors"
 
   >View Image</a>
  </div>
 
</template>
  
  <script setup>
  import {computed, onMounted, ref} from 'vue'
import store from '../store';
import axiosClient from '../axiosClient.js'

  const dogs = computed(() => store.state.dogs)

  const breeds = ref([])
  
  onMounted(async () => {
    // The commented Api should display a list of at least 100 dog images by default when they load the application. But this data is inconsistent.
  //  const response = await axiosClient.get('breeds/list/all')
  const response = await axiosClient.get('breeds/image/random')
   console.log("response", response.data)
   breeds.value = response.data
  })
  </script>
  