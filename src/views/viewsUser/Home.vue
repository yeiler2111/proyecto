<template>
    <div>
      <button class="btn btn-danger" @click="desloguear">logaut</button>
        <h1>bienvenido usuario</h1>
    </div>
    
    
</template>
<script>


export default {
  
  data() {
    return {
        title: "User"
    }
  },

  created(){

  },

  mounted() {

  },
  
  methods: {
    desloguear(){
        let usuario = JSON.parse(localStorage.getItem('UsuariosLogueados'))
        usuario.forEach((item, index) => {
          if (item) {
            usuario.splice(index, 1)
          }
        })
        localStorage.setItem('UsuariosLogueados', JSON.stringify(usuario))
  
        this.$router.push('/')
        this.$swal({
              title:'Deslogueado',
              text:'cerrar sesion',
              icon:'success',
              confirmButtonText:'aceptar'
         
        
            })
  
    }
  },
};
</script>