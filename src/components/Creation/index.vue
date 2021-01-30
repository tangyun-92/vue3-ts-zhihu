/*
 * @Author: 唐云
 * @Date: 2021-01-30 21:53:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-01-30 23:06:01
 创建组件
 */
<template>
  <div class="Creation">
    <div class="creation-list">
      <ul>
        <a>
          <div class="li-svg"><svg-icon icon-class="suggest" /></div>
          <p>回答问题</p>
        </a>
        <a>
          <div class="li-svg"><svg-icon icon-class="play" /></div>
          <p>发视频</p>
        </a>
        <a>
          <div class="li-svg"><svg-icon icon-class="editor" /></div>
          <p>写文章</p>
        </a>
        <a>
          <div class="li-svg"><svg-icon icon-class="survey" /></div>
          <p>写想法</p>
        </a>
      </ul>
    </div>
    <div class="creation-bottom">
      <a class="later-answer">稍后答</a>
      <a class="draft-box">草稿箱</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang='scss' scoped>
.Creation {
  width: 296px;
  height: 158px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px #ddd;
  .creation-list {
    height: 105px;
    padding: 20px 15px;
    border-bottom: 1px solid #f6f6f6;
    ul {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      a {
        cursor: pointer;
        width: 50px;
        text-align: center;
        &:nth-child(1) .li-svg {
          background-color: #E1EDFF;
        }
        &:nth-child(2) .li-svg {
          background-color: #FFF3E2;
        }
        &:nth-child(3) .li-svg {
          background-color: #FEF9E2;
        }
        &:nth-child(4) .li-svg {
          background-color: #E5F7F7;
        }
        .li-svg {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          .svg-icon {
            width: 28px;
            height: 28px;
          }
        }
      }
    }
  }
  .creation-bottom {
    display: flex;
    font-size: 14px;
    color: #8590a6;
    text-align: center;
    line-height: 52px;
    height: 52px;
    cursor: pointer;
    .later-answer {
      flex-grow: 1;
      border-right: 1px solid #f6f6f6;
    }
    .draft-box {
      flex-grow: 1;
    }
  }
}
</style>
