Vue.createApp({
  data() {
    return {
      monsters: "",
      description: "",
      rIndex: 0,
      tries: 0,
      guess_inp: "",
      answer: "",
      score: 0,
    };
  },
  methods: {
    getMonsterDescription: async function () {
      let response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      );
      let data = await response.json();
      this.monsters = data.data;

      this.rIndex = Math.floor(Math.random() * this.monsters.length);
      this.description = this.monsters[this.rIndex].description;
      console.log(this.monster[this.rIndex].name);
    },
    submit_answer: function () {
      if (this.guess_inp == this.answer) {
        this.score += 1;
        this.tries = 0;
      } else {
        this.tries += 1;
      }
    },
  },

  created: function () {
    this.getMonsterDescription();
  },
}).mount("#app");
