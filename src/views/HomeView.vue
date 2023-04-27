<template>

<div class="contenedor-principal row w-100 mx-auto"><!--comienzo grid-->
  <img class="col-md-6 " src="@/assets/Global-e-Health-logo.png" alt="logo global e health"><!--PRIMERA COLUMNA-->

  <form class="mt-5 container w-25 col-md-6"> <!--SEGUNDA COLUMNA-->

  <!-- input usuario -->
  <div class="form-outline mb-4 ">
      <label class="form-label" for="form2Example1">Usuario</label>
      <input type="text" id="form2Example1" class="form-control border border-dark" />
  </div>
  <!--input contarseña -->
  <div class="form-outline mb-4">
    <label class="form-label font-weight:700;" for="form2Example2">Contraseña</label>
    <input type="password" id="form2Example2" class="form-control border border-dark" />
  </div>
  <!-- grid una fila y dos columnas -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> recordar </label>
      </div>
    </div>
    <div class="col">
      <!-- link -->
      <a href="#!">olvidaste la contraseña?</a>
    </div>
  </div>
  <!-- button de submit -->
  <button type="button" class="btn btn-primary btn-block mb-4">iniciar session</button>
  <!-- button de registro -->
  <div class="text-center">
    <p>no estas registrado? <a href="#!">Registrarse</a></p>
  </div>
</form>
</div><!--fin grid-->>

</template>

<script>

export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>

<style scope>

    @media( max-width:768px){
      
      .contenedor-principal img{
           height: 230px;
           width: auto;
        }
      }

</style>