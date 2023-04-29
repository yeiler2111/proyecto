<template>
     <div class="tab-pane w-50 container" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
                <h1 class="text-center mb-4 ">Registro</h1>
              <div class="form-outline form-floating mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">Name</label>
              </div>
        
              <!-- Username input -->
              <div class="form-outline form-floating mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">Username</label>
              </div>
        
              <!-- Email input -->
              <div class="form-outline form-floating mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">Email</label>
              </div>
        
              <!-- Password input -->
              <div class="form-outline form-floating mb-4">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
              </div>
        
              <!-- Repeat Password input -->
              <div class="form-outline form-floating mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
              </div>
              <!-- Submit button -->
                <button type="submit" class="btn btn-primary  mb-3">Registrarse</button>
            </form>
        </div>
</template>


<script>
export default{
    name:'Registro',
    data(){
        return{
           
        }
    }

}

</script>

<style scoped>
   
    
</style>