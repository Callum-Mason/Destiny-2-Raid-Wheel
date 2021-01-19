import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import { preset } from "vue-cli-plugin-vuetify-preset-rally/preset";


Vue.use(Vuetify);

export default new Vuetify({
  preset,
  icons: {
    iconfont: "mdi" // default - only for display purposes
  }
});
