<script setup>
defineProps({
  example: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
  class="example-link"
  :to="{ name: 'example-details', params: { id: example.id } }">
  <div class="event-card">
    <h2>{{ example.id }}</h2>
    <span>{{ example.example }} </span>
  </div>
</RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>