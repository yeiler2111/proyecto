<template>
     <div class="tab-pane w-50 container" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
                <h1 class="text-center mb-4 ">Registro</h1>
              <div class="form-outline form-floating mb-4">
                <input type="text" id="registerName" class="form-control" v-model="usuario.nombres" />
                <label class="form-label" for="registerName">nombres</label>
              </div>
        
              <!-- ingresando apellidos -->
              <div class="form-outline form-floating mb-4">
                <input type="text" id="registerUsername" class="form-control" v-model="usuario.apellidos" />
                <label class="form-label" for="registerUsername">apellidos</label>
              </div>
        
              <!-- ingresando el email -->
              <div class="form-outline form-floating mb-4">
                <input type="email" id="registerEmail" class="form-control" v-model="usuario.correo" />
                <label class="form-label" for="registerEmail">Email</label>
              </div>
        
              <!-- ingresando el passwordt -->
              <div class="form-outline form-floating mb-4">
                <input type="password" id="registerPassword" class="form-control" v-model="usuario.password" />
                <label class="form-label" for="registerPassword">Password</label>
              </div>
        
              <!-- repitiendo password -->
              <div class="form-outline form-floating mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" v-model="usuario.repeatpass" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
              </div>

              <!--ESTABLECE EL ROL-->
              <div class="form-check">
                <input class="form-check-input" type="radio" name="rol" id="superadmin" value="SuperAdministrador" v-model="usuario.rol">
                <label class="form-check-label" for="superadmin">
                  SuperAdministrador
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="rol" id="admin" value="Administrador" v-model="usuario.rol">
                <label class="form-check-label" for="admin">
                  Administrador
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="rol" id="usuario" value="Usuario" v-model="usuario.rol">
                <label class="form-check-label" for="usuario">
                  Usuario
                </label>
              </div>
              <!-- Submit button -->
                <button type="submit" class="btn btn-primary  mb-3" @click="agregarUsuario">Registrarse</button>
            </form>
            <div class="alert alert-danger w-100" role="alert" v-if="error !== ''">
              <h1>{{ error }}</h1>
            </div>
        </div>
        
</template>


<script>
export default{
    name:'Registro',
    data(){
        return{
           submited:false,
           usuario:{
              nombres:'',
              apellidos:'',
              correo:'',
              password:'',
              repeatpass:'',
              rol:''
           },
           usuarios:[],
           error:''
        }
    },
    methods:{
      agregarUsuario(){
        this.error=''
        this.submited=true
        if(this.submited){
          if(this.usuario.nombres === ''){
              this.error='insercion no exitosa compruebe que el campo NOMBRES no este vacio'
            return 
          }else if(this.usuario.apellidos === ''){
            this.error='insercion no exitosa compruebe que el campo Apellidos no este vacio'
            return
          }else if(this.usuario.correo === ''){
            this.error='insercion no exitosa compruebe que el campo CORREO  no este vacio'
            return
          } else if(this.usuario.password === ''){
            this.error='insercion no exitosa compruebe que el campo  PASSWORD no este vacio'
            return
          } else if(this.usuario.repeatpass === ''){
            this.error='insercion no exitosa compruebe que el campo CONFIRMACION DE PASSWORDs no este vacio'
            return
          }else if(this.usuario.password!==this.usuario.repeatpass){
            this.error='insercion no exitosa compruebe que el campo contraseñas ingresadas sean iguales no este vacio'
            return
          }else if(this.usuario.rol===''){
            this.error='ingrese un ROL'
            return
          }
          else{
            // Agregar el usuario al arreglo existente
            
           this.usuarios.push(this.usuario)
            // Guardar el arreglo de usuarios en localStorage
            localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
            // Redirigir al usuario a otra página     
            this.usuario.nombres=''
            this.usuario.apellidos=''
            this.usuario.correo=''
            this.usuario.password=''
            this.usuario.repeatpass=''
            this.usuario.ro=''
            this.$router.push('/')
          }

        }
          
      }

    }


}

</script>

<style scoped>


    
</style>