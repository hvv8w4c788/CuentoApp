import type { Story } from './types';

export const storyB2_3: Story = {
  id: 'b2-3',
  level: 'B2',
  title: 'La Arquitecta',
  genre: 'Drama profesional',
  emoji: '🏛️',
  coverColor: '#2a1e14',
  accentColor: '#d4a060',
  description: 'Tu proyecto de vivienda social puede cambiar un barrio entero. Pero el camino está lleno de compromisos imposibles.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'El concurso',
      text: 'El Ayuntamiento de Sevilla convoca un concurso para diseñar 200 viviendas sociales en el barrio de Triana.\n\nTú, Elena Ruiz, llevas diez años en el sector privado diseñando hoteles de lujo. Este proyecto es diferente: quieres diseñar algo que sirva a quien lo necesita de verdad.\n\nTu estudio tiene tres personas. Los competidores son grandes corporaciones.',
      vocab: [
        { w: 'el Ayuntamiento', d: 'the City Council' },
        { w: 'la vivienda social', d: 'social housing' },
        { w: 'el concurso', d: 'the competition' },
        { w: 'el sector privado', d: 'the private sector' },
      ],
      choices: [
        { text: 'Presentarte al concurso con una propuesta radical', hint: 'Ambicioso', next: 'c2a' },
        { text: 'Asociarte con un estudio más grande para tener más recursos', hint: 'Estratégico', next: 'c2b' },
      ],
      quiz: { q: '¿Cuántas viviendas sociales hay que diseñar?', opts: ['Cien', 'Ciento cincuenta', 'Doscientas', 'Trescientas'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'La propuesta radical',
      text: 'Tu propuesta rompe con los bloques de vivienda tradicionales.\n\nPropones casas de dos y tres plantas agrupadas alrededor de patios comunes con huertos urbanos, zonas de juego y espacios de trabajo compartidos.\n\nEl precio por vivienda es un 15% más alto que el presupuesto del Ayuntamiento.',
      vocab: [
        { w: 'el patio', d: 'the courtyard' },
        { w: 'el huerto urbano', d: 'the urban garden' },
        { w: 'compartido', d: 'shared' },
        { w: 'el presupuesto', d: 'the budget' },
      ],
      choices: [
        { text: 'Presentar la propuesta tal cual y defender el sobrecoste', hint: 'Convicción', next: 'c3a' },
        { text: 'Ajustar el diseño para entrar en presupuesto', hint: 'Pragmático', next: 'c3b' },
      ],
      quiz: { q: '¿Cuánto más caro es el proyecto de Elena respecto al presupuesto?', opts: ['5%', '10%', '15%', '20%'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'La asociación',
      text: 'Te asocias con Martínez & Asociados, un estudio de cien personas con experiencia en concursos públicos.\n\nSin embargo, en las primeras reuniones notas que su visión es diferente: quieren maximizar unidades, no calidad de vida.\n\n"Los metros cuadrados son lo que cuenta en el pliego", dice el socio mayor.',
      vocab: [
        { w: 'el pliego', d: 'the tender document' },
        { w: 'el socio', d: 'the partner' },
        { w: 'maximizar', d: 'to maximise' },
        { w: 'la calidad de vida', d: 'the quality of life' },
      ],
      choices: [
        { text: 'Plantear tus diferencias abiertamente en el equipo', hint: 'Honesto', next: 'c3a' },
        { text: 'Aceptar el compromiso y trabajar desde dentro', hint: 'Pragmático', next: 'c3b' },
      ],
      quiz: { q: 'Según el socio mayor, ¿qué es lo que cuenta en el pliego?', opts: ['La calidad', 'Los metros cuadrados', 'Los patios', 'La eficiencia energética'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'La defensa del sobrecoste',
      text: 'En la presentación ante el jurado, defiendes tu propuesta con datos:\n\n"El sobrecoste del 15% se amortiza en ocho años por reducción de costes sanitarios, menor rotación de residentes y mayor cohesión social en el barrio."\n\nUno de los jurados, la arquitecta Carmen Vega, asiente levemente.',
      vocab: [
        { w: 'el jurado', d: 'the jury' },
        { w: 'amortizar', d: 'to amortise' },
        { w: 'la rotación', d: 'the turnover' },
        { w: 'la cohesión social', d: 'the social cohesion' },
      ],
      choices: [
        { text: 'Concentrarte en los datos económicos', hint: 'Racionalidad', next: 'c4a' },
        { text: 'Añadir testimonios de futuros residentes en la presentación', hint: 'Emocional', next: 'c4b' },
      ],
      quiz: { q: '¿En cuántos años se amortiza el sobrecoste según Elena?', opts: ['Cinco', 'Seis', 'Ocho', 'Diez'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'El ajuste del diseño',
      text: 'Eliminas los huertos urbanos y reduces los patios para bajar el coste.\n\nEl resultado es mejor que un bloque estándar, pero peor que tu visión original.\n\nTu socia Lucía te mira: "¿Estamos haciendo lo correcto?"\n\n"Estamos haciendo lo posible", respondes.',
      vocab: [
        { w: 'eliminar', d: 'to eliminate' },
        { w: 'reducir', d: 'to reduce' },
        { w: 'el estándar', d: 'the standard' },
        { w: 'la visión', d: 'the vision' },
      ],
      choices: [
        { text: 'Convencer a Lucía de que lo posible también importa', hint: 'Realista', next: 'c4a' },
        { text: 'Buscar financiación adicional para recuperar los elementos eliminados', hint: 'Creativo', next: 'c4b' },
      ],
      quiz: { q: '¿Quién pregunta si están haciendo lo correcto?', opts: ['El socio de Martínez', 'Carmen Vega', 'Lucía', 'El Ayuntamiento'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'El resultado del concurso',
      text: 'Ganáis el concurso.\n\nLa carta de resolución dice: "Propuesta ganadora por su innovación social y viabilidad económica a largo plazo."\n\nSin embargo, el Ayuntamiento establece una condición: reducir el número de patios comunes de ocho a cuatro.',
      vocab: [
        { w: 'la resolución', d: 'the resolution' },
        { w: 'la viabilidad', d: 'the viability' },
        { w: 'la condición', d: 'the condition' },
        { w: 'innovación', d: 'innovation' },
      ],
      choices: [
        { text: 'Aceptar la condición manteniendo los cuatro patios más grandes', hint: 'Adaptación', next: 'c5a' },
        { text: 'Negociar para mantener los ocho patios reduciendo su tamaño', hint: 'Negociación', next: 'c5b' },
      ],
      quiz: { q: '¿A cuántos patios quiere reducirlos el Ayuntamiento?', opts: ['Dos', 'Tres', 'Cuatro', 'Seis'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'La financiación adicional',
      text: 'Contactas con la Fundación Habitares, que financia innovación en vivienda social.\n\nAceptan cubrir el sobrecoste de los huertos y espacios comunitarios a cambio de que el proyecto sea un caso de estudio durante cinco años.\n\n¿Lo aceptas?',
      vocab: [
        { w: 'la fundación', d: 'the foundation' },
        { w: 'cubrir', d: 'to cover' },
        { w: 'el caso de estudio', d: 'the case study' },
        { w: 'comunitario', d: 'community' },
      ],
      choices: [
        { text: 'Aceptar la financiación de Habitares', hint: 'Los elementos vuelven', next: 'c5a' },
        { text: 'Rechazar por las implicaciones del caso de estudio', hint: 'Privacidad de los residentes', next: 'c5b' },
      ],
      quiz: { q: '¿Qué pide la Fundación Habitares a cambio de financiar?', opts: ['El 20% del proyecto', 'Que pongan su logo', 'Que sea un caso de estudio cinco años', 'Que enseñen las viviendas al público'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'La construcción empieza',
      text: 'Las obras empiezan en primavera.\n\nVisitas el solar cada semana. El barrio observa con curiosidad y algo de escepticismo.\n\nUna tarde, una vecina anciana del barrio te para: "¿De verdad va a ser diferente a los bloques de siempre?"',
      vocab: [
        { w: 'el solar', d: 'the building site' },
        { w: 'el escepticismo', d: 'the scepticism' },
        { w: 'observar', d: 'to observe' },
        { w: 'la vecina', d: 'the neighbour' },
      ],
      choices: [
        { text: 'Explicarle tu visión del proyecto con detalle', hint: 'Transparente', next: 'c6a' },
        { text: 'Invitarla a participar en el diseño del jardín comunitario', hint: 'Participativo', next: 'c6b' },
      ],
      quiz: { q: '¿Con qué actitud observa el barrio la construcción?', opts: ['Con entusiasmo', 'Con indiferencia', 'Con curiosidad y escepticismo', 'Con hostilidad'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Los problemas de construcción',
      text: 'El contratista encuentra suelo contaminado en el sector norte del solar.\n\nLa descontaminación costará 300.000 euros adicionales y retrasará la obra seis meses.\n\nEl Ayuntamiento dice que ese coste no estaba en el contrato.',
      vocab: [
        { w: 'el contratista', d: 'the contractor' },
        { w: 'contaminado', d: 'contaminated' },
        { w: 'la descontaminación', d: 'the decontamination' },
        { w: 'el retraso', d: 'the delay' },
      ],
      choices: [
        { text: 'Exigir al Ayuntamiento que asuma el coste', hint: 'Legal', next: 'c6a' },
        { text: 'Buscar soluciones alternativas de diseño para evitar ese sector', hint: 'Creativo', next: 'c6b' },
      ],
      quiz: { q: '¿Cuánto cuesta la descontaminación?', opts: ['Cien mil euros', 'Doscientos mil euros', 'Trescientos mil euros', 'Quinientos mil euros'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'La vecina María',
      text: 'La vecina se llama María. Tiene ochenta y dos años y lleva cincuenta en el barrio.\n\nLe explicas los patios, los huertos, los espacios de trabajo.\n\nElla escucha y dice: "Bonito. Pero ¿habrá banco donde sentarse a la sombra sin que te pidan nada?"',
      vocab: [
        { w: 'el banco', d: 'the bench' },
        { w: 'la sombra', d: 'the shade' },
        { w: 'sin que te pidan nada', d: 'without being asked for anything' },
        { w: 'escuchar', d: 'to listen' },
      ],
      choices: [
        { text: 'Añadir bancos específicos en la propuesta', hint: 'Escuchas', next: 'c7a' },
        { text: 'Invitar a María al comité de seguimiento del proyecto', hint: 'Participación', next: 'c7b' },
      ],
      quiz: { q: '¿Qué pide María específicamente?', opts: ['Un huerto', 'Una piscina', 'Un banco a la sombra', 'Una cafetería'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'El rediseño del sector norte',
      text: 'En lugar de edificar en el sector contaminado, propones convertirlo en un parque comunitario.\n\nEl coste de descontaminación parcial es menor y el barrio gana un espacio verde.\n\nEl Ayuntamiento acepta con entusiasmo: nunca pensaron en esa solución.',
      vocab: [
        { w: 'el parque comunitario', d: 'the community park' },
        { w: 'la descontaminación parcial', d: 'the partial decontamination' },
        { w: 'el espacio verde', d: 'the green space' },
        { w: 'el entusiasmo', d: 'the enthusiasm' },
      ],
      choices: [
        { text: 'Diseñar el parque con participación de los futuros residentes', hint: 'Cocreación', next: 'c7a' },
        { text: 'Diseñarlo tú misma para mantener la coherencia estética', hint: 'Control', next: 'c7b' },
      ],
      quiz: { q: '¿Qué propone Elena en lugar de edificar en el sector contaminado?', opts: ['Dejar el terreno vacío', 'Un parque comunitario', 'Un aparcamiento', 'Una zona industrial'], a: 1 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Problemas con el contratista',
      text: 'El contratista usa materiales de menor calidad en los cerramientos sin notificártelo.\n\nLo descubres en una inspección rutinaria. La diferencia de coste: 80.000 euros que se habría embolsado.\n\nTienes pruebas. Tienes que decidir qué hacer.',
      vocab: [
        { w: 'el cerramiento', d: 'the enclosure/cladding' },
        { w: 'la inspección', d: 'the inspection' },
        { w: 'embolsar', d: 'to pocket' },
        { w: 'la calidad', d: 'the quality' },
      ],
      choices: [
        { text: 'Denunciarlo y buscar un nuevo contratista', hint: 'Principios', next: 'c8a' },
        { text: 'Exigirle que corrija los materiales sin denunciar', hint: 'Pragmático', next: 'c8b' },
      ],
      quiz: { q: '¿Cuánto dinero intentó embolsarse el contratista?', opts: ['Treinta mil', 'Cincuenta mil', 'Ochenta mil', 'Cien mil euros'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'El comité de residentes',
      text: 'Formas un comité de doce futuros residentes que se reúne mensualmente.\n\nSus aportaciones mejoran el proyecto en aspectos que no habías considerado: más almacenamiento, mejor orientación de las cocinas, zonas de secado de ropa.',
      vocab: [
        { w: 'el almacenamiento', d: 'the storage' },
        { w: 'la orientación', d: 'the orientation' },
        { w: 'la aportación', d: 'the contribution' },
        { w: 'mensualmente', d: 'monthly' },
      ],
      choices: [
        { text: 'Aplicar todas sus sugerencias aunque cambien el diseño', hint: 'Democrático', next: 'c8a' },
        { text: 'Filtrar las sugerencias para mantener la coherencia', hint: 'Arquitecta', next: 'c8b' },
      ],
      quiz: { q: '¿Cuántos futuros residentes forman el comité?', opts: ['Seis', 'Ocho', 'Diez', 'Doce'], a: 3 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'El nuevo contratista',
      text: 'La denuncia genera retrasos de cuatro meses. El nuevo contratista es más caro.\n\nPero el proyecto sale como lo diseñaste.\n\nLa prensa local cubre la denuncia al contratista anterior. Recibes elogios por tu integridad. Y también algunas amenazas anónimas.',
      vocab: [
        { w: 'el elogio', d: 'the praise' },
        { w: 'la integridad', d: 'the integrity' },
        { w: 'la amenaza', d: 'the threat' },
        { w: 'anónimo', d: 'anonymous' },
      ],
      choices: [
        { text: 'Denunciar también las amenazas a la policía', hint: 'Protegerse', next: 'c9a' },
        { text: 'Ignorar las amenazas y continuar', hint: 'Resiliencia', next: 'c9b' },
      ],
      quiz: { q: '¿Cuántos meses de retraso genera la denuncia al contratista?', opts: ['Dos', 'Tres', 'Cuatro', 'Seis'], a: 2 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'El diseño final',
      text: 'El proyecto integra las mejores ideas del comité de residentes con tu visión original.\n\nEs tuyo y también de ellos.\n\nLa arquitecta Carmen Vega, del jurado original, visita las obras: "Esto es lo que debería ser siempre la vivienda social."',
      vocab: [
        { w: 'integrar', d: 'to integrate' },
        { w: 'original', d: 'original' },
        { w: 'la obra', d: 'the building work' },
        { w: 'siempre', d: 'always' },
      ],
      choices: [
        { text: 'Proponer publicar el proceso como guía para otros proyectos', hint: 'Contribución', next: 'c9a' },
        { text: 'Centrarte en terminar las obras a tiempo', hint: 'Foco', next: 'c9b' },
      ],
      quiz: { q: '¿Qué dice Carmen Vega al visitar las obras?', opts: ['"Es demasiado caro"', '"Falta algo"', '"Esto es lo que debería ser siempre la vivienda social"', '"Es bonito pero poco práctico"'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'La entrega',
      text: 'Las llaves se entregan en una ceremonia sencilla en el patio central.\n\nMaría, la vecina anciana, es la primera en recibir las suyas.\n\nBusca el banco que propusiste. Se sienta. Cierra los ojos.\n\n"Sí", dice. "Esto está bien."',
      vocab: [
        { w: 'la llave', d: 'the key' },
        { w: 'la ceremonia', d: 'the ceremony' },
        { w: 'sencillo', d: 'simple' },
        { w: 'el patio central', d: 'the central courtyard' },
      ],
      choices: [
        { text: 'Proponer este proyecto como modelo en el congreso nacional de arquitectura', hint: 'Influencia', next: 'c10g' },
        { text: 'Empezar ya el siguiente proyecto con lo aprendido', hint: 'Adelante', next: 'c10n' },
      ],
      quiz: { q: '¿Quién es la primera persona en recibir las llaves?', opts: ['Elena', 'Lucía', 'María la vecina', 'Carmen Vega'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Los últimos meses',
      text: 'Las obras terminan con tres semanas de retraso y un 8% de sobrecoste respecto al presupuesto ajustado.\n\nEl Ayuntamiento está satisfecho. Los futuros residentes, emocionados.\n\nTú estás agotada y orgullosa a partes iguales.',
      vocab: [
        { w: 'el sobrecoste', d: 'the cost overrun' },
        { w: 'satisfecho', d: 'satisfied' },
        { w: 'agotado', d: 'exhausted' },
        { w: 'orgulloso', d: 'proud' },
      ],
      choices: [
        { text: 'Documentar todo el proceso para publicarlo', hint: 'Legar', next: 'c10g' },
        { text: 'Tomarte un mes de descanso antes del siguiente proyecto', hint: 'Cuidarse', next: 'c10b' },
      ],
      quiz: { q: '¿Con cuánto sobrecoste terminan las obras?', opts: ['4%', '6%', '8%', '12%'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Triana Nueva', ending: 'good',
      text: 'Cinco años después, el barrio ha cambiado. Los patios son punto de encuentro. El huerto urbano produce 200 kilos de verduras al mes que se reparten entre los residentes.\n\nEl proyecto se replica en tres ciudades españolas y dos europeas.\n\nMaría todavía se sienta en su banco cuando el sol calienta bien. Dice que es el mejor banco de Sevilla.\n\nTú también lo crees.',
      vocab: [
        { w: 'replicar', d: 'to replicate' },
        { w: 'el punto de encuentro', d: 'the meeting point' },
        { w: 'repartir', d: 'to distribute' },
        { w: 'calentar', d: 'to warm' },
      ],
      choices: [],
      quiz: { q: '¿Cuántos kilos de verduras produce el huerto urbano al mes?', opts: ['Cincuenta', 'Cien', 'Doscientos', 'Quinientos'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Un buen trabajo', ending: 'neutral',
      text: 'El proyecto termina. 200 familias tienen un hogar digno.\n\nNo ganaste ningún premio internacional. No saliste en las revistas de arquitectura.\n\nPero cuando pasas por Triana y ves a niños jugando en los patios, piensas que quizás eso es suficiente.\n\nQuizás.',
      vocab: [
        { w: 'digno', d: 'dignified' },
        { w: 'el premio', d: 'the award' },
        { w: 'suficiente', d: 'enough' },
        { w: 'quizás', d: 'perhaps' },
      ],
      choices: [],
      quiz: { q: '¿Qué hace Elena cuando pasa por Triana y ve a los niños?', opts: ['Se siente fracasada', 'Piensa que quizás es suficiente', 'Llora de emoción', 'Critica lo que cambiaría'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Las concesiones', ending: 'bad',
      text: 'El proyecto se termina, pero no es lo que diseñaste.\n\nLas presiones del Ayuntamiento, el contratista y los plazos eliminaron demasiadas cosas.\n\nLas familias tienen un hogar. No es malo. Pero tampoco es lo que podría haber sido.\n\nEmpiezas el siguiente proyecto. Esta vez, antes de firmar, lees el contrato tres veces.',
      vocab: [
        { w: 'la concesión', d: 'the concession' },
        { w: 'la presión', d: 'the pressure' },
        { w: 'eliminar', d: 'to eliminate' },
        { w: 'el plazo', d: 'the deadline' },
      ],
      choices: [],
      quiz: { q: '¿Por qué el proyecto final no es el que Elena diseñó?', opts: ['Por falta de dinero', 'Por las presiones del Ayuntamiento, el contratista y los plazos', 'Por errores de diseño', 'Por falta de residentes'], a: 1 },
    },
  },
};
