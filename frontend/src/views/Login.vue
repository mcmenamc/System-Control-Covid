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
                <v-card>
                  <v-tabs v-model="tab" background-color="white" centered grow>
                    <v-tab v-for="item in item_s" :key="item.tab">
                      {{ item }}
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card min-height="68vh" class="py-4 ma-0">
                        <v-card-title class="text-center d-flex justify-center">
                          <v-row>
                            <v-col class="d-flex justify-center" cols="12">                              
                                <v-img
                                  max-width="165"
                                  src="@/assets/images/logo.png"
                                ></v-img>
                              
                            </v-col>
                            <v-col class="d-flex justify-center">                              
                                <h4 class="primary--text">¡Hola de nuevo!</h4>
                              
                            </v-col>
                          </v-row>
                        </v-card-title>
                        <v-card-text>
                          <v-form
                            ref="form_login"
                            lazy-validation
                            @submit.prevent="validate"
                          >
                            <v-row class="d-flex justify-center">
                              <v-col cols="12" sm="8" md="7">
                                
                                  <v-text-field
                                    v-model="login.email"
                                    label="Correo electrónico"
                                    outlined
                                    :rules="[rules.required, rules.email]"
                                    type="email"
                                    placeholder="Escriba su correo electrónico"
                                    append-icon="fas fa-at"
                                    class="mt-4"
                                  ></v-text-field>                                
                              </v-col>
                              <v-col cols="12" sm="8" md="7">
                                
                                  <v-text-field
                                    v-model="login.contrasena"
                                    label="Contraseña"
                                    outlined
                                    :rules="[
                                      rules.required,
                                      rules.max,
                                      rules.min,
                                    ]"
                                    :type="show ? 'text' : 'password'"
                                    placeholder="Escriba su contraseña"
                                    :append-icon="
                                      show ? 'fas fa-eye' : 'fas fa-eye-slash'
                                    "
                                    @click:append="show = !show"
                                    class=""
                                  ></v-text-field>                                
                                
                                  <v-checkbox
                                    value="1"
                                    label="recordarme"
                                    type="checkbox"
                                    required
                                    v-model="remember"
                                    class="mt-4"
                                  ></v-checkbox>
                                
                                
                                  <v-btn
                                    color="primary"
                                    class="mt-4"
                                    block
                                    type="submit"
                                  >
                                    Iniciar sesión
                                  </v-btn>
                                
                                <p class="d-flex justify-end">
                                 
                                    <v-btn class="text-caption" text plain
                                      >¿No tengo cuenta? Registrarse
                                    </v-btn>
                                
                                </p>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card min-height="68vh" class="py-4 ma-0">
                        <v-card-title class="text-center d-flex justify-center">
                          <v-row>
                            <v-col class="d-flex justify-center" cols="12">
                              
                                <v-img
                                  max-width="165"
                                  src="@/assets/images/logo.png"
                                ></v-img>
                              
                            </v-col>
                            <v-col class="d-flex justify-center">
                              
                                <h4 class="primary--text">¡Registrate!</h4>
                              
                            </v-col>
                          </v-row>
                        </v-card-title>
                        <v-card-text>
                          <v-form
                            ref="form_registro"
                            lazy-validation
                            @submit.prevent="validate"
                          >
                            <v-row class="d-flex justify-center">
                              <v-col class="pa-0" cols="12" sm="8" md="7">
                                <v-form>
                                  <v-window v-model="step">
                                    <v-window-item :value="1">
                                      <v-text-field
                                        label="Nombre"
                                        outlined
                                        :rules="[rules.required]"
                                        type="text"
                                        placeholder="Escriba su nombre"
                                        class="mt-4"
                                        v-model="register.nombre"
                                      ></v-text-field>
                                      <v-text-field
                                        label="Apellido Paterno"
                                        outlined
                                        :rules="[rules.required]"
                                        type="text"
                                        placeholder="Escriba su apeliido paterno"
                                        class="mt-4"
                                        v-model="register.apellidoP"
                                      ></v-text-field>
                                      <v-text-field
                                        label="Apellido Materno"
                                        outlined
                                        :rules="[rules.required]"
                                        type="text"
                                        placeholder="Escriba su apellido materno"
                                        class="mt-4"
                                        v-model="register.apellidoM"
                                      ></v-text-field>

                                      <span
                                        class="
                                          text-caption
                                          grey--text
                                          text--darken-1
                                        "
                                      >
                                        Tus datos serán protegidos, y no estará
                                        expuesto ante terceros
                                      </span>
                                    </v-window-item>
                                    <v-window-item :value="2">
                                      <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                      >
                                        <template
                                          v-slot:activator="{ on, attrs }"
                                        >
                                          <v-text-field
                                            v-model="date"
                                            label="Fecha de nacimiento"
                                            prepend-icon="fa-solid fa-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                          ></v-text-field>
                                        </template>
                                        <v-date-picker
                                          v-model="date"
                                          :active-picker.sync="activePicker"
                                          :max="
                                            new Date(
                                              Date.now() -
                                                new Date().getTimezoneOffset() *
                                                  60000
                                            )
                                              .toISOString()
                                              .substr(0, 10)
                                          "
                                          min="1950-01-01"
                                          @change="save"
                                        ></v-date-picker>
                                      </v-menu>
                                      <h6 class="text-h6">Sexo:</h6>
                                      <v-row class="py-3">
                                        <v-col class="">
                                          <vs-radio v-model="picked" val="1">
                                            Masculino
                                          </vs-radio>
                                        </v-col>
                                        <v-col class="">
                                          <vs-radio
                                            v-model="picked"
                                            color="pink"
                                            val="2"
                                          >
                                            Femenino
                                          </vs-radio>
                                        </v-col>
                                      </v-row>
                                      <v-btn @click="imprimirJUASJUAS">
                                        Compruebame
                                      </v-btn>
                                    </v-window-item>

                                    <v-window-item :value="3">                                      
                                        <v-text-field
                                        label="Contraseña"
                                        outlined                                        
                                        type="password"
                                        placeholder="Escriba su contraseña"
                                        class="mt-4"
                                        autocomplete="current-password"
                                        :value="userPassword"
                                        hint="¡Tu contraseña pasó! ¡Las reglas de contraseña no están destinadas a romperse!"

                                        @click:append="() => (value = !value)"
                                        :type="value ? 'password' : 'text'"
                                        :rules="[rules.password]"
                                        @input="_=>userPassword=_"
                                      ></v-text-field>
                                      <v-text-field
                                        label="Verifique la contraseña"
                                        outlined                                        
                                        type="password"
                                        placeholder="Reescriba la contraseña"
                                        class="mt-4"                                        
                                      ></v-text-field>
                                    </v-window-item>
                                  </v-window>

                                  <v-window-item :value="4">
                                      <div class="pa-4 text-center">
                                        <v-img
                                          class="mb-4"
                                          contain
                                          height="128"
                                          src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                                        ></v-img>
                                        <h3
                                          class="text-h6 font-weight-light mb-2"
                                        >
                                          Welcome to Vuetify
                                        </h3>
                                        <span class="text-caption grey--text"
                                          >Thanks for signing up!</span
                                        >
                                      </div>
                                    </v-window-item>
                                  </v-window>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-btn
                                      :disabled="step === 1"
                                      text
                                      @click="step--"
                                    >
                                      Back
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      :disabled="step === 4"
                                      color="primary"
                                      depressed
                                      @click="step++"
                                    >
                                      Next
                                    </v-btn>
                                  </v-card-actions>
                                </v-form>
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            :class="`${
              $vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? 'd-none' : ''
            }  pa-0 `"
            cols="11"
            md="6"
          >
           
              <v-carousel
                hide-delimiters
                height="73vh"
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
  name: "Login",
  async created() {
    Nprogress.done();
  },
  data: () => ({
    show: false,
    login: {
      email: "",
      contrasena: "",
    },
    remember: null,
    loading: true,
    rules: {
      required: (value) => !!value || "Requerido.",
      min: (v) => v.length >= 5 || "Min 5 caracteres.",
      max: (v) => v.length <= 12 || "Max 12 caracteres.",
      email: (b) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b) ||
        "Correo no válido.",
      password: value => {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return(
          pattern.test(value) ||
          "Min. 8 caracteres con al menos una letra mayúscula, un número y un carácter especial"
        );
      }
      
    },
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

    tab: null,
    item_s: ["Iniciar Sesión", "Registrarse"],
    step: 1,
    picked: 1,
    // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //   .toISOString()
    //   .substr(0, 10),
    register: {
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      fechaNacimiento: null,
      sexo: "",
    },
    modal: false,
    activePicker: null,
    date: null,
    menu: false,

    //Validación de las contraseñas
    userPassword: "",
    valid: true,
    value: true,    
  }),

  watch:{
    menu(val){
      val && setTimeout(() => (this.activePicker = 'AÑO'))
    }
  },

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  methods: {
    validate() {
      this.$refs.form_login.validate();
      if (this.$refs.form_login.validate()) {
        this.loginAuth();
      }
    },
    async loginAuth() {
      const loading = this.$vs.loading({
        text: "Cargando...",
        color: "primary",
        type: "circles",
      });
      this.axios
        .post("auth", this.login)
        .then((response) => {
          const token = response.data.results.token;
          console.log(response.data);
          loading.close();
          if (response.data.data == true && token) {
            localStorage.setItem("token", token);
            this.$store.dispatch("doLogin", token);
            this.$router.push("/user");
          } else {
            localStorage.removeItem("token");
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Usuario o contraseña incorrectos",
            });
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          console.log(error);
        });
    },
    save(date){
      this.$refs.menu.save(date)
    },
    imprimirJUASJUAS() {
      console.log(this.register);
    },
  }  
};
</script>
