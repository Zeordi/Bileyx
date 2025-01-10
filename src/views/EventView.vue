<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import backButton from '@/components/backButton.vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();

const router = useRouter();
const toast = useToast();

const eventId = route.params.id;

const state = reactive({
  event: {},
  isLoading: true
});

const deleteEvent = async () => {
  try{
    await axios.delete(`/api/events/${eventId}`);
    toast.success('Event Deleted Successfully');
    router.push('/events');
  } catch{
    console.error('Error deleting event', error);
    toast.error('Event Not Deleted');
  }
};

onMounted(async ()=> {
 try{
  const response = await axios.get(`/api/events/${eventId}`);
  state.event = response.data;
 } catch(error) {
  console.error('Error fetching event',error);
 } finally{
  state.isLoading = false;
 }
});



</script>

<template>
  <backButton />
    <section v-if="!state.isLoading" class="bg-green-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="pb-2">
                <img class="rounded-lg shadow-2xl" :src="state.event.image" alt="Event Image" />
              </div>
              <div class="text-gray-500 mt-2 mb-2">{{state.event.type}}</div>
              <h1 class="text-3xl font-bold mb-4">{{state.event.title}}</h1>
              <div class="text-gray-600 mb-3">
                <i class="pi pi-calendar text-gray-600"></i>
                {{ state.event.date }}
                <i class="pi pi-clock text-gray-600 ml-2"></i>
                {{ state.event.time }}
              </div>
              <div
                class="text-gray-500 mt-2 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  class="pi pi-map-marker text-xl text-orange-700 mr-2"
                ></i>
                <p class="text-orange-700">{{state.event.location}}</p>
                <p class="text-green-600 font-bold ml-9">${{state.event.fee}} / Person</p>
              </div>
            </div>
            

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Event Description
              </h3>

              <p class="mb-4">
                {{state.event.description}}
              </p>

            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{state.event.company.name}}</h2>

              <p class="my-2">
                {{state.event.company.description}}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">
                {{state.event.company.contactEmail}}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{state.event.company.contactPhone}}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Event</h3>
              <RouterLink
                :to="`/events/edit/${state.event.id}`"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Event</RouterLink
              >
              <button @click="deleteEvent"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Event
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <div v-else="state.isLoading" class="text-center text-gray-500 py-6" >
              <PulseLoader />
             </div>

</template>