<template >

  <div :class="FondoDashboard" v-if="rolUser==='Usuario'" class="Usuarios"><!--usuario vista-->
        <h1>bienvenido usuario</h1>
       <button @click="desloguear">logaut</button>
  </div>

  <div :class="FondoDashboard" v-if="rolUser==='Administrador'" class="Administrador"><!--administrador vista-->
    <div class="container" >
      <button @click="desloguear">logaut</button>
      <div class="panel">
          <nav>
            <input type="text" placeholder="buscar">
          </nav>

      </div>
      <div class="lista">
      
          <table class="table">
            <thead>
              <tr >
                <th scope="row">id</th>
                <td>nombres</td>
                <td>apellidos</td>
                <td>correo</td>
                <td>telefono</td>
                <td>rol</td>
                <td>acciones</td>
             </tr>
            </thead>
            <tbody >
              <tr v-for="usuario in usuariosFiltrados" :key="usuario.id"  >
                <th scope="row">{{ contador++ }}</th>
                <td>{{ usuario.nombres }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.telefono }}</td>
                <td>{{ usuario.rol }}</td>
                <td>
                  <button class="btn btn-danger">delete</button>
                  <button class="btn btn-primary">update</button>
                  <button class="btn btn-warning">create</button>
                </td>
             </tr>
             
              
            </tbody>
            </table>
      </div>

    </div>
   
  </div>

  <div :class="FondoDashboard" v-if="rolUser==='SuperAdministrador'" class="SuperAdministrador"><!--superadministrador vista-->
    <div class="container" >
      <button @click="desloguear">logaut</button>
      <div class="panel">
          <nav>
            <input type="text" placeholder="buscar">
          </nav>

      </div>
      <div class="lista">
      
          <table class="table">
            <thead>
              <tr  >
                <th scope="row">id</th>
                <td>nombres</td>
                <td>apellidos</td>
                <td>correo</td>
                <td>telefono</td>
                <td>rol</td>
                <td>acciones</td>
             </tr>
            </thead>
            <tbody >
              <tr v-for="usuario in usuariosFiltradosSuper" :key="usuario.id"  >
                <th scope="row">{{ contador++ }}</th>
                <td>{{ usuario.nombres }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.telefono }}</td>
                <td>{{ usuario.rol }}</td>
                <td>
                  <button @click="borrar(usuario.id)" class="btn btn-danger">delete</button>
                  <button class="btn btn-primary">update</button>
                  <button  class="btn btn-warning">create</button>
                </td>
                
             </tr>
         
             
              
            </tbody>
            </table>
      </div>

    </div>
    
  </div>

   
   
 
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
      rolUser:'',
      usuarios:[],
      contador:1
    }  
    
      
  },computed:{
  
    FondoDashboard(){
      if(this.$route.path === '/dashboard'){
        return 'fondo-blanco'
      }
    },
    usuariosFiltrados() {
    return this.usuarios.filter(usuario => usuario.rol === 'Usuario');
  },
  usuariosFiltradosSuper() {
    return this.usuarios.filter(usuario => usuario.rol !== 'SuperAdministrador');
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

        this.usuarios= JSON.parse(localStorage.getItem('usuarios'))



    },borrar(id) {
      console.log(id)
      const usuarioIndex = this.usuarios.findIndex(usuario => usuario.id === id);
      if (usuarioIndex !== -1) {
      this.usuarios.splice(usuarioIndex, 1);
  }
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
  
