import type { Filme } from "../interfaces/filme";
import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    items: [] as Filme[],
  }),
  getters: {
    isFavorite: (state) => {
      return (filmeId: number): boolean =>
        state.items.some((item) => item.id === filmeId);
    },
    totalFavorites: (state): number => {
      return state.items.length;
    },
  },

  actions: {
    addFavorite(filme: Filme) {
      if (!this.isFavorite(filme.id)) {
        this.items.push(filme);
      }
    },
    removeFavorite(filmeId: number) {
      this.items = this.items.filter((item) => item.id !== filmeId);
    },
    toggleFavorite(filme: Filme) {
      if (this.isFavorite(filme.id)) {
        this.removeFavorite(filme.id);
      } else {
        this.addFavorite(filme);
      }
    },
  },
  persist: true,
});
