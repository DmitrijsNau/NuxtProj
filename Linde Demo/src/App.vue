<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data () {
    return {
      submission : ''
    }
  },
  methods : {
    changeSubmission(input){
      this.submission="you pressed the button!"
    }
  }
}
</script>

<template>
  <div id="layout">
  <header>
    <div class="wrapper">
      <img alt="logo" class="logo" src="@/assets/lindelogo.png"  />
      <h1>Dima's Vue 3 Showcase</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink :to="{name: 'secondView'}">Second View</RouterLink>
      </nav>
    </div>
    <form @submit.prevent="changeSubmission">
    <label>Test Storing Data:  
    <input
      v-model="submission"
      type="text"
      placeholder="Input text here"
      class="field"
    >
    </label>
    <button>Click this button</button>
    </form>
    <h3 v-if="submission">{{submission}}</h3>
  </header>
  <RouterView />

</div>
</template>

<style scoped>

.logo {
  margin: 10 auto 2rem;
  width: 200px;
  height: auto;
  justify-content: center;
  display: flex;
}
.h1{
  text-align: center;
}
#layout{
  display: flex;
  justify-content: center;
}
.wrapper{
  padding: 10px;
}
</style>
