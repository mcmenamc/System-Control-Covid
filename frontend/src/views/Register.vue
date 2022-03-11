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
export default {
   created() {
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