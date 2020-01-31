<template>
  <div id="app">
    <div class="wrapper">
      <app-sidebar/>

      <div class="main-panel">
        <app-navbar />
         <div class="content">
           <router-view/>
         </div>
         <app-footer/>
      </div>

     
       
    </div>
   
      
   </div>
 
</template>


<script>
import navbar from '@/components/navbar.vue'
import sidebar from '@/components/sidebar.vue'
import footer from '@/components/footer.vue'
export default {
  components : {
    'app-sidebar' : sidebar,
    'app-footer' : footer,
    'app-navbar' : navbar
  }
}
</script>

<style>

</style>
