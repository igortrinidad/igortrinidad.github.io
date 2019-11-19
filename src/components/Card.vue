<template>
  <div class="click-enter">
    <g-link :to="'/projects/' + project.id" class="card click-enter">
      <div class="card-header click-enter">
        <h3 class="t-overflow">
          {{ project.name }}
        </h3>
        <p class="max-lines">
          {{ project.description }}
        </p>
      </div>
      <div class="card-body click-enter">
        <img :src="project.image_url" height="60px" class="project-icon">
      </div>
    </g-link>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>

    .card{
      cursor: pointer;
      display: block;
      width: 100%;
      background-color: rgba(0,0,0,0.3);
      border: solid 2px rgba(0,0,0,0.01);
      color: #fff;
    }

    .card-body{
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 120px;
      padding: 0px;
    }

    .card-header{
      padding: 10px 15px 10px 15px;

    }

    .card:hover{
      border: solid 2px rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease-in-out;
    }

    .project-icon{
      opacity: 0.4;
      max-height: 40%;
      transition: all 0.2s ease-in-out;
    }

    .max-lines {
      display: block; /* or inline-block */
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 3.6em;
      line-height: 1.8em;
    }
</style>
