import express from "express";
import CharacterController from "../controllers/characterController.js";

const characterRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
characterRouter.get("/", CharacterController.getAllCharacter);

// // GET /colecoes/:id - Obter uma Coleção pelo ID
characterRouter.get("/:id", CharacterController.getCharacterById);

// // POST /colecoes - Criar uma nova Coleção
characterRouter.post("/", CharacterController.createCharacter);

// // PUT /colecoes/:id - Atualizar uma Coleção
characterRouter.put("/:id", CharacterController.updateCharacter);

// // DELETE /colecoes/:id - Remover uma Coleção
characterRouter.delete("/:id", CharacterController.deleteCharacter);

export default characterRouter;
