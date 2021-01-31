<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">知乎</div>
      <div class="header-menu">
        <ul>
          <li><a href="/">首页</a></li>
          <li><a href="#">会员</a></li>
          <li><a href="#">发现</a></li>
          <li><a href="#">等你来答</a></li>
        </ul>
      </div>
      <div class="header-search">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchCon"
        >
        </el-input>
        <div class="header-button">提问</div>
      </div>
      <div class="header-fun">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img src="" alt="" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-plus">我的主页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus"
                >创作中心</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-circle-plus-outline"
                >设置</el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-check">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    // 搜索内容
    const searchCon = ref('')

    return {
      searchCon
    }
  }
})
</script>

<style lang='scss'>
.header {
  width: 100%;
  height: 52px;
  background-color: #fff;
  box-shadow: 0 1px 3px #ccc;
  .header-container {
    width: 1160px;
    height: 52px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .header-logo {
      font-size: 30px;
      color: #0066ff;
    }
    .header-menu {
      ul {
        display: flex;
        li {
          margin-left: 36px;
          a {
            color: #888;
            &:hover {
              color: #000;
            }
          }
        }
      }
    }
    .header-search {
      margin: 0 0 0 88px;
      display: flex;
      align-items: center;
      line-height: 32px;
      .el-input__inner {
        border-radius: 30px;
        height: 32px;
        width: 400px;
      }
      .header-button {
        background-color: #06f;
        width: 80px;
        height: 32px;
        border-radius: 40px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        cursor: pointer;
      }
    }
    .header-fun {
      width: 30px;
      height: 30px;
      background-color: skyblue;
      margin-left: 152px;
      .el-dropdown-link {
        display: inline-block;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
