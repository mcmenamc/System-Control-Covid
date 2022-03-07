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
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="6">
              <v-row align="center" justify="center">
                <v-col cols="10" sm="7" md="8" lg="7" class="">
                  <v-skeleton-loader
                    width="100%"
                    :height="`${$vuetify.breakpoint.mobile ? '75' : '130'}`"
                    type="image"
                    :loading="loading"
                    :class="`${$vuetify.breakpoint.mobile ? '' : 'my-8'}`"
                  >
                    <v-img src="@/assets/images/coronovirus.jpg"></v-img>
                  </v-skeleton-loader>
                </v-col>
                <v-col cols="10" class="my-3">
                  <v-skeleton-loader
                    type="text@5"
                    :loading="loading"
                    width="100%"
                    :class="`${loading ? 'mt-2' : ''}`"
                  >
                    <p class="text-justify text-normal">
                      El coronavirus (COVID-19) se informó por primera vez en
                      Wuhan, Hubei, China, en diciembre de 2019; el brote fue
                      reconocido posteriormente como una pandemia por la
                      Organización Mundial de la Salud (OMS) el 11 de marzo de
                      2020.
                    </p>
                  </v-skeleton-loader>
                </v-col>
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="12"
                    sm="4"
                    md="6"
                    lg="5"
                    class="d-flex justify-center"
                  >
                    <v-skeleton-loader
                      type="button"
                      :loading="loading"
                      :class="`${loading ? 'mt-3' : ''}`"
                    >
                      <v-btn rounded color="primary" class="text-none"
                        >Como Protegerse
                        <v-icon right>fas fa-shield-virus</v-icon>
                      </v-btn>
                    </v-skeleton-loader>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                    md="6"
                    lg="5"
                    class="d-flex justify-center"
                  >
                    <v-skeleton-loader
                      type="button"
                      :loading="loading"
                      :class="`${loading ? 'mt-3' : ''}`"
                    >
                      <v-btn
                        rounded
                        href="https://previenecovid19.puebla.gob.mx/"
                        target="_blank"
                        text
                        color="primary"
                      >
                        Acerca de Covid-19
                        <v-icon small right>fas fa-arrow-right</v-icon>
                      </v-btn>
                    </v-skeleton-loader>
                  </v-col>
                </v-row>
              </v-row>
              <v-row class="d-flex justify-center my-5">
                <v-col align="center" cols="12" class="text-one txt-size">
                  <v-skeleton-loader
                    width="60%"
                    type="text"
                    :loading="loading"
                    :class="`${loading ? 'mt-3' : ''}`"
                  >
                    Casos Covid-19
                  </v-skeleton-loader>
                </v-col>
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                >
                  <v-skeleton-loader type="text" :loading="loading" width="100">
                    MUNDIAL
                  </v-skeleton-loader>
                  <v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="150"
                    :class="`${loading ? 'mt-6' : ''}`"
                  >
                    <p class="grey--text">{{ covid.cases.toLocaleString() }}</p>
                  </v-skeleton-loader>
                </v-col>
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                  ><v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="100"
                    :class="`${loading ? 'mt-3' : ''}`"
                    >FALLECIDOS
                  </v-skeleton-loader>
                  <v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="150"
                    :class="`${loading ? 'mt-6' : ''}`"
                  >
                    <p class="grey--text">
                      {{ covid.deaths.toLocaleString() }}
                    </p>
                  </v-skeleton-loader>
                </v-col>
                <v-col
                  cols="auto"
                  align="center"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                >
                  <v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="100"
                    :class="`${loading ? 'mt-3' : ''}`"
                    >RECUPERADOS
                  </v-skeleton-loader>
                  <v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="150"
                    :class="`${loading ? 'mt-6' : ''}`"
                    ><p class="grey--text">
                      {{ covid.recovered.toLocaleString() }}
                    </p>
                  </v-skeleton-loader>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="10" sm="8" md="6" class="pa-0">
              <v-skeleton-loader
                type="image, image, image"
                :loading="loading"
                :class="`${loading ? 'mt-2' : ''}`"
              >
                <v-img
                  contain
                  height="100%"
                  src="@/assets/images/imageb5.png"
                ></v-img>
              </v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-img>
    <v-row class="my-10 d-flex justify-center white">
      <v-col cols="12" md="11" lg="9" xl="8">
        <a href="#sintomascovid">Direcionar</a>

        <v-row class="my-16 d-flex justify-center">
          <v-col cols="7" class="error">
            <section id="sintomascovid">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              eum sint a commodi soluta tenetur debitis laborum modi, nesciunt
              et ex nemo quae perspiciatis assumenda cum vero dolor magnam!
              Magni?
            </section>
          </v-col>
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
    loading: true,
  }),
  async created() {
    this.getCovid();
    Nprogress.done();
    const readyHandler = () => {
      if (document.readyState == "complete") {
        this.loading = false;
        document.removeEventListener("readystatechange", readyHandler);
      }
    };
    document.addEventListener("readystatechange", readyHandler);
    readyHandler();
  },

  methods: {
    getCovid() {
      this.axios
        .get("https://coronavirus-19-api.herokuapp.com/all")
        .then((response) => {
          this.covid = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

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
