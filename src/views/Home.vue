<template>
<div class="flex p-8 justify-center">
    <pre>{{ dogs }}</pre>
<input type="text" class="rounded border-2 border-grey-200 w-full" placeholder="Search dogs by breeds...">
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
   const response = await axiosClient.get('/random')
   console.log(response.data)
   breeds.value = response.data
  })
  </script>
  