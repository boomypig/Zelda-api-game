Vue.createApp({
  data() {
    return {
      monsters: "",
      description: "",
      tries: 0,
      guess_inp: "",
      answer: "",
      score: 0,
    };
  },
  methods: {
    getMonsters: async function () {
      let response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      );
      let data = await response.json();
      this.monsters = data.data[0].description;
      console.log(this.monsters);
    },
    submit_answer: function () {
      if (this.guess_inp == this.answer){
        this.score += 1
        this.tries = 0
      }else{
        this.tries += 1
      }
    }
  },
  created: function () {
    this.getMonsters();
  },
}).mount("#app");
