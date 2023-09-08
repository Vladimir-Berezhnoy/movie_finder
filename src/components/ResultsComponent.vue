<template>
  <div class="results">
    <div class="movies-search">
      <el-input
        v-model="search"
        placeholder="What will you look for?"
        class="input-with-select"
        @keyup.enter="searchFunc()"
      >
        <template #append>
          <el-button :icon="Search" @click="searchFunc()" />
        </template>
      </el-input>
    </div>
    <h1>Search Results</h1>
    <el-carousel type="card" :loop="true" :autoplay="false" :arrow="always" :initial-index="movies.length >= 3 ? 1 : 0" v-if="movies.length">
      <el-carousel-item v-for="(movie, index) in movies" :key="index">
        <div class="movie-item" @click="currentItem = movie">
          <img :src="movie.Poster" width="300" height="420" alt="Movie Poster" />
          <h2>{{ movie.Title }}</h2>
          <p><strong>Year:</strong> {{ movie.Year }}</p>
          <p><strong>Imdb ID:</strong> {{ movie.imdbID }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <DetailComponent :item="currentItem" @is-modal="currentItem = {}"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import router from "@/router";
import { Search } from "@element-plus/icons-vue";
import { posterStore } from "../store/store";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import DetailComponent from "./DetailComponent.vue";

const movies = ref([]);
const search = ref("");
const store = posterStore();
const route = useRoute()
const currentItem = ref({});

onMounted(function () {
  if (Object.keys(route.query).length !== 0) {
    search.value = route.query.name
    searchFunc()
  }
});

async function searchFunc() {
  store.getPostByName(search.value).then((res) => {
    if (res.data.Error) {
      ElNotification({
        title: "Warning",
        message: `${res.data.Error}`,
        type: "warning",
      });
    } else {
      router.push({
        name: "search",
        query: { name: search.value},
      });
      movies.value = res.data.Search
    }
  });
}

</script>

<style>
.el-carousel__mask {
  display: none;
}

.el-carousel .el-carousel__container {
  height: 650px;
}

.el-carousel .el-carousel__item--card.is-in-stage {
    cursor: default;
}

</style>

<style scoped>
.results {
  padding: 20px;
  min-height: calc(100vh - (80px + 20px + 20px));
}

.movie-item {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
}
</style>
