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
      description: 'Seis ferramentas da Autofract: contratos, agendador entre fusos, calculadoras de custos, leitor de cartas, restaurador de fotos e recibo de relatório.',
    },
    kicker: 'Ferramentas',
    h1: 'Ferra­mentas pequenas, feitas direito.',
    lede: 'O estúdio constrói sistemas grandes para clientes. Estas são as coisas pequenas que construímos para nós mesmos — e depois damos de graça, porque custam quase nada para manter no ar.',
    intro: [
      'Toda ferramenta daqui começou como um incômodo interno: um contrato que ninguém tinha tempo de ler, uma reunião que sempre caía às 22:00 para alguém, um custo recorrente que nunca aparecia em nota nenhuma. Construímos a menor coisa capaz de responder à pergunta e ficamos com ela.',
      'Nenhuma delas pede cadastro. Três não vendem nada; as outras três — What\'s This Letter, Revive e EXHIBIT B — dão uma primeira vez de graça e depois cobram um pagamento único, porque ler uma carta, restaurar uma fotografia ou selar um recibo assinado direito nos custa dinheiro real. Rodam no seu navegador ou nas nossas máquinas, e seguem a mesma doutrina das plataformas listadas abaixo: verifique antes de publicar, mostre a conta, nunca invente um fato que você não consegue apontar.',
    ],
    toolsHeading: 'Ferramentas gratuitas',
    toolsSub: 'Abra, use, feche a aba. Sem cadastro, sem período de teste, sem anúncios.',
    productsHeading: 'Produtos',
    productsSub: 'Sistemas maiores que o estúdio projetou, construiu e continua operando.',
    faq: {
      h2: 'Perguntas que as pessoas fazem',
      items: [
        {
          q: 'Isso é gratuito mesmo?',
          a: 'Três das seis, sim: sem cadastro, sem período de teste, sem cartão, sem limite de uso, sem anúncios. Duas fazem todo o trabalho dentro do seu navegador, então servi-las não nos custa quase nada; o Redline roda nas nossas máquinas e pagamos por ele porque nos rende mais atenção do que um anúncio renderia. O What\'s This Letter, o Revive e o EXHIBIT B são as exceções: as páginas de referência e a sua primeira leitura, a prévia gratuita da sua primeira foto, ou a checagem de que cada fonte de um relatório existe, não custam nada; depois disso, um passe de leitura custa US$ 5, um pacote de fotos começa em US$ 9 e um recibo selado custa US$ 9 por relatório, um pagamento único em cada caso, porque cada renderização e cada registro assinado nos custam dinheiro real.',
        },
        {
          q: 'Preciso me cadastrar?',
          a: 'Não. Não há nada para registrar e nada para instalar. Toda ferramenta já abre pronta para usar e, quando há algum estado a guardar, ele vive na URL — copie o link e o seu trabalho está salvo.',
        },
        {
          q: 'O que acontece com o que eu coloco ali?',
          a: 'Overlap e Cost Of nunca enviam os seus dados para lugar nenhum: o quadro e o comprovante ficam codificados na barra de endereço e são calculados pelo seu próprio navegador. O Redline, o What\'s This Letter, o Revive e o EXHIBIT B precisam trabalhar com o que você envia em um servidor. O Redline guarda o seu relatório atrás do próprio link; o What\'s This Letter descarta a carta no momento em que a sua resposta existe — ela nunca é armazenada nem usada para treinar nada; o Revive guarda as suas fotos por até 30 dias depois da compra, para montar o pacote e refazê-lo, e então as apaga — antes, se você pedir — sem nunca usá-las para treinar coisa alguma; o EXHIBIT B descarta o próprio relatório segundos depois do envio e sela apenas hashes, contagens e horários — nunca o texto. Nos dois casos, trate-os como qualquer ferramenta online e não cole material que você não tem permissão de compartilhar.',
        },
        {
          q: 'Vocês me rastreiam?',
          a: 'Contamos visualizações de página com uma medição sem cookies, que preserva a privacidade, não guarda dado pessoal e não segue ninguém entre sites. É só isso — sem pixels de publicidade, sem gravação de sessão, sem perfis.',
        },
        {
          q: 'Posso usar no trabalho?',
          a: 'Pode, inclusive comercialmente. Times usam o agendador para dailies entre continentes e as calculadoras para defender um orçamento. O Redline é uma primeira leitura de contrato e o What\'s This Letter uma explicação de uma carta oficial: nenhum dos dois é aconselhamento jurídico ou fiscal, então trate o resultado como uma lista de conferência para o seu advogado, não como substituto dele.',
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

    whatsthisletter: {
      name: 'What\'s This Letter',
      tagline: 'A carta oficial, explicada.',
      category: 'Cartas',
      meta: {
        title: 'Carta oficial no exterior, explicada — What\'s This Letter',
        description: 'Envie a foto ou o PDF de uma carta do fisco, multa ou tribunal num idioma que você mal lê e saiba o que é, quem mandou, o prazo exato e o que ela pede.',
      },
      h1: 'O que a carta diz, no seu idioma.',
      lede: 'Um envelope do fisco, de um tribunal ou de uma empresa de cobrança, num idioma que você lê pela metade. O What\'s This Letter lê a carta duas vezes, diz o que é, quem mandou e até quando você precisa agir, e cita os trechos que importam — traduzidos e conferidos contra a própria página.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Você fotografa a carta ou envia o PDF. O motor lê uma vez para extrair o que ela afirma — remetente, tipo de documento, números de processo, valores, datas — e depois uma segunda vez com outra tarefa: conferir cada uma dessas afirmações contra o próprio documento. O que a segunda passada não encontra na página é descartado antes de chegar a você.',
          'O que volta é curto e no seu idioma: que tipo de documento é, qual órgão ou empresa mandou, o prazo exato como data de calendário e não como "no prazo de 14 dias a contar da notificação", os trechos-chave no original com a tradução ao lado, e o que o documento pede de você — como procedimento. Pague isto, responda até tal data, compareça ali, envie tal formulário.',
          'Ao lado do leitor há uma biblioteca de referência: cerca de noventa tipos de notificação oficial da Alemanha, Espanha, Estados Unidos, Reino Unido e Rússia — o que cada uma é, quem manda, o que costuma vir depois. Cada página é conferida contra a fonte oficial e traz a data da última verificação, para você ver o quanto está atualizada.',
        ],
      },
      why: {
        h2: 'Por que a carta parece pior do que é',
        body: [
          'Uma carta oficial no exterior assusta duas vezes. Uma porque está num idioma que você lê na metade da velocidade, e outra porque está escrita em burocratês — o registro que até os nativos temem, em que ninguém escreve "pague até sexta" quando pode escrever "o valor referido no item 2 é devido no prazo estipulado no §3(1)".',
          'Um app de tradução resolve só a primeira metade. Ele dá palavras, muitas vezes as palavras erradas para um termo jurídico, e não sabe que um Mahnbescheid alemão não é uma fatura, que uma "notice of assessment" não é uma acusação, nem qual das quatro datas da página é a que importa. Você termina com um parágrafo fluente e o mesmo nó no estômago.',
          'O custo de não saber é real e assimétrico. A maioria dessas cartas é rotina e pede algo pequeno e específico até uma data específica; o problema começa quando a data passa porque a carta ficou grudada na geladeira sem ninguém ler. Saber o que é, hoje, costuma ser toda a diferença.',
          'Existe um limite claro, e ele não se move. O What\'s This Letter explica o que um documento diz e pede; nunca diz o que você deve fazer a respeito. Contestar, pagar, recorrer ou ligar para um advogado é uma decisão sobre a sua situação, e isso é aconselhamento — algo que esta ferramenta não dá, em idioma nenhum.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'O documento é lido, não adivinhado',
            body: 'A foto de uma folha amassada ou um PDF escaneado vira texto primeiro. Carimbos, cabeçalhos, números de processo e tabelas ficam no lugar, porque um prazo no rodapé ou um valor numa tabela é exatamente o que se perde quando a página é achatada em prosa.',
          },
          {
            h3: 'Uma primeira passada extrai o que a carta afirma',
            body: 'Remetente, tipo de documento, números de processo, valores, datas e exigências vão para um registro estruturado, cada item pareado com o trecho de onde saiu. A passada trabalha contra um catálogo de tipos de notificação conhecidos, então um Steuerbescheid alemão ou um requerimiento espanhol é reconhecido em vez de descrito do zero.',
          },
          {
            h3: 'Uma segunda passada verifica cada afirmação contra a página',
            body: 'Uma leitura nova do mesmo documento pega o registro e tenta derrubá-lo: esse é mesmo o prazo, esse valor é o total ou uma linha dele, a carta exige pagamento ou apenas comunica uma decisão. Uma afirmação que o verificador não consegue ancorar no documento é removida ou marcada como incerta — nunca deixada passar em silêncio.',
          },
          {
            h3: 'Prazos viram datas',
            body: 'Cartas contam em "dias úteis a partir do recebimento", "um mês após a notificação", "o prazo do artigo 70". O motor resolve isso contra as datas impressas na carta e diz o que assumiu — inclusive quando a suposição é um palpite, para você saber qual linha conferir.',
          },
          {
            h3: 'Nada é guardado',
            body: 'A carta é processada para produzir a sua leitura e descartada assim que a resposta aparece na tela. Não é armazenada, não fica ligada a nenhuma conta e nunca é usada para treinar coisa alguma.',
          },
        ],
      },
      useCases: {
        h2: 'Quando usar',
        items: [
          {
            h3: 'Uma carta do fisco no país para onde você se mudou',
            body: 'Finanzamt, Agencia Tributaria, HMRC e IRS escrevem num registro que ninguém usaria falando. Descubra se isso é um lançamento de imposto, um pedido de documentos ou um lembrete — e qual das datas é a de verdade.',
          },
          {
            h3: 'Uma multa ou aviso de penalidade',
            body: 'Estacionamento, transporte, radar, um prazo de registro perdido. Costumam ter uma janela curta em que pagar sai mais barato ou ainda dá para contestar; conhecer a janela vale mais do que conhecer o valor.',
          },
          {
            h3: 'Uma carta de tribunal ou de cobrança',
            body: 'O envelope mais assustador, e aquele em que a data mais importa. Saiba se é uma ordem judicial, uma ordem de pagamento que você pode contestar ou uma cobrança extrajudicial, e o que exatamente o documento diz que acontece depois.',
          },
          {
            h3: 'Algo endereçado a um parente que não lê o idioma',
            body: 'Pais que foram morar com você no exterior, um parceiro que ainda está aprendendo. Leia para eles em um minuto, num idioma que vocês dois compartilham, e depois decidam juntos o que fazer.',
          },
          {
            h3: 'Saber o que é um tipo de notificação antes de ela chegar',
            body: 'As páginas de referência se sustentam sozinhas. Consulte o que é um Bußgeldbescheid ou uma Section 8 notice britânica, quem manda e o que costuma vir depois, com a fonte oficial e a data da última conferência.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'Isso é aconselhamento jurídico ou fiscal?',
            a: 'Não, e nunca vai ser. A ferramenta explica o que um documento diz, quem mandou, até quando pede algo e o que é esse algo. O que você deve fazer a respeito — pagar, contestar, recorrer, ignorar, ligar para alguém — depende das suas circunstâncias e é exatamente a pergunta que não respondemos. Para isso, procure um advogado, um contador ou os serviços gratuitos de orientação que a maioria dos países oferece.',
          },
          {
            q: 'Em quais idiomas ele lê e responde?',
            a: 'A carta pode estar em qualquer idioma coberto pela biblioteca de referência; a resposta vem em inglês, russo, alemão, espanhol, francês ou português — escolha o idioma em que você pensa. Quando o motor não tem certeza de um trecho, ele diz, em vez de disfarçar.',
          },
          {
            q: 'Minha carta fica guardada?',
            a: 'Não. Ela é lida num servidor para produzir a sua resposta e descartada no momento em que a resposta existe. Não é salva, não fica ligada a uma conta, ninguém no estúdio vê e nunca é usada para treinar modelo nenhum. Quando você fecha a aba, a carta já sumiu do nosso lado.',
          },
          {
            q: 'Quanto custa?',
            a: 'As páginas de referência são gratuitas e sem limite, e a sua primeira leitura também. Depois disso, um passe custa US$ 5 e cobre três leituras em trinta dias — o suficiente para a carta, a resposta e a que vem em seguida. Cada leitura é feita em duas passadas completas nas nossas máquinas, e é por isso que não é grátis para sempre.',
          },
          {
            q: 'Qual é a precisão?',
            a: 'Cada afirmação que você vê sobreviveu a uma segunda leitura cujo único trabalho era refutá-la, e o que não pôde ser ancorado na página foi removido ou sinalizado. Isso é bem mais confiável do que um resumo de uma passada só, e mesmo assim não é infalível: uma foto borrada, uma segunda página que falta ou um tipo raro de notificação podem deixar lacunas. Quando o motor precisa estimar uma data, ele avisa.',
          },
          {
            q: 'E se o prazo já passou?',
            a: 'Ele vai dizer isso sem rodeios, com a data que deduziu e como deduziu, em vez de esconder. O que um prazo perdido significa e o que ainda dá para fazer é uma pergunta sobre a sua situação, e é aí que a ferramenta para e começa o trabalho de um profissional.',
          },
          {
            q: 'Quais países são cobertos?',
            a: 'A biblioteca de referência cobre cerca de noventa tipos de notificação oficial da Alemanha, Espanha, Estados Unidos, Reino Unido e Rússia, cada um conferido contra as publicações do próprio órgão emissor e datado. O leitor funciona melhor com cartas desses cinco países, porque a passada de verificação tem um tipo conhecido contra o qual conferir.',
          },
        ],
      },
      cta: {
        title: 'Abrir o What\'s This Letter',
        body: 'Fotografe o envelope que você vem evitando. Em um minuto você vai saber o que é e quando precisa de resposta.',
        button: 'Ler uma carta',
      },
    },

    revive: {
      name: 'Revive',
      tagline: 'As fotos antigas, de volta.',
      category: 'Fotos',
      meta: {
        title: 'Restaurar e colorir fotos antigas da família — Revive',
        description: 'Envie até dez fotos antigas da família e receba-as restauradas, coloridas e nítidas, rostos intactos, com arquivos de impressão a 300 dpi. Prévia grátis.',
      },
      h1: 'As fotos da família, restau­radas. Os rostos, intactos.',
      lede: 'Uma caixa de scans e de fotos de celular tiradas de retratos impressos: amassados, desbotados, rasgados no canto. O Revive devolve cada um consertado, colorido e nítido, com todo rosto exatamente como era, mais arquivos de impressão a 300 dpi e um cartão de antes e depois para o grupo da família. A primeira foto volta como prévia gratuita antes de você pagar qualquer coisa.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Você envia de uma a dez fotografias antigas — scans de mesa ou uma foto de celular de um retrato impresso segurado embaixo do abajur. O modelo de renderização conserta primeiro os danos físicos: riscos, rasgos, manchas, o borrão de uma lente lenta, o desbotamento que transforma um preto e branco em cinza. Depois colore a cena em tons naturais e contidos, e não naqueles saturados que fazem uma cozinha de 1962 parecer um mostruário de tinta, e devolve a nitidez que a lente original e o papel perderam.',
          'Os rostos são a restrição em torno da qual o pipeline inteiro foi construído. Eles são restaurados, nunca redesenhados: sem suavizar a pele, sem mudar o formato do queixo, sem dentes que não estavam lá. Se a sua avó tinha um espaço entre os dentes da frente, ela continua com ele. O teste que importa é se a família reconhece a pessoa na tela de imediato, e é o único teste contra o qual o resultado é julgado.',
          'Cada pacote volta como uma pasta: as imagens restauradas, arquivos prontos para impressão a 300 dpi (30×40 cm no pacote Family archive, 30×40 e 50×70 cm no Heirloom) e um cartão de antes e depois no tamanho certo para o grupo da família. O Family archive acrescenta um vídeo curto de antes e depois para cada foto; o Heirloom acrescenta uma animação de quatro segundos de um quadro que você escolhe — um leve virar de cabeça, uma respiração, nada além disso.',
        ],
      },
      why: {
        h2: 'Por que o preço é assim',
        body: [
          'Os grandes aplicativos dessa categoria foram feitos para quem restaura fotos toda semana, e são cobrados de acordo: uma assinatura semanal, ou um plano anual de genealogia, vendido a alguém que tem oito fotos para consertar uma vez só, para os setenta anos da mãe. A maioria ainda anula o reembolso no instante em que um arquivo é baixado — ou seja, o único jeito de descobrir se o resultado presta é abrir mão do direito de dizer que não presta.',
          'Leia do que as pessoas reclamam de verdade e não é resolução nem cor. É semelhança. Uma restauração que produz um desconhecido limpo, nítido e bonito falhou na única coisa para a qual existia, e nenhum 8K compensa um avô que não é bem ele. Por isso a semelhança é o que o Revive otimiza, e é em torno dela que a garantia foi escrita.',
          'Os planos dos concorrentes também foram desenhados para uma geração anterior de modelos, quando um bom resultado exigia fila e espera, e "premium" queria dizer trinta minutos em vez de três dias. Modelos de imagem única hoje renderizam em segundos; o plano premium de trinta minutos é uma ficção, e o Revive não vende nenhum. Você paga pelo que o pacote contém — resolução, tamanhos de impressão, a animação — e não pelo privilégio de não esperar.',
          'A doutrina do estúdio — verifique antes de publicar, mostre a conta — fica um pouco diferente numa ferramenta de consumo do que numa plataforma de dados, mas é a mesma ideia. Aqui a verificação é sua: uma prévia gratuita, com marca d\'água, da sua própria primeira foto antes de qualquer dinheiro trocar de mão; um botão de refazer que gera de novo de graça, quantas vezes forem necessárias, por catorze dias; e um botão de reembolso que continua funcionando depois de você ter baixado tudo. O produto é conferido contra o único juiz que conta, que é você.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'Envie a caixa',
            body: 'Arraste de uma a dez fotografias. Scans são o ideal, mas uma foto de celular de um retrato sobre a mesa funciona; o pipeline endireita, recorta e tira o reflexo antes de qualquer outra coisa. Sem cadastro e sem e-mail nesta etapa.',
          },
          {
            h3: 'Uma prévia gratuita em cerca de um minuto',
            body: 'A primeira foto é restaurada e colorida na hora e mostrada de volta com marca d\'água, ao lado do original. Julgue a semelhança antes de decidir qualquer coisa. Se não for a pessoa, feche a aba: nada foi cobrado, e as fotos são removidas a pedido.',
          },
          {
            h3: 'Escolha um pacote, pague uma vez',
            body: 'O Mini restaura três fotos por US$ 9. O Family archive restaura dez por US$ 19, com masters em 4K, arquivos de impressão de 30×40 cm e o vídeo de revelação. O Heirloom, a US$ 39, restaura dez com masters em 8K, arquivos de impressão de 30×40 e 50×70 cm e uma animação de quatro segundos de um quadro que você escolhe. Um pagamento pelo provedor de pagamento — em euros na Alemanha e na Espanha, em dólares americanos no Brasil — e nenhuma assinatura para cancelar depois.',
          },
          {
            h3: 'Baixe, refaça ou peça reembolso',
            body: 'O pacote é renderizado em poucos minutos e baixado como uma pasta. Toda foto traz um botão de refazer por catorze dias: aperte e o modelo de renderização tenta de novo, de graça, quantas vezes você quiser. Se ainda assim não parecer a pessoa, o botão de reembolso devolve o valor inteiro — depois de você ter baixado, não antes.',
          },
        ],
      },
      useCases: {
        h2: 'Quando usar',
        items: [
          {
            h3: 'O aniversário de um dos pais ou bodas',
            body: 'Dez fotos do álbum de casamento, restauradas e impressas em 30×40 cm, é um presente que leva uma noite para montar e dura mais do que quase todos os outros. O vídeo de revelação vai para o grupo da família na mesma noite.',
          },
          {
            h3: 'Dia das Mães e Dia dos Pais',
            body: 'A foto deles quando criança, aquela que está na geladeira há vinte anos e hoje é mais vinco do que imagem. Restaurada, colorida, nítida, e ainda reconhecivelmente eles.',
          },
          {
            h3: 'Natal e a mesa cheia',
            body: 'Um conjunto de fotos de família de três gerações, restauradas juntas para que a cor e o grão combinem, impressas e emolduradas como uma parede só. O cartão de antes e depois é o que passa de mão em mão depois do jantar.',
          },
          {
            h3: 'Casamentos e nascimentos',
            body: 'A foto de casamento dos avós ao lado da do casal novo; uma bisavó, colorida, no primeiro álbum do bebê. Retratos antigos e novos que finalmente parecem pertencer ao mesmo livro.',
          },
          {
            h3: 'Uma homenagem póstuma',
            body: 'A foto para a cerimônia, tirada do único retrato que alguém tem, com o rasgo no canto consertado e o rosto exatamente como todos lembram. É o caso em que a semelhança mais importa, e em que o botão de refazer é mais usado.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'Eles vão continuar parecendo eles mesmos?',
            a: 'Esse é o sentido inteiro da ferramenta e o conteúdo inteiro da garantia. Os rostos são consertados, não redesenhados: sem suavização, sem mudança de formato, sem detalhe inventado. Você vê a primeira foto antes de pagar, então pode julgar por conta própria. Se uma foto do pacote não parecer a pessoa, aperte refazer — de graça, quantas vezes forem necessárias, por catorze dias. Se ainda assim não parecer, peça o reembolso.',
          },
          {
            q: 'O que o reembolso cobre, exatamente?',
            a: 'O valor inteiro do pacote, mesmo que você já tenha baixado todos os arquivos. O botão de reembolso funciona depois do download, porque esse é o único momento em que dá para dizer com honestidade se o resultado está certo. A maioria dos serviços dessa categoria faz o contrário e anula o reembolso no instante em que um arquivo sai do servidor deles.',
          },
          {
            q: 'Tem assinatura?',
            a: 'Não. Você paga uma vez por um pacote — Mini, Family archive ou Heirloom — e essa é a transação inteira. Nenhuma conta é criada, nenhum cartão fica guardado para depois, e não há nada para cancelar. Se aparecer outra caixa de fotos no ano que vem, você compra outro pacote na hora.',
          },
          {
            q: 'O que acontece com as minhas fotos?',
            a: 'Elas são usadas para montar o seu pacote e para nada mais: nunca para treinar um modelo, nunca acrescentadas a um banco de rostos, nunca mostradas a ninguém do estúdio. Dois serviços externos veem uma cópia pequena pelos segundos que o trabalho leva — o modelo de renderização e uma segunda checagem que confirma que o envio é uma fotografia de família. Tudo é apagado trinta dias depois da compra, ou imediatamente se você pedir.',
          },
          {
            q: 'Que tipo de original funciona?',
            a: 'Scans de mesa em qualquer resolução, fotos de celular de retratos impressos, fotos de fotos num álbum sob o plástico. Preto e branco, sépia e cor desbotada são todos coloridos; retratos que já estão em cor são restaurados e corrigidos sem serem recoloridos. Originais muito pequenos ou muito borrados restauram pior, e a prévia vai mostrar isso antes de você pagar.',
          },
          {
            q: 'Quais idiomas e moedas?',
            a: 'O Revive está em inglês, português do Brasil, espanhol e alemão; quem lê este site em russo ou francês é enviado à versão em inglês. Os preços são em euros na Alemanha e na Espanha e em dólares americanos no Brasil, e o provedor de pagamento cuida dos meios locais de cada país. Os arquivos de impressão vêm em centímetros, a 300 dpi.',
          },
        ],
      },
      cta: {
        title: 'Abrir o Revive',
        body: 'Envie aquela foto que já é mais vinco do que imagem. Daqui a um minuto você vai vê-la restaurada, e decide a partir daí.',
        button: 'Restaurar uma foto',
      },
    },
    exhibitb: {
      name: 'EXHIBIT B',
      tagline: 'O anexo que prova que você checou.',
      category: 'Relatórios',
      meta: {
        title: 'Prova de que você checou o relatório com IA — EXHIBIT B',
        description: 'Envie um relatório escrito com IA, receba um recibo assinado e encadeado por hash: cada fonte baixada de novo, hasheada e datada antes de você assinar.',
      },
      h1: 'Quando pergun­tarem como você checou, mostre isto.',
      lede: 'Um relatório escrito com a ajuda de um modelo sai com o seu nome. O EXHIBIT B baixa de novo cada fonte que ele cita, faz o hash dos bytes, registra a hora e sela o resultado em um recibo assinado e encadeado por hash — datado antes da sua assinatura, verificável offline por qualquer pessoa e sem uma linha do texto do seu cliente. Checar que uma fonte existe é grátis e sem limite; o recibo selado custa US$ 9.',
      what: {
        h2: 'O que ele faz',
        body: [
          'Você arrasta o relatório — um DOCX ou PDF de até 15 MB, ou texto colado — e alguns segundos depois o documento é descartado, antes de qualquer outra coisa acontecer; um contador na página diz o segundo em que ele sumiu. O que fica é uma lista de afirmações e das fontes em que elas se apoiam. Cada fonte é baixada de novo, da nossa rede e de um segundo ponto de observação em outra, os bytes recebem um hash, um arquivo é solicitado a guardar uma cópia, e o momento da busca é registrado.',
          'Três níveis, em palavras simples. EXISTS: a fonte citada responde, nós a baixamos e fizemos o hash. SAYS: a fonte contém as palavras que você atribuiu a ela, ancoradas em posições de caractere na cópia baixada. HOLDS: uma tentativa adversarial de refutar a afirmação, julgada por um terceiro modelo — ele discorda de especialistas com frequência, devolve INSUFFICIENT_EVIDENCE com frequência e de propósito, fica desligado por padrão e nunca entra no registro selado. Os dois primeiros são quase determinísticos; o terceiro é uma pré-checagem privada, não um veredito.',
          'O que volta é um recibo de uns quatro kilobytes: hashes das afirmações, hashes das fontes, horários de busca, os vereditos de EXISTS e SAYS, uma assinatura e uma posição em uma cadeia de hashes cuja raiz diária é publicada em um repositório público. Nem uma frase do relatório, nem uma citação, nem o nome de um cliente. Qualquer pessoa a quem você entregue pode verificá-lo com o verificador de código aberto — no navegador ou na linha de comando — sem uma única requisição para nós.',
        ],
      },
      why: {
        h2: 'Por que um recibo, e não uma captura de tela',
        body: [
          'Até pouco tempo atrás, "eu mesmo chequei tudo" bastava. Depois o processo por trás de um laudo passou a ser exigível em juízo, as seguradoras começaram a pedir um protocolo de verificação por escrito na renovação, e os clientes aprenderam a pedir o dinheiro de volta. A autoatestação é o único tipo de prova que enfraquece justamente quando é contestada. Uma captura de tela é feita por você, sem data em nenhum sentido demonstrável, e editada em trinta segundos — que é o que a pessoa que vai inquiri-lo vai apontar.',
          'Um recibo do EXHIBIT B é de outra natureza. Os hashes foram tirados no momento da busca, o registro está ligado a uma cadeia, assinado com uma chave que pode ser a sua e ancorado em uma raiz pública diária. Ele não poderia ter sido produzido depois — e esse é o fato que importa em um depoimento, em uma renovação e diante de um cliente que quer o dinheiro de volta. Se uma citação é boa ou não é outra pergunta, e a primeira tela diz isso.',
          'O recibo, de propósito, não é um certificado das suas conclusões. EXISTS e SAYS tratam de fatos que não pertencem a você e sobre os quais você é obrigado a ser diligente: a fonte está lá, a fonte diz isto. HOLDS trata do julgamento — aquilo pelo qual você é pago —, e um registro adversarial permanente sobre ele seria um mau negócio; por isso fica desligado por padrão, é ligado à mão e, mesmo assim, fica fora do registro selado. Nós certificamos que você checou, e quando. Essa é a parte que ninguém consegue reconstruir depois.',
          'Checar é barato, e não cobramos por isso: EXISTS é grátis, ilimitado, para sempre, porque baixar uma URL e fazer o hash dos bytes não é um negócio. O que cobramos é o registro — a assinatura, o lugar na cadeia, a retenção. Ferramentas de rastreamento já cobram o dobro por 400 dias de retenção em relação a 14; a retenção sempre foi o produto, e a tabela de preços aqui diz isso em voz alta.',
        ],
      },
      how: {
        h2: 'Como funciona',
        steps: [
          {
            h3: 'Solte o relatório',
            body: 'Um DOCX, um PDF ou texto colado. As afirmações e suas citações são extraídas, o documento em si é descartado em segundos, e a página informa o momento em que ele sumiu. A prévia que fica — trechos e hashes, nada mais — expira em trinta minutos, antes se você apertar excluir.',
          },
          {
            h3: 'Cada fonte é baixada de novo',
            body: 'Cada URL, DOI ou identificador de registro citado é resolvido da nossa rede e de um segundo ponto em outra; os bytes recebem um hash, um arquivo é solicitado a guardar uma cópia, e o horário da busca é registrado. Para SAYS, as palavras citadas são localizadas na cópia baixada e ancoradas em posições de caractere, para que um leitor mais tarde encontre o trecho — ou veja que ele mudou desde então.',
          },
          {
            h3: 'Veja a tabela se preencher',
            body: 'As linhas aparecem conforme as checagens terminam: EXISTS, SAYS, horário da busca, hash do conteúdo, domínio da fonte. Uma afirmação que a checagem não conseguiu resolver é marcada como tal, em vez de disfarçada. Antes de pagar qualquer coisa, um campo de testes deixa você editar um byte do recibo de prévia e ver o verificador recusá-lo, nomeando o byte.',
          },
          {
            h3: 'Sele, uma vez',
            body: 'Um relatório custa US$ 9 — sem cadastro, sem cartão guardado — e o recibo fica guardado por noventa dias. O RECORD, por US$ 39 ao mês, mantém dez relatórios por mês em uma cadeia sem interrupções durante sete anos, com raiz pública diária e um código QR em cada recibo. O PRACTICE, por US$ 199, acrescenta a sua própria chave de assinatura, recibos no seu próprio domínio, cinco assentos e HOLDS como opção. Um reembolso é um botão, não uma discussão, e o registro permanece de qualquer jeito.',
          },
          {
            h3: 'Qualquer pessoa verifica, offline',
            body: 'O verificador é de código aberto: um único binário, que também roda no navegador. Solte o recibo nele e cada checagem roda localmente — esquema, hash próprio, assinatura, chave, campos da cadeia — e, com a opção de nova busca, se cada fonte ainda produz o mesmo hash hoje. A página conta as requisições que enviou para nós durante a verificação; o número é zero, e você pode acompanhar nas suas próprias ferramentas de desenvolvedor.',
          },
        ],
      },
      useCases: {
        h2: 'Quando usar',
        items: [
          {
            h3: 'Um laudo que vai para uma disputa',
            body: 'Uma avaliação, um modelo de danos, um parecer técnico: escrito mais rápido com um modelo, com quarenta fontes citadas que você não conseguiria reler no mesmo dia. Sele as citações antes de assinar, e a pergunta no depoimento vira "mostre o recibo" em vez de "como sabemos que você checou".',
          },
          {
            h3: 'Um escritório que entrega todo mês',
            body: 'Achados de auditoria, memorandos de due diligence, revisões médicas e de engenharia. Um recibo por relatório, ligado a uma cadeia que nunca tem uma lacuna — porque uma cadeia que começa no dia em que pedem por ela não é prova, e uma lacuna em março é uma pergunta que vão fazer a você em outubro.',
          },
          {
            h3: 'Renovação do seguro de responsa­bilidade',
            body: 'As seguradoras agora perguntam qual é o seu protocolo de verificação quando um modelo ajudou a escrever o trabalho. "Cada fonte citada é baixada de novo e hasheada antes da assinatura, e aqui estão os recibos" é uma resposta escrita, datada, que custa nove dólares por relatório.',
          },
          {
            h3: 'Um cliente que quer o dinheiro de volta',
            body: 'À acusação de que um relatório foi "só gerado", responde um registro datado de cada fonte checada: quando, e o que foi encontrado — sem entregar a ninguém o relatório em si.',
          },
          {
            h3: 'Um recibo que alguém mandou para você',
            body: 'Entregue o arquivo ao verificador e leia o resultado: selado, assinado, ancorado, e se as fontes ainda dizem hoje o que diziam então. Sem cadastro, sem requisição para nós, e sem jeito de sabermos que você olhou.',
          },
        ],
      },
      faq: {
        h2: 'Perguntas que as pessoas fazem',
        items: [
          {
            q: 'O recibo revela o material do meu cliente?',
            a: 'Não, em nenhum nível, incluindo o gratuito. O recibo carrega hashes, contagens, carimbos de tempo, uma assinatura e uma posição na cadeia. O texto das afirmações, as citações e o documento ficam do seu lado; o documento em si é descartado segundos depois do envio, e a página mostra o segundo em que ele sumiu. Um leitor pode confirmar o que você checou e quando, e que o registro é anterior ao relatório, sem ver uma linha dele. Privacidade não é uma opção paga.',
          },
          {
            q: 'Isso prova que as minhas citações estão corretas?',
            a: 'Não, e a primeira tela diz isso. EXISTS prova que a fonte respondeu e quais bytes ela continha naquele momento; SAYS prova que as palavras que você atribuiu a ela estavam lá, naquelas posições. Nenhum dos dois julga a sua conclusão. O que o recibo prova é que uma checagem documentada foi feita em uma data que você consegue comprovar, e que o registro não poderia ter sido produzido depois.',
          },
          {
            q: 'O que é HOLDS, e por que fica desligado?',
            a: 'Uma tentativa adversarial de refutar uma afirmação, julgada por um terceiro modelo. Ele discorda de especialistas com frequência, devolve INSUFFICIENT_EVIDENCE com frequência e de propósito, e o veredito dele nunca entra no recibo selado. Está disponível no PRACTICE como pré-checagem privada, ligada à mão com uma confirmação separada, porque um registro adversarial permanente do seu julgamento profissional não é algo que vamos vender a você por padrão.',
          },
          {
            q: 'Quanto custa?',
            a: 'EXISTS é grátis, ilimitado e sem cadastro — baixar uma URL e fazer o hash dos bytes não é um negócio. Um recibo selado com EXISTS e SAYS é o CHECK: US$ 9 por relatório, guardado por noventa dias, para o perito que entrega três relatórios por ano. O RECORD custa US$ 39 ao mês por dez relatórios em uma cadeia sem interrupções, guardados por sete anos, com raiz pública diária e link de verificação em cada um. O PRACTICE custa US$ 199 ao mês por cinquenta, com a sua própria chave de assinatura, recibos no seu próprio domínio, cinco assentos e um acordo de tratamento de dados. Um reembolso é um botão; o registro permanece.',
          },
          {
            q: 'E se o estúdio sumir?',
            a: 'Essa é a objeção que a arquitetura responde, e não uma promessa. O verificador é de código aberto, um único binário, funciona offline e está espelhado em um serviço público de hospedagem de código. Cada recibo é um arquivo autônomo de uns quatro kilobytes, e toda a sua cadeia é exportada com um comando. As raízes diárias são publicadas em um repositório público, não só no nosso banco de dados. Se sumíssemos amanhã, o seu recibo continuaria verificando — e você pode fazer essa checagem agora mesmo, antes de pagar qualquer coisa.',
          },
          {
            q: 'Eu não conseguiria construir isso em uma noite?',
            a: 'EXISTS você construiria em uma noite — e deveria, por isso ele é grátis para sempre. O que uma noite não produz é uma canonicalização que se mantém estável byte a byte entre versões, uma rotação de chaves que não quebra a verificação do histórico, uma publicação de raízes em um lugar de onde não podemos ser removidos em silêncio e, acima de tudo, um registro datado que começou antes de você precisar da prova. Uma cadeia que você começa no dia em que pedem por ela não é prova.',
          },
          {
            q: 'Para quem não é?',
            a: 'Redações e equipes de checagem de notícias, que vivem de subvenções e não disto. Litigantes checando jurisprudência: esse corpus pertence aos de sempre, e os tribunais rejeitaram um modelo checando outro como verificação — um recibo não vai ajudar ali. Governança de IA em grandes empresas e programas de conformidade com o EU AI Act, que exigem uma revisão de fornecedor que uma ferramenta self-service tocada por uma pessoa não consegue dar. Substanciação publicitária. E qualquer tipo de selo público: um selo no relatório de um cliente diz ao cliente que você usou IA e à equipe de compras dele a sua nota, então não vamos construir um.',
          },
        ],
      },
      cta: {
        title: 'Abrir o EXHIBIT B',
        body: 'Solte o relatório que você está prestes a assinar. Checar que cada fonte existe não custa nada; selar o recibo custa nove dólares, e ninguém nunca vê o texto.',
        button: 'Checar um relatório',
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
