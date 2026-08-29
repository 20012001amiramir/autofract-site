/**
 * Spanish copy for /tools and /tools/<slug>.
 *
 * Neutral international Spanish. Mirror content/tools/en.ts key for key;
 * the shape is enforced by tests/unit/tools.spec.ts.
 */

import type { ToolsContent } from './en'

export const toolsEs: ToolsContent = {
  hub: {
    meta: {
      title: 'Herramientas gratuitas — Autofract',
      description: 'Cuatro herramientas de Autofract: revisor de contratos, planificador entre zonas horarias, calculadoras de costos ocultos y lector de cartas oficiales.',
    },
    kicker: 'Herramientas',
    h1: 'Herra­mientas pequeñas, hechas como se debe.',
    lede: 'El estudio construye sistemas grandes para sus clientes. Estas son las cosas pequeñas que construimos para nosotros mismos y luego regalamos, porque mantenerlas vivas no nos cuesta casi nada.',
    intro: [
      'Cada herramienta de aquí empezó siendo una molestia interna: un contrato que nadie tenía tiempo de leer, una reunión que a alguien le caía siempre a las 22:00, un costo recurrente que jamás aparecía en ninguna factura. Construimos la cosa más pequeña capaz de responder a la pregunta y después la conservamos.',
      'Ninguna te pide una cuenta. Tres no te venden nada; la cuarta te regala una lectura y luego pide cinco dólares por un pase, porque leer una carta como es debido nos cuesta dinero real. Se ejecutan en tu navegador o en nuestras máquinas, y están construidas con la misma doctrina que las plataformas de abajo: verifica antes de publicar, enseña tu trabajo, nunca inventes un dato que no puedas señalar con el dedo.',
    ],
    toolsHeading: 'Herramientas gratuitas',
    toolsSub: 'Abre una, úsala, cierra la pestaña. Sin registro, sin prueba gratuita, sin anuncios.',
    productsHeading: 'Productos',
    productsSub: 'Sistemas más grandes que el estudio diseñó, construyó y sigue operando.',
    faq: {
      h2: 'Preguntas que nos hacen',
      items: [
        {
          q: '¿De verdad son gratuitas?',
          a: 'Tres de las cuatro, sí: sin cuenta, sin prueba gratuita, sin tarjeta, sin límite de uso y sin anuncios. Dos hacen todo su trabajo dentro de tu navegador, así que servirlas no nos cuesta casi nada; Redline corre en nuestras máquinas y la pagamos nosotros porque nos consigue más atención de la que nos daría un anuncio. What\'s This Letter es la excepción: sus páginas de referencia y tu primera lectura son gratis, y las siguientes son un pase de 5 $, porque cada una nos cuesta dinero real.',
        },
        {
          q: '¿Necesito registrarme?',
          a: 'No. No hay nada que registrar ni nada que instalar. Cada herramienta se abre directamente lista para usar y, cuando una herramienta tiene estado que guardar, ese estado vive en la URL: copias el enlace y ya has guardado tu trabajo.',
        },
        {
          q: '¿Qué pasa con lo que escribo?',
          a: 'Overlap y Cost Of nunca envían tus datos a ninguna parte: el tablero y el recibo se codifican en la barra de direcciones y los calcula tu propio navegador. Redline y What\'s This Letter sí tienen que leer tu documento en un servidor para analizarlo. Redline guarda tu informe detrás de su propio enlace; What\'s This Letter descarta la carta en el momento en que existe tu respuesta — nunca se guarda ni se usa para entrenar nada. En ambos casos, trátalas como cualquier herramienta en línea y no pegues material que no tengas permitido compartir.',
        },
        {
          q: '¿Me rastrean?',
          a: 'Contamos las visitas con una analítica sin cookies y respetuosa con la privacidad, que no guarda datos personales y no sigue a nadie de un sitio a otro. Eso es todo: ningún píxel publicitario, ninguna grabación de sesión, ningún perfil.',
        },
        {
          q: '¿Puedo usarlas en el trabajo?',
          a: 'Sí, también con fines comerciales. Hay equipos que usan el planificador de reuniones para sus reuniones diarias entre continentes y las calculadoras para defender un presupuesto. Redline es una primera lectura de un contrato y What\'s This Letter una explicación de una carta oficial: ninguna de las dos es asesoramiento legal o fiscal, así que toma su resultado como una lista de control para tu abogado y no como un sustituto.',
        },
        {
          q: '¿Por qué un estudio regala herramientas?',
          a: 'Por dos razones honestas. Son campos de pruebas: la verificación adversaria de Redline y las puertas de datos en tiempo de compilación de nuestras plataformas grandes son la misma doctrina a distinta escala. Y presentan el estudio mejor de lo que lo hace una página de portafolio: puedes ver cómo construimos antes siquiera de hablar con nosotros.',
        },
        {
          q: '¿Seguirán aquí el año que viene?',
          a: 'Esa es la intención. Son estáticas o casi estáticas por diseño, que es justo lo que las hace baratas de mantener vivas: no hay base de datos que migrar, ni suscripción que financiar, ni tiempo de ejecución al que hacer de niñera. Si alguna llega a cerrar, su página lo dirá en vez de desaparecer en silencio.',
        },
        {
          q: '¿Puedo proponer una herramienta?',
          a: 'Por favor, hazlo. Las mejores ideas hasta ahora vinieron de alguien describiendo una hoja de cálculo que rehace cada mes. Escribe a info@autofract.com y cuéntanos qué sigues haciendo a mano.',
        },
      ],
    },
    cta: {
      title: '¿Necesitas algo así a tu escala?',
      body: 'El mismo estudio construye la versión grande: agentes, cadenas y plataformas que funcionan solas. Presupuesto cerrado tras 48 horas de análisis de alcance.',
      button: 'Contratar al estudio',
    },
  },

  tools: {
    redline: {
      name: 'Redline',
      tagline: 'La letra pequeña, descifrada.',
      category: 'Contratos',
      meta: {
        title: 'Revisor de contratos y letra pequeña — Redline',
        description: 'Revisor de contratos gratuito: pega un contrato, arrendamiento o términos de servicio y recibe una lista ordenada de trampas anclada a su cláusula exacta.',
      },
      h1: 'Lee la letra pequeña, rápido.',
      lede: 'Redline lee un contrato como lo leería un abogado desconfiado: busca las cláusulas que te van a costar dinero más adelante, cita cada una palabra por palabra y explica en lenguaje llano lo que en realidad te hace.',
      what: {
        h2: 'Qué hace',
        body: [
          'Le das un documento —texto pegado, un PDF con capa de texto real o un enlace público— y te devuelve una lista ordenada de trampas. Renovación automática de la que no puedes salir a tiempo. Cambios unilaterales de precio o de condiciones. Cláusulas de arbitraje y de jurisdicción que deciden dónde tendrías que pelear. Indemnizaciones que te endosan la responsabilidad de otro. Deducciones sobre el depósito, recargos por mora y plazos de preaviso medidos en la unidad menos conveniente disponible.',
          'Cada señal queda anclada a la cláusula literal de la que sale, con los propios caracteres del documento: nada de paráfrasis, nada de reconstrucciones. Puedes ver la frase, su lugar en el documento, por qué importa y qué aspecto tiene una versión normal de esa cláusula.',
          'El informe muestra además su propio rastro de auditoría: cuántas señales candidatas se propusieron, cuántas se bloquearon porque la cita no aparecía en el documento, cuántas refutó un segundo revisor y cuántas bajaron de la gravedad que se les asignó al principio. Te dice en qué se equivocó la máquina, no solo en qué acertó.',
        ],
      },
      why: {
        h2: 'Por qué la letra pequeña sigue ganando',
        body: [
          'Nadie lee los términos de servicio, y todo el mundo sabe que nadie los lee, que es precisamente por lo que las cláusulas caras viven ahí. Un contrato de suscripción lo escribe gente pagada para proteger uno de los dos lados, y te lo encuentras en el peor momento posible: al final de un proceso de contratación, el día de la mudanza, una hora antes de un lanzamiento.',
          'Leer en diagonal no sirve, porque las cláusulas peligrosas no parecen peligrosas. Son gramaticalmente aburridas, están enterradas en un subapartado numerado y remiten a una definición cuatro páginas antes. El daño lo hace un «conforme al apartado 12.3», no las mayúsculas.',
          'Para un contrato serio la respuesta correcta es un abogado, y Redline nunca fingirá lo contrario. Pero tú no le mandas a un abogado un SaaS de 9 € al mes, una cuota de gimnasio o la visita a un apartamento que tienes que responder esta noche. Para eso, la alternativa realista a una lectura automática es no leer nada.',
        ],
      },
      how: {
        h2: 'Cómo funciona',
        steps: [
          {
            h3: 'Divide el documento por su propia numeración',
            body: 'Antes de analizar nada, el texto se segmenta siguiendo la estructura que el documento ya tiene: 4.2, §7, artículo 3, ¶12. Por eso cada señal posterior apunta a un lugar real de una sección real, que es lo que hace comprobables las citas.',
          },
          {
            h3: 'Una primera pasada propone candidatas contra una taxonomía de trampas',
            body: 'El modelo no divaga sobre «lenguaje arriesgado». Trabaja contra una taxonomía curada de las trampas que de verdad se repiten en los contratos de consumo y de empresa, cada una con una gravedad y una probabilidad conocidas, y propone las candidatas que encajan.',
          },
          {
            h3: 'Una puerta de citas descarta todo lo que no puede demostrar',
            body: 'Este paso es determinista, no es un modelo: una candidata sobrevive solo si su cita existe en el texto de origen. Después, los propios caracteres del documento sustituyen a la versión que el modelo dio de la cita. Una señal que no puede señalar una frase de tu documento nunca llega hasta ti.',
          },
          {
            h3: 'Un segundo revisor independiente intenta refutarla',
            body: 'Lo que sobrevive a la puerta pasa a una lectura nueva que recorre el mismo documento con el encargo contrario: confirmarla, calificarla de exagerada o refutarla por completo. Las señales sin pruebas se descartan y las exageradas pierden gravedad; el informe muestra ambos recuentos.',
          },
          {
            h3: 'Lo que queda se ordena por lo que te cuesta',
            body: 'El orden final combina la gravedad del tipo de cláusula, la probabilidad real de que esa trampa te muerda y la confianza del verificador. Lees de arriba abajo y paras cuando se te acaba lo que está en juego, no cuando se te acaba la paciencia.',
          },
        ],
      },
      useCases: {
        h2: 'Cuándo pasarlo',
        items: [
          {
            h3: 'Antes de que un equipo adopte una nueva herramienta SaaS',
            body: 'Alguien tiene que leer las condiciones antes de que cincuenta compañeros metan ahí datos de la empresa. Pega el contrato y obtienes en una sola pasada la ventana de renovación automática, las cláusulas de datos y de responsabilidad y el lenguaje de cambio unilateral, a tiempo para decidir.',
          },
          {
            h3: 'Un contrato de arrendamiento que hay que responder hoy',
            body: 'En los arrendamientos se esconden los plazos de preaviso, las deducciones sobre el depósito, las obligaciones de reparación y las prórrogas automáticas. Leer una lista de señales antes de la visita es mejor que descubrir la cláusula el día que intentas irte.',
          },
          {
            h3: 'Contratos de freelance y de prestación de servicios',
            body: 'Condiciones de pago, cesión de propiedad intelectual, no captación, revisiones ilimitadas, indemnización: las cláusulas que deciden si una buena tarifa es de verdad un buen trato. Pasa el borrador antes de hacer tu contrapropuesta.',
          },
          {
            h3: 'Préstamos, seguros y cualquier cosa con un calendario',
            body: 'Comisiones que solo aparecen si amortizas antes de tiempo, exclusiones que quitan discretamente la razón por la que contrataste la póliza, definiciones que estrechan lo que cuenta como siniestro cubierto. Son exactamente las cláusulas que premian una lectura lenta y desconfiada.',
          },
          {
            h3: 'Una segunda opinión sobre un contrato que ya leíste',
            body: 'Lo repasaste tú y te pareció correcto. Diez minutos de lectura automática o bien lo confirman con un rastro de auditoría, o bien te enseñan el subapartado que leíste en diagonal a las tres de la mañana.',
          },
        ],
      },
      faq: {
        h2: 'Preguntas que nos hacen',
        items: [
          {
            q: '¿Esto es asesoramiento legal?',
            a: 'No, y no puede serlo. Redline es una primera lectura rápida y estructurada que te dice qué cláusulas merecen ojos humanos. Para cualquier cosa con dinero o responsabilidad de verdad detrás, lleva la lista de señales a un abogado: le sacarás mejor partido a su hora por llevarla.',
          },
          {
            q: '¿Qué puedo darle?',
            a: 'Texto pegado, un PDF que contenga una capa de texto real o una URL pública que la herramienta pueda descargar. Una fotografía escaneada de un contrato no tiene texto que leer, así que pásala antes por un OCR o pega tú mismo el texto.',
          },
          {
            q: '¿Cómo sé que no se inventa cláusulas?',
            a: 'Porque una señal sin cita literal se borra antes de que llegues a verla. La puerta de citas comprueba que el texto citado aparece de verdad en tu documento y después sustituye por los caracteres propios del documento. Esa comprobación es código corriente, no un modelo decidiendo si confiar en sí mismo.',
          },
          {
            q: '¿Lo encuentra todo?',
            a: 'No, y está construido para fallar hacia el lado seguro. Dos pasadas y una puerta de citas significan que una trampa real puede caerse de vez en cuando por falta de pruebas; la alternativa —una lista rotunda de trampas que no están en tu documento— es mucho más peligrosa. Léelo como una lista ordenada de problemas probables, no como un certificado.',
          },
          {
            q: '¿Qué idiomas lee?',
            a: 'Documentos en inglés y en ruso, incluidas las convenciones de numeración de cada uno: apartados, marcas de párrafo, artículos. Las explicaciones vuelven en lenguaje llano y no en la jerga jurídica que describen.',
          },
          {
            q: '¿Qué pasa con mi documento?',
            a: 'Se procesa para generar tu informe, que vive detrás de su propio enlace. No publicamos, no vendemos ni revendemos lo que nos envías. Trátalo como cualquier herramienta en línea: no pegues material que tengas contractualmente prohibido compartir.',
          },
          {
            q: '¿Cuánto tarda un análisis?',
            a: 'Normalmente un par de minutos para un contrato corriente, porque dos pasadas independientes leen el documento entero en vez de mirar por encima la primera página. Los contratos largos tardan más; el progreso se ve mientras trabaja.',
          },
          {
            q: '¿Es gratis?',
            a: 'El análisis es gratuito y no necesita cuenta. A nosotros nos cuesta dinero real por documento, y es un intercambio deliberado: es la demostración más convincente de cómo construye el estudio que podíamos poner en internet.',
          },
        ],
      },
      cta: {
        title: 'Abrir Redline',
        body: 'Pega ese contrato que llevas semanas queriendo leer. Dos minutos, sin cuenta, y sabrás qué tres cláusulas importan.',
        button: 'Revisar un contrato',
      },
    },

    overlap: {
      name: 'Overlap',
      tagline: 'La hora que le sirve a todos.',
      category: 'Reuniones',
      meta: {
        title: 'Planificador de reuniones entre zonas horarias — Overlap',
        description: 'Pon a varias personas en un mismo tablero, mira cuándo están despiertas y trabajando, obtén las mejores franjas de una hora y comparte todo como enlace.',
      },
      h1: 'Deja de hacer cuentas con las zonas horarias.',
      lede: 'Overlap pone el día de varias personas en una misma línea para que veas —no calcules— las horas en que una reunión puede ocurrir de verdad, y quién la paga cuando ninguna de ellas es buena.',
      what: {
        h2: 'Qué hace',
        body: [
          'Añade personas por ciudad, por zona horaria o por un desfase simple. Cada una se convierte en una banda horizontal con su propio día local: gris mientras duerme, ámbar mientras está despierta pero fuera del horario, verde dentro de su jornada laboral. Las columnas donde las bandas coinciden son tu reunión.',
          'El horario laboral pertenece a la persona, no al tablero. Un programador que empieza a las 11:00 y un cliente que termina a las 16:00 conservan su día real, y la respuesta cambia en consecuencia.',
          'Debajo, las franjas de una hora aparecen ordenadas: cuánta gente está trabajando, cuánta está simplemente despierta y —cuando a nadie le puede salir fácil— quién exactamente tiene que ceder. Cualquier franja se exporta a un archivo de calendario, y el tablero entero es un enlace que puedes enviar.',
        ],
      },
      why: {
        h2: 'Por qué fallan los métodos de siempre',
        body: [
          'El cálculo mental funciona con dos ciudades que conoces. Se desmorona con cuatro que no conoces, y se rompe del todo en las dos semanas de cada primavera y cada otoño en que un país ya cambió la hora y el otro todavía no.',
          'Un reloj mundial te dice qué hora es en algún sitio. No te dice si esa persona está dormida, cenando o tres horas metida en su jornada, que era lo único que de verdad necesitabas saber.',
          'Una encuesta de disponibilidad traslada la conversión a todos los demás y luego bloquea la reserva hasta que responde el más lento. Eso es exactamente el trabajo que querías evitar, solo que repartido.',
          'Y la versión educada del problema es invisible: las 08:00 en Berlín son una hora corriente para alguien de Berlín y una hora cruel para alguien en Los Ángeles. Nadie se da cuenta hasta que la invitación ya salió.',
        ],
      },
      how: {
        h2: 'Cómo funciona',
        steps: [
          {
            h3: 'Los desfases salen del navegador, no de una tabla',
            body: 'Cada conversión pasa por la API estándar Intl y por la propia base de datos de zonas horarias IANA del navegador. No hay ninguna lista de desfases nuestra que se quede vieja: si el navegador sabe que un país cambió sus reglas, el tablero también.',
          },
          {
            h3: 'El horario de verano se resuelve por persona y por fecha',
            body: 'Elige una fecha de finales de marzo o de finales de octubre y el tablero cambia literalmente de longitud —46 columnas de media hora el día que pierde una hora, 50 el día que la repite— porque cada fila se calcula a partir del instante real y no de un desfase fijo.',
          },
          {
            h3: 'Las columnas miden media hora',
            body: 'Las zonas a :30 y a :45 —India, Nepal, las islas Chatham— encajan con honestidad en vez de redondearse a la hora más cercana, que es justo el redondeo que produce reuniones a las que nadie puede asistir.',
          },
          {
            h3: 'Las franjas se puntúan, no se adivinan',
            body: 'Estar trabajando cuenta entero, estar despierto cerca del horario laboral cuenta a medias, estar dormido descalifica la franja del todo. Las candidatas se mantienen separadas al menos dos horas para que las sugerencias sean opciones realmente distintas, y a cada persona se le marca si le queda temprano, tarde o fuera de horario.',
          },
          {
            h3: 'El enlace es el documento',
            body: 'Personas, nombres, horarios laborales, fecha y ancla van codificados en la URL. No se sube nada y no hay cuenta: compartir un tablero es compartir un enlace, y quien lo abre ve exactamente lo mismo que viste tú.',
          },
        ],
      },
      useCases: {
        h2: 'Cuándo usarlo',
        items: [
          {
            h3: 'La reunión diaria de un equipo en tres continentes',
            body: 'Averigua si existe siquiera una hora dentro de la jornada de todos y, cuando no existe, quién la está pagando, para que ese costo se pueda rotar en vez de asignárselo en silencio a quien menos protesta.',
          },
          {
            h3: 'Entrevistar candidatos en el extranjero',
            body: 'La hora que propones se lee como una señal sobre la empresa. Pon la ciudad de la persona candidata, mira las columnas verdes y evita pedirle que rinda a las 22:00 en un día laborable.',
          },
          {
            h3: 'Llamadas con clientes y agencias',
            body: 'Rara vez conoces la jornada real de un cliente nuevo. Configúrala una vez, mándale el tablero y deja que contraproponga desde la misma imagen, en lugar de estar dos días intercambiando «¿te va bien a las 15:00 tu hora?».',
          },
          {
            h3: 'Trabajar en dos mercados a la vez',
            body: 'Un contrato en Berlín y otro en Singapur. Pon los dos en el tablero con tu propia fila en medio y comprueba, antes de prometer nada, cuántas horas de solapamiento real tiene de verdad tu día.',
          },
          {
            h3: 'Llamar a la familia en otro país',
            body: 'Aquí la banda útil es la gris: te dice cuándo una llamada despertaría a alguien, y la banda ámbar te dice cuándo está despierto pero preferiría estar cenando.',
          },
        ],
      },
      faq: {
        h2: 'Preguntas que nos hacen',
        items: [
          {
            q: '¿Necesito una cuenta?',
            a: 'No. No hay nada que registrar ni nada que instalar. Abre la página, añade personas y manda el enlace.',
          },
          {
            q: '¿Adónde van mis datos?',
            a: 'A ninguna parte. Las personas que añades van codificadas en la URL de tu barra de direcciones y todos los cálculos ocurren en tu navegador. Los equipos guardados usan el almacenamiento del propio navegador y se quedan en ese dispositivo.',
          },
          {
            q: '¿Tiene en cuenta el horario de verano?',
            a: 'Sí, por persona y por fecha. Un día de cambio de hora el tablero es literalmente de otra longitud, porque cada fila se deriva del instante real y no de un desfase guardado.',
          },
          {
            q: 'Mi ciudad no está en la lista.',
            a: 'Escribe la zona IANA en su lugar —Europe/Berlin, Asia/Kolkata, America/Sao_Paulo— o un desfase simple como UTC+3 o +05:45. Las dos formas funcionan siempre, incluso para lugares que el índice de ciudades no cubre.',
          },
          {
            q: '¿Cuántas personas caben en un tablero?',
            a: 'Hasta doce. Más allá de eso las bandas dejan de ser legibles y, en la práctica, una reunión que abarca más de doce zonas horarias necesita una grabación y no un hueco en la agenda.',
          },
          {
            q: '¿Cada persona puede tener su propio horario?',
            a: 'Sí, incluidos los horarios que cruzan la medianoche para los turnos de noche. Viajan en el enlace junto con todo lo demás.',
          },
          {
            q: '¿Y si no hay ninguna hora en la que todos estén despiertos?',
            a: 'Lo dice sin rodeos en vez de inventarse una columna verde, y luego ofrece la hora menos mala y nombra a quien estaría durmiendo. Una vista de rotación justa ayuda a repartir ese costo dentro del equipo a lo largo de varias semanas.',
          },
          {
            q: '¿Funciona en el teléfono?',
            a: 'Sí. El tablero se desplaza dentro de su propio marco, las filas siguen siendo legibles en anchos pequeños, y el modo claro y el oscuro siguen la configuración de tu sistema.',
          },
        ],
      },
      cta: {
        title: 'Abrir Overlap',
        body: 'Añade dos personas y esa ciudad que siempre calculas mal. Quince segundos bastan para ver si existe una buena hora.',
        button: 'Buscar hora de reunión',
      },
    },

    costof: {
      name: 'Cost Of',
      tagline: 'Lo que cuestan las cosas de verdad.',
      category: 'Calculadoras',
      meta: {
        title: 'Calculadoras de costos ocultos — Cost Of',
        description: 'Calculadoras gratuitas que convierten reuniones recurrentes, suscripciones sin usar, interrupciones o una hora de caída en una cifra que puedes compartir.',
      },
      h1: 'Los costos que nadie factura.',
      lede: 'Una reunión semanal, una suscripción olvidada, una interrupción, una contratación fallida, una hora de caída: Cost Of convierte cada una en una sola cifra dentro de un recibo que puedes mandarle a quien decide.',
      what: {
        h2: 'Qué hace',
        body: [
          'Cada calculadora pide los pocos datos que de verdad mueven la cifra —cuánta gente, con qué nivel, durante cuánto tiempo, con qué frecuencia— y devuelve un número con la aritmética a la vista debajo. Sin paneles, sin registro, sin un asistente de catorce pasos.',
          'Los salarios no hay que adivinarlos. Los valores predefinidos cubren quince países y diez puestos con la mediana del salario bruto en moneda local, y todos son editables: usa el predefinido para arrancar la conversación y sustitúyelo por tus cifras reales antes de llevarlo a una reunión.',
          'El resultado es un recibo. Cópialo como enlace, guárdalo como imagen o abre una tarjeta para compartir cuya vista previa ya lleva la cifra dentro, que suele ser lo que zanja el asunto en un hilo de chat sin que nadie tenga que hacer clic.',
        ],
      },
      why: {
        h2: 'Por qué estos costos siguen siendo invisibles',
        body: [
          'Nadie emite una factura por una reunión recurrente. No tiene línea de gasto, ni responsable, ni fecha de renovación, así que jamás aparece en la revisión de presupuesto que sí mata una herramienta de 40 € al mes, aunque consuma veinte veces más dinero cada año.',
          'La moneda es el tiempo, y el tiempo se denomina en salarios, que es justo lo que a la gente le incomoda decir en voz alta. En cuanto una hora de sala se convierte en un importe, la discusión pasa de «esta reunión se hace larga» a una cifra sobre la que quien lleva el calendario puede actuar.',
          'La misma ceguera cubre todo lo que tiene un costo difuso: suscripciones que nadie cancela porque cada una es pequeña, interrupciones que cuestan mucho más que el minuto que duran, una contratación que no sale bien y se come en silencio un trimestre del año de un equipo.',
          'Ninguna de estas cifras necesita ser exacta para ser útil. Un orden de magnitud, con los supuestos visibles y editables, basta para tomar una decisión que antes se tomaba por intuición.',
        ],
      },
      how: {
        h2: 'Cómo funciona',
        steps: [
          {
            h3: 'Un modelo puro por calculadora',
            body: 'Cada calculadora es un modelo pequeño y autocontenido con sus datos de entrada, su fórmula y su presentación separados. Por eso se te puede enseñar la aritmética entera: detrás de la cifra no hay nada más que la cifra.',
          },
          {
            h3: 'Salarios predefinidos que puedes contradecir',
            body: 'Quince países por diez puestos, con la mediana del salario bruto en la moneda local y las fuentes guardadas junto a los datos. Son un punto de partida, no una autoridad: todos los campos son editables y tu cambio viaja con el resultado.',
          },
          {
            h3: 'El enlace es el documento',
            body: 'Los datos de entrada van codificados en la URL. No se guarda nada en ningún servidor, no hay cuenta, y mandarle a alguien tu escenario es mandarle un enlace que reabre exactamente las cifras que usaste.',
          },
          {
            h3: 'Un recibo hecho para reenviarse',
            body: 'La salida tiene deliberadamente la forma de algo que puedes pegar en un hilo: una cifra destacada, los supuestos debajo y una tarjeta para compartir cuya vista previa enseña el número antes de que nadie abra el enlace.',
          },
        ],
      },
      useCases: {
        h2: 'Cuándo usarlo',
        items: [
          {
            h3: 'Eliminar o acortar una reunión recurrente',
            body: 'Ocho personas, una hora, cada semana. Pon la cifra anual al lado del orden del día y la conversación sobre si eso debería ser un resumen escrito se vuelve muy corta.',
          },
          {
            h3: 'La limpieza anual de suscripciones',
            body: 'Cada suscripción parece asequible por separado. Sumadas, y con las licencias que nadie usa, el conjunto suele dar una cifra que paga eso que el equipo lleva todo el año pidiendo.',
          },
          {
            h3: 'Defender el tiempo de concentración',
            body: 'El costo de una interrupción no es lo que dura la interrupción. Enseña lo que cuesta de verdad un día fragmentado y «nada de reuniones antes del mediodía» deja de sonar a preferencia personal.',
          },
          {
            h3: 'Argumentar una contratación más',
            body: 'Compara el costo de una contratación equivocada con el costo de dejar la vacante abierta. Las dos cifras incomodan, y tener las dos es lo que hace defendible la decisión.',
          },
          {
            h3: 'Justificar el trabajo de fiabilidad',
            body: 'Una hora de caída tiene un precio en ingresos perdidos y en las personas que dejan lo que estaban haciendo. Esa cifra es lo que convierte «habría que arreglar el pipeline de despliegue» en un trabajo con presupuesto.',
          },
        ],
      },
      faq: {
        h2: 'Preguntas que nos hacen',
        items: [
          {
            q: '¿Es gratis?',
            a: 'Sí: todas las calculadoras, sin cuenta, sin límites y sin anuncios. Funciona íntegramente en tu navegador, que es justo lo que le permite seguir siendo gratuita.',
          },
          {
            q: '¿De dónde salen las cifras de salarios?',
            a: 'De medianas de salario bruto publicadas por país y por puesto, guardadas junto a sus fuentes y en moneda local. Son valores predefinidos para una primera pasada, y todos se pueden sustituir por tus cifras reales.',
          },
          {
            q: '¿Mis datos se envían a alguna parte?',
            a: 'No. Van codificados en la URL y se calculan en tu navegador. Las visitas se cuentan con una analítica sin cookies que no registra datos personales ni datos de entrada.',
          },
          {
            q: '¿Qué precisión tiene esto?',
            a: 'La de tus datos de entrada, y te enseña la aritmética para que puedas juzgarlo. La idea no es una cifra exacta hasta el cuarto dígito, sino un orden de magnitud defendible con los supuestos encima de la mesa.',
          },
          {
            q: '¿Puedo compartir un resultado?',
            a: 'Está diseñado para eso. Copia el enlace, guarda un PNG del recibo o pega la tarjeta para compartir en un chat donde la vista previa ya enseñe la cifra.',
          },
          {
            q: '¿Puedo usar mi propia moneda?',
            a: 'Sí. Los valores por país fijan un valor por defecto razonable y puedes cambiar tanto los importes como la moneda; el recibo se formatea en consecuencia.',
          },
          {
            q: '¿Qué calculadoras hay?',
            a: 'La reunión recurrente, el conjunto de suscripciones SaaS, el cambio de contexto, una contratación fallida y las caídas de servicio: los costos que más aparecen en las discusiones que la gente tiene de verdad en el trabajo.',
          },
          {
            q: '¿Van a añadir más?',
            a: 'Cuando una pregunta real se repite, sí. Si rehaces la misma hoja de cálculo cada trimestre, descríbenosla y quizá se convierta en la siguiente.',
          },
        ],
      },
      cta: {
        title: 'Abrir Cost Of',
        body: 'Elige esa reunión que siempre termina sin una decisión. Se tarda alrededor de un minuto en saber lo que cuesta al año.',
        button: 'Usar una calculadora',
      },
    },

    whatsthisletter: {
      name: 'What\'s This Letter',
      tagline: 'La carta oficial, explicada.',
      category: 'Cartas',
      meta: {
        title: 'Entender una carta oficial — What\'s This Letter',
        description: 'Sube la foto o el PDF de una carta de Hacienda, una multa o un juzgado en un idioma que apenas lees: qué es, quién la envía, el plazo exacto y qué pide.',
      },
      h1: 'Lo que dice la carta, en tu idioma.',
      lede: 'Un sobre de Hacienda, de un juzgado o de una empresa de cobros, en un idioma que lees a medias. What\'s This Letter lo lee dos veces, te dice qué es, quién lo envía y hasta cuándo tienes que actuar, y cita los pasajes que importan — traducidos y comprobados contra la propia página.',
      what: {
        h2: 'Qué hace',
        body: [
          'Fotografías la carta o subes el PDF. El motor la lee una vez para extraer lo que afirma — remitente, tipo de documento, números de expediente, importes, fechas — y luego una segunda vez con otra tarea: comprobar cada una de esas afirmaciones contra el propio documento. Lo que la segunda pasada no encuentra en la página se descarta antes de que lo veas.',
          'Lo que recibes es corto y está en tu idioma: qué clase de documento es, qué organismo o empresa lo envía, el plazo exacto como fecha de calendario y no como «en el plazo de 14 días desde la notificación», los pasajes clave en el original con la traducción al lado, y qué te pide el documento, en términos de trámite: paga esto, contesta antes de tal fecha, preséntate allí, envía tal formulario.',
          'Junto al lector hay una biblioteca de referencia: unos noventa tipos de notificación oficial de Alemania, España, Estados Unidos, el Reino Unido y Rusia — qué es cada uno, quién lo envía, qué suele venir después. Cada página está comprobada contra la fuente oficial y lleva la fecha de su última verificación, para que veas lo actualizada que está.',
        ],
      },
      why: {
        h2: 'Por qué la carta parece peor de lo que es',
        body: [
          'Una carta oficial en el extranjero asusta dos veces. Una porque está en un idioma que lees a media velocidad, y otra porque está escrita en lenguaje administrativo — el registro que hasta los nativos temen, donde nadie escribe «pague antes del viernes» pudiendo escribir «el importe referido en el apartado 2 será exigible en el plazo estipulado en el artículo 3.1».',
          'Una app de traducción arregla solo la primera mitad. Te da palabras, a menudo las palabras equivocadas para un término jurídico, y no sabe que un Mahnbescheid alemán no es una factura, que una «notice of assessment» no es una acusación, ni cuál de las cuatro fechas de la página es la que importa. Acabas con un párrafo fluido y el mismo nudo en el estómago.',
          'El costo de no saber es real y asimétrico. La mayoría de estas cartas son rutina y piden algo pequeño y concreto para una fecha concreta; el problema empieza cuando la fecha pasa porque la carta se quedó sin leer pegada en el refrigerador. Saber qué es, hoy, suele ser toda la diferencia.',
          'Hay una línea que no se cruza, y no se va a cruzar. What\'s This Letter explica lo que un documento dice y pide; nunca te dice qué hacer al respecto. Recurrir, pagar, apelar o llamar a un abogado es una decisión sobre tu situación, y eso ya es asesoramiento — algo que esta herramienta no da, en ningún idioma.',
        ],
      },
      how: {
        h2: 'Cómo funciona',
        steps: [
          {
            h3: 'El documento se lee, no se adivina',
            body: 'La foto de una hoja arrugada o un PDF escaneado se convierte primero en texto. Sellos, membretes, números de expediente y tablas se quedan en su sitio, porque un plazo en el pie de página o un importe en una tabla es justo lo que se pierde cuando se aplana una página en prosa.',
          },
          {
            h3: 'Una primera pasada extrae lo que la carta afirma',
            body: 'Remitente, tipo de documento, números de expediente, importes, fechas y exigencias pasan a un registro estructurado, cada uno emparejado con el pasaje del que sale. La pasada trabaja contra un catálogo de tipos de notificación conocidos, de modo que un requerimiento de la Agencia Tributaria o un Steuerbescheid alemán se reconoce en vez de describirse desde cero.',
          },
          {
            h3: 'Una segunda pasada verifica cada afirmación contra la página',
            body: 'Una lectura nueva del mismo documento toma el registro e intenta romperlo: ¿es de verdad ese el plazo?, ¿ese importe es el total o una línea?, ¿la carta exige un pago o solo comunica una resolución? Una afirmación que el verificador no puede anclar al documento se elimina o se marca como incierta — nunca se conserva en silencio.',
          },
          {
            h3: 'Los plazos se convierten en fechas',
            body: 'Las cartas cuentan en «días hábiles desde la notificación», «un mes a contar desde la recepción», «el plazo del artículo 70». El motor lo resuelve contra las fechas impresas en la carta y te dice qué ha supuesto — incluso cuando la suposición es una conjetura, para que sepas qué línea comprobar.',
          },
          {
            h3: 'No se guarda nada',
            body: 'La carta se procesa para producir tu lectura y se descarta en cuanto la respuesta está en tu pantalla. No se almacena, no se asocia a ninguna cuenta y nunca se usa para entrenar nada.',
          },
        ],
      },
      useCases: {
        h2: 'Cuándo usarla',
        items: [
          {
            h3: 'Una carta de Hacienda en el país al que te mudaste',
            body: 'La Agencia Tributaria, el Finanzamt, HMRC y el IRS escriben en un registro que nadie usaría al hablar. Averigua si esto es una liquidación, un requerimiento de documentación o un recordatorio — y cuál de las fechas es la de verdad.',
          },
          {
            h3: 'Una multa o una sanción',
            body: 'Estacionamiento, transporte público, radares, un registro presentado fuera de plazo. Suelen llevar una ventana corta en la que pagar sale más barato o todavía se puede recurrir; conocer la ventana vale más que conocer el importe.',
          },
          {
            h3: 'Una carta de un juzgado o de una empresa de cobros',
            body: 'El sobre que más asusta y aquel en el que la fecha más importa. Descubre si es una resolución judicial, un requerimiento de pago al que puedes oponerte o una reclamación de un cobrador, y qué dice exactamente el documento sobre lo que viene después.',
          },
          {
            h3: 'Algo dirigido a un familiar que no lee el idioma',
            body: 'Padres que se reunieron contigo en el extranjero, una pareja que todavía está aprendiendo. Léeselo en un minuto, en un idioma que tengan en común, y luego decidan juntos qué hacer con ella.',
          },
          {
            h3: 'Saber qué es un tipo de notificación antes de que llegue',
            body: 'Las páginas de referencia se sostienen solas. Consulta qué es un Bußgeldbescheid o una Section 8 notice británica, quién la envía y qué suele seguir, con la fuente oficial y la fecha de la última comprobación.',
          },
        ],
      },
      faq: {
        h2: 'Preguntas que nos hacen',
        items: [
          {
            q: '¿Es asesoramiento legal o fiscal?',
            a: 'No, y no va a serlo. La herramienta explica lo que dice un documento, quién lo envía, hasta cuándo pide algo y qué es ese algo. Qué deberías hacer al respecto — pagar, recurrir, apelar, ignorar, llamar a alguien — depende de tus circunstancias y es exactamente la pregunta que no respondemos. Para eso están un abogado, un asesor fiscal o los servicios de orientación gratuitos que existen en la mayoría de los países.',
          },
          {
            q: '¿En qué idiomas lee y responde?',
            a: 'La carta puede estar en cualquiera de los idiomas que cubre la biblioteca de referencia; la respuesta llega en inglés, ruso, alemán, español, francés o portugués — elige el idioma en el que piensas. Cuando el motor no está seguro de un pasaje, lo dice en vez de disimularlo.',
          },
          {
            q: '¿Se guarda mi carta?',
            a: 'No. Se lee en un servidor para producir tu respuesta y se descarta en el momento en que la respuesta existe. No se guarda, no se asocia a una cuenta, nadie del estudio la ve y nunca se usa para entrenar un modelo. Cuando cierras la pestaña, de nuestro lado la carta ya no existe.',
          },
          {
            q: '¿Cuánto cuesta?',
            a: 'Las páginas de referencia son gratuitas y sin límite, y tu primera lectura también. Después, un pase de cartas cuesta 5 $ y cubre tres lecturas en treinta días — suficiente para la carta, la respuesta y la que viene detrás. Cada lectura supone dos pasadas completas en nuestras máquinas, y por eso no puede ser gratis para siempre.',
          },
          {
            q: '¿Hasta qué punto es precisa?',
            a: 'Cada afirmación que ves ha sobrevivido a una segunda lectura cuyo único trabajo era refutarla, y lo que no pudo anclarse a la página se ha eliminado o marcado. Eso la hace mucho más fiable que un resumen de una sola pasada, y aun así no es infalible: una foto borrosa, una segunda página que falta o un tipo de notificación poco común pueden dejar huecos. Cuando el motor está adivinando una fecha, lo dice.',
          },
          {
            q: '¿Y si el plazo ya ha pasado?',
            a: 'Te lo dirá sin rodeos, con la fecha que ha deducido y cómo la ha deducido, en vez de esconderlo. Qué significa un plazo vencido y qué se puede hacer todavía es una pregunta sobre tu situación, y ahí termina la herramienta y empieza un asesor humano.',
          },
          {
            q: '¿Qué países cubre?',
            a: 'La biblioteca de referencia cubre unos noventa tipos de notificación oficial de Alemania, España, Estados Unidos, el Reino Unido y Rusia, cada uno comprobado contra las publicaciones del propio organismo emisor y fechado. El lector funciona mejor con cartas de esos cinco países, porque la pasada de verificación tiene un tipo conocido contra el que comprobar.',
          },
        ],
      },
      cta: {
        title: 'Abrir What\'s This Letter',
        body: 'Fotografía el sobre que llevas días evitando. En un minuto sabrás qué es y cuándo necesita una respuesta.',
        button: 'Leer una carta',
      },
    },
  },

  products: {
    relocating: {
      name: 'Relocating',
      tagline: 'Cambiar de país sin adivinar nada.',
      blurb: 'Datos abiertos convertidos en 33 calculadoras que corren en el navegador, corredores entre países generados de forma programática y una comunidad en vivo moderada, replicada a 22 idiomas por su propia cadena de traducción.',
    },
    frontdesk: {
      name: 'FrontDesk',
      tagline: 'El precio de referencia.',
      blurb: 'Un registro público de lo que cuestan las cosas de verdad: cada precio con su fuente, con su fecha y defendido por un verificador adversario, con un historial encadenado por hashes que no se puede reescribir en silencio.',
    },
  },
}
