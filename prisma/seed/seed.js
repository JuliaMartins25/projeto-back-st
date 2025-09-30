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
        name: "Onze (Jane Ives / Jane Hopper)",
        image: "https://i.pinimg.com/736x/e8/b4/7c/e8b47caee1c0f6eda6e22b27933f6ee2.jpg",
        description: "Onze, também conhecida como Jane, é a personagem central de Stranger Things. Criada em laboratório e usada como cobaia em experimentos de manipulação mental e telecinese, ela cresce isolada do mundo real. Seu primeiro contato com a amizade e o afeto acontece com Mike, Dustin e Lucas, quando foge do Laboratório de Hawkins. Dotada de poderes psíquicos extraordinários, ela se torna a principal arma contra as ameaças do Mundo Invertido. Ao longo da série, evolui de uma garota frágil e traumatizada para uma jovem determinada, que luta pela própria identidade, pelos amigos e pelo direito de viver uma vida comum.",
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Mike Wheeler",
        image: "https://i.pinimg.com/736x/9b/b6/ff/9bb6ff36f329e06baf9bb922d75b531b.jpg",
        description: "Mike é um dos protagonistas do grupo de amigos de Hawkins e o primeiro a acolher Onze quando ela aparece em sua vida. Ele é leal, corajoso e muitas vezes funciona como a “cola” que mantém a amizade entre o grupo unida. Apesar de ser impulsivo em alguns momentos, Mike demonstra maturidade ao se preocupar constantemente com seus amigos, especialmente Will e Eleven. O romance entre ele e Onze é um dos arcos emocionais mais marcantes da série, representando tanto o despertar da adolescência quanto o poder da confiança e do amor em meio ao caos.",
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Max Mayfield",
        image: "https://i.pinimg.com/1200x/40/af/e7/40afe7298ae5d2fcbfc0bdf16983eed8.jpg",
        description: "Max é introduzida na segunda temporada como a “nova garota” da cidade. Inicialmente enfrentando resistência do grupo, ela logo conquista seu espaço com sua personalidade forte e espírito independente. Max é habilidosa em jogos de arcade e mostra-se destemida diante de situações sobrenaturais, mesmo que carregue consigo um histórico familiar difícil, marcado pelo relacionamento abusivo com seu meio-irmão, Billy. Na quarta temporada, ela se torna uma das personagens centrais na luta contra Vecna, enfrentando seus próprios traumas de forma corajosa.",
        age: 16,
        firstEp: "Season 2, Chapter 1: MADMAX",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Will Byers",
        image: "https://i.pinimg.com/1200x/b0/d5/b7/b0d5b7beae5bb9616b19a2fa1f5e57a5.jpg",
        description: "O desaparecimento de Will na primeira temporada é o estopim da trama de Stranger Things. Preso no Mundo Invertido, ele passa por experiências traumáticas que o deixam com uma conexão permanente com aquela dimensão sombria. Sensível e criativo, Will é apaixonado por desenhos e jogos de RPG, mas sua inocência é marcada pela dor de ter sido alvo das forças sobrenaturais. Ao longo da série, ele luta para se readaptar à vida normal, ao mesmo tempo em que serve como uma espécie de “ponte viva” entre Hawkins e o Mundo Invertido.",
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lucas Sinclair",
        image: "https://i.pinimg.com/1200x/9f/ff/37/9fff374346f933fcf24ed51f88a0e506.jpg",
        description: "Lucas é conhecido por seu pragmatismo e ceticismo, muitas vezes servindo como a voz da razão dentro do grupo. No início, é o mais desconfiado em relação a Onze, mas com o tempo passa a reconhecê-la como parte essencial da equipe. Ele é determinado e mostra grande habilidade em situações de combate, não hesitando em arriscar-se para proteger os amigos. Seu relacionamento com Max adiciona uma camada emocional importante à sua trajetória, mostrando sua capacidade de crescer e amadurecer.",
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Dustin Henderson",
        image: "https://i.pinimg.com/1200x/31/12/fd/3112fd835dba2da3ecfdec9e501d2f1e.jpg",
        description: "Carismático e engraçado, Dustin é o coração leve do grupo. Ele se destaca por sua inteligência, curiosidade científica e capacidade de encontrar soluções criativas para os problemas. Apesar de ser muitas vezes alvo de piadas por causa de sua condição médica (displasia cleidocraniana, que afeta seus dentes), ele nunca perde o bom humor. Sua amizade improvável com Steve Harrington é uma das mais queridas pelos fãs, mostrando como Dustin é capaz de criar laços fortes com pessoas fora de seu círculo inicial.",
        age: 15,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Joyce Byers",
        image: "https://i.pinimg.com/736x/7b/f2/bd/7bf2bd207fa1866867c68149a807efe5.jpg",
        description: "Joyce é uma das personagens mais resilientes da série. Mãe solteira de Will e Jonathan, ela enfrenta o desaparecimento de seu filho mais novo com uma mistura de desespero e determinação. Mesmo quando todos ao seu redor duvidam dela, Joyce insiste em seguir seus instintos, que a levam a descobrir a existência do Mundo Invertido. Sua coragem e intuição a tornam uma figura central na luta contra as ameaças sobrenaturais, sempre colocando os filhos em primeiro lugar, mesmo diante do perigo mortal.",
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
        image: "https://i.pinimg.com/736x/d0/df/e5/d0dfe5d1e0edd21d02503ebb9ce12df1.jpg",
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
        name: "Keith",
        image: "https://i.pinimg.com/1200x/18/b8/9b/18b89b9318c8eaac629c769a4933ae60.jpg",
        description: "fazer",
        age: 30,
        firstEp: "https://i.pinimg.com/1200x/18/b8/9b/18b89b9318c8eaac629c769a4933ae60.jpg",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Larry Kline",
        image: "https://i.pinimg.com/1200x/42/8a/31/428a3164de422eb91980349073b3a475.jpg",
        description: "Prefeito corrupto de Hawkins na 3ª temporada, envolvido com os russos.",
        age: 50,
        firstEp: "Season 3, Chapter 1: Suzie, Do You Copy?",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lonnie Byers",
        image: "https://i.pinimg.com/736x/1f/c0/75/1fc075be582235db7f5f828b025f4087.jpg",
        description: "Ex-marido abusivo de Joyce, pai biológico de Jonathan e Will.",
        age: 48,
        firstEp: "Season 1, Chapter 3: Chapter Three: Holly, Jolly",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Murray Bauman",
        image: "https://i.pinimg.com/736x/67/7d/06/677d063527362ab1a8527fc3e60cd13c.jpg",
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
        image: "https://i.pinimg.com/736x/0a/e7/12/0ae712f71a632589bf775a617dcb3c6c.jpg",
        description: "Pai abusivo de Billy Hargrove e padrasto de Max.",
        age: 45,
        firstEp: "Season 2, Chapter 4: Chapter Four: Will the Wise",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "O Monstro",
        image: "https://i.pinimg.com/736x/00/fb/c7/00fbc71230d11c172e6a9d3ec470a767.jpg",
        description: "Referência geral às criaturas do Mundo Invertido.",
        age: 1000,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Vecna",
        image: "https://i.pinimg.com/1200x/5c/1c/29/5c1c2953c229f67056a84255d9d0422e.jpg",
        description: "fazer",
        age: 1000,
        firstEp: "Season 4, Chapter 1: terminar",
        alive: true
      }
    }),



    prisma.character.create({
      data: {
        name: "Patrick McKinney",
        image: "https://i.pinimg.com/736x/70/a9/d4/70a9d4b04d90233cb35cdd58570ab801.jpg",
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
        name: "Sam Owens",
        image: "https://i.pinimg.com/1200x/63/35/bb/6335bb2882c83c0c1160be990c1a97b5.jpg",
        description: "Diretor do laboratório que substituiu Brenner, mais ético e protetor das crianças.",
        age: 55,
        firstEp: "Season 2, Chapter 2: Trick or Treat, Freak",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Sara Hopper",
        image: "https://i.pinimg.com/736x/fc/33/b6/fc33b6618b042bd7421573c48f9b76ec.jpg",
        description: "Filha falecida de Jim Hopper, morreu de câncer quando criança.",
        age: 7,
        firstEp: "Season 1, Chapter 8: The Upside Down",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Scott Clarke",
        image: "https://i.pinimg.com/736x/ac/3f/8f/ac3f8fbd4aecab4c71ee3f3395675511.jpg",
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
        image: "https://i.pinimg.com/736x/5b/0a/dc/5b0adc04657e9602909cfcecd32f34d7.jpg",
        description: "Valentão da escola que atormentava os garotos, especialmente Mike e Dustin.",
        age: 13,
        firstEp: "Season 1, Chapter 1: The Vanishing of Will Byers",
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
        image: "https://i.pinimg.com/736x/4e/ce/8d/4ece8dfe357c02cbde1dc9e44c2d278c.jpg",
        description: "Capitão do time de basquete, namorado de Chrissy. Caçou Eddie por vingança.",
        age: 18,
        firstEp: "Season 4, Chapter 1: The Hellfire Club",
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
        image: "https://i.pinimg.com/736x/2d/08/b6/2d08b6f0367758c5f75641fdb7150f18.jpg",
        title: "A série quase foi recusada por vários estúdios.",
        facts: "Antes de ser comprada pela Netflix, Stranger Things foi rejeitada por mais de 15 canais e produtoras. Muitos executivos achavam arriscado investir em uma série que misturava ficção científica, terror e aventura infantil, acreditando que o público não iria se interessar. Alguns chegaram a sugerir que os irmãos Duffer transformassem a história em algo mais “adulto” ou focado apenas nos cientistas, retirando o protagonismo das crianças. Se eles tivessem aceitado mudar, a série provavelmente perderia sua essência. A Netflix, por outro lado, enxergou o potencial e deu liberdade criativa total, o que permitiu que Stranger Things se tornasse o fenômeno mundial que é hoje.",
      }
    }),

    prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/3e/ee/fb/3eeefbb5e78e2a50fba55d1f794a847e.jpg",
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
        image: "https://i.pinimg.com/736x/93/76/5c/93765c2f03a42439ee8265e79151ce43.jpg",
        title: "O relógio do avô na casa Creel",
        secrets: "Na quarta temporada, a casa dos Creel é cercada de objetos estranhos, mas poucos perceberam o relógio antigo em destaque. Ele aparece em cenas antes de ataques de Vecna, sugerindo que há uma relação simbólica entre tempo, memória e trauma. Alguns fãs especulam que o relógio representa o “tempo parado” dos eventos traumáticos da família e conecta os ataques sobrenaturais a momentos específicos do passado. Essa sutileza mostra o cuidado dos criadores em esconder pistas visuais que reforçam a mitologia do Mundo Invertido.",
      }
    }),

      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/fa/58/bf/fa58bf86b7223094d1afe7196d7d7a6a.jpg",
        title: "O número 11 em Hawkins",
        secrets: "Além da personagem Eleven, o número 11 aparece de forma recorrente em objetos de Hawkins, como placas, portas, e até relógios da cidade. É um detalhe que muitos fãs consideram coincidência, mas teorias sugerem que o número serve como um “código simbólico” que conecta Eleven ao universo da cidade e à trama central. Ele reforça a ideia de que o destino da protagonista e eventos sobrenaturais estão entrelaçados desde o início, de forma sutil e quase imperceptível para quem não presta atenção aos detalhes.",
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/cb/c5/a5/cbc5a5917e161a2a879380eb76a99aeb.jpg",
        title: "A ausência da mãe de Will nas visões",
        secrets: "Will Byers é o personagem mais diretamente afetado pelo Mundo Invertido, mas curiosamente, suas visões e sensações durante episódios de possessão ou ataques de Vecna raramente incluem sua mãe, Joyce. Isso sugere que algo protege Joyce ou que Will ainda mantém um vínculo especial que não pode ser quebrado. É um detalhe que muitos fãs não notam, mas que indica que nem todos os relacionamentos familiares têm a mesma influência sobrenatural na série, reforçando a ideia de que alguns personagens têm funções narrativas mais simbólicas.",
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/736x/e1/f7/7a/e1f77aa2727bae80ab879d1c6905a70c.jpg",
        title: "O significado real das luzes de Natal",
        secrets: "Na primeira temporada, Joyce Byers usa luzes de Natal para se comunicar com Will preso no Mundo Invertido. Porém, mesmo após o resgate de Will, essas luzes continuam aparecendo de forma simbólica em momentos-chave da série, sugerindo que elas têm mais do que um simples valor emocional. Muitos fãs acreditam que as luzes representam uma espécie de “condutor energético” entre dimensões, funcionando como uma metáfora para a comunicação entre mundos. Apesar disso, os criadores nunca explicaram completamente esse detalhe, deixando espaço para interpretações que passam despercebidas por quem assiste de forma mais superficial.",
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/1200x/bc/ab/8f/bcab8f771516dca2241d9d35387d6075.jpg",
        title: "Eleven não é a única capaz de derrotar Vecna",
        theories: "Embora Eleven seja apresentada como a personagem central capaz de enfrentar Vecna, muitos fãs acreditam que outros personagens — especialmente Max e Will — podem desempenhar papéis decisivos na batalha final. Max, por sua proximidade com Vecna, pode adquirir habilidades similares ou sensibilidades que a tornariam essencial no confronto. Will, por já ter passado pelo Mundo Invertido diversas vezes, também poderia fornecer uma vantagem estratégica. Essa teoria reforça a ideia de que a série não depende apenas de um “herói único”, mas de uma combinação de personagens conectados emocional e sobrenaturalmente."
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/1200x/f6/af/d0/f6afd0e560a023e823b28984d7830dd4.jpg",
        title: "O Mundo Invertido é uma versão congelada de Hawkins no tempo",
        theories: "Alguns fãs teorizam que o Mundo Invertido não é apenas um reflexo sombrio da realidade, mas sim Hawkins preso em um momento específico no tempo — possivelmente no dia do desaparecimento de Will. Isso explicaria por que certos eventos parecem “ecoar” no mundo real e no mundo paralelo. Essa teoria sugere que o Mundo Invertido é uma dimensão que funciona como uma cápsula temporal, onde traumas e memórias permanecem vivos, e que a presença de Eleven e outros personagens serve para quebrar ou modificar esse congelamento."
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/1200x/b5/54/4f/b5544f54957bd1b4f7031c40739fa35c.jpg",
        title: "Will será o novo vilão",
        theories: "Alguns fãs acreditam que o Upside Down é uma versão 'real' do mundo de D&D, misturando fantasia com terror."
      }
    }),
      prisma.easteregg.create({
      data: {
        image: "https://i.pinimg.com/1200x/b6/fc/ac/b6fcac38e6b1a6d3733a2632e3e0c857.jpg",
        title: "Hopper pode ter viajado entre dimensões",
        theories: "No final da terceira temporada, Hopper aparentemente morre ao se sacrificar para fechar o portal. No entanto, logo depois descobrimos que ele estava vivo em uma prisão russa. Alguns fãs acreditam que Hopper não apenas foi capturado, mas que sua sobrevivência foi resultado de uma passagem pelo Mundo Invertido. Essa teoria se baseia em indícios de que ele teria atravessado parcialmente o portal antes da explosão e que isso pode ter deixado marcas nele. Caso seja verdade, Hopper pode carregar dentro de si algum tipo de conexão com o Mundo Invertido que ainda não foi revelada, o que explicaria sua importância crescente no enredo."
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
