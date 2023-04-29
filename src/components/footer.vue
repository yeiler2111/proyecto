<template>
  <footer class=" text-light py-3 fixed-bottom">
        <div class="container text-center">
          <p><span>Derechos reservados &copy; Mi sitio web 2023</span> </p>
        </div>
      </footer>
</template>

<script>
export default {
  name: '',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @media(max-width: 768px){
      .fixed-bottom{
        position: static;
      }
    }
    span{
      font-weight: 700;
      font-size: 1.2rem;
    }
    
</style>
