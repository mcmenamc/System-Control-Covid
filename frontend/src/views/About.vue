<template>
  <v-row class="d-flex justify-center">
    <v-col sm="4" >
      <LectorQR></LectorQR>
    </v-col>
  </v-row>
</template>
<script>
import LectorQR from "../components/LectorQR";
export default {
  name: "About",
  components: {
    LectorQR,
  },
};
</script>