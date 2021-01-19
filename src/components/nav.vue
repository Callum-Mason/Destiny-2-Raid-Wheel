<template>
  <div>
    <template>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="RandomProfilePic" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Joe Blogs</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list>
      <br />
      <v-list-item  link>
        <v-list-icon>
          <v-icon>code-json</v-icon>
        </v-list-icon>
        <v-list-item-content @click.stop="JSONVIEW = !JSONVIEW">
          <v-list-item-title>View JSON</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item  link>
        <v-list-icon>
          <v-icon>mdi-code-json</v-icon>
        </v-list-icon>
        <v-list-item-content @click.stop="JSONVIEW = !JSONVIEW">
          <v-list-item-title>View JSON</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  watch: {
    group() {
      this.JSONVIEW = false;
    }
  },
  mounted: function() {
    this.RandomPerson(); //method1 will execute at pageload
  },
  data() {
    return {
      JSONVIEW: false,
      RandomProfilePic: null,
    };
  },
  methods: {
    RandomPerson: function(event) {
      this.RandomProfilePic =
        "https://randomuser.me/api/portraits/men/" + getRandomInt(100) + ".jpg";
      console.log(this.RandomProfilePic);
    }
  }
};
</script>

<style lang="stylus"></style>
