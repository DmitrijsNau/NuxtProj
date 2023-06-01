<script setup lang="ts">
import Card from '@/components/Card.vue';
import type {Id} from '../types'

const cardId:Id = {IdA:'A',IdB:1}


</script>

<template>
  <main>
    <h1>Video Game Sorter</h1>
    <Card :title="'Test'" :content="'Passing this as a prop'" :id=cardId />
    
  </main>
</template>
