<script setup>
import { ref, onMounted } from 'vue'
import ExampleCard from '@/components/ExampleCard.vue'
import EventService from '@/services/ExampleService.js'
import useExampleStore from "@/stores/example"

const examples = ref(null)

const store=useExampleStore()

onMounted(() => {
  EventService.getExamples()
    .then((response) => {
      examples.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

function flashMessage(){
  if(store.currId){
    alert("Current set id is: "+ store.currId)
  } else {
    alert('No current state stored!')
  }
  
}

function clearState(){
  store.currId=''
  alert("State has been cleared.")
}
</script>

<template>
  <div class="examples">
    <ExampleCard v-for="example in examples" :key="example.id" :example="example" />
    <button class="button1" @click="flashMessage">Check State</button>
    <button class="button2" @click="clearState">Clear State</button> 
  </div>     


  
</template>

<style scoped>
.examples {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button1{
  padding: 10px;
  margin-bottom: 18px;
}
.button2{
  padding: 10px;
  margin-bottom: 18px;
}
</style>
