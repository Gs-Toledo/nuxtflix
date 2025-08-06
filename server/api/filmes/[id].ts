import { filmeArray } from "~~/server/constants/filmesArray";

export default defineEventHandler((event) => {
  if (!event.context.params) {
    throw createError({ statusCode: 500, statusMessage: "ID invalido" });
  }

  const id = parseInt(event.context.params.id, 10);
  const filme = filmeArray.find((f) => f.id === id);

  if (!filme) {
    throw createError({
      statusCode: 404,
      statusMessage: "Filme não encontrado",
    });
  }
  return { filme };
});
