<template>
  <section >
     <div>
    <NavBar/>
        <Card/>
    <nuxt/>
  </div>
  </section>
</template>
<script>
  import NavBar from '~/components/NavBar.vue'
  import Card from '~/components/Card.vue'

  export default{
    components:{
      NavBar,
      Card
    }
  }
</script>
<style>

</style>

