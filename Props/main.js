const states = [
  {
    id: 0,
    name: "Kansas"
  },
  {
    id: 1,
    name: "California"
  },
  {
    id: 2,
    name: "Florida"
  },
  {
    id: 3,
    name: "Texas"
  },
  {
    id: 4,
    name: "Oklahoma"
  }
];

Vue.component('h1-component', {
  template: `
    <h1>{{state.name}}</h1>
  `,
  props: ['state']
});

new Vue({
  el: "#app",
  data: {states}
});