<template>
  <v-app>
    <v-navigation-drawer width="75%" v-model="drawer" right temporary app>
      <h1>JSON View</h1>

      <div>
        <tree-view :data="JSONDATA" :options="{ maxDepth: 4 }"></tree-view>
      </div>

      <!-- -->
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <br />
        <div class="Random All">
          <h2>Randomise All</h2>
          <v-btn
            v-on:click="
              RandomDisadvantage();
              RandomExoticArmor('ALL');
              RandomWeaponType();
              RandomExoticWeapon();
            "
            elevation="7"
            rounded
          >
            <v-icon>mdi-autorenew</v-icon>Randomise All
          </v-btn>
        </div>
        <br />

        <div class="Disadvantage">
          <h2>Random Disadvantage</h2>
          <v-btn v-on:click="RandomDisadvantage" elevation="7" rounded>
            <v-icon>mdi-autorenew</v-icon>Random Disadvantage
          </v-btn>
          <h3>Name : {{ DisadvantageName }}</h3>
          <h3>Description : {{ DisadvantageDesc }}</h3>
        </div>
        <br />
        <div class="Exotic">
          <h2>Random Exotic Armor</h2>
          <v-checkbox v-model="ClassCheckBox" label="Hunter" value="Hunter" ></v-checkbox>
          <v-checkbox v-model="ClassCheckBox" label="Warlock" value="Warlock" ></v-checkbox>
          <v-checkbox v-model="ClassCheckBox" label="Titan" value="Titan" ></v-checkbox>
          <v-btn v-on:click="RandomExoticArmor('ALL')" elevation="7" rounded> <v-icon>mdi-autorenew</v-icon>Random All Classes </v-btn><br />
          <h3>Class: {{ HuntTitWar }}</h3>
          <h3>Exotic Armor: {{ ExoticArmor }}</h3>
        </div>
        <br />
        <div class="Random Weapon Type">
          <h2>Random Weapon Type</h2>
          <v-btn v-on:click="RandomWeaponType" elevation="7" rounded>
            <v-icon>mdi-autorenew</v-icon>Random Weapon Type
          </v-btn>
          <h3>Energy : {{ WeaponTypeEnergy }}</h3>
          <h3>Kinetic : {{ WeaponTypeKinetic }}</h3>
          <h3>Power: {{ WeaponTypePower }}</h3>
        </div>
        <br />
        <div class="Random Exotic Weapon">
          <h2>Random Exotic Weapon</h2>
          <v-btn v-on:click="RandomExoticWeapon" elevation="7" rounded>
            <v-icon>mdi-autorenew</v-icon>Random Exotic Weapon
          </v-btn>
          <h3>Weapon : {{ ExoticWeapon }}</h3>
        </div>
      </v-container>
    </v-main>
    <v-footer app>
      <v-btn elevation="7" rounded @click.stop="drawer = !drawer"
        >View JSON</v-btn
      >
      <!-- <v-btn on:click="changeLocale()" elevation="7" rounded>Change Locale</v-btn> -->
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import jsondata from "../public/Data/Data.json";
import TreeView from "vue-json-tree-view";
Vue.use(TreeView);
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
      WeaponTypeEnergy: null,
      WeaponTypeKinetic: null,
      WeaponTypePower: null,
      ExoticWeapon: null,
      JSONDATA: jsondata,
      drawer: false,
      group: null,
      ClassCheckBox: [],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "hu";
    },
    RandomDisadvantage: function () {
      const disleng = getRandomInt(jsondata.Disadvantages.Name.length);
      this.DisadvantageName = jsondata.Disadvantages.Name[disleng];
      this.DisadvantageDesc = jsondata.Disadvantages.Explanation[disleng];
    },
    RandomWeaponType: function (event) {
      this.WeaponTypeEnergy =
        jsondata.WeaponTypes.energy[
          getRandomInt(jsondata.WeaponTypes.energy.length)
        ];
      this.WeaponTypeKinetic =
        jsondata.WeaponTypes.Kinetic[
          getRandomInt(jsondata.WeaponTypes.Kinetic.length)
        ];
      this.WeaponTypePower =
        jsondata.WeaponTypes.Power[
          getRandomInt(jsondata.WeaponTypes.Power.length)
        ];
    },
    RandomExoticWeapon: function (event) {
      this.ExoticWeapon =
        jsondata.Exotic.Weapons[getRandomInt(jsondata.Exotic.Weapons.length)];
    },
    RandomExoticArmor: function (exoticclass: string) {
      if (exoticclass == "ALL") {
        const RandomALL = this.ClassCheckBox
        const RandomClassNumber = getRandomInt(this.ClassCheckBox.length);
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
