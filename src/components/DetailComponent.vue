<template>
  <el-dialog v-model="modal" :close="close()" title="Movie Details">
    <el-card :body-style="{ padding: '20px' }">
      <img :src="movie.Poster" alt="Movie Poster" />
      <h2>{{ movie.Title }}</h2>
      <p><strong>Year:</strong> {{ movie.Year }}</p>
      <p><strong>imdb id:</strong> {{ movie.imdbID }}</p>
    </el-card>
  </el-dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  item: {
    type: Object,
  },
});

const emit = defineEmits(["isModal"]);
const movie = ref({});
const modal = ref(false);

watch(
  () => props.item,
  (newVal) => {
    if (Object.keys(newVal).length !== 0) {
      movie.value = newVal;
      modal.value = true;
    }
  }
);

function close() {
  emit("isModal", false);
}

</script>

<style scoped>
.detail {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
