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
        description: `Onze, também conhecida como Jane, é a personagem central de Stranger Things. Criada em laboratório e usada como cobaia em experimentos de manipulação mental e telecinese, ela cresce isolada do mundo real. Seu primeiro contato com a amizade e o afeto acontece com Mike, Dustin e Lucas, quando foge do Laboratório de Hawkins. Dotada de poderes psíquicos extraordinários, ela se torna a principal arma contra as ameaças do Mundo Invertido. Ao longo da série, evolui de uma garota frágil e traumatizada para uma jovem determinada, que luta pela própria identidade, pelos amigos e pelo direito de viver uma vida comum.

Temporada 1: Introduzida como uma garota misteriosa que escapa do laboratório de Hawkins. Com seus poderes telecinéticos e origem secreta, é encontrada por Mike, Dustin e Lucas. Ajuda o grupo a procurar Will, ao mesmo tempo em que foge de agentes do governo. No final, enfrenta o Demogorgon no colégio e desaparece, deixando todos acreditando que havia morrido.

Temporada 2: Descobrimos que ela sobreviveu e foi acolhida por Hopper, que a esconde em sua cabana. Vive o dilema de querer liberdade, mas Hopper a protege excessivamente. Aprende mais sobre seu passado, conhece sua “irmã” Kali (008), mas decide voltar para Hawkins para proteger seus amigos. Fecha o portão para o Mundo Invertido no final da temporada.

Temporada 3: Vive uma fase mais adolescente, com namoro com Mike, descobertas sobre amizade e identidade. Se envolve na batalha contra o Devorador de Mentes, sofrendo fisicamente ao perder temporariamente seus poderes. O trauma físico e emocional a deixa fragilizada, especialmente após Hopper desaparecer.

Temporada 4: Agora vivendo na Califórnia com a família Byers, tenta se adaptar a uma vida normal sem poderes, sofrendo bullying na escola. Quando Vecna ameaça Hawkins, busca recuperar suas habilidades com o Dr. Owens e o Dr. Brenner. Revive traumas de seu passado, descobre sua conexão com Henry/001/Vecna, e no final retorna para Hawkins para lutar ao lado de seus amigos.`,
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Mike Wheeler",
        image: "https://i.pinimg.com/736x/9b/b6/ff/9bb6ff36f329e06baf9bb922d75b531b.jpg",
        description: `Mike é um dos protagonistas do grupo de amigos de Hawkins e o primeiro a acolher Onze quando ela aparece em sua vida. Ele é leal, corajoso e muitas vezes funciona como a “cola” que mantém a amizade entre o grupo unida. Apesar de ser impulsivo em alguns momentos, Mike demonstra maturidade ao se preocupar constantemente com seus amigos, especialmente Will e Eleven. O romance entre ele e Onze é um dos arcos emocionais mais marcantes da série, representando tanto o despertar da adolescência quanto o poder da confiança e do amor em meio ao caos.

Temporada 1: É o líder natural do grupo de amigos. Toma a iniciativa de ajudar Eleven e logo cria um forte vínculo emocional com ela. É motivado pela lealdade a Will e pela coragem, mesmo diante do perigo.

Temporada 2: Fica obcecado pela ausência de Eleven, sofrendo pela falta dela. Quando finalmente a reencontra, demonstra seu amor e fidelidade. Também apoia Will em seus problemas com as visões do Mundo Invertido.

Temporada 3: Vive seu namoro com Eleven, entrando em conflito com Hopper por causa disso. É um dos primeiros a perceber que o comportamento estranho de Billy e a ameaça do Devorador de Mentes são sinais de perigo. Mostra grande maturidade emocional ao apoiar Eleven quando ela perde seus poderes.

Temporada 4: Está em crise no relacionamento com Eleven, por não conseguir expressar seus sentimentos de forma clara. Na Califórnia, se envolve na trama de resgatar Eleven do governo. Reforça sua importância emocional para ela durante a luta contra Vecna.`,
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Max Mayfield",
        image: "https://i.pinimg.com/1200x/40/af/e7/40afe7298ae5d2fcbfc0bdf16983eed8.jpg",
        description: `Max é a nova garota de Hawkins que rapidamente conquista espaço no grupo devido à sua personalidade independente e forte. Ela demonstra coragem e inteligência, mesmo enfrentando traumas familiares. Sua amizade com Eleven se torna fundamental, mostrando a força do apoio entre mulheres jovens. O romance com Lucas adiciona um lado mais sensível e humano à sua jornada, destacando sua vulnerabilidade e força em igual medida.

Temporada 2: Introduzida como a nova garota da escola, inicialmente rejeitada por Mike. Com seu jeito forte e independente, conquista o grupo e começa um relacionamento com Lucas. Vive em conflito com o irmão violento, Billy.

Temporada 3: Sofre abusos emocionais por parte de Billy, mas encontra em Eleven uma amiga verdadeira. Ajuda o grupo a lutar contra o Devorador de Mentes, sendo profundamente afetada pela morte de Billy.

Temporada 4: É uma das personagens mais complexas, vivendo luto e isolamento após a morte de Billy. Torna-se alvo de Vecna por seus traumas e sentimentos de culpa. Sua luta psicológica culmina na cena icônica de “Running Up That Hill”, em que escapa da morte temporariamente. No final, é gravemente ferida e entra em coma, deixando o destino incerto.`,
        age: 16,
        firstEp: "S02EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Will Byers",
        image: "https://i.pinimg.com/1200x/b0/d5/b7/b0d5b7beae5bb9616b19a2fa1f5e57a5.jpg",
        description:  `O desaparecimento de Will na primeira temporada é o estopim da trama de Stranger Things. Preso no Mundo Invertido, ele passa por experiências traumáticas que o deixam com uma conexão permanente com aquela dimensão sombria. Sensível e criativo, Will é apaixonado por desenhos e jogos de RPG, mas sua inocência é marcada pela dor de ter sido alvo das forças sobrenaturais. Ao longo da série, ele luta para se readaptar à vida normal, ao mesmo tempo em que serve como uma espécie de “ponte viva” entre Hawkins e o Mundo Invertido.

Temporada 1: O desaparecimento de Will dá início a toda a história. Preso no Mundo Invertido, enfrenta o Demogorgon e vive aterrorizado. Sua ausência e busca tornam-se o coração da temporada.

Temporada 2: Sofre as consequências traumáticas do tempo que passou no Mundo Invertido. Desenvolve uma ligação psíquica com o Devorador de Mentes, tornando-se alvo e “espião” da criatura. Sua luta é intensa e dolorosa, resultando em um dos momentos mais emocionantes da série quando ele é exorcizado do controle da entidade.

Temporada 3: É o amigo que se sente deixado de lado, pois todos estão crescendo e se apaixonando, enquanto ele deseja manter a amizade como antes. Sua sensibilidade e conexão ainda o deixam atento aos sinais do Mundo Invertido.

Temporada 4: Morando na Califórnia, demonstra sentimentos reprimidos (especialmente por Mike). Mostra novamente sua intuição sobrenatural ao sentir a presença de Vecna. Vive em silêncio o conflito de identidade e amizade, tornando-se uma das peças emocionais mais fortes da temporada.`,
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lucas Sinclair",
        image: "https://i.pinimg.com/1200x/9f/ff/37/9fff374346f933fcf24ed51f88a0e506.jpg",
        description: `Lucas é conhecido por seu pragmatismo e ceticismo, muitas vezes servindo como a voz da razão dentro do grupo. No início, é o mais desconfiado em relação a Onze, mas com o tempo passa a reconhecê-la como parte essencial da equipe. Ele é determinado e mostra grande habilidade em situações de combate, não hesitando em arriscar-se para proteger os amigos. Seu relacionamento com Max adiciona uma camada emocional importante à sua trajetória, mostrando sua capacidade de crescer e amadurecer.

Temporada 1: Inicialmente desconfiado de Eleven, mas depois reconhece sua importância. Ajuda na luta contra o Demogorgon.

Temporada 2: Cresce emocionalmente ao se aproximar de Max, vivendo o início de um romance.

Temporada 3: Vive entre a amizade com os garotos e o namoro com Max. Demonstra maturidade em lidar com conflitos adolescentes.

Temporada 4: Sofre com o desejo de se encaixar socialmente, entrando para o time de basquete. Essa escolha gera distanciamento de seus amigos. No entanto, quando Vecna ameaça Max, Lucas prova seu amor e coragem, enfrentando Jason e lutando pela vida dela até o último momento.`,
        age: 16,
        firstEp: "S01E01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Dustin Henderson",
        image: "https://i.pinimg.com/1200x/31/12/fd/3112fd835dba2da3ecfdec9e501d2f1e.jpg",
        description: `Carismático e engraçado, Dustin é o coração leve do grupo. Ele se destaca por sua inteligência, curiosidade científica e capacidade de encontrar soluções criativas para os problemas. Apesar de ser muitas vezes alvo de piadas por causa de sua condição médica (displasia cleidocraniana, que afeta seus dentes), ele nunca perde o bom humor. Sua amizade improvável com Steve Harrington é uma das mais queridas pelos fãs, mostrando como Dustin é capaz de criar laços fortes com pessoas fora de seu círculo inicial.

Temporada 1: É o mais divertido e otimista do grupo. Ajuda nas buscas por Will e se aproxima de Eleven. Sua curiosidade e inteligência o destacam.

Temporada 2: Encontra Dart, uma pequena criatura que ele acredita ser inofensiva, mas que depois revela-se parte da ameaça do Demogorgon. Essa trama mostra sua ingenuidade e coragem. Também desenvolve amizade com Steve Harrington, criando uma das duplas mais amadas da série.

Temporada 3: Retorna do acampamento de ciências com novidades, incluindo a revelação de sua namorada Suzie. Ajuda a decifrar a mensagem russa junto de Steve, Robin e Erica. É peça-chave para expor o plano dos russos em Hawkins.

Temporada 4: Continua sendo o cérebro estratégico do grupo. Se aproxima de Eddie Munson e o ajuda a enfrentar as ameaças de Vecna. Demonstra lealdade profunda a seus amigos e grande bravura.`,
        age: 15,
        firstEp: "S01E01",
        alive: true
      }
    }),
    

    prisma.character.create({
      data: {
        name: "Joyce Byers",
        image: "https://i.pinimg.com/736x/7b/f2/bd/7bf2bd207fa1866867c68149a807efe5.jpg",
        description: `Joyce é o coração materno de Stranger Things. Desde o desaparecimento de Will, sua coragem e intuição se tornam forças que desafiam o impossível. Determinada e emocional, ela é a primeira a perceber a presença do Mundo Invertido e nunca hesita em proteger seus filhos, mesmo quando todos duvidam dela. Ao longo das temporadas, Joyce se transforma de uma mãe desesperada em uma mulher resiliente e inteligente, enfrentando perigos sobrenaturais e até conspirações governamentais. Na quinta temporada, continua sendo o elo emocional que une o grupo, guiada por seu instinto inabalável de proteger quem ama.`,
        age: 46,
        firstEp: "S01EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Jim Hopper",
        image: "https://i.pinimg.com/736x/ff/33/cf/ff33cf7162ad72628547047e837edb8d.jpg",
        description: "Hopper é o chefe de polícia de Hawkins e um dos pilares emocionais da trama. Marcado pela perda de sua filha, ele encontra em Eleven uma nova razão para viver, assumindo o papel de pai protetor. Seu arco mistura ação, dor e redenção. Após ser dado como morto no final da terceira temporada, reaparece preso na Rússia, sobrevivendo contra todas as probabilidades. Na quinta temporada, Hopper se consolida como o símbolo da força e do sacrifício, disposto a enfrentar qualquer ameaça para salvar sua família escolhida.",
        age: 48,
        firstEp: "S01EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Martin Brenner",
        image: "https://i.pinimg.com/736x/68/5d/b9/685db99b4154e6268df2c87c028d3208.jpg",
        description: "Dr. Martin Brenner é o cientista responsável pelos experimentos do Laboratório de Hawkins e pela criação de Eleven. Frio, manipulador e obcecado pelo controle, Brenner representa o lado sombrio da ciência sem ética. Apesar de sua crueldade, há momentos que revelam um afeto distorcido por Eleven, como se fosse um pai que jamais aprendeu a amar de forma saudável. Ele sobreviveu a diversos ataques, mas encontra seu fim na quarta temporada, tentando salvar Eleven durante a invasão militar ao deserto. Sua morte simboliza o fim de uma era de manipulação, mas também levanta dilemas morais sobre suas verdadeiras intenções.",
        age: 65,
        firstEp: "S01EP01",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Alexei",
        image: "https://hips.hearstapps.com/hmg-prod/images/alexei-smirnoff-stranger-things-3-1562700391.png?crop=0.998xw:1.00xh;0.00160xw,0&resize=1200:*",
        description: `Alexei é o cientista russo apresentado na terceira temporada. Sua timidez e ingenuidade conquistaram o público rapidamente, especialmente por sua afeição por doces e sua amizade improvável com Murray. Mesmo com pouco tempo de tela, Alexei se tornou um símbolo da inocência perdida no conflito entre potências. Sua morte nas mãos de um assassino russo é uma das cenas mais tristes e inesperadas da série, marcando o fim de um personagem que representava esperança e humanidade em meio ao caos.`,
        age: 35,
        firstEp: "S03EP03",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Argyle",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KKtk5qm7NBZMiBpe0MokQlQh6gHQNHoJLQ&s",
        description: "Melhor amigo de Jonathan na Califórnia, entregador de pizza descontraído e leal.",
        age: 18,
        firstEp: "S04EP01",
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
        description: `Billy é o meio-irmão de Max e um dos personagens mais complexos da série. Inicialmente apresentado como o típico vilão arrogante e agressivo, ele revela ao longo das temporadas um passado marcado por abuso e dor. Sob a influência do Devorador de Mentes, Billy se torna o principal antagonista da terceira temporada, mas no momento final, demonstra humanidade ao se sacrificar para salvar Max e os demais. Sua morte é um dos momentos mais poderosos da série, transformando um personagem odiado em um mártir trágico.`,
        age: 18,
        firstEp: "S02EP01",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Bob Newby",
        image: "https://imgix.bustle.com/uploads/image/2017/10/23/1d2aeb32-d8a0-4635-8a6b-ac03d509649f-bob-stranger-things.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg",
        description: `Bob foi o namorado gentil e otimista de Joyce Byers na segunda temporada. Representava o lado mais puro e humano da série — um homem simples que apenas desejava uma vida tranquila com a mulher que amava. Mesmo sem entender completamente os horrores de Hawkins, Bob demonstrou coragem até o fim, sacrificando-se para salvar Joyce, Will e Hopper do laboratório. Sua morte é uma das mais emocionantes de Stranger Things, lembrando que heróis também podem ser pessoas comuns.`,
        age: 43,
        firstEp: "S02EP02",
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
        description: `Erica é a irmã mais nova de Lucas e uma das personagens mais carismáticas da série. Com sua inteligência afiada e humor sarcástico, rapidamente se destaca e ganha espaço entre os protagonistas. Mesmo sendo mais jovem, demonstra coragem e curiosidade incomuns, tornando-se parte essencial das investigações a partir da terceira temporada. Erica representa o espírito cético e ousado da nova geração. Na quinta temporada, continua provando que a bravura não tem idade.`,
        age: 13,
        firstEp: "S02EP02",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Fred Benson",
        image: "https://i.pinimg.com/736x/d0/df/e5/d0dfe5d1e0edd21d02503ebb9ce12df1.jpg",
        description: "Colega jornalista de Nancy Wheeler, segunda vítima de Vecna.",
        age: 17,
        firstEp: "S04EP01",
        alive: false
      }
    }),

    prisma.character.create({
      data: {
        name: "Grigori",
        image: "https://i.pinimg.com/736x/f9/a4/33/f9a4334e3e01ada60eca21af84311feb.jpg",
        description: "Assassino e soldado russo, principal antagonista humano da 3ª temporada.",
        age: 40,
        firstEp: "S03EP02",
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
        description: `Jonathan é o irmão mais velho de Will e uma das figuras mais sensíveis da série. Fotógrafo introspectivo, carrega o peso das responsabilidades familiares após a ausência do pai. Sua coragem silenciosa e empatia o tornam fundamental nas investigações sobre o Mundo Invertido. O relacionamento com Nancy o humaniza ainda mais, mostrando um amor construído na adversidade. Na quinta temporada, Jonathan enfrenta novos desafios pessoais enquanto tenta proteger aqueles que ama.`,
        age: 21,
        firstEp: "S01EP01",
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
        description: `Karen é a mãe de Mike, Nancy e Holly Wheeler. Representa a típica dona de casa americana dos anos 80, mas com um lado sensível e protetor que cresce conforme os perigos se aproximam. Embora não entenda completamente o que acontece em Hawkins, Karen mantém a família unida e é uma figura de estabilidade em meio ao caos. Nas temporadas mais recentes, demonstra desejo de se libertar das convenções e encontrar mais propósito, simbolizando o amadurecimento das mães da série.`,
        age: 42,
        firstEp: "S01EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Keith",
        image: "https://i.pinimg.com/1200x/18/b8/9b/18b89b9318c8eaac629c769a4933ae60.jpg",
        description: "fazer",
        age: 30,
        firstEp: "S0EP0",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Larry Kline",
        image: "https://i.pinimg.com/1200x/42/8a/31/428a3164de422eb91980349073b3a475.jpg",
        description: "Prefeito corrupto de Hawkins na 3ª temporada, envolvido com os russos.",
        age: 50,
        firstEp: "S03EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Lonnie Byers",
        image: "https://i.pinimg.com/736x/1f/c0/75/1fc075be582235db7f5f828b025f4087.jpg",
        description: "Ex-marido abusivo de Joyce, pai biológico de Jonathan e Will.",
        age: 48,
        firstEp: "S01EP03",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Murray Bauman",
        image: "https://i.pinimg.com/736x/67/7d/06/677d063527362ab1a8527fc3e60cd13c.jpg",
        description: `Murray é o excêntrico ex-jornalista que se torna investigador e teórico da conspiração. Apesar de seu jeito paranoico, suas hipóteses acabam se mostrando verdadeiras, tornando-o peça-chave na luta contra o governo e o Mundo Invertido. Com humor ácido e perspicácia, ajuda Hopper, Joyce e os outros em diversas missões, inclusive na Rússia. Na quinta temporada, Murray continua sendo o cérebro cínico e imprevisível do grupo, misturando sarcasmo e coragem.`,
        age: 49,
        firstEp: "S02EP06",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Nancy Wheeler",
        image: "https://i.pinimg.com/736x/ee/8a/dc/ee8adc9a51ac765a2830431387cbe2ce.jpg",
        description: `Nancy é a irmã de Mike e uma das personagens mais determinadas da série. Começa como uma adolescente comum, mas após a morte de sua amiga Barbara, torna-se uma investigadora destemida, comprometida em revelar a verdade sobre o que acontece em Hawkins. Sua relação com Jonathan e Steve é marcada por dilemas emocionais, mas sua principal motivação sempre foi a justiça. Na quinta temporada, Nancy mostra-se mais madura e estrategista, desempenhando papel essencial na luta contra o mal.`,
        age: 20,
        firstEp: "S01EP01",
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
        description: `Robin é apresentada como colega de trabalho de Steve no Scoops Ahoy. Inteligente, sarcástica e autêntica, rapidamente conquista o público com sua personalidade única. Sua revelação como lésbica trouxe representatividade à série, explorando temas de aceitação e amizade verdadeira. Ao longo da trama, Robin mostra coragem e vulnerabilidade, destacando-se por seu raciocínio rápido e lealdade inabalável. Na quinta temporada, continua sendo um pilar emocional e intelectual do grupo.`,
        age: 20,
        firstEp: "S03EP01",
        alive: true
      }
    }),

    prisma.character.create({
      data: {
        name: "Sam Owens",
        image: "https://i.pinimg.com/1200x/63/35/bb/6335bb2882c83c0c1160be990c1a97b5.jpg",
        description: `Dr. Owens substitui Brenner como diretor do Laboratório de Hawkins e se mostra uma figura mais ética e empática. Diferente de seu antecessor, tenta equilibrar a ciência com a moralidade e torna-se um aliado importante para Hopper e Eleven. Seu conhecimento técnico e diplomacia o colocam como mediador entre o governo e os jovens heróis. Na quinta temporada, Owens continua envolvido nas tentativas de conter o avanço do Mundo Invertido, lutando para proteger Hawkins das consequências catastróficas das falhas científicas do passado.`,
        age: 55,
        firstEp: "S02EP01",
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
        description: `Steve começou como o típico garoto popular, mas sua evolução é uma das mais marcantes da série. De namorado arrogante, torna-se um verdadeiro herói, protetor dos mais jovens e figura fraterna para Dustin e os demais. Sua coragem e altruísmo transformaram-no em um dos personagens mais amados de Stranger Things. Na quinta temporada, Steve mantém seu papel de protetor do grupo, mostrando maturidade, empatia e bravura em meio ao caos crescente de Hawkins.`,
        age: 21,
        firstEp: "S01EP01",
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
