<template>
  <UContainer class="flex items-center justify-center min-h-screen">
    <UCard class="w-full max-w-sm">
      <template #header>
        <div class="text-center space-y-2">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Bem-vindo ao <i>Nuxtflix</i>
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Acesse sua conta para continuar
          </p>
        </div>
      </template>

      <UForm :state="loginUsuario" class="space-y-4" @submit="handleLogin">
        <UFormField label="Usuário" name="username">
          <UInput
            v-model="loginUsuario.usuario"
            class="w-full"
            icon="i-heroicons-user"
            placeholder="para teste: admin"
            size="lg"
          />
        </UFormField>

        <UFormField label="Senha" name="password">
          <UInput
            v-model="loginUsuario.senha"
            class="w-full"
            type="password"
            icon="i-heroicons-lock-closed"
            placeholder="para teste: 123123"
            size="lg"
          />
        </UFormField>

        <!--     <div class="flex items-center justify-between">
          <UCheckbox label="Lembrar-me" name="remember" />
          <NuxtLink
            to="#"
            class="text-sm font-medium text-primary hover:underline"
          >
            Esqueceu a senha?
          </NuxtLink>
        </div> -->

        <UAlert
          v-if="errorMsg"
          icon="i-heroicons-exclamation-triangle"
          color="error"
          variant="soft"
          :title="errorMsg"
          :close-button="{
            icon: 'i-heroicons-x-mark-20-solid',
            color: 'red',
            variant: 'link',
            padded: false,
          }"
          @close="errorMsg = null"
        />

        <UButton type="submit" block size="lg" :loading="isLoading">
          Entrar
        </UButton>
      </UForm>

      <!--  <template #footer>
        <p class="text-sm text-center text-gray-500 dark:text-gray-400">
          Não tem uma conta?
          <NuxtLink
            to="/cadastro"
            class="font-medium text-primary hover:underline"
          >
            Cadastre-se
          </NuxtLink>
        </p>
      </template> -->
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
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
