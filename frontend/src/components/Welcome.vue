<template>
  <div>
    <v-container fluid>
      <v-col>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="6" class="">
            <v-row class="align-center justify-center">
              <v-col cols="10" sm="7" md="8">
                <v-skeleton-loader
                  width="100%"
                  :height="`${$vuetify.breakpoint.mobile ? '75' : '130'}`"
                  type="image"
                  :loading="loading"
                  :class="`${$vuetify.breakpoint.mobile ? '' : 'my-8'}`"
                >
                  <v-img src="@/assets/images/coronovirus.jpg"> </v-img>
                </v-skeleton-loader>
              </v-col>
              <v-col cols="10" class="my-3">
                <v-skeleton-loader
                  type="text@5"
                  :loading="loading"
                  width="100%"
                  :class="`${loading ? 'mt-2' : ''}`"
                >
                  <v-badge left icon="fas fa-info">
                    <p class="text-justify text-normal font-italic texto">
                      "El Covid-19 proviene de una familia de virus que causan
                      enfermedades (Desde el resfriado común hasta enfermedades
                      respiratorias más graves) donde se da tanto en humanos
                      como en animales." -Gobierno de México (2022)-
                    </p>
                  </v-badge>
                </v-skeleton-loader>
                <v-btn
                  rounded
                  class="text-none gob"
                  color="gobierno"
                  href="https://coronavirus.gob.mx/covid-19/"
                >
                  Visite la página del Gobierno
                </v-btn>
              </v-col>
            </v-row>
            <v-card class="pa-5">
              <v-row class=" d-flex justify-center">
                <v-col cols="12" sm="6" class="">
                  <v-img
                    class="logoPue"
                    src="@/assets/images/logo-superior.png"
                    @click="appPuebla()"
                    max-height="400"
                    max-width="450"
                  >
                  </v-img>
                </v-col>
                <v-col cols="12" sm="6" class="">
                  <h4 class=" text-justify text-normal">
                    Tambien puede visitar la página del Gobierno de Puebla,
                    donde se brinda la información mediante una app
                  </h4>
                  <v-card-actions class="justify-center">
                      <v-btn class="mt-4 pa-0" text color="puebla">Alerta Covid</v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="10" sm="8" md="6" class="">
            <v-img>
              <v-img
                src="@/assets/images/Protected.png"
                contain
                max-height="500"
              >
              </v-img>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    covid:{
        cases: 0,
        deaths: 0,
        recovered: 0
    }
  }),
  methods: {
    appPuebla() {
      this.$router.push("https://alertacovid.puebla.gob.mx/");
    },
  },
};
</script>

<style scoped>
.texto {
  font-size: 18px;
}
.gob {
  color: white !important;
}

.logoPue {
  cursor: pointer;
}
</style>