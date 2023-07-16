<template>
    <div class="p-8">
        <input type="text" v-model="keyword" 
        class="rounded border-2 border-grey-200 w-full" 
        placeholder="Search dogs by breeds..." 
        @change="searchDogs"/>
    </div>
    <div v-for="dog of dogs" :key="dog.message">
        <pre>{{ dogs }}</pre>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import store from '../store';
const keyword = ref('');

const dogs = computed(() => store.state.searchedDogs);

function searchDogs() {
store.dispatch('searchDogs', keyword.value)
}

</script> 