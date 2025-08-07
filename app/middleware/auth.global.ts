export default defineNuxtRouteMiddleware((to, /* from */) => {
  if (to.path.startsWith("/api") || to.path.startsWith("/_nuxt/")) {
    return;
  }

  const sessionStore = useSessionStore();

  if (!sessionStore.isAutenticated && to.path !== "/login") {
    return navigateTo("/login");
  }

  if (sessionStore.isAutenticated && to.path == "/login") {
    return navigateTo("/", { replace: true });
  }
});
