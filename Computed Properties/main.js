const app = new Vue({
    el: "#app",
    data: {
        seconds: 0
    },
    computed: {
        hours: {
            get() {
                return this.seconds / 3600;
            },
            set(newVal) {
                this.seconds = newVal * 3600;
            }
        },
        days: {
            get() {
                return this.seconds / 86400;
            },
            set(newVal) {
                this.seconds = newVal * 86400;
            }
        },
        years: {
            get() {
                return this.seconds / 31536000;
            },
            set(newVal) {
                this.seconds = newVal * 31536000;
            }
        }
    }
});