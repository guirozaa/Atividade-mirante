import express from "express";
import multer from "multer";
import { storage } from "./multerConfig";

const upload = multer({ storage: storage });
export const app = express();

// extremamente importante para receber post HTTP, fazendo com que express entenda o json presente no body
app.use(express.json());

//Para o front conseguir consumir o arquivo de forma facil
app.use("/files", express.static("uploads"));

app.post("/postfile", upload.single("file"), (req, resp) => {
  return resp.json(req.file?.filename);
});
