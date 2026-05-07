import type { Story } from './types';

export const storyNlA1_4: Story = {
  id: 'nl-a1-4',
  level: 'A1',
  title: 'In de Supermarkt',
  genre: 'Humor',
  emoji: '🛒',
  coverColor: '#1e2a45',
  accentColor: '#6b9fd4',
  description: 'Je vergeet je portemonnee in de supermarkt. Wat nu?',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De boodschappenlijst',
      text: 'Het is woensdagmiddag. Jij bent Noor en je gaat boodschappen doen.\n\nJe hebt een lijst: brood, melk, appels en kaas. Je loopt naar de supermarkt.\n\nBij de ingang pak je een winkelwagen. De winkelwagen piept luid.\n\nWat doe je eerst?',
      vocab: [
        { w: 'de boodschappen', d: 'the groceries / shopping' },
        { w: 'de lijst', d: 'the list' },
        { w: 'de winkelwagen', d: 'the shopping cart / trolley' },
        { w: 'de ingang', d: 'the entrance' },
      ],
      choices: [
        { text: 'Pak een andere winkelwagen, deze piept', hint: 'Praktisch', next: 'c2a' },
        { text: 'Ga verder met de piekende winkelwagen', hint: 'Snel', next: 'c2b' },
      ],
      quiz: { q: 'Wat staat er op de boodschappenlijst van Noor?', opts: ['Brood, melk, appels, kaas', 'Brood, eieren, melk, koekjes', 'Thee, melk, kaas, worst', 'Appels, peren, brood, boter'], a: 0 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Een nieuwe wagen',
      text: 'Je pakt een andere winkelwagen. Die is stil en rijdt lekker.\n\nJe loopt naar de groente-afdeling. Er zijn mooie rode appels.\n\nJe pakt zes appels en legt ze in de wagen.',
      vocab: [
        { w: 'stil', d: 'quiet / silent' },
        { w: 'de afdeling', d: 'the section / department' },
        { w: 'de appel', d: 'the apple' },
        { w: 'rood', d: 'red' },
      ],
      choices: [
        { text: 'Ga naar de brood-afdeling', hint: 'Brood', next: 'c3a' },
        { text: 'Ga naar de zuivel-afdeling voor melk', hint: 'Melk', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel appels pakt Noor?', opts: ['Vier', 'Vijf', 'Zes', 'Zeven'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Piep piep piep',
      text: 'Je loopt met de piekende wagen door de winkel. Mensen kijken naar je.\n\nJe wangen worden rood. Je loopt snel naar de groente-afdeling.\n\nJe pakt snel zes appels en doet ze in de wagen.',
      vocab: [
        { w: 'piepen', d: 'to squeak / to beep' },
        { w: 'de wangen', d: 'the cheeks' },
        { w: 'snel', d: 'quickly / fast' },
        { w: 'kijken naar', d: 'to look at' },
      ],
      choices: [
        { text: 'Ga snel naar de brood-afdeling', hint: 'Brood', next: 'c3a' },
        { text: 'Haal eerst de melk uit de zuivel-afdeling', hint: 'Melk', next: 'c3b' },
      ],
      quiz: { q: 'Hoe voelt Noor met de piekende winkelwagen?', opts: ['Blij', 'Verlegen', 'Boos', 'Moe'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Het brood',
      text: 'Bij de brood-afdeling zijn er veel soorten. Wit brood, bruin brood, volkoren brood.\n\nJe pakt een bruin brood. Het ruikt vers en lekker.\n\nEr is ook een aanbieding: twee broden voor de prijs van één!',
      vocab: [
        { w: 'volkoren', d: 'wholegrain' },
        { w: 'vers', d: 'fresh' },
        { w: 'de aanbieding', d: 'the special offer / deal' },
        { w: 'de prijs', d: 'the price' },
      ],
      choices: [
        { text: 'Pak twee broden, het is een goede aanbieding', hint: 'Zuinig', next: 'c4a' },
        { text: 'Pak één brood, dat is genoeg', hint: 'Simpel', next: 'c4b' },
      ],
      quiz: { q: 'Wat voor brood pakt Noor?', opts: ['Wit brood', 'Bruin brood', 'Volkoren brood', 'Krentenbrood'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De melk',
      text: 'Je loopt naar de koelkast voor de melk. Er is gewone melk en halfvolle melk.\n\nJe pakt een pak halfvolle melk. Het pak is koud.\n\nJe ziet ook verse yoghurt. Je houdt van yoghurt!',
      vocab: [
        { w: 'de koelkast', d: 'the fridge / refrigerator' },
        { w: 'halfvol', d: 'semi-skimmed' },
        { w: 'het pak', d: 'the carton / packet' },
        { w: 'de yoghurt', d: 'the yoghurt' },
      ],
      choices: [
        { text: 'Pak ook de yoghurt, je houdt ervan', hint: 'Lekker', next: 'c4a' },
        { text: 'Blijf bij de lijst, geen yoghurt', hint: 'Verstandig', next: 'c4b' },
      ],
      quiz: { q: 'Welke melk pakt Noor?', opts: ['Volle melk', 'Halfvolle melk', 'Magere melk', 'Sojamelk'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'De kaas',
      text: 'Je gaat naar de kaas-afdeling. Er zijn veel soorten kaas. Jong, oud, belegen.\n\nJe pakt een stuk belegen kaas. Het is jouw lievelingskaas.\n\nDe winkelwagen is nu bijna vol.',
      vocab: [
        { w: 'belegen', d: 'mature (cheese)' },
        { w: 'jong', d: 'young / mild' },
        { w: 'de lievelingskaas', d: 'the favourite cheese' },
        { w: 'bijna', d: 'almost / nearly' },
      ],
      choices: [
        { text: 'Ga naar de kassa, je hebt alles', hint: 'Klaar', next: 'c5a' },
        { text: 'Loop nog even door de winkel', hint: 'Kijken', next: 'c5b' },
      ],
      quiz: { q: 'Welke kaas kiest Noor?', opts: ['Jonge kaas', 'Belegen kaas', 'Oude kaas', 'Geitenkaas'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Alleen de lijst',
      text: 'Je haalt alleen de kaas van de lijst. Een stuk belegen Goudse kaas.\n\nJe winkelwagen heeft nu alles: appels, brood, melk en kaas.\n\n"Goed gedaan", denk je. "Ik heb alleen maar wat op de lijst staat."',
      vocab: [
        { w: 'Gouds', d: 'Gouda (style)' },
        { w: 'alleen maar', d: 'only / just' },
        { w: 'de kaas', d: 'the cheese' },
        { w: 'alles', d: 'everything' },
      ],
      choices: [
        { text: 'Ga naar de kassa, je hebt alles', hint: 'Klaar', next: 'c5a' },
        { text: 'Loop nog even door de winkel', hint: 'Kijken', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft Noor nu in de winkelwagen?', opts: ['Appels en brood', 'Melk en kaas', 'Appels, brood, melk en kaas', 'Alles plus yoghurt'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Bij de kassa',
      text: 'Je staat bij de kassa. De kassamedewerker scant alles.\n\n"Dat is twaalf euro vijftig", zegt ze.\n\nJe pakt je tas. Je zoekt je portemonnee. Ze is er niet!',
      vocab: [
        { w: 'de kassa', d: 'the checkout / cash register' },
        { w: 'scannen', d: 'to scan' },
        { w: 'de portemonnee', d: 'the wallet / purse' },
        { w: 'de tas', d: 'the bag' },
      ],
      choices: [
        { text: 'Vraag de kassamedewerker om hulp', hint: 'Hulp', next: 'c6a' },
        { text: 'Bel je huisgenoot om de portemonnee te brengen', hint: 'Bellen', next: 'c6b' },
      ],
      quiz: { q: 'Hoeveel kost de boodschappen?', opts: ['Tien euro', 'Twaalf euro vijftig', 'Vijftien euro', 'Acht euro'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Nog even rondlopen',
      text: 'Je loopt door de snoep-afdeling. Er zijn veel lekkere dingen.\n\nJe pakt een reep chocolade. En dan nog een koekje.\n\nNu heb je meer dan op je lijst. Je gaat naar de kassa.',
      vocab: [
        { w: 'de snoep-afdeling', d: 'the sweets / confectionery aisle' },
        { w: 'de reep', d: 'the bar (of chocolate)' },
        { w: 'de chocolade', d: 'the chocolate' },
        { w: 'meer dan', d: 'more than' },
      ],
      choices: [
        { text: 'Leg de chocolade en het koekje terug', hint: 'Verstandig', next: 'c6a' },
        { text: 'Houd ze, je hebt een traktatie verdiend', hint: 'Lekker', next: 'c6b' },
      ],
      quiz: { q: 'Wat pakt Noor extra in de snoep-afdeling?', opts: ['Snoep en sap', 'Chocolade en een koekje', 'Chips en cola', 'Kauwgum en drop'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Geen portemonnee',
      text: 'Je zoekt overal in je tas. De portemonnee is echt weg!\n\nJe staat bij de kassa. De mensen achter je wachten ongeduldig.\n\nJe wangen worden rood. Wat doe je nu?',
      vocab: [
        { w: 'overal', d: 'everywhere' },
        { w: 'echt', d: 'really / truly' },
        { w: 'ongeduldig', d: 'impatient' },
        { w: 'achter', d: 'behind' },
      ],
      choices: [
        { text: 'Vraag de vrouw achter je om te wachten', hint: 'Beleefd', next: 'c7a' },
        { text: 'Laat alles staan en ga portemonnee zoeken', hint: 'Weggaan', next: 'c7b' },
      ],
      quiz: { q: 'Hoe voelt Noor zonder portemonnee bij de kassa?', opts: ['Ze lacht', 'Haar wangen worden rood', 'Ze huilt', 'Ze is boos'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Huisgenoot bellen',
      text: 'Je stapt opzij en belt je huisgenoot Tim.\n\n"Tim, ik heb mijn portemonnee vergeten. Kun jij hem brengen?"\n\nTim zegt: "Waar ben je?" Je geeft het adres van de supermarkt.',
      vocab: [
        { w: 'opzij stappen', d: 'to step aside' },
        { w: 'vergeten', d: 'to forget' },
        { w: 'het adres', d: 'the address' },
        { w: 'brengen', d: 'to bring' },
      ],
      choices: [
        { text: 'Wacht bij de ingang op Tim', hint: 'Wachten', next: 'c7a' },
        { text: 'Vraag een vreemdeling om twaalf euro vijftig', hint: 'Hulp', next: 'c7b' },
      ],
      quiz: { q: 'Wie belt Noor om hulp?', opts: ['Haar moeder', 'Haar baas', 'Haar huisgenoot Tim', 'Haar buurvrouw'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Wachten op Tim',
      text: 'Je wacht bij de ingang. Na twintig minuten komt Tim met je portemonnee.\n\n"Hier!" zegt hij en hij lacht. "Je liet hem thuis op de tafel liggen."\n\nJe bent blij maar ook een beetje verlegen.',
      vocab: [
        { w: 'twintig', d: 'twenty' },
        { w: 'liggen', d: 'to lie / to be lying' },
        { w: 'verlegen', d: 'embarrassed / shy' },
        { w: 'thuis', d: 'at home' },
      ],
      choices: [
        { text: 'Bedank Tim en ga terug naar de kassa', hint: 'Dankbaar', next: 'c8a' },
        { text: 'Koop iets lekkers voor Tim als dank', hint: 'Lief', next: 'c8b' },
      ],
      quiz: { q: 'Waar lag de portemonnee?', opts: ['In de auto', 'Op de tafel thuis', 'In de jas', 'Bij de buren'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Een vreemdeling vragen',
      text: 'Je vraagt een aardige vrouw: "Pardon, ik heb mijn portemonnee vergeten. Kunt u mij helpen?"\n\nZe kijkt verbaasd, maar dan knikt ze. "Hoeveel heb je nodig?"\n\n"Twaalf euro vijftig. Ik betaal u morgen terug."',
      vocab: [
        { w: 'pardon', d: 'excuse me' },
        { w: 'verbaasd', d: 'surprised' },
        { w: 'hoeveel', d: 'how much' },
        { w: 'terugbetalen', d: 'to pay back' },
      ],
      choices: [
        { text: 'Schrijf haar naam en nummer op om terug te betalen', hint: 'Eerlijk', next: 'c8a' },
        { text: 'Dank haar veel en beloof het terug te betalen', hint: 'Dankbaar', next: 'c8b' },
      ],
      quiz: { q: 'Wat belooft Noor de vrouw?', opts: ['Ze geeft haar een cadeau', 'Ze betaalt haar morgen terug', 'Ze belt haar later', 'Ze kookt voor haar'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Terug bij de kassa',
      text: 'Je staat weer bij de kassa. De kassamedewerker lacht vriendelijk.\n\n"Alles goed?" vraagt ze.\n\n"Ja, dank u." Je betaalt en pakt je boodschappen. Eindelijk!',
      vocab: [
        { w: 'weer', d: 'again' },
        { w: 'vriendelijk', d: 'friendly / kindly' },
        { w: 'betalen', d: 'to pay' },
        { w: 'eindelijk', d: 'finally' },
      ],
      choices: [
        { text: 'Loop snel naar huis met de boodschappen', hint: 'Snel', next: 'c9a' },
        { text: 'Zeg de kassamedewerker sorry voor het wachten', hint: 'Beleefd', next: 'c9b' },
      ],
      quiz: { q: 'Hoe reageert de kassamedewerker?', opts: ['Ze is boos', 'Ze lacht vriendelijk', 'Ze zegt niets', 'Ze roept de manager'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Een kleine traktatie',
      text: 'Je koopt een chocoladereep voor Tim. Of voor de aardige vrouw die hielp.\n\nAan de kassa zegt de kassamedewerker: "Dat was grappig om te zien."\n\nJe lacht ook. Nu is het al grappig.',
      vocab: [
        { w: 'de traktatie', d: 'the treat' },
        { w: 'de chocoladereep', d: 'the chocolate bar' },
        { w: 'grappig', d: 'funny' },
        { w: 'zien', d: 'to see' },
      ],
      choices: [
        { text: 'Loop naar huis met de boodschappen', hint: 'Klaar', next: 'c9a' },
        { text: 'Praat nog even met de kassamedewerker', hint: 'Gezellig', next: 'c9b' },
      ],
      quiz: { q: 'Wat vindt de kassamedewerker van de situatie?', opts: ['Ze is boos', 'Ze is verdrietig', 'Ze vindt het grappig', 'Ze begrijpt het niet'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Op weg naar huis',
      text: 'Je loopt naar huis met je boodschappen. Het is zwaar maar je bent blij.\n\nJe denkt: "Volgende keer controleer ik mijn tas voor ik de deur uit ga."\n\nJe glimlacht. Vandaag was een avontuur.',
      vocab: [
        { w: 'controleren', d: 'to check' },
        { w: 'de deur uit gaan', d: 'to go out the door' },
        { w: 'het avontuur', d: 'the adventure' },
        { w: 'volgende keer', d: 'next time' },
      ],
      choices: [
        { text: 'Ga direct naar huis en zet alles weg', hint: 'Verstandig', next: 'c10g' },
        { text: 'Bel Tim om te lachen over vandaag', hint: 'Grappig', next: 'c10n' },
      ],
      quiz: { q: 'Wat besluit Noor volgende keer te doen?', opts: ['Een lijstje schrijven', 'Haar tas controleren', 'Tim meenemen', 'Pinnen in plaats van contant'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Een gesprekje',
      text: 'Je praat even met de kassamedewerker. Haar naam is Hanna.\n\n"Dit overkomt veel mensen", zegt Hanna. "Vorige week vergat iemand zijn hele tas thuis."\n\nJe lacht. Je voelt je beter.',
      vocab: [
        { w: 'overkomen', d: 'to happen to someone' },
        { w: 'vorige week', d: 'last week' },
        { w: 'iemand', d: 'someone' },
        { w: 'de hele', d: 'the whole / the entire' },
      ],
      choices: [
        { text: 'Ga naar huis, het is al laat', hint: 'Snel', next: 'c10g' },
        { text: 'Loop langzaam naar huis en denk na', hint: 'Rustig', next: 'c10n' },
      ],
      quiz: { q: 'Hoe heet de kassamedewerker?', opts: ['Lisa', 'Anna', 'Hanna', 'Emma'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Thuis met boodschappen', ending: 'good',
      text: 'Thuis zet je alle boodschappen weg. Tim zit op de bank.\n\n"Dank je wel voor de portemonnee", zeg je. Je geeft hem de chocoladereep.\n\nTim lacht. "Geen probleem. Maar schrijf volgende keer portemonnee op je lijst!"\n\nJullie lachen samen. Het was een grappige middag.',
      vocab: [
        { w: 'wegzetten', d: 'to put away' },
        { w: 'geen probleem', d: 'no problem' },
        { w: 'samen', d: 'together' },
        { w: 'de middag', d: 'the afternoon' },
      ],
      choices: [],
      quiz: { q: 'Wat geeft Noor aan Tim als dank?', opts: ['Geld', 'Een koekje', 'Een chocoladereep', 'Een knuffel'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Halve boodschappen', ending: 'neutral',
      text: 'Thuis laat je de helft van de boodschappen staan. De brood-afdeling was uitverkocht.\n\nJe hebt melk, appels en kaas. Maar geen brood.\n\nMorgen ga je weer. Deze keer met je portemonnee. En je controleert je tas.',
      vocab: [
        { w: 'de helft', d: 'the half' },
        { w: 'uitverkocht', d: 'sold out' },
        { w: 'deze keer', d: 'this time' },
        { w: 'morgen', d: 'tomorrow' },
      ],
      choices: [],
      quiz: { q: 'Wat heeft Noor niet gekocht?', opts: ['Melk', 'Appels', 'Brood', 'Kaas'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Heel gênant', ending: 'bad',
      text: 'De kassamedewerker moest alles terug leggen. Dat duurde lang. Mensen waren boos.\n\nJe liep rood van schaamte de winkel uit. Zonder boodschappen.\n\nThuis pak je een appel uit de fruitschaal. Je hebt morgen weer boodschappen nodig. En je portemonnee.',
      vocab: [
        { w: 'gênant', d: 'embarrassing' },
        { w: 'de schaamte', d: 'the shame' },
        { w: 'de fruitschaal', d: 'the fruit bowl' },
        { w: 'terugleggen', d: 'to put back' },
      ],
      choices: [],
      quiz: { q: 'Waarmee gaat Noor naar huis?', opts: ['Met alle boodschappen', 'Met de helft', 'Met alleen brood', 'Zonder boodschappen'], a: 3 },
    },
  },
};
