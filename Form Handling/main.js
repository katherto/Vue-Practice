const app = new Vue({
    el: "#app",
    data: {
        studentName: "",
        studentEmail: "",
        studentClass: "",
        sessionDate: "",
        sessionLength: 0,
    },
    methods: {
        sendRequest: function() {
            alert(`Thank you ${this.studentName}.\n\nYour request for tutoring on ${this.sessionDate} for ${this.sessionLength} minutes has been sent for approval.\n\nWe will send confirmation of this session to ${this.studentEmail}`)
        }
    }
});