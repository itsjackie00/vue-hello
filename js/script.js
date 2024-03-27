// alert('hello');

const { createApp } = Vue;

const testo = createApp({
    data() {
        return {
            message: '',
            image: 'https://picsum.photos/300/200',
            altimage: 'random image',
        }

    },
}).mount('#message')