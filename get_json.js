Vue.createApp({
    data() {
      return {
        message: "Halo Vue",
        article: [],
      };
    },
    methods: {
      getArticles()
      {
        axios
          .get(
            src="https://raw.githubusercontent.com/adeliat/tekweb2022/main/contents/articles.json"
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
      this.getArticles()
    },
  }).mount("#app");
  