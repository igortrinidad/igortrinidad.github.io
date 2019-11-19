<template>
  <section id="projects">
    <h1 class="text-center">
      Projects[]
    </h1>
    <div class="row m-t-30">
      <div v-for="project in projects" :key="project.id" class="col-md-6 col-sm-12">
        <card :project="project" />
      </div>

      <div class="col-sm-12 col-md-12 text-center m-t-30">
        <router-link to="/projects" class="btn btn-outline btn-primary">
          See all projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>

import { getLastProjects } from '@/assets/js/projects'
import card from '@/components/Card'

export default {
  name: 'HomeProjects',
  components: {
    card
  },
  data () {
    return {
      projects: getLastProjects()
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
