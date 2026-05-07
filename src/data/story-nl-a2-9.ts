import type { Story } from './types';

export const storyNlA2_9: Story = {
  id: 'nl-a2-9',
  level: 'A2',
  title: 'Het Grote Feest',
  genre: 'Drama',
  emoji: '🎉',
  coverColor: '#3d1a1a',
  accentColor: '#e07060',
  description: 'Je organiseert een groot feest voor vijftig mensen. Niets gaat zoals gepland.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De grote plannen',
      text: 'Je hebt besloten om een groot feest te organiseren voor vijftig mensen. Het is de verjaardag van je beste vriend Thomas en je wilt iets onvergetelijks maken. Je hebt een zaal geboekt in het centrum en een cateraar gevonden. Er zijn nog drie weken te gaan, maar je begint je al een beetje overweldigd te voelen.',
      vocab: [
        { w: 'organiseren', d: 'to organise' },
        { w: 'de cateraar', d: 'the caterer' },
        { w: 'onvergetelijk', d: 'unforgettable' },
        { w: 'overweldigd', d: 'overwhelmed' },
      ],
      choices: [
        { text: 'Je maakt een gedetailleerde planning voor het feest', hint: 'Georganiseerd', next: 'c2a' },
        { text: 'Je vraagt een vriend om te helpen met de organisatie', hint: 'Teamwork', next: 'c2b' },
      ],
      quiz: { q: 'Voor hoeveel mensen organiseer je het feest?', opts: ['Dertig', 'Veertig', 'Vijftig', 'Zestig'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'De planning',
      text: 'Je hebt een lange lijst gemaakt van alles wat je moet doen. Je hebt de cateraar bevestigd, de DJ geboekt en de uitnodigingen verstuurd. Alles lijkt op orde. Maar dan belt de cateraar je op met slecht nieuws: hij kan niet komen omdat hij ziek is geworden. Er zijn nog twee weken te gaan en je hebt geen eten voor vijftig mensen.',
      vocab: [
        { w: 'bevestigen', d: 'to confirm' },
        { w: 'de uitnodiging', d: 'the invitation' },
        { w: 'op orde', d: 'in order / sorted' },
        { w: 'verstuurd', d: 'sent' },
      ],
      choices: [
        { text: 'Je zoekt snel een andere cateraar', hint: 'Oplossingsgericht', next: 'c3a' },
        { text: 'Je vraagt vrienden om te helpen koken', hint: 'Creatief', next: 'c3b' },
      ],
      quiz: { q: 'Waarom kan de cateraar niet komen?', opts: ['Hij is op vakantie', 'Hij heeft een ander feest', 'Hij is ziek geworden', 'Hij heeft de datum vergeten'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Hulp gevraagd',
      text: 'Je vriendin Lisa heeft aangeboden om te helpen. Ze is heel georganiseerd en heeft al eerder feestjes georganiseerd. Samen hebben jullie een plan gemaakt en taken verdeeld. Lisa regelt de decoraties en jij regelt het eten en de muziek. Maar de volgende dag belt de cateraar: hij kan niet komen omdat hij ziek is.',
      vocab: [
        { w: 'aanbieden', d: 'to offer' },
        { w: 'de taken verdelen', d: 'to divide the tasks' },
        { w: 'regelen', d: 'to arrange / to sort out' },
        { w: 'de decoraties', d: 'the decorations' },
      ],
      choices: [
        { text: 'Je zoekt snel een andere cateraar', hint: 'Oplossingsgericht', next: 'c3a' },
        { text: 'Je vraagt vrienden om te helpen koken', hint: 'Creatief', next: 'c3b' },
      ],
      quiz: { q: 'Wat regelt Lisa?', opts: ['Het eten', 'De muziek', 'De decoraties', 'De zaal'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Nieuwe cateraar zoeken',
      text: 'Je hebt vijf cateraars gebeld, maar de meeste zijn al volgeboekt. Eindelijk heb je een bedrijf gevonden dat kan komen, maar ze vragen twee keer de normale prijs omdat het zo laat is. Je hebt even nagedacht, want het is veel geld. Uiteindelijk heb je ja gezegd, omdat je geen andere keuze hebt.',
      vocab: [
        { w: 'volgeboekt', d: 'fully booked' },
        { w: 'de normale prijs', d: 'the normal price' },
        { w: 'nadenken', d: 'to think (it over)' },
        { w: 'uiteindelijk', d: 'ultimately / in the end' },
      ],
      choices: [
        { text: 'Je controleert of de DJ nog steeds kan komen', hint: 'Preventief', next: 'c4a' },
        { text: 'Je begint de zaal alvast te versieren', hint: 'Voortvarend', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel vraagt de nieuwe cateraar?', opts: ['De helft van de normale prijs', 'De normale prijs', 'Anderhalf keer de normale prijs', 'Twee keer de normale prijs'], a: 3 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Vrienden koken',
      text: 'Je hebt je vriend Marco gebeld, die kok is. Marco zegt dat hij met plezier wil helpen koken voor het feest. Hij stelt voor om grote pannen pasta en salades te maken, want dat is makkelijk voor veel mensen. Je bent opgelucht, want Marco is een geweldige kok. Je moet nu alleen nog de ingrediënten regelen.',
      vocab: [
        { w: 'de kok', d: 'the cook / chef' },
        { w: 'de pan', d: 'the pan / pot' },
        { w: 'de ingrediënten', d: 'the ingredients' },
        { w: 'opgelucht', d: 'relieved' },
      ],
      choices: [
        { text: 'Je controleert of de DJ nog steeds kan komen', hint: 'Preventief', next: 'c4a' },
        { text: 'Je gaat boodschappen doen voor de ingrediënten', hint: 'Praktisch', next: 'c4b' },
      ],
      quiz: { q: 'Wat stelt Marco voor om te maken?', opts: ['Pizza en soep', 'Pasta en salades', 'Broodjes en snacks', 'Rijst en groenten'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'De DJ heeft de verkeerde datum',
      text: 'Je hebt de DJ gebeld om alles te bevestigen. Tot je schrik zegt hij dat hij dacht dat het feest volgende week was. Hij heeft een dubbele boeking gemaakt en kan niet komen. Je wordt heel nerveus, want het feest is overmorgen. Je hebt snel een nieuw plan nodig voor de muziek.',
      vocab: [
        { w: 'de schrik', d: 'the shock / fright' },
        { w: 'de dubbele boeking', d: 'the double booking' },
        { w: 'overmorgen', d: 'the day after tomorrow' },
        { w: 'bevestigen', d: 'to confirm' },
      ],
      choices: [
        { text: 'Je maakt een playlist op Spotify als alternatief', hint: 'Creatief', next: 'c5a' },
        { text: 'Je vraagt iemand op het feest om DJ te spelen', hint: 'Improviserend', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft de DJ verkeerd gedaan?', opts: ['Hij heeft de tijd vergeten', 'Hij heeft een dubbele boeking gemaakt', 'Hij is ziek', 'Hij heeft de zaal vergeten'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'De zaal versieren',
      text: 'Je bent naar de zaal gegaan om te beginnen met versieren. Lisa heeft ballonnen meegebracht en jij hebt slingers gekocht. Terwijl jullie bezig zijn, bellen de zaaleigenaren om te zeggen dat er een probleem is met de verlichting. Een deel van de lichten werkt niet, maar ze beloven het op te lossen voor het feest.',
      vocab: [
        { w: 'de slingers', d: 'the bunting / streamers' },
        { w: 'de verlichting', d: 'the lighting' },
        { w: 'de zaaleigenaar', d: 'the venue owner' },
        { w: 'oplossen', d: 'to solve / to fix' },
      ],
      choices: [
        { text: 'Je maakt een playlist op Spotify als alternatief voor de DJ', hint: 'Creatief', next: 'c5a' },
        { text: 'Je controleert ook of de DJ nog steeds kan komen', hint: 'Preventief', next: 'c5b' },
      ],
      quiz: { q: 'Wat is het probleem met de zaal?', opts: ['De verwarming werkt niet', 'Een deel van de lichten werkt niet', 'De deur is kapot', 'Er is geen geluid'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'De playlist',
      text: 'Je hebt vier uur besteed aan het maken van de perfecte playlist. Je hebt nummers gekozen die Thomas leuk vindt en nummers om op te dansen. Lisa heeft geholpen met de volgorde. De playlist duurt vijf uur, dus er is meer dan genoeg muziek. Je voelt je weer een beetje zekerder over het feest.',
      vocab: [
        { w: 'de playlist', d: 'the playlist' },
        { w: 'de volgorde', d: 'the order / sequence' },
        { w: 'besteden aan', d: 'to spend on' },
        { w: 'zeker', d: 'certain / confident' },
      ],
      choices: [
        { text: 'Je gaat naar de zaal om te controleren of alles klaar is', hint: 'Grondig', next: 'c6a' },
        { text: 'Je neemt een avond rust voor het feest', hint: 'Slim', next: 'c6b' },
      ],
      quiz: { q: 'Hoe lang duurt de playlist?', opts: ['Drie uur', 'Vier uur', 'Vijf uur', 'Zes uur'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Een vriend als DJ',
      text: 'Je hebt gevraagd of je neef Joris DJ wil zijn voor het feest. Joris is geen echte DJ maar hij heeft veel ervaring met feestjes en een goede muziekinstallatie. Hij is enthousiast en zegt meteen ja. Hij belt je terug met een vraag: welk soort muziek wil je? Je begint samen een lijst te maken.',
      vocab: [
        { w: 'de muziekinstallatie', d: 'the music system / sound system' },
        { w: 'de ervaring', d: 'the experience' },
        { w: 'enthousiast', d: 'enthusiastic' },
        { w: 'het soort', d: 'the kind / type' },
      ],
      choices: [
        { text: 'Je gaat naar de zaal om te controleren of alles klaar is', hint: 'Grondig', next: 'c6a' },
        { text: 'Je neemt een avond rust voor het feest', hint: 'Slim', next: 'c6b' },
      ],
      quiz: { q: 'Hoe heet je neef die DJ wil zijn?', opts: ['Marco', 'Thomas', 'Joris', 'Lisa'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Controle in de zaal',
      text: 'Je bent naar de zaal gegaan en alles ziet er goed uit. De verlichting is gerepareerd en de tafels staan klaar. Maar terwijl je rondloopt, zie je twee gasten die je hebt uitgenodigd buiten staan te praten. Het zijn Sara en Bas, en ze kijken boos. Je weet dat ze het al een tijdje niet goed kunnen vinden met elkaar.',
      vocab: [
        { w: 'repareren', d: 'to repair / to fix' },
        { w: 'rondlopen', d: 'to walk around' },
        { w: 'buiten', d: 'outside' },
        { w: 'het kunnen vinden met', d: 'to get along with' },
      ],
      choices: [
        { text: 'Je spreekt Sara en Bas apart aan', hint: 'Bemiddelend', next: 'c7a' },
        { text: 'Je hoopt dat het goed komt op het feest', hint: 'Afwachtend', next: 'c7b' },
      ],
      quiz: { q: 'Wie staan buiten te praten?', opts: ['Thomas en Lisa', 'Marco en Joris', 'Sara en Bas', 'Lisa en Sara'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Rust voor het feest',
      text: 'Je hebt de avond voor het feest vroeg geslapen. De volgende ochtend voel je je uitgerust en klaar voor de grote dag. Je hebt ontbeten en daarna ben je naar de zaal gegaan. Alles ziet er goed uit, maar je ziet dat twee gasten, Sara en Bas, al vroeg zijn gearriveerd en ze lijken gespannen.',
      vocab: [
        { w: 'uitgerust', d: 'rested / refreshed' },
        { w: 'ontbijten', d: 'to have breakfast' },
        { w: 'gespannen', d: 'tense / nervous' },
        { w: 'gearriveerd', d: 'arrived' },
      ],
      choices: [
        { text: 'Je spreekt Sara en Bas apart aan', hint: 'Bemiddelend', next: 'c7a' },
        { text: 'Je hoopt dat het goed komt op het feest', hint: 'Afwachtend', next: 'c7b' },
      ],
      quiz: { q: 'Hoe voel je je de ochtend van het feest?', opts: ['Moe en bezorgd', 'Uitgerust en klaar', 'Ziek en nerveus', 'Enthousiast maar bang'], a: 1 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Bemiddelen',
      text: 'Je hebt Sara en Bas apart gesproken. Sara is boos omdat Bas iets heeft gezegd over haar relatie. Bas zegt dat het een misverstand was. Je hebt rustig uitgelegd dat het feest voor Thomas is en dat persoonlijke conflicten kunnen wachten. Ze zijn het met je eens, maar de sfeer blijft een beetje gespannen.',
      vocab: [
        { w: 'het misverstand', d: 'the misunderstanding' },
        { w: 'het conflict', d: 'the conflict' },
        { w: 'de sfeer', d: 'the atmosphere' },
        { w: 'het eens zijn', d: 'to agree' },
      ],
      choices: [
        { text: 'Je houdt Sara en Bas in de gaten tijdens het feest', hint: 'Waakzaam', next: 'c8a' },
        { text: 'Je vertrouwt erop dat ze zich gedragen', hint: 'Optimistisch', next: 'c8b' },
      ],
      quiz: { q: 'Waarom is Sara boos op Bas?', opts: ['Hij is te laat', 'Hij heeft iets gezegd over haar relatie', 'Hij heeft haar uitnodiging vergeten', 'Hij heeft haar jas gepakt'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Het feest begint',
      text: 'Het feest is begonnen en de zaal zit vol mensen. Thomas is heel verrast en blij. Het eten smaakt goed en de muziek klinkt geweldig. Maar je ziet dat Sara en Bas aan aparte tafels zitten en elkaar niet aankijken. Je hoopt dat het geen problemen gaat geven, want Thomas mag niets merken.',
      vocab: [
        { w: 'smaken', d: 'to taste' },
        { w: 'aankijken', d: 'to look at (each other)' },
        { w: 'merken', d: 'to notice' },
        { w: 'vol', d: 'full' },
      ],
      choices: [
        { text: 'Je houdt Sara en Bas in de gaten', hint: 'Waakzaam', next: 'c8a' },
        { text: 'Je geniet van het feest en vergeet de spanning', hint: 'Ontspannen', next: 'c8b' },
      ],
      quiz: { q: 'Hoe reageert Thomas op het feest?', opts: ['Hij is boos', 'Hij is teleurgesteld', 'Hij is heel verrast en blij', 'Hij wil naar huis'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Drama op het feest',
      text: 'Halverwege het feest zie je dat Sara en Bas weer ruzie hebben. Ze staan te schreeuwen in een hoek en andere gasten kijken om. Thomas heeft het ook gezien en kijkt bezorgd. Je loopt snel naar hen toe en fluistert dat ze naar buiten moeten gaan als ze willen praten. Ze luisteren gelukkig en gaan naar buiten.',
      vocab: [
        { w: 'halverwege', d: 'halfway through' },
        { w: 'schreeuwen', d: 'to shout / to scream' },
        { w: 'fluisteren', d: 'to whisper' },
        { w: 'bezorgd', d: 'worried' },
      ],
      choices: [
        { text: 'Je gaat na vijf minuten naar buiten om te kijken', hint: 'Verantwoordelijk', next: 'c9a' },
        { text: 'Je laat hen het zelf uitzoeken en gaat terug naar het feest', hint: 'Loslaten', next: 'c9b' },
      ],
      quiz: { q: 'Wat doe je als Sara en Bas ruzie maken?', opts: ['Je roept om hulp', 'Je fluistert dat ze naar buiten moeten', 'Je stuurt ze naar huis', 'Je negeert hen'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Alles gaat goed',
      text: 'Je hebt een fantastische avond en Thomas is heel gelukkig. De mensen dansen en lachen. Maar laat op de avond begint er toch een ruzie tussen Sara en Bas. Bas heeft te veel gedronken en hij zegt iets wat Sara boos maakt. De andere gasten zien het en de sfeer verandert.',
      vocab: [
        { w: 'laat op de avond', d: 'late in the evening' },
        { w: 'de sfeer veranderen', d: 'the atmosphere to change' },
        { w: 'te veel drinken', d: 'to drink too much' },
        { w: 'fantastisch', d: 'fantastic' },
      ],
      choices: [
        { text: 'Je spreekt Bas rustig aan en vraagt hem te kalmeren', hint: 'Verantwoordelijk', next: 'c9a' },
        { text: 'Je vraagt de zaaleigenaar om hulp', hint: 'Formeel', next: 'c9b' },
      ],
      quiz: { q: 'Waarom begint de ruzie laat op de avond?', opts: ['Sara is dronken', 'Bas heeft te veel gedronken en zegt iets', 'De muziek is te hard', 'Thomas is boos'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'De bemiddelaar',
      text: 'Je hebt buiten met Sara en Bas gesproken. Het gesprek was moeilijk, maar uiteindelijk hebben ze elkaar de hand geschud. Ze beloven zich te gedragen voor de rest van het feest. Als jullie teruggaan, juicht Thomas luid: "Dank je voor het beste feest ooit!" Iedereen applaudisseert en je voelt je heel trots.',
      vocab: [
        { w: 'de hand schudden', d: 'to shake hands' },
        { w: 'beloven', d: 'to promise' },
        { w: 'juichen', d: 'to cheer' },
        { w: 'applaudisseren', d: 'to applaud' },
      ],
      choices: [
        { text: 'Je danst de rest van de nacht met Thomas', hint: 'Feestelijk', next: 'c10g' },
        { text: 'Je gaat even zitten want je bent uitgeput', hint: 'Eerlijk', next: 'c10n' },
      ],
      quiz: { q: 'Wat doen Sara en Bas aan het einde van het gesprek?', opts: ['Ze omhelzen elkaar', 'Ze schudden elkaar de hand', 'Ze gaan naar huis', 'Ze zeggen sorry tegen Thomas'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Uit de hand gelopen',
      text: 'De ruzie tussen Sara en Bas loopt uit de hand. Bas heeft een glas omgegooid en de zaaleigenaar is erbij gekomen. Hij zegt dat hij de politie belt als er geen rust komt. Thomas kijkt verdrietig en zegt: "Dit wilde ik echt niet op mijn verjaardag." Je schaamt je, omdat je dit niet hebt zien aankomen.',
      vocab: [
        { w: 'uit de hand lopen', d: 'to get out of hand' },
        { w: 'omgooien', d: 'to knock over' },
        { w: 'de politie', d: 'the police' },
        { w: 'je schamen', d: 'to feel ashamed' },
      ],
      choices: [
        { text: 'Je vraagt Bas om te vertrekken en lost het op', hint: 'Beslissend', next: 'c10n' },
        { text: 'Je kunt het niet meer oplossen en het feest eindigt vroeg', hint: 'Mislukt', next: 'c10b' },
      ],
      quiz: { q: 'Wat gooit Bas om?', opts: ['Een stoel', 'Een tafel', 'Een glas', 'Een bord'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Het feest van het jaar', ending: 'good',
      text: 'Het feest is een enorm succes geworden. Thomas heeft gezegd dat het het beste feest van zijn leven was. De muziek was geweldig, het eten was heerlijk en iedereen heeft gedanst tot middernacht. Sara en Bas hebben zich later verontschuldigd bij Thomas. Jij bent naar huis gegaan met een glimlach en pijnlijke voeten.',
      vocab: [
        { w: 'enorm', d: 'enormous / huge' },
        { w: 'het succes', d: 'the success' },
        { w: 'verontschuldigen', d: 'to apologise' },
        { w: 'pijnlijke voeten', d: 'sore feet' },
      ],
      choices: [],
      quiz: { q: 'Hoe eindigt het feest?', opts: ['Vroeg door problemen', 'Met een gevecht', 'Als een enorm succes tot middernacht', 'Met een toespraak van Thomas'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Chaos maar gezellig', ending: 'neutral',
      text: 'Het feest was chaotisch, met een vertrokken cateraar, geen DJ en een ruzie. Maar de mensen hebben toch plezier gehad en Thomas heeft glimlachend gezegd: "Het was anders dan verwacht, maar ik ben blij dat jullie er waren." Je hebt geleerd dat een feest niet perfect hoeft te zijn om leuk te zijn.',
      vocab: [
        { w: 'chaotisch', d: 'chaotic' },
        { w: 'anders dan verwacht', d: 'different from expected' },
        { w: 'perfect hoeven zijn', d: 'to need to be perfect' },
        { w: 'leren', d: 'to learn' },
      ],
      choices: [],
      quiz: { q: 'Wat zegt Thomas aan het einde?', opts: ['"Dit was het slechtste feest ooit"', '"Het was anders dan verwacht maar ik ben blij"', '"Ik wil mijn geld terug"', '"Volgend jaar doe ik het zelf"'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Het feest eindigt vroeg', ending: 'bad',
      text: 'De zaaleigenaar heeft iedereen gevraagd om te vertrekken na de ruzie. Thomas is teleurgesteld naar huis gegaan zonder iets te zeggen. Je voelt je ellendig, want je hebt zo hard gewerkt en het is toch misgegaan. De volgende dag stuur je Thomas een lange berichtje om je te verontschuldigen. Hij antwoordt: "Geeft niet, maar volgende jaar boek jij geen cateraar meer."',
      vocab: [
        { w: 'ellendig', d: 'miserable' },
        { w: 'vertrekken', d: 'to leave' },
        { w: 'verontschuldigen', d: 'to apologise' },
        { w: 'geeft niet', d: 'never mind / it\'s okay' },
      ],
      choices: [],
      quiz: { q: 'Waarom eindigt het feest vroeg?', opts: ['Het eten was op', 'De muziek was te hard', 'De zaaleigenaar vraagt iedereen te vertrekken', 'Thomas wil naar huis'], a: 2 },
    },
  },
};
