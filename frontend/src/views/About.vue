<template>
  <v-row class="d-flex justify-center">
    <v-col sm="4">
      <a to="/#sintomascovid">Direcionar</a>
      <v-btn to="/#sintomascovid">
  opcion 2
      </v-btn>
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