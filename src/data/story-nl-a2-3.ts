import type { Story } from './types';

export const storyNlA2_3: Story = {
  id: 'nl-a2-3',
  level: 'A2',
  title: 'Het Nieuwe Werk',
  genre: 'Drama',
  emoji: '💼',
  coverColor: '#1a1a2e',
  accentColor: '#8888ff',
  description: "Je begint een nieuwe job bij een groot bedrijf. Collega's en uitdagingen wachten op je.",
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De eerste dag',
      text: 'Je bent vroeg opgestaan want je eerste werkdag begint om negen uur. Je hebt een nieuw pak aangetrokken en bent met de metro naar het kantoor gegaan. Het bedrijf heet DataTech en het zit in een groot glazen gebouw in Rotterdam. Bij de receptie krijg je een badge en een stapel formulieren om in te vullen.',
      vocab: [
        { w: 'het pak', d: 'the suit' },
        { w: 'de badge', d: 'the badge / ID card' },
        { w: 'de stapel', d: 'the pile / stack' },
        { w: 'het formulier', d: 'the form' },
      ],
      choices: [
        { text: 'Je vult de formulieren zelfstandig in', hint: 'Zelfstandig', next: 'c2a' },
        { text: 'Je vraagt een collega om hulp bij de formulieren', hint: 'Sociaal', next: 'c2b' },
      ],
      quiz: { q: 'Hoe heet het bedrijf waar je gaat werken?', opts: ['TechData', 'DataTech', 'InfoCorp', 'NetSystems'], a: 1 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Het team',
      text: 'Je manager heet Sophie en ze heeft je voorgesteld aan het team. Er zijn acht collega\'s op de afdeling en ze hebben allemaal verschillende rollen. Sophie legt uit dat je met het nieuwe softwaresysteem moet werken, maar dat het ingewikkeld is en dat het even duurt om het te leren. Je voelt je een beetje overweldigd maar blijft kalm.',
      vocab: [
        { w: 'de afdeling', d: 'the department' },
        { w: 'ingewikkeld', d: 'complicated / complex' },
        { w: 'overweldigd', d: 'overwhelmed' },
        { w: 'kalm', d: 'calm' },
      ],
      choices: [
        { text: 'Je vraagt Sophie om een uitleg van het systeem', hint: 'Proactief', next: 'c3a' },
        { text: 'Je probeert het systeem zelf te begrijpen', hint: 'Zelfstandig', next: 'c3b' },
      ],
      quiz: { q: 'Hoe heet je manager?', opts: ['Sandra', 'Sarah', 'Sophie', 'Sylvia'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Eerste contact',
      text: 'Een collega genaamd Niels heeft je geholpen met de formulieren. Hij werkt al drie jaar bij DataTech en hij weet alles over het bedrijf. Hij heeft je uitgelegd hoe het softwaresysteem werkt want dat is het moeilijkste deel van de baan. "Het ziet er ingewikkeld uit, maar je went er snel aan," zegt hij vriendelijk.',
      vocab: [
        { w: 'genaamd', d: 'named / called' },
        { w: 'de baan', d: 'the job' },
        { w: 'wennen aan', d: 'to get used to' },
        { w: 'vriendelijk', d: 'friendly / kindly' },
      ],
      choices: [
        { text: 'Je vraagt Niels of hij je meer kan uitleggen', hint: 'Nieuwsgierig', next: 'c3a' },
        { text: 'Je oefent het systeem zelfstandig', hint: 'Zelfstandig', next: 'c3b' },
      ],
      quiz: { q: 'Hoe lang werkt Niels al bij DataTech?', opts: ['Één jaar', 'Twee jaar', 'Drie jaar', 'Vijf jaar'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Het systeem begrijpen',
      text: 'Je hebt om uitleg gevraagd en dat was een goede beslissing. Sophie of Niels heeft je stap voor stap uitgelegd hoe het systeem werkt. Na een uur begrijp je de basis al en kun je eenvoudige taken uitvoeren. Je voelt je meer zelfverzekerd dan vanochtend. Maar dan zie je dat een collega een probleem heeft.',
      vocab: [
        { w: 'stap voor stap', d: 'step by step' },
        { w: 'de basis', d: 'the basics / foundation' },
        { w: 'uitvoeren', d: 'to carry out / execute' },
        { w: 'zelfverzekerd', d: 'self-confident' },
      ],
      choices: [
        { text: 'Je biedt aan om de collega te helpen', hint: 'Behulpzaam', next: 'c4a' },
        { text: 'Je focust op je eigen taken', hint: 'Gefocust', next: 'c4b' },
      ],
      quiz: { q: 'Hoe voel je je na de uitleg van het systeem?', opts: ['Nog steeds overweldigd', 'Meer zelfverzekerd', 'Boos', 'Verveeld'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Problemen met het systeem',
      text: 'Je hebt twee uur geprobeerd het systeem zelf te leren maar het is erg moeilijk. Je hebt meerdere fouten gemaakt en je weet niet hoe je ze moet oplossen. Je voelt je gefrustreerd want iedereen om je heen lijkt te weten wat ze doen. Dan vraagt een collega genaamd Vera of alles goed gaat.',
      vocab: [
        { w: 'de fout', d: 'the mistake / error' },
        { w: 'oplossen', d: 'to solve / fix' },
        { w: 'gefrustreerd', d: 'frustrated' },
        { w: 'lijken', d: 'to seem / appear' },
      ],
      choices: [
        { text: 'Je vertelt Vera eerlijk dat je moeite hebt', hint: 'Eerlijk', next: 'c4a' },
        { text: 'Je zegt dat alles goed gaat want je wilt niet zwak lijken', hint: 'Trots', next: 'c4b' },
      ],
      quiz: { q: 'Hoe lang heb je geprobeerd het systeem zelf te leren?', opts: ['Een halfuur', 'Een uur', 'Twee uur', 'Een halve dag'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Een collega helpen',
      text: 'Je hebt de collega geholpen of je hebt eerlijk gezegd dat je moeite hebt. In beide gevallen is er nu een goede band ontstaan met een collega. Vera heeft jou geholpen met het systeem en jij hebt haar geholpen met een Engelstalige e-mail die ze moest sturen. Jullie hebben allebei iets van elkaar geleerd.',
      vocab: [
        { w: 'de band', d: 'the bond / connection' },
        { w: 'ontstaan', d: 'to arise / develop' },
        { w: 'Engelstalig', d: 'English-language' },
        { w: 'allebei', d: 'both' },
      ],
      choices: [
        { text: 'Je vraagt Vera om je idee voor de vergadering te beoordelen', hint: 'Samenwerken', next: 'c5a' },
        { text: 'Je werkt je idee voor de vergadering zelf verder uit', hint: 'Zelfstandig', next: 'c5b' },
      ],
      quiz: { q: 'Waarmee heb jij Vera geholpen?', opts: ['Met het systeem', 'Met een Engelstalige e-mail', 'Met haar presentatie', 'Met de lunchbestelling'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Solo aan het werk',
      text: 'Je hebt de middag hard gewerkt en langzaam wordt het systeem duidelijker. Je hebt een paar taken voltooid en dat geeft je een goed gevoel. Sophie is langsgelopen en heeft gezegd: "Morgen is er een korte vergadering en we willen graag nieuwe ideeën horen." Je besluit vanavond een idee voor te bereiden.',
      vocab: [
        { w: 'voltooien', d: 'to complete / finish' },
        { w: 'langslopen', d: 'to pass by / walk past' },
        { w: 'de vergadering', d: 'the meeting' },
        { w: 'voorbereiden', d: 'to prepare' },
      ],
      choices: [
        { text: 'Je bereidt een concreet idee voor de vergadering voor', hint: 'Ambitieus', next: 'c5a' },
        { text: 'Je kijkt eerst wat anderen inbrengen in de vergadering', hint: 'Voorzichtig', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft Sophie gezegd over morgen?', opts: ['Je moet een rapport schrijven', 'Er is een vergadering en ze willen nieuwe ideeën', 'Je krijgt een beoordeling', 'Je moet overwerken'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Het idee',
      text: 'Je hebt een idee bedacht om het rapportageproces te versnellen met een nieuwe werkmethode. Je hebt het idee vanavond uitgewerkt en je bent er trots op. Vera heeft ernaar gekeken en ze zei: "Dit is goed! Je moet het morgen zeker presenteren." Je voelt je zenuwachtig maar ook opgewonden.',
      vocab: [
        { w: 'bedenken', d: 'to come up with / devise' },
        { w: 'het rapportageproces', d: 'the reporting process' },
        { w: 'uitwerken', d: 'to work out / develop' },
        { w: 'zenuwachtig', d: 'nervous' },
      ],
      choices: [
        { text: 'Je oefent de presentatie vanavond thuis', hint: 'Voorbereiding', next: 'c6a' },
        { text: 'Je vertrouwt op je instinct voor de vergadering', hint: 'Spontaan', next: 'c6b' },
      ],
      quiz: { q: 'Hoe reageert Vera op jouw idee?', opts: ['"Het is te ingewikkeld"', '"Dit is goed, presenteer het morgen"', '"Ik weet het niet"', '"Vraag het eerst aan Sophie"'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Observeren en leren',
      text: 'Je hebt de eerste week gebruikt om goed te observeren hoe de collega\'s werken. Je hebt geleerd dat het team al lange tijd worstelt met trage processen. Je hebt thuis een idee uitgewerkt dat dit kan verbeteren. Maar je vraagt je af of het te vroeg is om al in de eerste week met een idee te komen.',
      vocab: [
        { w: 'observeren', d: 'to observe' },
        { w: 'worstelen met', d: 'to struggle with' },
        { w: 'traag', d: 'slow' },
        { w: 'verbeteren', d: 'to improve' },
      ],
      choices: [
        { text: 'Je presenteert je idee toch in de vergadering', hint: 'Dapper', next: 'c6a' },
        { text: 'Je wacht nog een week voordat je je idee deelt', hint: 'Geduldig', next: 'c6b' },
      ],
      quiz: { q: 'Wat heb je ontdekt over het team tijdens het observeren?', opts: ['Ze werken heel snel', 'Ze worstelen al lang met trage processen', 'Ze zijn niet vriendelijk', 'Ze hebben geen systeem'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'De vergadering',
      text: 'Je staat voor je collega\'s en presenteert je idee. Je handen trillen een beetje maar je stem is duidelijk. Je hebt uitgelegd hoe je het rapportageproces kunt versnellen met drie eenvoudige stappen. Sommige collega\'s knikken. Anderen stellen vragen. Niels schrijft iets op.',
      vocab: [
        { w: 'trillen', d: 'to shake / tremble' },
        { w: 'de stem', d: 'the voice' },
        { w: 'knikken', d: 'to nod' },
        { w: 'opschrijven', d: 'to write down' },
      ],
      choices: [
        { text: 'Je beantwoordt de vragen zelfverzekerd', hint: 'Zelfverzekerd', next: 'c7a' },
        { text: 'Je zegt dat je de vragen later wilt beantwoorden', hint: 'Voorzichtig', next: 'c7b' },
      ],
      quiz: { q: 'Hoe is je stem tijdens de presentatie?', opts: ['Zacht en onzeker', 'Duidelijk', 'Heel luid', 'Ze zegt niets'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Wachten op het goede moment',
      text: 'Je hebt gewacht met je idee maar intussen heeft Niels een vergelijkbaar idee gepresenteerd. Het lijkt een beetje op jouw idee maar het is minder uitgewerkt. Sophie heeft het idee positief ontvangen. Je voelt een beetje spijt dat je niet eerder hebt gesproken, maar je hebt het gevoel dat je moment nog gaat komen.',
      vocab: [
        { w: 'vergelijkbaar', d: 'comparable / similar' },
        { w: 'ontvangen', d: 'to receive' },
        { w: 'spijt', d: 'regret' },
        { w: 'het moment', d: 'the moment' },
      ],
      choices: [
        { text: 'Je deelt je idee na de vergadering met Sophie', hint: 'Proactief', next: 'c7a' },
        { text: 'Je zegt niets en wacht op een betere gelegenheid', hint: 'Afwachtend', next: 'c7b' },
      ],
      quiz: { q: 'Wat heeft Niels gedaan in de vergadering?', opts: ['Je idee gestolen', 'Een vergelijkbaar idee gepresenteerd', 'Jou aangevallen', 'Niets gezegd'], a: 1 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Positieve reactie',
      text: 'Sophie heeft goed gereageerd op je idee of je presentatie. Ze heeft gezegd dat ze het interessant vindt en dat ze het met het managementteam wil bespreken. Je voelt je trots en opgelucht. Vera heeft je na de vergadering gefluisterd: "Goed gedaan! Je hebt indruk gemaakt op Sophie."',
      vocab: [
        { w: 'reageren', d: 'to react / respond' },
        { w: 'het managementteam', d: 'the management team' },
        { w: 'fluisteren', d: 'to whisper' },
        { w: 'indruk maken', d: 'to impress' },
      ],
      choices: [
        { text: 'Je vraagt Sophie wanneer je feedback kunt verwachten', hint: 'Proactief', next: 'c8a' },
        { text: 'Je wacht rustig op de reactie van het management', hint: 'Geduldig', next: 'c8b' },
      ],
      quiz: { q: 'Wat fluistert Vera je na de vergadering?', opts: ['"Beter geluk volgende keer"', '"Goed gedaan, je hebt indruk gemaakt op Sophie"', '"Niels was beter"', '"Ik vond het idee niet zo goed"'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Gemiste kans',
      text: 'Je hebt je idee niet gedeeld of je hebt de vragen niet goed beantwoord. De vergadering is voorbij en je hebt het gevoel dat je een kans hebt gemist. Niels heeft achteraf jouw aantekeningen gezien en zegt: "Hé, dat lijkt op mijn idee maar dan beter." Hij klinkt niet erg vriendelijk.',
      vocab: [
        { w: 'gemist', d: 'missed' },
        { w: 'achteraf', d: 'afterwards' },
        { w: 'de aantekeningen', d: 'the notes' },
        { w: 'klinken', d: 'to sound' },
      ],
      choices: [
        { text: 'Je legt uit dat je het idee zelfstandig hebt bedacht', hint: 'Eerlijk', next: 'c8a' },
        { text: 'Je laat het gaan en focust op je werk', hint: 'Kalm', next: 'c8b' },
      ],
      quiz: { q: 'Wat zegt Niels nadat hij je aantekeningen heeft gezien?', opts: ['"Goed idee!"', '"Dat lijkt op mijn idee maar dan beter"', '"Heb je dat gestolen?"', 'Niets'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Feedback van Sophie',
      text: 'Sophie heeft je apart genomen voor een kort gesprek. Ze heeft gezegd dat ze je idee heeft doorgestuurd naar de directeur. "We willen het in de volgende sprint implementeren," zegt ze. "Goed werk voor iemand die pas een week hier werkt." Je bent zo blij dat je niet weet wat je moet zeggen.',
      vocab: [
        { w: 'doorsturen', d: 'to forward (email/idea)' },
        { w: 'de directeur', d: 'the director' },
        { w: 'implementeren', d: 'to implement' },
        { w: 'de sprint', d: 'the sprint (work cycle)' },
      ],
      choices: [
        { text: 'Je bedankt Sophie en belooft hard te werken', hint: 'Gemotiveerd', next: 'c9a' },
        { text: 'Je vraagt of je meer verantwoordelijkheid kunt krijgen', hint: 'Ambitieus', next: 'c9b' },
      ],
      quiz: { q: 'Waar heeft Sophie je idee naartoe gestuurd?', opts: ['Naar het team', 'Naar de directeur', 'Naar de klant', 'Naar HR'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Een moeilijke week',
      text: 'De eerste week was moeilijk. Je hebt moeite gehad met het systeem, de vergadering is niet ideaal gegaan en je voelt je nog niet echt onderdeel van het team. Maar je hebt ook geleerd dat je meer moet communiceren. Vera stuurt je een berichtje: "Hoe gaat het? We gaan vrijdag lunchen, kom je mee?"',
      vocab: [
        { w: 'onderdeel', d: 'part (of a group)' },
        { w: 'communiceren', d: 'to communicate' },
        { w: 'lunchen', d: 'to have lunch' },
        { w: 'meekomen', d: 'to come along' },
      ],
      choices: [
        { text: 'Je gaat mee lunchen met de collega\'s', hint: 'Sociaal', next: 'c9a' },
        { text: 'Je werkt door tijdens de lunch om bij te werken', hint: 'Gedisciplineerd', next: 'c9b' },
      ],
      quiz: { q: 'Waarvoor nodigt Vera je uit?', opts: ['Een feestje', 'Lunchen op vrijdag', 'Sporten na het werk', 'Een vergadering'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Een goede eerste week',
      text: 'Je eerste week zit erop en het is beter gegaan dan je had verwacht. Sophie heeft je geprezen voor je idee en de collega\'s zijn aardig. Je hebt geluncht met Vera, Niels en twee anderen en jullie hebben veel gelachen. Je bent moe maar enthousiast over wat er gaat komen.',
      vocab: [
        { w: 'erop zitten', d: 'to be over / done (a period)' },
        { w: 'prijzen', d: 'to praise' },
        { w: 'aardig', d: 'nice / kind' },
        { w: 'enthousiast', d: 'enthusiastic' },
      ],
      choices: [
        { text: 'Je plant al je doelen voor de tweede week', hint: 'Ambitieus', next: 'c10g' },
        { text: 'Je geniet van het weekend en rust uit', hint: 'Evenwichtig', next: 'c10n' },
      ],
      quiz: { q: 'Hoe voel je je aan het einde van de eerste week?', opts: ['Moe en somber', 'Moe maar enthousiast', 'Opgewonden en uitgerust', 'Teleurgesteld'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Lessen leren',
      text: 'De eerste week was een leerschool. Je hebt fouten gemaakt en je hebt ook successen behaald. Sophie heeft je gevraagd om vrijdag een gesprek te hebben over je verwachtingen. Je weet niet zeker of dat goed of slecht nieuws is. Je bespreekt het met Vera want zij kent Sophie al lang.',
      vocab: [
        { w: 'de leerschool', d: 'the school of hard knocks / learning experience' },
        { w: 'behaald', d: 'achieved' },
        { w: 'de verwachting', d: 'the expectation' },
        { w: 'bespreken', d: 'to discuss' },
      ],
      choices: [
        { text: 'Je gaat optimistisch naar het gesprek met Sophie', hint: 'Positief', next: 'c10n' },
        { text: 'Je maakt je zorgen dat het slecht nieuws is', hint: 'Bezorgd', next: 'c10b' },
      ],
      quiz: { q: 'Wat heeft Sophie je gevraagd voor vrijdag?', opts: ['Een rapport schrijven', 'Een gesprek over je verwachtingen', 'Overwerken', 'Je idee opnieuw presenteren'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Een geweldige start',
      ending: 'good',
      text: 'Na een week heb je al bewezen dat je een waardevolle aanwinst bent voor het team. Sophie heeft je idee goedgekeurd en het wordt volgende sprint geïmplementeerd. De collega\'s vinden je aardig en je past goed in het team. Je hebt met een glimlach het kantoor verlaten en bent trots op jezelf.',
      vocab: [
        { w: 'bewijzen', d: 'to prove' },
        { w: 'de aanwinst', d: 'the asset / addition' },
        { w: 'goedkeuren', d: 'to approve' },
        { w: 'passen in', d: 'to fit in' },
      ],
      choices: [],
      quiz: { q: 'Wat is er met jouw idee gebeurd?', opts: ['Het is afgewezen', 'Het wordt volgend jaar bekeken', 'Het wordt volgende sprint geïmplementeerd', 'Het is gestolen door Niels'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een trage maar goede start',
      ending: 'neutral',
      text: 'De eerste week was moeilijk maar de dingen beginnen te verbeteren. Het gesprek met Sophie was positief en ze is blij met je inzet. Je idee wordt misschien later dit kwartaal besproken. Je weet nu dat je meer tijd nodig hebt om je te vestigen, maar je gelooft in je eigen kunnen.',
      vocab: [
        { w: 'de inzet', d: 'the effort / commitment' },
        { w: 'het kwartaal', d: 'the quarter (3 months)' },
        { w: 'vestigen', d: 'to establish oneself' },
        { w: 'het kunnen', d: 'the ability / capability' },
      ],
      choices: [],
      quiz: { q: 'Wanneer wordt jouw idee misschien besproken?', opts: ['Volgende week', 'Volgende sprint', 'Later dit kwartaal', 'Volgend jaar'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een lastige start',
      ending: 'bad',
      text: 'Het gesprek met Sophie was moeilijk. Ze heeft gezegd dat de eerste week niet helemaal goed is gegaan en dat je meer initiatief moet tonen. Niels heeft geprobeerd jouw idee als zijn eigen te presenteren en dat heeft voor spanning gezorgd. Je hebt het weekend nodig om na te denken over hoe je de tweede week beter gaat aanpakken.',
      vocab: [
        { w: 'het initiatief', d: 'the initiative' },
        { w: 'tonen', d: 'to show / demonstrate' },
        { w: 'de spanning', d: 'the tension' },
        { w: 'aanpakken', d: 'to tackle / approach' },
      ],
      choices: [],
      quiz: { q: 'Wat heeft Sophie gezegd in het gesprek?', opts: ['Je doet het geweldig', 'Je moet meer initiatief tonen', 'Je mag stoppen', 'Je krijgt promotie'], a: 1 },
    },
  },
};
