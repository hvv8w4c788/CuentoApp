import type { Story } from './types';

export const storyNlA2_10: Story = {
  id: 'nl-a2-10',
  level: 'A2',
  title: 'De Taalcursus',
  genre: 'Vriendschap',
  emoji: '📚',
  coverColor: '#1a2a1a',
  accentColor: '#70c070',
  description: 'Je volgt een cursus Nederlands en ontmoet interessante mensen.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De eerste les',
      text: 'Je bent begonnen met een cursus Nederlands bij een taalschool in de stad. In het lokaal zitten tien cursisten uit verschillende landen. De docente heet mevrouw Van Dam en ze stelt iedereen voor. Je voelt je een beetje nerveus, want je wilt een goede indruk maken. De eerste les gaat over jezelf voorstellen.',
      vocab: [
        { w: 'de cursist', d: 'the student (course participant)' },
        { w: 'de docente', d: 'the teacher (female)' },
        { w: 'het lokaal', d: 'the classroom' },
        { w: 'voorstellen', d: 'to introduce' },
      ],
      choices: [
        { text: 'Je stelt jezelf voor aan de hele klas', hint: 'Zelfverzekerd', next: 'c2a' },
        { text: 'Je praat eerst alleen met de persoon naast je', hint: 'Verlegen', next: 'c2b' },
      ],
      quiz: { q: 'Hoe heet de docente?', opts: ['Mevrouw Bakker', 'Mevrouw De Vries', 'Mevrouw Van Dam', 'Mevrouw Peters'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Zelfverzekerd van start',
      text: 'Je hebt jezelf voorgesteld aan de klas en iedereen heeft geklopt. Mevrouw Van Dam heeft gezegd dat je al goed Nederlands spreekt voor een beginner. Naast je zit een vrouw die Maria heet, ze komt uit Brazilië. Aan de andere kant zit Ahmed, die uit Marokko komt. Ze lijken allebei vriendelijk en nieuwsgierig.',
      vocab: [
        { w: 'kloppen', d: 'to clap / to knock' },
        { w: 'de beginner', d: 'the beginner' },
        { w: 'nieuwsgierig', d: 'curious' },
        { w: 'aan de andere kant', d: 'on the other side' },
      ],
      choices: [
        { text: 'Je vraagt Maria meer over haar leven in Brazilië', hint: 'Nieuwsgierig', next: 'c3a' },
        { text: 'Je concentreert je op de grammaticaoefening', hint: 'Gefocust', next: 'c3b' },
      ],
      quiz: { q: 'Waar komt Maria vandaan?', opts: ['Mexico', 'Argentinië', 'Brazilië', 'Colombia'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Een rustige start',
      text: 'Je hebt eerst gefluisterd met de persoon naast je. Het is een vrouw die Maria heet en ze komt uit Brazilië. Ze is ook een beetje nerveus en blij dat je aangesproken hebt. Aan de andere kant zit Ahmed uit Marokko, die jullie ook heeft begroet. Mevrouw Van Dam begint de les en vraagt iedereen om zich voor te stellen.',
      vocab: [
        { w: 'fluisteren', d: 'to whisper' },
        { w: 'aanspreken', d: 'to approach / to speak to' },
        { w: 'begroeten', d: 'to greet' },
        { w: 'nerveus', d: 'nervous' },
      ],
      choices: [
        { text: 'Je vraagt Maria meer over haar leven in Brazilië', hint: 'Nieuwsgierig', next: 'c3a' },
        { text: 'Je concentreert je op de grammaticaoefening', hint: 'Gefocust', next: 'c3b' },
      ],
      quiz: { q: 'Hoe ben je Maria leren kennen?', opts: ['Via Ahmed', 'Door te fluisteren met haar', 'Via mevrouw Van Dam', 'Op de gang'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Maria en Ahmed',
      text: 'In de pauze heb je met Maria en Ahmed gepraat. Maria woont al twee jaar in Nederland omdat haar man hier werkt. Ahmed is student en wil in Nederland blijven na zijn studie. Jullie hebben afgesproken om samen te leren na de les. Je bent blij, want je hebt al twee nieuwe vrienden gemaakt.',
      vocab: [
        { w: 'de pauze', d: 'the break / pause' },
        { w: 'afspreken', d: 'to make an appointment / to agree to meet' },
        { w: 'de studie', d: 'the studies / degree' },
        { w: 'blijven', d: 'to stay / to remain' },
      ],
      choices: [
        { text: 'Je maakt samen een studiegroep met Maria en Ahmed', hint: 'Sociaal', next: 'c4a' },
        { text: 'Je oefent alleen thuis want je leert liever alleen', hint: 'Zelfstandig', next: 'c4b' },
      ],
      quiz: { q: 'Waarom woont Maria al twee jaar in Nederland?', opts: ['Ze studeert hier', 'Haar man werkt hier', 'Ze heeft hier familie', 'Ze is op vakantie'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De grammaticaoefening',
      text: 'De grammaticaoefening gaat over de-woorden en het-woorden. Je weet dat dit moeilijk is, want er zijn bijna geen regels voor. Je hebt vijf van de tien vragen goed, terwijl Ahmed er acht goed heeft. Je voelt je een beetje ontmoedigd, maar mevrouw Van Dam zegt dat iedereen hier moeite mee heeft in het begin.',
      vocab: [
        { w: 'de grammaticaoefening', d: 'the grammar exercise' },
        { w: 'ontmoedigd', d: 'discouraged' },
        { w: 'moeite hebben met', d: 'to struggle with' },
        { w: 'in het begin', d: 'in the beginning' },
      ],
      choices: [
        { text: 'Je vraagt Ahmed hoe hij de de/het-regels onthoudt', hint: 'Slim', next: 'c4a' },
        { text: 'Je oefent extra thuis met een app', hint: 'Zelfstandig', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel vragen heeft je goed bij de grammaticaoefening?', opts: ['Drie', 'Vier', 'Vijf', 'Zes'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'De studiegroep',
      text: 'Jullie hebben een studiegroep gemaakt en spreken af in een café elke dinsdag. Ahmed is heel goed in grammatica en hij legt de regels heel duidelijk uit. Maria is creatief en maakt grappige zinnen om nieuwe woorden te onthouden. Je hebt veel geleerd in de eerste sessie en je voelt je al beter over de cursus.',
      vocab: [
        { w: 'de studiegroep', d: 'the study group' },
        { w: 'uitleggen', d: 'to explain' },
        { w: 'onthouden', d: 'to remember / to memorise' },
        { w: 'de sessie', d: 'the session' },
      ],
      choices: [
        { text: 'Je helpt een andere cursist die moeite heeft', hint: 'Behulpzaam', next: 'c5a' },
        { text: 'Je richt je volledig op je eigen voortgang', hint: 'Gefocust', next: 'c5b' },
      ],
      quiz: { q: 'Hoe helpt Maria om woorden te onthouden?', opts: ['Ze schrijft ze tien keer op', 'Ze zingt ze', 'Ze maakt grappige zinnen', 'Ze maakt kaartjes'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Thuis oefenen',
      text: 'Je hebt thuis twee uur geoefend met een taalapp. Je hebt de woordenschat goed geleerd, maar de grammatica blijft moeilijk. De volgende les heb je een dictee gedaan en je hebt acht van de tien woorden goed gespeld. Mevrouw Van Dam heeft je gefeliciteerd. Ahmed heeft je daarna gevraagd hoe je zo goed hebt geoefend.',
      vocab: [
        { w: 'de woordenschat', d: 'the vocabulary' },
        { w: 'het dictee', d: 'the dictation' },
        { w: 'spellen', d: 'to spell' },
        { w: 'de taalapp', d: 'the language app' },
      ],
      choices: [
        { text: 'Je helpt Ahmed met zijn uitspraak', hint: 'Behulpzaam', next: 'c5a' },
        { text: 'Je richt je volledig op je eigen voortgang', hint: 'Gefocust', next: 'c5b' },
      ],
      quiz: { q: 'Hoeveel woorden heeft je goed gespeld bij het dictee?', opts: ['Zes', 'Zeven', 'Acht', 'Negen'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Een klasgenoot helpen',
      text: 'Er is een nieuwe cursist in de klas: een man die Kenji heet en uit Japan komt. Hij heeft moeite met de uitspraak van Nederlandse klinkers, want die bestaan niet in het Japans. Jij herinnert je dat jij ook zo begon en je biedt hem aan om samen te oefenen. Kenji is heel dankbaar en jullie oefenen samen in de pauze.',
      vocab: [
        { w: 'de uitspraak', d: 'the pronunciation' },
        { w: 'de klinker', d: 'the vowel' },
        { w: 'dankbaar', d: 'grateful' },
        { w: 'bestaan', d: 'to exist' },
      ],
      choices: [
        { text: 'Je vraagt mevrouw Van Dam om extra oefenmateriaal', hint: 'Pro-actief', next: 'c6a' },
        { text: 'Je maakt zelf oefeningen voor Kenji', hint: 'Creatief', next: 'c6b' },
      ],
      quiz: { q: 'Waar heeft Kenji moeite mee?', opts: ['Grammatica', 'Schrijven', 'De uitspraak van klinkers', 'Lezen'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Eigen voortgang',
      text: 'Je hebt je volledig gefocust op je eigen voortgang en je hebt veel geleerd. Je woordenschat is sterk gegroeid en je kunt al eenvoudige gesprekken voeren. Maar je voelt je soms eenzaam in de klas, want iedereen lijkt goede vrienden te worden behalve jij. Je vraagt je af of je meer contact moet zoeken.',
      vocab: [
        { w: 'de voortgang', d: 'the progress' },
        { w: 'gegroeid', d: 'grown / increased' },
        { w: 'eenzaam', d: 'lonely' },
        { w: 'contact zoeken', d: 'to seek contact / to reach out' },
      ],
      choices: [
        { text: 'Je vraagt mevrouw Van Dam voor een gesprek over je voortgang', hint: 'Pro-actief', next: 'c6a' },
        { text: 'Je nodigt Maria en Ahmed uit voor koffie', hint: 'Sociaal', next: 'c6b' },
      ],
      quiz: { q: 'Hoe voel je je ondanks je goede voortgang?', opts: ['Trots en gelukkig', 'Moe maar tevreden', 'Soms eenzaam', 'Heel zelfverzekerd'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Extra oefenmateriaal',
      text: 'Mevrouw Van Dam is onder de indruk dat je extra oefenmateriaal wilt. Ze heeft een lijst gegeven van Nederlandse podcasts en YouTube-kanalen die goed zijn voor A2-niveau. Ze heeft ook gezegd dat je een heel goede houding hebt tegenover leren. Je begint die avond met een podcast en het gaat beter dan verwacht.',
      vocab: [
        { w: 'het oefenmateriaal', d: 'the practice material' },
        { w: 'onder de indruk', d: 'impressed' },
        { w: 'de houding', d: 'the attitude' },
        { w: 'het niveau', d: 'the level' },
      ],
      choices: [
        { text: 'Je studeert intensief in de week voor het examen', hint: 'Gedisciplineerd', next: 'c7a' },
        { text: 'Je geniet van het leerproces zonder te stressen', hint: 'Ontspannen', next: 'c7b' },
      ],
      quiz: { q: 'Wat heeft mevrouw Van Dam je gegeven?', opts: ['Extra lessen', 'Een lijst van podcasts en YouTube-kanalen', 'Een nieuw leerboek', 'Huiswerk'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Koffie met vrienden',
      text: 'Je hebt Maria en Ahmed uitgenodigd voor koffie na de les. Ze waren heel blij met de uitnodiging. Jullie hebben twee uur gepraat, eerst in het Engels maar daarna steeds meer in het Nederlands. Maria heeft gezegd dat ze ook een beetje eenzaam was in het begin. Je voelt je nu echt onderdeel van de groep.',
      vocab: [
        { w: 'de uitnodiging', d: 'the invitation' },
        { w: 'steeds meer', d: 'more and more' },
        { w: 'onderdeel van', d: 'part of' },
        { w: 'in het begin', d: 'in the beginning' },
      ],
      choices: [
        { text: 'Je studeert intensief in de week voor het examen', hint: 'Gedisciplineerd', next: 'c7a' },
        { text: 'Je spreekt met de groep af om samen te studeren', hint: 'Sociaal', next: 'c7b' },
      ],
      quiz: { q: 'In welke taal begonnen jullie te praten tijdens de koffie?', opts: ['Nederlands', 'Duits', 'Engels', 'Frans'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Intensief studeren',
      text: 'In de week voor het eindexamen heb je elke avond drie uur gestudeerd. Je hebt alle grammaticaregels herhaald en honderden woorden geoefend. Je hebt ook met Ahmed geoefend via video-bellen. Op de dag voor het examen voel je je goed voorbereid, maar ook een beetje moe van al het studeren.',
      vocab: [
        { w: 'het eindexamen', d: 'the final exam' },
        { w: 'herhalen', d: 'to repeat / to revise' },
        { w: 'video-bellen', d: 'to video call' },
        { w: 'voorbereid', d: 'prepared' },
      ],
      choices: [
        { text: 'Je slaapt vroeg en gaat uitgerust naar het examen', hint: 'Verstandig', next: 'c8a' },
        { text: 'Je herhaalt alles nog een keer de avond voor het examen', hint: 'Grondig', next: 'c8b' },
      ],
      quiz: { q: 'Hoe lang heb je elke avond gestudeerd?', opts: ['Één uur', 'Twee uur', 'Drie uur', 'Vier uur'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Samen studeren',
      text: 'Jullie hebben besloten om samen te studeren in de bibliotheek. Ahmed heeft een overzicht gemaakt van alle grammaticapunten en Maria heeft quizvragen geschreven. Jullie hebben elkaar getest en gelachen om de grappige fouten. Het was een leuke middag en je hebt ook veel geleerd zonder je gestrest te voelen.',
      vocab: [
        { w: 'de bibliotheek', d: 'the library' },
        { w: 'het overzicht', d: 'the overview / summary' },
        { w: 'de quizvraag', d: 'the quiz question' },
        { w: 'gestrest', d: 'stressed' },
      ],
      choices: [
        { text: 'Je slaapt vroeg en gaat uitgerust naar het examen', hint: 'Verstandig', next: 'c8a' },
        { text: 'Je herhaalt alles nog een keer de avond voor het examen', hint: 'Grondig', next: 'c8b' },
      ],
      quiz: { q: 'Waar hebben jullie samen gestudeerd?', opts: ['In een café', 'Thuis bij Ahmed', 'In de bibliotheek', 'Op school'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'De examendag',
      text: 'Je bent uitgerust en op tijd aangekomen voor het examen. Het examen bestaat uit drie delen: leesvaardigheid, luistervaardigheid en een mondeling gesprek. Je hebt rustig de vragen gelezen en je hebt je goed gevoeld. Het mondelinge gesprek was een beetje spannend, maar je hebt goed geantwoord op alle vragen.',
      vocab: [
        { w: 'de leesvaardigheid', d: 'the reading ability' },
        { w: 'de luistervaardigheid', d: 'the listening ability' },
        { w: 'het mondeling', d: 'the oral (exam)' },
        { w: 'spannend', d: 'exciting / tense' },
      ],
      choices: [
        { text: 'Je wacht op je resultaat met vertrouwen', hint: 'Positief', next: 'c9a' },
        { text: 'Je bespreekt het examen met Ahmed en Maria', hint: 'Sociaal', next: 'c9b' },
      ],
      quiz: { q: 'Uit hoeveel delen bestaat het examen?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Nog één keer herhalen',
      text: 'Je hebt de avond voor het examen alles nog een keer herhaald. Je bent pas om middernacht naar bed gegaan en je was de volgende ochtend moe. Tijdens het examen merkte je dat je moeite had om je te concentreren, want je was niet uitgerust. Je hebt toch je best gedaan, maar je weet niet zeker of het genoeg was.',
      vocab: [
        { w: 'middernacht', d: 'midnight' },
        { w: 'concentreren', d: 'to concentrate' },
        { w: 'uitgerust', d: 'rested' },
        { w: 'je best doen', d: 'to do one\'s best' },
      ],
      choices: [
        { text: 'Je wacht op je resultaat met hoop', hint: 'Positief', next: 'c9a' },
        { text: 'Je bent bang dat je het examen niet hebt gehaald', hint: 'Bezorgd', next: 'c9b' },
      ],
      quiz: { q: 'Hoe laat ben je naar bed gegaan voor het examen?', opts: ['Om tien uur', 'Om elf uur', 'Om middernacht', 'Om één uur'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Wachten op resultaten',
      text: 'Na het examen hebben jullie samen koffie gedronken en gepraat over de vragen. Ahmed denkt dat hij het goed heeft gedaan, maar hij is altijd te bescheiden. Maria heeft gezegd dat het mondelinge gesprek het moeilijkst was. Mevrouw Van Dam heeft beloofd dat de resultaten er binnen drie dagen zijn. Je voelt je goed over de afgelopen weken.',
      vocab: [
        { w: 'bescheiden', d: 'modest' },
        { w: 'het resultaat', d: 'the result' },
        { w: 'beloven', d: 'to promise' },
        { w: 'de afgelopen weken', d: 'the past weeks' },
      ],
      choices: [
        { text: 'Je ontvangt het resultaat met een goed gevoel', hint: 'Zeker', next: 'c10g' },
        { text: 'Je twijfelt of je het examen hebt gehaald', hint: 'Onzeker', next: 'c10n' },
      ],
      quiz: { q: 'Wanneer komen de resultaten?', opts: ['De volgende dag', 'Binnen twee dagen', 'Binnen drie dagen', 'Binnen een week'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Zorgen maken',
      text: 'Je maakt je zorgen over het examen. Je denkt aan de vragen die je moeilijk vond en je vraagt je af of je genoeg geoefend hebt. Ahmed probeert je gerust te stellen, maar je blijft onzeker. Die nacht slaap je slecht omdat je steeds denkt aan het examen. De volgende dag krijg je een e-mail van mevrouw Van Dam.',
      vocab: [
        { w: 'zorgen maken', d: 'to worry' },
        { w: 'geruststellen', d: 'to reassure' },
        { w: 'onzeker', d: 'unsure / insecure' },
        { w: 'steeds', d: 'constantly / repeatedly' },
      ],
      choices: [
        { text: 'Je opent de e-mail met hoop', hint: 'Moedig', next: 'c10n' },
        { text: 'Je bent bang voor het nieuws in de e-mail', hint: 'Angstig', next: 'c10b' },
      ],
      quiz: { q: 'Hoe slaap je de nacht na het examen?', opts: ['Heel goed', 'Redelijk', 'Slecht', 'Je slaapt niet'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Geslaagd!', ending: 'good',
      text: 'Je hebt het examen gehaald met een acht! Mevrouw Van Dam heeft gezegd dat jouw mondelinge gesprek uitstekend was. Ahmed heeft een negen en Maria een zeven. Jullie hebben het nieuws gevierd met een etentje. Je hebt in deze cursus niet alleen Nederlands geleerd, maar ook twee goede vrienden gemaakt.',
      vocab: [
        { w: 'geslaagd', d: 'passed / succeeded' },
        { w: 'uitstekend', d: 'excellent' },
        { w: 'vieren', d: 'to celebrate' },
        { w: 'het etentje', d: 'the dinner (informal)' },
      ],
      choices: [],
      quiz: { q: 'Met welk cijfer heb je het examen gehaald?', opts: ['Een zes', 'Een zeven', 'Een acht', 'Een negen'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Gehaald', ending: 'neutral',
      text: 'Je hebt het examen gehaald met een zes. Het is net genoeg, maar je bent toch blij. Mevrouw Van Dam zegt dat je harder moet werken als je wilt verbeteren. Ahmed en Maria zijn allebei geslaagd. Jullie hebben een kopje koffie gedronken en afgesproken om contact te houden. De vriendschappen die je hebt gemaakt, zijn misschien wel het belangrijkste resultaat.',
      vocab: [
        { w: 'verbeteren', d: 'to improve' },
        { w: 'contact houden', d: 'to keep in touch' },
        { w: 'de vriendschap', d: 'the friendship' },
        { w: 'het belangrijkste', d: 'the most important' },
      ],
      choices: [],
      quiz: { q: 'Met welk cijfer heb je het examen gehaald?', opts: ['Een vijf', 'Een zes', 'Een zeven', 'Een acht'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Gezakt', ending: 'bad',
      text: 'Je hebt de e-mail geopend en je hebt het examen niet gehaald. Je score was een vijf: één punt te weinig. Je bent teleurgesteld en verdrietig. Mevrouw Van Dam schrijft dat je de cursus kunt herkansen in drie maanden. Ahmed en Maria hebben je gebeld om je te troosten. Ze zeggen: "We studeren samen en de volgende keer lukt het zeker."',
      vocab: [
        { w: 'gezakt', d: 'failed (an exam)' },
        { w: 'herkansen', d: 'to retake (an exam)' },
        { w: 'troosten', d: 'to comfort' },
        { w: 'de volgende keer', d: 'next time' },
      ],
      choices: [],
      quiz: { q: 'Wat is je score bij het examen?', opts: ['Een vier', 'Een vijf', 'Een zes', 'Een zeven'], a: 1 },
    },
  },
};
