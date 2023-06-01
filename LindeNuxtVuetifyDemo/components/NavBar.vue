<script setup>
import useNavStore from '../store/navStore'
const store = useNavStore()

</script>

<template>
    <v-app-bar :elevation="2">
        <v-app-bar-nav-icon @click.stop="store.toggleDrawer()"></v-app-bar-nav-icon>
        <v-app-bar-title>Nuxt 3/Vuetify 3 Demo</v-app-bar-title>
    </v-app-bar>
</template>
