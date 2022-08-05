export default defineNuxtRouteMiddleware((to) => {
  console.log(
    'middleware > auth: to',
    to.path,
    'but I think we should go somewhere else...'
  );
});
