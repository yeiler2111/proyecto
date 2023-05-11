<template >
    <div class="Administrador"><!--administrador vista-->
      <div class="container container-fluid" >
      
            <div class="panel">
                <nav >
                    <button >create</button>
                    <input type="text" placeholder="buscar">
                    <button >logaut</button>
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
                    <tr > <!--definicion de filas-->
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <button >delete</button>
                        <button >update</button>
                        
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
    methods(){
       
    }
}
</script>