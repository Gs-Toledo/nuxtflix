import { filmeArray } from "../../constants/filmesArray";

export default defineEventHandler(() => {
  return { filmes: filmeArray };
});
