Vue.createApp({
    data() {
        return {
            hello: false,
            world: false,

            text1: '',
            text2: '',

            stateButton: false
        };
    },
    methods: {
        getFirstInput() {
            if(this.text1 == 'Hello') {
                this.hello = true;
            } else if (this.text1 == 'World') {
                this.world = true;
            } else {
                this.hello = false;
                this.world = false;
            }
        },
        buttonHide() {
            console.log(this.stateButton);
            this.stateButton = !this.stateButton;
        }
    }
}).mount('#app');