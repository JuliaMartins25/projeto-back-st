import prisma from "../../prisma/prisma.js";

class CharacterModel {
  // Obter todos os personagens
  async findAll() {
    const personagens = await prisma.character.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // console.log(personagens);

    return personagens;
  }

  // Obter pelo ID
  async findById(id) {
    const personagem = await prisma.character.findUnique({
      where: {
        id: Number(id),
      },
    });

    return personagem;
  }

  // Criar uma nova coleção
  async create(name, image, description, age, firstEp, alive) {
    const novopersonagem = await prisma.character.create({
      data: {
        name,
        image,
        description,
        age,
        firstEp,
        alive
      },
    });

    return novopersonagem;
  }

  // Atualizar uma coleção
  async update(id, name, image, description, age, firstEp, alive) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    // Atualize a coleção existente com os novos dados
    if (name !== undefined) {
      name = name;
    }
    if (image !== undefined) {
      image = image;
    }
    if (description !== undefined) {
      description = description;
    }
    if (age !== undefined) {
      age = age;
    }
    if (firstEp !== undefined) {
      firstEp = firstEp;
    }
    if (alive !== alive) {
      alive = alive;
    }

    const personagemAtualizado = await prisma.character.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        image,
        description,
        age,
        firstEp,
        alive
      },
    });

    return personagemAtualizado;
  }

  // Remover uma coleção
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.character.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CharacterModel();
