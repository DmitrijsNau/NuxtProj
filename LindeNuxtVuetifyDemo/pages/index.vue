<script setup>
import useNavStore from '../store/navStore'
import { storeToRefs } from 'pinia'

const store = useNavStore()
const { drawer } = storeToRefs(store)

const items = [
    {
        title: 'Example 1',
        description: 'These paths probably should not be hardcoded if this app mattered',
        path:'/page1'
    },
    {
        title: 'Example 2',
        description: 'This is my second example',
        path:'/page2'
    },
    {
        title: 'Example 3',
        description: 'This is the third example',
        path:'/page3'
    }
]

</script>

<template>
<div>
    <v-app-bar :elevation="2">
        <v-app-bar-nav-icon @click.stop="store.toggleDrawer()"></v-app-bar-nav-icon>
        <v-app-bar-title>Nuxt 3/Vuetify 3 Demo</v-app-bar-title>
        <nuxt-link to="/test/lolBTDota">
            <v-btn 
            class="mr-16"
            icon="mdi-alert-circle-outline">Secret Button!
            </v-btn>
        </nuxt-link>
    </v-app-bar>
    <v-navigation-drawer temporary v-model="drawer">
        <v-list lines="one">
            <v-list-item
            v-for="item in items"
            :key="item.title">
                <nuxt-link :to=item.path>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
                </nuxt-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <div class="d-flex align-center flex-column">
        <v-card
        class="my-16"
        width="500px"
        height="200px"
        title="Example 1"
        subtitle="This is a subtitle"
        text="This is content"
        >
        </v-card>
        <v-card
        class="my-0"
        width="500px"
        height="200px"
        title="Example 2"
        subtitle="This is a subtitle"
        text="This is content"
        >
        </v-card>
    </div>
</div>
</template>
