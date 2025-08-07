import { FAKE_USERS } from "~~/server/constants/fakeUsers";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { usuario, senha } = body;

  if (!usuario || !senha) {
    throw createError({
      status: 400, //bad request
      statusMessage: "Usuário e Senha são Obrigatórios",
    });
  }

  const user = FAKE_USERS.find(
    (u) => u.nomeUsuario === usuario && u.senha === senha
  );

  if (!user) {
    throw createError({
      status: 401,
      statusMessage: "Credenciais Inválidas",
    });
  }

  const { senha: _, ...usuarioSemSenha } = user;

  return {
    usuario: usuarioSemSenha,
    token: `fake-jwt-token-for-${user.nomeUsuario}-${Date.now()}`,
  };
});
