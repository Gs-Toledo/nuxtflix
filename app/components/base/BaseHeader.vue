<template>
  <header
    class="border-b bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
  >
    <UContainer class="flex justify-between items-center py-4">
      <NuxtLink to="/" class="text-xl font-bold">Nuxtflix</NuxtLink>
      <nav class="flex gap-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/filmes" class="hover:underline">Filmes</NuxtLink>
        <NuxtLink to="/perfil" class="hover:underline">Perfil</NuxtLink>
        <UButton
          as="button"
          variant="ghost"
          class="rounded-full p-2 relative overflow-hidden transition-colors duration-500"
          @click="toggleDark"
        >
          <transition name="fade-scale" mode="out-in" appear>
            <UIcon
              :key="colorMode.preference"
              :name="
                colorMode.preference === 'dark'
                  ? 'i-heroicons-sun'
                  : 'i-heroicons-moon'
              "
              class="h-5 w-5"
            />
          </transition>
        </UButton>
      </nav>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

function toggleDark() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
