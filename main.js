Vue.createApp({
    data() {
        return {
            listCourses: [],
            article: '',

            showing: false,
            stateList: 'Masquer la liste'
        };
    },
    methods: {
        addArticle() {
            return this.listCourses.push(this.article);
        },
        removeArticle(unIndex) {
            return this.listCourses.splice(unIndex, 1);
        },
        showingList() {
            if(this.showing == true) {
                this.stateList = 'Masquer la liste';
            } else {
                this.stateList = 'Afficher la liste';
            }
            return this.showing = !this.showing;
        }
    }
}).mount('#app');
