import type { Story } from './types';

export const storyNlA2_6: Story = {
  id: 'nl-a2-6',
  level: 'A2',
  title: 'Het Sportteam',
  genre: 'Sport',
  emoji: '⚽',
  coverColor: '#1e3a1e',
  accentColor: '#70b870',
  description: 'Je wilt lid worden van een lokaal voetbalteam. De selectie is niet eenvoudig.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De uitnodiging',
      text: 'Je hebt een flyer gevonden bij de sporthal: FC Westerwijk zoekt nieuwe spelers. Je hebt altijd van voetbal gehouden, maar je hebt nog nooit meegedaan aan een selectie. De training begint morgen om tien uur. Je voelt je een beetje nerveus, maar ook opgewonden. Wat doe je?',
      vocab: [
        { w: 'de flyer', d: 'the flyer / leaflet' },
        { w: 'de selectie', d: 'the trial / selection' },
        { w: 'opgewonden', d: 'excited' },
        { w: 'de sporthal', d: 'the sports centre' },
      ],
      choices: [
        { text: 'Je gaat meteen naar de training morgen', hint: 'Enthousiast', next: 'c2a' },
        { text: 'Je belt eerst de club om meer informatie te vragen', hint: 'Voorzichtig', next: 'c2b' },
      ],
      quiz: { q: 'Waar heeft je de flyer gevonden?', opts: ['Op straat', 'Bij de sporthal', 'In de krant', 'Op school'], a: 1 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Eerste training',
      text: 'Je bent aangekomen bij het voetbalveld. Er staan al tien andere spelers klaar. De aanvoerder, Daan, stelt zich voor en legt de regels uit. Hij zegt dat iedereen een kans krijgt om zichzelf te laten zien. Je hebt je schoenen aangetrokken en je bent klaar om te beginnen.',
      vocab: [
        { w: 'de aanvoerder', d: 'the captain' },
        { w: 'zich voorstellen', d: 'to introduce oneself' },
        { w: 'uitleggen', d: 'to explain' },
        { w: 'de kans', d: 'the chance / opportunity' },
      ],
      choices: [
        { text: 'Je vraagt Daan om tips voor de training', hint: 'Slim', next: 'c3a' },
        { text: 'Je begint rustig op te warmen met de andere spelers', hint: 'Sociaal', next: 'c3b' },
      ],
      quiz: { q: 'Wie is Daan?', opts: ['Een trainer', 'De aanvoerder', 'Een nieuwe speler', 'De scheidsrechter'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Het telefoongesprek',
      text: 'Je hebt de club gebeld en Daan heeft de telefoon opgenomen. Hij is de aanvoerder van het team en klinkt vriendelijk. Daan vertelt dat de selectie bestaat uit drie oefeningen en een klein partijspel. Hij zegt dat je geen ervaring nodig hebt, want het gaat om inzet en teamgeest. Je voelt je al iets minder nerveus.',
      vocab: [
        { w: 'de ervaring', d: 'the experience' },
        { w: 'de inzet', d: 'the effort / commitment' },
        { w: 'de teamgeest', d: 'the team spirit' },
        { w: 'het partijspel', d: 'the practice match' },
      ],
      choices: [
        { text: 'Je vraagt Daan om tips voor de training', hint: 'Slim', next: 'c3a' },
        { text: 'Je bedankt hem en hangt op', hint: 'Verlegen', next: 'c3b' },
      ],
      quiz: { q: 'Waaruit bestaat de selectie?', opts: ['Alleen een partijspel', 'Een interview en een test', 'Drie oefeningen en een partijspel', 'Twee trainingen'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Tips van Daan',
      text: 'Daan geeft je een paar goede tips. Hij zegt dat de coaches letten op samenwerking, niet alleen op techniek. Je moet laten zien dat je goed kunt communiceren met andere spelers. Tijdens het opwarmen heb je al met drie teamgenoten gepraat, omdat je wilt laten zien dat je een goede teamspeler bent.',
      vocab: [
        { w: 'letten op', d: 'to pay attention to' },
        { w: 'de samenwerking', d: 'the teamwork / cooperation' },
        { w: 'communiceren', d: 'to communicate' },
        { w: 'de teamspeler', d: 'the team player' },
      ],
      choices: [
        { text: 'Je richt je op de samenwerking tijdens het spel', hint: 'Tactisch', next: 'c4a' },
        { text: 'Je probeert zoveel mogelijk doelpunten te scoren', hint: 'Aanvallend', next: 'c4b' },
      ],
      quiz: { q: 'Waarop letten de coaches volgens Daan?', opts: ['Alleen op techniek', 'Op snelheid', 'Op samenwerking', 'Op conditie'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Nieuwe vrienden',
      text: 'Tijdens het opwarmen heb je naast een jongen gestaan die Raf heet. Hij doet ook voor het eerst mee aan een selectie. Jullie hebben samen geoefend en gelachen om een mislukte pass. Je voelt je nu een stuk relaxter dan eerder, want het lijkt een vriendelijke groep mensen te zijn.',
      vocab: [
        { w: 'oefenen', d: 'to practise' },
        { w: 'de pass', d: 'the pass (in football)' },
        { w: 'mislukt', d: 'failed / unsuccessful' },
        { w: 'relaxter', d: 'more relaxed' },
      ],
      choices: [
        { text: 'Je richt je op de samenwerking tijdens het spel', hint: 'Tactisch', next: 'c4a' },
        { text: 'Je probeert zoveel mogelijk doelpunten te scoren', hint: 'Aanvallend', next: 'c4b' },
      ],
      quiz: { q: 'Hoe heet de jongen die je hebt leren kennen?', opts: ['Daan', 'Tim', 'Raf', 'Jan'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'De moeilijke oefening',
      text: 'De eerste oefening is koppen, maar dat is niet jouw sterkste punt. Je hebt twee keer de bal gemist, terwijl de andere spelers het goed doen. Daan kijkt toe en schrijft iets op. Je wilt niet opgeven, want je weet dat je later beter kunt laten zien wat je kunt. De volgende oefening is dribbelen.',
      vocab: [
        { w: 'koppen', d: 'to head the ball' },
        { w: 'missen', d: 'to miss' },
        { w: 'opgeven', d: 'to give up' },
        { w: 'dribbelen', d: 'to dribble' },
      ],
      choices: [
        { text: 'Je vraagt een medespeler om je te helpen', hint: 'Bescheiden', next: 'c5a' },
        { text: 'Je concentreert je extra hard op de volgende oefening', hint: 'Vastberaden', next: 'c5b' },
      ],
      quiz: { q: 'Welke oefening is niet jouw sterkste punt?', opts: ['Dribbelen', 'Schieten', 'Koppen', 'Passen'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Schiettraining',
      text: 'Tijdens de schiettraining heb jij drie keer gescoord. De keeper kon jouw schoten nauwelijks stoppen. Daan heeft geklopt en gezegd: "Goed gedaan!" Toch weet je dat je bij koppen minder goed bent. Je hoopt dat je sterke punten genoeg zijn om geselecteerd te worden.',
      vocab: [
        { w: 'scoren', d: 'to score' },
        { w: 'de keeper', d: 'the goalkeeper' },
        { w: 'nauwelijks', d: 'barely / hardly' },
        { w: 'geselecteerd worden', d: 'to be selected' },
      ],
      choices: [
        { text: 'Je vraagt een medespeler om je te helpen', hint: 'Bescheiden', next: 'c5a' },
        { text: 'Je concentreert je extra hard op de volgende oefening', hint: 'Vastberaden', next: 'c5b' },
      ],
      quiz: { q: 'Hoeveel keer heeft je gescoord tijdens de schiettraining?', opts: ['Één keer', 'Twee keer', 'Drie keer', 'Vier keer'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Hulp vragen',
      text: 'Je hebt Raf gevraagd om je te helpen met koppen. Hij laat je zien hoe je de juiste positie kiest. Na een paar minuten oefenen gaat het al veel beter. Daan heeft het gezien en knikke goedkeurend. Jij voelt je trots, omdat je niet bang bent geweest om hulp te vragen.',
      vocab: [
        { w: 'de positie', d: 'the position' },
        { w: 'goedkeurend', d: 'approvingly' },
        { w: 'trots', d: 'proud' },
        { w: 'knikken', d: 'to nod' },
      ],
      choices: [
        { text: 'Je geeft alles tijdens het partijspel', hint: 'Gedreven', next: 'c6a' },
        { text: 'Je speelt rustig en maakt slimme keuzes', hint: 'Beheerst', next: 'c6b' },
      ],
      quiz: { q: 'Wie heeft je geholpen met koppen?', opts: ['Daan', 'De trainer', 'Raf', 'De keeper'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Extra concentratie',
      text: 'Je hebt je heel goed geconcentreerd tijdens de dribbelloefening. Je bent langs vier pylonen gegaan zonder één fout te maken. De trainer heeft hardop gezegd dat je goede voetbaltechniek hebt. Je voelt nu meer zelfvertrouwen, want je weet dat je iets goeds hebt laten zien aan het team.',
      vocab: [
        { w: 'de pyloon', d: 'the cone (training)' },
        { w: 'de voetbaltechniek', d: 'the football technique' },
        { w: 'het zelfvertrouwen', d: 'the self-confidence' },
        { w: 'hardop', d: 'aloud / out loud' },
      ],
      choices: [
        { text: 'Je geeft alles tijdens het partijspel', hint: 'Gedreven', next: 'c6a' },
        { text: 'Je speelt rustig en maakt slimme keuzes', hint: 'Beheerst', next: 'c6b' },
      ],
      quiz: { q: 'Hoeveel pylonen ben je gepasseerd?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Het partijspel',
      text: 'Tijdens het partijspel speel je heel agressief. Je hebt twee doelpunten gemaakt en veel ballen gewonnen. Maar je hebt ook twee keer een fout gemaakt bij het passen, want je wilde te snel spelen. Daan bekijkt alles vanaf de zijlijn en maakt notities. Je bent moe maar tevreden.',
      vocab: [
        { w: 'agressief', d: 'aggressively' },
        { w: 'de zijlijn', d: 'the sideline' },
        { w: 'de notities', d: 'the notes' },
        { w: 'tevreden', d: 'satisfied' },
      ],
      choices: [
        { text: 'Je spreekt Daan aan na de training', hint: 'Dapper', next: 'c7a' },
        { text: 'Je wacht rustig op de teamvergadering', hint: 'Geduldig', next: 'c7b' },
      ],
      quiz: { q: 'Hoeveel doelpunten heeft je gemaakt tijdens het partijspel?', opts: ['Één', 'Twee', 'Drie', 'Geen'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Slim spelen',
      text: 'Je hebt rustig en slim gespeeld tijdens het partijspel. Je hebt geen doelpunten gemaakt, maar je hebt wel vijf goede passes gegeven. Jouw teamgenoten zijn blij met jou, omdat je altijd op de juiste plek staat. Daan zegt na afloop: "Jij begrijpt het spel goed."',
      vocab: [
        { w: 'na afloop', d: 'afterwards / at the end' },
        { w: 'begrijpen', d: 'to understand' },
        { w: 'op de juiste plek', d: 'in the right spot' },
        { w: 'geven', d: 'to give (here: to make a pass)' },
      ],
      choices: [
        { text: 'Je spreekt Daan aan na de training', hint: 'Dapper', next: 'c7a' },
        { text: 'Je wacht rustig op de teamvergadering', hint: 'Geduldig', next: 'c7b' },
      ],
      quiz: { q: 'Wat zegt Daan over jou na het spel?', opts: ['"Je bent te langzaam"', '"Je hebt veel gescoord"', '"Jij begrijpt het spel goed"', '"Je moet harder trainen"'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Gesprek met Daan',
      text: 'Je hebt Daan aangesproken na de training. Hij zegt dat je een goede eerste indruk hebt gemaakt. "Het team stemt volgende week over nieuwe leden," legt hij uit. Hij vraagt ook of je wilt terugkomen voor een tweede training, want hij wil meer zien van jouw speelstijl.',
      vocab: [
        { w: 'de indruk', d: 'the impression' },
        { w: 'stemmen', d: 'to vote' },
        { w: 'de speelstijl', d: 'the playing style' },
        { w: 'het lid', d: 'the member' },
      ],
      choices: [
        { text: 'Je zegt direct dat je wilt terugkomen', hint: 'Enthousiast', next: 'c8a' },
        { text: 'Je vraagt eerst meer over het team', hint: 'Nieuwsgierig', next: 'c8b' },
      ],
      quiz: { q: 'Wat vraagt Daan aan je?', opts: ['Of je al eerder hebt gespeeld', 'Of je een tweede training wilt doen', 'Of je aanvoerder wilt worden', 'Of je morgen kunt spelen'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'De teamvergadering',
      text: 'Alle kandidaten wachten in de kleedkamer. Daan komt binnen en zegt dat het team heeft vergaderd. Hij leest de namen voor van drie mensen die zijn toegelaten tot de tweede ronde. Jouw naam staat erbij. Je bent opgelucht, want je had niet verwacht dat je zo goed zou presteren.',
      vocab: [
        { w: 'de kleedkamer', d: 'the changing room' },
        { w: 'toegelaten', d: 'admitted / accepted' },
        { w: 'opgelucht', d: 'relieved' },
        { w: 'presteren', d: 'to perform' },
      ],
      choices: [
        { text: 'Je zegt direct dat je wilt terugkomen', hint: 'Enthousiast', next: 'c8a' },
        { text: 'Je vraagt eerst meer over het team', hint: 'Nieuwsgierig', next: 'c8b' },
      ],
      quiz: { q: 'Hoe voelt je je als je naam wordt voorgelezen?', opts: ['Verdrietig', 'Boos', 'Opgelucht', 'Bang'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'De tweede kans',
      text: 'Je bent teruggekomen voor de tweede training. Daan heeft je gevraagd om als aanvaller te spelen, want hij heeft gezien hoe goed je kunt schieten. Je hebt je best gedaan en je hebt het team twee keer geholpen met een slimme pass. Na de training wacht je op de uitslag van de teamvoting.',
      vocab: [
        { w: 'de aanvaller', d: 'the forward / striker' },
        { w: 'de uitslag', d: 'the result / outcome' },
        { w: 'de teamvoting', d: 'the team vote' },
        { w: 'helpen', d: 'to help' },
      ],
      choices: [
        { text: 'Je wacht vol vertrouwen op het nieuws', hint: 'Zelfverzekerd', next: 'c9a' },
        { text: 'Je vraagt Raf wat hij denkt over jouw kansen', hint: 'Onzeker', next: 'c9b' },
      ],
      quiz: { q: 'Op welke positie heeft Daan je gevraagd te spelen?', opts: ['Verdediger', 'Keeper', 'Middenvelder', 'Aanvaller'], a: 3 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Meer over het team',
      text: 'Daan heeft je veel verteld over FC Westerwijk. Het team speelt elke zaterdag in de competitie en traint twee keer per week. Er zijn spelers van verschillende leeftijden, want Daan gelooft in diversiteit. Hij heeft gezegd dat het team graag nieuwe energie wil, omdat sommige spelers al jaren meespelen.',
      vocab: [
        { w: 'de competitie', d: 'the league / competition' },
        { w: 'de diversiteit', d: 'the diversity' },
        { w: 'de energie', d: 'the energy' },
        { w: 'meespelen', d: 'to play along / to participate' },
      ],
      choices: [
        { text: 'Je wacht vol vertrouwen op het nieuws', hint: 'Zelfverzekerd', next: 'c9a' },
        { text: 'Je vraagt Raf wat hij denkt over jouw kansen', hint: 'Onzeker', next: 'c9b' },
      ],
      quiz: { q: 'Hoe vaak traint FC Westerwijk per week?', opts: ['Één keer', 'Twee keer', 'Drie keer', 'Vier keer'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'De stemming',
      text: 'Het team heeft gestemd en Daan belt je dezelfde avond. Zijn stem klinkt warm als hij zegt: "We hebben jou unaniem gekozen." Je kunt niet geloven wat je hoort, want je dacht dat je kansen kleiner waren. Daan zegt dat je eerste wedstrijd aanstaande zaterdag is. Je kunt bijna niet slapen van opwinding.',
      vocab: [
        { w: 'unaniem', d: 'unanimous / unanimously' },
        { w: 'de wedstrijd', d: 'the match / game' },
        { w: 'aanstaande', d: 'upcoming / next' },
        { w: 'de opwinding', d: 'the excitement' },
      ],
      choices: [
        { text: 'Je traint extra hard voor de eerste wedstrijd', hint: 'Gedisciplineerd', next: 'c10g' },
        { text: 'Je vertelt het aan al je vrienden', hint: 'Trots', next: 'c10n' },
      ],
      quiz: { q: 'Hoe is Daan over je gekozen?', opts: ['Met één stem verschil', 'Met de helft van de stemmen', 'Unaniem', 'Na een tweede stemronde'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Twijfels',
      text: 'Raf zegt eerlijk dat jij en hij allebei een redelijke kans hebben, maar dat er maar twee plaatsen vrij zijn. Er zijn vijf kandidaten, dus het is spannend. Je begint te twijfelen, want je denkt aan de fouten die je hebt gemaakt. De volgende dag krijg je een bericht van Daan.',
      vocab: [
        { w: 'twijfelen', d: 'to doubt / to hesitate' },
        { w: 'de kandidaat', d: 'the candidate' },
        { w: 'het bericht', d: 'the message' },
        { w: 'spannend', d: 'exciting / tense' },
      ],
      choices: [
        { text: 'Je traint extra hard voor de eerste wedstrijd', hint: 'Gedisciplineerd', next: 'c10n' },
        { text: 'Je leest het bericht met angst in het hart', hint: 'Nerveus', next: 'c10b' },
      ],
      quiz: { q: 'Hoeveel plaatsen zijn er vrij in het team?', opts: ['Één', 'Twee', 'Drie', 'Vier'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Het eerste doelpunt', ending: 'good',
      text: 'Je eerste wedstrijd is een droom. Je hebt in de tweede helft het winnende doelpunt gemaakt en je teamgenoten hebben je opgetild. Daan heeft je na afloop een hand gegeven en gezegd: "Welkom in het team, dit was geweldig." Je hebt hard getraind en het heeft zich uitbetaald. Dit is het begin van iets moois.',
      vocab: [
        { w: 'de tweede helft', d: 'the second half' },
        { w: 'optillen', d: 'to lift up' },
        { w: 'zich uitbetalen', d: 'to pay off' },
        { w: 'geweldig', d: 'fantastic / great' },
      ],
      choices: [],
      quiz: { q: 'Wanneer heb je het winnende doelpunt gemaakt?', opts: ['In de eerste helft', 'Voor de rust', 'In de tweede helft', 'Na verlengingen'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'De reservelijst', ending: 'neutral',
      text: 'Daan heeft je gefeliciteerd, maar verteld dat je op de reservelijst staat. Er was één plek minder dan verwacht. Je mag wel meekomen als reservespeler en je traint gewoon mee met het team. Bij de eerste wedstrijd zit je op de bank, maar Daan zegt: "Jouw kans komt snel." Je blijft positief.',
      vocab: [
        { w: 'de reservelijst', d: 'the reserve list' },
        { w: 'de reservespeler', d: 'the substitute player' },
        { w: 'de bank', d: 'the bench' },
        { w: 'positief blijven', d: 'to stay positive' },
      ],
      choices: [],
      quiz: { q: 'Waar staat je op aan het einde?', opts: ['In het basisteam', 'Op de reservelijst', 'Buiten het team', 'Als aanvoerder'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Niet geselecteerd', ending: 'bad',
      text: 'Het bericht van Daan is niet het nieuws dat je hoopte te lezen. Je bent niet geselecteerd, omdat er te veel goede spelers waren. Daan stelt vriendelijk voor om het volgend seizoen opnieuw te proberen. Hij suggereert ook dat je misschien beter bij een andere sport past, zoals basketbal of tennis. Je bent teleurgesteld, maar je geeft niet op.',
      vocab: [
        { w: 'teleurgesteld', d: 'disappointed' },
        { w: 'het seizoen', d: 'the season' },
        { w: 'suggereren', d: 'to suggest' },
        { w: 'opnieuw proberen', d: 'to try again' },
      ],
      choices: [],
      quiz: { q: 'Wat suggereert Daan aan het einde?', opts: ['Dat je stopt met sport', 'Dat je volgend seizoen terugkomt of een andere sport probeert', 'Dat je bij een andere voetbalclub probeert', 'Dat je een cursus volgt'], a: 1 },
    },
  },
};
