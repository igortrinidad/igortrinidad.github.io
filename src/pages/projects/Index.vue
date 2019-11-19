<template>
  <layout>
    <section>
      <div>
        <h1>Projects[]</h1>
        <g-link to="/" class="btn btn-outline btn-primary btn-xs">
          Back to home
        </g-link>
        <hr>

        <div class="row">
          <div v-for="project in projects" :key="project.id" class="col-md-6 col-sm-12 text-center">
            <card :project="project" />
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>

import { getProjects } from '@/assets/js/projects'
import Card from '@/components/Card'

export default {
  metaInfo: {
    title: `Projects`
  },
  name: 'ProjectsIndex',
  components: {
    Card
  },
  scrollToTop: true,
  data () {
    return {
      projects: getProjects()
    }
  },
  mounted () {
    document.getElementById('main-div').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
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

</style>
