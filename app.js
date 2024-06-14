Vue.createApp({
  data() {
    return {
      monsters: "",
      description: "",
      rIndex: 0,
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
      this.description = this.monsters[this.rIndex].description
      console.log(this.description);

    },




  },



  created: function () {
    this.getMonsterDescription();
    
  },


}).mount("#app");
