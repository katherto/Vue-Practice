const app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue Practice!"
    },
    methods: {
        changeGreeting: function() {
            // this refers to the vue instance and changing the $data.message can be done either
            // with this.$data.message or this.message
            this.message = this.message === "Hello Vue Practice!" ?
            "App by Kevin Atherton!" :
            "Hello Vue Practice!";
        }
    }
});