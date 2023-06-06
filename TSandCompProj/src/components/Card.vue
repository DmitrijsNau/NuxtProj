<script setup lang='ts'>
  import type {Id} from '../types'
     
  type Props={
      title: string
      content: string | number
      id: Id
    }
  const props = defineProps<Props>()

</script>

<template>
    <div id="card">
        <div id="container">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <p>Using type, the id of this card is: {{id.IdA}} and {{id.IdB}}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-width: 16px;
    border-color: rgb(79, 14, 153);
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
</style>
