<template>
  <div class="home">
    <Creation></Creation>
    <WritingCenter></WritingCenter>
    <Category></Category>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Creation from '@/components/Creation/index.vue'
import WritingCenter from '@/components/WritingCenter/index.vue'
import Category from '@/components/Category/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Creation,
    WritingCenter,
    Category
  }
})
</script>
