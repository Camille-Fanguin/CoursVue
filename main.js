Vue.createApp({
    data() {
        return {
            random: ''
        };
    },
    methods: {
        randomTxt() {
            let randomness = Math.floor(Math.random() * 3);
            switch(randomness) {
                case 1:
                    this.random = "Hey i'm test 1";
                    break;
                case 2:
                    this.random = "Heyo i'm test 2";
                    break;
                case 3:
                    this.random = "Hello i'm test 3";
                    break;
                default:
                    this.random = "You are not supposed to see me. If you do, it's a bug"
                    break;
            }
        }
    }
}).mount('#app');