<template>
  <div class="container">
    <h2>Editar Usuario</h2>
    <form @submit.prevent="editarUsuario">
      <label>
        Nombres:
        <input type="text" v-model="nombres" />
      </label>
      <label>
        Apellidos:
        <input type="text" v-model="apellidos" />
      </label>
      <label>
        Teléfono:
        <input type="tel" v-model="telefono" />
      </label>
      <label>
        ROL:
        <input type="tel" v-model="rol" />
      </label>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nombres: "",
      apellidos: "",
      telefono: "",
      rol: "",
      id: 0,
     
    };
  },
  mounted() {
    
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const idUsuario = this.$route.params.id; // obtiene el ID del usuario a editar desde la ruta

    this.id = idUsuario;

    usuarios.forEach((element) => {
      if (element.id == this.id) {
        this.nombres = element.nombres;
        this.telefono = element.telefono;
        this.apellidos = element.apellidos;
        this.rol = element.rol;
      }
    });
  },
  methods: {
    editarUsuario() {
      this.$swal({
        title: 'deseas seguir con esta accion?',
        text: "estas seguro que quieres actualizar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Actualizar'
      }).then((result) => {
        if (result.isConfirmed) {
          const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; //ARREGLO DE LOS USUARIOS
          const idUsuario = this.id; //asignandole  el respectivo id pasado por url
          usuarios.forEach((element) => {
            if (element.id == idUsuario) {
              element.nombres = this.nombres;
              element.telefono = this.telefono;
              element.apellidos = this.apellidos;
              element.rol = this.rol;
            }
          });

          
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          this.$swal({
           title: 'Actualizado',
            text:'usuario Actualizado.',
            icon:'success'
          }
          )
          if(this.$route.params.rol==='Administrador')
            this.$router.push('/admin/home_admin');
          }
          else if(this.$route.params.rol==='SuperAdministrador'){ 
            this.$router.push('/superadmin/home');
          }
      })
      /**/
    }
  },
};
</script>

<style scoped></style>
