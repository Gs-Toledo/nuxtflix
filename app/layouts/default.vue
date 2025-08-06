<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <BaseHeader />

    <UContainer class="flex-1 py-6 transition-colors duration-500">
      <slot />
    </UContainer>

    <BaseFooter />
  </div>
</template>
