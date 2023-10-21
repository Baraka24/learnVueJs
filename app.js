const app = Vue.createApp({
    data() {
        return {
            title: 'Learn Vue JS',
            message: 'Mr.',
            author: 'Baraka Kinywa',
            age: 23
        }
    },
    methods: {
        increaseAge() {
            this.age++;
        },
        decreaseAge() {
            this.age--;
        },
        changeTitle(title) {
            //this.title = 'I have been changed';
            this.title = title;
        }
    },
});
app.mount('#app')
const appif = Vue.createApp({
    data() {
        return {
            status: true,
            text: 'I am a conditionnal text!',
            btnText: 'Hide Text'
        }
    },
    methods: {
        showText() {
            this.status = !this.status;
            /* if (this.status == true){
                this.btnText = 'Show Text'
                this.status = !this.status;
            }else{
                this.btnText = 'Hide Text'
                this.status = !this.status;
            } */
        }
    }
})
appif.mount('#appif')