// alert('hello');

const { createApp } = Vue;

createApp({
    data() {
        return {
            message: '',
            image: 'https://picsum.photos/300/200',
            altimage: 'random image',
        }

    },
}).mount('#message')