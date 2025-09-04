import express from "express";
import EastereggController from "../controllers/eastereggController.js";

const EastereggRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
EastereggRouter.get("/", EastereggController.getAllEasteregg);

// // GET /colecoes/:id - Obter uma Coleção pelo ID
EastereggRouter.get("/:id", EastereggController.getEastereggById);

// // // POST /colecoes - Criar uma nova Coleção
EastereggRouter.post("/", EastereggController.createEasteregg);

// // // PUT /colecoes/:id - Atualizar uma Coleção
EastereggRouter.put("/:id", EastereggController.updateEasteregg);

// // // DELETE /colecoes/:id - Remover uma Coleção
EastereggRouter.delete("/:id", EastereggController.deleteEasteregg);

export default EastereggRouter;
