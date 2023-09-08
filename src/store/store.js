import { defineStore } from "pinia";
import axios from "axios";

export const posterStore = defineStore("store", {
  state: () => ({
    apiKey: "8163c70c",
    base_URL: "https://www.omdbapi.com/",
    initSearch: "world",
    posts: [],
  }),

  actions: {
    async getAllPosts(page = 1) {
      try {
        const data = axios.get(this.base_URL, {
          params: {
            apikey: this.apiKey,
            s: this.initSearch,
            page: page,
          },
        });
        return data;
      } catch (error) {
        return error;
      }
    },

    async getPostByName(name) {
      try {
        const data = axios.get(this.base_URL, {
          params: {
            apikey: this.apiKey,
            s: name,
          },
        });
        return data;
      } catch (error) {
        return error;
      }
    },

    async getPostById(id) {
      try {
        const data = axios.get(this.base_URL, {
          params: {
            apikey: this.apiKey,
            i: id,
          },
        });
        return data;
      } catch (error) {
        return error;
      }
    },
  },

  getters: {},
});
