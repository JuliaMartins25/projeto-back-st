import CharacterModel from "../models/characterModel.js";

class CharacterController {
  // GET /personagens
  async getAllCharacter(req, res) {
    try {
      const personagens = await CharacterModel.findAll();
      res.json(personagens);
    } catch (error) {
      console.error("Erro ao buscar os personagens:", error);
      res.status(500).json({ error: "Erro ao buscar os personagens" });
    }
  }

  // GET /personagens/:id
  async getCharacterById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await CharacterModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrada!" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar os personagens:", error);
      res.status(500).json({ error: "Erro ao buscar os personagens" });
    }
  }

  // POST /personagens
  async createCharacter(req, res) {
    try {
      // Validação básica
      const { name, image, description, age, firstEp, alive} = req.body;

      // Verifica se todos os campos da coleção foram fornecidos
      if (!name || !image || !description || !age || !firstEp || !alive) {
        return res.status(400).json({
          error: "Todos os campos são obrigatórios",
        });
      }

      // Criar a nova coleção
      const newCharacter = await CharacterModel.create(
        name,
        image,
        description,
        age,
        firstEp,
        alive
      );

      if (!newCharacter) {
        return res.status(400).json({ error: "Erro ao criar personagem" });
      }

      res.status(201).json({
        message: "Personagem criado com sucesso",
        newCharacter,
      });
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      res.status(500).json({ error: "Erro ao criar personagem" });
    }
  }

  // PUT /personagens/:id
  async updateCharacter(req, res) {
    try {
      const { id } = req.params;
      const { name, image, description, age, firstEp, alive } = req.body;

      // Atualizar a coleção
      const updatedCharacter = await CharacterModel.update(
        id,
        name,
        image,
        description,
        age,
        firstEp,
        alive
      );

      if (!updatedCharacter) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(updatedCharacter);
    } catch (error) {
      console.error("Erro ao atualizar personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar personagem!" });
    }
  }

  // DELETE /personagens/:id
  async deleteCharacter(req, res) {
    try {
      const { id } = req.params;

      // Remover a coleção
      const result = await CharacterModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado!" });
      }

      res.status(200).json({
        message: "Personagem removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem!" });
    }
  }
}

export default new CharacterController();
