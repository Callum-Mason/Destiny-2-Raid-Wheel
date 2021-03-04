<template>
  <v-app>
    <v-main>
      <br />
      <v-card class="mx-auto" center>
        <v-row justify="center">
          <v-expansion-panels focusable>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Drinking rules
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <h1>Drinking rules:</h1>

                <v-list>
                  <template v-for="(DrinkRules, index) in DrinkRules">
                    <v-list-item
                      v-if="DrinkRules.title"
                      :key="DrinkRules.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{
                          DrinkRules.title
                        }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-else-if="DrinkRules.divider"
                      :key="index"
                      :inset="inset"
                    ></v-divider>
                  </template>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header> Last Wish </v-expansion-panel-header>
              <v-expansion-panel-content>
                <h1>Last Wish:</h1>

                <v-list>
                  <template v-for="(LastWishRules, index) in LastWishRules">
                    <v-list-item
                      v-if="LastWishRules.title"
                      :key="LastWishRules.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{
                          LastWishRules.title
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          LastWishRules.dec
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          LastWishRules.dec1
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          LastWishRules.dec2
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          LastWishRules.dec3
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-else-if="LastWishRules.divider"
                      :key="index"
                      :inset="inset"
                    ></v-divider>
                  </template>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Garden of Salvation
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <h1>Garden of Salvation:</h1>

                <v-list>
                  <template
                    v-for="(GardenofSalvationRules,
                    index) in GardenofSalvationRules"
                  >
                    <v-list-item
                      v-if="GardenofSalvationRules.title"
                      :key="GardenofSalvationRules.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{
                          GardenofSalvationRules.title
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          GardenofSalvationRules.dec
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          GardenofSalvationRules.dec1
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          GardenofSalvationRules.dec2
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          GardenofSalvationRules.dec3
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          GardenofSalvationRules.dec4
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-else-if="GardenofSalvationRules.divider"
                      :key="index"
                      :inset="inset"
                    ></v-divider>
                  </template>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header>
                Deep Stone Crypt
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <h1>Deep Stone Crypt:</h1>

                <v-list>
                  <template
                    v-for="(DeepStoneCryptRules, index) in DeepStoneCryptRules"
                  >
                    <v-list-item
                      v-if="DeepStoneCryptRules.title"
                      :key="DeepStoneCryptRules.title"
                    >
                      <v-list-item-content>
                        <v-list-item-title>{{
                          DeepStoneCryptRules.title
                        }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          DeepStoneCryptRules.dec
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          DeepStoneCryptRules.dec1
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          DeepStoneCryptRules.dec2
                        }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{
                          DeepStoneCryptRules.dec3
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-else-if="DeepStoneCryptRules.divider"
                      :key="index"
                      :inset="inset"
                    ></v-divider>
                  </template>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    inset: false,
    DrinkRules: [
      {
        title: "Sips are drinking 1 index finger thickness"
      },
      {
        title: "If a sober person cucks you, shots turn into 5 sips"
      },
      {
        title:
          "Leaving the raid at any point for any reason, everyone takes 1 shot, the one that left takes 2"
      },
      {
        title: "If you die to architects or misadventure, take a shot"
      },
      {
        title: "If an exotic drops, take a shot"
      },
      {
        title:
          "After the wheel has been spun, Last one at the next encounter takes a shot"
      },
      {
        title: "After a wipe, Lowest damage takes a shot"
      },
      {
        title: "Fail at the jumping part, take 10 sips (for every death)"
      },
      {
        title: "After a wipe, Highest damage choose a player to take 10 sips"
      },
      {
        title: "If you die, take 5 sips"
      },
      {
        title: "If you have to pulled, take 2 shots"
      },
      {
        title: "Rerolling anything, down your glass"
      },
      {
        title: "Wiping, other than highest and lowest take 10 sips"
      },
      {
        title: "If you evade a wipe, you get 1 no drink card"
      },
      {
        title: "If callum doesnt remember an encounter, he takes a shot"
      },
      {
        title: "If you die before getting to the first encounter, take a shot"
      }
    ],
    LastWishRules: [
      {
        title: "Kalli",
        dec: "If you dont make it to a save door at Kalli, take 10 sips"
      },
      {
        title: "Shiro Chi",
        dec: "If you step on the plate that is incorrect/red, take a shot"
      },
      {
        title: "Morgeth",
        dec: "If you die to the balls, take a shot"
      },
      {
        title: "Vault",
        dec: "If a knight banks its sword on your side, add take a shot"
      },
      {
        title: "Riven",
        dec: "Cheese riven, everyone takes a shot before you start"
      },
      {
        title: "Riven",
        dec: "Cheese riven, everyone takes a shot before you start",
        dec1: "If you shoot an eye, take a shot",
        dec2: "if you die while in the ascendant plane, take a shot"
      },

      {
        title: "Queenswalk",
        dec: "If you get drawn into the heart while not chosen, take a shot"
      }
    ],
    GardenofSalvationRules: [
      {
        title: "1st encounter",
        dec: "If you die to the boss, down your glass",
        dec1: "If you die to the buff, take a shot",
        dec2: "If you die to the cyclops, take a shot"
      },
      {
        title: "2nd encounter",
        dec:
          "If a station runs out of the buff, the runner and the station take a shot",
        dec1: "If too many vex sacrifice, all stations take a shot"
      },
      {
        title: "3rd encounter",
        dec: "If you shoot wrong eye, take a shot",
        dec1: "If you call the wrong eyes, take a shot",
        dec2: "If you die to the buff, take a shot",
        dec3: "If you die to the boss, down your glass",
        dec4: "If too many vex sacrifice, gambit team take a shot"
      },
      {
        title: "4th encounter",
        dec: "If you die to the cyclops, take a shot",
        dec1: "If you forget to be with your team, take a shot"
      }
    ],
    DeepStoneCryptRules: [
      {
        title: "1st encounter",
        dec: "If you shoot the wrong thing, take a shot",
        dec1: "If you call out the wrong thing, take a shot"
      },
      {
        title: "2nd encounter",
        dec: "If you hit the wrong Atraks, take a shot",
        dec1: "If you call out the wrong Atraks, take a shot",
        dec2: "If you die to the Atraks buff, take a shot",
        dec3:
          "If you block the scanner from entering the lift, take 10 sips ya prick"
      },
      {
        title: "3rd encounter (CHAOS ONLY)",
        dec: "If someone demands a buff, he takes a shot",
        dec1: "If you dont do your job, take a shot",
        dec2: "If you bank at the wrong thing, take a shot"
      },
      {
        title: "4th encounter",
        dec: "If you dont make it to the bank, take a shot",
        dec1: "If you die to debris, take a shot",
        dec2: "If you stun too early or too late, take a shot",
        dec3: "If you take too long with operator, take a shot"
      }
    ]
  })
};
</script>

<style></style>
