Vue.createApp({
    data() {
        return {
            listCourses: [],
            article: '',

            showing: false
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
            return this.showing = !this.showing;
        }
    }
}).mount('#app');
