<template>
  <div class="navBarLayout">
      <v-layout>
        <v-app-bar scroll-behavior="collapse">
          <v-app-bar-nav-icon />
          <v-app-bar-title>Testing Proper Project Structure</v-app-bar-title>
          <v-btn @click="toggleTheme">
            Mode
          </v-btn>
        </v-app-bar>
      </v-layout>
      <slot />
  </div>
</template>

<script>
import { useTheme } from 'vuetify'

export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
}
</script>

<style scoped>
</style>
