<template>
  <div id="nav">
    <Header></Header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/layout/Header.vue'

export default defineComponent({
  components: {
    Header
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  height: auto;
  margin: 0 auto;
}
</style>
