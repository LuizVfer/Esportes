let dados = [
    { 
        titulo: "Futebol", 
        descricao: "O esporte mais popular do mundo, com o objetivo de marcar gols colocando a bola na rede adversária. É jogado por duas equipes de 11 jogadores cada.",
        tags:"Coletivo, Bola, Jogo de campo, Popula",
    },
    { 
        titulo: "Basquetebol", 
        descricao: "Duas equipes de cinco jogadores disputam a cesta, lançando a bola em direção ao aro. O objetivo é marcar o maior número de pontos." ,
        tags:"Coletivo, Bola, Jogo de quadra, Pontuação",
    },
    { 
        titulo: "Tênis", 
        descricao: "Esporte jogado entre dois jogadores (ou duplas) em que o objetivo é rebater a bola sobre a rede de modo que, o oponente não consiga devolvê-la corretamente.", 
        tags:"Individual, Raquete, Jogo de quadra, Estilo livre",
    },
    { 
        titulo: "Vôlei", 
        descricao: "Duas equipes de seis jogadores se enfrentam em uma quadra dividida por uma rede. O objetivo é fazer a bola tocar o chão do lado adversário." ,
        tags:"Coletivo, Bola, Jogo de quadra, Rede",
    },
    { 
        titulo: "Natação", 
        descricao: "Esporte individual em que o objetivo é nadar a distância estipulada no menor tempo possível. Existem diferentes estilos, como crawl, costas, peito e borboleta.",
        tags:"Individual, Aquático, Estilo livre, Velocidade",
    },
    { 
        titulo: "Atletismo", 
        descricao: "Conjunto de esportes que envolvem corrida, salto e arremesso. É uma das modalidades mais tradicionais dos Jogos Olímpicos." ,
        tags:"Individual, Campo, Corrida, Salto",
    },
    { 
        titulo: "Ciclismo", 
        descricao: "Esporte que envolve o uso de bicicletas, onde os atletas competem em diferentes modalidades, como estrada, pista e mountain bike.",
        tags:"Individual, Bicicleta, Competitivo, Estrada", 
    },
    { 
        titulo: "Boxe", 
        descricao: "Esporte de combate em que dois atletas se enfrentam utilizando os punhos. O objetivo é marcar pontos ou nocautear o adversário.",
        tags:"Individual, Combate, Luta, Pontuação", 
    },
    { 
        titulo: "Rugby", 
        descricao: "Esporte coletivo em que duas equipes tentam marcar pontos carregando ou chutando uma bola oval até a área de gol do adversário.", 
        tags:"Coletivo, Bola, Jogo de campo, Contato",
    },
    { 
        titulo: "Golfe", 
        descricao: "Esporte em que os jogadores utilizam tacos para acertar uma pequena bola em buracos distribuídos em um campo, com o menor número de tacadas possível." ,
        tags:"Individual, Taco, Campo, Precisão",
    },
    { 
        titulo: "Handebol", 
        descricao: "Esporte coletivo em que duas equipes de sete jogadores tentam marcar gols arremessando a bola com as mãos no gol adversário." ,
        tags:"Coletivo, Bola, Jogo de quadra, Arremesso",
    },
    { 
        titulo: "Badminton", 
        descricao: "Esporte de raquete jogado entre dois ou quatro jogadores, que consiste em rebater uma peteca sobre uma rede para o lado adversário.", 
        tags:"Individual, Raquete, Jogo de quadra, Peteca",
    },
    { 
        titulo: "Esgrima", 
        descricao: "Esporte de combate em que dois competidores se enfrentam usando espadas. O objetivo é tocar o adversário com a ponta da arma, marcando pontos." ,
        tags:"Individual, Combate, Esporte olímpico, Arma",
    },
    { 
        titulo: "Judô", 
        descricao: "Arte marcial de origem japonesa, em que dois competidores buscam derrubar ou imobilizar o adversário, utilizando técnicas de alavancas e projeções.", 
        tags:"Individual, Combate, Arte Marcial, Projeção",
    },
    { 
        titulo: "Surfe", 
        descricao: "Esporte aquático em que o praticante utiliza uma prancha para deslizar sobre as ondas. O objetivo é realizar manobras e se equilibrar sobre a água.", 
        tags:"Individual, Aquático, Prancha, Manobras",
    },
    { 
        titulo: "Tiro com Arco", 
        descricao: "Esporte em que os atletas usam um arco para lançar flechas em direção a um alvo, buscando precisão e pontuação máxima." ,
        tags:"Individual, Precisão, Arco e Flecha, Pontuação",
    },
    {
        titulo: "Beisebol", 
        descricao: "Esporte coletivo em que duas equipes se revezam entre ataque e defesa. O objetivo é marcar corridas batendo a bola e correndo pelas bases.", 
        tags:"Coletivo, Bola, Jogo de campo, Revezamento",
    },
    { 
        titulo: "Hóquei no Gelo", 
        descricao: "Esporte jogado em uma pista de gelo, onde duas equipes de seis jogadores cada tentam marcar gols empurrando um disco de borracha no gol adversário.", 
        tags:"Coletivo, Gelo, Disco, Jogo de equipe",
    },
    { 
        titulo: "Canoagem", 
        descricao: "Esporte aquático em que os atletas utilizam canoas ou caiaques para remar em competições de velocidade ou manobras.", 
        tags:"Individual, Aquático, Remo, Canoas",
    },
    { 
        titulo: "Ginástica Artística", 
        descricao: "Esporte que combina força, flexibilidade e graça, onde os atletas realizam rotinas em aparelhos como solo, barras e argolas.", 
        tags:"Individual, Aparelhos, Flexibilidade, Força",
    },
    { 
        titulo: "Escalada", 
        descricao: "Esporte que envolve subir ou escalar paredes naturais ou artificiais, testando a resistência física e mental dos praticantes.",
        tags:"Individual, Montanhismo, Resistência, Escalada",
    },
    { 
        titulo: "Skate", 
        descricao: "Esporte que consiste em realizar manobras e percorrer percursos utilizando um skate. Pode ser praticado em ruas, rampas e pistas.",
        tags:"Individual, Manobras, Skateboard, Percurso",
    },
    { 
        titulo: "Automobilismo", 
        descricao: "Esporte motorizado em que pilotos competem em corridas de carros em circuitos fechados ou pistas, buscando a melhor posição e tempo.", 
        tags:"Individual, Motorizado, Corrida, Circuito",
    },
    { 
        titulo: "Tae Kwon Do", 
        descricao: "Arte marcial coreana que combina técnicas de chutes e socos. É também um esporte olímpico de combate.",
        tags:"Individual, Combate, Arte Marcial, Chutes", 
    },
    { 
        titulo: "Cavalos de Salto", 
        descricao: "Esporte equestre onde cavaleiros conduzem seus cavalos para saltar sobre obstáculos em um percurso no menor tempo possível, sem cometer faltas." ,
        tags:"Individual, Equestre, Obstáculos, Salto",
    },
    { 
        titulo: "Pentatlo Moderno", 
        descricao: "Esporte olímpico que combina cinco disciplinas: esgrima, natação, hipismo, tiro e corrida. O vencedor é aquele com melhor desempenho geral.",
        tags:"Individual, Multiesportivo, Esgrima, Natação, Hipismo, Tiro, Corrida", 
    },
    { 
        titulo: "Triatlo", 
        descricao: "Esporte que combina três modalidades: natação, ciclismo e corrida. Os atletas competem consecutivamente nas três provas." ,
        tags:"Individual, Multiesportivo, Natação, Ciclismo, Corrida",
    },
    { 
        titulo: "Cabo de Guerra", 
        descricao: "Esporte em que duas equipes competem para puxar uma corda em direções opostas, tentando arrastar a equipe adversária para o seu lado.",
        tags:"Coletivo, Força, Revezamento, Competição",
    },
    { 
        titulo: "Críquete", 
        descricao: "Esporte de bastão e bola jogado entre duas equipes. O objetivo é marcar corridas batendo a bola e correndo entre os wickets.", 
        tags:"Coletivo, Bastão, Bola, Corrida",
    },
    { 
        titulo: "Polo Aquático", 
        descricao: "Esporte coletivo jogado em uma piscina, onde duas equipes tentam marcar gols jogando a bola na meta adversária.", 
        tags:"Coletivo, Aquático, Bola, Piscina",
    },
    { 
        titulo: "Esqui Alpino", 
        descricao: "Esporte de inverno em que os atletas descem encostas cobertas de neve usando esquis, tentando completar o percurso no menor tempo possível.", 
        tags:"Individual, Inverno, Neve, Esqui",
    },
    { 
        titulo: "Snowboard", 
        descricao: "Esporte de inverno em que o praticante desliza sobre a neve em uma prancha, realizando manobras e descendo encostas.", 
        tags:"Individual, Inverno, Neve, Prancha, Manobras",
    },
    { 
        titulo: "Patinação Artística", 
        descricao: "Esporte que combina técnica e criatividade, onde os atletas executam movimentos coreografados em patins sobre o gelo.", 
        tags:"Individual, Inverno, Gelo, Coreografia",
    },
    { 
        titulo: "Sumô", 
        descricao: "Esporte tradicional japonês em que dois lutadores tentam empurrar o adversário para fora de um círculo ou fazê-lo tocar o chão com qualquer parte do corpo além dos pés.", 
        tags:"Individual, Combate, Japão, Luta",
    },
    { 
        titulo: "Arco e Flecha", 
        descricao: "Esporte que envolve o uso de arco e flechas para acertar alvos a diferentes distâncias, testando a precisão e concentração dos competidores.", 
        tags:"Individual, Precisão, Arco, Flechas",
    },
    { 
        titulo: "Levantamento de Peso", 
        descricao: "Esporte de força em que os atletas tentam levantar o maior peso possível em diferentes modalidades, como o arranco e o arremesso.", 
        tags:"Individual, Força, Levantamento, Pesos",
    },
    { 
        titulo: "Karate", 
        descricao: "Arte marcial de origem japonesa que envolve técnicas de golpes com as mãos e pés. É também um esporte olímpico de combate.",
        tags:"Individual, Combate, Arte Marcial, Japão", 
    },
    { 
        titulo: "Esportes Eletrônicos (eSports)", 
        descricao: "Competições de videogames onde jogadores ou equipes competem em jogos como estratégia, luta e tiro, em nível profissional." ,
        tags:"Coletivo, Videogames, Competição, Estratégia",
    },
    { 
        titulo: "Kickboxing", 
        descricao: "Esporte de combate que combina técnicas de boxe com chutes. É praticado tanto como defesa pessoal quanto em competições.", 
        tags:"Individual, Combate, Boxe, Chutes",
    },
    { 
        titulo: "Corrida de Aventura", 
        descricao: "Esporte multidisciplinar que envolve corrida, ciclismo, canoagem e navegação, geralmente realizado em terrenos naturais desafiadores." ,
        tags:"Multiesportivo, Aventura, Corrida, Ciclismo, Canoagem",
    },
    { 
        titulo: "Arremesso de Dardo", 
        descricao: "Esporte de atletismo em que o atleta lança um dardo o mais longe possível. A técnica de lançamento é crucial para obter bons resultados.",
        tags:"Individual, Atletismo, Lançamento, Dardo",
    },
    { 
        titulo: "Pentatlo Militar", 
        descricao: "Esporte que combina cinco disciplinas militares: tiro, natação, corrida, lançamento de granada e obstáculos. Testa habilidades físicas e técnicas dos competidores.", 
        tags:"Multiesportivo, Militar, Tiro, Natação, Corrida, Granada, Obstáculos",
    },
    { 
        titulo: "Caminhada Atlética", 
        descricao: "Modalidade de atletismo em que os atletas devem caminhar rapidamente sem correr, mantendo sempre um pé em contato com o solo.",
        tags:"Individual, Atletismo, Caminhada, Velocidade",
    },
    { 
        titulo: "Biatlo", 
        descricao: "Esporte de inverno que combina esqui cross-country e tiro ao alvo. Os competidores alternam entre esquiar e disparar em alvos ao longo do percurso.",
        tags:"Multiesportivo, Inverno, Esqui, Tiro", 
    },
    { 
        titulo: "Polo", 
        descricao: "Esporte coletivo em que os jogadores montados a cavalo tentam marcar gols com um taco, jogando uma bola em direção ao gol adversário.", 
        tags:"Coletivo, Equestre, Cavalo, Taco",
    },
    { 
        titulo: "Esqui Nórdico", 
        descricao: "Esporte de inverno que inclui várias modalidades, como esqui cross-country e salto com esqui, desafiando a resistência e habilidade dos atletas.", 
        tags:"Multiesportivo, Inverno, Esqui, Cross-Country, Salto",
    },
    { 
        titulo: "Lacrosse", 
        descricao: "Esporte coletivo em que os jogadores usam um bastão com rede na ponta para lançar e capturar a bola, com o objetivo de marcar gols no time adversário." ,
        tags:"Coletivo, Bastão, Bola, Gol",
    },
    { 
        titulo: "Curling", 
        descricao: "Esporte de inverno em que os jogadores deslizam pedras de granito sobre uma superfície de gelo, tentando posicioná-las o mais próximo possível de um alvo.",
        tags:"Coletivo, Inverno, Gelo, Pedra, Alvo", 
    },
    { 
        titulo: "Softbol", 
        descricao: "Variante do beisebol, jogado com uma bola maior e lançada por baixo. É popular em várias partes do mundo, especialmente entre mulheres.", 
        tags:"Coletivo, Bola, Jogo de campo, Variante do Beisebol",
    },
    { 
        titulo: "Karatê Kyokushin", 
        descricao: "Uma forma de karatê conhecida por seu estilo de combate de contato total, onde os praticantes enfrentam-se em lutas intensas, sem proteção.",
        tags:"Individual, Combate, Arte Marcial, Contato Total",
    },
    { 
        titulo: "Paragliding", 
        descricao: "Esporte de voo em que os praticantes usam uma asa parapente para voar livremente pelo céu, aproveitando as correntes de ar.", 
        tags:"Individual, Voo, Asa, Correntes de Ar",
    },
    { 
        titulo: "Paddleboarding", 
        descricao: "Esporte aquático em que o praticante se equilibra em uma prancha longa e usa um remo para se mover sobre a água.", 
        tags:"Individual, Aquático, Prancha, Remo",
    },
    { 
        titulo: "Luta Greco-Romana", 
        descricao: "Modalidade de luta olímpica onde os competidores não podem usar as pernas para agarrar ou derrubar o adversário, focando em técnicas de corpo a corpo.",
        tags:"Individual, Luta, Olímpica, Corpo a Corpo", 
    },
    { 
        titulo: "Polo em Campo", 
        descricao: "Esporte coletivo jogado em um campo grande, onde dois times montados a cavalo usam tacos para marcar gols em um grande alvo.",
        tags:"Coletivo, Equestre, Campo, Taco", 
    },
    { 
        titulo: "Trekking", 
        descricao: "Atividade ao ar livre que envolve caminhadas em trilhas e terrenos variados, muitas vezes em regiões montanhosas ou naturais.", 
        tags:"Individual, Caminhada, Trilha, Natureza",
    },
    { 
        titulo: "Hóquei sobre Grama", 
        descricao: "Esporte coletivo jogado em um campo de grama, onde duas equipes tentam marcar gols utilizando um stick e uma pequena bola.",
        tags:"Coletivo, Campo, Stick, Bola",
    },
    { 
        titulo: "Skateboarding Vertical", 
        descricao: "Modalidade do skate onde os praticantes realizam manobras em rampas verticais ou half-pipes, frequentemente usadas em competições de estilo livre.", 
        tags:"Individual, Skate, Rampas, Manobras",
    },
    { 
        titulo: "Jiu-Jitsu Brasileiro", 
        descricao: "Arte marcial e esporte de combate focado em técnicas de submissão e controle no chão, com o objetivo de forçar o adversário a se render.", 
        tags:"Individual, Combate, Arte Marcial, Submissão",
    },
    { 
        titulo: "Bandy", 
        descricao: "Esporte de inverno jogado em um campo de gelo com uma bola pequena e tacos, semelhante ao hóquei no gelo, mas com regras e equipamentos diferentes.", 
        tags:"Coletivo, Inverno, Gelo, Bola, Taco",
    },
    { 
        titulo: "Ultimate Frisbee", 
        descricao: "Esporte coletivo jogado com um disco voador (frisbee), onde duas equipes tentam marcar pontos lançando o disco na zona de gol adversária.", 
        tags:"Coletivo, Disco, Competição, Zona de Gol",
    },
    { 
        titulo: "Vôlei de Praia", 
        descricao: "Variante do vôlei jogado na areia, geralmente em duplas. O objetivo é marcar pontos fazendo a bola tocar o chão na área adversária.",     
        tags:"Coletivo, Areia, Duplas, Vôlei",   
    },
    { 
        titulo: "Rugby de Sevens", 
        descricao: "Versão do rugby com equipes de sete jogadores, jogado em um campo de tamanho padrão. Os jogos são mais rápidos e dinâmicos do que o rugby tradicional.",
        tags:"Coletivo, Rugby, Sete Jogadores, Dinâmico",
    },
    { 
        titulo: "Kitesurf", 
        descricao: "Esporte aquático que combina surfe e parapente. O praticante usa um kite para ser puxado sobre a água enquanto realiza manobras em uma prancha.",
        tags:"Individual, Aquático, Surf, Parapente, Manobras",
    },
    { 
        titulo: "Esqui Freestyle", 
        descricao: "Modalidade do esqui que envolve a realização de manobras acrobáticas e saltos em diferentes tipos de obstáculos e terrenos.", 
        tags:"Individual, Inverno, Esqui, Acrobático, Saltos",
    },
    { 
        titulo: "Rodeio", 
        descricao: "Competição que inclui eventos como montaria em touros e cavalos, laço e provas de destreza com animais, típicas da cultura de rancho e fazenda.",
        tags:"Coletivo, Montaria, Animais, Cultura de Rancho",
    },
    { 
        titulo: "Futsal", 
        descricao: "Versão do futebol jogada em uma quadra menor e coberta, com equipes de cinco jogadores. O jogo é mais rápido e exige habilidades técnicas refinadas.", 
        tags:"Coletivo, Futebol, Quadra, Cinco Jogadores, Técnico",
    },
    { 
        titulo: "Ballet", 
        descricao: "Forma de dança clássica que combina técnicas de movimento preciso e expressivo, frequentemente realizada em apresentações teatrais e competições.",
        tags:"Individual, Dança, Clássico, Técnica, Expressivo",
    },
    { 
        titulo: "Jiu-Jitsu Japonês", 
        descricao: "Arte marcial tradicional que foca em técnicas de imobilização, alavancas e arremessos. É a base para várias artes marciais modernas.", 
        tags:"Individual, Arte Marcial, Imobilização, Alavancas, Tradicional",
    },
    { 
        titulo: "Hóquei em Campo", 
        descricao: "Esporte coletivo jogado em um campo de grama ou sintético, onde duas equipes tentam marcar gols usando sticks e uma bola.",
        tags:"Coletivo, Campo, Stick, Bola",
    },
    { 
        titulo: "Frescobol", 
        descricao: "Esporte recreativo jogado em uma praia ou parque, onde duas pessoas se revezam em bater uma bola de um lado para o outro usando raquetes.", 
        tags:"Recreativo, Areia, Raquete, Bola",
    },
    { 
        titulo: "Trampolim", 
        descricao: "Esporte de ginástica em que os atletas realizam saltos e manobras acrobáticas sobre um trampolim, sendo avaliados pela precisão e dificuldade das rotinas.",
        tags:"Individual, Ginástica, Saltos, Acrobático", 
    },
    { 
        titulo: "Rugby League", 
        descricao: "Versão do rugby com 13 jogadores por equipe e regras específicas, como o tackle e o sistema de posse de bola.", 
        tags:"Coletivo, Rugby, Treze Jogadores, Tackle",
    },
    { 
        titulo: "Ballet no Gelo", 
        descricao: "Forma de ballet realizado sobre o gelo, combinando a elegância da dança com a técnica da patinação artística.",
        tags:"Individual, Dança, Gelo, Patinação",
    },
    { 
        titulo: "Escalada Indoor", 
        descricao: "Escalada realizada em paredes artificiais projetadas para simular diferentes tipos de rochas e dificuldades, popular para treinamento e lazer.",
        tags:"Individual, Escalada, Indoor, Treinamento", 
    },
    { 
        titulo: "Peteca", 
        descricao: "Esporte tradicional brasileiro em que os jogadores utilizam uma peteca (um tipo de brinquedo com penas) para acertar a bola sobre a rede, semelhante ao vôlei.",   
        tags:"Coletivo, Brasil, Peteca, Rede",   
    },
    { 
        titulo: "Frescobol de Praia", 
        descricao: "Variante do frescobol jogada em ambientes praianos, onde duas pessoas usam raquetes para manter a bola no ar o maior tempo possível.",
        tags:"Recreativo, Areia, Raquete, Bola",
    },
    { 
        titulo: "Bobsleigh", 
        descricao: "Esporte de inverno em que equipes de dois ou quatro atletas deslizam em um trenó especializado por uma pista de gelo, buscando a melhor combinação de velocidade e controle.", 
        tags:"Coletivo, Inverno, Trenó, Velocidade",
    },
    { 
        titulo: "Luta Livre", 
        descricao: "Esporte de combate que permite uma ampla variedade de técnicas de ataque e defesa, sem restrições rígidas de regras como no wrestling tradicional.", 
        tags:"Individual, Combate, Técnicas Livres, Wrestling",
    },
    { 
        titulo: "Pentatlo Antigo", 
        descricao: "Esporte da Grécia Antiga que combinava cinco eventos: corrida, salto em distância, arremesso de disco, lançamento de dardo e luta.", 
        tags:"Multiesportivo, Antigo, Corrida, Salto, Arremesso, Luta",
    },
    { 
        titulo: "Paddle Tennis", 
        descricao: "Esporte de raquete jogado em uma quadra menor que o tênis, com uma bola semelhante à do tênis, mas com regras que permitem o uso das paredes." , 
        tags:"Coletivo, Raquete, Quadra Pequena, Bola",      
    },
    { 
        titulo: "Aikido", 
        descricao: "Arte marcial japonesa que se concentra em técnicas de defesa e neutralização do atacante, usando a energia do adversário contra ele.", 
        tags:"Individual, Arte Marcial, Defesa, Japão",
    },
    { 
        titulo: "Roller Derby", 
        descricao: "Esporte de contato jogado sobre patins, onde duas equipes de cinco jogadoras competem em uma pista oval, tentando marcar pontos e bloquear adversárias.", 
        tags:"Coletivo, Patins, Contato, Pista Oval",
    },
    { 
        titulo: "Nado Sincronizado", 
        descricao: "Modalidade de natação em que os atletas realizam coreografias sincronizadas e acrobáticas na água, combinando movimentos precisos e música.", 
        tags:"Individual, Natação, Coreografia, Sincronização",
    },
    { 
        titulo: "Hóquei Inline", 
        descricao: "Variante do hóquei no gelo jogada sobre patins inline em uma quadra, com regras adaptadas e equipes de cinco jogadores.", 
        tags:"Coletivo, Patins Inline, Quadra, Hóquei",
    },
    { 
        titulo: "Duathlo", 
        descricao: "Esporte que combina corrida e ciclismo em uma competição, geralmente começando com uma corrida, seguida de ciclismo e terminando com outra corrida.", 
        tags:"Individual, Corrida, Ciclismo, Multiesportivo",   
    },
    { 
        titulo: "Krav Maga", 
        descricao: "Sistema de defesa pessoal desenvolvido em Israel que combina técnicas de combate e autodefesa, focando na eficiência e neutralização rápida do atacante.", 
        tags:"Individual, Defesa Pessoal, Combate, Israel",
    },
    { 
        titulo: "Escalada em Gelo", 
        descricao: "Modalidade de escalada em que os praticantes utilizam equipamentos especializados para escalar paredes de gelo ou cascatas congeladas.",
        tags:"Individual, Escalada, Inverno, Gelo",
    },
    { 
        titulo: "Futebol Americano", 
        descricao: "Esporte de contato jogado entre duas equipes de 11 jogadores, onde o objetivo é avançar a bola até a zona de gol adversária para marcar pontos.", 
        tags:"Coletivo, Futebol, Contato, Zona de Gol",
    },
    { 
        titulo: "Zumba", 
        descricao: "Forma de exercício físico que combina dança e movimentos aeróbicos com música latina e global, visando melhorar o condicionamento físico e proporcionar diversão." ,
        tags:"Individual, Dança, Aeróbico, Música",
    },
    { 
        titulo: "Tenis de Mesa", 
        descricao: "Esporte de raquete jogado em uma mesa dividida por uma rede, onde os jogadores tentam marcar pontos fazendo a bola quicar no lado adversário da mesa ." ,        
        tags:"Individual, Raquete, Mesa, Bola",
    },
    { 
        titulo: "Paddleball", 
        descricao: "Esporte de raquete jogado em uma quadra pequena, onde um ou dois jogadores tentam bater uma bola contra uma parede ou sobre uma rede.",
        tags:"Individual, Raquete, Quadra Pequena, Bola",
    },
    { 
        titulo: "Luge", 
        descricao: "Esporte de inverno em que os atletas deslizam em um trenó pequeno e estreito por uma pista de gelo, competindo para obter o melhor tempo." ,
        tags:"Individual, Inverno, Trenó, Velocidade",
    },
    { 
        titulo: "Triathlon Indoor", 
        descricao: "Versão indoor do triathlon que combina exercícios de natação, ciclismo e corrida em um ambiente fechado, utilizando equipamentos de ginástica.", 
        tags:"Individual, Indoor, Multiesportivo, Natação, Ciclismo, Corrida",
    },
    { 
        titulo: "Tiro ao Alvo", 
        descricao: "Esporte em que os atletas usam armas de fogo ou arcos para acertar alvos estáticos a diferentes distâncias, visando precisão e controle.", 
        tags:"Individual, Arma, Precisão, Alvo",
    },
    { 
        titulo: "Tennis", 
        descricao: "Esporte de raquete jogado em uma quadra dividida por uma rede, onde os jogadores tentam marcar pontos batendo a bola sobre a rede e fazendo-a quicar na área adversária.", 
        tags:"Individual, Raquete, Quadra, Bola",
    },
    { 
        titulo: "Bungee Jumping", 
        descricao: "Esporte radical em que os participantes pulam de uma grande altura com uma corda elástica presa ao corpo, experimentando uma queda livre e um impulso de volta.", 
        tags:"Radical, Queda Livre, Altura, Corda",
    },
    { 
        titulo: "Orienteering", 
        descricao: "Esporte de navegação em que os participantes usam mapas e bússolas para encontrar pontos de controle em um terreno variado, desafiando a orientação e a resistência.", 
        tags:"Individual, Navegação, Mapa, Bússola",
    },
    { 
        titulo: "Tiro com Arco Tradicional", 
        descricao: "Modalidade de tiro com arco que utiliza arcos e flechas tradicionais, muitas vezes focando em técnicas e estilos históricos de arqueiria.", 
        tags:"Individual, Arco, Flechas, Tradicional",
    },
    { 
        titulo: "Aerial Silks", 
        descricao: "Esporte acrobático em que os atletas realizam movimentos e truques suspensos em tecidos de seda pendurados, combinando força, flexibilidade e graça.",
        tags:"Individual, Acrobático, Força, Flexibilidade", 
    },
    { 
        titulo: "Synchronized Swimming", 
        descricao: "Modalidade de natação em que os atletas executam rotinas coreografadas na água, sincronizando movimentos com música e outros nadadores.", 
        tags:"Individual, Natação, Coreografia, Sincronização",
    }
    
]
