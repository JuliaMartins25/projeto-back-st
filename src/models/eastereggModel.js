import prisma from "../../prisma/prisma.js";

class EastereggModel {
  // Obter todos os misterios
  async findAll() {
    const misterios = await prisma.easteregg.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // console.log(misterios);

    return misterios;
  }

  // Obter pelo ID
  async findById(id) {
    const misterio = await prisma.easteregg.findUnique({
      where: {
        id: Number(id),
      },
    });

    return misterio;
  }

  // Criar uma nova coleção
  async create(title, theories, facts, secrets ) {
    const novoeasteregg = await prisma.easteregg.create({
      data: {
       title,
       theories, 
       facts, 
       secrets
      },
    });

    return novoeasteregg;
  }

  // Atualizar uma coleção
  async update(id, title, theories, facts, secrets) {
    const misterio = await this.findById(id);

    if (!misterio) {
      return null;
    }

    // Atualize a coleção existente com os novos dados
    if (title !== undefined) {
      title = title;
    }
    if (theories !== undefined) {
      theories = theories;
    }
    if (facts !== undefined) {
      facts = facts;
    }
    if (secrets !== undefined) {
      secrets = secrets;
    }

    const misterioAtualizado = await prisma.easteregg.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        theories, 
        facts, 
        secrets
      },
    });

    return misterioAtualizado;
  }

  // Remover uma coleção
  async delete(id) {
    const misterio = await this.findById(id);

    if (!misterio) {
      return null;
    }

    await prisma.easteregg.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new EastereggModel();
