Vue.createApp({
    data() {
        return {
            nameUser: "hey",
            number: 0
        };
    },
    methods: {
        afficherNameUser() {
        console.log('fonction qui gere le NAME exécutée');
        if(this.nameUser ===''){
            return 'test'
        }
        else{
            return 'autre Test';        
        }
        },
        augmenter(num){
        this.number += num;
        },
        reduire(num){
            this.number -= num;
        },
    }
}).mount('#app');