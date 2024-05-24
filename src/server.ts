import { app } from "./app";
import { userRoutes } from "./routes/user";

const port = 3000; // Porta em que o servidor irá ouvir

// Rota de exemplo
const server = app.listen(3000, () =>
  console.log(`Servidor rodando em http://localhost:3000`)
);

app.use(userRoutes);

// A missão é desenvolver uma aplicação onde os usuários possam criar postagens
// contendo imagens de suas experiências diárias. Imagine uma plataforma que
// permite aos usuários capturar e compartilhar os momentos mais significativos
// de suas vidas, seja um belo pôr do sol, uma refeição deliciosa, uma conquista
// profissional ou uma simples caminhada no parque.
