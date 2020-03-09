<template>
  <input type="button" value="+"
    @click="increaseCount()">
</template>

<script>
export default {
  name: 'IncreaseButton',
  methods: {
    increaseCount() {
      this.$store.dispatch("increase");
    }
  }
}
</script>

<style scoped>

</style>
