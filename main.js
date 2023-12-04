Vue.createApp({
    data() {
        return {
            number: 0,
            text: "Trouve le nombre mystère",
            mystery: Math.floor(Math.random()*25),
            tour: 0
        };
    },
    methods: {
        addOne() {
            return this.number += 1;
        },
        addFive() {
            return this.number += 5;
        },
        addTour() {
            return this.tour += 1;
        }
    },
    watch:{
            number(value) {
            if(this.number < this.mystery) {
                return this.text = "Essaye encore";
            } else if (this.number == this.mystery) {
                return this.text = "BINGO! " + this.number + " était le nombre mystère!";
            } else if (this.number > this.mystery) {
                return this.text = "Tu as dépassé le nombre mystère..";
            }
        }
    }
}).mount('#app');
