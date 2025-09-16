import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Código opcional para limpar o banco de dados antes de inserir novos dados


  // Criar coleções de diferentes temáticas

const personagens = await Promise.all([

    prisma.character.create({
      data: {
        name: "Eleven",
        image: "https://images.wallpapersden.com/image/download/millie-bobby-brown-as-eleven-stranger-things-3-poster_a2pmZ2eUmZqaraWkpJRpam1lrWprbW0.jpg",
        description: "Uma garota com poderes telecinéticos que escapa de um laboratório governamental e se junta a um grupo de amigos para enfrentar ameaças sobrenaturais.",
        age: 14,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Mike Wheeler",
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/Mike_Wheeler.jpg",
        description: "Um dos melhores amigos de Will e líder do grupo, sempre protetor com Eleven.",
        age: 12,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Will Byers",
        image: "https://upload.wikimedia.org/wikipedia/en/3/37/Will_Byers.jpg",
        description: "Um garoto que desaparece misteriosamente, levando seus amigos e família a procurá-lo.",
        age: 12,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Dustin Henderson",
        image: "https://upload.wikimedia.org/wikipedia/en/1/12/Dustin_Henderson.jpg",
        description: "Amigo leal e engraçado, conhecido por sua inteligência e jeito cativante.",
        age: 12,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lucas Sinclair",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Lucas_Sinclair.jpg",
        description: "Amigo pragmático do grupo, sempre atento a riscos e estratégias.",
        age: 12,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Max Mayfield",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f1/Max_Mayfield.jpg",
        description: "Nova garota na cidade, habilidosa em videogames e skate, se junta ao grupo mais tarde.",
        age: 13,
        firstEp: "Chapter Four: The Body",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Jim Hopper",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Jim_Hopper.jpg",
        description: "Chefe de polícia de Hawkins, protetor de Eleven e figura paterna para ela.",
        age: 43,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Joyce Byers",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Joyce_Byers.jpg",
        description: "Mãe de Will, determinada e corajosa, faz de tudo para encontrar seu filho.",
        age: 35,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Nancy Wheeler",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4f/Nancy_Wheeler.jpg",
        description: "Irmã mais velha de Mike, curiosa e investigativa, se envolve nos mistérios da cidade.",
        age: 16,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Jonathan Byers",
        image: "https://upload.wikimedia.org/wikipedia/en/7/73/Jonathan_Byers.jpg",
        description: "Irmão mais velho de Will, fotógrafo e protetor, envolvido na investigação do desaparecimento do irmão.",
        age: 17,
        firstEp: "Chapter One: The Vanishing of Will Byers",
        alive: true
      }
    }),

  ]);

  console.log({ personagens });

    const easterEggs = await Promise.all([

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/5/5a/DungeonsAndDragons.png",
        title: "Dungeons & Dragons",
        secrets: "O jogo D&D aparece em várias cenas como referência direta ao jogo de mesa que os personagens jogam.",
        facts: "O grupo principal de crianças se chama 'Party of D&D', refletindo suas aventuras na vida real e no jogo.",
        theories: "Alguns fãs acreditam que o Upside Down é uma versão 'real' do mundo de D&D, misturando fantasia com terror."
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Alice_in_Chains.jpg",
        title: "Referências a anos 80",
        secrets: "As músicas, roupas e filmes mencionados são todos de 1983, época em que a série se passa.",
        facts: "Joyce Byers ouve 'Should I Stay or Should I Go' do The Clash, que depois se torna tema icônico da série.",
        theories: "O uso constante de referências culturais dos anos 80 ajuda a criar uma sensação de nostalgia e realismo histórico."
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/f/f6/EGG_headphones.png",
        title: "Cartas do laboratório",
        secrets: "Detalhes das experiências do Laboratório Hawkins podem ser vistos em papéis, cartazes e placas de aviso de fundo em várias cenas.",
        facts: "Estas pistas menores ajudam fãs atentos a perceber a extensão dos experimentos secretos.",
        theories: "Alguns acreditam que certos códigos vistos nas paredes podem indicar eventos futuros da série."
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Alphabet_wall.png",
        title: "Parede de luzes de Christmas",
        secrets: "As luzes na parede de Joyce são usadas para se comunicar com Will no Upside Down.",
        facts: "Cada letra corresponde a um ponto no alfabeto, formando mensagens codificadas.",
        theories: "Essa técnica de comunicação pode ter inspirado teorias de sinais ocultos na cultura pop e em outros filmes de terror."
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/6/61/Starcourt_Mall.png",
        title: "Starcourt Mall",
        secrets: "O shopping é baseado em shoppings reais dos anos 80, com várias lojas fictícias e logotipos da época.",
        facts: "É o cenário de muitas cenas da terceira temporada e reflete a expansão comercial nos anos 80.",
        theories: "Alguns fãs veem o mall como símbolo da invasão da cultura americana na pequena cidade e paralelo ao Upside Down."
      }
    })

  ]);

  console.log({ easterEggs });


  console.log(
    "Seed concluído! Criada")
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
