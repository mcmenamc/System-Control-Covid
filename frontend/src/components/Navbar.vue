<template>
  <!-- Creación del navbar -->
  <div>      
      <v-app-bar app dark>
          <v-btn @click="drawer = true" class="d-flex d-sm-none" icon elevation="0"> 
              <v-icon>fa-solid fa-bars</v-icon>
          </v-btn>
          <div class="d-flex align-center" :to="'/'">
              <v-img
                alt="logo"
                class="shrink mr-2 image"
                contain
                src="@/assets/icons/logo.png"
                width="150"
                @click="inicio()"
              >                  
              </v-img>
          </div>
          <template>
              <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
                  <v-tabs-slider color="white"></v-tabs-slider>
                  <v-tab v-for="item in items.slice(0,5)" :key="item.id" :to="item.url">
                      {{item.name}}
                  </v-tab>
              </v-tabs>
          </template>
          <v-spacer></v-spacer>
          <v-btn text :to="items[5].url" :color="items[5].color">
              <span class="mr-2">{{items[5].name}}</span>
              <v-icon>{{items[5].icon}}</v-icon>
          </v-btn>
      </v-app-bar>
      
      <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
              <v-subheader>Settings</v-subheader>
              <v-list-item-group active-class="green text--accent-4">
                  <v-list-item
                    v-for="item in items"
                    :key="item.id"
                    :to="item.url"
                    :class="`${item.btn ? '' : 'd-none'}`"
                  >                      
                    <v-list-item-icon>
                        <v-icon>
                            {{item.icon}}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-title @click="tab = index">
                        {{item.name}}
                    </v-list-item-title>
                  </v-list-item>
              </v-list-item-group>
          </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: "App",

    data:() => ({
        drawer: false,
        tab: null,
        items: [
            //0
            {
                name: "Home",
                url: "/",
                btn: true,
                icon: "fas fa-home"
            },
            //1
            {
                name: "Meta",
                url: "/meta",
                btn: true,
                icon: "fas fa-code-branch"
            },
            //2
            {
                name: "Company",
                url: "/company",
                btn: true,
                icon: "fas fa-building"
            },
            //3
            {
                name: "Support",
                url: "/support",
                btn: true,
                icon: "fas fa-cog"
            },
            //4
            {
                name: "Contact",
                url: "/contact",
                btn: true,
                icon: "fas fa-phone-alt"
            },
            //5
            {
                name: "Sign in",
                url: "/signin",
                btn: false,
                icon: "fa-solid fa-user",
                color: "green" 
            },
        ]
    }),
    methods:{
        inicio(){
            if(this.$router.currentRoute.path !== "/")
            {
                this.$router.push("/")
            }
        }
    }
}
</script>

<style>
.image{
    cursor: pointer;
}
</style>