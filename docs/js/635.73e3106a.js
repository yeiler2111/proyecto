"use strict";(self["webpackChunkproyecto"]=self["webpackChunkproyecto"]||[]).push([[635],{4635:function(o,t,r){r.r(t),r.d(t,{default:function(){return w}});var s=r(3396),e=r(7139);const i=o=>((0,s.dD)("data-v-4f4d5778"),o=o(),(0,s.Cn)(),o),a={class:"container container-fluid"},n={class:"panel"},l={class:"lista"},u={class:"table"},c=i((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"row"},"id"),(0,s._)("td",null,"nombres"),(0,s._)("td",null,"apellidos"),(0,s._)("td",null,"correo"),(0,s._)("td",null,"telefono"),(0,s._)("td",null,"rol"),(0,s._)("td",null,"acciones")])],-1))),d={scope:"row"},m=["onClick"],h=["onClick"];function p(o,t,r,i,p,g){const f=(0,s.up)("Registro");return(0,s.wg)(),(0,s.iD)("div",{class:(0,e.C_)([g.FondoDashboard,"SuperAdministrador"])},[(0,s._)("div",a,[(0,s._)("div",n,[(0,s._)("nav",null,[(0,s._)("button",{onClick:t[0]||(t[0]=(...o)=>g.cambiarC&&g.cambiarC(...o)),class:"btn btn-warning"},"create"),(0,s._)("button",{onClick:t[1]||(t[1]=(...o)=>g.desloguear&&g.desloguear(...o))},"logaut")])]),(0,s._)("div",l,[(0,s._)("table",u,[c,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(g.usuariosFiltrados,(o=>((0,s.wg)(),(0,s.iD)("tr",{key:o.id},[(0,s._)("th",d,(0,e.zw)(o.id),1),(0,s._)("td",null,(0,e.zw)(o.nombres),1),(0,s._)("td",null,(0,e.zw)(o.apellidos),1),(0,s._)("td",null,(0,e.zw)(o.correo),1),(0,s._)("td",null,(0,e.zw)(o.telefono),1),(0,s._)("td",null,(0,e.zw)(o.rol),1),(0,s._)("td",null,[(0,s._)("button",{onClick:t=>g.borrar(o.id),class:"btn btn-danger"}," delete ",8,m),(0,s._)("button",{onClick:t=>g.modificar(o.id),class:"btn btn-primary"}," update ",8,h)])])))),128))])])])]),p.mostrarC?((0,s.wg)(),(0,s.j4)(f,{key:0,permisos:["Usuario"]})):(0,s.kq)("",!0)],2)}r(7658);var g=r(6047),f={components:{Registro:g.Z},name:"admin",data(){return{verUsuario:!1,verAdministrador:!1,verSuperAdministrador:!1,rolUser:"",usuarios:[],mostrarC:!1,rolActual:"Administrador"}},computed:{FondoDashboard(){if("/dashboard"===this.$route.path)return"fondo-blanco"},usuariosFiltrados(){return this.usuarios.filter((o=>"Usuario"===o.rol))}},methods:{showAlertRegistrar(o,t){"success"===o?this.$swal({title:"bienvenidos",text:"inicio de sesion con exito",icon:o,confirmButtonText:"aceptar"}):"error"===o&&this.$swal({icon:"error",title:"Oops...",text:t})},desloguear(){let o=JSON.parse(localStorage.getItem("UsuariosLogueados"));o.forEach(((t,r)=>{t&&o.splice(r,1)})),localStorage.setItem("UsuariosLogueados",JSON.stringify(o)),this.$router.push("/"),this.$swal({title:"Deslogueado",text:"cerrar sesion",icon:"success",confirmButtonText:"aceptar"})},informacionUsuario(){let o=JSON.parse(localStorage.getItem("UsuariosLogueados"));o.forEach((o=>{this.rolUser=o.rol})),this.usuarios=JSON.parse(localStorage.getItem("usuarios"))},borrar(o){this.$swal({title:"deseas seguir con esta accion?",text:"estas seguro que quieres eliminar",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"eliminar"}).then((t=>{if(t.isConfirmed){const t=this.usuarios.findIndex((t=>t.id===o));-1!==t&&(this.usuarios.splice(t,1),localStorage.setItem("usuarios",JSON.stringify(this.usuarios))),this.$swal({title:"eliminado",text:"usuario removido del sistema.",icon:"success"})}}))},cambiarC(){this.mostrarC?this.mostrarC=!1:this.mostrarC=!0},modificar(o){this.$router.push({name:"editar-usuario",params:{id:o,rol:this.rolActual}})}},mounted(){this.informacionUsuario()}},_=r(89);const b=(0,_.Z)(f,[["render",p],["__scopeId","data-v-4f4d5778"]]);var w=b}}]);
//# sourceMappingURL=635.73e3106a.js.map