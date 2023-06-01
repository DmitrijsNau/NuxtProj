<script setup lang="ts">
import { ref, onMounted } from 'vue'
import fetchCount from '../fetchCount'


const props = withDefaults(defineProps<{
    limit: number;
    alertMessageOnLimit?: string;
}>(), {
    alertMessageOnLimit: 'can not go any higher'
})

const count = ref<number | null>(null)

onMounted(function(){
  fetchCount(function(initialCount){
    count.value=initialCount
  })
})


function addCount(num: number){
  if( count.value!== null){
    if(count.value >= props.limit){
        alert(props.alertMessageOnLimit)
    }
    else{
    count.value +=num
    }
  }
}

</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>
    <button @click="addCount(1)">Add</button>
    </p>
  </div>

</template>