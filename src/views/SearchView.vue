<template>
  <HeaderComponent />
  <main>
    <ResultsComponent />
  </main>
</template>

<script>
// @ is an alias to /src
import ResultsComponent from "@/components/ResultsComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "SearchView",
  components: {
    ResultsComponent,
    HeaderComponent,
  },
};
</script>

<style lang="scss">
// main {
//   background-color: $--el-color-primary-light-8;
//   padding-top: 80px;
// }
</style>
