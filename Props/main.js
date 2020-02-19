const states = [
  {
    id: 0,
    name: "Select State"
  },
  {
    id: 1,
    name: "Kansas"
  },
  {
    id: 2,
    name: "California"
  },
  {
    id: 3,
    name: "Florida"
  },
  {
    id: 4,
    name: "Texas"
  },
  {
    id: 5,
    name: "Oklahoma"
  }
];

Vue.component('select-component', {
  template: `
    <select>
      <option-component v-for="state in states"
        :key="state.id"
        :state="state">
      </option-component>
    </select>
  `,
  props: ['states']
});

Vue.component('option-component', {
  template: `
    <option>{{state.name}}</option>
  `,
  props: ['state']
});

new Vue({
  el: "#app",
  data: {states}
});