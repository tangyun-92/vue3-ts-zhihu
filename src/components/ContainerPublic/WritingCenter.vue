/*
 * @Author: 唐云
 * @Date: 2021-01-31 11:18:13
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-01-31 15:40:44
 创作中心组件
 */
<template>
  <div class="WritingCenter">
    <div class="writing-title">
      <div class="title-left">
        <svg-icon icon-class="office-supplies-fill" />
        创作中心
        <span>Lv 1</span>
      </div>
      <title-right><i class="el-icon-arrow-right"></i></title-right>
    </div>
    <div class="writing-number">
      <div class="number-item">
        昨日被阅读数
        <div>0</div>
        <p>较前日 --</p>
      </div>
      <div class="number-item">
        昨日获赞同数
        <div>0</div>
        <p>较前日 --</p>
      </div>
    </div>
    <div class="writing-bottom">瓦力保镖为你的创作提供持续保护</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang='scss' scoped>
.WritingCenter {
  width: 296px;
  height: 164px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px #ddd;
  margin-top: 10px;
  cursor: pointer;
  .writing-title {
    font-size: 14px;
    padding: 0 16px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-left {
      color: #444;
      font-weight: bold;
      display: flex;
      align-items: center;
      .svg-icon {
        width: 18px;
        height: 18px;
      }
      span {
        color: rgb(0, 102, 255);
      }
    }
  }
  .writing-number {
    color: #8590a6;
    font-size: 12px;
    display: flex;
    .number-item {
      height: 64px;
      text-align: center;
      flex-grow: 1;
      &:nth-child(1) {
        border-right: 1px solid #f6f6f6;
      }
      div {
        font-size: 16px;
        font-weight: bold;
        color: #444;
        margin-top: 10px;
      }
      p {
        margin-top: 10px;
        color: rgb(99, 133, 166);
      }
    }
  }
  .writing-bottom {
    font-size: 12px;
    color: #8590a6;
    margin: 22px 0 0 20px;
  }
}
</style>
