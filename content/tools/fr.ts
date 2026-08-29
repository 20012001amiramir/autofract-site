/**
 * French copy for /tools and /tools/<slug>.
 * Mirrors content/tools/en.ts key for key; the shape is enforced by
 * tests/unit/tools.spec.ts.
 */

import type { ToolsContent } from './en'

export const toolsFr: ToolsContent = {
  hub: {
    meta: {
      title: 'Outils en ligne gratuits — Autofract',
      description: 'Quatre outils du studio Autofract : les clauses d\'un contrat, les réunions entre fuseaux, les coûts cachés et les courriers officiels, expliqués.',
    },
    kicker: 'Outils',
    h1: 'De petits outils, faits correc­tement.',
    lede: 'Le studio construit de grands systèmes pour ses clients. Voici les petits, ceux que nous construisons pour nous-mêmes — et que nous offrons ensuite, parce qu\'ils ne coûtent presque rien à faire tourner.',
    intro: [
      'Chaque outil ici est né d\'un agacement interne : un contrat que personne n\'avait le temps de lire, une réunion qui tombait toujours à 22 h pour quelqu\'un, un coût récurrent qui n\'apparaissait sur aucune facture. Nous avons construit la plus petite chose qui répondait à la question, puis nous l\'avons gardée.',
      'Aucun ne demande de compte. Trois ne vendent rien du tout ; le quatrième vous offre une lecture, puis demande cinq dollars pour un pass, parce que lire un courrier correctement nous coûte de l\'argent réel. Ils tournent dans votre navigateur ou sur nos machines, et ils sont construits selon la même doctrine que les plateformes plus bas : vérifier avant de publier, montrer son travail, ne jamais avancer un fait qu\'on ne peut pas montrer dans la source.',
    ],
    toolsHeading: 'Outils gratuits',
    toolsSub: 'Ouvrez-en un, utilisez-le, fermez l\'onglet. Pas d\'inscription, pas d\'essai, pas de publicité.',
    productsHeading: 'Produits',
    productsSub: 'Les systèmes plus grands que le studio a conçus, construits et opère toujours.',
    faq: {
      h2: 'Les questions qu\'on nous pose',
      items: [
        {
          q: 'C\'est vraiment gratuit ?',
          a: 'Trois des quatre, oui : pas de compte, pas d\'essai, pas de carte, pas de quota, pas de publicité. Deux font tout leur travail dans votre navigateur, donc les servir ne nous coûte presque rien ; Redline tourne sur nos machines et nous le payons, parce qu\'il nous rapporte plus d\'attention qu\'une publicité. What\'s This Letter est l\'exception : ses pages de référence et votre première lecture sont gratuites, les suivantes passent par un pass à 5 $, parce que chacune nous coûte de l\'argent réel.',
        },
        {
          q: 'Faut-il s\'inscrire ?',
          a: 'Non. Il n\'y a rien à créer et rien à installer. Chaque outil s\'ouvre directement en état de marche, et là où un outil a un état à conserver, cet état vit dans l\'URL — copiez le lien et votre travail est enregistré.',
        },
        {
          q: 'Que devient ce que je saisis ?',
          a: 'Overlap et Cost Of n\'envoient jamais vos saisies nulle part : le tableau et le reçu sont encodés dans la barre d\'adresse et calculés par votre propre navigateur. Redline et What\'s This Letter doivent lire votre document sur un serveur pour l\'analyser. Redline garde votre rapport derrière son propre lien ; What\'s This Letter supprime le courrier à l\'instant où votre réponse existe — il n\'est jamais stocké ni utilisé pour entraîner quoi que ce soit. Dans les deux cas, traitez-les comme n\'importe quel outil en ligne et ne collez pas de contenu que vous n\'avez pas le droit de partager.',
        },
        {
          q: 'Nous suivez-vous à la trace ?',
          a: 'Nous comptons les pages vues avec une solution d\'analyse sans cookies, respectueuse de la vie privée, qui ne stocke aucune donnée personnelle et ne suit personne d\'un site à l\'autre. C\'est tout — aucun pixel publicitaire, aucun rejeu de session, aucun profil.',
        },
        {
          q: 'Puis-je les utiliser au travail ?',
          a: 'Oui, y compris à titre commercial. Des équipes se servent du planificateur pour des standups entre continents et des calculateurs pour défendre un budget. Redline est une première lecture d\'un contrat, What\'s This Letter une explication d\'un courrier officiel : ni l\'un ni l\'autre n\'est un conseil juridique ou fiscal, voyez donc leur résultat comme une check-list pour votre avocat, pas comme un remplacement.',
        },
        {
          q: 'Pourquoi un studio donne-t-il des outils ?',
          a: 'Deux raisons honnêtes. Ce sont des terrains d\'essai : la vérification adversariale de Redline et les gates de données au build de nos plateformes plus grandes, c\'est la même doctrine à des échelles différentes. Et ils présentent le studio bien mieux qu\'une page portfolio — vous voyez comment nous construisons avant même de nous parler.',
        },
        {
          q: 'Seront-ils encore là l\'an prochain ?',
          a: 'C\'est l\'intention. Ils sont statiques ou presque par conception, et c\'est exactement pour cela qu\'ils sont bon marché à maintenir en vie : aucune base à migrer, aucun abonnement à financer, aucun runtime à surveiller. Si un outil devait fermer un jour, sa page le dirait au lieu de disparaître en silence.',
        },
        {
          q: 'Puis-je proposer un outil ?',
          a: 'Oui, volontiers. Les meilleures idées nous sont venues jusqu\'ici de quelqu\'un qui décrivait un tableur reconstruit tous les mois. Écrivez à info@autofract.com et dites-nous ce que vous refaites à la main.',
        },
      ],
    },
    cta: {
      title: 'Il vous en faut un à votre échelle ?',
      body: 'Le même studio construit la grande version : agents, pipelines et plateformes qui fonctionnent seuls. Devis fixe après un scoping de 48 heures.',
      button: 'Engager le studio',
    },
  },

  tools: {
    redline: {
      name: 'Redline',
      tagline: 'Les petites lignes, décodées.',
      category: 'Contrats',
      meta: {
        title: 'Analyse de contrat en ligne — Redline',
        description: 'Collez un contrat, un bail, un prêt ou des CGU : vous recevez les pièges classés par gravité, chacun cité mot pour mot et vérifié par un second relecteur.',
      },
      h1: 'Lire les petites lignes, vite.',
      lede: 'Redline lit un contrat comme le ferait un avocat méfiant : il cherche les clauses qui vous coûteront cher plus tard, cite chacune mot pour mot, et explique en langage clair ce qu\'elle vous fait réellement.',
      what: {
        h2: 'Ce qu\'il fait',
        body: [
          'Vous lui donnez un document — du texte collé, un PDF avec une vraie couche de texte, ou un lien public — et il renvoie une liste de pièges classés. La reconduction tacite à laquelle vous ne pourrez pas échapper à temps. Les modifications unilatérales du prix ou des conditions. Les clauses d\'arbitrage et d\'attribution de juridiction qui décident où vous devriez vous battre. Les clauses d\'indemnisation qui font peser sur vous la responsabilité d\'un autre. Les retenues sur dépôt de garantie, les pénalités de retard, les préavis comptés dans l\'unité la moins pratique disponible.',
          'Chaque alerte est ancrée à la clause exacte dont elle provient, avec les caractères mêmes du document — pas une paraphrase, pas une reconstruction. Vous voyez la phrase, sa place dans le document, pourquoi elle compte, et à quoi ressemble une version normale de cette clause.',
          'Le rapport montre aussi sa propre piste d\'audit : combien d\'alertes candidates ont été proposées, combien ont été bloquées parce que la citation était introuvable dans le document, combien un second relecteur en a réfuté, et combien ont été rétrogradées par rapport à la gravité initialement attribuée. On vous dit ce que la machine a raté, pas seulement ce qu\'elle a réussi.',
        ],
      },
      why: {
        h2: 'Pourquoi les petites lignes gagnent toujours',
        body: [
          'Personne ne lit les conditions générales, et tout le monde sait que personne ne les lit — c\'est précisément pour cela que les clauses coûteuses y vivent. Un contrat d\'abonnement est écrit par des gens payés pour protéger un seul de ses deux côtés, et vous le rencontrez au pire moment possible : à la fin d\'un processus de recrutement, le jour de l\'emménagement, une heure avant un lancement.',
          'Survoler ne marche pas, parce que les clauses dangereuses n\'ont pas l\'air dangereuses. Elles sont grammaticalement ennuyeuses, enterrées dans un sous-article numéroté, et renvoient à une définition située quatre pages plus haut. Les dégâts sont faits par « conformément à l\'article 12.3 », pas par des majuscules.',
          'Un avocat est la bonne réponse pour un contrat sérieux, et Redline ne prétendra jamais le contraire. Mais vous n\'envoyez pas à un avocat un SaaS à 9 € par mois, un abonnement de salle de sport ou une visite d\'appartement à laquelle il faut répondre ce soir. Pour ceux-là, l\'alternative réaliste à une lecture machine, c\'est aucune lecture du tout.',
        ],
      },
      how: {
        h2: 'Comment ça marche',
        steps: [
          {
            h3: 'Il découpe le document selon sa propre numérotation',
            body: 'Avant toute analyse, le texte est segmenté selon la structure que le document possède déjà — 4.2, §7, article 3, ¶12. Chaque alerte pointe donc vers un endroit réel dans une section réelle, et c\'est ce qui rend les citations vérifiables.',
          },
          {
            h3: 'Une première passe propose des candidats face à une taxonomie de pièges',
            body: 'Le modèle ne divague pas librement sur du « langage risqué ». Il travaille contre une taxonomie curée des pièges qui reviennent vraiment dans les contrats grand public et professionnels, chacun avec une gravité et une probabilité connues, et propose les candidats qui correspondent.',
          },
          {
            h3: 'Un quote gate écarte tout ce qu\'il ne peut pas prouver',
            body: 'Cette étape est déterministe, ce n\'est pas un modèle : un candidat ne survit que si sa citation existe dans le texte source. Les caractères mêmes du document remplacent ensuite la version de la citation produite par le modèle. Une alerte incapable de montrer une phrase de votre document ne vous parvient jamais.',
          },
          {
            h3: 'Un second relecteur, indépendant, tente de la réfuter',
            body: 'Ce qui survit au gate est confié à une passe neuve qui lit le même document avec la mission inverse : confirmer, juger l\'alerte exagérée, ou la réfuter carrément. Les alertes non prouvées sont supprimées, les exagérées perdent en gravité — le rapport affiche les deux compteurs.',
          },
          {
            h3: 'Ce qui reste est classé par ce que ça vous coûte',
            body: 'L\'ordre final combine la gravité du type de clause, la probabilité que ce piège morde en pratique, et la confiance du vérificateur. Vous lisez de haut en bas et vous vous arrêtez quand vous n\'avez plus d\'enjeu, pas quand vous n\'avez plus de patience.',
          },
        ],
      },
      useCases: {
        h2: 'Quand le lancer',
        items: [
          {
            h3: 'Avant qu\'une équipe déploie un nouvel outil SaaS',
            body: 'Quelqu\'un doit lire les conditions avant que cinquante collègues y mettent les données de l\'entreprise. Collez le contrat et vous obtenez en une passe la fenêtre de résiliation, les clauses de données et de responsabilité et le langage de modification unilatérale — à temps pour la décision.',
          },
          {
            h3: 'Un bail auquel il faut répondre aujourd\'hui',
            body: 'C\'est dans les baux que se cachent préavis, retenues sur dépôt de garantie, obligations de réparation et reconductions automatiques. Lire une liste d\'alertes avant la visite vaut mieux que découvrir la clause au moment de partir.',
          },
          {
            h3: 'Contrats de freelance et de prestation',
            body: 'Conditions de paiement, cession de propriété intellectuelle, non-sollicitation, révisions illimitées, indemnisation : les clauses qui décident si un bon tarif est vraiment une bonne affaire. Passez le projet de contrat avant de faire votre contre-proposition.',
          },
          {
            h3: 'Prêts, assurances et tout ce qui a un échéancier',
            body: 'Des frais qui n\'apparaissent qu\'en cas de remboursement anticipé, des exclusions qui retirent discrètement la raison pour laquelle vous avez pris la police, des définitions qui rétrécissent un sinistre couvert. Ce sont exactement les clauses qui récompensent une lecture lente et adversariale.',
          },
          {
            h3: 'Un deuxième avis sur un contrat déjà lu',
            body: 'Vous l\'avez parcouru vous-même et tout semblait normal. Dix minutes de lecture machine confirment cela avec une piste d\'audit, ou vous montrent le sous-article que vous avez survolé à trois heures du matin.',
          },
        ],
      },
      faq: {
        h2: 'Les questions qu\'on nous pose',
        items: [
          {
            q: 'Est-ce un conseil juridique ?',
            a: 'Non, et cela ne peut pas l\'être. Redline est une première lecture rapide et structurée qui vous dit quelles clauses méritent un humain. Dès qu\'il y a de l\'argent ou une responsabilité réelle en jeu, apportez la liste d\'alertes à un avocat — vous tirerez bien plus de son heure en arrivant avec.',
          },
          {
            q: 'Que puis-je lui donner ?',
            a: 'Du texte collé, un PDF contenant une vraie couche de texte, ou une URL publique que l\'outil peut récupérer. Une photo scannée de contrat n\'a aucun texte à lire : faites-la d\'abord passer par un OCR, ou collez le texte vous-même.',
          },
          {
            q: 'Comment savoir qu\'il n\'invente pas des clauses ?',
            a: 'Parce qu\'une alerte sans citation littérale est supprimée avant même que vous la voyiez. Le quote gate vérifie que le texte cité figure réellement dans votre document, puis y substitue les caractères mêmes du document. Ce contrôle est du code ordinaire, pas un modèle qui décide s\'il se fait confiance.',
          },
          {
            q: 'Trouve-t-il tout ?',
            a: 'Non, et il est construit pour échouer du côté le plus sûr. Deux passes et un quote gate signifient qu\'un vrai piège peut occasionnellement sauter faute de preuve ; l\'alternative — une liste sûre d\'elle-même de pièges absents de votre document — est bien plus dangereuse. Lisez-le comme une liste classée de problèmes probables, pas comme un certificat.',
          },
          {
            q: 'Quelles langues lit-il ?',
            a: 'Les documents en anglais et en russe, y compris les conventions de numérotation propres à chacun — sections, marques de paragraphe, articles. Les explications reviennent en langage clair plutôt que dans le jargon juridique qu\'elles décrivent.',
          },
          {
            q: 'Que devient mon document ?',
            a: 'Il est traité pour produire votre rapport, qui vit derrière son propre lien. Nous ne publions pas, ne vendons pas et ne revendons pas ce que vous envoyez. Traitez-le comme n\'importe quel outil en ligne : ne collez pas de contenu que votre contrat vous interdit de partager.',
          },
          {
            q: 'Combien de temps prend une analyse ?',
            a: 'Généralement quelques minutes pour un contrat normal, parce que deux passes indépendantes lisent tout le document au lieu de survoler la première page. Les contrats longs prennent plus de temps ; la progression reste visible pendant le travail.',
          },
          {
            q: 'Est-ce gratuit ?',
            a: 'L\'analyse est gratuite et ne demande pas de compte. Elle nous coûte de l\'argent réel par document, et c\'est un arbitrage assumé : c\'est la démonstration la plus convaincante de notre façon de construire que nous pouvions mettre sur internet.',
          },
        ],
      },
      cta: {
        title: 'Ouvrir Redline',
        body: 'Collez le contrat que vous remettez à plus tard depuis des semaines. Deux minutes, sans compte, et vous saurez quelles trois clauses comptent.',
        button: 'Vérifier un contrat',
      },
    },

    overlap: {
      name: 'Overlap',
      tagline: 'L\'heure qui convient à tout le monde.',
      category: 'Planification',
      meta: {
        title: 'Planificateur de réunion multi-fuseaux — Overlap',
        description: 'Placez plusieurs personnes sur un tableau, voyez qui est réveillé et au travail, obtenez les meilleurs créneaux d\'une heure et partagez le tout par lien.',
      },
      h1: 'Arrêtez de calculer les fuseaux horaires.',
      lede: 'Overlap pose les journées de plusieurs personnes sur une même ligne pour que vous voyiez — au lieu de calculer — les heures où une réunion peut réellement avoir lieu, et qui paie l\'addition quand aucune n\'est bonne.',
      what: {
        h2: 'Ce qu\'il fait',
        body: [
          'Ajoutez des personnes par ville, par fuseau horaire ou par simple décalage. Chacune devient une bande horizontale représentant sa propre journée locale : grise pendant qu\'elle dort, ambre quand elle est réveillée mais pas au travail, verte pendant ses heures de travail. Les colonnes où les bandes s\'accordent, c\'est votre réunion.',
          'Les heures de travail appartiennent à la personne, pas au tableau. Un développeur qui commence à 11 h et un client qui s\'arrête à 16 h gardent chacun sa vraie journée, et la réponse change en conséquence.',
          'En dessous, les créneaux d\'une heure sont classés : combien de personnes sont au travail, combien sont simplement réveillées, et — quand aucun créneau ne convient à tout le monde — exactement qui doit faire l\'effort. N\'importe quel créneau s\'exporte en fichier calendrier, et le tableau entier est un lien que vous pouvez envoyer.',
        ],
      },
      why: {
        h2: 'Pourquoi les méthodes habituelles échouent',
        body: [
          'Le calcul mental suffit pour deux villes que vous connaissez. Il s\'effondre à quatre que vous ne connaissez pas, et il casse complètement pendant les deux semaines de printemps et d\'automne où un pays a changé d\'heure et l\'autre pas encore.',
          'Une horloge mondiale vous dit l\'heure qu\'il est quelque part. Elle ne vous dit pas si la personne dort, dîne, ou en est à sa troisième heure de travail — c\'est-à-dire la seule chose que vous vouliez savoir.',
          'Un sondage de disponibilités reporte le calcul des fuseaux sur tous les autres, puis bloque la réservation jusqu\'à ce que le plus lent réponde. C\'est exactement le travail que vous cherchiez à éviter, simplement redistribué.',
          'Et la version polie du problème est invisible : 8 h à Berlin est une heure ordinaire pour un Berlinois et une heure cruelle pour quelqu\'un à Los Angeles. Personne ne le remarque avant que l\'invitation soit déjà partie.',
        ],
      },
      how: {
        h2: 'Comment ça marche',
        steps: [
          {
            h3: 'Les décalages viennent du navigateur, pas d\'une table',
            body: 'Chaque conversion passe par l\'API Intl standard et par la base de fuseaux IANA du navigateur lui-même. Aucune liste de décalages maison ne peut se périmer : si le navigateur sait qu\'un pays a changé ses règles, le tableau le sait aussi.',
          },
          {
            h3: 'L\'heure d\'été est résolue par personne et par date',
            body: 'Choisissez une date fin mars ou fin octobre et le tableau change lui-même de longueur — 46 colonnes d\'une demi-heure le jour qui perd une heure, 50 le jour qui en répète une — parce que chaque ligne est calculée depuis l\'instant réel plutôt que depuis un décalage figé.',
          },
          {
            h3: 'Les colonnes font une demi-heure',
            body: 'Les fuseaux à :30 et :45 — Inde, Népal, îles Chatham — s\'alignent honnêtement au lieu d\'être arrondis à l\'heure la plus proche, cet arrondi qui produit des réunions auxquelles personne ne peut assister.',
          },
          {
            h3: 'Les créneaux sont notés, pas devinés',
            body: 'Être au travail compte pleinement, être réveillé près des heures de bureau compte partiellement, dormir disqualifie un créneau d\'office. Les candidats sont espacés d\'au moins deux heures pour que les suggestions soient de vraies options différentes, et chaque personne est signalée « tôt », « tard » ou « hors horaires ».',
          },
          {
            h3: 'Le lien est le document',
            body: 'Personnes, noms, heures de travail, date et point d\'ancrage sont tous encodés dans l\'URL. Rien n\'est téléversé et il n\'y a pas de compte : partager un tableau, c\'est partager un lien, et celui qui l\'ouvre voit exactement ce que vous avez vu.',
          },
        ],
      },
      useCases: {
        h2: 'Quand l\'utiliser',
        items: [
          {
            h3: 'Un standup sur trois continents',
            body: 'Découvrez s\'il existe seulement une heure comprise dans la journée de travail de tout le monde — et quand il n\'y en a pas, qui en paie le prix, pour que ce coût tourne au lieu d\'être silencieusement attribué à celui qui se plaint le moins.',
          },
          {
            h3: 'Faire passer des entretiens à l\'étranger',
            body: 'L\'heure que vous proposez est lue comme un signal sur l\'entreprise. Réglez la ville du candidat, regardez les colonnes vertes, et évitez de demander à quelqu\'un d\'être performant à 22 h la veille d\'un jour travaillé.',
          },
          {
            h3: 'Appels clients et agences',
            body: 'Vous connaissez rarement la vraie journée de travail d\'un nouveau client. Réglez-la une fois, envoyez-lui le tableau, et laissez-le faire sa contre-proposition depuis la même image au lieu d\'échanger pendant deux jours des « 15 h chez vous, ça vous va ? ».',
          },
          {
            h3: 'Travailler sur deux marchés à la fois',
            body: 'Un contrat à Berlin, un autre à Singapour. Mettez les deux sur le tableau avec votre propre ligne au milieu et voyez, avant de promettre quoi que ce soit, combien d\'heures de recouvrement véritable votre journée contient réellement.',
          },
          {
            h3: 'Appeler sa famille dans un autre pays',
            body: 'Ici, c\'est la bande grise qui est utile : elle vous dit quand un appel réveillerait quelqu\'un, et la bande ambre vous dit quand la personne est réveillée mais préférerait être en train de dîner.',
          },
        ],
      },
      faq: {
        h2: 'Les questions qu\'on nous pose',
        items: [
          {
            q: 'Faut-il un compte ?',
            a: 'Non. Rien à créer, rien à installer. Ouvrez la page, ajoutez des personnes, envoyez le lien — c\'est toute la procédure.',
          },
          {
            q: 'Où vont mes données ?',
            a: 'Nulle part. Les personnes que vous ajoutez sont encodées dans l\'URL de votre barre d\'adresse et tous les calculs se font dans votre navigateur. Les équipes enregistrées utilisent le stockage local du navigateur et restent sur cet appareil.',
          },
          {
            q: 'Gère-t-il l\'heure d\'été ?',
            a: 'Oui, par personne et par date. Un jour de changement d\'heure, le tableau a littéralement une autre longueur, parce que chaque ligne dérive de l\'instant réel et non d\'un décalage stocké.',
          },
          {
            q: 'Ma ville n\'est pas dans la liste.',
            a: 'Saisissez plutôt le fuseau IANA — Europe/Paris, Asia/Kolkata, America/Sao_Paulo — ou un simple décalage comme UTC+3 ou +05:45. Les deux fonctionnent toujours, y compris pour les endroits que l\'index des villes ne couvre pas.',
          },
          {
            q: 'Combien de personnes tiennent sur un tableau ?',
            a: 'Jusqu\'à douze. Au-delà, les bandes cessent d\'être lisibles, et en pratique une réunion étalée sur plus de douze fuseaux appelle un enregistrement plutôt qu\'un créneau.',
          },
          {
            q: 'Chaque personne peut-elle avoir ses propres horaires ?',
            a: 'Oui, y compris des plages qui passent minuit pour le travail de nuit. Elles voyagent dans le lien avec tout le reste.',
          },
          {
            q: 'Et s\'il n\'existe aucune heure où tout le monde est réveillé ?',
            a: 'Il le dit franchement au lieu d\'inventer une colonne verte, puis propose l\'heure la moins mauvaise et nomme qui serait en train de dormir. Une vue de rotation équitable aide à répartir ce coût dans l\'équipe sur plusieurs semaines.',
          },
          {
            q: 'Fonctionne-t-il sur téléphone ?',
            a: 'Oui. Le tableau défile dans son propre cadre, les lignes restent lisibles sur petite largeur, et le thème clair ou sombre suit le réglage de votre système.',
          },
        ],
      },
      cta: {
        title: 'Ouvrir Overlap',
        body: 'Ajoutez deux personnes et la ville dont vous vous trompez à chaque fois. Quinze secondes suffisent pour voir s\'il existe une bonne heure.',
        button: 'Trouver un créneau',
      },
    },

    costof: {
      name: 'Cost Of',
      tagline: 'Ce que les choses coûtent vraiment.',
      category: 'Calculateurs',
      meta: {
        title: 'Calculateurs de coûts cachés — Cost Of',
        description: 'Calculateurs gratuits : une réunion récurrente, un stack SaaS inutilisé, un mauvais recrutement ou une heure de panne deviennent un chiffre partageable.',
      },
      h1: 'Les coûts que personne ne facture.',
      lede: 'Une réunion hebdomadaire, un abonnement oublié, une interruption, un mauvais recrutement, une heure de panne — Cost Of transforme chacun d\'eux en un chiffre unique, sur un reçu que vous pouvez envoyer à la personne qui décide.',
      what: {
        h2: 'Ce qu\'il fait',
        body: [
          'Chaque calculateur demande les quelques données qui font vraiment bouger le chiffre — combien de personnes, à quelle séniorité, pendant combien de temps, à quelle fréquence — et renvoie un montant unique avec le calcul affiché en dessous. Pas de tableau de bord, pas d\'inscription, pas d\'assistant en quatorze étapes.',
          'Les salaires n\'ont pas à être devinés. Des préréglages couvrent quinze pays et dix rôles au salaire brut médian en monnaie locale, et chacun est modifiable : servez-vous du préréglage pour lancer la conversation, remplacez-le par vos vrais chiffres avant de l\'emmener en réunion.',
          'Le résultat est un reçu. Copiez-le en lien, enregistrez-le en image, ou ouvrez une carte de partage dont l\'aperçu de lien porte déjà le chiffre — c\'est en général ce qui emporte l\'argument dans une conversation, sans que personne ait à cliquer.',
        ],
      },
      why: {
        h2: 'Pourquoi ces coûts restent invisibles',
        body: [
          'Personne n\'envoie de facture pour une réunion récurrente. Elle n\'a ni ligne budgétaire, ni propriétaire, ni date de renouvellement : elle n\'apparaît donc jamais dans la revue de budget qui tue un outil à 40 € par mois — même quand elle consomme vingt fois plus d\'argent chaque année.',
          'La vraie monnaie, c\'est le temps, et le temps est libellé en salaires, que les gens hésitent à dire à voix haute. Dès qu\'une heure de réunion devient un montant, l\'argument passe de « cette réunion est longue » à un chiffre sur lequel la personne qui tient l\'agenda peut agir.',
          'Le même aveuglement recouvre tout ce dont le coût est diffus : les abonnements que personne n\'annule parce que chacun est petit, les interruptions qui coûtent bien plus que la minute qu\'elles prennent, un recrutement qui ne prend pas et consomme discrètement un trimestre de l\'année d\'une équipe.',
          'Aucun de ces chiffres n\'a besoin d\'être exact pour être utile. Un ordre de grandeur, avec les hypothèses visibles et modifiables, suffit à trancher une décision qui se prenait jusque-là au feeling.',
        ],
      },
      how: {
        h2: 'Comment ça marche',
        steps: [
          {
            h3: 'Un modèle pur par calculateur',
            body: 'Chaque calculateur est un petit modèle autonome dont les entrées, la formule et la présentation restent séparées. C\'est pour cela que le calcul peut vous être montré en entier : il n\'y a rien derrière le chiffre, à part le chiffre.',
          },
          {
            h3: 'Des salaires de référence que vous pouvez écraser',
            body: 'Quinze pays par dix rôles, au salaire brut médian en monnaie locale, avec les sources conservées à côté des données. Ce sont des points de départ, pas une autorité : chaque champ est modifiable et votre valeur voyage avec le résultat.',
          },
          {
            h3: 'Le lien est le document',
            body: 'Les entrées sont encodées dans l\'URL. Rien n\'est stocké sur un serveur, il n\'y a pas de compte, et envoyer votre scénario à quelqu\'un, c\'est lui envoyer un lien qui rouvre exactement les chiffres que vous avez utilisés.',
          },
          {
            h3: 'Un reçu construit pour être transféré',
            body: 'La sortie a délibérément la forme de quelque chose que vous pouvez coller dans une conversation : un chiffre en titre, les hypothèses en dessous, et une carte de partage dont l\'aperçu montre le montant avant même que quiconque ouvre le lien.',
          },
        ],
      },
      useCases: {
        h2: 'Quand l\'utiliser',
        items: [
          {
            h3: 'Supprimer ou raccourcir une réunion récurrente',
            body: 'Huit personnes, une heure, chaque semaine. Posez le montant annuel à côté de l\'ordre du jour et la discussion sur l\'opportunité d\'en faire un compte rendu écrit devient très courte.',
          },
          {
            h3: 'Le grand ménage SaaS annuel',
            body: 'Chaque abonnement paraît abordable pris isolément. Additionné, avec les licences que personne n\'utilise, le stack produit en général un chiffre qui finance ce que l\'équipe réclame depuis un an.',
          },
          {
            h3: 'Défendre du temps de concentration',
            body: 'Le coût d\'une interruption n\'est pas la durée de l\'interruption. Montrez ce qu\'une journée fragmentée coûte réellement et « pas de réunion avant midi » cesse de sonner comme une préférence.',
          },
          {
            h3: 'Justifier un recrutement de plus',
            body: 'Comparez le coût d\'un mauvais recrutement à celui d\'un poste qui reste vacant. Les deux chiffres sont inconfortables, et c\'est justement d\'avoir les deux qui rend la décision défendable.',
          },
          {
            h3: 'Financer le travail de fiabilité',
            body: 'Une heure de panne a un prix, en chiffre d\'affaires perdu et en personnes qui arrêtent ce qu\'elles font. C\'est ce montant qui transforme « il faudrait réparer la chaîne de déploiement » en un chantier financé.',
          },
        ],
      },
      faq: {
        h2: 'Les questions qu\'on nous pose',
        items: [
          {
            q: 'Est-ce gratuit ?',
            a: 'Oui — tous les calculateurs, sans compte, sans limite, sans publicité. Tout tourne entièrement dans votre navigateur, et c\'est ce qui lui permet de rester gratuit.',
          },
          {
            q: 'D\'où viennent les chiffres de salaire ?',
            a: 'De salaires bruts médians publiés par pays et par rôle, conservés avec leurs sources, en monnaie locale. Ce sont des préréglages pour une première passe, et chacun peut être remplacé par vos vrais chiffres.',
          },
          {
            q: 'Mes saisies sont-elles envoyées quelque part ?',
            a: 'Non. Elles sont encodées dans l\'URL et calculées dans votre navigateur. Les visites sont comptées avec une analyse sans cookies qui n\'enregistre aucune donnée personnelle ni aucune saisie.',
          },
          {
            q: 'Quelle est la précision ?',
            a: 'Aussi précise que vos entrées, et le calcul vous est montré pour que vous en jugiez. L\'objectif n\'est pas un montant exact à quatre chiffres, mais un ordre de grandeur défendable avec les hypothèses sur la table.',
          },
          {
            q: 'Puis-je partager un résultat ?',
            a: 'C\'est le principe même. Copiez le lien, enregistrez le reçu en PNG, ou collez la carte de partage dans une conversation où l\'aperçu montre déjà le chiffre.',
          },
          {
            q: 'Puis-je utiliser ma propre monnaie ?',
            a: 'Oui. Les préréglages par pays fixent une valeur par défaut raisonnable et vous pouvez changer aussi bien les montants que la devise ; le reçu se met en forme en conséquence.',
          },
          {
            q: 'Quels calculateurs existent ?',
            a: 'La réunion récurrente, le stack SaaS, le changement de contexte, un mauvais recrutement et la panne — les coûts qui reviennent le plus souvent dans les discussions que les gens ont vraiment au travail.',
          },
          {
            q: 'En ajouterez-vous d\'autres ?',
            a: 'Quand une vraie question revient sans cesse, oui. Si vous reconstruisez le même tableur chaque trimestre, décrivez-le-nous : il deviendra peut-être le prochain.',
          },
        ],
      },
      cta: {
        title: 'Ouvrir Cost Of',
        body: 'Choisissez la réunion qui se termine toujours sans décision. Il faut environ une minute pour découvrir ce qu\'elle coûte par an.',
        button: 'Lancer un calculateur',
      },
    },

    whatsthisletter: {
      name: 'What\'s This Letter',
      tagline: 'Le courrier officiel, expliqué.',
      category: 'Courriers',
      meta: {
        title: 'Comprendre un courrier officiel — What\'s This Letter',
        description: 'Photo ou PDF d\'un avis d\'imposition, d\'une amende ou d\'un tribunal dans une langue étrangère : ce que c\'est, qui l\'envoie, le délai et ce qu\'il demande.',
      },
      h1: 'Ce que dit le courrier, dans votre langue.',
      lede: 'Une enveloppe du fisc, d\'un tribunal ou d\'une société de recouvrement, dans une langue que vous lisez à moitié. What\'s This Letter la lit deux fois, vous dit ce que c\'est, qui l\'envoie et avant quelle date vous devez agir, et cite les passages qui comptent — traduits, et confrontés à la page elle-même.',
      what: {
        h2: 'Ce qu\'il fait',
        body: [
          'Vous photographiez le courrier ou déposez le PDF. Le moteur le lit une première fois pour extraire ce qu\'il affirme — expéditeur, type de document, numéros de référence, montants, dates — puis une seconde fois avec une autre mission : confronter chacune de ces affirmations au document lui-même. Ce que la seconde passe ne retrouve pas sur la page est écarté avant même que vous ne le voyiez.',
          'Ce qui revient est court et dans votre langue : de quel genre de document il s\'agit, quelle administration ou quelle entreprise l\'envoie, le délai exact sous forme de date, et non « dans les 14 jours suivant la notification » ; les passages clés dans l\'original avec la traduction à côté, et ce que le document vous demande — de façon procédurale. Payer ceci, répondre avant telle date, vous présenter là, envoyer tel formulaire.',
          'À côté du lecteur, une bibliothèque de référence : environ quatre-vingt-dix types de courriers officiels d\'Allemagne, d\'Espagne, des États-Unis, du Royaume-Uni et de Russie — ce que c\'est, qui l\'envoie, ce qui suit d\'habitude. Chaque page est confrontée à la source officielle et porte la date de sa dernière vérification, pour que vous sachiez si elle est encore à jour.',
        ],
      },
      why: {
        h2: 'Pourquoi le courrier paraît pire qu\'il n\'est',
        body: [
          'Un courrier officiel à l\'étranger fait peur deux fois. Une fois parce qu\'il est dans une langue que vous lisez à demi-vitesse, et une seconde parce qu\'il est rédigé en langue administrative — ce registre que les natifs redoutent eux aussi, où personne n\'écrit « payez avant vendredi » quand on peut écrire « la somme visée à l\'article 2 est exigible dans le délai prévu au §3(1) ».',
          'Une application de traduction ne règle que la première moitié. Elle donne des mots, souvent les mauvais pour un terme juridique, et elle ne sait pas qu\'un Mahnbescheid allemand n\'est pas une facture, qu\'une « notice of assessment » n\'est pas une accusation, ni laquelle des quatre dates de la page est celle qui compte. Vous vous retrouvez avec un paragraphe fluide et le même nœud à l\'estomac.',
          'Ne pas savoir a un coût réel, et asymétrique. La plupart de ces courriers sont de la routine et demandent une petite chose précise avant une date précise ; les ennuis commencent quand la date passe parce que le courrier est resté sur le frigo, jamais ouvert. Savoir ce que c\'est, aujourd\'hui, fait en général toute la différence.',
          'Il y a une limite nette, et elle ne bouge pas. What\'s This Letter explique ce qu\'un document dit et demande ; il ne vous dit jamais quoi en faire. Contester, payer, faire appel ou appeler un avocat est une décision qui dépend de votre situation, et cela s\'appelle un conseil — ce que cet outil ne donne pas, dans aucune langue.',
        ],
      },
      how: {
        h2: 'Comment ça marche',
        steps: [
          {
            h3: 'Le document est lu, pas deviné',
            body: 'La photo d\'une page froissée ou un PDF scanné devient d\'abord du texte. Tampons, en-têtes, numéros de référence et tableaux restent à leur place, parce qu\'un délai en pied de page ou un montant dans un tableau est exactement ce qui se perd quand on aplatit une page en prose.',
          },
          {
            h3: 'Une première passe extrait ce que le courrier affirme',
            body: 'Expéditeur, type de document, références, montants, dates et exigences sont rassemblés dans une fiche structurée, chacun apparié au passage dont il provient. La passe s\'appuie sur un catalogue de types de courriers connus, si bien qu\'un Steuerbescheid allemand ou un requerimiento espagnol est reconnu, et non décrit à partir de zéro.',
          },
          {
            h3: 'Une seconde passe confronte chaque affirmation à la page',
            body: 'Une lecture neuve du même document prend la fiche et tente de la mettre en défaut : est-ce vraiment le délai, ce montant est-il le total ou une seule ligne, le courrier exige-t-il un paiement ou annonce-t-il seulement une décision ? Une affirmation que le vérificateur ne peut pas ancrer dans le document est retirée ou marquée incertaine — jamais conservée en silence.',
          },
          {
            h3: 'Les délais deviennent des dates',
            body: 'Les courriers comptent en « jours ouvrés à compter de la signification », « un mois après la notification », « le délai prévu à l\'article 70 ». Le moteur les convertit à partir des dates imprimées sur le courrier et vous dit ce qu\'il a supposé — y compris quand cette hypothèse n\'est qu\'une estimation, pour que vous sachiez quelle ligne vérifier.',
          },
          {
            h3: 'Rien n\'est conservé',
            body: 'Le courrier est traité pour produire votre lecture, puis supprimé dès que la réponse est à l\'écran. Il n\'est pas stocké, n\'est rattaché à aucun compte et ne sert jamais à entraîner quoi que ce soit.',
          },
        ],
      },
      useCases: {
        h2: 'Quand l\'utiliser',
        items: [
          {
            h3: 'Un courrier du fisc dans le pays où vous avez emménagé',
            body: 'Le Finanzamt, l\'Agencia Tributaria, HMRC et l\'IRS écrivent tous dans un registre que personne n\'utiliserait à l\'oral. Sachez s\'il s\'agit d\'un avis d\'imposition, d\'une demande de pièces ou d\'un rappel — et laquelle des dates est celle qui compte.',
          },
          {
            h3: 'Une amende ou un avis de sanction',
            body: 'Stationnement, transports, radars, un délai d\'enregistrement manqué. Ces courriers portent en général une courte fenêtre où payer coûte moins cher ou contester est encore possible ; connaître la fenêtre vaut plus que connaître le montant.',
          },
          {
            h3: 'Un courrier d\'un tribunal ou d\'une société de recouvrement',
            body: 'L\'enveloppe la plus effrayante, et celle où la date compte le plus. Sachez s\'il s\'agit d\'une décision de justice, d\'une injonction de payer à laquelle vous pouvez vous opposer ou d\'une mise en demeure d\'une société de recouvrement, et ce que le document dit exactement de la suite.',
          },
          {
            h3: 'Un courrier adressé à un proche qui ne lit pas la langue',
            body: 'Des parents venus vous rejoindre à l\'étranger, un conjoint qui apprend encore. Lisez-le pour eux en une minute, dans une langue que vous partagez, puis décidez ensemble de ce que vous en faites.',
          },
          {
            h3: 'Savoir ce qu\'est un type de courrier avant qu\'il n\'arrive',
            body: 'Les pages de référence se suffisent à elles-mêmes. Cherchez ce qu\'est un Bußgeldbescheid ou une Section 8 notice britannique, qui l\'envoie et ce qui suit d\'habitude, avec la source officielle et la date de la dernière vérification.',
          },
        ],
      },
      faq: {
        h2: 'Les questions qu\'on nous pose',
        items: [
          {
            q: 'Est-ce un conseil juridique ou fiscal ?',
            a: 'Non, et ça ne le deviendra pas. L\'outil explique ce qu\'un document dit, qui l\'envoie, pour quand il demande quelque chose et ce que c\'est. Ce que vous devriez faire — payer, contester, faire appel, ignorer, appeler quelqu\'un — dépend de votre situation et c\'est précisément la question à laquelle nous ne répondons pas. Pour cela, il y a un avocat, un conseiller fiscal ou les services de conseil gratuits que la plupart des pays proposent.',
          },
          {
            q: 'Dans quelles langues lit-il et répond-il ?',
            a: 'Le courrier peut être dans n\'importe quelle langue couverte par la bibliothèque de référence ; la réponse arrive en anglais, russe, allemand, espagnol, français ou portugais — choisissez celle dans laquelle vous pensez. Quand le moteur doute d\'un passage, il le dit, au lieu de lisser le doute.',
          },
          {
            q: 'Mon courrier est-il conservé ?',
            a: 'Non. Il est lu sur un serveur pour produire votre réponse et supprimé à l\'instant où la réponse existe. Il n\'est pas enregistré, n\'est rattaché à aucun compte, n\'est montré à personne au studio et ne sert jamais à entraîner un modèle. Quand vous fermez l\'onglet, le courrier a déjà disparu de notre côté.',
          },
          {
            q: 'Combien ça coûte ?',
            a: 'Les pages de référence sont gratuites et sans limite, et votre première lecture aussi. Ensuite, un pass courrier coûte 5 $ et couvre trois lectures sur trente jours — assez pour le courrier, la réponse et celui qui suit. Chaque lecture représente deux passes complètes sur nos machines, c\'est pourquoi elle n\'est pas gratuite indéfiniment.',
          },
          {
            q: 'Quelle est sa fiabilité ?',
            a: 'Chaque affirmation que vous voyez a survécu à une seconde lecture dont le seul rôle était de la réfuter, et ce qui n\'a pas pu être ancré dans la page a été retiré ou signalé. C\'est bien plus fiable qu\'un résumé en une passe, sans être infaillible : une photo floue, une deuxième page manquante ou un type de courrier rare peuvent laisser des lacunes. Quand le moteur devine une date, il le dit.',
          },
          {
            q: 'Et si le délai est déjà passé ?',
            a: 'Il vous le dira franchement, avec la date qu\'il a déduite et la manière dont il l\'a déduite, au lieu de le cacher. Ce que signifie un délai dépassé et ce qu\'il reste à faire est une question sur votre situation — c\'est là que l\'outil s\'arrête et qu\'un conseiller humain commence.',
          },
          {
            q: 'Quels pays sont couverts ?',
            a: 'La bibliothèque de référence couvre environ quatre-vingt-dix types de courriers officiels d\'Allemagne, d\'Espagne, des États-Unis, du Royaume-Uni et de Russie, chacun confronté aux publications de l\'administration émettrice et daté. Le lecteur fonctionne le mieux sur les courriers de ces cinq pays, parce que la passe de vérification dispose alors d\'un type connu à confronter.',
          },
        ],
      },
      cta: {
        title: 'Ouvrir What\'s This Letter',
        body: 'Photographiez l\'enveloppe que vous évitez depuis des jours. Dans une minute, vous saurez ce que c\'est et pour quand il faut répondre.',
        button: 'Lire un courrier',
      },
    },
  },

  products: {
    relocating: {
      name: 'Relocating',
      tagline: 'Changer de pays, sans deviner.',
      blurb: 'Des données ouvertes transformées en 33 calculateurs côté client, des corridors pays programmatiques et une communauté live modérée — répliquée en 22 langues par son propre pipeline de traduction.',
    },
    frontdesk: {
      name: 'FrontDesk',
      tagline: 'Le prix de référence.',
      blurb: 'Un registre public de ce que les choses coûtent vraiment : chaque prix sourcé, daté et défendu par un vérificateur adversarial, avec un historique chaîné par hash impossible à réécrire en silence.',
    },
  },
}
