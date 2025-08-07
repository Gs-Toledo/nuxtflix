import type { Usuario } from "./../../interfaces/Usuario";

export const FAKE_USERS: Usuario[] = [
  {
    id: 1,
    nomeUsuario: "admin",
    senha: "123123", // Ficticio, deveria ser um hash
    email: "admin@admin.com.br",
    nome: "Administrador",
    avatar: "https://i.pravatar.cc/150?u=admin",
  },
  {
    id: 2,
    nomeUsuario: "usuario",
    senha: "123",
    email: "zezinho@zezinho.com.br",
    nome: "Usuário Comum",
    avatar: "https://i.pravatar.cc/150?u=usuario",
  },
];
