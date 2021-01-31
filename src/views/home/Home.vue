<template>
  <div class="home">
    <ContainerPublic />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContainerPublic from '@/components/ContainerPublic/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ContainerPublic
  }
})
</script>
