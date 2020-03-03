<template>
  <div>
    <ChildComponent
      :numbers="numbers"
      @number-added="addNumber($event)"
    />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  name: "ParentComponent",
  data() {
    return {
      numbers: [1, 2, 3]
    };
  },
  components: {
    ChildComponent
  },
  methods: {
    addNumber(num) {
      this.numbers.push(num);
    }
  }
};
</script>