import { Router, response } from "express";
import { prisma } from "../../lib/prisma";

export const userRoutes = Router();

userRoutes.get("/user", async (request, response) => {
  const user = await prisma.user.findMany();

  return response.send(user);
});

userRoutes.get("/user/:id", async (request, response) => {
  const { id } = request.params;

  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
  });
  return response.send(user);
});

userRoutes.post("/user", async (resquest, response) => {
  const { name, email } = resquest.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return response.status(201).send({ user });
});

userRoutes.put("/user/:id", async (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const user = await prisma.user.update({
    where: { id },
    data: { name, email },
  });
  return response.status(200).send({ user });
});

userRoutes.delete("/user/:id", async (request, response) => {
  const { id } = request.params;

  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  response.send("DELETADO COM SUCESSO!!");
});
