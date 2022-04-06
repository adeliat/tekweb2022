Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            header: {
                title: 'Adelia Tresnani',
                desc: 'A student of Information Systems at Ahmad Dahlan University.',
                imageProfile: "https://raw.githubusercontent.com/adeliat/tekweb2022/master/img/prof.jpg"
            },
            about: 'Someone who likes to organize and meet new people who add relationships and knowledge. I like new things because it makes myself challenged and want to know more. With the knowledge and abilities she currently has, she hopes to be able to help others and herself.',
            portofolio: [
                {
                    title: 'Card 1',
                    desc: 'This is card 1',
                    image: 'https://images.unsplash.com/photo-1648937743864-5156661870f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                },
                {
                    title: 'Card 2',
                    desc: 'This is card 2',
                    image: 'https://images.unsplash.com/photo-1648937744938-8477b9d89ce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                },
                {
                    title: 'Card 3',
                    desc: 'This is card 3',
                    image: 'https://images.unsplash.com/photo-1648937740668-160a34e98653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                },
                {
                    title: 'Card 4',
                    desc: 'This is card 4',
                    image: 'https://images.unsplash.com/photo-1648937737969-26d3f0df1e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

                }
            ]
        }
    }
}).mount('#app')
