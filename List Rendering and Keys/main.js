const app = new Vue({
    el: "#app",
    data: {
        groceries: [
            {id: 0, name: "Apples"},
            {id: 1, name: "Bananas"},
            {id: 2, name: "Oranges"},
            {id: 4, name: "Steak"},
            {id: 5, name: "French Fries"}
        ]
    },
    methods: {
        spillGroceries: function() {
            //_shuffle is from the lodash library
            this.groceries = _.shuffle(this.groceries);
        }
    }
});