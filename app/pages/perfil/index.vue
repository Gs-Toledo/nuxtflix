<template>
  <UContainer class="py-10">
    <UCard>
      <div class="flex items-center space-x-4">
        <UAvatar :src="sessionStore.usuario?.avatar" size="lg" />
        <div>
          <h1 class="text-2xl font-bold">
            Bem-vindo(a), {{ sessionStore.getNomeUsuario }}!
          </h1>
          <p class="text-gray-500">Você está no Nuxtflix.</p>
        </div>
      </div>

      <template #footer>
        <UButton color="error" @click="sessionStore.logout()"> Logout </UButton>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const sessionStore = useSessionStore();
</script>
