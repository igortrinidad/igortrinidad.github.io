<template>
  <layout>
    <h1>Hi error</h1>
  </layout>
</template>

<script>
export default {
  name: 'NotFoundPage',
  mounted () {
    document.getElementById('main-div').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>
