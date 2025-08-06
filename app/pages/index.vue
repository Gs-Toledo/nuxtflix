<template>
  <div>
    <h2>Bem vindo ao NuxtFlix</h2>
    <UButton
      as="button"
      class="mt-4"
      label="High Five"
      @click="showToast('Broooo')"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: () => `NuxtFlix `,
  meta: [
    {
      name: "description",
      content: () => "Biblioteca de filmes feito com Nuxt.js",
    },
  ],
});

const toast = useToast();

function showToast(message: string) {
  toast.add({
    title: "Sucesso",
    description: message,
    color: "success",
  });
}
</script>
