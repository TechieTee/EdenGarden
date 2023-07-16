<template>
    <header class="bg-white shadow h-16 flex justify-evenly items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5 text-green-500 font-bold"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'dogsByBreeds'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-green-500 hover:text-white">
     Search Dogs by Breeds
    </router-link>
       
      </div>
    </header>
  </template>
 

