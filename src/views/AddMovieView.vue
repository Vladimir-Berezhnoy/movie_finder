<template>
  <HeaderComponent />
  <main>
    <AddMovieComponent />
  </main>
</template>

<script>
// @ is an alias to /src
import AddMovieComponent from "@/components/AddMovieComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "AddMovieView",
  components: {
    AddMovieComponent,
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
