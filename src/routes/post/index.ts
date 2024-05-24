import { Router, response } from "express";
import { prisma } from "../../lib/prisma";
import multer from "multer";
import { storage } from "../../multerConfig";

export const postRoutes = Router();
const upload = multer({ storage: storage });

postRoutes.get("/post", async (request, response) => {
  const post = await prisma.post.findMany();

  return response.send(post);
});

postRoutes.get("/post/:id", async (request, response) => {
  const { id } = request.params;

  const post = await prisma.post.findUniqueOrThrow({
    where: { id },
  });

  return response.send(post);
});

postRoutes.post("/post", async (request, response) => {
  const { title, content, authorId } = request.body;

  const post = await prisma.post.create({
    data: { title, content, authorId },
  });
  return response.status(201).send(post);
});

// postRoutes.post(
//   "/postfile",
//   upload.single("file"),
//   async (request, response) => {
//     return response.json(request.file?.filename);
//   }
// );

postRoutes.put("/post/:id", async (request, response) => {
  const { id } = request.params;
  const { title, content, authorId } = request.body;

  const post = await prisma.post.update({
    where: { id },
    data: { title, content, authorId },
  });

  return response.status(201).send(post);
});

postRoutes.delete("/post/:id", async (request, response) => {
  const { id } = request.params;

  const post = await prisma.post.delete({
    where: { id },
  });

  return response.send("Deletado com sucesso!!");
});
