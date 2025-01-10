<script setup>
import hero from '@/components/hero.vue';
import homecards from '@/components/homecards.vue';
import eventlistings from '@/components/eventlistings.vue';
</script>

<template>
    <hero />
    <homecards />
    <eventlistings :limit="3" :showButton="true" />
</template>