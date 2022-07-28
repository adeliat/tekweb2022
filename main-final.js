Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        article: [],
      };
    },
    methods:{    
        getHeaderData()
        {
          axios
            .get("https://raw.githubusercontent.com/adeliat/tekweb2022/main/header.json")
            .then((res) => {              
              this.header = res.data;
              this.getArticles();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getArticles() {
          axios
            .get(
              src = "https://raw.githubusercontent.com/adeliat/tekweb2022/main/contents/articles.json"
            )
            .then((res) => {
              console.log(res.data);
              this.article = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
    },
    beforeMount() {
        this.getHeaderData();
    }
  }).mount("#app");