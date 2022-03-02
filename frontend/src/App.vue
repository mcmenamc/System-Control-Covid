<template>
  <v-app>
    <Preloader />
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndUp"
      elevation="0"
      app
      :color="bgcolor"
      class="d-flex justify-center"
    >
      <v-img
        width="180"
        @click="inicio()"
        class="mr-5 poiter"
        src="@/assets/images/logo.png"
      ></v-img>
      <v-btn
        class="mr-2 custom-transform-class text-none text-md-h6"
        :text="link.btn"
        v-for="link of links"
        :key="link.id"
        :to="link.url"
        :color="link.color"
        :plain="link.btn"
      >
        {{ link.name }}
      </v-btn>
    </v-app-bar>

    <v-app-bar
      elevation="0"
      v-if="$vuetify.breakpoint.smAndDown"
      app
      :color="bgcolor"
      class=""
    >
      <v-row class="flex justify-center align-center">
        <v-col cols="6" sm="4" class="d-flex justify-start">
          <v-img width="150" src="@/assets/images/logo.png"></v-img>
        </v-col>
        <v-col cols="6" sm="4" class="d-flex justify-end">
          <v-btn @click.stop="drawer = !drawer" icon>
            <v-icon>{{ `fas ${drawer ? "fa-times" : "fa-bars"}` }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            >SISTEMA-COVID-19</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="primary--text text--accent-4">
          <v-list-item
            v-for="link in links"
            :key="link.id"
            @click="() => $vuetify.goTo(link.url)"
            :class="`${link.btn ? '' : 'd-none'}`"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn :to="links[4].url" :color="links[4].color" block>
            {{ links[4].name }}
          </v-btn>
        </div>
        <div :class="`pa-2 `">
          <v-btn :to="links[5].url" :color="links[5].color" block>
            {{ links[5].name }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <XyzTransition
          appear
          xyz="fade in-left-100% out-right-100%"
          mode="out-in"
        >
          <router-view />
        </XyzTransition>
      </v-container>
    </v-main>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.id"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.name }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Sistema Control Covid</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
export default {
  name: "App",
  components: {
    Preloader,
  },
  data: () => ({
    links: [
      {
        name: "Inicio",
        url: "/",
        btn: true,
        color: "primary",
        icon: "fas fa-home",
      },
      {
        name: "Acerca de",
        url: "/about",
        btn: true,
        color: "primary",
        icon: "fas fa-question-circle",
      },
      {
        name: "Contacto",
        url: "/contact",
        btn: true,
        color: "primary",
        icon: "fas fa-info-circle",
      },
      {
        name: "Sintomas",
        url: "/#sintomascovid",
        btn: true,
        color: "primary",
        icon: "fas fa-ambulance",
      },
      {
        name: "Entrar",
        url: "/login",
        btn: false,
        color: "primary",
      },
      {
        name: "Registrar",
        url: "/register",
        btn: false,
        color: "success",
      },
    ],
    bgcolor: "transparent",
    drawer: false,
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 75 ||
        document.documentElement.scrollTop > 75
      ) {
        this.bgcolor = "white";
      } else {
        this.bgcolor = "transparent";
      }
    },
    inicio() {
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push("/");
      }

    },
    
  },

};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap");
.text-one {
  font-family: "Oswald", sans-serif;
}
.text-sub {
  font-family: "Roboto", sans-serif;
}
.text-normal {
  font-family: "Mukta", sans-serif;
}
.rojo-text {
  color: #ff8086;
}
main {
  background-color: #f6f8fe;
}
html::-webkit-scrollbar {
  width: 8px;
  background: #f0f0f0;
}
html::-webkit-scrollbar-thumb {
  background-color: rgb(206, 206, 206);
  border-radius: 10px;
}
html::-webkit-scrollbar-thumb:hover {
  background-color: rgba(105, 105, 105, 0.7);
}
.poiter:hover {
  cursor: pointer;
}
</style>