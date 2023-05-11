<template>
    <div>
      <h1>
        <Header :title="title" ></Header>
      </h1>
       
        
        <router-view />
        <Footer></Footer>
        
        
    </div>
    
</template>
<script>
import Footer from "../../components/footer.vue"
import Header from "../../components/Header.vue"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
        title: "SuperAdmin"
    }
  },

  created(){

  },

  mounted() {

  },
  
  methods: {
    
  },
};
</script>