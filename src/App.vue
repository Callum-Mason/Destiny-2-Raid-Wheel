<template>
  <v-app>
    <v-navigation-drawer width="75%" v-model="drawer" right temporary app style="padding-left: 2.5%">
      <navcomp />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <br />


        <div class="Random All">
          <h2><v-btn v-on:click=" RandomDisadvantage(); RandomExoticArmor(); RandomWeaponType(); RandomExoticWeapon(); " elevation="7" rounded> <v-icon>mdi-autorenew</v-icon></v-btn> Randomise All</h2>
        </div>


        <br />


        <div class="Disadvantage">
          <h2><v-btn v-on:click="RandomDisadvantage" elevation="7" rounded><v-icon>mdi-autorenew</v-icon></v-btn>Random Disadvantage</h2>
          <h3>Name : {{ DisadvantageName }}</h3>
          <h3>Description : {{ DisadvantageDesc }}</h3>
        </div>


        <br />


        <div class="Exotic">
          <h2><v-btn v-on:click="RandomExoticArmor()" elevation="7" rounded><v-icon>mdi-autorenew</v-icon></v-btn> Random Exotic Armor</h2>
          <v-container>
            <v-row>
              <v-col>
                  <v-checkbox v-model="ClassCheckBox" label="Hunter" value="Hunter">
                  </v-checkbox>
              </v-col>
              <v-col>
                  <v-checkbox v-model="ClassCheckBox" label="Warlock" value="Warlock">
                  </v-checkbox>
              </v-col>
              <v-col>
                  <v-checkbox v-model="ClassCheckBox" label="Titan" value="Titan">
                  </v-checkbox>
              </v-col>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
            </v-row>
          </v-container>
          <h3>Class: {{ HuntTitWar }}</h3>
          <h3>Exotic Armor: {{ ExoticArmor }}</h3>
        </div>
        <br />
        <div class="Random Weapon Type">
          
          <h2><v-btn v-on:click="RandomWeaponType" elevation="7" rounded><v-icon>mdi-autorenew</v-icon></v-btn>Random Weapon Type</h2>
          <br>
          <h3>Energy : {{ WeaponTypeEnergy }}</h3>
          <h3>Kinetic : {{ WeaponTypeKinetic }}</h3>
          <h3>Power: {{ WeaponTypePower }}</h3>
        </div>
        <br />
        <div class="Random Exotic Weapon">
          <h2><v-btn v-on:click="RandomExoticWeapon" elevation="7" rounded><v-icon>mdi-autorenew</v-icon></v-btn>Random Exotic Weapon</h2>
          <br>
          <h3>Weapon : {{ ExoticWeapon }}</h3>
        </div>
      </v-container>
    </v-main>
    <v-footer app>
      <v-btn elevation="7" rounded @click.stop="drawer = !drawer">
        View JSON
      </v-btn>
      <!-- <v-btn on:click="changeLocale()" elevation="7" rounded>Change Locale</v-btn> -->
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import jsondata from "../public/Data/Data.json";
import navcomp from "./components/nav.vue";
// import HelloWorld from "./components/HelloWorld.vue";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Vue.extend({
  // name: "App",

  components: {
    navcomp,
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
      alignments: [
        'center'
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
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
    RandomExoticArmor: function () {
        const RandomALL = this.ClassCheckBox;
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
    
    },
  },
});
</script>

<style lang="stylus" scoped></style>
