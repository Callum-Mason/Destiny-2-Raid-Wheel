<template>
  <div>
    <h1>JSON View</h1>
    <tree-view :data="JSONDATA" :options="{ maxDepth: 4 }"></tree-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import jsondata from "../../public/Data/Data.json";
import TreeView from "vue-json-tree-view";

Vue.use(TreeView);
export default Vue.extend({
  name: "App",
  components: {
    //
  },

  data() {
    return {
      JSONDATA: jsondata
    };
  }
});
</script>

<style lang="stylus"></style>
