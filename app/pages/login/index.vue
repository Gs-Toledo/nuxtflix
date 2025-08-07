<template>
  <UContainer class="flex items-center justify-center min-h-screen">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h2 class="text-xl font-bold text-center">Login</h2>
      </template>

      <UForm :state="loginUsuario" @submit.prevent="handleLogin">
        <UFormField label="Usuário" name="username" class="mb-4">
          <UInput
            v-model="loginUsuario.usuario"
            placeholder="Digite seu usuario"
          />
        </UFormField>

        <UFormField label="Senha" name="password" class="mb-6">
          <UInput
            v-model="loginUsuario.senha"
            type="password"
            placeholder="Digite a Senha"
          />
        </UFormField>

        <UButton type="submit" block :loading="isLoading"> Entrar </UButton>
      </UForm>

      <div v-if="errorMsg" class="mt-4 text-center">
        <span class="text-red-500 text-sm">{{ errorMsg }}</span>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
import { UInput } from "#components";

useHead({
  title: () => `Bem vindo ao Nuxtflix - Login`,
});
definePageMeta({
  layout: "clean",
});

const sessionStore = useSessionStore();
const loginUsuario = ref({
  usuario: "",
  senha: "",
});
const isLoading = ref(false);
const errorMsg = ref<string | null>(null);

async function handleLogin() {
  isLoading.value = true;
  errorMsg.value = null;

  try {
    await sessionStore.login(
      loginUsuario.value.usuario,
      loginUsuario.value.senha
    );
  } catch (error: unknown) {
    if (isH3Error(error)) {
      errorMsg.value = error.statusMessage || "Ocorreu um Erro Inesperado";
    } else {
      errorMsg.value = "Erro Desconhecido";
    }
  } finally {
    isLoading.value = false;
  }
}
</script>
