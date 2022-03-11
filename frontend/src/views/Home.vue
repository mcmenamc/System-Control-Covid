<template >
  <div>
  
    <Social/>
    
      <v-row class="img-fondo d-flex flex-wrap justify-center my-5 my-xl-16">
        <v-col cols="12" sm="12" md="12" lg="11" xl="8">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="6">
              <v-row align="center" justify="center">
                <v-col cols="10" sm="7" md="8" lg="7" class="">
                  <v-img src="@/assets/images/coronovirus.jpg"></v-img>
                </v-col>
                <v-col cols="10" class="my-3">
                  <p class="text-justify text-normal">
                    El coronavirus (COVID-19) se informó por primera vez en
                    Wuhan, Hubei, China, en diciembre de 2019; el brote fue
                    reconocido posteriormente como una pandemia por la
                    Organización Mundial de la Salud (OMS) el 11 de marzo de
                    2020.
                  </p>
                </v-col>
                <v-row class="d-flex justify-center">
                  <v-col
                    cols="12"
                    sm="4"
                    md="5"
                    lg="5"
                    class="d-flex justify-center"
                  >
                    <v-btn rounded color="primary" class="text-none"
                      >Como Protegerse
                      <v-icon right>fas fa-shield-virus</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                    md="5"
                    lg="5"
                    class="d-flex justify-center"
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
                  </v-col>
                </v-row>
              </v-row>
              <v-row class="d-flex justify-center my-5">
                <v-col align="center" cols="12" class="text-one txt-size">
                  Casos Covid-19
                </v-col>
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                >
                  MUNDIAL
                  <p class="grey--text">{{ covid.cases.toLocaleString() }}</p>
                </v-col>
                <v-col
                  align="center"
                  cols="auto"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                  >FALLECIDOS
                  <p class="grey--text">
                    {{ covid.deaths.toLocaleString() }}
                  </p>
                </v-col>
                <v-col
                  cols="auto"
                  align="center"
                  sm="4"
                  class="text-one rojo-text txt-letters"
                >
                  RECUPERADOS
                  <p class="grey--text">
                    {{ covid.recovered.toLocaleString() }}
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="10" sm="8" md="6" class="pa-0">
              <v-img
                contain
                height="80%"
                src="@/assets/images/home.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    <v-row class="my-10 white">
      <v-col class="mt-xl-16" cols="12">
        <v-row class="d-flex justify-center">
          <v-col class="" cols="12" sm="10" md="8" lg="5" xl="4">
            <h5 class="subtitle text-center primary--text text-one">
              ¿CUÁLES SON LOS SÍNTOMAS DEL COVID-19?
            </h5>
            <h2 class="text-center my-2 text-one blue--text titles">
              SÍNTOMAS DEL CORONAVIRUS
            </h2>
            <p class="text-center text-normal">
              Los síntomas más comunes del COVID-19 son fiebre, cansancio y tos
              seca. Algunos pacientes pueden tener molestias y dolores,
              congestión nasal, secreción nasal, dolor de garganta o diarrea.
              Estos síntomas suelen ser leves y comienzan gradualmente. Además,
              los síntomas pueden aparecer de 2 a 14 días después de la
              exposición.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="d-flex justify-center my-5">
          <v-col class="pa-0 mt-4" cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card class="mx-4 pa-1" elevation="1" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-one primary--text"
                    >Fiebre
                    <v-icon right color="error"
                      >fas fa-thermometer-three-quarters</v-icon
                    >
                  </v-list-item-title>

                  <v-card-text>
                    <div class="text--primary text-normal text-justify">
                      <strong>Fiebre alta:</strong> Esto significa que siente
                      calor al tocar su pecho o espalda. Es un signo común y
                      también puede aparecer en 2-10 días si está afectado.
                    </div>
                  </v-card-text>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col class="pa-0 mt-4" cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card class="mx-4 pa-1" elevation="1" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-one primary--text">
                    Tos<v-icon right color="error">fas fa-lungs-virus</v-icon>
                  </v-list-item-title>
                  <v-card-text>
                    <div class="text--primary text-normal text-justify">
                      <strong>Tos continua:</strong> Esto significa toser mucho
                      durante más de una hora, o 3 o más episodios de tos en 24
                      horas (si suele tener tos, puede ser peor de lo habitual).
                    </div>
                  </v-card-text>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col class="pa-0 mt-4" cols="12" sm="6" md="4" lg="3" xl="2">
            <v-card class="mx-4 pa-1" elevation="1" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-one primary--text">
                    Respirar<v-icon right color="error"
                      >fas fa-head-side-cough</v-icon
                    >
                  </v-list-item-title>
                  <v-card-text>
                    <div class="text--primary text-normal text-justify">
                      <strong>Fiebre alta:</strong> Aproximadamente 1 de cada 6
                      personas que contraen COVID-19 se enferma gravemente y
                      desarrolla dificultad para respirar o dificultad para
                      respirar.
                    </div>
                  </v-card-text>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
          <v-col cols="12" sm="10" md="9" lg="8" xl="7" class="d-flex justify-center">
            <v-alert
              text
              type="primary"
              icon="fas fa-exclamation-triangle"
              class="mt-5"
              :width="`${$vuetify.breakpoint.mobile ? '100%' : '75%'}`"
            >
              <strong>Quédese en casa y llame a su médico:</strong> si cree que
              ha estado expuesto al COVID-19 y tiene fiebre y cualquier síntoma,
              como tos o dificultad para respirar, llame a su proveedor de
              atención médica lo antes posible para recibir asesoramiento
              médico.
            </v-alert>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Social from '../components/SocialMedia.vue'
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
  created() {
    this.getCovid();
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
  components:{
    Social

  }
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
.subtitle {
  font-size: 1.2rem;
}
</style>
