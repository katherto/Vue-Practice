<template>
  <div>
    <h2>{{ numbers }}</h2>
    <input v-model="number" type="number" />
    <button
      @click="$emit('number-added', Number(number))">
      Add new number
    </button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    numbers: Array
  },
  data() {
    return {
      number: 0
    };
  }
};
</script>

<style scoped>

input {
  width: 4em;
}

button {
  margin-left: 0.5em;
}

</style>