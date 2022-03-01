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
                <v-col cols="10" class="">
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
                    cols="auto"
                    sm="4"
                    md="5"
                    lg="4"
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
                    cols="auto"
                    sm="4"
                    md="5"
                    lg="4"
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
                  <v-skeleton-loader
                    type="text"
                    :loading="loading"
                    width="100"
                    :class="`${loading ? 'mt-3' : ''}`"
                  >
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
        <v-row class="my-16 d-flex justify-center">
          <v-col cols="7" class="text-center">
            <section  id="sintomascovid">
              <h2 class="v-heading text-h4 text-sm-h4 mb-3">
                <a
                  href="#sintomascovid"
                  class="text-decoration-none text-right text-md-left"
                >
                  #
                </a>
                SÍNTOMAS DEL CORONAVIRUS

              </h2>
              <p>
                Instances of abusive, harassing, or otherwise unacceptable
                behavior may be reported by contacting the project team at
                <a
                  href="mailto:john@vuetifyjs.com"
                  target="_blank"
                  rel="noopener"
                  class="
                    app-link
                    text-decoration-none
                    primary--text
                    font-weight-medium
                    d-inline-block
                  "
                  >john@vuetifyjs.com<span
                    aria-hidden="true"
                    class="v-icon notranslate theme--dark primary--text ml-1"
                    style="
                      font-size: 0.875rem;
                      height: 0.875rem;
                      width: 0.875rem;
                    "
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      class="v-icon__svg"
                      style="
                        font-size: 0.875rem;
                        height: 0.875rem;
                        width: 0.875rem;
                      "
                    >
                      <path
                        d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                      ></path></svg></span></a
                >. The project team will review and investigate all complaints,
                and will respond in a way that it deems appropriate to the
                circumstances. The project team is obligated to maintain
                confidentiality with regard to the reporter of an incident.
                Further details of specific enforcement policies may be posted
                separately.
              </p>
              <p>
                Project maintainers who do not follow or enforce the Code of
                Conduct in good faith may face temporary or permanent
                repercussions as determined by other members of the project’s
                leadership.
              </p>
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
