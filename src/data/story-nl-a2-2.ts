import type { Story } from './types';

export const storyNlA2_2: Story = {
  id: 'nl-a2-2',
  level: 'A2',
  title: 'Weekend in Amsterdam',
  genre: 'Reizen',
  emoji: '🏙️',
  coverColor: '#1e2a45',
  accentColor: '#6b8fc9',
  description: 'Je bezoekt Amsterdam voor het eerst. De stad heeft veel te bieden.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Aankomst in Amsterdam',
      text: 'Je bent net aangekomen op Amsterdam Centraal en je bent meteen overweldigd door de drukte. Er zijn mensen overal: toeristen met koffers, studenten op fietsen en verkopers die roepen. Je hotel is in het centrum maar je weet niet precies hoe je er moet komen. Je bekijkt het kaartje van de metro.',
      vocab: [
        { w: 'overweldigd', d: 'overwhelmed' },
        { w: 'de drukte', d: 'the busyness / crowds' },
        { w: 'de toerist', d: 'the tourist' },
        { w: 'het centrum', d: 'the city centre' },
      ],
      choices: [
        { text: 'Je neemt de tram naar het hotel', hint: 'Avontuurlijk', next: 'c2a' },
        { text: 'Je neemt een taxi voor de zekerheid', hint: 'Gemakkelijk', next: 'c2b' },
      ],
      quiz: { q: 'Waar ben je aangekomen?', opts: ['Amsterdam Zuid', 'Amsterdam Centraal', 'Schiphol', 'Amsterdam West'], a: 1 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'De tram',
      text: 'Je bent in de tram gestapt maar je weet niet goed welke halte je moet hebben. De tram is vol en je staat tussen veel mensen. Na drie haltes ben je uitgestapt op de verkeerde plek want je hebt het bordje niet goed gelezen. Je staat nu op de Leidseplein en je vraagt je af hoe ver het hotel nog is.',
      vocab: [
        { w: 'de halte', d: 'the (tram/bus) stop' },
        { w: 'uitstappen', d: 'to get off (transport)' },
        { w: 'het bordje', d: 'the sign' },
        { w: 'zich afvragen', d: 'to wonder' },
      ],
      choices: [
        { text: 'Je vraagt iemand op straat de weg', hint: 'Sociaal', next: 'c3a' },
        { text: 'Je opent Google Maps op je telefoon', hint: 'Modern', next: 'c3b' },
      ],
      quiz: { q: 'Waar ben je uitgestapt?', opts: ['Dam', 'Leidseplein', 'Vondelpark', 'Rembrandtplein'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'De taxi',
      text: 'Je hebt een taxi genomen en de chauffeur is heel vriendelijk. Hij heet Mohammed en hij woont al twintig jaar in Amsterdam. Tijdens de rit heeft hij je veel verteld over de stad. "Het Rijksmuseum moet je zeker bezoeken," zegt hij. Je bent snel bij het hotel aangekomen en voelt je klaar voor het avontuur.',
      vocab: [
        { w: 'de chauffeur', d: 'the driver' },
        { w: 'de rit', d: 'the ride / journey' },
        { w: 'bezoeken', d: 'to visit' },
        { w: 'het avontuur', d: 'the adventure' },
      ],
      choices: [
        { text: 'Je gaat meteen naar het Rijksmuseum', hint: 'Cultureel', next: 'c3a' },
        { text: 'Je loopt eerst langs de grachten', hint: 'Ontspannen', next: 'c3b' },
      ],
      quiz: { q: 'Wat heeft de taxichauffeur je aangeraden te bezoeken?', opts: ['De Jordaan', 'Het Vondelpark', 'Het Rijksmuseum', 'De Anne Frank Huis'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Het Rijksmuseum',
      text: 'Je staat voor het indrukwekkende Rijksmuseum. De rij is lang maar je hebt je kaartje online gekocht dus je kunt direct naar binnen. Binnen zie je schilderijen van Rembrandt en Vermeer. Je staat lang voor "De Nachtwacht" en je bent onder de indruk van het grote formaat en de details.',
      vocab: [
        { w: 'indrukwekkend', d: 'impressive' },
        { w: 'het schilderij', d: 'the painting' },
        { w: 'onder de indruk', d: 'impressed' },
        { w: 'het formaat', d: 'the size / format' },
      ],
      choices: [
        { text: 'Je bezoekt de museumwinkel en koopt een souvenir', hint: 'Toeristisch', next: 'c4a' },
        { text: 'Je gaat daarna koffie drinken op het Museumplein', hint: 'Ontspannen', next: 'c4b' },
      ],
      quiz: { q: 'Welk schilderij heb je lang bekeken?', opts: ['De Melkmeid', 'De Nachtwacht', 'Het Meisje met de Parel', 'De Anatomische Les'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De grachten',
      text: 'Je loopt langs de Herengracht en het is prachtig. De oude grachtenpanden weerspiegelen in het water en toeristen maken foto\'s vanaf de bruggen. Je hebt een stroopwafel gekocht bij een straatverkoper en nu eet je die terwijl je wandelt. Plotseling stopt een jonge man naast je: "Ben je voor het eerst in Amsterdam?"',
      vocab: [
        { w: 'de gracht', d: 'the canal' },
        { w: 'het grachtenpand', d: 'the canal house' },
        { w: 'weerspiegelen', d: 'to reflect' },
        { w: 'de straatverkoper', d: 'the street vendor' },
      ],
      choices: [
        { text: 'Je praat met de jonge man', hint: 'Sociaal', next: 'c4a' },
        { text: 'Je glimlacht maar loopt door', hint: 'Verlegen', next: 'c4b' },
      ],
      quiz: { q: 'Wat heb je gekocht bij de straatverkoper?', opts: ['Een kaart van Amsterdam', 'Een stroopwafel', 'Een ijsje', 'Een broodje'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Lars',
      text: 'Je hebt gepraat met de jonge man of iemand anders heeft jou aangesproken. Hij heet Lars en hij is een student die in Amsterdam woont. Hij is heel vriendelijk en hij heeft aangeboden om je de stad te laten zien. "Ik ken de beste plekken die niet in de toerismegids staan," zegt hij met een glimlach.',
      vocab: [
        { w: 'aanbieden', d: 'to offer' },
        { w: 'de toerismegids', d: 'the tourist guide' },
        { w: 'de plek', d: 'the spot / place' },
        { w: 'de glimlach', d: 'the smile' },
      ],
      choices: [
        { text: 'Je gaat met Lars mee om de stad te ontdekken', hint: 'Avontuurlijk', next: 'c5a' },
        { text: 'Je bedankt hem maar verkiest alleen te gaan', hint: 'Voorzichtig', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft Lars aangeboden?', opts: ['Een gratis maaltijd', 'Jou de stad te laten zien', 'Een slaapplek', 'Zijn fiets te lenen'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Eigen tempo',
      text: 'Je wandelt op je eigen tempo door de Jordaan, de sfeervolle wijk met kleine straatjes en kunstgaleries. Je hebt een leuk café gevonden waar je een kop erwtensoep hebt gegeten omdat het koud was buiten. De serveerster heeft je verteld dat er morgen een boekenmarkt is bij de Spui.',
      vocab: [
        { w: 'het tempo', d: 'the pace / speed' },
        { w: 'sfeervolle', d: 'atmospheric / cosy' },
        { w: 'de wijk', d: 'the neighbourhood' },
        { w: 'de erwtensoep', d: 'the pea soup' },
      ],
      choices: [
        { text: 'Je gaat morgen naar de boekenmarkt bij de Spui', hint: 'Cultureel', next: 'c5a' },
        { text: 'Je loopt vanavond nog naar het Rembrandtplein', hint: 'Actief', next: 'c5b' },
      ],
      quiz: { q: 'Wat heb je gegeten in het café?', opts: ['Stamppot', 'Bitterballen', 'Erwtensoep', 'Haring'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Door Amsterdam met Lars',
      text: 'Lars heeft je meegenomen naar plekken die je nooit zelf zou hebben gevonden. Jullie zijn op een dak geweest met uitzicht over de hele stad en hebben bier gedronken bij een bruine kroeg in de Jordaan. Lars heeft veel verteld over het leven in Amsterdam als student. Je voelt je heel op je gemak bij hem.',
      vocab: [
        { w: 'het uitzicht', d: 'the view' },
        { w: 'de bruine kroeg', d: 'the brown café (traditional pub)' },
        { w: 'op je gemak', d: 'at ease / comfortable' },
        { w: 'het leven', d: 'the life' },
      ],
      choices: [
        { text: 'Je vraagt Lars of hij morgen ook tijd heeft', hint: 'Vriendschap', next: 'c6a' },
        { text: 'Je neemt afscheid en gaat vroeg naar bed', hint: 'Uitrusten', next: 'c6b' },
      ],
      quiz: { q: 'Waar zijn jullie geweest met een uitzicht over de stad?', opts: ['De Westertoren', 'Een dak', 'Het Rijksmuseum', 'A\'dam Toren'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'De tweede dag',
      text: 'Je bent de tweede dag begonnen met een grote ontbijt in het hotel. Je hebt je plan voor de dag gemaakt: het Anne Frank Huis en daarna wandelen in het Vondelpark. In het park heb je een boek gelezen op het gras en een ijsje gegeten. Het is een rustige maar fijne dag geweest.',
      vocab: [
        { w: 'het ontbijt', d: 'the breakfast' },
        { w: 'het plan', d: 'the plan' },
        { w: 'het Vondelpark', d: 'the Vondelpark (Amsterdam park)' },
        { w: 'het gras', d: 'the grass' },
      ],
      choices: [
        { text: 'Je bezoekt het Anne Frank Huis', hint: 'Historisch', next: 'c6a' },
        { text: 'Je gaat shoppen in de Kalverstraat', hint: 'Leuk', next: 'c6b' },
      ],
      quiz: { q: 'Wat heb je gedaan in het Vondelpark?', opts: ['Gefietst', 'Een boek gelezen op het gras', 'Gezwommen', 'Een picknick gehouden'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Het Anne Frank Huis',
      text: 'Je hebt het Anne Frank Huis bezocht en het heeft je diep geraakt. Je hebt gelezen over het dagboek dat Anne heeft geschreven tijdens de Tweede Wereldoorlog. Buiten heb je even stilgestaan bij wat je hebt gezien. Lars staat je buiten op te wachten want hij wilde ook meegaan.',
      vocab: [
        { w: 'diep geraakt', d: 'deeply moved' },
        { w: 'het dagboek', d: 'the diary' },
        { w: 'de Tweede Wereldoorlog', d: 'the Second World War' },
        { w: 'stilstaan bij', d: 'to pause and reflect on' },
      ],
      choices: [
        { text: 'Je praat met Lars over wat je hebt gezien', hint: 'Reflectief', next: 'c7a' },
        { text: 'Je hebt even tijd voor jezelf nodig', hint: 'Stil', next: 'c7b' },
      ],
      quiz: { q: 'Hoe heeft het Anne Frank Huis jou geraakt?', opts: ['Het was saai', 'Je was verward', 'Het heeft je diep geraakt', 'Je was boos'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Winkelen in de stad',
      text: 'Je hebt gewinkeld in de Kalverstraat en in de negen straatjes van de Jordaan. Je hebt een mooie tas gekocht en wat cadeautjes voor thuis. Maar toen je terugkwam bij het hotel merkte je dat je portemonnee niet meer in je tas zat. Je hart is in je keel gesprongen van schrik.',
      vocab: [
        { w: 'winkelen', d: 'to shop' },
        { w: 'het cadeautje', d: 'the small gift' },
        { w: 'de portemonnee', d: 'the wallet / purse' },
        { w: 'schrik', d: 'fright / shock' },
      ],
      choices: [
        { text: 'Je gaat terug naar de winkels om te zoeken', hint: 'Optimistisch', next: 'c7a' },
        { text: 'Je gaat naar de receptie van het hotel voor hulp', hint: 'Verstandig', next: 'c7b' },
      ],
      quiz: { q: 'Wat mist er toen je terugkwam bij het hotel?', opts: ['Je paspoort', 'Je telefoon', 'Je portemonnee', 'Je hotelsleutel'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Een goed gesprek',
      text: 'Je hebt een diep gesprek gehad met Lars over geschiedenis, reizen en dromen. Hij heeft je verteld dat hij volgend jaar naar Londen wil verhuizen voor zijn studie. Jullie hebben bij een Indonesisch restaurant rijsttafel gegeten want dat is typisch Nederlands. Het eten was heerlijk en het gesprek ook.',
      vocab: [
        { w: 'de geschiedenis', d: 'the history' },
        { w: 'verhuizen', d: 'to move (house / city)' },
        { w: 'de rijsttafel', d: 'the rijsttafel (Indonesian feast)' },
        { w: 'heerlijk', d: 'delicious / wonderful' },
      ],
      choices: [
        { text: 'Je vraagt Lars om nummers uit te wisselen', hint: 'Vriendschap', next: 'c8a' },
        { text: 'Je geniet van de avond zonder plannen te maken', hint: 'Spontaan', next: 'c8b' },
      ],
      quiz: { q: 'Wat hebben jullie gegeten bij het restaurant?', opts: ['Stamppot', 'Pizza', 'Rijsttafel', 'Sushi'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'De verloren portemonnee',
      text: 'De receptioniste heeft je geholpen om de politie te bellen. De agent heeft gezegd dat tassendiefstallen helaas veel voorkomen in Amsterdam. Je hebt je creditcard geblokkeerd via de app. Je bent blij dat je nog wat contant geld in je hotelkamer had liggen. Maar je museumbezoek moet je annuleren.',
      vocab: [
        { w: 'de receptioniste', d: 'the receptionist' },
        { w: 'het diefstal', d: 'the theft' },
        { w: 'blokkeren', d: 'to block' },
        { w: 'annuleren', d: 'to cancel' },
      ],
      choices: [
        { text: 'Je probeert het weekend toch nog te redden', hint: 'Positief', next: 'c8a' },
        { text: 'Je besluit een dag eerder naar huis te gaan', hint: 'Teleurgesteld', next: 'c8b' },
      ],
      quiz: { q: 'Wat heb je als eerste gedaan na de diefstal?', opts: ['De politie gebeld', 'Je creditcard geblokkeerd', 'Je tas doorzocht', 'Gehuild'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Laatste avond',
      text: 'Op de laatste avond zijn jij en Lars naar een jazzclub gegaan in de Jordaan. De muziek was geweldig en jullie hebben gedanst en gelachen. Lars heeft je zijn favoriete plekjes in Amsterdam laten zien. Hij heeft gezegd: "Als je terug bent in Amsterdam, bel me dan." Je voelt je heel blij.',
      vocab: [
        { w: 'de jazzclub', d: 'the jazz club' },
        { w: 'dansen', d: 'to dance' },
        { w: 'het plekje', d: 'the favourite spot' },
        { w: 'bellen', d: 'to call (phone)' },
      ],
      choices: [
        { text: 'Je wisselt nummers uit met Lars', hint: 'Vriendschap', next: 'c9a' },
        { text: 'Je gaat vroeg naar bed voor de trein morgen', hint: 'Praktisch', next: 'c9b' },
      ],
      quiz: { q: 'Waar zijn jij en Lars op de laatste avond naartoe gegaan?', opts: ['Een discotheek', 'Een jazzclub', 'Een restaurant', 'Een bioscoop'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Een kortere trip',
      text: 'Je hebt besloten een dag eerder naar huis te gaan omdat je te moe of te gestrest bent. Je loopt nog even langs de grachten om afscheid te nemen van de stad. Het is een mooie avond en de zon gaat onder achter de grachtenpanden. Je denkt: "Amsterdam, ik kom zeker terug."',
      vocab: [
        { w: 'gestrest', d: 'stressed' },
        { w: 'afscheid nemen', d: 'to say goodbye' },
        { w: 'ondergaan', d: 'to set (sun)' },
        { w: 'zeker', d: 'certainly / definitely' },
      ],
      choices: [
        { text: 'Je stuurt Lars een berichtje om afscheid te nemen', hint: 'Vriendelijk', next: 'c9a' },
        { text: 'Je boekt de vroegste trein naar huis', hint: 'Klaar', next: 'c9b' },
      ],
      quiz: { q: 'Waarom ga je een dag eerder naar huis?', opts: ['Je hebt geen geld meer', 'Je bent te moe of gestrest', 'Het hotel is vol', 'Je trein vertrekt vroeger'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Nummers uitwisselen',
      text: 'Je hebt Lars\' nummer opgeslagen en hij het jouwe. Jullie hebben afgesproken om contact te houden. In de trein naar huis kijk je naar de foto\'s die je hebt gemaakt van de grachten, het museum en jullie avonturen. Je bent moe maar heel tevreden over het weekend. Amsterdam heeft je hart gestolen.',
      vocab: [
        { w: 'opslaan', d: 'to save (a number)' },
        { w: 'contact houden', d: 'to keep in touch' },
        { w: 'tevreden', d: 'satisfied / content' },
        { w: 'het hart stelen', d: 'to steal one\'s heart' },
      ],
      choices: [
        { text: 'Je plant al je volgende bezoek aan Amsterdam', hint: 'Enthousiast', next: 'c10g' },
        { text: 'Je denkt terug aan het mooie weekend', hint: 'Nostalgisch', next: 'c10n' },
      ],
      quiz: { q: 'Hoe voel je je in de trein naar huis?', opts: ['Boos op Amsterdam', 'Moe maar heel tevreden', 'Verdrietig', 'Opgelucht dat je weg bent'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Terug naar huis',
      text: 'Je bent vroeg naar huis gegaan en in de trein ben je bijna in slaap gevallen. Amsterdam was overweldigend en niet alles is gegaan zoals gepland. Maar je hebt mooie dingen gezien en je hebt de stad beter leren kennen. Je denkt: "Volgende keer doe ik het rustiger aan."',
      vocab: [
        { w: 'in slaap vallen', d: 'to fall asleep' },
        { w: 'overweldigend', d: 'overwhelming' },
        { w: 'zoals gepland', d: 'as planned' },
        { w: 'rustiger aan doen', d: 'to take it easier' },
      ],
      choices: [
        { text: 'Je stuurt een berichtje naar Lars om te bedanken', hint: 'Vriendelijk', next: 'c10n' },
        { text: 'Je slaapt de rest van de treinreis', hint: 'Uitgeput', next: 'c10b' },
      ],
      quiz: { q: 'Wat denk je in de trein over je volgende bezoek?', opts: ['"Ik kom nooit meer terug"', '"Volgende keer doe ik het rustiger aan"', '"Ik moet meer musea bezoeken"', '"Ik wil er wonen"'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Geweldig weekend',
      ending: 'good',
      text: 'Thuis kijk je met een grote glimlach op je gezicht naar de foto\'s van het weekend. Je hebt de grachten gezien, het Rijksmuseum bezocht, heerlijk gegeten en een goede vriend gemaakt. Lars heeft je al een berichtje gestuurd met een foto van de Jordaan. Jullie hebben plannen gemaakt voor een volgend bezoek in de zomer.',
      vocab: [
        { w: 'de glimlach', d: 'the smile' },
        { w: 'thuis', d: 'at home' },
        { w: 'de zomer', d: 'the summer' },
        { w: 'plannen maken', d: 'to make plans' },
      ],
      choices: [],
      quiz: { q: 'Wat heeft Lars je gestuurd na het weekend?', opts: ['Een brief', 'Een pakketje', 'Een berichtje met een foto', 'Niets'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een goed maar druk weekend',
      ending: 'neutral',
      text: 'Amsterdam was mooi maar ook een beetje te druk voor jou. Je hebt mooie dingen gezien maar het was ook stressvol. Lars heeft je een berichtje gestuurd: "Leuk je ontmoet te hebben!" Je antwoordt vriendelijk. Misschien kom je terug als de drukte minder is, in het najaar of de winter.',
      vocab: [
        { w: 'stressvol', d: 'stressful' },
        { w: 'antwoorden', d: 'to reply / answer' },
        { w: 'het najaar', d: 'the autumn' },
        { w: 'de winter', d: 'the winter' },
      ],
      choices: [],
      quiz: { q: 'Wanneer wil je misschien terugkomen naar Amsterdam?', opts: ['In de zomer', 'In het najaar of de winter', 'Nooit meer', 'Zo snel mogelijk'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een moeilijk weekend',
      ending: 'bad',
      text: 'Het weekend is niet gegaan zoals gepland. Je tas is gestolen en je hebt het museum niet kunnen bezoeken. Je bent moe en teleurgesteld thuis aangekomen. Maar je hebt iets geleerds: je moet je tas altijd goed vasthouden in een drukke stad. Volgend jaar plan je een rustiger vakantie.',
      vocab: [
        { w: 'stelen', d: 'to steal' },
        { w: 'teleurgesteld', d: 'disappointed' },
        { w: 'vasthouden', d: 'to hold on to / keep close' },
        { w: 'de vakantie', d: 'the holiday / vacation' },
      ],
      choices: [],
      quiz: { q: 'Wat heb je geleerd van het weekend?', opts: ['Altijd een regenjas meenemen', 'Je tas altijd goed vasthouden', 'Geen tram nemen', 'Vroeg boeken'], a: 1 },
    },
  },
};
