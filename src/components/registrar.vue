<template>
  <div
    class="tab-pane w-50 container"
    id="pills-register"
    role="tabpanel"
    aria-labelledby="tab-register"
  >
    <form ref="form" novalidate @submit.prevent="validar">
      <h1 class="text-center mb-4">Creando Usuario</h1>
      <span v-if="error!=''">{{ error }}</span>
        <!-- ingresando nombres -->
      <div class="form-outline form-floating mb-4">
        <input
          type="text"
          id="registerName"
          class="form-control"
          v-model="state.usuario.nombres"
          required
        />
        <span class="error" v-if="v$.usuario.nombres.$error">
            ingrese el nombre
        </span>
        <label class="form-label" for="registerName">nombres</label>
        
      
      </div>

      <!-- ingresando apellidos -->
      <div class="form-outline form-floating mb-4">
        <input
          type="text"
          id="registerUsername"
          class="form-control"
          v-model="state.usuario.apellidos"
          required
        />
        <span class="error" v-if="v$.usuario.apellidos.$error">
            ingrese el apellido
        </span>
        <label class="form-label" for="registerUsername">apellidos</label>
       
      </div>

      <!-- ingresando el email -->
      <div class="form-outline form-floating mb-4">
        <input
          type="email"
          id="registerEmail"
          class="form-control"
          v-model="state.usuario.correo"
          required
        />
        <span class="error" v-if="v$.usuario.correo.$error">
            ingrese el correo
        </span>
        <label class="form-label" for="registerEmail">Email</label>
       
      </div>

      <!--telefono-->
      <div class="form-outline form-floating mb-4">
        <input
          type="text"
          id="registerCell"
          class="form-control"
          v-model="state.usuario.telefono"
          required
        />
        <span class="error" v-if="v$.usuario.telefono.$error">
            ingrese el telefono
        </span>
        <label class="form-label" for="registerCell">numero telefono</label>
        
      </div>

      <!-- ingresando el password -->
      <div class="form-outline form-floating mb-4">
        <input
          type="password"
          id="registerPassword"
          class="form-control"
          v-model="state.usuario.password"
          required
        />
        <span class="error" v-if="v$.usuario.password.$error">
            ingrese la contraseña
        </span>
        <label class="form-label" for="registerPassword">Password</label>
      
      </div>

      <!-- repitiendo password -->
      <div class="form-outline form-floating mb-4">
        <input
          type="password"
          id="registerRepeatPassword"
          class="form-control"
          v-model="state.usuario.repeatpass"
          required
        />
        <span class="error" v-if="v$.usuario.repeatpass.$error ">
            confirme la contraseña.
        </span>
        
        <label class="form-label" for="registerRepeatPassword"
          >Repeat password</label
        >
      </div>

      <div v-if="permisos==null">
        <div class="form-check">
            <input
            class="form-check-input"
            type="radio"
            name="rol"
            id="superadmin"
            value="SuperAdministrador"
            v-model="state.usuario.rol"
            />
          <label class="form-check-label" for="superadmin">
            SuperAdministrador
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="rol"
            id="admin"
            value="Administrador"
            v-model="state.usuario.rol"
            
          />
            <label class="form-check-label" for="admin"> Administrador </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="rol"
            id="usuario"
            value="Usuario"
            v-model="state.usuario.rol"
              
              
           />
          <label class="form-check-label" for="usuario"> Usuario </label>
            
        </div>
      </div>
      <!--ESTABLECE EL ROL
      
      -->

      <div v-for="(item,index) in permisos" :key="index" class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="rol"
          :id="item"
          :value="item"
          v-model="state.usuario.rol"
        
         
        />
        <label class="form-check-label" :for="item">
          {{ item }}
        </label>
      </div>

      

      
    
      <!-- Submit button -->
      <div class="container d-grid">
        <span  class="mb-2 error" v-if="v$.usuario.rol.$error">
            ingrese algun rol
        </span>
        <button
        type="submit"
        class="btn btn-primary mb-3"
        
      >
        Registrarse
      </button>
      </div>
      
    </form>
   
  </div>
</template>

<script>
import {required , email, sameAs} from "vuelidate/lib/validators"
import {useVuelidate} from '@vuelidate/core'
import { reactive,computed } from "vue";
import minLength from 'vuelidate/lib/validators/minLength';
export default {
  props: {
    permisos: {
      type: Array,
      required: true
    }
  },
  name: "Registro",
  setup(){
    const state = reactive({
      usuario: {
        id: 0,
        nombres: "",
        apellidos: "",
        correo: "",
        password: "",
        repeatpass: "",
        rol: "",
        telefono: "",
      },
    })

    const rules = computed(()=>{
      return{
        usuario:{
            nombres:{required},
            apellidos:{required},
            correo:{required,email},
            password:{required,minLength:minLength(3)},
            repeatpass:{required,sameAscontraseña: sameAs("password")},
            rol:{required},
            telefono:{required}
            
          },
      }
    })
    const v$=useVuelidate(rules,state)

    return{
      state,
      v$,
    }
  },
  data() {
    return {
       
      submited: false,
     
    
      usuarios: [],
      error: "",
      registrado: false,
    };
  },

  methods: {
    validar(){
      
        this.v$.$validate()
        if(!this.v$.$error){
          this.agregarUsuario()
        }
      
        
    },
   
    agregarUsuario() {
      this.registrado = false;
      this.submited = true;
      this.error=''
      if (this.submited) {
       
          // Obtener el arreglo existente del LocalStorage
          //id de cada objeto autoincremental
          const usuario = this.state.usuario
          const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //obteniendo el arreglo de usuarios

          // Verificar si el correo ya está registrado
          const correoExistente = usuarios.find(
            (u) => u.correo === usuario.correo
          );
          if (correoExistente) {
            this.error =
              "El correo ya está registrado. Por favor, cambia el correo.";
            return;
          }
          //validando que solo haya un super administrador
          if (usuario.rol === "SuperAdministrador") {
            const haySuperAdmin = usuarios.some(
              (usuario) => usuario.rol === "SuperAdministrador"
            )
            if (haySuperAdmin) {
              this.error = "ya se encuentra registardo un superadministrador";
              return;
            }
          }

          //Agregando Id
          let ultimoId = 0;
          if (usuarios.length > 0) {
            ultimoId = usuarios[usuarios.length - 1].id;
          }

          usuario.id = ultimoId + 1;

          // Agregar el nuevo usuario al arreglo
          usuarios.push(usuario);

          // Guardar el arreglo actualizado en el LocalStorage
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          this.$swal({
            title:'exitoso',
            Text:'usuario registrado',
            icon:'success',
            confirmButtonText:'ok'
          }).then(() => {
               this.$router.push('/') // Redireccionar a la ruta '/dashboard'
          })
         
          
        }

       
      
    }
  },
  

};
</script>

<style scoped>
  #pills-register{
    position: relative;
    background: rgba(0,0,0,0.8);  
    border-radius: 10%;  
    color: white;
  }
  .error{
      font-weight: bold;
      color: red;
  }
</style>
