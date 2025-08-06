<template>
  <div>
    <span v-if="pending">Carregando...</span>
    <span v-else-if="error">Erro ao buscar os dados...</span>
    <div
      v-if="filmes"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <CardFilme v-for="filme in filmes" :key="filme.id" :filme="filme" />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: () => `NuxtFlix - Filmes`,
});

const { data, error, pending } = useFetch("/api/filmes");

const filmes = computed(() => data.value?.filmes || []);
</script>
