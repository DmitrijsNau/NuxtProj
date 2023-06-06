<script setup lang="ts">
import type { Id } from '../types'
import type { Game } from '@/types'

type Props = {
  game: Game
}
const props = defineProps<Props>()
</script>

<template>
  <div id="card">
    <div id="container" class="card">
      <h1>{{ game.id }}</h1>
      <p>{{ game.category }}</p>
      <p v-if="game.isFun">This is a good game</p>
      <p v-if="!game.isFun">This is a bad game</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #969696;
  margin: 10px;
  width: 350px;
  border-radius: 25px;
  padding: 5px;
}
</style>
