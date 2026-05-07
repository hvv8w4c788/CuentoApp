import type { Story } from './types';

export const storyNlA1_1: Story = {
  id: 'nl-a1-1',
  level: 'A1',
  title: 'De Verdwaalde Kat',
  genre: 'Avontuur',
  emoji: '🐱',
  coverColor: '#2a3d2e',
  accentColor: '#7ab87e',
  description: 'Jouw kat Moos is weg. Zoek je trouwe vriend in de buurt.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Moos is weg',
      text: 'Het is zaterdagochtend. Jij bent Tom en je hebt een kat, Moos. Moos is oranje en klein.\n\nJe gaat naar de keuken. Moos is er niet. Je zoekt in de tuin. Moos is daar ook niet.\n\n"Moos! Moos!" — roep je. Maar er is geen antwoord.\n\nWat doe je?',
      vocab: [
        { w: 'de kat', d: 'the cat' },
        { w: 'weg', d: 'gone / away' },
        { w: 'zoeken', d: 'to look for' },
        { w: 'de tuin', d: 'the garden' },
      ],
      choices: [
        { text: 'Ga naar buiten om Moos te zoeken', hint: 'Actief', next: 'c2a' },
        { text: 'Bel je buurvrouw om te vragen', hint: 'Slim', next: 'c2b' },
      ],
      quiz: { q: 'Wat is de naam van de kat?', opts: ['Pip', 'Moos', 'Max', 'Luna'], a: 1 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Op straat',
      text: 'Je gaat naar buiten. De straat is rustig. Je ziet een meisje met een fiets.\n\n"Heb jij een oranje kat gezien?" — vraag je.\n\nHet meisje zegt: "Ja! Er loopt een kat bij het park. Daar, links!"',
      vocab: [
        { w: 'de straat', d: 'the street' },
        { w: 'rustig', d: 'quiet' },
        { w: 'het park', d: 'the park' },
        { w: 'links', d: 'to the left' },
      ],
      choices: [
        { text: 'Ga snel naar het park', hint: 'Snel', next: 'c3a' },
        { text: 'Vraag meer mensen in de buurt', hint: 'Zeker', next: 'c3b' },
      ],
      quiz: { q: 'Wie helpt Tom op straat?', opts: ['Een jongen', 'Een meisje', 'Een man', 'Een vrouw'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'De buurvrouw',
      text: 'Je belt mevrouw De Vries, je aardige buurvrouw.\n\n"Goedemorgen, mevrouw De Vries. Hebt u Moos gezien?"\n\n"Ja, Tom. Je kat zit bij het park. Ik zag hem tien minuten geleden."',
      vocab: [
        { w: 'de buurvrouw', d: 'the (female) neighbour' },
        { w: 'aardig', d: 'kind / nice' },
        { w: 'zien', d: 'to see' },
        { w: 'geleden', d: 'ago' },
      ],
      choices: [
        { text: 'Ga meteen naar het park toe', hint: 'Snel', next: 'c3a' },
        { text: 'Vraag meer informatie aan haar', hint: 'Zeker', next: 'c3b' },
      ],
      quiz: { q: 'Waar heeft mevrouw De Vries Moos gezien?', opts: ['In de tuin', 'Op straat', 'Bij het park', 'In de winkel'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'In het park',
      text: 'Je loopt naar het park. Het park is groen en groot. Je hoort vogels.\n\nPlotseling zie je iets oranje achter een boom. Het is Moos!\n\nMoos zit hoog in een boom. Hij kijkt naar beneden.',
      vocab: [
        { w: 'de vogel', d: 'the bird' },
        { w: 'plotseling', d: 'suddenly' },
        { w: 'de boom', d: 'the tree' },
        { w: 'beneden', d: 'down / below' },
      ],
      choices: [
        { text: 'Klim in de boom om Moos te halen', hint: 'Dapper', next: 'c4a' },
        { text: 'Roep Moos vanuit de boom', hint: 'Rustig', next: 'c4b' },
      ],
      quiz: { q: 'Waar zit Moos in het park?', opts: ['Op de grond', 'In het water', 'In een boom', 'Op een bank'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Meer informatie',
      text: 'Je praat met een oude man op de hoek.\n\n"Ja, ik zie elke dag een oranje kat bij het park", zegt hij.\n\nJe loopt naar het park. Je ziet Moos hoog in een boom zitten.',
      vocab: [
        { w: 'de hoek', d: 'the corner' },
        { w: 'elke dag', d: 'every day' },
        { w: 'praten', d: 'to talk' },
        { w: 'hoog', d: 'high up' },
      ],
      choices: [
        { text: 'Roep Moos luid vanonder de boom', hint: 'Rustig', next: 'c4b' },
        { text: 'Klim in de boom om Moos te pakken', hint: 'Dapper', next: 'c4a' },
      ],
      quiz: { q: 'Wat zegt de oude man over de kat?', opts: ['Hij kent de kat niet', 'Hij ziet hem elke dag', 'De kat is gevaarlijk', 'De kat is weg'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'In de boom',
      text: 'Je klimt in de boom. De takken zijn sterk. Je komt dicht bij Moos.\n\nMoos springt plotseling naar een hogere tak. Je bijna valt!\n\nEen parkwachter helpt je veilig naar beneden te komen.',
      vocab: [
        { w: 'de tak', d: 'the branch' },
        { w: 'sterk', d: 'strong' },
        { w: 'springen', d: 'to jump' },
        { w: 'veilig', d: 'safely' },
      ],
      choices: [
        { text: 'Wacht rustig tot Moos daalt', hint: 'Geduldig', next: 'c5a' },
        { text: 'Haal eten om Moos te lokken', hint: 'Slim', next: 'c5b' },
      ],
      quiz: { q: 'Wie helpt Tom uit de boom?', opts: ['Een kind', 'Een buurman', 'Een parkwachter', 'Een vrouw'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Moos daalt af',
      text: '"Moos! Kom hier!" — roep je zacht.\n\nMoos kijkt naar je. Hij miauwt één keer. Dan klimt hij langzaam naar beneden.\n\nMoos springt in je armen. Je bent zo blij!',
      vocab: [
        { w: 'zacht', d: 'softly / gently' },
        { w: 'miauwen', d: 'to meow' },
        { w: 'langzaam', d: 'slowly' },
        { w: 'blij', d: 'happy / glad' },
      ],
      choices: [
        { text: 'Loop direct naar huis met Moos', hint: 'Veilig', next: 'c5a' },
        { text: 'Blijf even in het park zitten', hint: 'Ontspannen', next: 'c5b' },
      ],
      quiz: { q: 'Hoe komt Moos uit de boom?', opts: ['Tom helpt hem', 'Hij springt omlaag', 'Hij klimt langzaam', 'De parkwachter helpt'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Thuis met Moos',
      text: 'Je loopt naar huis met Moos in je armen. Moos snort zacht.\n\nThuis geef je Moos water en eten. Hij eet alles op.\n\n"Jij hebt honger, Moos", zeg je. Moos kijkt je aan en snort weer.',
      vocab: [
        { w: 'snorren', d: 'to purr' },
        { w: 'water', d: 'water' },
        { w: 'eten', d: 'food / to eat' },
        { w: 'honger', d: 'hunger' },
      ],
      choices: [
        { text: 'Bel buurvrouw De Vries om te bedanken', hint: 'Beleefd', next: 'c6a' },
        { text: 'Rust uit op de bank met Moos', hint: 'Gezellig', next: 'c6b' },
      ],
      quiz: { q: 'Wat doe je als eerste thuis voor Moos?', opts: ['Je baadt hem', 'Je geeft hem eten en water', 'Je belt de dierenarts', 'Je legt hem in bed'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'In het park',
      text: 'Je zit op een bankje met Moos. De zon schijnt. Het is warm.\n\nEen vrouw met een hond loopt langs. "Wat een mooie kat!"\n\n"Dank je wel. Hij heet Moos en hij was verdwaald."',
      vocab: [
        { w: 'de zon', d: 'the sun' },
        { w: 'schijnen', d: 'to shine' },
        { w: 'mooie', d: 'beautiful' },
        { w: 'verdwaald', d: 'lost' },
      ],
      choices: [
        { text: 'Ga naar huis, Moos heeft eten nodig', hint: 'Zorgzaam', next: 'c6a' },
        { text: 'Blijf nog even in het park', hint: 'Genieten', next: 'c6b' },
      ],
      quiz: { q: 'Wat zegt de vrouw over Moos?', opts: ['Hij is groot', 'Hij is lief', 'Hij is mooi', 'Hij is oud'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Een goed idee',
      text: 'Je belt mevrouw De Vries. "Dank u wel voor uw hulp. Ik heb Moos gevonden!"\n\nSamen praten jullie. Ze zegt: "Hang een adresbandje om zijn hals. Dan weet iedereen van wie hij is."\n\n"Goed idee!" zeg je.',
      vocab: [
        { w: 'het adresbandje', d: 'the ID tag / address band' },
        { w: 'de hals', d: 'the neck' },
        { w: 'iedereen', d: 'everyone' },
        { w: 'het idee', d: 'the idea' },
      ],
      choices: [
        { text: 'Koop morgen een adresbandje in de winkel', hint: 'Gepland', next: 'c7a' },
        { text: 'Maak vanavond een adresbandje thuis', hint: 'Meteen', next: 'c7b' },
      ],
      quiz: { q: 'Wat adviseert mevrouw De Vries?', opts: ['Koop een nieuwe kat', 'Hang een adresbandje om', 'Sluit de deur', 'Ga naar de dierenarts'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Op de bank',
      text: 'Jij en Moos zitten samen op de bank. Moos slaapt op je schoot.\n\nJe denkt: "De deur stond open vanochtend. Dat mag niet meer."\n\nMoos heeft geen adresbandje. Dat is een probleem.',
      vocab: [
        { w: 'de schoot', d: 'the lap' },
        { w: 'vanochtend', d: 'this morning' },
        { w: 'open', d: 'open' },
        { w: 'het probleem', d: 'the problem' },
      ],
      choices: [
        { text: 'Zoek een adresbandje op internet', hint: 'Modern', next: 'c7a' },
        { text: 'Schrijf je naam op een stukje papier', hint: 'Simpel', next: 'c7b' },
      ],
      quiz: { q: 'Wat denkt Tom over vanochtend?', opts: ['Het was koud', 'Het raam stond open', 'De deur stond open', 'Moos was ziek'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'De dierenwinkel',
      text: 'Je gaat naar de dierenwinkel. Er zijn veel katten- en hondenspullen.\n\nJe koopt een rood adresbandje met je naam en telefoonnummer. De verkoper graveert "MOOS" erin.\n\nMoos draagt het bandje. Hij ziet er lief uit.',
      vocab: [
        { w: 'de dierenwinkel', d: 'the pet shop' },
        { w: 'rood', d: 'red' },
        { w: 'het telefoonnummer', d: 'the phone number' },
        { w: 'graveren', d: 'to engrave' },
      ],
      choices: [
        { text: 'Koop ook een speeltje voor Moos', hint: 'Lief', next: 'c8a' },
        { text: 'Ga direct naar huis met het bandje', hint: 'Praktisch', next: 'c8b' },
      ],
      quiz: { q: 'Welke kleur heeft het nieuwe adresbandje?', opts: ['Blauw', 'Groen', 'Geel', 'Rood'], a: 3 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Zelf maken',
      text: 'Je schrijft je naam en nummer op papier. Je stopt het in een kleine plastic zak.\n\nJe bindt het aan de hals van Moos. Het is niet mooi, maar het werkt.\n\n"Dit is voor jouw veiligheid, Moos", zeg je.',
      vocab: [
        { w: 'plastic', d: 'plastic' },
        { w: 'binden', d: 'to tie' },
        { w: 'werken', d: 'to work / to function' },
        { w: 'de veiligheid', d: 'the safety' },
      ],
      choices: [
        { text: 'Ga naar de dierenarts voor een chip', hint: 'Veilig', next: 'c8a' },
        { text: 'Het papier is goed genoeg zo', hint: 'Rustig', next: 'c8b' },
      ],
      quiz: { q: 'Waar stop je het papiertje in?', opts: ['In een doosje', 'In een plastic zak', 'In een envelop', 'In zijn eten'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'De dierenarts',
      text: 'De dierenarts heet dokter Bakker. Hij zet een kleine chip in de nek van Moos. Het gaat snel.\n\n"Nu kan elke dierenarts jouw nummer vinden als Moos verdwaalt", legt hij uit.\n\nMoos is heel rustig. Hij is een dappere kat.',
      vocab: [
        { w: 'de dierenarts', d: 'the vet' },
        { w: 'de chip', d: 'the microchip' },
        { w: 'de nek', d: 'the neck / nape' },
        { w: 'dapper', d: 'brave' },
      ],
      choices: [
        { text: 'Vraag advies over het eten van Moos', hint: 'Verantwoord', next: 'c9a' },
        { text: 'Bedank de dokter en ga naar huis', hint: 'Klaar', next: 'c9b' },
      ],
      quiz: { q: 'Hoe heet de dierenarts?', opts: ['Dokter Jansen', 'Dokter De Vries', 'Dokter Bakker', 'Dokter Peters'], a: 2 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Rustige middag',
      text: 'De middag is rustig. Moos slaapt in zijn mand. Jij leest een boek.\n\nJe telefoon gaat. Het is je vriend Lars: "Alles goed? Heb je Moos gevonden?"\n\n"Ja! Hij was in het park. Alles is goed nu."',
      vocab: [
        { w: 'de mand', d: 'the basket' },
        { w: 'de middag', d: 'the afternoon' },
        { w: 'de vriend', d: 'the friend' },
        { w: 'goed', d: 'good / fine' },
      ],
      choices: [
        { text: 'Spreek af met Lars voor morgen', hint: 'Gezellig', next: 'c9a' },
        { text: 'Blijf thuis met Moos vanavond', hint: 'Rustig', next: 'c9b' },
      ],
      quiz: { q: 'Hoe heet de vriend die belt?', opts: ['Daan', 'Lars', 'Tim', 'Bas'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Klaar voor morgen',
      text: 'Je maakt alles klaar voor morgen. Verse eten en water voor Moos. De deur gaat op slot.\n\nMoos snort op je schoot. Jij aait hem zacht.\n\n"Jij loopt nooit meer weg, Moos. Dat beloof ik."',
      vocab: [
        { w: 'vers', d: 'fresh' },
        { w: 'op slot', d: 'locked' },
        { w: 'aaien', d: 'to pet / to stroke' },
        { w: 'beloven', d: 'to promise' },
      ],
      choices: [
        { text: 'Slaap vroeg, je bent moe', hint: 'Verstandig', next: 'c10g' },
        { text: 'Kijk een film met Moos eerst', hint: 'Ontspannen', next: 'c10n' },
      ],
      quiz: { q: 'Wat doe je met de deur voordat je slaapt?', opts: ['Je laat hem open', 'Je zet hem op slot', 'Je schrijft erop', 'Je schildert hem'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'De avond',
      text: 'Je leest een boek over katten. Om elf uur slaap je in op de bank.\n\nOm twee uur miauwt Moos luid. Je schrikt wakker. Er is niets.\n\nMoos wil eten. Hij heeft de nacht honger.',
      vocab: [
        { w: 'schrikken', d: 'to be startled' },
        { w: 'wakker', d: 'awake' },
        { w: 'luid', d: 'loud' },
        { w: 'de nacht', d: 'the night' },
      ],
      choices: [
        { text: 'Geef Moos eten en ga naar bed', hint: 'Zorgzaam', next: 'c10n' },
        { text: 'Laat Moos buiten even', hint: 'Moe', next: 'c10b' },
      ],
      quiz: { q: 'Waarom miauwt Moos midden in de nacht?', opts: ['Hij is bang', 'Hij wil spelen', 'Hij heeft honger', 'Hij is ziek'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Een perfecte dag', ending: 'good',
      text: 'De volgende dag ben je uitgerust. Moos draagt zijn rode adresbandje. Hij is veilig.\n\nJe belooft de deur altijd op slot te doen. Mevrouw De Vries komt langs en brengt koekjes.\n\n"Ik ben blij dat Moos terug is", zegt ze. Jullie drinken samen thee.\n\nMoos slaapt tevreden in zijn mand. Het is een perfecte dag.',
      vocab: [
        { w: 'uitgerust', d: 'well-rested' },
        { w: 'altijd', d: 'always' },
        { w: 'tevreden', d: 'content / satisfied' },
        { w: 'de koekjes', d: 'the cookies' },
      ],
      choices: [],
      quiz: { q: 'Wie brengt koekjes aan het einde?', opts: ['Lars', 'De dierenarts', 'Mevrouw De Vries', 'Een buurman'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een goede dag', ending: 'neutral',
      text: 'De volgende dag is rustig. Moos loopt door het huis. Hij is blij thuis.\n\nJe denkt aan alles van gisteren. Het was moeilijk, maar je hebt veel geleerd.\n\nMorgen koop je een beter adresbandje. En je houdt de deur altijd dicht.',
      vocab: [
        { w: 'gisteren', d: 'yesterday' },
        { w: 'moeilijk', d: 'difficult' },
        { w: 'leren', d: 'to learn' },
        { w: 'dicht', d: 'closed' },
      ],
      choices: [],
      quiz: { q: 'Wat besluit Tom te kopen morgen?', opts: ['Een nieuw bed', 'Een beter adresbandje', 'Meer eten', 'Een tweede kat'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een lange nacht', ending: 'bad',
      text: 'Je laat Moos buiten. Na een uur is hij nog steeds niet terug. Je maakt je zorgen.\n\nJe slaapt heel weinig. De volgende ochtend is Moos er gelukkig wel.\n\nHij slaapt de hele dag bij de buren. Jij hebt de hele dag zorgen gehad voor niets.',
      vocab: [
        { w: 'de zorgen', d: 'the worries' },
        { w: 'gelukkig', d: 'fortunately / luckily' },
        { w: 'weinig', d: 'little / few' },
        { w: 'de buren', d: 'the neighbours' },
      ],
      choices: [],
      quiz: { q: 'Waar was Moos die nacht?', opts: ['In het park', 'Bij de dierenarts', 'Bij de buren', 'In de tuin'], a: 2 },
    },
  },
};
