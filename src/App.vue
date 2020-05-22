<template>
  <a-config-provider :locale="zh_CN">
    <Index />
  </a-config-provider>
</template>
<script>
import Vue from "vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import Index from "./views/Index";
import { ConfigProvider } from "ant-design-vue";
Vue.use(ConfigProvider);
moment.locale("zh-cn");
export default {
  components: {
    Index
  },
  data() {
    return {
      zh_CN
    };
  }
};
</script>
<style lang="less">
@import "./style/index.less";
</style>
