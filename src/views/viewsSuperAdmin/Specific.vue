<template >
    <div :class="Administrador"><!--administrador vista-->
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
                        <button @click="modificar(usuario.id)" class="btn btn-primary">update</button>
                        
                        </td>
                        
                    </tr>
                
                    
                    
                    </tbody>
                    </table>
            </div>
            
      </div>
      <Registro v-if="mostrarC"  :permisos="['Administrador','Usuario']"></Registro>
    </div>
  </template>  
<script>  
import Registro from "../../components/registrar.vue"
export default
{
    components:{
        Registro,
    },
    name:'dashboardSuperAdmin',
    data(){
        return{
            usuarios:[],
            mostrarC:false,
            rolActual:'SuperAdministrador'
        }  
    },
    computed:{

        usuariosFiltradosSuper() {//funcion que manda el arreglo de administradores y usuarios
            return this.usuarios.filter(usuario => usuario.rol !== 'SuperAdministrador');
        }
    },
    methods:{
     
        showAlertRegistrar(c,text){//alertas
            if (c === 'success'){
                this.$swal({
                title:'bienvenidos',
                text:'inicio de sesion con exito',
                icon:c,
                confirmButtonText:'aceptar'
            })
            }else if(c ==='error'){
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: text,
            
            })
            }
            
        },
        desloguear(){
            let usuario = JSON.parse(localStorage.getItem('UsuariosLogueados'))
            usuario.forEach((item, index) => {
            if (item) {
                usuario.splice(index, 1);
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
    
        },
        informacionUsuario(){
            let usuario = JSON.parse(localStorage.getItem('UsuariosLogueados'))  
            this.usuarios= JSON.parse(localStorage.getItem('usuarios')) //obteniendo los usuarios registrados en el localstoge
        },
        borrar(id) {//metodo eliminar registro por id
            this.$swal({
            title: 'deseas seguir con esta accion?',
            text: "estas seguro que quieres eliminar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'eliminar'
            }).then((result)=>{
            if(result.isConfirmed){
                const usuarioIndex = this.usuarios.findIndex(usuario => usuario.id === id);
                if (usuarioIndex !== -1) {
                this.usuarios.splice(usuarioIndex, 1);
                localStorage.setItem('usuarios', JSON.stringify(this.usuarios))
                }
                this.$swal({
                title: 'eliminado',
                text:'usuario removido del sistema.',
                icon:'success'
                })
            }
            })
            
        },
        cambiarC(){
            this.mostrarC=!this.mostrarC
         
        },
        modificar(index){
            this.$router.push({ name:'editar-usuario', params:{id:index, rol:this.rolActual}})
        }
    
    
    },
    mounted(){
        this.informacionUsuario()
    },
    
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
    
  