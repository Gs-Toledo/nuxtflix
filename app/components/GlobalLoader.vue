<template>
  <div>
    <transition name="fade">
      <div
        v-if="!isHydrated"
        class="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-50"
      >
        <span
          class="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"
        />
      </div>
    </transition>

    <slot />
  </div>
</template>

<script setup lang="ts">
const isHydrated = ref(false);

onMounted(() => {
  isHydrated.value = true;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
