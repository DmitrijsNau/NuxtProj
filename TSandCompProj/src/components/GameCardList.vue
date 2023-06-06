<script setup lang='ts'>
import type {Game} from '@/types'
import GameCard from './GameCard.vue';
import {useFilterStore} from "@/stores/filter"

const props = defineProps<{
    games: Game[]
}>()

const store = useFilterStore()


</script>

<template>
    <div id="wrapper">
        <div v-for="game in games" >
            <GameCard :game="game" v-if="store.filterList.length===0 || store.filterList.includes(game.category)"/>
        </div>
    </div>
</template>