// No real page will use this instance as it's just my reference to the various Lifecycle Hooks of a Vue instance we have access to
const app = new Vue({
  el: "#app",
  data: { },
  // Create hooks run after the Vue instance has been initialized and before the instance is mounted to the DOM
  beforeCreate() { },
  created() { },
  // Mount hooks run as the Vue instance is mounted to the DOM, which can also be achieved with a statement vm.$mount("#el");
  beforeMount() { },
  mounted() { },
  // Update hooks run as there is a change within the Virtual DOM
  beforeUpdate() { },
  updated() { },
  // Destroyed hooks do not automatically run when the Vue instance is created but rather when the vm.$destroy() method is called
  beforeDestroyed() { },
  destroyed() { }
});