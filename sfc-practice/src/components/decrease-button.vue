<template>
  <input type="button" value="-"
    @click="decreaseCount()">
</template>

<script>
export default {
  name: 'DecreaseButton',
  methods: {
    decreaseCount() {
      this.$store.dispatch("decrease");
    }
  }
}
</script>

<style scoped>

</style>
