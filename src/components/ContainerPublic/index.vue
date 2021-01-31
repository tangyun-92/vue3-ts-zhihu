/*
 * @Author: 唐云
 * @Date: 2021-01-31 15:34:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-01-31 16:09:17
 内容公共组件
 */
<template>
  <div>
    <Creation />
    <WritingCenter />
    <Category v-if="showCategory" />
    <AboutMe />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AboutMe from './AboutMe'
import Category from './Category'
import Creation from './Creation'
import WritingCenter from './WritingCenter'

export default defineComponent({
  props: {
    // 是否显示类别组件
    showCategory: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  components: {
    AboutMe,
    Category,
    Creation,
    WritingCenter
  }
})
</script>

<style lang='scss' scoped>
</style>
