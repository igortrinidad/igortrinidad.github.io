<template>
  <div>
    <div id="main-div" class="background">
      <TerminalMenu />
      <div class="container">
        <slot/>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

import TerminalMenu from './TerminalMenu.vue'

export default {
  components: {
    TerminalMenu
  }
}

</script>

<style>

  .background{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100vw;
      max-width: 100vw;
      max-height: 100%;
      min-height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #1a3742;
      background-image: linear-gradient(180deg, #1a3742 28%, #8D907C 180%);
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
</style>
