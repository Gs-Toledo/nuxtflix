import type { FavoritosPorUsuario } from "./../interfaces/FavoritosPorUsuario";
import type { Filme } from "../interfaces/Filme";
import { defineStore } from "pinia";

export const useFavoritosStore = defineStore("favoritos", {
  state: () => ({
    favoritosPorUsuario: {} as FavoritosPorUsuario,
  }),
  getters: {
    isFavorito: (state) => {
      return (userId: number, filmeId: number): boolean => {
        const favoritos = state.favoritosPorUsuario[userId] || [];
        return favoritos.some((filme) => filme.id === filmeId);
      };
    },
    getFavoritosPorUsuario: (state) => {
      return (userId: number): Filme[] => {
        return state.favoritosPorUsuario[userId] || [];
      };
    },
  },

  actions: {
    addFavorito(userId: number, filme: Filme) {
      if (!this.favoritosPorUsuario[userId]) {
        this.favoritosPorUsuario[userId] = [];
      }
      if (!this.isFavorito(userId, filme.id)) {
        this.favoritosPorUsuario[userId].push(filme);
      }
    },
    removeFavorito(userId: number, filmeId: number) {
      const favoritos = this.favoritosPorUsuario[userId] || [];
      this.favoritosPorUsuario[userId] = favoritos.filter(
        (filme) => filme.id !== filmeId
      );
    },
    toggleFavorito(userId: number, filme: Filme) {
      if (this.isFavorito(userId, filme.id)) {
        this.removeFavorito(userId, filme.id);
      } else {
        this.addFavorito(userId, filme);
      }
    },
  },
  persist: true,
});
