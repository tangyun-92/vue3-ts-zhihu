<template>
  <div class="home">
    <Creation></Creation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Creation from '@/components/Creation/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Creation
  }
})
</script>
