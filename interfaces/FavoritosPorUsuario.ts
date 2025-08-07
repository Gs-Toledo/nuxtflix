import type { Filme } from './Filme';

export type FavoritosPorUsuario = Record<string | number, Filme[]>;
