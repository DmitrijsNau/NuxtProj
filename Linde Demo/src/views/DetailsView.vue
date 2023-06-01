<script setup>
import { ref, onMounted } from 'vue'
import { useExampleStore } from '../stores/example'

const props = defineProps({
  id: {
    required: true,
    default: "1",
  },
})

function changeState(){
  store.changeId(props.id)
  alert("state has been updated with an id of: "+props.id)
}

const store = useExampleStore()

</script>

<template>
    <h1>This page was made passing data through props. This page is associated with card id: {{ id }}</h1>
    <br>
    <button @click="changeState">Update State</button>
</template>

<style scoped>
button{
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>