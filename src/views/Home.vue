<template>
<div class="flex p-8 justify-center">
    <pre>{{ dogs }}</pre>
<pre>{{ breeds }}</pre>
</div>
  </template>
  
  <script setup>
  import {computed, onMounted, ref} from 'vue'
import store from '../store';
import axiosClient from '../axiosClient.js'

  const dogs = computed(() => store.state.dogs)

  const breeds = ref([])
  
  onMounted(async () => {
   const response = await axiosClient.get('breeds/list/all')
   console.log("response", response.data)
   breeds.value = response.data
  })
  </script>
  