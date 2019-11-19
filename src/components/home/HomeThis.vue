<template>
  <section style="margin-top: 50px;">
    <h1 class="text-center">
      let that = this
    </h1>
    <div class="row m-t-30 text-center">
      <div class="col-sm-12 col-md-12 text-center">
        <p>This project (portfolio) was made using <a href="https://github.com/vuejs/vue" target="_blank">Vue.Js</a> and <a href="https://gridsome.org/" target="_blank">Gridsome</a></p>

        <p>Did you see something that could be improved here? Send a pull request \o/</p>
      </div>
      <div class="col-sm-12 col-md-12 text-center">
        <a href="https://github.com/igortrinidad/igortrindade-portfolio" target="_blank" class="btn btn-outline btn-primary m-t-10">See this repo on GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeThis',
  data () {
    return {
      pageLT: 0
    }
  },
  mounted () {
    this.pageLT = ((window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000) + ' seconds'
  }
}

</script>

<style>

.image-home{
    max-width: 80%;
    border: 1px solid #fff;
}
</style>
