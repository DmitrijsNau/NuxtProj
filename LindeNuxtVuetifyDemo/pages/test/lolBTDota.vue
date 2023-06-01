<script setup>
import useNavStore from '../../store/navStore'
import { storeToRefs } from 'pinia'

const store = useNavStore()
const { drawer } = storeToRefs(store)

const items = [
    {
        title: 'Example 1',
        description: 'This is my first example'
    },
    {
        title: 'Example 2',
        description: 'This is my second example'
    },
    {
        title: 'Example 3',
        description: 'This is the third example'
    }
]

const favGameToggle = {
    LoL: false,
    Dota: false,
}


</script>

<template>
<div>
    <v-app-bar :elevation="2">
        <v-app-bar-nav-icon @click.stop="store.toggleDrawer()"></v-app-bar-nav-icon>
        <v-app-bar-title>Why League of Legends is Better than Dota</v-app-bar-title>
        <nuxt-link to="/">
            <v-btn 
            class="mr-16"
            icon="mdi-alert-circle-outline">Secret Button!
            </v-btn>
        </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer temporary v-model="drawer">
            <p class="ma-6">Which game is better?</p>
            <v-checkbox v-model="favGameToggle.Dota" class="mx-6"  label="Dota"></v-checkbox>
            <v-checkbox v-model="favGameToggle.LoL" class="mx-6"  label="LoL"></v-checkbox>
            <v-card v-if="favGameToggle.Dota && !favGameToggle.LoL">
                <v-card-text>Wrong!</v-card-text>
            </v-card>
            <v-card v-if="favGameToggle.LoL && !favGameToggle.Dota">
                <v-card-text>Correct!</v-card-text>
            </v-card>
            <v-card v-if="favGameToggle.LoL && favGameToggle.Dota">
                <v-card-text>Not an option!</v-card-text>
            </v-card>
    </v-navigation-drawer>
    <v-expansion-panels class="my-16">
        <v-expansion-panel
          title="Point 1: You can kill your own minions in Dota?"
          text="Killing your own minions is very rude as they are on your team">
        </v-expansion-panel>
        <v-expansion-panel title="Point 2:">
            <v-expansion-panel-text>
                Teemo.
                <img src="../../assets/teemo.png"/>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-card
        title="One advantage Dota has:">
        <v-card-text>You can be a lumberjack and chop trees</v-card-text>
    </v-card>
</div>
</template>