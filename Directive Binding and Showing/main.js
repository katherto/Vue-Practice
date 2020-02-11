const app = new Vue({
    el: "#app",
    data: {
        firstName: "Kevin",
        lastName: "Atherton",
        cityName: "Kansas",
        cityImage: "https://bit.ly/2Sdvl3r"
    },
    methods: {
        changeGreeting: function() {
            if (this.cityName === "Washington") {
                this.cityName = "Kansas";
                this.cityImage = "https://bit.ly/2Sdvl3r";
            } else {
                this.cityName = "Washington";
                this.cityImage = "https://bit.ly/2OnM2YU";
            }
        }
    }
});