<template>
  <div id="app">
    <CounterDisplay />
    <DecreaseButton />
    <IncreaseButton />
  </div>
</template>

<script>
import CounterDisplay from './components/counter-display.vue'
import DecreaseButton from './components/decrease-button.vue'
import IncreaseButton from './components/increase-button.vue'

export default {
  name: 'App',
  components: {
    CounterDisplay,
    DecreaseButton,
    IncreaseButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  font-size: 150%;
  min-width: 1.5em;
}

input:first-of-type {
  margin-right: 0.5em;
}
</style>
