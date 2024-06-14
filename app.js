Vue.createApp({
  data() {
    return {
      monsters: "",
      description: "",
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
  },
  created: function () {
    this.getMonsters();
  },
}).mount("#app");
