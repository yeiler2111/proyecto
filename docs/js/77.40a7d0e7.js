"use strict";(self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[]).push([[77],{3077:function(t,o,s){s.r(o),s.d(o,{default:function(){return w}});var r=s(3396),e=s(7139);const i={class:"container container-fluid"},a={class:"panel"},n=(0,r._)("input",{type:"text",placeholder:"buscar"},null,-1),l={class:"lista"},u={class:"table"},c=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"row"},"id"),(0,r._)("td",null,"nombres"),(0,r._)("td",null,"apellidos"),(0,r._)("td",null,"correo"),(0,r._)("td",null,"telefono"),(0,r._)("td",null,"rol"),(0,r._)("td",null,"acciones")])],-1),d={scope:"row"},m=["onClick"],p=["onClick"];function h(t,o,s,h,g,_){const b=(0,r.up)("Registro");return(0,r.wg)(),(0,r.iD)("div",{class:(0,e.C_)(t.Administrador)},[(0,r._)("div",i,[(0,r._)("div",a,[(0,r._)("nav",null,[(0,r._)("button",{onClick:o[0]||(o[0]=(...t)=>_.cambiarC&&_.cambiarC(...t)),class:"btn btn-warning"},"create"),n,(0,r._)("button",{onClick:o[1]||(o[1]=(...t)=>_.desloguear&&_.desloguear(...t))},"logaut")])]),(0,r._)("div",l,[(0,r._)("table",u,[c,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.usuariosFiltradosSuper,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("th",d,(0,e.zw)(t.id),1),(0,r._)("td",null,(0,e.zw)(t.nombres),1),(0,r._)("td",null,(0,e.zw)(t.apellidos),1),(0,r._)("td",null,(0,e.zw)(t.correo),1),(0,r._)("td",null,(0,e.zw)(t.telefono),1),(0,r._)("td",null,(0,e.zw)(t.rol),1),(0,r._)("td",null,[(0,r._)("button",{onClick:o=>_.borrar(t.id),class:"btn btn-danger"},"delete",8,m),(0,r._)("button",{onClick:o=>_.modificar(t.id),class:"btn btn-primary"},"update",8,p)])])))),128))])])])]),g.mostrarC?((0,r.wg)(),(0,r.j4)(b,{key:0,permisos:["Administrador","Usuario"]})):(0,r.kq)("",!0)],2)}s(7658);var g=s(6047),_={components:{Registro:g.Z},name:"dashboardSuperAdmin",data(){return{usuarios:[],mostrarC:!1,rolActual:"SuperAdministrador"}},computed:{usuariosFiltradosSuper(){return this.usuarios.filter((t=>"SuperAdministrador"!==t.rol))}},methods:{showAlertRegistrar(t,o){"success"===t?this.$swal({title:"bienvenidos",text:"inicio de sesion con exito",icon:t,confirmButtonText:"aceptar"}):"error"===t&&this.$swal({icon:"error",title:"Oops...",text:o})},desloguear(){let t=JSON.parse(localStorage.getItem("UsuariosLogueados"));t.forEach(((o,s)=>{o&&t.splice(s,1)})),localStorage.setItem("UsuariosLogueados",JSON.stringify(t)),this.$router.push("/"),this.$swal({title:"Deslogueado",text:"cerrar sesion",icon:"success",confirmButtonText:"aceptar"})},informacionUsuario(){JSON.parse(localStorage.getItem("UsuariosLogueados"));this.usuarios=JSON.parse(localStorage.getItem("usuarios"))},borrar(t){this.$swal({title:"deseas seguir con esta accion?",text:"estas seguro que quieres eliminar",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"eliminar"}).then((o=>{if(o.isConfirmed){const o=this.usuarios.findIndex((o=>o.id===t));-1!==o&&(this.usuarios.splice(o,1),localStorage.setItem("usuarios",JSON.stringify(this.usuarios))),this.$swal({title:"eliminado",text:"usuario removido del sistema.",icon:"success"})}}))},cambiarC(){this.mostrarC=!this.mostrarC},modificar(t){this.$router.push({name:"editar-usuario",params:{id:t,rol:this.rolActual}})}},mounted(){this.informacionUsuario()}},b=s(89);const f=(0,b.Z)(_,[["render",h]]);var w=f}}]);
//# sourceMappingURL=77.40a7d0e7.js.map