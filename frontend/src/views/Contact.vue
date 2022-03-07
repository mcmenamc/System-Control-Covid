<template>
  <v-row
    :class="`img-fondo d-flex flex-wrap justify-center ${
      $vuetify.breakpoint.mobile ? 'my-4' : 'my-16'
    }`"
  >
    <v-col cols="12" md="11" lg="9" xl="8">
      <v-row class="d-flex justify-center contact rounded-xl">
        <v-col cols="12" md="6" class="">
          <v-row class="d-flex justify-start pa-lg-16">
            <v-col cols="12" lg="10" class="">
              <span class="text-one txt-size white--text">Contáctanos </span>
              <p class="mt-8 text-normal color-grey text-justify">
                <strong class="mt-2"
                  >¿Tienes alguna duda o pregunta sobre nuestros
                  productos?</strong
                >
                Completa la forma y dentro de las siguientes 48 horas alguien de
                nuestro equipo se comunicara contigo.
              </p>
            </v-col>
            <v-col cols="12" lg="9" class="">
              <span class="text-lg-h6 white--text">Diretorio</span>
              <v-list class="transparent">
                <v-list-item-group v-model="model" color="grey lighten-4">
                  <v-list-item class="py-3" href="tel:22 22 22 22 22">
                    <v-list-item-icon>
                      <v-icon color="primary">fa fa-phone-alt</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >22 22 22 22 22</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="py-3" href="mailto:hello@flowbase.com" >
                    <v-list-item-icon>
                      <v-icon color="primary">fa fa-envelope</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >hello@flowbase.com</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="py-3" @click="openMaps">
                    <v-list-item-icon>
                      <v-icon color="primary">fa fa-map-marker-alt</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="white--text"
                        >102 calle de la libertad, San
                        Salvador</v-list-item-title
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col cols="12">
              <span class="text-lg-h6 white--text">Redes Sociales </span>
            </v-col>
            <v-col cols="12" lg="9" class="mt-5 d-flex justify-space-around">
              <v-btn
                icon
                x-large
                v-for="social in socials"
                :key="social.id"
                :href="social.url"
                target="_blank"
              >
                <v-avatar>
                  <v-icon color="white" dark>{{ social.icon }}</v-icon>
                </v-avatar>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" class="">
          <v-row class="d-flex justify-center pa-lg-15">
            <v-col cols="11" class="pa-0">
              <v-card class="white rounded-xl pa-lg-11 my-5">
                <v-card-title class="text-center d-flex justify-center">
                  <v-row>
                    <v-col class="d-flex justify-center" cols="12">
                      <v-img
                        max-width="165"
                        src="https://firebasestorage.googleapis.com/v0/b/sistema-control-covid.appspot.com/o/assets%2Fimages%2Flogo.png?alt=media&token=b311531d-f76b-43f6-ade3-b1fe69693a74"
                      ></v-img>
                    </v-col>
                    <v-col class="d-flex justify-center">
                      <h4 class="primary--text">
                        ¿Necesitas hablar con nosotros?
                      </h4>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text>
                  <v-form ref="form_contact" lazy-validation>
                    <v-row class="d-flex justify-center">
                      <v-col cols="12">
                        <v-text-field
                          v-model="contact.nombre"
                          label="Nombre completo"
                          outlined
                          type="text"
                          placeholder="Escriba su Nombre"
                          append-icon="fa fa-user"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="contact.email"
                          label="Correo electrónico"
                          outlined
                          type="email"
                          placeholder="Escriba su correo electrónico"
                          append-icon="fa fa-envelope"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="contact.message"
                          outlined
                          label="Mensaje"
                          placeholder="Escriba su mensaje"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-btn color="primary" class="mt-4" block type="submit">
                          Enviar mensaje
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    model: 0,
    socials: [
      {
        icon: "fab fa-facebook-f",
        url: "https://www.facebook.com/",
      },
      {
        icon: "fab fa-twitter",
        url: "https://www.twitter.com/",
      },
      {
        icon: "fab fa-instagram",
        url: "https://www.instagram.com/",
      },
    ],
    contact: {
      nombre: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    openMaps() {
      this.$swal({
        title: "Universidad Técnologica de Puebla",
        html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1216822464885!2d-98.15413958472905!3d19.058386887098063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1c9a30530ab%3A0xefd33e2f1a6ca5a2!2sUniversidad%20Tecnol%C3%B3gica%20de%20Puebla!5e0!3m2!1ses!2smx!4v1646455486352!5m2!1ses!2smx" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
        width: "700px",
      });
    },
  },
};
</script>

<style scoped>
.contact {
  background-color: #16275a;
}
.color-grey {
  color: #a6a7b9;
  font-size: 1.1rem;
}
</style>