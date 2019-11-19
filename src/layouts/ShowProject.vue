<template>
  <layout>
    <div class="row" v-if="project">
      <div class="col-sm-12 col-md-12">
        <button @click="back()" type="button" class="btn btn-outline btn-primary btn-xs">
          back
        </button>

        <h1>{{ project.name }}</h1>
        <p class="m-b-30">
          {{ project.description }}
        </p>
      </div>

      <div class="col-sm-12 col-md-12">
        <button :href="project.website" @click="openProject(project)" :disabled="!project.is_active" class="btn btn-outline btn-primary m-b-0">
          openProject('{{ project.id }}')
        </button>
        <p v-if="!project.is_active">
          Unfortunatelly this project isn't available anymore :'(
        </p>
      </div>

      <div class="col-sm-12 col-md-12">
        <prism language="javascript">{{ project }}</prism>
      </div>
    </div>
  </layout>
</template>

<script>

import { getProjectById } from '@/assets/js/projects'
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  metaInfo: {
    title: `Projects`
  },
  name: 'ProjectsShowWePlanner',
  scrollToTop: true,
  data () {
    return {
      project: null
    }
  },
  mounted () {

    this.project = this.$context.project

    document.getElementById('main-div').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  },
  methods: {
    openProject (project) {
      window.open(project.website, '_system', null)
    },
    back () {
      window.history.back()
    },
    getJsonString(){
      JSON.stringify()
    }
  }
}
</script>
