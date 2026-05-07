import type { Story } from './types';

export const storyNlA1_5: Story = {
  id: 'nl-a1-5',
  level: 'A1',
  title: 'Het Nieuwe Huis',
  genre: 'Avontuur',
  emoji: '🏠',
  coverColor: '#2a1e3d',
  accentColor: '#a07bd4',
  description: 'Je verhuist naar een nieuw huis. Leer je nieuwe buren kennen.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Verhuisdag',
      text: 'Vandaag is het verhuisdag! Jij bent Roos en je nieuwe huis is eindelijk klaar.\n\nEr staan tien dozen in de vrachtwagen. Ze zijn zwaar.\n\nJe staat voor de voordeur met de sleutel. Je hart klopt snel.\n\nWat doe je eerst?',
      vocab: [
        { w: 'verhuizen', d: 'to move (house)' },
        { w: 'de doos', d: 'the box' },
        { w: 'de vrachtwagen', d: 'the moving truck' },
        { w: 'de sleutel', d: 'the key' },
      ],
      choices: [
        { text: 'Draag de dozen snel naar binnen', hint: 'Actief', next: 'c2a' },
        { text: 'Kijk eerst rustig door het huis', hint: 'Verkennen', next: 'c2b' },
      ],
      quiz: { q: 'Hoeveel dozen staan er in de vrachtwagen?', opts: ['Vijf', 'Acht', 'Tien', 'Twaalf'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Dozen dragen',
      text: 'Je draagt de eerste doos naar binnen. Hij is heel zwaar.\n\nJe zet hem in de woonkamer. Dan de tweede doos. En de derde.\n\nNa vijf dozen ben je al moe. Er zijn er nog vijf!',
      vocab: [
        { w: 'dragen', d: 'to carry' },
        { w: 'de woonkamer', d: 'the living room' },
        { w: 'moe', d: 'tired' },
        { w: 'er zijn', d: 'there are' },
      ],
      choices: [
        { text: 'Vraag de buurman om te helpen', hint: 'Hulp', next: 'c3a' },
        { text: 'Neem een korte pauze met water', hint: 'Rusten', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel dozen draagt Roos voor ze moe is?', opts: ['Drie', 'Vier', 'Vijf', 'Zes'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Rondkijken',
      text: 'Je loopt door het lege huis. Er is een grote keuken en twee slaapkamers.\n\nEr is ook een kleine tuin. De zon schijnt op het gras.\n\n"Dit is mijn thuis nu", denk je blij.',
      vocab: [
        { w: 'leeg', d: 'empty' },
        { w: 'de slaapkamer', d: 'the bedroom' },
        { w: 'de tuin', d: 'the garden' },
        { w: 'het gras', d: 'the grass' },
      ],
      choices: [
        { text: 'Begin met de dozen dragen', hint: 'Aan het werk', next: 'c3a' },
        { text: 'Maak eerst een kopje thee', hint: 'Rustig', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel slaapkamers heeft het nieuwe huis?', opts: ['Één', 'Twee', 'Drie', 'Vier'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'De buurman',
      text: 'Je klopt op de deur van de buurman. Een man van ongeveer veertig jaar doet open.\n\n"Hallo! Ik ben Roos, uw nieuwe buurvrouw. Kunt u mij helpen met de dozen?"\n\nHij glimlacht breed. "Ik ben Marco. Natuurlijk help ik!"',
      vocab: [
        { w: 'kloppen', d: 'to knock' },
        { w: 'de buurvrouw', d: 'the (female) neighbour' },
        { w: 'breed', d: 'wide / broadly' },
        { w: 'natuurlijk', d: 'of course / naturally' },
      ],
      choices: [
        { text: 'Draag samen de rest van de dozen', hint: 'Samen', next: 'c4a' },
        { text: 'Vraag Marco binnen voor een kop thee eerst', hint: 'Gezellig', next: 'c4b' },
      ],
      quiz: { q: 'Hoe heet de buurman?', opts: ['Jan', 'Tim', 'Marco', 'Lars'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Even rusten',
      text: 'Je zet water op voor thee. Je hebt nog geen kopjes in de dozen gevonden!\n\nJe drinkt water uit de kraan. Het is koud en lekker.\n\nJe voelt je beter. Nu kun je verder.',
      vocab: [
        { w: 'het kopje', d: 'the cup' },
        { w: 'de kraan', d: 'the tap / faucet' },
        { w: 'verder', d: 'further / to continue' },
        { w: 'water', d: 'water' },
      ],
      choices: [
        { text: 'Ga terug en draag meer dozen', hint: 'Doorzetten', next: 'c4a' },
        { text: 'Zoek de doos met kopjes en keukendingen', hint: 'Slim', next: 'c4b' },
      ],
      quiz: { q: 'Wat drinkt Roos als ze geen kopjes vindt?', opts: ['Thee', 'Sap', 'Water uit de kraan', 'Melk'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Meubels zetten',
      text: 'De dozen zijn binnen. Nu moet je de meubels zetten.\n\nJe hebt een bed, een bank en een tafel. Maar ze zijn heel zwaar.\n\n"Waar zet ik het bed?" vraag je hardop.',
      vocab: [
        { w: 'de meubels', d: 'the furniture' },
        { w: 'het bed', d: 'the bed' },
        { w: 'de bank', d: 'the sofa / couch' },
        { w: 'hardop', d: 'out loud' },
      ],
      choices: [
        { text: 'Zet het bed eerst in de slaapkamer', hint: 'Eerst', next: 'c5a' },
        { text: 'Zet de bank in de woonkamer', hint: 'Woonkamer', next: 'c5b' },
      ],
      quiz: { q: 'Welke meubels heeft Roos?', opts: ['Bed, stoel, kast', 'Bed, bank, tafel', 'Bank, kast, lamp', 'Tafel, stoelen, kast'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'De keukendoos',
      text: 'Je vindt de doos met "KEUKEN" erop. Je opent hem.\n\nEr zijn kopjes, borden en bestek. Je zet alles op de keukentafel.\n\nNu kun je thee maken. De thee is warm en lekker.',
      vocab: [
        { w: 'het bord', d: 'the plate' },
        { w: 'het bestek', d: 'the cutlery' },
        { w: 'de keukentafel', d: 'the kitchen table' },
        { w: 'warm', d: 'warm' },
      ],
      choices: [
        { text: 'Zet nu het bed op in de slaapkamer', hint: 'Bed', next: 'c5a' },
        { text: 'Zet de bank in de woonkamer', hint: 'Woonkamer', next: 'c5b' },
      ],
      quiz: { q: 'Wat staat er op de doos die Roos zoekt?', opts: ['"SLAAPKAMER"', '"WOONKAMER"', '"KEUKEN"', '"KLEDING"'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Het bed opzetten',
      text: 'Je brengt de delen van het bed naar de slaapkamer. Er zijn veel schroeven.\n\nJe hebt de handleiding nodig, maar die is in een doos. Welke doos?\n\nNa een uur staat het bed. Je bent trots en moe tegelijk.',
      vocab: [
        { w: 'de schroef', d: 'the screw' },
        { w: 'de handleiding', d: 'the instruction manual' },
        { w: 'een uur', d: 'one hour' },
        { w: 'tegelijk', d: 'at the same time' },
      ],
      choices: [
        { text: 'Ga naar buiten om de buurt te verkennen', hint: 'Verkennen', next: 'c6a' },
        { text: 'Pak de keuken verder uit', hint: 'Uitpakken', next: 'c6b' },
      ],
      quiz: { q: 'Hoe lang duurt het om het bed op te zetten?', opts: ['Een halfuur', 'Een uur', 'Twee uur', 'De hele dag'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'De bank',
      text: 'Marco helpt je de bank in de woonkamer te zetten. Hij is zwaar maar ze lukt.\n\nJe gaat erop zitten. Het is zo comfortabel.\n\n"Nu voelt het al als een huis", zeg je.',
      vocab: [
        { w: 'comfortabel', d: 'comfortable' },
        { w: 'zitten', d: 'to sit' },
        { w: 'het voelt als', d: 'it feels like' },
        { w: 'al', d: 'already' },
      ],
      choices: [
        { text: 'Ga de buurt verkennen', hint: 'Verkennen', next: 'c6a' },
        { text: 'Pak de keuken uit', hint: 'Uitpakken', next: 'c6b' },
      ],
      quiz: { q: 'Wie helpt Roos de bank te zetten?', opts: ['Haar moeder', 'Tim', 'Marco', 'Ze doet het alleen'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'De buurt verkennen',
      text: 'Je loopt door de straat. Er is een park om de hoek. Er is ook een kleine winkel.\n\nEen oude mevrouw lacht naar je. "Ben jij de nieuwe buurvrouw?"\n\n"Ja! Ik ben Roos. Ik kom net aan." Ze heet mevrouw Visser.',
      vocab: [
        { w: 'de buurt', d: 'the neighbourhood' },
        { w: 'verkennen', d: 'to explore' },
        { w: 'de hoek', d: 'the corner' },
        { w: 'net', d: 'just (now)' },
      ],
      choices: [
        { text: 'Praat meer met mevrouw Visser', hint: 'Kennis', next: 'c7a' },
        { text: 'Loop verder door de buurt', hint: 'Verkennen', next: 'c7b' },
      ],
      quiz: { q: 'Hoe heet de oude mevrouw in de straat?', opts: ['Mevrouw De Vries', 'Mevrouw Bakker', 'Mevrouw Visser', 'Mevrouw Jansen'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'De keuken uitpakken',
      text: 'Je pakt de keuken uit. Pannen, kopjes, borden — alles krijgt een plek.\n\nHet duurt lang maar het voelt goed. De keuken is klaar.\n\nJe bent moe. Je zit op de keukenvloer en drinkt thee.',
      vocab: [
        { w: 'de pan', d: 'the pan / pot' },
        { w: 'een plek', d: 'a place / spot' },
        { w: 'de vloer', d: 'the floor' },
        { w: 'duuren', d: 'to take (time)' },
      ],
      choices: [
        { text: 'Ga nu de buurt verkennen', hint: 'Verkennen', next: 'c7a' },
        { text: 'Pak ook de slaapkamerdoos uit', hint: 'Doorzetten', next: 'c7b' },
      ],
      quiz: { q: 'Waar zit Roos na het uitpakken?', opts: ['Op de bank', 'In de tuin', 'Op de keukenvloer', 'Op het bed'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Mevrouw Visser',
      text: 'Mevrouw Visser vertelt over de buurt. "Er is een markt op zaterdag. En de bakker is heel goed."\n\nZe is vriendelijk en aardig. Ze is al dertig jaar in de straat.\n\n"Welkom in de buurt, Roos", zegt ze warm.',
      vocab: [
        { w: 'de markt', d: 'the market' },
        { w: 'zaterdag', d: 'Saturday' },
        { w: 'dertig jaar', d: 'thirty years' },
        { w: 'warm', d: 'warmly / warm' },
      ],
      choices: [
        { text: 'Nodig mevrouw Visser uit voor koffie', hint: 'Uitnodigen', next: 'c8a' },
        { text: 'Ga terug naar huis om verder uit te pakken', hint: 'Werken', next: 'c8b' },
      ],
      quiz: { q: 'Hoe lang woont mevrouw Visser al in de straat?', opts: ['Tien jaar', 'Twintig jaar', 'Dertig jaar', 'Veertig jaar'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'De buurt ontdekken',
      text: 'Je loopt naar het park. Het is groot en groen. Er zijn honden en kinderen.\n\nJe ziet een groot speelplein en een vijver met eenden.\n\n"Wat een mooie buurt", denk je gelukkig.',
      vocab: [
        { w: 'het speelplein', d: 'the playground' },
        { w: 'de vijver', d: 'the pond' },
        { w: 'de eend', d: 'the duck' },
        { w: 'ontdekken', d: 'to discover' },
      ],
      choices: [
        { text: 'Ga terug naar huis om te werken', hint: 'Werken', next: 'c8a' },
        { text: 'Zit even op een bankje in het park', hint: 'Genieten', next: 'c8b' },
      ],
      quiz: { q: 'Wat zie je in de vijver in het park?', opts: ['Vissen', 'Zwanen', 'Eenden', 'Kikkers'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Koffie met de buren',
      text: 'Marco en mevrouw Visser komen binnen voor koffie. Je hebt nog geen melk!\n\nMarco lacht. "Ik haal melk van mijn huis." Hij is terug in twee minuten.\n\nJullie drinken samen koffie in de half-lege woonkamer.',
      vocab: [
        { w: 'half-leeg', d: 'half-empty' },
        { w: 'de minuut', d: 'the minute' },
        { w: 'halen', d: 'to fetch / to get' },
        { w: 'samen', d: 'together' },
      ],
      choices: [
        { text: 'Vertel de buren over je plannen voor het huis', hint: 'Plannen', next: 'c9a' },
        { text: 'Vraag de buren tips voor de buurt', hint: 'Tips', next: 'c9b' },
      ],
      quiz: { q: 'Wat gaat Marco halen voor de koffie?', opts: ['Suiker', 'Koekjes', 'Melk', 'Kopjes'], a: 2 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Nog meer uitpakken',
      text: 'Je pakt nog drie dozen uit. Nu zijn de boeken op de plank en de kleren in de kast.\n\nHet is zes uur. Je hebt de hele dag gewerkt.\n\nJe buik rammelt. Je hebt honger! Er is geen eten in huis.',
      vocab: [
        { w: 'de plank', d: 'the shelf' },
        { w: 'de kast', d: 'the wardrobe / cupboard' },
        { w: 'rammelen', d: 'to rumble (stomach)' },
        { w: 'honger', d: 'hunger' },
      ],
      choices: [
        { text: 'Bestel pizza want je bent te moe om te koken', hint: 'Makkelijk', next: 'c9a' },
        { text: 'Ga snel naar de kleine winkel in de straat', hint: 'Winkel', next: 'c9b' },
      ],
      quiz: { q: 'Hoe laat is het als Roos klaar is met uitpakken?', opts: ['Vier uur', 'Vijf uur', 'Zes uur', 'Zeven uur'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Avondeten',
      text: 'De pizza komt na twintig minuten. Je eet aan de lege keukentafel.\n\nBuiten is het stil. Je nieuwe huis is donker maar gezellig.\n\nJe denkt: "Morgen koop ik bloemen voor het raam."',
      vocab: [
        { w: 'de pizza', d: 'the pizza' },
        { w: 'gezellig', d: 'cosy / pleasant' },
        { w: 'de bloemen', d: 'the flowers' },
        { w: 'het raam', d: 'the window' },
      ],
      choices: [
        { text: 'Ga vroeg slapen, morgen is er meer werk', hint: 'Uitrusten', next: 'c10g' },
        { text: 'Bel je moeder om over de dag te vertellen', hint: 'Familie', next: 'c10n' },
      ],
      quiz: { q: 'Wat wil Roos morgen kopen voor het raam?', opts: ['Gordijnen', 'Bloemen', 'Een lamp', 'Een spiegel'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'In de winkel',
      text: 'Je gaat naar de kleine winkel in de straat. De man achter de toonbank heet Bas.\n\n"Jij bent de nieuwe buurvrouw!" zegt hij blij. "Welkom!"\n\nJe koopt brood, kaas en appels. En een reep chocolade als traktatie.',
      vocab: [
        { w: 'de toonbank', d: 'the counter' },
        { w: 'de traktatie', d: 'the treat' },
        { w: 'de reep', d: 'the bar (of chocolate)' },
        { w: 'blij', d: 'happy / glad' },
      ],
      choices: [
        { text: 'Ga naar huis en eet snel', hint: 'Honger', next: 'c10g' },
        { text: 'Praat nog even met Bas over de buurt', hint: 'Kennismaken', next: 'c10n' },
      ],
      quiz: { q: 'Hoe heet de man in de winkel?', opts: ['Marco', 'Tim', 'Bas', 'Jan'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Een warm welkom', ending: 'good',
      text: 'Je slaapt goed in je nieuwe bed. De volgende ochtend klinkt de deurbel.\n\nHet is Marco met mevrouw Visser. Ze brengen een taart. "Welkom in de buurt, Roos!"\n\nJe hebt tranen in je ogen. Je nieuwe buurt is zo vriendelijk.\n\nJe nieuwe leven begint hier. En het begint heel goed.',
      vocab: [
        { w: 'de ochtend', d: 'the morning' },
        { w: 'klinken', d: 'to ring / to sound' },
        { w: 'het leven', d: 'the life' },
        { w: 'beginnen', d: 'to begin / to start' },
      ],
      choices: [],
      quiz: { q: 'Wie brengen een taart de volgende ochtend?', opts: ['Mevrouw Visser alleen', 'Marco alleen', 'Marco en mevrouw Visser', 'Bas uit de winkel'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een goede dag', ending: 'neutral',
      text: 'Je bent moe maar blij. Het huis is niet helemaal klaar. Er zijn nog dozen.\n\nMaar je hebt aardige buren ontmoet. Marco en mevrouw Visser zijn vriendelijk.\n\nMorgen ga je verder. Stap voor stap wordt het huis een thuis.',
      vocab: [
        { w: 'ontmoeten', d: 'to meet' },
        { w: 'stap voor stap', d: 'step by step' },
        { w: 'helemaal', d: 'completely / entirely' },
        { w: 'het thuis', d: 'the home' },
      ],
      choices: [],
      quiz: { q: 'Wat is er morgen nog te doen?', opts: ['Alles is klaar', 'Er zijn nog dozen over', 'De buren bezoeken', 'Naar de markt gaan'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een moeilijke start', ending: 'bad',
      text: 'De buurman is niet vriendelijk. Hij zegt: "Zet die dozen niet hier!"\n\nJe vindt de sleutel van het bed niet. Je slaapt op de bank.\n\nMaar morgen is een nieuwe dag. Je buurt heeft ook aardige mensen. Je ziet het morgen wel.',
      vocab: [
        { w: 'niet vriendelijk', d: 'unfriendly' },
        { w: 'de start', d: 'the start' },
        { w: 'morgen', d: 'tomorrow' },
        { w: 'zien', d: 'to see' },
      ],
      choices: [],
      quiz: { q: 'Waarom slaapt Roos op de bank?', opts: ['Het bed is kapot', 'Ze vindt de sleutel van het bed niet', 'De bank is comfortabeler', 'De slaapkamer is leeg'], a: 1 },
    },
  },
};
