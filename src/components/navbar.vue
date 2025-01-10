<script setup>
import logo from '@/assets/img/logo.jpeg'
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath)=> {
  const route = useRoute();
  return route.path == routePath;
}

</script>

<template>
    <nav class="bg-neutral-800 border-b border-green-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="rounded-3xl h-10 w-auto" :src="logo" alt="Vue Events" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Santim Events</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[isActiveLink('/')? 'bg-green-400' : 'hover:bg-neutral-950 hover:text-white', 'text-white', 'px-3','py-2','rounded-md']"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/events"
                  :class="[isActiveLink('/events')? 'bg-green-400' : 'hover:bg-neutral-950 hover:text-white', 'text-white', 'px-3','py-2','rounded-md']"
                  >Events</RouterLink
                >    
                <RouterLink
                  to="/events/add"
                  :class="[isActiveLink('/events/add')? 'bg-green-400' : 'hover:bg-neutral-950 hover:text-white', 'text-white', 'px-3','py-2','rounded-md']"
                  >Add event</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>