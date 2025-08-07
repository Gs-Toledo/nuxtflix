import { defineStore } from "pinia";
import type { Usuario } from "../interfaces/Usuario";

export const useSessionStore = defineStore("session", {
  state: () => ({
    usuario: null as Usuario | null,
    token: null as string | null,
  }),
  getters: {
    isAutenticated: (state) => {
      return !!state.token && !!state.usuario;
    },
    getNomeUsuario: (state) => {
      return state.usuario?.nomeUsuario || "Visitante";
    },
  },
  actions: {
    async login(nomeUsuario: string, senha: string) {
      try {
        const response = await $fetch<{ usuario: Usuario; token: string }>(
          "/api/login",
          { method: "POST", body: { usuario: nomeUsuario, senha } }
        );

        this.usuario = response.usuario;
        this.token = response.token;

        await navigateTo("/");
      } catch (error) {
        await this.logout();
        throw error;
      }
    },
    async logout() {
      this.usuario = null;
      this.token = null;

      await navigateTo("/login");
    },
  },
  persist: true,
});
