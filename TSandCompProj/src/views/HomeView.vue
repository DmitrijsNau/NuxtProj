<script setup lang="ts">
import Card from '@/components/Card.vue';
import type {Id} from '../types'
import { onMounted, ref } from 'vue';
import gameService from '@/services/getGameService'
import {useFilterStore} from '@/stores/filter'
import GameCardList from '@/components/GameCardList.vue';
import type { Game } from '../types';


onMounted(() => {
  gameService.getGames()
    .then((response) => {
      games.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

const cardId:Id = {IdA:'A',IdB:1}

const games = ref()

const store = useFilterStore()

let listKey = ref(0)

function updateKey(){listKey+=1}

</script>

<template>
  <main>
    <h1>Video Game Sorter</h1>
      <Card :title="'Test'" :content="'Passing this as a prop'" :id=cardId />
      <br>
      <br>
      <br>
      <div class="checkboxes" @click="store.addFilters() + updateKey()">
        <input type="checkbox" class="checkbox" v-model="store.filters.FPS" />
        <label for="checkbox">FPS</label>
        <input type="checkbox" class="checkbox" v-model="store.filters.Moba" />
        <label for="checkbox">Moba</label>
        <input type="checkbox" class="checkbox" v-model="store.filters.RTS" />
        <label for="checkbox">RTS</label>
        <input type="checkbox" class="checkbox" v-model="store.filters.OpenWorld" />
        <label for="checkbox">Open World</label>
        <button @click="store.clearFilters">Search</button>
      </div> 
      <GameCardList :games="games" :key="listKey"/>
  </main>
</template>

<style scoped>
.checkbox{
  margin: 8px
}
.checkboxes{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 4px solid #969696;
  margin: 10px;
  width: 350px;
}

button{
  margin: 4px;
}
</style>
