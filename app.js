Vue.createApp({
  data() {
    return {
      monsters: "",
      description: "",
      rIndex: 0,
      guess: "",
      score: 0,
      monster_list: {
        answer: "",
        questions_list: [],
      },
    };
  },
  methods: {
    getDescriptionAnswer: async function () {
      let response = await fetch(
        "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
      );
      let data = await response.json();
      this.monsters = data.data;

      this.rIndex = Math.floor(Math.random() * this.monsters.length);
      this.rIndex2 = Math.floor(Math.random() * this.monsters.length);
      this.rIndex3 = Math.floor(Math.random() * this.monsters.length);
      this.rIndex4 = Math.floor(Math.random() * this.monsters.length);

      this.description = this.monsters[this.rIndex].description;

      this.monster_list.answer = this.monsters[this.rIndex].name;
    
      this.answer2 = this.monsters[this.rIndex2].name;
      this.answer3 = this.monsters[this.rIndex3].name;
      this.answer4 = this.monsters[this.rIndex4].name;

      this.monster_list.questions_list.push(this.monster_list.answer);

      this.monster_list.questions_list.push(this.answer2);
      this.monster_list.questions_list.push(this.answer3);
      this.monster_list.questions_list.push(this.answer4);

      for (let i = this.monster_list.questions_list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = this.monster_list.questions_list[i];
        this.monster_list.questions_list[i] = this.monster_list.questions_list[j];
        this.monster_list.questions_list[j] = temp;
      }
    },


    submit_answer: function () {
      if (this.monster_list.answer == this.guess) {
        this.score += 1;
        this.monster_list.questions_list = []
        this.monster_list.answer = ""
        this.getDescriptionAnswer();
      } else {

      }
      console.log(this.monster_list.answer);
      console.log(this.guess)
    },
  },

  created: function () {
    this.getDescriptionAnswer();
  },
}).mount("#app");
