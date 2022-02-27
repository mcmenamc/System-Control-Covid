<template>
  <v-img
    :height="`${$vuetify.breakpoint.mobile ? 'auto' : '92vh'}`"
    src="@/assets/images/fondo.jpg"
  >
    <v-row
      :class="`img-fondo d-flex flex-wrap d-flex justify-center ${
        $vuetify.breakpoint.mobile ? 'my-5' : 'my-16'
      }`"
    >
      <v-col cols="12" md="11" lg="9" xl="8">
        <v-row class="d-flex justify-center">
          <v-col cols="11" md="6" class="pa-0">
            <v-row>
              <v-col cols="12">
                <!-- <v-card min-height="73vh" class="py-4 ma-0">
                  <v-card-title class="text-center d-flex justify-center"> -->
                <!-- <v-row>
                      <v-col class="d-flex justify-center" cols="12">
                        <v-img
                          max-width="165"
                          src="@/assets/images/logo.png"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <h4 class="primary--text">¡Hola de nuevo!</h4>
                      </v-col> 
                    </v-row> -->
                <!-- </v-card-title> 
                  <v-card-text>  -->
                <v-form>
                  <v-stepper height="75vh" v-model="e6" vertical>
                    <!-- <v-stepper-header> -->
                    <v-row>
                      <v-col class="d-flex justify-center mt-5" cols="12">
                        <v-img
                          max-width="165"
                          src="@/assets/images/logo.png"
                        ></v-img>
                      </v-col>
                      <v-col class="d-flex justify-center" cols="12">
                        <h4 class="primary--text">¡Hola de nuevo!</h4>
                      </v-col>
                    </v-row>
                    <!-- </v-stepper-header> -->
                    <v-stepper-step :complete="e6 > 1" step="1">
                      Select an app
                      <small>Summarize if needed</small>
                    </v-stepper-step>

                    <v-stepper-content step="1">
                      <v-card
                        color="grey lighten-1"
                        class="mb-9"
                        height="200px"
                      ></v-card>
                      <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                      <!-- <v-btn text> Cancel </v-btn> -->
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 > 2" step="2">
                      Configure analytics for this app
                    </v-stepper-step>

                    <v-stepper-content step="2">
                      <v-card
                        color="grey lighten-1"
                        class="mb-9"
                        height="200px"
                      ></v-card>
                      <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
                      <!-- <v-btn text> Cancel </v-btn> -->
                    </v-stepper-content>

                    <v-stepper-step step="3">
                      View setup instructions
                    </v-stepper-step>
                    <v-stepper-content step="3">
                      <v-card
                        color="grey lighten-1"
                        class="mb-9"
                        height="200px"
                      ></v-card>
                      <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
                      <v-btn color="success" class="ml-6"> Enviar </v-btn>
                    </v-stepper-content>
                  </v-stepper>
                </v-form>
                <!-- </v-card-text>
                </v-card> -->
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :class="` ${
              $vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'd-none' : ''
            }  pa-0 `"
            cols="11"
            md="6"
          >
            <v-carousel
              hide-delimiters
              height="75vh"
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              class="rounded elevation-2"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="require(`@/assets/images/${item.src}`)"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
import Nprogress from "nprogress";
export default {
  async created() {
    Nprogress.done();
  },
  data: () => ({
    e6: 1,
    items: [
      {
        src: "carousel-1.jpg",
      },
      {
        src: "carousel-2.jpg",
      },
      {
        src: "carousel-3.jpg",
      },
      {
        src: "carousel-4.jpg",
      },
    ],
  }),
};
</script>

<style>
</style>