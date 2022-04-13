<template>
  <div>
    <v-card
      elevation="5"
      :loading="loading"
      class="mx-auto my-12 pa-2 cardColors"
      max-width="1540"
      outlined
    >
      <v-row class="justify-center no-gutters">
        <v-col class="d-none d-md-flex" cols="6" md="6">
          <v-img src="@/assets/images/virusjuas.jpg">
            <v-row class="align-center">
              <v-col class="mx-auto" cols="6">
                <v-card> </v-card>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
        <v-col class="" cols="6" md="6">
          <v-card class="pa-4 my-16" elevation="0">
            <div class="text-center">
              <v-avatar color="logo lighten-4" size="100">
                <v-icon color="logo" size="40">fas fa-address-book</v-icon>
              </v-avatar>
              <v-card-title class="justify-center text-h6 font-weight-regular">
                <h2 class="indigo--text">{{ currentTitle }}</h2>
              </v-card-title>
            </div>
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-form>
                  <v-text-field type="text" label="Nombre" placeholder="Nombre">
                  </v-text-field>
                  <v-text-field
                    type="text"
                    label="Apellido Paterno"
                    placeholder="Apellido Paterno"
                  >
                  </v-text-field>
                  <v-text-field
                    type="text"
                    label="Apellido Materno"
                    placeholder="Apellido Materno"
                  >
                  </v-text-field>
                </v-form>
              </v-window-item>
              <v-window-item :value="2">
                <v-form>
                  <v-text-field type="email" label="e-mail" placeholder="email">
                  </v-text-field>
                  <v-text-field
                    type="password"
                    label="Contraseña"
                    placeholder="Contraseña"
                  >
                  </v-text-field>
                  <v-text-field
                    type="password"
                    label="Confirma tu contraseña"
                    placeholder="Confirmar contraseña"
                  >
                  </v-text-field>
                </v-form>
              </v-window-item>
              <v-window-item :value="3">
                <v-form>
                  <v-menu
                    ref="menu"
                    v-model="calendario.menu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="calendario.date"
                        label="Fecha de nacimiento"
                        prepend-icon="fas fa-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      >
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="calendario.date"
                      :activate-picker.sync="calendario.activePicker"
                      :max="
                        new Date(
                          Date.now() - new Date().getTimezoneOffset() * 60000
                        )
                          .toISOString()
                          .substr(0, 10)
                      "
                      min="1950-01-01"
                      @change="save"
                    >
                    </v-date-picker>
                  </v-menu>
                  <v-radio-group>
                    <template v-slot:label
                      >Selecciona tu <strong>Sexo</strong></template
                    >
                    <v-row class="">
                      <v-col cols="6" sm="6" md="6">
                        <v-radio
                          label="Masculino"
                          color="primary"
                          value="Masculino"
                          class=""
                        >
                        </v-radio>
                      </v-col>
                      <v-col cols="6" sm="6" md="6">
                        <v-radio label="Femenino" color="pink" value="Femenino">
                        </v-radio>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </v-form>
              </v-window-item>
              <v-window-item :value="4">
                <v-form>
                  <v-text-field> </v-text-field>
                </v-form>
              </v-window-item>
            </v-window>
            <v-divider class="d-none"></v-divider>
            <v-card-actions>
              <v-btn :dissabled="step === 1" text @click="step--"> Atras </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="step === 4"
                color="primary"
                depressed
                @click="step++"
              >
                Adelante
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  //Creacion de objetos
  data: () => ({
    loading: false,
    //Pasos a seguir en v-window
    step: 1,
    //Calendario
    calendario: {
      activePicker: null,
      date: null,
      menu: false,
    },
  }),

  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },

  //Metodos computados
  computed: {
    //Se coloca los titulos a v-window
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Registrate";
        case 2:
          return "Ingresa tu correo y contraseña";
        case 3:
          return "Ingresa tus datos personales";
        case 4:
          return "Ingresa Hola Mundo";
        default:
          return "Account created";
      }
    },
  },
};
</script>

<style>
.cardColors {
  /* background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important; */
}
</style>