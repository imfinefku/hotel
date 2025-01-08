<template>
  <div>
    <!-- 头部导航栏 -->
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" background-color="#1754ce"
      text-color="#fff" active-text-color="#fff">
      <!-- 网站logo -->
      <el-menu-item style="border: none;" index="/front"><span style="margin-left: 10px">{{ $sysTitle }}</span></el-menu-item>
      <!-- 导航链接 -->
      <el-menu-item index="/front">首页</el-menu-item>
      <el-menu-item v-if="!token" index='/login'>登录</el-menu-item>
      <el-menu-item v-if="!token" index='/register'>注册</el-menu-item>
      <el-menu-item index="/front/notice">系统公告</el-menu-item>
      <el-menu-item index="/front/message">留言板</el-menu-item>
      <el-menu-item @click="handleAppointmentClick">预约入住</el-menu-item>
      <!-- 用户菜单 -->
      <el-submenu v-if="token" index="#">
        <!-- 用户头像和名称 -->
        <template slot="title">
          <el-avatar v-if="head" :src="$baseFileUrl+head"></el-avatar>
          <img v-else="head" src="@/assets/head.jpg" style="border-radius: 50%" width="30px" height="30px" />
          <span style="margin-left: 10px">{{ user?.name }}</span>
        </template>
        <!-- 用户相关链接 -->
        <el-menu-item index="/front/userInfo">个人信息</el-menu-item>
        <el-menu-item index="/front/appointment">我的预约</el-menu-item>
        <el-menu-item index="/front/orders">我的入住</el-menu-item>
        <el-menu-item index="#" @click.native="logout">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 中间区域 -->
    <div class="content">
      <router-view />
    </div>
    <!-- 底部版权信息 -->
    <div class="footer">
      Copyright © {{ year }} {{ $sysTitle }}
    </div>
  </div>
</template>
    
<script>
import { mapState, mapMutations } from 'vuex'
import { removeToken } from '@/utils/auth'
export default {
  name: "Index",

  data() {
    return {
      activeIndex: "1",
      head: '',
      year: ''
    };
  },

  async mounted() {
    // 获取当前年份
    this.year = new Date().getFullYear();
    // 获取用户头像
    this.head = this.user?.head
  },

  computed: {
    ...mapState(['user', 'role', 'token'])
  },

  methods: {
    ...mapMutations(['setUser', 'setRole', 'setToken']),
    // 用户退出登录
    logout() {
      this.$confirm('确定退出吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 移除token
        removeToken()
        // 清空用户信息
        this.setUser({})
        // 清空token
        this.setToken('')
        // 跳转至首页
        this.$router.replace('/front')

      }).catch(() => { });
    },
    // 处理预约入住点击事件
    handleAppointmentClick() {
      this.$router.push('/front/room'); // 跳转到预约入住页面
      window.location.reload(); // 刷新页面
    }
  },
}
</script>
    
<style lang="less" scoped>
.el-menu-demo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

/deep/ .el-menu.el-menu--horizontal {
  border-bottom: none !important;
}

.content {
  min-height: calc(100vh - 60px - 60px);
  padding-top: 60px;
}

.footer {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  background: #386cd4;
}
</style>
