<template>
  <div>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Nuxt 3/Vuetify 3 Demo</v-app-bar-title>
      <nuxt-link to="/test/lolBTDota">
        <v-btn class="mr-16" icon="mdi-alert-circle-outline"
          >Secret Button!
        </v-btn>
      </nuxt-link>
    </v-app-bar>
  </div>
</template>
