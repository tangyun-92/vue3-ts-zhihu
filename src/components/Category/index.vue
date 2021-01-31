/*
 * @Author: 唐云
 * @Date: 2021-01-31 14:23:30
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-01-31 14:57:38
 类别组件
 */
<template>
  <div class="Category">
    <ul>
      <a>
        <svg-icon icon-class="thunderbolt-fill" />
        <p>Live</p>
      </a>
      <a>
        <svg-icon icon-class="book-fill" />
        <p>书店</p>
      </a>
      <a>
        <svg-icon icon-class="chrome-fill" />
        <p>圆桌</p>
      </a>
      <a>
        <svg-icon icon-class="edit-fill" />
        <p>专栏</p>
      </a>
      <a>
        <svg-icon icon-class="Dollar-circle-fill" />
        <p>付费咨询</p>
      </a>
      <a>
        <svg-icon icon-class="folder-open-fill" />
        <p>百科</p>
      </a>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang='scss' scoped>
.Category {
  width: 296px;
  height: 164px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px #ddd;
  margin-top: 10px;
  ul {
    display: flex;
    flex-wrap: wrap;
    a {
      text-align: center;
      color: #8590a6;
      width: 33%;
      margin-top: 20px;
      cursor: pointer;
      &:nth-child(1):hover {
        color: #FFCF02;
      }
      &:nth-child(2):hover {
        color: #43D480;
      }
      &:nth-child(3):hover {
        color: #086CFF;
      }
      &:nth-child(4):hover {
        color: #0E88EB;
      }
      &:nth-child(5):hover {
        color: #5478F0;
      }
      &:nth-child(6):hover {
        color: #5867D1;
      }
      .svg-icon {
        width: 22px;
        height: 22px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
