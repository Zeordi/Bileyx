<script setup>
import { defineProps, ref, computed} from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    event: Object
});

const showFullDescription = ref(false);

const toggleFullDescription = () =>{
  showFullDescription.value = !showFullDescription.value;
}

const truncatedDescription = computed(() =>{
  let description = props.event.description;
  if(!showFullDescription.value){
    description = description.substring(0, 90) + '...';
  }
  return description
});

</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
            <div class="pb-2">
              <img class="w-full h-48 object-cover rounded-lg shadow-2xl" :src="event.image" alt="Event Image" />
            </div>
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ event.type }}</div>
                <h3 class="text-xl font-bold">{{ event.title }}</h3>
              </div>

              <div class="mb-5">
                <div>
                  {{ truncatedDescription }}
                </div>
                <button @click="toggleFullDescription" class="text-green-500 hover:text-green-600 mb-5">
                  {{ showFullDescription ? 'Less' : 'More'}}
                </button>
              </div>

              <h3 class="text-green-500 mb-2">${{ event.fee }} / Person</h3>

              <div class="border border-gray-100 mb-5"></div>
              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-gray-600 mb-3">
                  <i class="pi pi-calendar text-gray-600"></i>
                  {{ event.date }}
                  <i class="pi pi-clock text-gray-600 ml-2"></i>
                  {{ event.time }}
                </div>
                
                <RouterLink
                  :to="'/events/' + event.id"
                  class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </RouterLink>  
              </div>
              <div class="text-orange-700 mb-3">
                  <i class="pi pi-map-marker text-orange-700"></i>
                  {{ event.location }}
                </div>
            </div>
          </div>
</template>