<template >
  <div>
    <v-btn
      icon
      href="https://wa.me/522213425514?text=Me%20interesa%20saber%20si%20tengo%20covid"
      target="_blank"
      class="whatsapp success"
      ><v-icon color="white" size="45">fab fa-whatsapp</v-icon>
    </v-btn>
    <v-img
      :height="`${$vuetify.breakpoint.mobile ? 'auto' : '92vh'}`"
      src="@/assets/images/fondo.jpg"
    >
      <v-row
        :class="`img-fondo d-flex flex-wrap justify-center ${
          $vuetify.breakpoint.mobile ? 'my-4' : 'my-16'
        }`"
      >
        <v-col cols="12" md="11" lg="9" xl="8">
          <v-row class="align-center">
            <v-col md="6" class="">
              <v-row align="center" justify="center">
                <v-col cols="10" class="">
                  <v-img src="@/assets/images/coronovirus.jpg"></v-img>
                </v-col>
                <v-row class="justify-center">
                  <v-col cols="10" class="my-3">
                    <p class="text-justify text-normal">
                      El coronavirus (COVID-19) se informó por primera vez en
                      Wuhan, Hubei, China, en diciembre de 2019; el brote fue
                      reconocido posteriormente como una pandemia por la
                      Organización Mundial de la Salud (OMS) el 11 de marzo de
                      2020.
                    </p>
                  </v-col>
                </v-row>
                <v-row class="d-flex justify-center">
                  <v-col cols="auto" sm="4" md="5" lg="4" class="">
                    <v-btn rounded color="primary" class="text-none"
                      >Como Protegerse
                      <v-icon right>fas fa-shield-virus</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="auto" sm="4" md="5" lg="4" class="ml-2">
                    <v-btn
                      rounded
                      href="https://previenecovid19.puebla.gob.mx/"
                      target="_blank"
                      text
                      color="primary"
                      >Acerca de Covid-19
                      <v-icon small right>fas fa-arrow-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-row>
              <v-row class="d-flex justify-center my-5">
                <v-col align="center" cols="12" class="text-one txt-size"
                  >Casos Covid-19</v-col
                >
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                  >MUNDIAL
                  <p class="grey--text">{{ covid.cases.toLocaleString() }}</p>
                </v-col>
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                >
                  FALLECIDOS
                  <p class="grey--text">
                    {{ covid.deaths.toLocaleString() }}
                  </p></v-col
                >
                <v-col
                  cols="auto"
                  align="center"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                  >RECUPERADOS
                  <p class="grey--text">
                    {{ covid.recovered.toLocaleString() }}
                  </p></v-col
                >
              </v-row>
            </v-col>
            <v-col md="6" class="">
              <v-img contain src="@/assets/images/imageb5.png"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="my-10 d-flex justify-center white">
      <v-col cols="12" md="11" lg="9" xl="8">
        <v-row class="my-16">
          <v-col cols="7" class="error"> </v-col>
          <v-col cols="5" class="info"> </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Nprogress from "nprogress";
export default {
  name: "Home",
  data: () => ({
    covid: {
      cases: 0,
      deaths: 0,
      recovered: 0,
    },
    dialog: false,
  }),
  async created() {
    this.getCovid();
    Nprogress.done();
  },
  methods: {
    getCovid() {
      this.axios
        .get("https://coronavirus-19-api.herokuapp.com/all")
        .then((response) => {
          this.covid = response.data;
        });
    },
  },
};
</script>

<style scoped>
.txt-size {
  font-size: 38px;
  color: rgb(114, 114, 114);
}
.txt-letters {
  font-size: 27px;
}
.whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  text-align: center;
  z-index: 100;
}
</style>
