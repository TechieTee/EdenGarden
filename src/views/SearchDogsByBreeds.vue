<template>
   
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" 
        class="rounded border-2 border-grey-200 w-full" 
        placeholder="Search dogs by breeds... eg African, Boxer, Pug, Bulldog, Puggle, etc" 
        @change="searchDogs"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
    <div v-for="(dog, dogs) in dogs" :key="dogs" class="bg-white shadow rounded-xl">
  <img :src="dog" alt="" class="rounded-t-xl w-full h-50 object-cover"/>
<div class="p-4">
    <a :href="dogs[0]"
    target="_blank">
{{keyword}} dog details
</a></div>
<!-- <a :href="breeds.message"
    target="_blank"
   
   >View Image</a> -->
    </div>
    </div>
</template>
<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import {useRoute} from 'vue-router';
import store from '../store';

const route = useRoute();
const keyword = ref('');

const dogs = computed(() => store.state.searchedDogs);

function searchDogs() {
store.dispatch('searchDogs', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.breeds
  if (keyword.value) {
    searchDogs()
  }
})
</script> 