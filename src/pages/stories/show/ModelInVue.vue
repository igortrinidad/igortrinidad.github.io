<template>
  <layout>
    <h1>Prism Demo</h1>

    <h2>HTML</h2>
    <pre class="language-html">
      <code>
        {{ html }}
      </code>
    </pre>

    <h2>JavaScript</h2>

    <prism language="javascript">{{ json }}</prism>

  </layout>
</template>

<script>

import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  },
  data () {
    return {
      json: {
        name: "json"
      },
      html: `
      <article>
        <h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1>
        <p>Go to https://www.yasminzy.com/tutorial/prism.html</p>
      </article>`
    }
  }
}
</script>

<style  scoped>
    pre:not(:last-of-type) {
    margin-bottom: 2rem;
    }
</style>
