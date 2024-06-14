Vue.createApp({
    data(){
        return{
            monsters: "",

        };
    },
    methods: {
        getMonsters: async function() {
            let response = await fetch ("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
            let data = await response.json()
            this.monsters = data;
            console.log(this.monsters)

        }
    },
    created: function () {
        this.getData();
    },
}).mount('#app');