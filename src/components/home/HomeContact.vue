<template>
  <section style="margin-top: 50px;">
    <h1 class="text-center">
      sayHi()
    </h1>
    <p class="m-b-30 text-center">
      It will be nice to hear from you!
    </p>
    <div class="row m-t-30">
      <div class="col-sm-12 col-md-6 text-center m-t-30">
        <button @click="emailMe()" type="button" class="btn btn-outline btn-primary m-t-10">
          emailMe()
        </button>
      </div>

      <div class="col-sm-12 col-md-6 text-center m-t-30">
        <button @click="startWhatsAppMessage()" type="button" class="btn btn-outline btn-primary m-t-10">
          whatsAppMe()
        </button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeContact',
  components: {
  },
  head () {
    return {
      title: "Igor Trindade's Terminal - Web Development",
      meta: [
        { hid: 'description', name: 'description', content: 'Igor Trindade Web Development' }
      ]
    }
  },
  methods: {
    startWhatsAppMessage () {
      const url = `https://api.whatsapp.com/send?phone=+5531991455975&text=Hi, Igor! I loved your terminal ! \\o/`
      window.open(url, '_system', null)
    },
    emailMe () {
      window.open('mailto:igorlucast@hotmail.com', '_self')
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
