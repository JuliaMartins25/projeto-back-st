import EastereggModel from "../models/eastereggModel.js";

class EastereggController {
  // GET /misterios
  async getAllEasteregg(req, res) {
    try {
      const misterios = await EastereggModel.findAll();
      res.json(misterios);
    } catch (error) {
      console.error("Erro ao buscar os easter egg:", error);
      res.status(500).json({ error: "Erro ao buscar os easter egg" });
    }
  }

  // GET /misterios/:id
  async getEastereggById(req, res) {
    try {
      const { id } = req.params;

      const misterio = await EastereggModel.findById(id);

      if (!misterio) {
        return res.status(404).json({ error: "misterio não encontrada!" });
      }

      res.json(misterio);
    } catch (error) {
      console.error("Erro ao buscar os misterios:", error);
      res.status(500).json({ error: "Erro ao buscar os misterios" });
    }
  }

  // POST /misterios
  async createEasteregg(req, res) {
    try {
      // Validação básica
      const { title, theories, facts, secrets} = req.body; 

      // Criar a nova coleção
      const newEasteregg = await EastereggModel.create(
        title,
       theories, 
       facts, 
       secrets
      );

      if (!newEasteregg) {
        return res.status(400).json({ error: "Erro ao criar misterio" });
      }

      res.status(201).json({
        message: "misterio criado com sucesso",
        newEasteregg,
      });
    } catch (error) {
      console.error("Erro ao criar misterio:", error);
      res.status(500).json({ error: "Erro ao criar misterio" });
    }
  }

  // PUT /misterios/:id
  async updateEasteregg(req, res) {
    try {
      const { id } = req.params;
      const { title, theories, facts, secrets } = req.body;

      // Atualizar a coleção
      const updatedEasteregg = await EastereggModel.update(
        id,
        title,
        theories, 
        facts, 
        secrets
      );

      if (!updatedEasteregg) {
        return res.status(404).json({ error: "misterio não encontrado" });
      }

      res.json(updatedEasteregg);
    } catch (error) {
      console.error("Erro ao atualizar misterio:", error);
      res.status(500).json({ error: "Erro ao atualizar misterio!" });
    }
  }

  // DELETE /misterios/:id
  async deleteEasteregg(req, res) {
    try {
      const { id } = req.params;

      // Remover a coleção
      const result = await EastereggModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "misterio não encontrado!" });
      }

      res.status(200).json({
        message: "misterio removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover misterio:", error);
      res.status(500).json({ error: "Erro ao remover misterio!" });
    }
  }
}

export default new EastereggController();
