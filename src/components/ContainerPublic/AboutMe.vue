/*
 * @Author: 唐云
 * @Date: 2021-01-31 15:00:05
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-01-31 15:28:31
 关于我
 */
<template>
  <div class="AboutMe">
    <ul>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="collection-fill" />
          我的收藏
        </div>
        <div class="item-right">0</div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="help" />
          我关注的问题
        </div>
        <div class="item-right">3</div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="add-account" />
          我的邀请
        </div>
        <div class="item-right">188</div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="inquiry-template-fill" />
          我的余额
        </div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="comments-fill" />
          站务中心
        </div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="service-fill" />
          帮助中心
        </div>
      </a>
      <a class="about-item">
        <div class="item-left">
          <svg-icon icon-class="copyright-circle-fil" />
          版权服务中心
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang='scss' scoped>
.AboutMe {
  width: 296px;
  height: auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px #ddd;
  margin-top: 10px;
  padding: 10px 0;
  .about-item {
    height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .svg-icon {
      width: 18px;
      height: 18px;
    }
    &:hover {
      background-color: #f6f6f6;
    }
  }
}
</style>
