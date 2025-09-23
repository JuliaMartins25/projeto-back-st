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
      image: "https://static.wikia.nocookie.net/strangerthings8338/images/5/51/Benny_Hammond.png/revision/latest?cb=20170701120630",
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
      name: "Carol Perkins",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Ex-namorada de Tommy Hagan, parte do grupo popular da escola.",
      age: 17,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
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
      image: "https://static.wikia.nocookie.net/heroes-and-villain/images/2/24/Claudia_Henderson.png/revision/latest?cb=20220724034611",
      description: "Mãe carinhosa e atenciosa de Dustin Henderson.",
      age: 42,
      firstEp: "Season 1, Chapter 4: The Body",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Connie Frazier",
      image: "https://static.wikia.nocookie.net/strangerthings8338/images/1/13/Connie_Frazier_%28Chapter_Seven%29.png/revision/latest?cb=20170321133518",
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
      name: "Dez",
      image: "https://static.wikia.nocookie.net/strangerthings/images/a/a0/Dez.png/revision/latest?cb=20220703223724&path-prefix=pt-br",
      description: "Amigo de Kali Prasad (Oito), parte do grupo de Chicago.",
      age: 19,
      firstEp: "Season 2, Chapter 7: The Lost Sister",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Dimitri Antolov",
      image: "https://static.wikia.nocookie.net/strangerthings8338/images/a/a2/Dmitri.png/revision/latest?cb=20220702211146",
      description: "Guarda da prisão russa que ajudou Hopper a escapar, apelidado de Enzo.",
      age: 40,
      firstEp: "Season 4, Chapter 2: Vecna's Curse",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Dois",
      image: "https://static.wikia.nocookie.net/strangerthings/images/c/c9/Dois.png/revision/latest?cb=20220820184433&path-prefix=pt-br",
      description: "Criança com poderes psíquicos do laboratório Hawkins, rival de Onze.",
      age: 14,
      firstEp: "Season 4, Chapter 5: The Nina Project",
      alive: false
    }
  }),

  prisma.character.create({
    data: {
      name: "Dustin Henderson",
      image: "https://i.pinimg.com/736x/6b/24/43/6b2443ddc9004bad53cbe3b50d3bab9d.jpg",
      description: "Jovem inteligente e carismático, entusiasta de ciências e tecnologia. Melhor amigo do grupo.",
      age: 15,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
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
      name: "Éden Bingham",
      image: "https://tvovermind.com/wp-content/uploads/2023/09/Eden-From-Stranger-Things-season-4.jpg",
      description: "Membro do laboratório de pesquisas, aparece brevemente na série.",
      age: 35,
      firstEp: "Season 2, Chapter 1: MADMAX",
      alive: true
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
      image: "https://static.wikia.nocookie.net/villains/images/0/08/Grigori_ava.jpg/revision/latest?cb=20190731045820",
      description: "Assassino e soldado russo, principal antagonista humano da 3ª temporada.",
      age: 40,
      firstEp: "Season 3, Chapter 2: The Mall Rats",
      alive: false
    }
  }),

  prisma.character.create({
    data: {
      name: "Heather Holloway",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Salva-vidas da piscina comunitária, possuída pelo Mind Flayer.",
      age: 17,
      firstEp: "Season 3, Chapter 2: The Mall Rats",
      alive: false
    }
  }),

  prisma.character.create({
    data: {
      name: "Holly Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/a/a0/Holly_Wheeler_S3.jpg",
      description: "Irmã mais nova de Mike e Nancy, criança pequena e curiosa.",
      age: 5,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

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
      name: "Jim Hopper",
      image: "https://static.wikia.nocookie.net/strangerthings/images/9/99/ST4_Hopper_Portrait.jpg",
      description: "Chefe de polícia de Hawkins, pai adotivo de Onze. Sobreviveu ao cativeiro na Rússia.",
      age: 43,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Jonathan Byers",
      image: "https://static.wikia.nocookie.net/strangerthings/images/2/2c/ST4_Jonathan_Portrait.jpg",
      description: "Irmão mais velho de Will, fotógrafo introvertido. Namorado de Nancy Wheeler.",
      age: 18,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Joyce Byers",
      image: "https://static.wikia.nocookie.net/strangerthings/images/5/54/ST4_Joyce_Portrait.jpg",
      description: "Mãe protetora de Will e Jonathan. Trabalha em várias profissões e namora Jim Hopper.",
      age: 45,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Kali Prasad",
      image: "https://static.wikia.nocookie.net/strangerthings/images/8/8a/Eight_S2_Portrait.jpg",
      description: "Oito, irmã de laboratório de Onze com poderes de ilusão.",
      age: 20,
      firstEp: "Season 2, Chapter 7: The Lost Sister",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Karen Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/5/5e/Karen_Wheeler_S3_Portrait.jpg",
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
      name: "Lucas Sinclair",
      image: "https://static.wikia.nocookie.net/strangerthings/images/9/9c/ST4_Lucas_Portrait.jpg",
      description: "Membro pragmático do grupo, jogador de basquete. Namorado de Max Mayfield.",
      age: 15,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
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
      name: "Martin Brenner",
      image: "https://static.wikia.nocookie.net/strangerthings/images/6/6b/Brenner_S4_Portrait.jpg",
      description: "Dr. Papa, cientista chefe do Laboratório Hawkins responsável pelos experimentos em crianças.",
      age: 65,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: false
    }
  }),

  prisma.character.create({
    data: {
      name: "Max Mayfield",
      image: "https://static.wikia.nocookie.net/strangerthings/images/d/d8/ST4_Max_Portrait.jpg",
      description: "Skatista rebelde, enteada de Billy Hargrove. Sobreviveu ao ataque de Vecna.",
      age: 15,
      firstEp: "Season 2, Chapter 1: MADMAX",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Mike Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/3/3c/ST4_Mike_Portrait.jpg",
      description: "Líder do grupo, Dungeon Master e namorado da Onze. Irmão da Nancy Wheeler.",
      age: 15,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
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
      name: "Mãe do Billy",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Mãe biológica de Billy Hargrove, abandonou a família quando ele era criança.",
      age: 40,
      firstEp: "Season 2, Chapter 4: Chapter Four: Will the Wise",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Nancy Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/6/63/ST4_Nancy_Portrait.jpg",
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
      name: "Onze",
      image: "https://static.wikia.nocookie.net/strangerthings/images/4/4c/ST4_Eleven_Portrait.jpg",
      description: "Ex-cobaia do Laboratório Hawkins com poderes telecinéticos e telepáticos. Filha adotiva de Jim Hopper.",
      age: 14,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
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
      image: "https://static.wikia.nocookie.net/strangerthings/images/1/1f/ST4_Robin_Portrait.jpg",
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
      image: "https://static.wikia.nocookie.net/strangerthings/images/8/8c/ST4_Steve_Portrait.jpg",
      description: "Ex-rei da escola que virou babá dos garotos. Trabalha na Scoops Ahoy e depois na Family Video.",
      age: 19,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Susan Hargrove",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Mãe de Max e esposa de Neil Hargrove.",
      age: 40,
      firstEp: "Season 2, Chapter 4: Chapter Four: Will the Wise",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Suzie",
      image: "https://static.wikia.nocookie.net/strangerthings/images/5/5e/Suzie_S3_Portrait.jpg",
      description: "Namorada à distância de Dustin, gênia da computação que mora em Utah.",
      age: 15,
      firstEp: "Season 3, Chapter 8: The Battle of Starcourt",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Ted Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/b/ba/Ted_Wheeler_S1_Portrait.jpg",
      description: "Pai de Mike e Nancy, homem desatento que geralmente está assistindo TV ou dormindo.",
      age: 45,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Terry Ives",
      image: "https://static.wikia.nocookie.net/strangerthings/images/1/18/Terry_Ives_S2.jpg",
      description: "Mãe biológica de Onze, sofreu danos cerebrais devido aos experimentos.",
      age: 42,
      firstEp: "Season 1, Chapter 6: The Monster",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Tom Holloway",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Editor do jornal Hawkins Post, pai de Heather Holloway.",
      age: 45,
      firstEp: "Season 3, Chapter 2: The Mall Rats",
      alive: false
    }
  }),

  prisma.character.create({
    data: {
      name: "Tommy Hagan",
      image: "https://static.wikia.nocookie.net/strangerthings/images/placeholder.jpg",
      description: "Ex-melhor amigo de Steve Harrington, parte do grupo popular da escola.",
      age: 17,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
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
      name: "Will Byers",
      image: "https://static.wikia.nocookie.net/strangerthings/images/a/a8/ST4_Will_Portrait.jpg",
      description: "Garoto sensível que foi sequestrado para o Mundo Invertido. Possui conexão com o Mind Flayer.",
      age: 15,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),


  prisma.character.create({
    data: {
      name: "Robin Buckley",
      image: "https://static.wikia.nocookie.net/strangerthings/images/1/1f/ST4_Robin_Portrait.jpg",
      description: "Colega de trabalho e melhor amiga de Steve. Inteligente, sarcástica e lésbica.",
      age: 18,
      firstEp: "Season 3, Chapter 1: Suzie, Do You Copy?",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Jonathan Byers",
      image: "https://static.wikia.nocookie.net/strangerthings/images/2/2c/ST4_Jonathan_Portrait.jpg",
      description: "Irmão mais velho de Will, fotógrafo introvertido. Namorado de Nancy Wheeler.",
      age: 18,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  // FAMÍLIA WHEELER
  prisma.character.create({
    data: {
      name: "Karen Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/5/5e/Karen_Wheeler_S3_Portrait.jpg",
      description: "Mãe de Mike e Nancy Wheeler, dona de casa dedicada mas às vezes ingênua.",
      age: 42,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Ted Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/b/ba/Ted_Wheeler_S1_Portrait.jpg",
      description: "Pai de Mike e Nancy, homem desatento que geralmente está assistindo TV ou dormindo.",
      age: 45,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Holly Wheeler",
      image: "https://static.wikia.nocookie.net/strangerthings/images/a/a0/Holly_Wheeler_S3.jpg",
      description: "Irmã mais nova de Mike e Nancy, criança pequena e curiosa.",
      age: 5,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Martin Brenner",
      image: "https://static.wikia.nocookie.net/strangerthings/images/6/6b/Brenner_S4_Portrait.jpg",
      description: "Dr. Papa, cientista chefe do Laboratório Hawkins responsável pelos experimentos em crianças.",
      age: 65,
      firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
      alive: false
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
      image: "https://static.wikia.nocookie.net/strangerthings/images/f/f8/Yuri_S4_Portal.jpg",
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


  prisma.character.create({
    data: {
      name: "Terry Ives",
      image: "https://static.wikia.nocookie.net/strangerthings/images/1/18/Terry_Ives_S2.jpg",
      description: "Mãe biológica de Onze, sofreu danos cerebrais devido aos experimentos.",
      age: 42,
      firstEp: "Season 1, Chapter 6: The Monster",
      alive: true
    }
  }),

  prisma.character.create({
    data: {
      name: "Suzie",
      image: "https://static.wikia.nocookie.net/strangerthings/images/5/5e/Suzie_S3_Portrait.jpg",
      description: "Namorada à distância de Dustin, gênia da computação que mora em Utah.",
      age: 15,
      firstEp: "Season 3, Chapter 8: The Battle of Starcourt",
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
      name: "Kali Prasad",
      image: "https://static.wikia.nocookie.net/strangerthings/images/8/8a/Eight_S2_Portrait.jpg",
      description: "Oito, irmã de laboratório de Onze com poderes de ilusão.",
      age: 20,
      firstEp: "Season 2, Chapter 7: The Lost Sister",
      alive: true
    }
  }),

]


  );

  console.log(personagens );

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
