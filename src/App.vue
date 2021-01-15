<template>
  <v-container class="grey lighten-5">
    <div class="Disadvantage">
      <h2>Random Disadvantage</h2>
      <v-btn v-on:click="RandomDisadvantage" elevation="7" rounded
        >Random Disadvantage</v-btn
      >
      <h3>Name : {{ DisadvantageName }}</h3>
      <h3>Description : {{ DisadvantageDesc }}</h3>
    </div>
    <br />
    <div class="Exotic">
      <h2>Random Exotic Armor</h2>
      <v-btn v-on:click="RandomExoticArmor('ALL')" elevation="7" rounded
        >Random All</v-btn
      >
      <v-btn v-on:click="RandomExoticArmor('Hunter')" elevation="7" rounded
        >Random Hunter</v-btn
      >
      <v-btn v-on:click="RandomExoticArmor('Warlock')" elevation="7" rounded
        >Random Warlock</v-btn
      >
      <v-btn v-on:click="RandomExoticArmor('Titan')" elevation="7" rounded
        >Random Titan</v-btn
      >
      <h3>Class: {{ HuntTitWar }}</h3>
      <h3>Exotic Armor: {{ ExoticArmor }}</h3>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import jsondata from "../public/Data/Data.json";
// import HelloWorld from "./components/HelloWorld.vue";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Vue.extend({
  // name: "App",

  components: {
    // HelloWorld
  },
  data() {
    return {
      DisadvantageName: null,
      DisadvantageDesc: null,
      HuntTitWar: null,
      ExoticArmor: null,
    };
  },

  methods: {
    RandomDisadvantage: function () {
      const disleng = getRandomInt(jsondata.Disadvantages.Name.length);
      this.DisadvantageName = jsondata.Disadvantages.Name[disleng];
      this.DisadvantageDesc = jsondata.Disadvantages.Explanation[disleng];
    },
    RandomHunterArmor: function (event) {
      return jsondata.Exotic.Armor.Hunter[
        getRandomInt(jsondata.Exotic.Armor.Hunter.length)
      ];
    },
    RandomTitanArmor: function (event) {
      return jsondata.Exotic.Armor.Titan[
        getRandomInt(jsondata.Exotic.Armor.Titan.length)
      ];
    },
    RandomWarlockArmor: function (event) {
      return jsondata.Exotic.Armor.Warlock[
        getRandomInt(jsondata.Exotic.Armor.Warlock.length)
      ];
    },
    RandomExoticArmor: function (exoticclass: string) {
      if (exoticclass == "ALL") {
        const RandomALL = [];
        RandomALL.push("Hunter");
        RandomALL.push("Titan");
        RandomALL.push("Warlock");
        const RandomClassNumber = getRandomInt(3);
        const Class = RandomALL[RandomClassNumber];

        if (Class == "Hunter") {
          this.ExoticArmor =
            jsondata.Exotic.Armor.Hunter[
              getRandomInt(jsondata.Exotic.Armor.Hunter.length)
            ];
        } else if (Class == "Titan") {
          this.ExoticArmor =
            jsondata.Exotic.Armor.Titan[
              getRandomInt(jsondata.Exotic.Armor.Titan.length)
            ];
        } else if (Class == "Warlock") {
          this.ExoticArmor =
            jsondata.Exotic.Armor.Warlock[
              getRandomInt(jsondata.Exotic.Armor.Warlock.length)
            ];
        } else {
          console.log("ERROR");
        }

        this.HuntTitWar = Class; //Sets The Class

        // console.log(Class);
      } else if (exoticclass == "Hunter") {
        this.HuntTitWar = exoticclass;
        this.ExoticArmor =
          jsondata.Exotic.Armor.Hunter[
            getRandomInt(jsondata.Exotic.Armor.Hunter.length)
          ];
      } else if (exoticclass == "Titan") {
        this.HuntTitWar = exoticclass;
        this.ExoticArmor =
          jsondata.Exotic.Armor.Titan[
            getRandomInt(jsondata.Exotic.Armor.Titan.length)
          ];
      } else if (exoticclass == "Warlock") {
        this.HuntTitWar = exoticclass;
        this.ExoticArmor =
          jsondata.Exotic.Armor.Warlock[
            getRandomInt(jsondata.Exotic.Armor.Warlock.length)
          ];
      } else {
        console.log("ERROR");
      }
    },
  },
});
</script>

<style lang="stylus" scoped></style>