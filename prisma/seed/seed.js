import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Código opcional para limpar o banco de dados antes de inserir novos dados
  await prisma.character.deleteMany({});
  console.log("Todos os personagens foram deletados.");

  await prisma.easteregg.deleteMany({});


  // Criar coleções de diferentes temáticas

  const personagens = await Promise.all([
    prisma.character.create({
      data: {
        name: "Onze",
        image: "https://i.pinimg.com/736x/e8/b4/7c/e8b47caee1c0f6eda6e22b27933f6ee2.jpg",
        description: "Ex-cobaia do Laboratório Hawkins com poderes telecinéticos e telepáticos. Filha adotiva de Jim Hopper.",
        age: 14,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Mike Wheeler",
        image: "https://i.pinimg.com/736x/9b/b6/ff/9bb6ff36f329e06baf9bb922d75b531b.jpg",
        description: "Líder do grupo, Dungeon Master e namorado da Onze. Irmão da Nancy Wheeler.",
        age: 15,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Max Mayfield",
        image: "https://i.pinimg.com/1200x/40/af/e7/40afe7298ae5d2fcbfc0bdf16983eed8.jpg",
        description: "Skatista rebelde, enteada de Billy Hargrove. Sobreviveu ao ataque de Vecna.",
        age: 15,
        firstEp: "Season 2, Chapter 1: MADMAX",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Will Byers",
        image: "https://i.pinimg.com/1200x/b0/d5/b7/b0d5b7beae5bb9616b19a2fa1f5e57a5.jpg",
        description: "Garoto sensível que foi sequestrado para o Mundo Invertido. Possui conexão com o Mind Flayer.",
        age: 15,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lucas Sinclair",
        image: "https://i.pinimg.com/1200x/9f/ff/37/9fff374346f933fcf24ed51f88a0e506.jpg",
        description: "Membro pragmático do grupo, jogador de basquete. Namorado de Max Mayfield.",
        age: 15,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Dustin Henderson",
        image: "https://i.pinimg.com/1200x/31/12/fd/3112fd835dba2da3ecfdec9e501d2f1e.jpg",
        description: "Jovem inteligente e carismático, entusiasta de ciências e tecnologia. Melhor amigo do grupo.",
        age: 15,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Joyce Byers",
        image: "https://i.pinimg.com/736x/7b/f2/bd/7bf2bd207fa1866867c68149a807efe5.jpg",
        description: "Mãe protetora de Will e Jonathan. Trabalha em várias profissões e namora Jim Hopper.",
        age: 45,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Jim Hopper",
        image: "https://i.pinimg.com/736x/ff/33/cf/ff33cf7162ad72628547047e837edb8d.jpg",
        description: "Chefe de polícia de Hawkins, pai adotivo de Onze. Sobreviveu ao cativeiro na Rússia.",
        age: 43,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Martin Brenner",
        image: "https://i.pinimg.com/736x/68/5d/b9/685db99b4154e6268df2c87c028d3208.jpg",
        description: "Dr. Papa, cientista chefe do Laboratório Hawkins responsável pelos experimentos em crianças.",
        age: 65,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Alexei",
        image: "https://hips.hearstapps.com/hmg-prod/images/alexei-smirnoff-stranger-things-3-1562700391.png?crop=0.998xw:1.00xh;0.00160xw,0&resize=1200:*",
        description: "Cientista russo que ajudou o grupo. Amava refrigerantes americanos e parques de diversão.",
        age: 35,
        firstEp: "Season 3, Chapter 2: The Mall Rats",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Argyle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KKtk5qm7NBZMiBpe0MokQlQh6gHQNHoJLQ&s",
        description: "Melhor amigo de Jonathan na Califórnia, entregador de pizza descontraído e leal.",
        age: 18,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Barbara Holland",
        image: "https://pyxis.nymag.com/v1/imgs/cd8/1a8/e67063dba9db70085a35376ef886565774-27-stranger-things-barb.rsocial.w1200.jpg",
        description: "Melhor amiga de Nancy Wheeler, primeira vítima conhecida do Demogorgon.",
        age: 17,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Benny Hammond",
        image: "https://i.pinimg.com/1200x/e7/19/6c/e7196c201107246241c0ed138ea1e98c.jpg",
        description: "Dono do restaurante Benny's Burgers, ajudou Onze no início da série.",
        age: 50,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Billy Hargrove",
        image: "https://miro.medium.com/v2/resize:fit:382/1*Mgm1hZuxoctTuQcQZ1r3GA.png",
        description: "Irmão de Max, inicialmente antagonista, vítima do Devorador de Mentes.",
        age: 21,
        firstEp: "Season 2, Chapter 1: MADMAX",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Bob Newby",
        image: "https://imgix.bustle.com/uploads/image/2017/10/23/1d2aeb32-d8a0-4635-8a6b-ac03d509649f-bob-stranger-things.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
        description: "Namorado de Joyce, trabalhador da RadioShack. Morreu salvando o grupo dos Demodogs.",
        age: 48,
        firstEp: "Season 2, Chapter 2: Trick or Treat, Freak",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Chrissy Cunningham",
        image: "https://decider.com/wp-content/uploads/2022/05/grace-van-dien-stranger-things.jpg?quality=75&strip=all&w=1200",
        description: "Líder de torcida e primeira vítima de Vecna na 4ª temporada.",
        age: 18,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Claudia Henderson",
        image: "https://i.pinimg.com/1200x/4d/75/3b/4d753bdf3520fc124bf183c0e5d60a36.jpg",
        description: "Mãe carinhosa e atenciosa de Dustin Henderson.",
        age: 42,
        firstEp: "Season 1, Chapter 4: The Body",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Connie Frazier",
        image: "https://i.pinimg.com/736x/07/f3/91/07f391d0ce24946e6f37f806938ceb68.jpg",
        description: "Agente do departamento de energia que perseguiu os garotos na primeira temporada.",
        age: 40,
        firstEp: "Season 1, Chapter 4: The Body",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Demogorgon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3QV6VTTe3TuB7_QiqN-mbXDcGyEifQO2_A&s",
        description: "Criatura predadora do Mundo Invertido, primeiro monstro enfrentado pelo grupo.",
        age: 1000,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "010",
        image: "https://i.pinimg.com/1200x/d2/1d/71/d21d7177e2d9566f41f933e820c3645f.jpg",
        description: "Amigo de Kali Prasad (Oito), parte do grupo de Chicago.",
        age: 19,
        firstEp: "Season 2, Chapter 7: The Lost Sister",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Dimitri Antolov",
        image: "https://i.pinimg.com/736x/1a/c4/ca/1ac4ca046d90a407e919e6f7755790f2.jpg",
        description: "Guarda da prisão russa que ajudou Hopper a escapar, apelidado de Enzo.",
        age: 40,
        firstEp: "Season 4, Chapter 2: Vecna's Curse",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "002",
        image: "https://i.pinimg.com/736x/63/06/80/630680223ea01f1599adf0f42d2223c8.jpg",
        description: "Criança com poderes psíquicos do laboratório Hawkins, rival de Onze.",
        age: 14,
        firstEp: "Season 4, Chapter 5: The Nina Project",
        alive: false
      }
    }),
    
    prisma.character.create({
      data: {
        name: "001",
        image: "https://i.pinimg.com/1200x/d3/d0/11/d3d01175cf735789369fa7d76044820d.jpg",
        description: "Arrumar",
        age: 14,
        firstEp: "Arrumar",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Eddie Munson",
        image: "https://miro.medium.com/1*lC413Lnv3zATazzPNB3NOg.jpeg",
        description: "Líder do Hellfire Club, fã de metal e D&D. Morreu heroicamente no Mundo Invertido.",
        age: 20,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Érica Sinclair",
        image: "https://substackcdn.com/image/fetch/$s_!9KHk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd38a9422-dad0-4fd0-8345-8a1ac827b081_1500x1000.jpeg",
        description: "Irmã mais nova de Lucas, garota esperta e corajosa que ajudou na missão russa.",
        age: 11,
        firstEp: "Season 2, Chapter 2: Trick or Treat, Freak",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Fred Benson",
        image: "https://static.wikia.nocookie.net/strangerthings/images/d/d3/Fredbenson.png/revision/latest/thumbnail/width/360/height/360?cb=20220603153559&path-prefix=fr",
        description: "Colega jornalista de Nancy Wheeler, segunda vítima de Vecna.",
        age: 17,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Grigori",
        image: "https://i.pinimg.com/736x/f9/a4/33/f9a4334e3e01ada60eca21af84311feb.jpg",
        description: "Assassino e soldado russo, principal antagonista humano da 3ª temporada.",
        age: 40,
        firstEp: "Season 3, Chapter 2: The Mall Rats",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Heather Holloway",
        image: "https://i.pinimg.com/736x/43/55/3e/43553ec2a6d3cdc1f822af1718dc8385.jpg",
        description: "Salva-vidas da piscina comunitária, possuída pelo Mind Flayer.",
        age: 17,
        firstEp: "Season 3, Chapter 2: The Mall Rats",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Holly Wheeler",
        image: "https://i.pinimg.com/1200x/34/cd/94/34cd941874d4520258bb3a38931e2e69.jpg",
        description: "Irmã mais nova de Mike e Nancy, criança pequena e curiosa.",
        age: 5,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Jonathan Byers",
        image: "https://i.pinimg.com/1200x/4c/43/ac/4c43acef1ce7be842cabae07199eb3db.jpg",
        description: "Irmão mais velho de Will, fotógrafo introvertido. Namorado de Nancy Wheeler.",
        age: 18,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),



    prisma.character.create({
      data: {
        name: "Kali Prasad",
        image: "https://i.pinimg.com/736x/de/40/8f/de408f94c9a205a077d985a1d1b48c54.jpg",
        description: "Oito, irmã de laboratório de Onze com poderes de ilusão.",
        age: 20,
        firstEp: "Season 2, Chapter 7: The Lost Sister",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Karen Wheeler",
        image: "https://i.pinimg.com/1200x/1e/60/07/1e6007e7c517512a4032b5b89fda5500.jpg",
        description: "Mãe de Mike e Nancy Wheeler, dona de casa dedicada mas às vezes ingênua.",
        age: 42,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Ken",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Personagem secundário, aparece brevemente na série.",
        age: 30,
        firstEp: "Season 1, Chapter 5: Chapter Five: The Flea and the Acrobat",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Larry Kline",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Prefeito corrupto de Hawkins na 3ª temporada, envolvido com os russos.",
        age: 50,
        firstEp: "Season 3, Chapter 1: Suzie, Do You Copy?",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lonnie Byers",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Ex-marido abusivo de Joyce, pai biológico de Jonathan e Will.",
        age: 48,
        firstEp: "Season 1, Chapter 3: Chapter Three: Holly, Jolly",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Marsha Holland",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Mãe de Barbara Holland, buscou justiça pela morte da filha.",
        age: 45,
        firstEp: "Season 1, Chapter 6: Chapter Six: The Monster",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Murray Bauman",
        image: "https://static.wikia.nocookie.net/herois/images/d/dd/Murray2.jpg/revision/latest/thumbnail/width/360/height/360?cb=20221123223135&path-prefix=pt-br",
        description: "Jornalista investigativo paranóico e teórico da conspiração. Aliado importante do grupo.",
        age: 50,
        firstEp: "Season 2, Chapter 5: Dig Dug",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Nancy Wheeler",
        image: "https://i.pinimg.com/736x/ee/8a/dc/ee8adc9a51ac765a2830431387cbe2ce.jpg",
        description: "Jornalista determinada e irmã mais velha de Mike. Combatente contra as criaturas do Mundo Invertido.",
        age: 18,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Neil Hargrove",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Pai abusivo de Billy Hargrove e padrasto de Max.",
        age: 45,
        firstEp: "Season 2, Chapter 4: Chapter Four: Will the Wise",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "O Monstro",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Referência geral às criaturas do Mundo Invertido.",
        age: 1000,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),



    prisma.character.create({
      data: {
        name: "Patrick McKinney",
        image: "https://static.wikia.nocookie.net/strangerthings/images/9/94/Patrick_S4_Portal.jpg",
        description: "Jogador de basquete, terceira vítima de Vecna.",
        age: 18,
        firstEp: "Season 4, Chapter 2: Vecna's Curse",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Robin Buckley",
        image: "https://i.pinimg.com/736x/61/9a/da/619ada72de2cfc4903ffeb67c4f30c77.jpg",
        description: "Colega de trabalho e melhor amiga de Steve. Inteligente, sarcástica e lésbica.",
        age: 18,
        firstEp: "Season 3, Chapter 1: Suzie, Do You Copy?",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Russell Coleman",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Agente do laboratório, aparece na primeira temporada.",
        age: 40,
        firstEp: "Season 1, Chapter 4: The Body",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Sam Owens",
        image: "https://static.wikia.nocookie.net/strangerthings/images/3/35/Owens_S2_Portrait.jpg",
        description: "Diretor do laboratório que substituiu Brenner, mais ético e protetor das crianças.",
        age: 55,
        firstEp: "Season 2, Chapter 2: Trick or Treat, Freak",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Sara Hopper",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Filha falecida de Jim Hopper, morreu de câncer quando criança.",
        age: 7,
        firstEp: "Season 1, Chapter 8: The Upside Down",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Scott Clarke",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Professor de ciências dos garotos na escola média Hawkins.",
        age: 35,
        firstEp: "Season 1, Chapter 2: The Weirdo on Maple Street",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Steve Harrington",
        image: "https://i.pinimg.com/736x/93/f4/4e/93f44e505fe2943659e7ce4a264549db.jpg",
        description: "Ex-rei da escola que virou babá dos garotos. Trabalha na Scoops Ahoy e depois na Family Video.",
        age: 19,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Susan Hargrove",
        image: "https://i.pinimg.com/736x/dc/84/bd/dc84bd825ff831b35166c79c9ab318be.jpg",
        description: "Mãe de Max e esposa de Neil Hargrove.",
        age: 40,
        firstEp: "Season 2, Chapter 4: Chapter Four: Will the Wise",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Ted Wheeler",
        image: "https://i.pinimg.com/736x/4b/4b/ae/4b4bae93204753653724320d4b806694.jpg",
        description: "Pai de Mike e Nancy, homem desatento que geralmente está assistindo TV ou dormindo.",
        age: 45,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Terry Ives",
        image: "https://i.pinimg.com/1200x/7b/1a/3d/7b1a3d671698b4756574a1db2abbaaca.jpg",
        description: "Mãe biológica de Onze, sofreu danos cerebrais devido aos experimentos.",
        age: 42,
        firstEp: "Season 1, Chapter 6: The Monster",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Tom Holloway",
        image: "https://i.pinimg.com/736x/a4/6b/f4/a46bf4803171b46ef290c99bc09d289c.jpg",
        description: "Editor do jornal Hawkins Post, pai de Heather Holloway.",
        age: 45,
        firstEp: "Season 3, Chapter 2: The Mall Rats",
        alive: false
      }
    }),


    prisma.character.create({
      data: {
        name: "Troy Walsh",
        image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
        description: "Valentão da escola que atormentava os garotos, especialmente Mike e Dustin.",
        age: 13,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Sam Owens",
        image: "https://static.wikia.nocookie.net/strangerthings/images/3/35/Owens_S2_Portrait.jpg",
        description: "Diretor do laboratório que substituiu Brenner, mais ético e protetor das crianças.",
        age: 55,
        firstEp: "Season 2, Chapter 2: Trick or Treat, Freak",
        alive: true
      }
    }),


    prisma.character.create({
      data: {
        name: "Yuri Ismalov",
        image: "https://i.pinimg.com/736x/e2/a1/a9/e2a1a9aad3397b939f4d0775c177b9f4.jpg",
        description: "Contrabandista russo que ajudou na operação de resgate de Hopper.",
        age: 45,
        firstEp: "Season 4, Chapter 4: Dear Billy",
        alive: true
      }
    }),

    // ANTAGONISTAS DA 4ª TEMPORADA
    prisma.character.create({
      data: {
        name: "Jason Carver",
        image: "https://static.wikia.nocookie.net/strangerthings/images/1/13/Jason_S4_Portrait.jpg",
        description: "Capitão do time de basquete, namorado de Chrissy. Caçou Eddie por vingança.",
        age: 18,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Patrick McKinney",
        image: "https://static.wikia.nocookie.net/strangerthings/images/9/94/Patrick_S4_Portal.jpg",
        description: "Jogador de basquete, terceira vítima de Vecna.",
        age: 18,
        firstEp: "Season 4, Chapter 2: Vecna's Curse",
        alive: false
      }
    }),

  ]


  );

  console.log(personagens);

  const easterEggs = await Promise.all([

    prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/1200x/47/a6/0b/47a60b1fe95a1305df546a7f9904633a.jpg",
        title: "Millie Bobby Brown quase desistiu da atuação.",
        facts: "Millie Bobby Brown, a atriz que interpreta Eleven, enfrentou diversas dificuldades antes de conseguir o papel icônico. Ela começou a fazer testes de atuação muito jovem, mas recebia muitos “nãos” que quase a fizeram desistir da carreira. Quando foi chamada para o teste de Stranger Things, ela tinha apenas 11 anos e ainda estava aprendendo a lidar com o estresse das audições. A interpretação de Eleven exigia expressividade intensa, cenas dramáticas e habilidades físicas para simular poderes sobrenaturais. O papel foi o divisor de águas da carreira de Millie, transformando-a em uma estrela internacional e dando início a oportunidades em filmes e séries de Hollywood.",
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Alphabet_wall.png",
        title: "O Demogorgon foi inspirado em 'O Senhor dos Anéis' e Dungeons & Dragons.",
        facts: "O icônico monstro da primeira temporada, o Demogorgon, tem seu nome inspirado no jogo de RPG Dungeons & Dragons, mas sua aparência e comportamento também lembram criaturas sombrias de obras de fantasia, como “O Senhor dos Anéis”. Os criadores queriam uma criatura aterrorizante que atravessasse dimensões e transmitisse sensação de perigo absoluto, mas que também tivesse características que permitissem explorar o psicológico dos personagens. A combinação de elementos de RPG, filmes de terror e fantasia criou um monstro inesquecível que virou símbolo da série.",
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/3b/d5/ee/3bd5ee9cf99fd97e18891f4aab1dfaa6.jpg",
        title: "A série quase se chamou 'Montauk'.",
        facts: "Antes de se tornar Stranger Things, os irmãos Duffer planejavam que a série se passasse em Montauk, uma cidade costeira em Nova York, conhecida por teorias da conspiração envolvendo experimentos do governo e desaparecimentos misteriosos. Eles se inspiraram no chamado 'Experimento Montauk', que supostamente envolvia testes secretos de controle mental e viagem no tempo. Porém, filmar em Montauk seria muito caro e complicado. Por isso, decidiram criar uma cidade fictícia — Hawkins, Indiana — que permitiu maior liberdade criativa e facilitou a produção. Assim, a série ganhou uma atmosfera mais 'suburbana e americana' que se encaixa perfeitamente com os anos 1980.",
      }
    }),

     prisma.easteregg.create({
      data: {
        image: "https://upload.wikimedia.org/wikipedia/en/7/70/Alice_in_Chains.jpg",
        title: "fazer",
        facts: "fazer",
      }
    }),

      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/3e/ee/fb/3eeefbb5e78e2a50fba55d1f794a847e.jpg",
        title: "Dungeons & Dragons",
        secrets: "O jogo D&D aparece em várias cenas como referência direta ao jogo de mesa que os personagens jogam.",
        facts: "O grupo principal de crianças se chama 'Party of D&D', refletindo suas aventuras na vida real e no jogo.",
        theories: "Alguns fãs acreditam que o Upside Down é uma versão 'real' do mundo de D&D, misturando fantasia com terror."
      }
    }),
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
