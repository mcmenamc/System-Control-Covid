<template>
  <div>
      <v-card 
      elevation = "2"
      :loading="loading"
      class="mx-auto my-12 pa-2 cardColors"
      max-width="740"
      >
        <v-card-title class="justify-center text-h6 font-weight-regular">
            <span>{{currentTitle}}</span>
        </v-card-title>
        <v-window v-model="step">
            <v-window-item :value="1">
                <v-form>
                    <v-text-field
                    type="text"
                    label="Nombre"
                    placeholder="Nombre"
                    >                        
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
        </v-window>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
            :dissabled="step === 1"
            text
            @click="step--"
            >
                back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
            :disabled="step === 3"
            color="primary"
            depressed
            @click="step++"
            >
                Next
            </v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
//Creacion de objetos
data:() => ({
    loading: false,
    //Pasos a seguir en v-window
    step: 1
}),
//Metodos computados
computed:{
    //Se coloca los titulos a v-window
    currentTitle(){
        switch(this.step){
            case 1: return 'Sign-up'
            case 2: return 'Enter your data'
            default: return 'Account created'
        }
    }
}
}
</script>

<style>
.cardColors{
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important;
}
</style>