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
    <div class="container container-fluid" >
    
      <div class="panel">
          <nav >
            <button @click="cambiarC" class="btn btn-warning">create</button>
            <input type="text" placeholder="buscar">
            <button @click="desloguear">logaut</button>
          </nav>

      </div>
      <div class="lista">
      
          <table class="table">
            <thead><!--definicion de columnas-->
              <tr>
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
              <tr v-for="usuario in usuariosFiltradosSuper" :key="usuario.id"> <!--definicion de filas-->
                <th scope="row">{{ usuario.id }}</th>
                <td>{{ usuario.nombres }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.correo }}</td>
                <td>{{ usuario.telefono }}</td>
                <td>{{ usuario.rol }}</td>
                <td>
                  <button @click="borrar(usuario.id)" class="btn btn-danger">delete</button>
                  <button  class="btn btn-primary">update</button>
                  
                </td>
                
             </tr>
         
             
              
            </tbody>
            </table>
      </div>
         <registro v-if="mostrarC"></registro>
       

    </div>
    <foter class="foter"></foter>
  </div>

   
   
 
</template>

<script>
 import registro from "@/components/crear.vue"
 import foter from "@/components/footer.vue"
export default{
 
  name:'dashboard',
  data(){
    return{
      verUsuario:false,
      verAdministrador:false,
      verSuperAdministrador:false,
      rolUser:'',
      usuarios:[],
      mostrarC:false
      
    }  
    
      
  },computed:{
  
    FondoDashboard(){//fondo de las visatas
      if(this.$route.path === '/dashboard'){
        return 'fondo-blanco'
      }
    },
    usuariosFiltrados() {//funcion que manda el arreglod e los usuarios
    return this.usuarios.filter(usuario => usuario.rol === 'Usuario');
  },
  usuariosFiltradosSuper() {//funcion que manda el arreglo de administradores y usuarios
    return this.usuarios.filter(usuario => usuario.rol !== 'SuperAdministrador');
  }
      

  },
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
            this.rolUser=item.rol//asignandole el rol del usuario logueado para definir la vista requerida
        });

        this.usuarios= JSON.parse(localStorage.getItem('usuarios')) //obteniendo los usuarios registrados en el localstoge
    },borrar(id) {//metodo eliminar registro por id
        if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
          const usuarioIndex = this.usuarios.findIndex(usuario => usuario.id === id);
          if (usuarioIndex !== -1) {
            this.usuarios.splice(usuarioIndex, 1);
            localStorage.setItem('usuarios', JSON.stringify(this.usuarios))
          }
        }
      },
      cambiarC(){
        if(this.mostrarC){
          this.mostrarC=false 
        }else{
          this.mostrarC=true
        }
      },
     
  
  },
  mounted(){
    this.informacionUsuario()
  },
  components:{
    registro,
    foter
  }
  }
</script>

<style >
  
    .fondo-blanco{
      background-color: white;
    }
    nav{
      display: flex;
      justify-content: space-between;
    }

    .foter{
        background-color: black;
        color: white;
      
    }


</style>
  
