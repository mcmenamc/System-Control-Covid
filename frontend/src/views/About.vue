<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: () =>({

  }),
  created(){
    this.listarNotas();
  },
  methods:{
    listarNotas(){
      this.axios.get('covid')
      .then((response) => {
        console.log(response.data)
      })
      .catch((e)=>{
        console.log('error' + e);
      })
    }
  }
}
</script>