Vue.createApp({
    data() {
        return {
            detailsVisibles: false,
            
            lesAmis: [{
                id: '1',
                name: 'Test1',
                phone: '01 23 45 67 89',
                email: 'helloImTest@gmail.com'
            },{
                id: '2',
                name: 'Test2',
                phone: '09 87 65 43 21',
                email: 'helloImTestToo@gmail.com'
            }],
        };
    },
    methods: {
        toggleDetails() {
            return this.detailsVisibles = !this.detailsVisibles;
        }
    }
}).mount('#app');