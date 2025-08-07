<template>
  <div
    class="block transform hover:scale-105 transition-transform duration-300 mb-4"
  >
    <UCard class="h-full flex flex-col justify-between">
      <div>
        <div class="flex justify-between">
          <h2 class="text-lg font-semibold mb-1">
            {{ filme.titulo }}
          </h2>
          <button @click.stop="favoritosStore.toggleFavorito(filme)">
            <UIcon
              v-if="!isFavorito"
              name="material-symbols:kid-star-outline"
            />
            <UIcon v-else-if="isFavorito" name="material-symbols:kid-star" />
          </button>
        </div>

        <NuxtImg :src="filme.posterUrl" />

        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {{ filme.ano }}
        </p>

        <p class="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {{ filme.sinopse }}
        </p>
      </div>

      <div class="mt-4">
        <UButton as="button" color="primary" :to="`/filmes/${filme.id}`" block>
          Ver detalhes
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { Filme } from "~~/interfaces/filme";

const props = defineProps<{ filme: Filme }>();

const favoritosStore = useFavoritosStore();

const isFavorito = computed(() => favoritosStore.isFavorito(props.filme.id));
</script>
