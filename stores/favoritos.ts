import type { Filme } from "../interfaces/filme";
import { defineStore } from "pinia";

export const useFavoritosStore = defineStore("favoritos", {
  state: () => ({
    filmes: [] as Filme[],
  }),
  getters: {
    isFavorito: (state) => {
      return (filmeId: number): boolean =>
        state.filmes.some((filme) => filme.id === filmeId);
    },
    totalFavoritos: (state): number => {
      return state.filmes.length;
    },
  },

  actions: {
    addFavorito(filme: Filme) {
      if (!this.isFavorito(filme.id)) {
        this.filmes.push(filme);
      }
    },
    removeFavorito(filmeId: number) {
      this.filmes = this.filmes.filter((filme) => filme.id !== filmeId);
    },
    toggleFavorito(filme: Filme) {
      if (this.isFavorito(filme.id)) {
        this.removeFavorito(filme.id);
      } else {
        this.addFavorito(filme);
      }
    },
  },
/*   persist: true, */
});
