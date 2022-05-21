Vue.createApp({
  data() {
    return {
      message: "Halo Vue",
      article: [],
    };
  },
  methods: {
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
    },
    getTitle() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const article = urlParams.get('articles');
      var converter = new showdown.Converter();
      axios
        .get(
          src = "../contents/" + article
        )
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getArticles();
    this.getTitle();
  },
}).mount("#app");
