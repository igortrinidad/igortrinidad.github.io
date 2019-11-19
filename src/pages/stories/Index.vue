<template>
  <layout>
    <section>
      <div>
        <h1>Stories[]</h1>
      </div>
    </section>
  </layout>
</template>

<script>

export default {
  name: 'StoriesIndex',
  components: {
  },
  metaInfo: {
    title: `Stories`
  },
  mounted () {
    document.getElementById('main-div').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style>

  .image-home{
    max-width: 80%;
    border: 1px solid #fff;
  }
</style>
