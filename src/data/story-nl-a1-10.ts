import type { Story } from './types';

export const storyNlA1_10: Story = {
  id: 'nl-a1-10', level: 'A1', title: 'De Kapotte Fiets', genre: 'Humor', emoji: '🚲',
  coverColor: '#1e2a3a', accentColor: '#60a0c8',
  description: 'Je fiets is kapot en je moet op tijd op je werk zijn.',
  startChapter: 'c1',
  chapters: {
    c1: { id: 'c1', num: 1, title: 'Platte band!',
      text: 'Het is maandag. Je moet om negen uur op je werk zijn. Je pakt je fiets. Maar de band is plat! Je kijkt op je horloge. Het is al acht uur.',
      vocab: [{ w: 'de band', d: 'the tyre' }, { w: 'plat', d: 'flat' }, { w: 'het horloge', d: 'the watch' }, { w: 'kapot', d: 'broken' }],
      choices: [
        { text: 'Proberen de band zelf te plakken', hint: 'Handig', next: 'c2a' },
        { text: 'Snel naar de bushalte rennen', hint: 'Slim', next: 'c2b' },
      ],
      quiz: { q: 'Hoe laat moet je op je werk zijn?', opts: ['Acht uur', 'Halfnegen', 'Negen uur', 'Tien uur'], a: 2 } },

    c2a: { id: 'c2a', num: 2, title: 'Zelf repareren',
      text: 'Je pakt je reparatieset. Je zoekt het gat in de band. Gevonden! Je plakt een pleister op het gat. Daarna pomp je de band op. Het kost tien minuten.',
      vocab: [{ w: 'repareren', d: 'to repair' }, { w: 'het gat', d: 'the hole' }, { w: 'de pleister', d: 'the patch' }, { w: 'pompen', d: 'to pump' }],
      choices: [
        { text: 'Snel op de fiets springen en rijden', hint: 'Haastig', next: 'c3a' },
        { text: 'Controleren of de band echt goed is', hint: 'Voorzichtig', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel tijd kost het repareren?', opts: ['Vijf minuten', 'Tien minuten', 'Kwartier', 'Een halfuur'], a: 1 } },

    c2b: { id: 'c2b', num: 2, title: 'De bus',
      text: 'Je rent naar de bushalte. De bus staat er al. Je springt net op tijd in. Je bent buiten adem. Je controleert de route op je telefoon. Drie haltes.',
      vocab: [{ w: 'de bushalte', d: 'the bus stop' }, { w: 'buiten adem', d: 'out of breath' }, { w: 'de halte', d: 'the stop' }, { w: 'de route', d: 'the route' }],
      choices: [
        { text: 'Rustig zitten en de bus nemen', hint: 'Ontspannen', next: 'c3a' },
        { text: 'Je baas een bericht sturen dat je onderweg bent', hint: 'Netjes', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel haltes zijn er naar het werk?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 1 } },

    c3a: { id: 'c3a', num: 3, title: 'Onderweg',
      text: 'Je bent onderweg. Je fietst snel door de straten. Het regent nu een beetje. Je jas is dun. Je wordt nat. Maar je rijdt door.',
      vocab: [{ w: 'onderweg', d: 'on the way' }, { w: 'regenen', d: 'to rain' }, { w: 'de jas', d: 'the jacket / coat' }, { w: 'nat', d: 'wet' }],
      choices: [
        { text: 'Stoppen voor een regenjasje', hint: 'Praktisch', next: 'c4a' },
        { text: 'Doorrijden ondanks de regen', hint: 'Vastberaden', next: 'c4b' },
      ],
      quiz: { q: 'Wat is het weer terwijl je fietst?', opts: ['Zonnig', 'Bewolkt', 'Het regent', 'Er is storm'], a: 2 } },

    c3b: { id: 'c3b', num: 3, title: 'Buurman Jan',
      text: 'Je buurman Jan staat bij zijn deur. Hij heeft een fiets. "Jan, mag ik jouw fiets even lenen?" vraag je. Jan lacht. "Tuurlijk! Maar breng hem vanavond terug."',
      vocab: [{ w: 'lenen', d: 'to borrow' }, { w: 'terugbrengen', d: 'to return / bring back' }, { w: 'tuurlijk', d: 'of course' }, { w: 'vanavond', d: 'this evening' }],
      choices: [
        { text: 'Op Jans fiets naar het werk rijden', hint: 'Opgelost', next: 'c4a' },
        { text: 'Eerst je eigen fiets snel repareren', hint: 'Trots', next: 'c4b' },
      ],
      quiz: { q: 'Wanneer moet je Jans fiets terugbrengen?', opts: ['\'s Ochtends', '\'s Middags', 'Vanavond', 'Morgen'], a: 2 } },

    c4a: { id: 'c4a', num: 4, title: 'Een probleem meer',
      text: 'Je rijdt snel maar je kijkt niet goed. Je mist een rood stoplicht. Een politieagent fluit je aan. "Stop! Jij rijdt door rood." Oh nee.',
      vocab: [{ w: 'het stoplicht', d: 'the traffic light' }, { w: 'fluiten', d: 'to whistle / blow a whistle' }, { w: 'door rood rijden', d: 'to run a red light' }, { w: 'missen', d: 'to miss' }],
      choices: [
        { text: 'Eerlijk zeggen dat je haast hebt', hint: 'Eerlijk', next: 'c5a' },
        { text: 'Je excuses aanbieden aan de agent', hint: 'Beleefd', next: 'c5b' },
      ],
      quiz: { q: 'Waarom stopt de politieagent je?', opts: ['Je rijdt te snel', 'Je rijdt door rood', 'Je hebt geen licht', 'Je belt je telefoon'], a: 1 } },

    c4b: { id: 'c4b', num: 4, title: 'Vlot onderweg',
      text: 'Je rijdt vlot naar het werk. De wegen zijn rustig. Je ziet de groene lichten. Er is geen file. Je bent bijna bij het werk.',
      vocab: [{ w: 'vlot', d: 'smoothly / swiftly' }, { w: 'de file', d: 'the traffic jam' }, { w: 'groen', d: 'green' }, { w: 'bijna', d: 'almost' }],
      choices: [
        { text: 'Snel je fiets parkeren en naar binnen', hint: 'Haastig', next: 'c5a' },
        { text: 'Rustig je fiets vastzetten', hint: 'Voorzichtig', next: 'c5b' },
      ],
      quiz: { q: 'Hoe zijn de wegen?', opts: ['Druk met file', 'Rustig zonder file', 'Nat en gevaarlijk', 'Gesloten'], a: 1 } },

    c5a: { id: 'c5a', num: 5, title: 'Bij het werk',
      text: 'Je arriveert bij het werk. Je horloge zegt vijf over negen. Je bent vijf minuten te laat. Je collega Petra ziet je. "Je bent laat! Je baas zoekt je al."',
      vocab: [{ w: 'arriveren', d: 'to arrive' }, { w: 'te laat', d: 'late' }, { w: 'zoeken', d: 'to look for' }, { w: 'de minuut', d: 'the minute' }],
      choices: [
        { text: 'Meteen naar de baas gaan', hint: 'Eerlijk', next: 'c6a' },
        { text: 'Eerst koffie halen en dan naar de baas', hint: 'Zenuwachtig', next: 'c6b' },
      ],
      quiz: { q: 'Hoe laat arriveer je bij het werk?', opts: ['Om negen uur precies', 'Vijf over negen', 'Kwart over negen', 'Halfnegen'], a: 1 } },

    c5b: { id: 'c5b', num: 5, title: 'Net op tijd',
      text: 'Je zet je fiets vast. Je loopt snel naar binnen. Je kijkt op de klok: negen uur precies. Je bent op tijd! Je ademt diep in en uit.',
      vocab: [{ w: 'vastzetten', d: 'to lock up / secure' }, { w: 'precies', d: 'exactly' }, { w: 'op tijd', d: 'on time' }, { w: 'ademen', d: 'to breathe' }],
      choices: [
        { text: 'Direct naar je bureau lopen', hint: 'Zakelijk', next: 'c6a' },
        { text: 'Je collega\'s goedemorgen zeggen', hint: 'Vriendelijk', next: 'c6b' },
      ],
      quiz: { q: 'Hoe laat arriveer je bij het werk?', opts: ['Vijf voor negen', 'Om negen uur precies', 'Vijf over negen', 'Halfnegen'], a: 1 } },

    c6a: { id: 'c6a', num: 6, title: 'De baas',
      text: 'Je baas heet mevrouw Vink. Ze staat bij haar kantoor. "Ah, eindelijk!" zegt ze. "We hebben een vergadering om halfelf. Ben jij er klaar voor?" Je knikt snel.',
      vocab: [{ w: 'het kantoor', d: 'the office' }, { w: 'eindelijk', d: 'finally' }, { w: 'de vergadering', d: 'the meeting' }, { w: 'klaar', d: 'ready' }],
      choices: [
        { text: 'Zeggen dat de fiets kapot was', hint: 'Uitleggen', next: 'c7a' },
        { text: 'Gewoon ja zeggen en beginnen', hint: 'Professioneel', next: 'c7b' },
      ],
      quiz: { q: 'Hoe laat is de vergadering?', opts: ['Negen uur', 'Halftien', 'Halfelf', 'Elf uur'], a: 2 } },

    c6b: { id: 'c6b', num: 6, title: 'Goedemorgen!',
      text: 'Je zegt goedemorgen aan je collega\'s. Petra geeft je een kop koffie. "Je ziet eruit alsof je gerend hebt!" zegt ze lachend. Je lacht mee.',
      vocab: [{ w: 'goedemorgen', d: 'good morning' }, { w: 'de kop koffie', d: 'the cup of coffee' }, { w: 'eruit zien', d: 'to look (like)' }, { w: 'rennen', d: 'to run' }],
      choices: [
        { text: 'Vertellen over de kapotte fiets', hint: 'Grappig', next: 'c7a' },
        { text: 'Snel naar je bureau gaan', hint: 'Serieus', next: 'c7b' },
      ],
      quiz: { q: 'Wat geeft Petra je?', opts: ['Een broodje', 'Een kop thee', 'Een kop koffie', 'Een koekje'], a: 2 } },

    c7a: { id: 'c7a', num: 7, title: 'Het verhaal',
      text: 'Je vertelt het verhaal van de kapotte fiets. Je collega\'s lachen. Petra zegt: "Volgende keer neem je de bus!" Mevrouw Vink glimlacht ook. "Oké, maar nu aan het werk!"',
      vocab: [{ w: 'het verhaal', d: 'the story' }, { w: 'lachen', d: 'to laugh' }, { w: 'volgende keer', d: 'next time' }, { w: 'de bus', d: 'the bus' }],
      choices: [
        { text: 'Je e-mails checken voor de vergadering', hint: 'Voorbereid', next: 'c8a' },
        { text: 'Mevrouw Vink vragen wat er op de agenda staat', hint: 'Proactief', next: 'c8b' },
      ],
      quiz: { q: 'Wat adviseert Petra voor volgende keer?', opts: ['Een taxi', 'De trein', 'De bus', 'Lopen'], a: 2 } },

    c7b: { id: 'c7b', num: 7, title: 'Aan het werk',
      text: 'Je gaat aan je bureau zitten. Je computer staat al aan. Er zijn twaalf nieuwe e-mails. Eén e-mail is van mevrouw Vink over de vergadering van halfelf.',
      vocab: [{ w: 'het bureau', d: 'the desk' }, { w: 'de computer', d: 'the computer' }, { w: 'de e-mail', d: 'the email' }, { w: 'twaalf', d: 'twelve' }],
      choices: [
        { text: 'De e-mail van mevrouw Vink lezen', hint: 'Prioriteit', next: 'c8a' },
        { text: 'Alle twaalf e-mails lezen', hint: 'Grondig', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel nieuwe e-mails zijn er?', opts: ['Acht', 'Tien', 'Twaalf', 'Vijftien'], a: 2 } },

    c8a: { id: 'c8a', num: 8, title: 'De vergadering',
      text: 'De vergadering begint om halfelf. Er zijn vijf mensen. Mevrouw Vink praat over nieuwe plannen voor volgende maand. Jij luistert goed en schrijft notities.',
      vocab: [{ w: 'beginnen', d: 'to start / begin' }, { w: 'de notitie', d: 'the note' }, { w: 'het plan', d: 'the plan' }, { w: 'volgende maand', d: 'next month' }],
      choices: [
        { text: 'Een vraag stellen in de vergadering', hint: 'Betrokken', next: 'c9a' },
        { text: 'Stil luisteren en alles opschrijven', hint: 'Discreet', next: 'c9b' },
      ],
      quiz: { q: 'Hoeveel mensen zijn er in de vergadering?', opts: ['Drie', 'Vier', 'Vijf', 'Zes'], a: 2 } },

    c8b: { id: 'c8b', num: 8, title: 'Voorbereiding',
      text: 'Je leest de e-mail van mevrouw Vink. Er is een grote klant op bezoek vandaag! Je bent blij dat je het weet. Je maakt een presentatie klaar.',
      vocab: [{ w: 'de klant', d: 'the client / customer' }, { w: 'op bezoek', d: 'visiting / on a visit' }, { w: 'de presentatie', d: 'the presentation' }, { w: 'klaarmaken', d: 'to prepare' }],
      choices: [
        { text: 'In de vergadering je presentatie tonen', hint: 'Voorbereid', next: 'c9a' },
        { text: 'Rustig afwachten wat er gebeurt', hint: 'Rustig', next: 'c9b' },
      ],
      quiz: { q: 'Wie is er vandaag op bezoek op het werk?', opts: ['Een nieuwe collega', 'De directeur', 'Een grote klant', 'Mevrouw Vinks baas'], a: 2 } },

    c9a: { id: 'c9a', num: 9, title: 'Goed werk!',
      text: 'Mevrouw Vink kijkt je aan. "Goed werk vandaag", zegt ze na de vergadering. "Ondanks je late start." Je lacht. "Mijn fiets was kapot", zeg je. Ze knikt begripvol.',
      vocab: [{ w: 'goed werk', d: 'good work' }, { w: 'ondanks', d: 'despite' }, { w: 'begripvol', d: 'understanding' }, { w: 'de start', d: 'the start' }],
      choices: [
        { text: 'Aanbieden vroeg te beginnen morgen', hint: 'Toegewijd', next: 'c10g' },
        { text: 'Vragen of je eerder naar huis mag', hint: 'Opgelucht', next: 'c10n' },
      ],
      quiz: { q: 'Hoe reageert mevrouw Vink op jouw werk?', opts: ['Ze is boos', 'Ze zegt niks', 'Ze zegt goed werk', 'Ze is teleurgesteld'], a: 2 } },

    c9b: { id: 'c9b', num: 9, title: 'Een lange dag',
      text: 'De dag duurt lang. Je bent moe van de ochtend. Je maakt fouten in je werk. Petra helpt je. "Gaat het?" vraagt ze. "Ja", zeg je. "Gewoon een moeilijke ochtend."',
      vocab: [{ w: 'de fout', d: 'the mistake' }, { w: 'duren', d: 'to last' }, { w: 'moeilijk', d: 'difficult' }, { w: 'helpen', d: 'to help' }],
      choices: [
        { text: 'Harder je best doen in de middag', hint: 'Vastberaden', next: 'c10n' },
        { text: 'Naar mevrouw Vink gaan om te praten', hint: 'Eerlijk', next: 'c10b' },
      ],
      quiz: { q: 'Wie helpt jou vandaag op het werk?', opts: ['Mevrouw Vink', 'Petra', 'Een klant', 'Je baas'], a: 1 } },

    c10g: { id: 'c10g', num: 10, title: 'Een held van de dag!', ending: 'good',
      text: 'Mevrouw Vink is indruk gemaakt. "Zelfs met een kapotte fiets ben jij op tijd en werk je goed." De volgende dag kom je vroeg. Je fiets is gerepareerd. Je baas lacht als ze je ziet. "Geen kapotte fiets vandaag?" Je lacht mee. Vandaag is een goede dag.',
      vocab: [{ w: 'indruk maken', d: 'to impress' }, { w: 'gerepareerd', d: 'repaired' }, { w: 'zelfs', d: 'even' }, { w: 'vroeg', d: 'early' }],
      choices: [],
      quiz: { q: 'Hoe komt je baas de volgende dag op jou over?', opts: ['Boos', 'Teleurgesteld', 'Lachend en blij', 'Bezorgd'], a: 2 } },

    c10n: { id: 'c10n', num: 10, title: 'Het is oké', ending: 'neutral',
      text: 'Je baas is niet boos maar ook niet blij. "De volgende keer bel je als je te laat bent." Je knikt. Je fietst naar huis. De band is nu gerepareerd. Morgen is het beter.',
      vocab: [{ w: 'de volgende keer', d: 'the next time' }, { w: 'bellen', d: 'to call' }, { w: 'morgen', d: 'tomorrow' }, { w: 'beter', d: 'better' }],
      choices: [],
      quiz: { q: 'Wat zegt je baas voor de volgende keer?', opts: ['Koop een nieuwe fiets', 'Bel als je te laat bent', 'Neem altijd de bus', 'Kom eerder'], a: 1 } },

    c10b: { id: 'c10b', num: 10, title: 'Een slechte maandag', ending: 'bad',
      text: 'Mevrouw Vink is niet blij. "Je was te laat en je werk heeft fouten." Ze kijkt streng. "Wij missen een belangrijke vergadering door jou." Je voelt je heel slecht. Wat een maandag!',
      vocab: [{ w: 'streng', d: 'strict / stern' }, { w: 'missen', d: 'to miss' }, { w: 'de fout', d: 'the mistake' }, { w: 'slecht', d: 'bad' }],
      choices: [],
      quiz: { q: 'Hoe is mevrouw Vink?', opts: ['Blij en tevreden', 'Neutraal', 'Niet blij en streng', 'Grappig'], a: 2 } },
  },
};
