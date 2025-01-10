<script setup>

import router from '@/router';
import { reactive, onMounted } from 'vue';
import {useRoute} from 'vue-router';
import {useToast} from 'vue-toastification';
import axios from 'axios';

const route = useRoute();


const eventId = route.params.id;

const form = reactive({
    type: 'Full-Time',
    title: '',
    description: '',
    fee: '',
    location: '',
    image: '',
    date: '',
    time: '',
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: ''
    }
});

const state = reactive({
    event: {},
    isLoading: true
});

const toast = useToast();

const handleSubmit = async () => {
    const updatedEvent = {
        title: form.title,
        type: form.type,
        location: form.location,
        description: form.description,
        fee: form.fee,
        image: form.image,
        date: form.date,
        time: form.time,
        company: {
            name: form.company.name,
            description: form.company.description,
            contactEmail: form.company.contactEmail,
            contactPhone: form.company.contactPhone,
        }
    };

    try{
  const response = await axios.put(`/api/events/${eventId}`, updatedEvent);
  toast.success('Event Updated Successfully');
  router.push(`/events/${response.data.id}`);
 } catch(error) {
  console.error('Error fetching event',error);
  toast.error('Event Was Not Updated');
 }
};

onMounted(async ()=> {
    try{
        const response = await axios.get(`/api/events/${eventId}`);
        state.event = response.data;
        form.type = state.event.type;
        form.title = state.event.title;
        form.description = state.event.description;
        form.fee = state.event.fee;
        form.location = state.event.location;
        form.image = state.event.image;
        form.date = state.event.date;
        form.time = state.event.time;
        form.company.name = state.event.company.name;
        form.company.description = state.event.company.description;
        form.company.contactEmail = state.event.company.contactEmail;
        form.company.contactPhone = state.event.company.contactPhone;
    } catch (error){
        console;error.error('Error fetching event', error);
    } finally{
        state.isLoading = false;
    }

})

</script>
<template>
    <section class="bg-green-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Edit Event</h2>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Event Type</label
              >
              <input
                type="text"
                v-model="form.type"
                id="type"
                name="type"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Festival"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Event Listing Name</label
              >
              <input
                type="text"
                v-model="form.title"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                v-model="form.description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any event descriptions, expectations, requirements, etc"
              ></textarea>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Entry Fee</label
              >
              <input
                type="text"
                v-model="form.fee"
                id="name"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 20$"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                v-model="form.location"
                id="location"
                name="location"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Date
              </label>
              <input
                type="text"
                v-model="form.date"
                id="date"
                name="date"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Aug,9"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Time
              </label>
              <input
                type="text"
                v-model="form.time"
                id="time"
                name="time"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="10:17"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Image URL
              </label>
              <input
                type="text"
                v-model="form.image"
                id="image"
                name="image"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="image"
              />
            </div>
            <h3 class="text-2xl mb-5">Company Info</h3>

            <div class="mb-4">
              <label for="company" class="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                v-model="form.company.name"
                id="company"
                name="company"
                class="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div class="mb-4">
              <label
                for="company_description"
                class="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                v-model="form.company.description"
                name="company_description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="contact_email"
                class="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                v-model="form.company.contactEmail"
                id="contact_email"
                name="contact_email"
                class="border rounded w-full py-2 px-3"
                placeholder="Email address for attendees"
                required
              />
            </div>
            <div class="mb-4">
              <label
                for="contact_phone"
                class="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                v-model="form.company.contactPhone"
                id="contact_phone"
                name="contact_phone"
                class="border rounded w-full py-2 px-3"
                placeholder="Optional phone for attendees"
              />
            </div>

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
</template>