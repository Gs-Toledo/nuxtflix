<template>
  <UContainer class="py-8">
    <div v-if="pending" class="text-center py-20">
      <span class="text-gray-500">Carregando filme...</span>
    </div>

    <div v-else-if="error" class="text-center py-20">
      <span class="text-red-500"
        >Erro ao carregar o filme. Erro: {{ error.message }}</span
      >
    </div>

    <div v-if="filme" class="text-center">
      <UCard>
        <h1 class="text-2xl font-bold mb-2">{{ filme.titulo }}</h1>
        <div class="flex justify-center">
          <NuxtImg :src="filme.posterUrl" />
        </div>
        <p class="text-gray-500 dark:text-gray-400 mb-4">
          Ano: {{ filme.ano }}
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-6">{{ filme.sinopse }}</p>

        <UButton
          as="button"
          size="lg"
          color="primary"
          @click="favoritosStore.toggleFavorito(filme)"
        >
          <span v-if="!isFavorito"> Salvar nos Favoritos </span>
          <span v-else> Excluir dos Favoritos </span>
        </UButton>
      </UCard>
    </div>

    <div v-else class="text-center py-20">
      <h2 class="text-xl font-semibold">Ops!</h2>
      <p class="text-gray-500">
        O filme que você está procurando não foi encontrado.
      </p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { UButton, UCard, UContainer } from "#components";

const route = useRoute();

const idFilme = route.params.id;

const { data, error, pending } = useFetch(`/api/filmes/${idFilme}`);

const filme = computed(() => data.value?.filme);

const favoritosStore = useFavoritosStore();

const isFavorito = computed(() => {
  if (!filme.value) return false;
  return favoritosStore.isFavorito(filme.value.id);
});

useHead({
  title: () => `NuxtFlix - ${filme.value?.titulo || "Filme não encontrado"}`,
});
</script>
