<template>
  <layout>
    <section>
      <HomeContact />
    </section>
  </layout>
</template>

<script>

import HomeContact from '@/components/home/HomeContact'

export default {
  name: 'ContactIndex',
  components: {
    HomeContact
  },
  head () {
    return {
      title: "Igor Trindade's Terminal - Web Development",
      meta: [
        { hid: 'description', name: 'description', content: 'Igor Trindade Web Development' }
      ]
    }
  }
}
</script>

<style>

  .image-home{
    max-width: 80%;
    border: 1px solid #fff;
  }

</style>
