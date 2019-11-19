<template>
  <section id="hobby" v-if="hobby_selected">
    <h1 class="text-center">
      makeHobby('{{ hobby_selected.name }}')
    </h1>
    <div class="row m-t-30 text-center">
      <div class="col-sm-12 col-md-12">
        <button @click="makeAHobby()" type="button" class="btn btn-outline btn-primary">
          Make another hobby
        </button>
      </div>
      <div class="col-sm-12 col-md-12">
        <img :src="hobby_selected.link" class="m-t-20 hobby-gif">
      </div>
    </div>

    <div class="about-me" />
  </section>
</template>

<script>

import { getHobby } from '@/assets/js/hobbies'

export default {
  name: 'HomeHobby',
  data () {
    return {
      hobby_selected: null
    }
  },
  mounted () {
    this.makeAHobby()
  },
  methods: {
    makeAHobby () {
      this.hobby_selected = getHobby()
    }
  }
}

</script>

<style scoped>

    .hobby-gif{
        width: 45% !important;
        border: 1px solid #fff;
    }

    @media (max-width: 720px){
        .hobby-gif{
            width: 80% !important;
            border: 1px solid #fff;
        }
    }

    @media (max-width: 580px){
        .hobby-gif{
            width: 95% !important;
            border: 1px solid #fff;
        }
    }
</style>
