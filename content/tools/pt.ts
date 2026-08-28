/**
 * Portuguese (Brazil) copy for /tools and /tools/<slug>.
 * Mirrors content/tools/en.ts key for key; the shape is enforced by
 * tests/unit/tools.spec.ts.
 */

import type { ToolsContent } from './en'

export const toolsPt: ToolsContent = {
  hub: {
    meta: {
      title: 'Ferramentas gratuitas online — Autofract',
      description: 'Três ferramentas gratuitas de navegador do estúdio Autofract: leitor de letras miúdas de contrato, agendador entre fusos e calculadoras de custos ocultos.',
    },
    kicker: 'Ferramentas',
    h1: 'Ferra­mentas pequenas, feitas direito.',
    lede: 'O estúdio constrói sistemas grandes para clientes. Estas são as coisas pequenas que construímos para nós mesmos — e depois damos de graça, porque custam quase nada para manter no ar.',
    intro: [
      'Toda ferramenta daqui começou como um incômodo interno: um contrato que ninguém tinha tempo de ler, uma reunião que sempre caía às 22:00 para alguém, um custo recorrente que nunca aparecia em nota nenhuma. Construímos a menor coisa capaz de responder à pergunta e ficamos com ela.',
      'Nenhuma delas pede cadastro. Nenhuma delas vende nada. São gratuitas, rodam no seu navegador ou nas nossas máquinas às nossas custas, e seguem a mesma doutrina das plataformas listadas abaixo: verifique antes de publicar, mostre a conta, nunca invente um fato que você não consegue apontar.',
    ],
    toolsHeading: 'Ferramentas gratuitas',
    toolsSub: 'Abra, use, feche a aba. Sem cadastro, sem período de teste, sem upsell.',
    productsHeading: 'Produtos',
    productsSub: 'Sistemas maiores que o estúdio projetou, construiu e continua operando.',
    faq: {
      h2: 'Perguntas que as pessoas fazem',
      items: [
        {
          q: 'Isso é gratuito mesmo?',
          a: 'É. Sem cadastro, sem período de teste, sem cartão, sem limite de uso, sem anúncios. Duas das três fazem todo o trabalho dentro do seu navegador, então servi-las não nos custa quase nada; a terceira roda nas nossas máquinas e pagamos por ela porque nos rende mais atenção do que um anúncio renderia.',
        },
        {
          q: 'Preciso me cadastrar?',
          a: 'Não. Não há nada para registrar e nada para instalar. Toda ferramenta já abre pronta para usar e, quando há algum estado a guardar, ele vive na URL — copie o link e o seu trabalho está salvo.',
        },
        {
          q: 'O que acontece com o que eu coloco ali?',
          a: 'Overlap e Cost Of nunca enviam os seus dados para lugar nenhum: o quadro e o comprovante ficam codificados na barra de endereço e são calculados pelo seu próprio navegador. O Redline precisa ler o seu documento em um servidor para analisá-lo, então trate-o como qualquer ferramenta online e não cole material que você não tem permissão de compartilhar.',
        },
        {
          q: 'Vocês me rastreiam?',
          a: 'Contamos visualizações de página com uma medição sem cookies, que preserva a privacidade, não guarda dado pessoal e não segue ninguém entre sites. É só isso — sem pixels de publicidade, sem gravação de sessão, sem perfis.',
        },
        {
          q: 'Posso usar no trabalho?',
          a: 'Pode, inclusive comercialmente. Times usam o agendador para dailies entre continentes e as calculadoras para defender um orçamento. O Redline é uma primeira leitura de contrato, não aconselhamento jurídico: trate o resultado como uma lista de conferência para o seu advogado, não como substituto dele.',
        },
        {
          q: 'Por que um estúdio dá ferramentas de graça?',
          a: 'Duas razões honestas. Elas são campo de provas: a verificação adversarial do Redline e os portões de dados em tempo de build das nossas plataformas maiores são a mesma doutrina em escalas diferentes. E elas apresentam o estúdio às pessoas melhor do que uma página de portfólio — dá para ver como construímos antes mesmo de falar com a gente.',
        },
        {
          q: 'Elas ainda vão existir no ano que vem?',
          a: 'Essa é a intenção. São estáticas ou quase estáticas por design, e é exatamente por isso que são baratas de manter vivas: não há banco de dados para migrar, assinatura para bancar nem runtime para ficar de babá. Se alguma ferramenta um dia sair do ar, a página dela vai dizer isso em vez de simplesmente sumir.',
        },
        {
          q: 'Posso sugerir uma ferramenta?',
          a: 'Por favor. As melhores ideias até agora vieram de alguém descrevendo uma planilha que refaz todo mês. Escreva para info@autofract.com e conte o que você continua fazendo na mão.',
        },
      ],
    },
    cta: {
      title: 'Precisa de algo assim na sua escala?',
      body: 'O mesmo estúdio constrói a versão grande: agentes, pipelines e plataformas que rodam sozinhos. Orçamento fechado depois de uma rodada de escopo de 48 horas.',
      button: 'Contratar o estúdio',
    },
  },

  tools: {
    redline: {
      name: 'Redline',
      tagline: 'As letras miúdas, decifradas.',
      category: 'Contratos',
      meta: {
        title: 'Analisador de contratos online — Redline',
        description: 'Analise um contrato, aluguel, empréstimo ou termos de uso e receba as letras miúdas em ordem, cada armadilha presa à cláusula exata e conferida.',
      },
      h1: 'Leia as letras miúdas, rápido.',
      lede: 'O Redline lê um contrato como um advogado desconfiado leria: procura as cláusulas que vão custar caro depois, cita cada uma palavra por palavra e explica em linguagem simples o que ela faz com você.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Você entrega um documento — texto colado, um PDF com camada de texto de verdade ou um link público — e recebe de volta uma lista de armadilhas em ordem de importância. Renovação automática da qual você não escapa a tempo. Mudanças unilaterais de preço ou de condições. Cláusulas de arbitragem e de foro que decidem onde você teria de brigar. Indenizações que jogam no seu colo a responsabilidade de outra pessoa. Descontos na caução, multas por atraso, prazos de aviso prévio medidos na unidade menos conveniente disponível.',
          'Cada alerta está ancorado na cláusula literal de onde veio, com os caracteres do próprio documento — não é paráfrase, não é reconstrução. Você vê a frase, o lugar dela no documento, por que ela importa e como seria uma versão normal daquela cláusula.',
          'O relatório também mostra a própria trilha de auditoria: quantos alertas candidatos foram propostos, quantos foram barrados porque a citação não foi encontrada no documento, quantos um segundo revisor refutou e quantos tiveram a severidade rebaixada em relação à primeira atribuída. Você fica sabendo o que a máquina errou, não só o que ela acertou.',
        ],
      },
      why: {
        h2: 'Por que as letras miúdas continuam ganhando',
        body: [
          'Ninguém lê os termos de uso, e todo mundo sabe que ninguém lê — que é justamente por isso que as cláusulas caras moram ali. Um contrato de assinatura é escrito por gente paga para proteger um dos lados, e você o encontra no pior momento possível: no fim de um processo seletivo, no dia da mudança, uma hora antes de um lançamento.',
          'Bater o olho não resolve, porque as cláusulas perigosas não parecem perigosas. São gramaticalmente entediantes, enterradas em um subitem numerado e remetidas a uma definição quatro páginas antes. O estrago é feito por "nos termos da Cláusula 12.3", não por letras maiúsculas.',
          'Um advogado é a resposta certa para um contrato sério, e o Redline nunca vai fingir o contrário. Mas você não manda para um advogado um SaaS de € 9 por mês, um plano de academia ou a visita a um apartamento que você precisa responder ainda hoje. Para esses, a alternativa realista à leitura por máquina é não ler nada.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'Ele divide o documento pela numeração do próprio documento',
            body: 'Antes de qualquer análise, o texto é segmentado pela estrutura que o documento já tem — 4.2, §7, Artigo 3, ¶12. Assim, todo alerta posterior aponta para um lugar real de uma seção real, que é o que torna as citações verificáveis.',
          },
          {
            h3: 'Uma primeira passada propõe candidatos a partir de uma taxonomia de armadilhas',
            body: 'O modelo não fica associando ideias soltas em torno de "linguagem arriscada". Ele trabalha em cima de uma taxonomia curada das armadilhas que de fato se repetem em contratos de consumo e empresariais, cada uma com severidade e probabilidade conhecidas, e propõe candidatos que se encaixem.',
          },
          {
            h3: 'Um portão de citação descarta tudo que não consegue provar',
            body: 'Esta etapa é determinística, não é modelo: um candidato sobrevive só se a citação dele existir no texto de origem. Os caracteres do próprio documento então substituem a versão da citação feita pelo modelo. Um alerta que não consegue apontar para uma frase do seu documento nunca chega até você.',
          },
          {
            h3: 'Um segundo revisor, independente, tenta refutar',
            body: 'O que sobrevive ao portão vai para uma passada nova, que lê o mesmo documento com a tarefa oposta: confirmar, dizer que está exagerado ou refutar de vez. Alertas não comprovados são derrubados e os exagerados perdem severidade — o relatório mostra as duas contagens.',
          },
          {
            h3: 'O que resta é ordenado pelo que custa a você',
            body: 'A ordem final combina a severidade do tipo de cláusula, a chance de aquela armadilha morder na prática e a confiança do verificador. Você lê de cima para baixo e para quando acabar o que está em jogo, não quando acabar a paciência.',
          },
        ],
      },
      useCases: {
        h2: 'Quando rodar',
        items: [
          {
            h3: 'Antes de um time adotar uma ferramenta SaaS nova',
            body: 'Alguém precisa ler os termos antes de cinquenta colegas colocarem dados da empresa ali dentro. Cole o contrato e você tem a janela de renovação automática, as cláusulas de dados e de responsabilidade e a linguagem de mudança unilateral em uma passada só, a tempo da decisão.',
          },
          {
            h3: 'Um contrato de aluguel que você precisa responder hoje',
            body: 'É no aluguel que se escondem prazos de aviso prévio, descontos na caução, obrigações de reparo e prorrogações automáticas. Ler uma lista de alertas antes da visita é bem melhor do que descobrir a cláusula na hora de sair.',
          },
          {
            h3: 'Contratos de freela e de prestação de serviço',
            body: 'Condições de pagamento, cessão de propriedade intelectual, não aliciamento, revisões ilimitadas, indenização: as cláusulas que decidem se um bom valor por hora é mesmo um bom negócio. Rode a minuta antes de fazer a contraproposta.',
          },
          {
            h3: 'Empréstimos, seguros e qualquer coisa com cronograma',
            body: 'Tarifas que só aparecem na quitação antecipada, exclusões que tiram silenciosamente o motivo pelo qual você comprou a apólice, definições que estreitam o evento coberto. São exatamente as cláusulas que recompensam uma leitura lenta e adversarial.',
          },
          {
            h3: 'Uma segunda opinião sobre um contrato que você já leu',
            body: 'Você passou os olhos e pareceu tudo certo. Dez minutos de leitura por máquina ou confirmam isso com uma trilha de auditoria, ou mostram o subitem que você leu às três da manhã.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'Isso é aconselhamento jurídico?',
            a: 'Não, e não pode ser. O Redline é uma primeira leitura rápida e estruturada que diz quais cláusulas merecem um humano. Para qualquer coisa com dinheiro ou responsabilidade de verdade em jogo, leve a lista de alertas a um advogado — a hora dele rende muito mais com ela na mão.',
          },
          {
            q: 'O que posso enviar?',
            a: 'Texto colado, um PDF que contenha camada de texto de verdade ou uma URL pública que a ferramenta consiga buscar. A foto escaneada de um contrato não tem texto para ler: passe por OCR antes ou cole o texto você mesmo.',
          },
          {
            q: 'Como sei que ele não está inventando cláusulas?',
            a: 'Porque um alerta sem citação literal é apagado antes de você ver. O portão de citação confere se o trecho citado ocorre mesmo no seu documento e depois o substitui pelos caracteres do próprio documento. Essa checagem é código comum, não um modelo decidindo se confia em si mesmo.',
          },
          {
            q: 'Ele encontra tudo?',
            a: 'Não, e foi feito para falhar no lado mais seguro. Duas passadas e um portão de citação significam que uma armadilha real pode, de vez em quando, ser derrubada por falta de prova; a alternativa — uma lista confiante de armadilhas que não estão no seu documento — é muito mais perigosa. Leia como uma lista ordenada de problemas prováveis, não como um certificado.',
          },
          {
            q: 'Que idiomas ele lê?',
            a: 'Documentos em inglês e em russo, incluindo as convenções de numeração de cada um — seções, marcas de parágrafo, artigos. As explicações voltam em linguagem simples, não no juridiquês que elas descrevem.',
          },
          {
            q: 'O que acontece com o meu documento?',
            a: 'Ele é processado para gerar o seu relatório, que fica atrás de um link próprio. Não publicamos, não vendemos nem revendemos o que você envia. Trate como qualquer ferramenta online: não cole material que você está contratualmente proibido de compartilhar.',
          },
          {
            q: 'Quanto tempo demora uma análise?',
            a: 'Normalmente uns dois minutos para um contrato comum, porque duas passadas independentes leem o documento inteiro em vez de bater o olho na primeira página. Contratos longos demoram mais; o progresso fica visível enquanto ele trabalha.',
          },
          {
            q: 'É gratuito?',
            a: 'A análise é gratuita e não pede cadastro. Ela nos custa dinheiro de verdade por documento, e isso é uma escolha deliberada: é a demonstração mais convincente de como o estúdio constrói que conseguimos colocar na internet.',
          },
        ],
      },
      cta: {
        title: 'Abrir o Redline',
        body: 'Cole aquele contrato que você vem adiando. Dois minutos, sem cadastro, e você vai saber quais três cláusulas importam.',
        button: 'Analisar um contrato',
      },
    },

    overlap: {
      name: 'Overlap',
      tagline: 'A hora que serve para todo mundo.',
      category: 'Agenda',
      meta: {
        title: 'Agendador de reuniões por fuso horário — Overlap',
        description: 'Compare o fuso horário de várias pessoas em um quadro só: veja quem está acordado e em expediente, ache as melhores janelas de uma hora e mande o link.',
      },
      h1: 'Chega de fazer conta de fuso horário.',
      lede: 'O Overlap deita o dia de várias pessoas na mesma linha para você ver — e não calcular — as horas em que a reunião pode realmente acontecer, e quem paga a conta quando nenhuma delas é boa.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Adicione pessoas por cidade, por fuso ou por um deslocamento simples. Cada uma vira uma faixa horizontal do próprio dia local: cinza enquanto dorme, âmbar enquanto está acordada mas fora do expediente, verde dentro do horário de trabalho. As colunas em que as faixas concordam são a sua reunião.',
          'O horário de trabalho pertence à pessoa, não ao quadro. Uma desenvolvedora que começa às 11:00 e um cliente que para às 16:00 mantêm cada um o seu dia real, e a resposta muda de acordo.',
          'Embaixo, as janelas de uma hora são ordenadas: quantas pessoas estão em expediente, quantas estão apenas acordadas e — quando ninguém consegue ter a vida fácil — exatamente quem precisa ceder. Qualquer janela vira um arquivo de calendário, e o quadro inteiro é um link que você pode mandar.',
        ],
      },
      why: {
        h2: 'Por que os métodos de sempre falham',
        body: [
          'Conta de cabeça funciona para duas cidades que você conhece. Ela desmonta em quatro que você não conhece, e quebra de vez nas duas semanas de cada primavera e outono em que um país já mexeu no relógio e o outro não.',
          'Um relógio mundial diz que horas são em algum lugar. Ele não diz se aquela pessoa está dormindo, jantando ou já com três horas de expediente — que era a única coisa que você precisava saber.',
          'Uma enquete de agendamento empurra a conta do fuso para todo mundo e ainda trava a marcação até a pessoa mais lenta responder. É exatamente o trabalho que você queria evitar, só que redistribuído.',
          'E a versão educada do problema é invisível: 08:00 em Berlim é uma hora comum para quem mora em Berlim e cruel para alguém em Los Angeles. Ninguém percebe até o convite já ter chegado.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'Os deslocamentos vêm do navegador, não de uma tabela',
            body: 'Toda conversão passa pela API Intl padrão e pelo próprio banco de fusos IANA do navegador. Não existe lista de deslocamentos nossa para envelhecer: se o navegador sabe que um país mudou as regras, o quadro também sabe.',
          },
          {
            h3: 'O horário de verão é resolvido por pessoa e por data',
            body: 'Escolha uma data no fim de março ou no fim de outubro e o próprio quadro muda de comprimento — 46 colunas de meia hora num dia que perde uma hora, 50 num dia que repete uma — porque cada linha é calculada a partir do instante real, e não de um deslocamento fixo.',
          },
          {
            h3: 'As colunas têm meia hora de largura',
            body: 'Fusos em :30 e :45 — Índia, Nepal, ilhas Chatham — se alinham honestamente em vez de serem arredondados para a hora mais próxima, que é justamente o arredondamento que produz reuniões às quais ninguém consegue comparecer.',
          },
          {
            h3: 'As janelas são pontuadas, não chutadas',
            body: 'Estar em expediente conta inteiro, estar acordado perto do expediente conta em parte, estar dormindo desqualifica a janela de vez. As candidatas ficam a pelo menos duas horas umas das outras, para que as sugestões sejam opções realmente diferentes, e cada pessoa é marcada como cedo, tarde ou fora de expediente.',
          },
          {
            h3: 'O link é o documento',
            body: 'Pessoas, nomes, horários de trabalho, data e âncora estão todos codificados na URL. Nada é enviado e não há cadastro: compartilhar um quadro é compartilhar um link, e quem abrir vê exatamente o que você viu.',
          },
        ],
      },
      useCases: {
        h2: 'Quando usar',
        items: [
          {
            h3: 'Uma daily entre três continentes',
            body: 'Descubra se existe alguma hora dentro do expediente de todo mundo — e, quando não existe, quem está pagando por ela, para que esse custo seja revezado entre as pessoas em vez de recair sempre sobre quem reclama menos.',
          },
          {
            h3: 'Entrevistas com candidatos no exterior',
            body: 'A hora que você propõe é lida como um sinal sobre a empresa. Defina a cidade da pessoa, olhe as colunas verdes e evite pedir que alguém tenha bom desempenho às 22:00 de uma noite de semana.',
          },
          {
            h3: 'Reuniões com clientes e agências',
            body: 'Você raramente conhece o expediente real de um cliente novo. Defina uma vez, mande o quadro e deixe a contraproposta sair da mesma imagem, em vez de trocar "3 da tarde no seu horário funciona?" por dois dias.',
          },
          {
            h3: 'Trabalhar em dois mercados ao mesmo tempo',
            body: 'Um contrato em Berlim, outro em Singapura. Coloque os dois no quadro com a sua própria linha no meio e veja, antes de prometer qualquer coisa, quantas horas de sobreposição real o seu dia tem de fato.',
          },
          {
            h3: 'Ligar para a família em outro país',
            body: 'Aqui a faixa cinza é a útil: ela diz quando uma ligação acordaria alguém, e a faixa âmbar diz quando a pessoa está acordada mas preferia estar jantando.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'Preciso de cadastro?',
            a: 'Não. Nada para se inscrever, nada para instalar. Abra a página, adicione as pessoas e mande o link — é esse o fluxo inteiro.',
          },
          {
            q: 'Para onde vão os meus dados?',
            a: 'Para lugar nenhum. As pessoas que você adiciona ficam codificadas na URL da barra de endereço e todo cálculo acontece no seu navegador. Times salvos usam o armazenamento do próprio navegador e ficam naquele aparelho.',
          },
          {
            q: 'Ele lida com horário de verão?',
            a: 'Sim, por pessoa e por data. Num dia de transição, o quadro literalmente tem outro comprimento, porque cada linha é derivada do instante real e não de um deslocamento guardado.',
          },
          {
            q: 'Minha cidade não está na lista.',
            a: 'Digite o fuso IANA — Europe/Berlin, Asia/Kolkata, America/Sao_Paulo — ou um deslocamento simples como UTC+3 ou +05:45. Os dois sempre funcionam, inclusive para lugares que o índice de cidades não cobre.',
          },
          {
            q: 'Quantas pessoas cabem em um quadro?',
            a: 'Até doze. Além disso as faixas deixam de ser legíveis e, na prática, uma reunião que atravessa mais de doze fusos precisa de uma gravação, não de um horário.',
          },
          {
            q: 'Cada pessoa pode ter um horário de trabalho diferente?',
            a: 'Pode, inclusive janelas que atravessam a meia-noite para turnos noturnos. Elas viajam no link junto com todo o resto.',
          },
          {
            q: 'E se não existir hora nenhuma em que todos estejam acordados?',
            a: 'Ele diz isso com todas as letras em vez de inventar uma coluna verde, e então oferece a hora menos ruim e nomeia quem estaria dormindo nela. Uma visão de rodízio justo ajuda a espalhar esse custo pelo time ao longo de várias semanas.',
          },
          {
            q: 'Funciona no celular?',
            a: 'Funciona. O quadro rola dentro do próprio quadro, as linhas continuam legíveis em telas estreitas, e o claro e o escuro seguem a configuração do seu sistema.',
          },
        ],
      },
      cta: {
        title: 'Abrir o Overlap',
        body: 'Adicione duas pessoas e aquela cidade que você sempre erra. Quinze segundos bastam para ver se existe uma hora boa.',
        button: 'Achar um horário',
      },
    },

    costof: {
      name: 'Cost Of',
      tagline: 'Quanto as coisas custam de verdade.',
      category: 'Calculadoras',
      meta: {
        title: 'Calculadoras de custos ocultos — Cost Of',
        description: 'Calculadoras gratuitas que transformam reuniões recorrentes, SaaS parado, troca de contexto, uma contratação ruim ou uma hora fora do ar em um número só.',
      },
      h1: 'Os custos que ninguém fatura.',
      lede: 'Uma reunião semanal, uma assinatura esquecida, uma interrupção, uma contratação ruim, uma hora de sistema fora do ar — o Cost Of transforma cada uma delas em um número único, num comprovante que você manda para quem decide.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Cada calculadora pede as poucas entradas que de fato mexem no número — quantas pessoas, em que senioridade, por quanto tempo, com que frequência — e devolve um único valor com a conta aberta embaixo. Sem painéis, sem cadastro, sem assistente de catorze etapas.',
          'Salário não precisa ser chute. Os presets cobrem quinze países e dez cargos na mediana do salário bruto em moeda local, e todos são editáveis: use o preset para começar a conversa e troque pelos seus números reais antes de levar a discussão a uma reunião.',
          'O resultado é um comprovante. Copie como link, salve como imagem ou abra um cartão de compartilhamento cuja prévia já traz o número — que costuma ser o que fecha o argumento numa conversa de chat sem ninguém precisar clicar.',
        ],
      },
      why: {
        h2: 'Por que esses custos ficam invisíveis',
        body: [
          'Ninguém emite nota por uma reunião recorrente. Ela não tem item de despesa, não tem dono e não tem data de renovação, então nunca aparece na revisão de orçamento que mata uma ferramenta de € 40 por mês — mesmo quando consome vinte vezes esse dinheiro todo ano.',
          'A moeda é o tempo, e tempo é denominado em salários, coisa que as pessoas evitam dizer em voz alta. Assim que uma hora de sala vira um valor, o argumento deixa de ser "essa reunião parece longa" e vira um número sobre o qual quem controla a agenda pode agir.',
          'A mesma cegueira cobre tudo que tem custo difuso: assinaturas que ninguém cancela porque cada uma é pequena, interrupções que custam muito mais do que o minuto que tomam, uma contratação que não dá certo e consome em silêncio um trimestre do ano de um time.',
          'Nenhum desses números precisa ser exato para ser útil. Uma ordem de grandeza, com as premissas visíveis e editáveis, já basta para tomar uma decisão que antes era tomada no feeling.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'Um modelo puro por calculadora',
            body: 'Cada calculadora é um modelo pequeno e autocontido, com entradas, fórmula e apresentação separadas. É por isso que dá para mostrar a conta inteira para você — não há nada por trás do número além do número.',
          },
          {
            h3: 'Presets de salário que você pode contrariar',
            body: 'Quinze países por dez cargos, na mediana do salário bruto em moeda local, com as fontes guardadas junto dos dados. São ponto de partida, não autoridade: todo campo é editável e a sua alteração viaja junto com o resultado.',
          },
          {
            h3: 'O link é o documento',
            body: 'As entradas ficam codificadas na URL. Nada é guardado em servidor, não há cadastro, e mandar o seu cenário para alguém é mandar um link que reabre exatamente os números que você usou.',
          },
          {
            h3: 'Um comprovante feito para ser encaminhado',
            body: 'A saída tem de propósito o formato de algo que dá para colar numa conversa: um número em destaque, as premissas embaixo dele e um cartão de compartilhamento cuja prévia mostra o valor antes de alguém abrir o link.',
          },
        ],
      },
      useCases: {
        h2: 'Quando usar',
        items: [
          {
            h3: 'Matar ou encurtar uma reunião recorrente',
            body: 'Oito pessoas, uma hora, toda semana. Coloque o valor anual ao lado da pauta e a conversa sobre se aquilo deveria ser um comunicado escrito fica bem curta.',
          },
          {
            h3: 'A faxina anual de SaaS',
            body: 'Toda assinatura parece acessível sozinha. Somadas, com licenças que ninguém usa, a pilha costuma produzir um número que paga aquilo que o time vem pedindo o ano inteiro.',
          },
          {
            h3: 'Defender tempo de foco',
            body: 'O custo de uma interrupção não é a duração da interrupção. Mostre quanto um dia fragmentado custa de verdade e "sem reuniões antes do meio-dia" deixa de soar como preferência pessoal.',
          },
          {
            h3: 'Sustentar a contratação de mais uma pessoa',
            body: 'Rode o custo da contratação errada contra o custo de a vaga continuar aberta. Os dois números são desconfortáveis, e ter os dois é o que torna a decisão defensável.',
          },
          {
            h3: 'Justificar trabalho de confiabilidade',
            body: 'Uma hora fora do ar tem preço em receita perdida e nas pessoas que param o que estão fazendo. É esse valor que transforma "precisamos arrumar o pipeline de deploy" em trabalho com verba.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'É gratuito?',
            a: 'É — todas as calculadoras, sem cadastro, sem limites, sem anúncios. Roda inteiramente no seu navegador, que é justamente o que permite continuar gratuito.',
          },
          {
            q: 'De onde vêm os números de salário?',
            a: 'De medianas publicadas de salário bruto por país e cargo, guardadas junto das fontes, em moeda local. São presets para uma primeira passada, e cada um deles pode ser substituído pelos seus números reais.',
          },
          {
            q: 'Minhas entradas são enviadas para algum lugar?',
            a: 'Não. Elas ficam codificadas na URL e são calculadas no seu navegador. As visitas são contadas com uma medição sem cookies que não registra dado pessoal nem as entradas.',
          },
          {
            q: 'Qual é a precisão disso?',
            a: 'A precisão das suas entradas — e ele mostra a conta para você julgar. O objetivo não é um valor exato até a quarta casa, e sim uma ordem de grandeza defensável com as premissas na mesa.',
          },
          {
            q: 'Posso compartilhar um resultado?',
            a: 'É para isso que ele foi feito. Copie o link, salve um PNG do comprovante ou cole o cartão de compartilhamento em um chat onde a prévia já mostra o número.',
          },
          {
            q: 'Posso usar a minha moeda?',
            a: 'Pode. Os presets por país definem um padrão razoável e você pode mudar tanto os valores quanto a moeda; o comprovante se formata de acordo.',
          },
          {
            q: 'Quais calculadoras existem?',
            a: 'A reunião recorrente, a pilha de SaaS, a troca de contexto, uma contratação ruim e a indisponibilidade — os custos que mais aparecem nas discussões que as pessoas realmente têm no trabalho.',
          },
          {
            q: 'Vocês vão adicionar mais?',
            a: 'Quando uma pergunta real continua se repetindo, sim. Se você refaz a mesma planilha todo trimestre, descreva para a gente e ela pode virar a próxima.',
          },
        ],
      },
      cta: {
        title: 'Abrir o Cost Of',
        body: 'Escolha aquela reunião que sempre termina sem decisão. Leva cerca de um minuto para descobrir quanto ela custa por ano.',
        button: 'Rodar uma calculadora',
      },
    },
  },

  products: {
    relocating: {
      name: 'Relocating',
      tagline: 'Mudar de país, sem achismo.',
      blurb: 'Dados abertos transformados em 33 calculadoras que rodam no navegador, corredores programáticos entre países e uma comunidade ao vivo moderada — espelhados em 22 idiomas pelo próprio pipeline de tradução.',
    },
    frontdesk: {
      name: 'FrontDesk',
      tagline: 'O preço de referência.',
      blurb: 'Um registro público do que as coisas custam de verdade: cada preço com fonte, com data e defendido por um verificador adversarial, com um histórico encadeado por hash que não dá para reescrever em silêncio.',
    },
  },
}
