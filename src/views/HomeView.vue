<template>
  <HeaderComponent />
  <main>
    <HomeComponent />
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    HomeComponent
},
};
</script>

<style lang="scss">
main {
  background-color: $--el-color-primary-light-8;
  padding-top: 80px;
}
</style>
