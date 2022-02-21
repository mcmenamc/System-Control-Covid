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
      <v-col cols="12" md="11" lg="9" xl="7">
        <v-row class="d-flex justify-center">
          <v-col cols="11" md="6" class="pa-0">
            <v-row>
              <v-col cols="12">
                <v-card min-height="73vh" class="py-4 ma-0">
                  <v-card-title class="text-center d-flex justify-center">
                    <v-row>
                      <v-col class="d-flex justify-center" cols="12">
                        <v-img
                          max-width="165"
                          src="@/assets/images/logo.png"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <h4 class="primary--text">¡Hola de nuevo!</h4>
                      </v-col>
                    </v-row>
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form" lazy-validation>
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
                            :rules="[rules.required, rules.max]"
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
                            class="mt-4"
                          ></v-checkbox>

                          <v-btn
                            color="primary"
                            class="mt-4"
                            block
                            @click="validate"
                          >
                            Iniciar sesión
                          </v-btn>
                          <p class="d-flex justify-lg-end">
                            <v-btn class="text-caption" text plain
                              >¿No tengo cuenta? Registrarse
                            </v-btn>
                          </p>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
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
              class="rounded"
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
  name: "Login",
  data: () => ({
    show: false,
    login: {
      email: "",
      contrasena: "",
    },
    rules: {
      required: (value) => !!value || "Requerido.",
      // min: (v) => v.length >= 8 || "Min 8 caracteres.",
      max: (v) => v.length <= 12 || "Max 12 caracteres.",
      email: (b) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(b) ||
        "Correo no válido.",
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
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        // console.log("validado ahora vamos a loguear", this.login);
        this.loginAuth();
      }
    },
    loginAuth() {
      // consulta con axios
      this.axios
        .post("auth", this.login)
        .then((response) => {
          console.log(response.data);
          // console.log(response.data.results.token);
          if (response.data.data == true && response.data.results.token) {
            console.log("login correcto");
              this.$router.push('/');
          } else {
            // console.log("login incorrecto");
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Usuario o contraseña incorrectos",
            });
          }
          // if(response.data.status == 'success'){
          //   this.$store.commit('setUser', response.data.user);
          //   this.$store.commit('setToken', response.data.token);
          //   this.$router.push('/');
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
