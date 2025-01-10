<script>
export default {
  data() {
    return{
      name: 'Billy',
      status: 'active',
      foods: ['eggs','chicken','avocado'],
      link: 'https://emnetpm.com'
    };
  },
  methods:{
    change(){
      if(this.status === 'active'){
        this.status = 'pending';
      }
      else if(this.status === 'pending'){
        this.status = 'inactive';
      }
      else{
        this.status = 'active';
      }
    }
  }
};
</script>
<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">is active</p>
  <p v-else-if="status === 'pending'">is pending</p>
  <p v-else=>Not active</p>
  <ul>
    <li v-for="food in foods" :key="food">{{ food }}</li>
  </ul>
  <a v-bind:href="link" >Emnetpm</a>
  <!-- you can also just use the colon with out having to write v-bind-->
  <hr>
  <button v-on:click="change">Change Status</button>
  <!-- you can also just put @click instead and it will function normally -->
</template>


<!-- compostion API shor method -->


<script setup>

import { ref } from 'vue';

    const name = ref('Billy');
    const status = ref('active');
    const foods = ref(['eggs','chicken','avocado']);
    const newFood = ref('');

    const change = () => {
      if(status.value === 'active'){
        status.value = 'pending';
      }
      else if(status.value === 'pending'){
        status.value = 'inactive';
      }
      else{
        status.value = 'active';
      }
    };

    const addFood = () => {
      if(newFood.value.trim() !== ''){
        foods.value.push(newFood.value);
        newFood.value = '';
      }
    };

</script>
<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">is active</p>
  <p v-else-if="status === 'pending'">is pending</p>
  <p v-else=>Not active</p>

  <form @submit.prevent="addFood">
    <label for="newFood">Add Food</label>
    <!-- The v-model property binds and input to a specific variable in the js  -->
    <input id = "newFood" type="text" name="newFood" v-model = "newFood">
    <button type="submit">Add</button>
  </form>

  <ul>
    <li v-for="food in foods" :key="food">{{ food }}</li>
  </ul>
  <a v-bind:href="link" >Emnetpm</a>
  <!-- you can also just use the colon with out having to write v-bind-->
  <hr>
  <button v-on:click="change">Change Status</button>
  <!-- you can also just put @click instead and it will function normally -->
</template>
