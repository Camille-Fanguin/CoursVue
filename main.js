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
        showingList() {
            return this.showing = !this.showing;
        }
    }
}).mount('#app');