const information = {
  counter: 0
};

Vue.component('up-button', {
  template: `<input type="button" value="+" @click="$emit('count', 'up')">`,
});

Vue.component('down-button', {
  template: `<input type="button" value="-" @click="$emit('count', 'down')">`,
});

new Vue({
  el: "#app",
  data: {information},
  methods: {
    count(direction) {
      if (direction === 'up') {
        this.information.counter++;
      } else if (direction === 'down') {
        this.information.counter--;
      };
    }
  }
});