Vue.createApp({
    data() {
        return {
            
        };
    },
    methods: {
        tapEvent() {
            para = document.querySelectorAll('p');
            input = document.querySelectorAll('input');
            para[0].textContent = input[0].value;
        },
        echapEvent() {
            para = document.querySelectorAll('p');
            input = document.querySelectorAll('input');
            para[1].textContent = input[1].value;
        },
        alertMsg() {
            return alert("Petite alerte: Hello World");
        }
    }
}).mount('#app');