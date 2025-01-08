<template>
  <div class="app-container">
  <!-- Vue Router 视图容器 -->
    <router-view>
  <!-- 路由视图将渲染在这里 -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'VueTemplateApp',  // 组件名称为 VueTemplateApp

  data() {
    return {
      
    };
  },

  mounted() {
    //设置网页Title
    document.getElementsByTagName("title")[0].innerText = this.$sysTitle
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.app-container{
  // 根容器的样式，可设置背景颜色等
  // background-color: #f2f4fb;
}
</style>