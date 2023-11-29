Vue.createApp({
    data() {
        return {
            text: 'test'
        };
    },
    methods: {
        randomTxt() {
            let randomness = Math.floor(Math.random() * 4);
            switch(randomness) {
                case 0:
                    this.text = "I'm test 0";
                    break;
                case 1:
                    this.text = "Hey i'm test 1";
                    break;
                case 2:
                    this.text = "Heyo i'm test 2";
                    break;
                case 3:
                    this.text = "Hello i'm test 3";
                    break;
                default:
                    this.text = "You are not supposed to see me. If you do, it's a bug"
                    break;
            }
            return this.text;
        }
    }
}).mount('#app');