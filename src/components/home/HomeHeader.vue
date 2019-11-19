<template>
  <div class="">
    <section id="intro">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="m-b-0">
            My name's Igor Trindade, i'm a web developer that transform caffeine in code
          </h3>
          <p class="m-t-0">
            like most of my species
          </p>
          <p class="m-t-30">
            Type in the terminal above "cat igortrindade" or
          </p>
          <button @click="catIgorTrindade()" type="button" class="btn btn-outline btn-primary m-t-10">
            Click here
          </button>
        </div>
      </div>
    </section>

    <section id="hi-there">
      <h1 class="text-center">
        About{}
      </h1>
      <div class="row m-t-30">
        <div class="col-sm-12 col-md-6 text-center aligner-center">
          <span>
            <img class="image-home" src="/img/igor-home.jpg">
            <h2>Hi there!</h2>
          </span>
        </div>

        <div class="col-sm-12 col-md-6">
          <prism language="javascript">{{ person }}</prism>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

import { hobbiesList } from '@/assets/js/hobbies'
import bus from '@/assets/js/event-bus'
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  data () {
    return {
      person: {
        name: 'Igor Trindade',
        age: '32',
        github: 'https://github.com/igortrinidad',
        hobbies: hobbiesList,
        dependencies: [
          {
            type: 'Dog',
            name: 'Pluto'
          },
          {
            type: 'Dog',
            name: 'Bacon'
          },
          {
            type: 'Bird',
            name: 'Maria'
          }
        ]
      }
    }
  },
  methods: {
    catIgorTrindade () {
      bus.$emit('start-typing', 'cat igortrindade')
    }
  }
}
</script>

<style>

    #intro{
        min-height: 70vh;
    }

    .about-me{
        text-align: center;
    }

    .image-home{
        max-width: 60%;
        -webkit-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.45);
        -moz-box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.45);
        box-shadow: 10px 10px 33px -4px rgba(0,0,0,0.45);
    }

</style>
