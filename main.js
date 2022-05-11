Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            header: {
                title: 'Adelia Tresnani',
                desc: 'A student of Information Systems at Ahmad Dahlan University',
                imageProfile: "https://raw.githubusercontent.com/adeliat/tekweb2022/master/img/prof.jpg"
            },
            about: 'Someone who likes to organize and meet new people who add relationships and knowledge. She like new things because it makes herself challenged and want to know more. With the knowledge and abilities she currently has, she hopes to be able to help others and herself. The abilities she got so far are:',
            portofolio: [
                {
                    title: 'Web GIS Kelurahan Tambakbayan',
                    desc: 'Web GIS yang dikembangkan menggunakan Google Maps API',
                    image: 'https://images.unsplash.com/photo-1648937743864-5156661870f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                },
                {
                    title: 'Web Design',
                    desc: 'Perancangan web untuk mencakup bagaimana isi konten web ditampilkan',
                    image: 'https://images.unsplash.com/photo-1648937744938-8477b9d89ce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                },
                {
                    title: 'UI/UX Design',
                    desc: 'Desain antarmuka pengguna untuk aplikasi kesehatan',
                    image: 'https://images.unsplash.com/photo-1648937740668-160a34e98653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                }
            ]
        }
    }
}).mount('#app')

