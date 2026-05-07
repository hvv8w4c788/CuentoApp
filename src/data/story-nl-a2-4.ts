import type { Story } from './types';

export const storyNlA2_4: Story = {
  id: 'nl-a2-4',
  level: 'A2',
  title: 'De Treinreis',
  genre: 'Mysterie',
  emoji: '🚆',
  coverColor: '#2a1e14',
  accentColor: '#c8a860',
  description: 'Op de trein ontmoet je een vreemde die jouw hulp nodig heeft.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Op het perron',
      text: 'Je staat op het perron in Utrecht Centraal en wacht op de intercity naar Rotterdam. Het is een drukke maandagochtend en de trein is al vijf minuten vertraagd. Naast je staat een oude man met een bruine koffer en een verward gezicht. Hij kijkt naar zijn treinkaartje en dan naar het perronbord, steeds opnieuw.',
      vocab: [
        { w: 'het perron', d: 'the platform' },
        { w: 'de intercity', d: 'the intercity train' },
        { w: 'vertraagd', d: 'delayed' },
        { w: 'verward', d: 'confused' },
      ],
      choices: [
        { text: 'Je vraagt de oude man of hij hulp nodig heeft', hint: 'Behulpzaam', next: 'c2a' },
        { text: 'Je wacht op de trein en laat hem met rust', hint: 'Neutraal', next: 'c2b' },
      ],
      quiz: { q: 'Waar staat je trein naartoe?', opts: ['Amsterdam', 'Den Haag', 'Rotterdam', 'Eindhoven'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Meneer Bakker',
      text: 'De oude man heet meneer Bakker en hij is dankbaar dat je hem aanspreekt. Hij legt uit dat hij naar Rotterdam moet maar dat hij zijn treinkaartje niet kan vinden in zijn jaszakken. Hij heeft alle zakken al doorzocht maar het kaartje is nergens te vinden. "Ik ben achtentachtig jaar en mijn geheugen laat me soms in de steek," zegt hij rustig.',
      vocab: [
        { w: 'dankbaar', d: 'grateful' },
        { w: 'de jaszak', d: 'the coat pocket' },
        { w: 'doorzoeken', d: 'to search through' },
        { w: 'het geheugen', d: 'the memory' },
      ],
      choices: [
        { text: 'Je helpt hem zijn tas te doorzoeken', hint: 'Grondig', next: 'c3a' },
        { text: 'Je stelt voor om samen naar de conducteur te gaan', hint: 'Officieel', next: 'c3b' },
      ],
      quiz: { q: 'Hoe oud is meneer Bakker?', opts: ['Zeventig', 'Vijfenzeventig', 'Tachtig', 'Achtentachtig'], a: 3 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'In de trein',
      text: 'De trein is aangekomen en je bent ingestapt. Je hebt een zitplaats gevonden bij het raam. Na een minuut stapt de oude man ook in en gaat tegenover jou zitten. Hij ziet er bezorgd uit. De trein vertrekt en hij begint opnieuw in zijn zakken te zoeken. Je realiseert je dat hij misschien hulp nodig heeft.',
      vocab: [
        { w: 'instappen', d: 'to board / get on' },
        { w: 'de zitplaats', d: 'the seat' },
        { w: 'tegenover', d: 'opposite / across from' },
        { w: 'vertrekken', d: 'to depart' },
      ],
      choices: [
        { text: 'Je vraagt alsnog of alles goed gaat', hint: 'Vriendelijk', next: 'c3a' },
        { text: 'Je kijkt uit het raam en bemoeit je er niet mee', hint: 'Terughoudend', next: 'c3b' },
      ],
      quiz: { q: 'Waar ga jij zitten in de trein?', opts: ['Bij de deur', 'Bij het raam', 'In de gangpot', 'In de restauratiewagen'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Het kaartje gevonden',
      text: 'Jij en meneer Bakker hebben samen zijn bruine tas doorzocht. Onder een oud boek en een thermoskan hebben jullie het kaartje gevonden. Hij is zo opgelucht dat hij bijna begint te huilen. "Dank je wel, jongeman," zegt hij terwijl hij het kaartje stevig vasthoudt. In de trein zitten jullie naast elkaar.',
      vocab: [
        { w: 'de thermoskan', d: 'the thermos flask' },
        { w: 'opgelucht', d: 'relieved' },
        { w: 'stevig', d: 'firmly / tightly' },
        { w: 'vasthouden', d: 'to hold on to' },
      ],
      choices: [
        { text: 'Je praat met meneer Bakker over zijn leven', hint: 'Nieuwsgierig', next: 'c4a' },
        { text: 'Je leest een boek en laat hem rusten', hint: 'Respectvol', next: 'c4b' },
      ],
      quiz: { q: 'Waar was het treinkaartje?', opts: ['In zijn broekzak', 'Op de grond', 'Onder een boek in zijn tas', 'Aan de balie'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De conducteur',
      text: 'De conducteur heeft geluisterd naar het verhaal van meneer Bakker. Ze heeft gezegd dat hij een nieuw kaartje moet kopen maar dat ze hem kan helpen. "Heeft u een bankpas bij u?" vraagt ze vriendelijk. Meneer Bakker begint opnieuw te zoeken en zijn handen trillen een beetje. Je biedt aan om te helpen.',
      vocab: [
        { w: 'de conducteur', d: 'the train conductor' },
        { w: 'de bankpas', d: 'the debit card' },
        { w: 'trillen', d: 'to shake / tremble' },
        { w: 'aanbieden', d: 'to offer' },
      ],
      choices: [
        { text: 'Je biedt aan om het kaartje voor hem te betalen', hint: 'Genereus', next: 'c4a' },
        { text: 'Je helpt hem zoeken naar zijn bankpas', hint: 'Praktisch', next: 'c4b' },
      ],
      quiz: { q: 'Wat vraagt de conducteur aan meneer Bakker?', opts: ['Zijn naam', 'Zijn adres', 'Zijn bankpas', 'Zijn paspoort'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Het verhaal van meneer Bakker',
      text: 'Meneer Bakker heeft je zijn leven verteld terwijl de trein door het Groene Hart rijdt. Hij heeft als ingenieur gewerkt aan de bouw van een brug bij Rotterdam. "Die brug staat er nog steeds," zegt hij trots. Hij heeft twee kinderen en vier kleinkinderen maar zijn vrouw is drie jaar geleden gestorven.',
      vocab: [
        { w: 'de ingenieur', d: 'the engineer' },
        { w: 'de brug', d: 'the bridge' },
        { w: 'het kleinkind', d: 'the grandchild' },
        { w: 'sterven', d: 'to die / pass away' },
      ],
      choices: [
        { text: 'Je vraagt meer over zijn werk als ingenieur', hint: 'Geïnteresseerd', next: 'c5a' },
        { text: 'Je vraagt naar zijn familie in Rotterdam', hint: 'Persoonlijk', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft meneer Bakker als beroep gehad?', opts: ['Architect', 'Dokter', 'Ingenieur', 'Leraar'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Rustige reis',
      text: 'Meneer Bakker heeft zijn bankpas gevonden of jullie hebben het kaartje geregeld. Nu zit hij rustig naast je in de trein. Hij heeft een krant opengeslagen maar hij lijkt er niet echt in te lezen. Na een tijdje vraagt hij: "Ga jij ook naar Rotterdam voor zaken?" Je vertelt hem waarom je reist.',
      vocab: [
        { w: 'de krant', d: 'the newspaper' },
        { w: 'openslaan', d: 'to open (a book/newspaper)' },
        { w: 'voor zaken', d: 'on business' },
        { w: 'reizen', d: 'to travel' },
      ],
      choices: [
        { text: 'Je vertelt hem over jouw bestemming in Rotterdam', hint: 'Open', next: 'c5a' },
        { text: 'Je vraagt waar hij naartoe gaat in Rotterdam', hint: 'Nieuwsgierig', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft meneer Bakker opengeslagen?', opts: ['Een boek', 'Een krant', 'Een kaart', 'Een brief'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'De vertraging',
      text: 'De trein stopt plotseling tussen twee stations. De omroep meldt dat er een technisch probleem is en dat de vertraging minimaal twintig minuten bedraagt. Meneer Bakker maakt zich zorgen want hij heeft een afspraak in Rotterdam. "Mijn dochter wacht op me," zegt hij. "Ze weet niet dat de trein vertraagd is."',
      vocab: [
        { w: 'de omroep', d: 'the announcement (PA system)' },
        { w: 'bedragen', d: 'to amount to' },
        { w: 'zich zorgen maken', d: 'to worry' },
        { w: 'de afspraak', d: 'the appointment' },
      ],
      choices: [
        { text: 'Je biedt aan om zijn dochter te bellen', hint: 'Behulpzaam', next: 'c6a' },
        { text: 'Je stelt voor een sms te sturen naar zijn dochter', hint: 'Modern', next: 'c6b' },
      ],
      quiz: { q: 'Hoelang is de vertraging minimaal?', opts: ['Vijf minuten', 'Tien minuten', 'Twintig minuten', 'Een uur'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Rotterdam',
      text: 'Meneer Bakker gaat naar het huis van zijn dochter in Rotterdam-Zuid want hij wil zijn kleinkinderen zien. Het zijn tweeling en ze worden volgende week vijf jaar. "Ik heb cadeautjes in mijn tas," zegt hij blij. Hij laat je een foto zien van de tweeling. Ze lachen allebei breed en hebben dezelfde krullende haren.',
      vocab: [
        { w: 'de tweeling', d: 'the twins' },
        { w: 'het cadeautje', d: 'the gift / present' },
        { w: 'krullend', d: 'curly' },
        { w: 'breed', d: 'widely / broadly' },
      ],
      choices: [
        { text: 'Je vraagt meer over de tweeling', hint: 'Geïnteresseerd', next: 'c6a' },
        { text: 'Je vertelt over jouw familie', hint: 'Persoonlijk', next: 'c6b' },
      ],
      quiz: { q: 'Waarom gaat meneer Bakker naar Rotterdam?', opts: ['Voor werk', 'Voor een doktersafspraak', 'Zijn kleinkinderen zien', 'Voor vakantie'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'De dochter gebeld',
      text: 'Jij hebt de dochter van meneer Bakker gebeld want hij had moeite met het kleine toetsenbord op zijn telefoon. Ze heet Miriam en ze was blij te horen dat haar vader in goede handen was. "Dank u wel voor uw hulp," zei ze hartelijk. Meneer Bakker heeft glimlachend naar je gekeken.',
      vocab: [
        { w: 'het toetsenbord', d: 'the keyboard' },
        { w: 'in goede handen', d: 'in good hands' },
        { w: 'hartelijk', d: 'warmly / heartily' },
        { w: 'glimlachend', d: 'smilingly' },
      ],
      choices: [
        { text: 'Je vraagt meneer Bakker naar zijn herinneringen', hint: 'Geïnteresseerd', next: 'c7a' },
        { text: 'Je kijkt samen uit het raam naar het landschap', hint: 'Rustig', next: 'c7b' },
      ],
      quiz: { q: 'Hoe heet de dochter van meneer Bakker?', opts: ['Maria', 'Mirjam', 'Miriam', 'Marina'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Een goed gesprek',
      text: 'Jullie hebben lang gepraat over families, Rotterdam en hoe de stad veranderd is in de afgelopen vijftig jaar. Meneer Bakker herinnert zich hoe het was na de Tweede Wereldoorlog toen Rotterdam werd herbouwd. "Ik heb mijn hele carrière aan die stad gewijd," zegt hij met trots in zijn stem.',
      vocab: [
        { w: 'veranderen', d: 'to change' },
        { w: 'herbouwen', d: 'to rebuild' },
        { w: 'de carrière', d: 'the career' },
        { w: 'wijden aan', d: 'to dedicate to' },
      ],
      choices: [
        { text: 'Je vraagt naar zijn favoriete herinnering aan Rotterdam', hint: 'Nieuwsgierig', next: 'c7a' },
        { text: 'Je deelt je eigen herinneringen aan Rotterdam', hint: 'Persoonlijk', next: 'c7b' },
      ],
      quiz: { q: 'Aan welke stad heeft meneer Bakker zijn carrière gewijd?', opts: ['Utrecht', 'Amsterdam', 'Rotterdam', 'Den Haag'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Aankomst in Rotterdam',
      text: 'De trein is eindelijk in Rotterdam Centraal aangekomen, toch iets later dan gepland. Het station is druk en meneer Bakker kijkt een beetje verloren. Hij heeft zijn koffer gepakt maar hij weet niet zeker welke uitgang hij moet nemen. De borden zijn groot maar er zijn veel mensen die in de weg lopen.',
      vocab: [
        { w: 'eindelijk', d: 'finally / at last' },
        { w: 'de uitgang', d: 'the exit' },
        { w: 'het bord', d: 'the sign / board' },
        { w: 'in de weg lopen', d: 'to get in the way' },
      ],
      choices: [
        { text: 'Je begeleidt meneer Bakker naar de juiste uitgang', hint: 'Behulpzaam', next: 'c8a' },
        { text: 'Je legt hem uit welk bord hij moet volgen', hint: 'Uitleggen', next: 'c8b' },
      ],
      quiz: { q: 'Waarom kijkt meneer Bakker verloren in het station?', opts: ['Hij kent het station niet', 'Hij is zijn tas kwijt', 'Hij weet niet welke uitgang hij moet nemen', 'Hij voelt zich ziek'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Het verhaal van de brug',
      text: 'Meneer Bakker heeft je het verhaal verteld van de brug die hij heeft gebouwd. Het was zijn grootste project en het heeft vier jaar geduurd. "Op de dag dat de brug werd geopend heb ik gehuild," zegt hij. "Want ik dacht aan alle mensen die elke dag over mijn brug zouden rijden." De trein rijdt nu door Rotterdam.',
      vocab: [
        { w: 'het project', d: 'the project' },
        { w: 'openen', d: 'to open' },
        { w: 'huilen', d: 'to cry' },
        { w: 'rijden over', d: 'to drive over / across' },
      ],
      choices: [
        { text: 'Je vraagt of hij je de brug kan laten zien', hint: 'Enthousiast', next: 'c8a' },
        { text: 'Je luistert en stelt geen verdere vragen', hint: 'Respectvol', next: 'c8b' },
      ],
      quiz: { q: 'Hoe lang duurde het project van de brug?', opts: ['Één jaar', 'Twee jaar', 'Drie jaar', 'Vier jaar'], a: 3 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Samen door het station',
      text: 'Jij hebt meneer Bakker begeleid door het drukke station. Jullie hebben de juiste uitgang gevonden en buiten stond Miriam al te wachten. Ze is een vriendelijke vrouw van rond de vijftig. Ze heeft je heel hartelijk bedankt voor je hulp aan haar vader. Meneer Bakker heeft je hand gepakt en stevig vastgehouden.',
      vocab: [
        { w: 'begeleiden', d: 'to accompany / guide' },
        { w: 'buiten', d: 'outside' },
        { w: 'hartelijk', d: 'warmly' },
        { w: 'bedanken', d: 'to thank' },
      ],
      choices: [
        { text: 'Je neemt afscheid en gaat verder naar je afspraak', hint: 'Efficiënt', next: 'c9a' },
        { text: 'Je accepteert het aanbod om koffie te drinken', hint: 'Gezellig', next: 'c9b' },
      ],
      quiz: { q: 'Wie stond buiten het station op meneer Bakker te wachten?', opts: ['Zijn zoon', 'Miriam, zijn dochter', 'Zijn kleinkinderen', 'Een taxichauffeur'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Verkeerde uitgang',
      text: 'Jullie zijn door de verkeerde uitgang gegaan en staan nu aan de verkeerde kant van het station. Meneer Bakker raakt in paniek want hij weet niet waar Miriam op hem wacht. Je probeert hem te kalmeren maar hij begint snel te lopen en je verliest hem bijna in de menigte.',
      vocab: [
        { w: 'in paniek raken', d: 'to panic' },
        { w: 'kalmeren', d: 'to calm down' },
        { w: 'de menigte', d: 'the crowd' },
        { w: 'verliezen', d: 'to lose' },
      ],
      choices: [
        { text: 'Je roept zijn naam en probeert hem in te halen', hint: 'Urgent', next: 'c9a' },
        { text: 'Je belt Miriam om haar de situatie uit te leggen', hint: 'Slim', next: 'c9b' },
      ],
      quiz: { q: 'Wat is het probleem bij de uitgang?', opts: ['De uitgang is dicht', 'Ze zijn door de verkeerde uitgang gegaan', 'Miriam is er niet', 'Meneer Bakker is zijn koffer kwijt'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Een warm afscheid',
      text: 'Meneer Bakker heeft je hand nog eens gepakt voordat hij met Miriam is weggegaan. "Jij bent een goed mens," heeft hij gezegd met tranen in zijn ogen. Miriam heeft je haar visitekaartje gegeven. "Als je ooit iets nodig hebt in Rotterdam, bel ons gerust." Je loopt naar je eigen bestemming en voelt je warm vanbinnen.',
      vocab: [
        { w: 'de tranen', d: 'the tears' },
        { w: 'het visitekaartje', d: 'the business card' },
        { w: 'gerust', d: 'freely / without hesitation' },
        { w: 'vanbinnen', d: 'inside / inwardly' },
      ],
      choices: [
        { text: 'Je koestert de herinnering aan de treinreis', hint: 'Dankbaar', next: 'c10g' },
        { text: 'Je denkt na over je eigen bestemming', hint: 'Praktisch', next: 'c10n' },
      ],
      quiz: { q: 'Wat heeft Miriam je gegeven?', opts: ['Geld', 'Een cadeautje', 'Haar visitekaartje', 'Een brief'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Verwarring in het station',
      text: 'Door de verwarring in het station ben jij je eigen afspraak bijna vergeten. Je hebt meneer Bakker geholpen Miriam te vinden maar je bent nu vijftien minuten te laat. Je belt om te zeggen dat je onderweg bent. Meneer Bakker steekt zijn hand op als afscheid en glimlacht naar je.',
      vocab: [
        { w: 'de verwarring', d: 'the confusion' },
        { w: 'vergeten', d: 'to forget' },
        { w: 'onderweg', d: 'on the way' },
        { w: 'opsteken', d: 'to raise (hand)' },
      ],
      choices: [
        { text: 'Je rent naar je afspraak en haalt het nog net', hint: 'Gelukkig', next: 'c10n' },
        { text: 'Je annuleert je afspraak want je bent te laat', hint: 'Teleurgesteld', next: 'c10b' },
      ],
      quiz: { q: 'Hoeveel minuten te laat ben je voor je afspraak?', opts: ['Vijf minuten', 'Tien minuten', 'Vijftien minuten', 'Een halfuur'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Een onvergetelijke reis',
      ending: 'good',
      text: 'Je hebt meneer Bakker veilig bij zijn dochter afgeleverd en je bent op tijd bij jouw afspraak aangekomen. Thuis denk je aan de oude man en zijn verhalen over bruggen en Rotterdam. Een week later krijg je een brief in de bus. Het is van meneer Bakker. Hij heeft je geschreven: "Bedankt voor je vriendelijkheid. Je hebt mijn dag gered."',
      vocab: [
        { w: 'afleveren', d: 'to deliver / drop off' },
        { w: 'veilig', d: 'safely' },
        { w: 'de vriendelijkheid', d: 'the kindness' },
        { w: 'redden', d: 'to save / rescue' },
      ],
      choices: [],
      quiz: { q: 'Wat krijg je een week later in de bus?', opts: ['Een pakketje', 'Een kaart', 'Een brief van meneer Bakker', 'Niets'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Goed maar druk',
      ending: 'neutral',
      text: 'Je hebt meneer Bakker geholpen maar je eigen dag liep daardoor een beetje uit de planning. Je bent uiteindelijk te laat bij je afspraak gekomen maar de persoon heeft gewacht. De treinreis was anders dan verwacht maar je hebt er geen spijt van. Helpen voelt goed, ook als het lastig is.',
      vocab: [
        { w: 'uitlopen', d: 'to overrun / run late' },
        { w: 'uiteindelijk', d: 'eventually / in the end' },
        { w: 'verwacht', d: 'expected' },
        { w: 'spijt hebben', d: 'to regret' },
      ],
      choices: [],
      quiz: { q: 'Hoe was de treinreis voor jou?', opts: ['Precies zoals gepland', 'Anders dan verwacht maar geen spijt', 'Vreselijk', 'Saai en oninteressant'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Gemiste afspraak',
      ending: 'bad',
      text: 'Je bent zo laat dat je je afspraak hebt moeten annuleren. De persoon was teleurgesteld en een nieuwe afspraak plannen was moeilijk. Maar je hebt meneer Bakker veilig afgeleverd en dat was het waard. Soms kost goed zijn iets, en dat is oké. Je belt Miriam later om te vragen of alles goed ging.',
      vocab: [
        { w: 'annuleren', d: 'to cancel' },
        { w: 'het waard zijn', d: 'to be worth it' },
        { w: 'soms', d: 'sometimes' },
        { w: 'oké', d: 'okay / fine' },
      ],
      choices: [],
      quiz: { q: 'Waarom heb je je afspraak geannuleerd?', opts: ['Je was ziek', 'Je was te laat door meneer Bakker te helpen', 'Je trein was te laat', 'Je wilde niet gaan'], a: 1 },
    },
  },
};
