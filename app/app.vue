<template>
  <UApp :toaster="toasterOptions">
    <GlobalLoader>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </GlobalLoader>
  </UApp>
</template>

<script setup lang="ts">
import type { ToasterProps } from "@nuxt/ui";

const toasterOptions: ToasterProps = {
  position: "top-center",
};

useHead({
  title: () => `NuxtFlix`,
});
</script>
