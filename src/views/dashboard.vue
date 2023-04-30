<template >

  <div :class="FondoDashboard" v-if="rolUser==='Usuario'" class="Usuarios"><h1>bienvenido usuario</h1> <button @click="desloguear">logaut</button></div>
  <div :class="FondoDashboard" v-if="rolUser==='Administrador'" class="Administrador"><h1>bienvenido administardor</h1><button @click="desloguear">logaut</button></div>
  <div :class="FondoDashboard" v-if="rolUser==='SuperAdministrador'" class="SuperAdministrador"><h1>bienvenido SuperAdministrador</h1><button @click="desloguear">logaut</button></div>

   
   >
 
</template>

<script>
export default{
  name:'dashboard',
  mounted:{

  },
  data(){
    return{
      verUsuario:false,
      verAdministrador:false,
      verSuperAdministrador:false,
      rolUser:''
    }  
      
  },computed:{
  
    FondoDashboard(){
      if(this.$route.path === '/dashboard'){
        return 'fondo-blanco'
      }
    }
      

  }
  ,
  methods:{
    desloguear(){
      let usuario = JSON.parse(localStorage.getItem('UsuariosLogueados'))
      usuario.forEach((item, index) => {
        if (item) {
          usuario.splice(index, 1)
        }
      })
      localStorage.setItem('UsuariosLogueados', JSON.stringify(usuario))
      this.$router.push('/')
  },
  informacionUsuario(){
        let usuario = JSON.parse(localStorage.getItem('UsuariosLogueados'))  
        usuario.forEach(item => {
            this.rolUser=item.rol
        });
    }
  },
  mounted(){
    this.informacionUsuario()
  }
  }
</script>

<style >
  
    .fondo-blanco{
      background-color: white;
    }
  

</style>
  
