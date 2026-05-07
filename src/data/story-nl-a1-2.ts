import type { Story } from './types';

export const storyNlA1_2: Story = {
  id: 'nl-a1-2',
  level: 'A1',
  title: 'Mijn Eerste Dag',
  genre: 'Dagelijks leven',
  emoji: '☕',
  coverColor: '#3a2a1e',
  accentColor: '#c8905a',
  description: 'Je begint een nieuwe baan in een café. Alles is nieuw en spannend.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De eerste dag',
      text: 'Het is maandagochtend. Jij bent Sara en je hebt een nieuwe baan in Café De Zon.\n\nJe staat voor de deur. Je hart klopt snel. Het café is klein en gezellig.\n\nJe baas heet meneer Smit. Hij staat bij de toonbank en lacht naar je.\n\nWat doe je eerst?',
      vocab: [
        { w: 'de baan', d: 'the job' },
        { w: 'het café', d: 'the café' },
        { w: 'de baas', d: 'the boss' },
        { w: 'de toonbank', d: 'the counter' },
      ],
      choices: [
        { text: 'Ga naar binnen en stel je voor', hint: 'Stoutmoedig', next: 'c2a' },
        { text: 'Wacht even buiten en haal adem', hint: 'Rustig', next: 'c2b' },
      ],
      quiz: { q: 'Hoe heet de baas van het café?', opts: ['Meneer Bakker', 'Meneer De Vries', 'Meneer Smit', 'Meneer Jansen'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Hallo allemaal',
      text: 'Je gaat naar binnen. "Goedemorgen! Ik ben Sara, de nieuwe medewerker."\n\nMeneer Smit geeft je een hand. "Welkom, Sara! Dit is Lena, je collega."\n\nLena lacht. "Hoi Sara! Ik leer je alles. Kom maar mee!"',
      vocab: [
        { w: 'de medewerker', d: 'the employee' },
        { w: 'de collega', d: 'the colleague' },
        { w: 'welkom', d: 'welcome' },
        { w: 'leren', d: 'to teach / to learn' },
      ],
      choices: [
        { text: 'Leer de kaart van het café kennen', hint: 'Slim', next: 'c3a' },
        { text: 'Kijk hoe Lena koffie maakt', hint: 'Observeren', next: 'c3b' },
      ],
      quiz: { q: 'Hoe heet de collega van Sara?', opts: ['Anna', 'Lena', 'Nina', 'Mia'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Even wachten',
      text: 'Je staat buiten en haalt drie keer diep adem. Je voelt je beter.\n\nDan ga je naar binnen. "Goedemorgen, ik ben Sara."\n\nMeneer Smit knikt. "Goed. Lena legt alles uit. Volg haar maar."',
      vocab: [
        { w: 'buiten', d: 'outside' },
        { w: 'diep', d: 'deep' },
        { w: 'adem halen', d: 'to breathe' },
        { w: 'volgen', d: 'to follow' },
      ],
      choices: [
        { text: 'Leer de kaart van het café kennen', hint: 'Slim', next: 'c3a' },
        { text: 'Kijk hoe Lena koffie maakt', hint: 'Observeren', next: 'c3b' },
      ],
      quiz: { q: 'Wat doet Sara buiten voordat ze naar binnen gaat?', opts: ['Ze zingt', 'Ze belt iemand', 'Ze haalt diep adem', 'Ze eet iets'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'De kaart',
      text: 'Lena geeft je de menukaart. Er zijn tien soorten koffie en vijf soorten thee.\n\nEr zijn ook broodjes en taarten. De namen zijn moeilijk.\n\n"Maak je geen zorgen", zegt Lena. "Dat leer je snel."',
      vocab: [
        { w: 'de menukaart', d: 'the menu' },
        { w: 'de taart', d: 'the cake' },
        { w: 'moeilijk', d: 'difficult' },
        { w: 'zorgen', d: 'worries' },
      ],
      choices: [
        { text: 'Lees de kaart heel goed door', hint: 'Nauwkeurig', next: 'c4a' },
        { text: 'Vraag Lena de drie populairste dingen', hint: 'Slim', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel soorten koffie zijn er?', opts: ['Vijf', 'Tien', 'Acht', 'Twaalf'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Koffie maken',
      text: 'Lena laat zien hoe ze koffie maakt. Ze drukt op knoppen en de machine pruttelt.\n\n"Cappuccino, latte, espresso — dit zijn de drie meest populaire dranken."\n\nJe kijkt goed. De machine ziet er groot en ingewikkeld uit.',
      vocab: [
        { w: 'de machine', d: 'the machine' },
        { w: 'pruttelen', d: 'to gurgle / to splutter' },
        { w: 'populair', d: 'popular' },
        { w: 'ingewikkeld', d: 'complicated' },
      ],
      choices: [
        { text: 'Probeer zelf koffie te maken', hint: 'Oefenen', next: 'c4a' },
        { text: 'Stel eerst vragen aan Lena', hint: 'Zeker', next: 'c4b' },
      ],
      quiz: { q: 'Welke drie dranken noemt Lena?', opts: ['Thee, sap, water', 'Cappuccino, latte, espresso', 'Melk, cola, bier', 'Thee, koffie, cacao'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Jij oefent',
      text: 'Je maakt je eerste cappuccino. Je drukt op de knoppen. De koffie komt eruit.\n\nMaar je gooit ook melkschuim op het blad. Lena lacht vriendelijk.\n\n"Goed geprobeerd! Maak het maar schoon. Dat overkomt iedereen."',
      vocab: [
        { w: 'het melkschuim', d: 'the milk foam' },
        { w: 'het blad', d: 'the tray' },
        { w: 'schoonmaken', d: 'to clean up' },
        { w: 'vriendelijk', d: 'kindly / friendly' },
      ],
      choices: [
        { text: 'Maak het blad schoon en probeer opnieuw', hint: 'Doorzetten', next: 'c5a' },
        { text: 'Vraag Lena het voor je te doen', hint: 'Hulp', next: 'c5b' },
      ],
      quiz: { q: 'Wat gooit Sara op het blad?', opts: ['Koffie', 'Thee', 'Melkschuim', 'Water'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Vragen stellen',
      text: '"Lena, wat zijn de drie meest gevraagde dingen?" vraag je.\n\n"Cappuccino, een broodje kaas en een stuk appeltaart", zegt ze.\n\n"Perfect. Dan leer ik die drie eerst." Lena knikt goedkeurend.',
      vocab: [
        { w: 'gevraagd', d: 'requested / asked for' },
        { w: 'het broodje', d: 'the bread roll' },
        { w: 'de appeltaart', d: 'the apple cake / pie' },
        { w: 'goedkeurend', d: 'approvingly' },
      ],
      choices: [
        { text: 'Oefen meteen het broodje kaas maken', hint: 'Actief', next: 'c5a' },
        { text: 'Leer eerst de kassa te bedienen', hint: 'Handig', next: 'c5b' },
      ],
      quiz: { q: 'Wat zijn de drie meest gevraagde producten?', opts: ['Thee, soep, brood', 'Cappuccino, broodje kaas, appeltaart', 'Latte, cake, thee', 'Espresso, croissant, sap'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'De eerste klant',
      text: 'Je eerste klant is een oude mevrouw. Ze wil een cappuccino en een koekje.\n\nJe maakt de cappuccino goed. Ze glimlacht. "Dank je wel, lieverd."\n\nJe voelt je trots. Dit gaat goed!',
      vocab: [
        { w: 'de klant', d: 'the customer' },
        { w: 'het koekje', d: 'the cookie / biscuit' },
        { w: 'glimlachen', d: 'to smile' },
        { w: 'trots', d: 'proud' },
      ],
      choices: [
        { text: 'Help de volgende klant zelfstandig', hint: 'Zelfstandig', next: 'c6a' },
        { text: 'Vertel Lena over je succes', hint: 'Delen', next: 'c6b' },
      ],
      quiz: { q: 'Wat wil de eerste klant?', opts: ['Thee en cake', 'Cappuccino en koekje', 'Latte en broodje', 'Espresso en taart'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'De kassa',
      text: 'Lena legt uit hoe de kassa werkt. Er zijn veel knoppen. Je schrijft alles op.\n\nEen klant bestelt een koffie. Je typt het in. Het gaat goed!\n\n"Goed gedaan, Sara!" zegt Lena.',
      vocab: [
        { w: 'de kassa', d: 'the cash register' },
        { w: 'bestellen', d: 'to order' },
        { w: 'typen', d: 'to type' },
        { w: 'goed gedaan', d: 'well done' },
      ],
      choices: [
        { text: 'Help de volgende klant alleen', hint: 'Zelfstandig', next: 'c6a' },
        { text: 'Vraag Lena bij je te blijven', hint: 'Zekerheid', next: 'c6b' },
      ],
      quiz: { q: 'Wat schrijft Sara op?', opts: ['De namen van klanten', 'Hoe de kassa werkt', 'De menukaart', 'Het adres van het café'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Een lastige klant',
      text: 'Een man komt binnen. Hij is ongeduldig. "Ik wacht al vijf minuten!"\n\nJij zegt kalm: "Het spijt me, meneer. Uw koffie is zo klaar."\n\nDe man gaat zitten. Meneer Smit knikt goedkeurend naar je.',
      vocab: [
        { w: 'ongeduldig', d: 'impatient' },
        { w: 'wachten', d: 'to wait' },
        { w: 'kalm', d: 'calm' },
        { w: 'het spijt me', d: "I'm sorry" },
      ],
      choices: [
        { text: 'Maak zijn koffie snel en zorgvuldig', hint: 'Professioneel', next: 'c7a' },
        { text: 'Vertel Lena over de lastige klant', hint: 'Steun', next: 'c7b' },
      ],
      quiz: { q: 'Hoe reageert Sara op de ongeduldig klant?', opts: ['Ze wordt boos', 'Ze zegt niets', 'Ze blijft kalm', 'Ze roept Lena'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Met Lena',
      text: 'Lena staat naast je. Er komt een man met veel vragen. Hij wil weten wat glutenvrij is.\n\nLena helpt hem geduldig. Jij luistert en schrijft op.\n\n"Goed dat je alles opschrijft", zegt Lena later.',
      vocab: [
        { w: 'glutenvrij', d: 'gluten-free' },
        { w: 'geduldig', d: 'patient' },
        { w: 'luisteren', d: 'to listen' },
        { w: 'opschrijven', d: 'to write down' },
      ],
      choices: [
        { text: 'Help de volgende klant zelfstandig', hint: 'Zelfstandig', next: 'c7a' },
        { text: 'Vraag Lena meer tips voor moeilijke klanten', hint: 'Leren', next: 'c7b' },
      ],
      quiz: { q: 'Waarover heeft de man met veel vragen?', opts: ['De prijs', 'De openingstijden', 'Glutenvrij eten', 'De koffie'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Koffie morsen',
      text: 'Je draagt drie kopjes koffie op een blad. Je struikelt over een stoel.\n\nEén kopje valt op de grond. De koffie is overal. Je wangen worden rood.\n\nMeneer Smit komt snel. "Geen probleem, Sara. Maak het schoon."',
      vocab: [
        { w: 'dragen', d: 'to carry' },
        { w: 'struikelen', d: 'to trip' },
        { w: 'de wangen', d: 'the cheeks' },
        { w: 'geen probleem', d: 'no problem' },
      ],
      choices: [
        { text: 'Maak alles schoon en bied een nieuw kopje aan', hint: 'Verantwoordelijk', next: 'c8a' },
        { text: 'Vraag Lena om te helpen opruimen', hint: 'Hulp', next: 'c8b' },
      ],
      quiz: { q: 'Waarom valt het kopje?', opts: ['Sara is moe', 'Ze struikelt over een stoel', 'De klant botst', 'Het blad is nat'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Tips van Lena',
      text: 'Lena geeft je drie tips: blijf rustig, luister goed en zeg altijd sorry.\n\n"En lach altijd", zegt ze. "Klanten houden van een lach."\n\nJe schrijft de tips op in je notitieboekje.',
      vocab: [
        { w: 'de tip', d: 'the tip / advice' },
        { w: 'altijd', d: 'always' },
        { w: 'het notitieboekje', d: 'the notebook' },
        { w: 'houden van', d: 'to like / to love' },
      ],
      choices: [
        { text: 'Ga terug naar de klanten met nieuwe energie', hint: 'Enthousiast', next: 'c8a' },
        { text: 'Neem een korte pauze eerst', hint: 'Rusten', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel tips geeft Lena?', opts: ['Één', 'Twee', 'Drie', 'Vier'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Het drukste uur',
      text: 'Om twaalf uur is het café vol. Er zijn veel klanten. Jij en Lena werken snel.\n\nJe vergeet bijna één bestelling, maar je ziet het op tijd.\n\nNa een uur is het rustiger. Meneer Smit lacht. "Goed gedaan, Sara!"',
      vocab: [
        { w: 'vol', d: 'full / busy' },
        { w: 'vergeten', d: 'to forget' },
        { w: 'de bestelling', d: 'the order' },
        { w: 'op tijd', d: 'on time / in time' },
      ],
      choices: [
        { text: 'Eet je lunch en praat met Lena', hint: 'Pauze', next: 'c9a' },
        { text: 'Vraag meneer Smit hoe je het deed', hint: 'Feedback', next: 'c9b' },
      ],
      quiz: { q: 'Hoe laat is het café het drukst?', opts: ['Om elf uur', 'Om twaalf uur', 'Om één uur', 'Om twee uur'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Even rusten',
      text: 'Je neemt vijf minuten pauze in de keuken. Je drinkt water.\n\nLena komt ook. "De eerste dag is altijd zwaar. Je doet het goed."\n\nJe glimlacht. "Dank je, Lena. Ik leer veel."',
      vocab: [
        { w: 'de pauze', d: 'the break' },
        { w: 'de keuken', d: 'the kitchen' },
        { w: 'zwaar', d: 'heavy / tough' },
        { w: 'goed doen', d: 'to do well' },
      ],
      choices: [
        { text: 'Ga terug en help bij de lunch', hint: 'Doorzetten', next: 'c9a' },
        { text: 'Vraag meneer Smit hoe je het deed', hint: 'Feedback', next: 'c9b' },
      ],
      quiz: { q: 'Wat drinkt Sara tijdens haar pauze?', opts: ['Koffie', 'Thee', 'Water', 'Sap'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'De lunch',
      text: 'Je eet een broodje in de keuken met Lena. Ze vertelt over het café.\n\n"Meneer Smit is streng maar eerlijk. Als hij niets zegt, doe je het goed."\n\n"En hij zei niets slechts over jou vandaag", zegt Lena met een glimlach.',
      vocab: [
        { w: 'streng', d: 'strict' },
        { w: 'eerlijk', d: 'fair / honest' },
        { w: 'slecht', d: 'bad' },
        { w: 'vandaag', d: 'today' },
      ],
      choices: [
        { text: 'Ga enthousiast door met de middag', hint: 'Gemotiveerd', next: 'c10g' },
        { text: 'Hoop dat de middag rustiger is', hint: 'Voorzichtig', next: 'c10n' },
      ],
      quiz: { q: 'Wat zegt Lena over meneer Smit?', opts: ['Hij is aardig', 'Hij is lui', 'Hij is streng maar eerlijk', 'Hij is ziek'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Feedback',
      text: 'Je vraagt meneer Smit: "Hoe deed ik het vandaag?"\n\nHij denkt even na. "Je hebt fouten gemaakt, maar je leert snel."\n\nDan kijkt hij naar Lena. "Ze is beter dan ik dacht." Lena knipoogt naar je.',
      vocab: [
        { w: 'de fout', d: 'the mistake' },
        { w: 'nadenken', d: 'to think / to consider' },
        { w: 'knipogen', d: 'to wink' },
        { w: 'beter', d: 'better' },
      ],
      choices: [
        { text: 'Bedank hem en ga door met werken', hint: 'Professioneel', next: 'c10g' },
        { text: 'Vraag wat je beter kunt doen', hint: 'Leren', next: 'c10n' },
      ],
      quiz: { q: 'Wat zegt meneer Smit over Sara?', opts: ['Ze is te langzaam', 'Ze is perfect', 'Ze maakt fouten maar leert snel', 'Ze moet stoppen'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Morgen weer!', ending: 'good',
      text: 'Aan het einde van de dag roept meneer Smit je. "Sara, je eerste dag was goed. Ik zie je morgen."\n\nLena omhelst je. "Welkom in het team!"\n\nJe loopt naar huis met een groot glimlach. Je hebt fouten gemaakt, maar je hebt ook veel geleerd.\n\nMorgen ga je weer. En morgen wordt het nog beter.',
      vocab: [
        { w: 'het einde', d: 'the end' },
        { w: 'omhelzen', d: 'to hug' },
        { w: 'het team', d: 'the team' },
        { w: 'morgen', d: 'tomorrow' },
      ],
      choices: [],
      quiz: { q: 'Wat zegt meneer Smit aan het einde van de dag?', opts: ['Sara moet stoppen', 'Sara is niet goed', 'Sara was goed, tot morgen', 'Sara moet meer oefenen'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een redelijke dag', ending: 'neutral',
      text: 'De dag is klaar. Je bent moe. Je hebt fouten gemaakt, maar ook goede dingen gedaan.\n\nMeneer Smit zegt niets speciaals. Lena zegt: "Morgen beter."\n\nJe loopt naar huis. De eerste dag is altijd moeilijk. Morgen probeer je het opnieuw.',
      vocab: [
        { w: 'redelijk', d: 'reasonable / decent' },
        { w: 'moe', d: 'tired' },
        { w: 'speciaal', d: 'special' },
        { w: 'opnieuw', d: 'again / anew' },
      ],
      choices: [],
      quiz: { q: 'Wat zegt Lena aan het einde van de dag?', opts: ['Goed gedaan', 'Stop morgen', 'Morgen beter', 'Het was perfect'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een moeilijke dag', ending: 'bad',
      text: 'Aan het einde van de dag is meneer Smit niet blij. "Sara, er waren te veel fouten vandaag."\n\nJij voelt je slecht. Lena knijpt even in je arm. "Het gaat beter, echt."\n\nJe loopt naar huis. Je eerste dag was zwaar. Maar je geeft niet op. Morgen is een nieuwe dag.',
      vocab: [
        { w: 'te veel', d: 'too many' },
        { w: 'knijpen', d: 'to squeeze' },
        { w: 'opgeven', d: 'to give up' },
        { w: 'nieuw', d: 'new' },
      ],
      choices: [],
      quiz: { q: 'Waarom is meneer Smit niet blij?', opts: ['Sara is te laat', 'Er zijn te veel fouten', 'Het café is leeg', 'Lena is weg'], a: 1 },
    },
  },
};
