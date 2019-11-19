<template>
  <layout>
    <div>
      <HomeHeader />
      <HomeHobby />
      <HomeProjects />
      <HomeContact />
      <HomeThis />
    </div>
  </layout>
</template>

<script>

import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeProjects from '@/components/home/HomeProjects.vue'
import HomeHobby from '@/components/home/HomeHobby.vue'
import HomeContact from '@/components/home/HomeContact.vue'
import HomeThis from '@/components/home/HomeThis.vue'

export default {
  components: {
    HomeHeader,
    HomeProjects,
    HomeHobby,
    HomeContact,
    HomeThis
  },
  metaInfo: {
    title: `Home`
  },
  mounted () {
    document.getElementById('main-div').scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
</script>
