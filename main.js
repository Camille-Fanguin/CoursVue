Vue.createApp({
    data() {
        return {
            selectCard1: false,
            selectCard2: false
        };
    },
    methods: {
        selectionCard(uneCard) {
            if(uneCard == 1) {
                this.selectCard1 = !this.selectCard1;
            } else if (uneCard == 2) {
                this.selectCard2 = !this.selectCard2;
            } 
        }
    }
}).mount('#app');