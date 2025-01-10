<script setup>
import card from '@/components/card.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <card>
            <h2 class="text-2xl font-bold">For Organizers</h2>
            <p class="mt-2 mb-4">
              Showcase your event and connect with attendees eager to participate.
            </p>
            <RouterLink
              to="/events/add"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Add Events
            </RouterLink>
          </card>
          <card bg="bg-green-400">
            <h2 class="text-2xl font-bold">For You</h2>
            <p class="mt-2 mb-4">
              Browse Events and Make Every Moment Memorable.
            </p>
            <RouterLink
              to="/events"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Events
            </RouterLink>
          </card>
        </div>
      </div>
    </section>

</template>