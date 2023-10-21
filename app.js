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
const part1 = Vue.createApp({
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    methods: {
        handleEvent(e, data) {
            console.log(e);
            if (data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})
part1.mount('#part1')

const outPutList = Vue.createApp({
    data() {
        return {
            books: [
                {title: 'Etincelle', author: 'UAC', img: 'assets/imgs/e1.jpg', isFav: true},
                {title: 'Etincelle1', author: 'UAC1', img: 'assets/imgs/e2.jpg', isFav: true},
                {title: 'Etincelle2', author: 'UAC2', img: 'assets/imgs/e3.jpg', isFav: false}
            ]
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})
outPutList.mount('#outPutList')

const attributeBinding = Vue.createApp({
    data() {
        return {
            url: 'https://tiki.org/HomePage',
        }
    }
})
attributeBinding.mount('#attributeBinding')