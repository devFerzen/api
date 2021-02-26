<template>
  <b-container align="left" class="vacante" style="padding-bottom:20px; padding-top: 50px; overflow:hidden;">

  </b-container>
</template>

<script>
export default {

  watch: {
    //Aquí estará el watch para mandar a cambiar la información del componente
    //ya que no se renderiza el componente ni vuelve a pasar por los hook cycles
    //así que se hablará el wath para checar su url.
    $route(to, from){
      //Reaccionar a los cambios
    }
  }
}
</script>

<style lang="css" scoped>
</style>
