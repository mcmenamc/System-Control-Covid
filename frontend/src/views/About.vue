<template>
  <v-row class="d-flex justify-center">
    <v-col sm="4">
      <v-btn
        v-if="this.$route.path == '/'"
        color="white"
        @click="() => this.$vuetify.goTo('#sintomascovid')"
        >How it Works</v-btn
      >
      <v-btn
        v-else
        color="white"
        @click="() => this.$router.push('/#sintomascovid')"
        >How it Works</v-btn
      >

      <LectorQR></LectorQR>
    </v-col>
  </v-row>
</template>
<script>
import Nprogress from "nprogress";
import LectorQR from "../components/LectorQR";
export default {
  name: "About",
  components: {
    LectorQR,
  },
  async created() {
    Nprogress.done();
  },
};
</script>