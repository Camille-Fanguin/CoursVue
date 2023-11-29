Vue.createApp({
    data() {
        return {
            tap: "",
            echap: ""
        };
    },
    methods: {
        tapEvent(event) {
            console.log(event);
            this.tap = event.target.value;
        },
        echapEvent(event) {
            console.log(event);
            this.echap = event.target.value;
        },
        alertMsg() {
            return alert("Petite alerte: Hello World");
        }
    }
}).mount('#app');