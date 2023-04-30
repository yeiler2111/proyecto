<template >

<div class="contenedor-principal row w-100 mx-auto"><!--comienzo grid-->
  <img class="col-md-6 " src="@/assets/Global-e-Health-logo.png" alt="logo global e health"><!--PRIMERA COLUMNA-->

  <form class="mt-5 container w-25 col-md-6"> <!--SEGUNDA COLUMNA-->
    <div class="prueba">
       <h1 class="">Iniciar Sesion</h1>
       <div class="alert alert-danger" v-if="msg !== ''">
          <h3>{{ msg }}</h3>
       </div>
    </div>
  <!-- input usuario -->
  <div class="form-outline mb-4 form-floating">
      
      <input type="email" id="form2Example1" class="form-control border border-dark " v-model="correo"/>
      <label class="form-label usuario" for="form2Example1">Usuario</label>
  </div>
  <!--input contarseña -->
  <div class="form-outline mb-4 form-floating" >

    <input type="password" id="form2Example2" class="form-control border border-dark" v-model="password"/>
    <label class="form-label font-weight:700; contraseña" for="form2Example2">Contraseña</label>
  </div>
  <!-- grid una fila y dos columnas -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Recordar </label>
      </div>
    </div>
    <div class="col">
      <!-- link -->
      <a href="">Olvidaste la contraseña?</a>
    </div>
  </div>
  <!-- button de submit -->
  <button @click="logear" type="button" class="btn btn-primary btn-block mb-4">Iniciar Sesion</button>
  <!-- button de registro -->
  <div class="text-center">
    <p>No estas registrado? <booton class="btn btn-primary" @click="mostrarValor">Registrarse</booton></p>
  </div>
</form>
</div><!--fin grid-->>

<Registro v-if="estado" ></Registro>


<fot ></fot>

</template>

<script>
import fot from "@/components/footer.vue"
import Registro from "@/components/registrar.vue"
import { routeLocationKey } from 'vue-router'
export default {
  name: 'login',
  data(){
    return{
      estado:false,
      correo:'',
      password:'',
      msg:'',
      mostrarmsg:false,
      acceso:false,
      logueados:[]
    }
  },
  components: {
   fot,
   Registro
},
methods:{
  mostrarValor(){
    if(this.estado){
      this.estado=false
    }else{
      this.estado=true
    }
  },
  logear(){ 
      this.msg=''
      let dbLocal= JSON.parse(localStorage.getItem('usuarios'))
      

      if(this.correo==='' || this.password==''){
          this.msg='ERROR no se puede iniciar sesion sin el correo o la password'
      }else if(dbLocal===null) {
          this.error='no existe ningun usuario registrado en este momento'
     }else{
          dbLocal.forEach(usuario => {
              if(this.correo===usuario.correo && this.password===usuario.password){
                  this.acceso=true
                  usuario.logeado=true
                  this.logueados.push(usuario)
                  localStorage.setItem('UsuariosLogueados',JSON.stringify(this.logueados))
                  this.$router.push('/dashboard')

              }
          })
          
          this.msg='verificar contraseña y gmail. sino registrate :)'
        }
}
     
}
}




</script>

<style scope>

    @media( max-width:768px){
      
      .contenedor-principal img{
           height: 230px;
           width: 100%;
           
        }
      

      }
     .contenedor-principal a{
        color: black;
      }

      .prueba h1{
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom: 2rem;
        
      }

      body{
        background: rgb(224,223,249);
        background: linear-gradient(90deg, rgba(224,223,249,1) 19%, rgba(0,212,255,1) 48%);
      }

     
     


</style>