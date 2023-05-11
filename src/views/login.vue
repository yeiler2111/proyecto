<template>
  <div id="principal" class="contenedor-principal row w-100 mx-auto">
    <!--comienzo grid-->
    <img
      class="col-md-6"
      src="@/assets/Global-e-Health-logo.png"
      alt="logo global e health"
    /><!--PRIMERA COLUMNA-->

    <form
      class="mt-5 container w-25 col-md-6"
      novalidate
      @submit.prevent="validar"
    >
      <!--SEGUNDA COLUMNA-->
      <div class="prueba">
        <h1 class="">Iniciar Sesion</h1>
      </div>
      <!-- input usuario -->
      <div class="form-outline mb-4 form-floating">
        <input
          type="email"
          id="form2Example1"
          class="form-control border border-dark"
          v-model="state.usuario.correo"
          required
        />
        <span class="error" v-if="v$.usuario.correo.$error">
          el correo es obligatorio
        </span>
        <label class="form-label usuario" for="form2Example1">Usuario</label>
      </div>
      <!--input contarseña -->
      <div class="form-outline mb-4 form-floating">
        <input
          type="password"
          id="form2Example2"
          class="form-control border border-dark"
          v-model="state.usuario.password"
          required
        />
        <span class="error" v-if="v$.usuario.password.$error">
          la contraseña es obligatoria
        </span>
        <label
          class="form-label font-weight:700; contraseña"
          for="form2Example2"
          >Contraseña</label
        >
      </div>
      <!-- grid una fila y dos columnas -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label class="form-check-label" for="form2Example31">
              Recordar
            </label>
          </div>
        </div>
        <div class="col">
          <!-- link -->
          <a href="">Olvidaste la contraseña?</a>
        </div>
      </div>
      <!-- button de submit -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Iniciar Sesion
      </button>
      <!-- button de registro -->
      <div class="text-center">
        <p>
          No estas registrado?
          <button class="btn btn-primary" type="button" @click="estado">
            Registrarse
          </button>
        </p>
      </div>
    </form>
  </div>
  <!--fin grid-->

  <Registro v-if="estados"></Registro>
  <fot></fot>
</template>

<script>
import fot from "@/components/footer.vue";
import Registro from "@/components/registrar.vue";
import { reactive, computed } from "vue";
import { required, email } from "vuelidate/lib/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "login",
  mounted() {},
  setup() {
    const state = reactive({
      usuario: {
        correo: "",
        password: "",
      },
    });

    const rules = computed(() => {
      return {
        usuario: {
          correo: { required, email },
          password: { required },
        },
      };
    });
    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },
  data() {
    return {
      estados: false,
      mostrarmsg: false,
      acceso: false,
      logueados: [],
    };
  },
  components: {
    fot,
    Registro,
  },
  methods: {
    validar() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.logear();
      }
    },
    estado() {
      this.estados = !this.estados;
    },
    showAlertRegistrar(c, text) {
      if (c === "success") {
        this.$swal({
          title: "bienvenido",
          text: text,
          icon: "success",
          confirmButtonText: "aceptar",
        });
      } else if (c === "error") {
        this.$swal({
          icon: "error",
          title: "ERROR LOGIN",
          text: text,
        });
      }
    },
    logear() {
      let encontrado = false;
      this.msg = ""; //mensaje de error por si algo sale mal
      let dbLocal = JSON.parse(localStorage.getItem("usuarios"));
      if (dbLocal === null) {
        this.error = "no existe ningun usuario registrado en este momento";
      } else {
        dbLocal.forEach((usuario) => {
          if (
            this.state.usuario.correo === usuario.correo &&
            this.state.usuario.password === usuario.password
          ) {
            encontrado = true; //si se encontro el usuario->para no mostrar el mensaje de error
            usuario.logeado = true; //añadiendo al objeto un atributo llamado logeado
            this.logueados.push(usuario); //ingresando al array de logueados el usuario
            localStorage.setItem(
              "UsuariosLogueados",
              JSON.stringify(this.logueados)
            );

            if (usuario.rol === "Administrador") {
              this.$router.push("/admin/home_admin");
            } else if (usuario.rol === "SuperAdministrador") {
              this.$router.replace("/superadmin/home");
              console.log(this.$route.someProperty);
            } else if (usuario.rol === "Usuario") {
              this.$router.push("/user/home");
            }

            this.showAlertRegistrar("success", "inició correctamente");
          }
        });

        if (!encontrado) {
          this.showAlertRegistrar(
            "error",
            "verifique los datos de autenticacion"
          );
        }
      }
    },
  },
};
</script>

<style scope>
@media (max-width: 768px) {
  .contenedor-principal img {
    height: 230px;
    width: 100%;
  }
}

.contenedor-principal a {
  color: black;
}
.error {
  color: red;
  font-weight: bold;
}

.prueba h1 {
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

body {
  background: rgb(224, 223, 249);
  background: linear-gradient(
    90deg,
    rgba(224, 223, 249, 1) 19%,
    rgba(0, 212, 255, 1) 48%
  );
}
</style>
