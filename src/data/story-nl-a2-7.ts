import type { Story } from './types';

export const storyNlA2_7: Story = {
  id: 'nl-a2-7',
  level: 'A2',
  title: 'De Vakantie',
  genre: 'Reizen',
  emoji: '🏖️',
  coverColor: '#1a2a3d',
  accentColor: '#60a8d4',
  description: 'Je plant een vakantie maar er gaat van alles mis. Hoe los je het op?',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De vakantieplannen',
      text: 'Je hebt eindelijk een week vrij gekregen van je werk en je wilt naar het strand. Je hebt een hotel geboekt in Zeeland en een vlucht via Schiphol naar een eiland in Griekenland. Je koffer staat al klaar bij de deur. Morgen vroeg vertrek je, maar dan krijg je een e-mail van de luchtvaartmaatschappij.',
      vocab: [
        { w: 'de luchtvaartmaatschappij', d: 'the airline' },
        { w: 'het eiland', d: 'the island' },
        { w: 'de koffer', d: 'the suitcase' },
        { w: 'vertrekken', d: 'to depart / to leave' },
      ],
      choices: [
        { text: 'Je belt meteen de luchtvaartmaatschappij', hint: 'Actief', next: 'c2a' },
        { text: 'Je wacht tot morgen op Schiphol', hint: 'Afwachtend', next: 'c2b' },
      ],
      quiz: { q: 'Waarheen gaat je op vakantie?', opts: ['Zeeland', 'Italië', 'Een eiland in Griekenland', 'Spanje'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Vertraging gemeld',
      text: 'Je hebt de luchtvaartmaatschappij gebeld en een medewerker vertelt je dat de vlucht drie uur vertraging heeft vanwege technische problemen. Je vraagt of je een voucher kunt krijgen voor eten op de luchthaven. De medewerker zegt dat je een formulier moet invullen bij de balie op Schiphol. Je besluit toch te gaan, omdat je vakantie maar één week duurt.',
      vocab: [
        { w: 'de vertraging', d: 'the delay' },
        { w: 'de balie', d: 'the desk / counter' },
        { w: 'de voucher', d: 'the voucher' },
        { w: 'het formulier', d: 'the form' },
      ],
      choices: [
        { text: 'Je gaat vroeg naar Schiphol en wacht geduldig', hint: 'Rustig', next: 'c3a' },
        { text: 'Je probeert een andere vlucht te boeken', hint: 'Oplossingsgericht', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel vertraging heeft de vlucht?', opts: ['Één uur', 'Twee uur', 'Drie uur', 'Vier uur'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Op Schiphol',
      text: 'Je bent op Schiphol aangekomen en je hebt gezien dat je vlucht vertraging heeft. Op het informatiebord staat "VERTRAAGD – 3 uur". De terminal is druk en er zijn lange rijen bij de balie. Je hebt honger, want je bent al om vijf uur opgestaan. Veel reizigers zien er moe en gefrustreerd uit.',
      vocab: [
        { w: 'het informatiebord', d: 'the information board' },
        { w: 'de terminal', d: 'the terminal' },
        { w: 'gefrustreerd', d: 'frustrated' },
        { w: 'de rij', d: 'the queue / line' },
      ],
      choices: [
        { text: 'Je gaat in de rij staan bij de balie', hint: 'Rustig', next: 'c3a' },
        { text: 'Je probeert een andere vlucht te boeken', hint: 'Oplossingsgericht', next: 'c3b' },
      ],
      quiz: { q: 'Hoe laat ben je opgestaan?', opts: ['Om drie uur', 'Om vier uur', 'Om vijf uur', 'Om zes uur'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Wachten op de luchthaven',
      text: 'Je hebt drie uur gewacht in de vertrekhal. Je hebt een broodje gegeten en een boek gelezen, want er was niets anders te doen. Eindelijk is je vlucht aangekondigd. Je bent opgestaan en naar de gate gelopen. Maar aan de gate vertelt een stewardess dat er nog een extra vertraging is van één uur.',
      vocab: [
        { w: 'de vertrekhal', d: 'the departure hall' },
        { w: 'aankondigen', d: 'to announce' },
        { w: 'de gate', d: 'the gate' },
        { w: 'de stewardess', d: 'the flight attendant (female)' },
      ],
      choices: [
        { text: 'Je blijft rustig en wacht nog een uur', hint: 'Geduldig', next: 'c4a' },
        { text: 'Je vraagt om compensatie voor de lange wachttijd', hint: 'Assertief', next: 'c4b' },
      ],
      quiz: { q: 'Wat heeft je gedaan tijdens het wachten?', opts: ['Geslapen', 'Muziek geluisterd', 'Een broodje gegeten en een boek gelezen', 'Gewerkt op een laptop'], a: 2 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Alternatieve vlucht',
      text: 'Je hebt online gekeken en een andere vlucht gevonden die twee uur later vertrekt maar een andere route neemt. Je hebt de medewerker gevraagd om te wijzigen, maar dat kost vijftig euro extra. Je moet snel beslissen, want je wilt zo snel mogelijk op vakantie zijn. Het is een moeilijke keuze.',
      vocab: [
        { w: 'de route', d: 'the route' },
        { w: 'wijzigen', d: 'to change / to modify' },
        { w: 'beslissen', d: 'to decide' },
        { w: 'snel mogelijk', d: 'as soon as possible' },
      ],
      choices: [
        { text: 'Je betaalt de vijftig euro voor de andere vlucht', hint: 'Praktisch', next: 'c4a' },
        { text: 'Je vraagt om compensatie voor de lange wachttijd', hint: 'Assertief', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel kost het om de vlucht te wijzigen?', opts: ['Tien euro', 'Twintig euro', 'Dertig euro', 'Vijftig euro'], a: 3 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Gearriveerd in Griekenland',
      text: 'Je bent eindelijk aangekomen in Griekenland, maar je bent al zes uur later dan gepland. Het is avond geworden en het hotel sluit de receptie om middernacht. Je hebt geprobeerd te bellen, maar niemand neemt op. Je hebt een taxi genomen van het vliegveld naar het hotel, maar aan de balie staat een briefje.',
      vocab: [
        { w: 'de receptie', d: 'the reception (desk)' },
        { w: 'middernacht', d: 'midnight' },
        { w: 'het vliegveld', d: 'the airport' },
        { w: 'het briefje', d: 'the note / slip of paper' },
      ],
      choices: [
        { text: 'Je belt het noodnummer dat op het briefje staat', hint: 'Praktisch', next: 'c5a' },
        { text: 'Je zoekt een ander hotel in de buurt', hint: 'Zelfstandig', next: 'c5b' },
      ],
      quiz: { q: 'Wanneer sluit de receptie van het hotel?', opts: ['Om tien uur', 'Om elf uur', 'Om middernacht', 'Om één uur'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Compensatie aanvragen',
      text: 'Je hebt de medewerker uitgelegd dat je al meer dan vier uur hebt gewacht. Volgens Europese regels heb je recht op compensatie. De medewerker heeft een formulier ingevuld en gezegd dat je tweehonderd euro kunt ontvangen. Dat is goed nieuws, maar je vlucht is nog steeds vertraagd. Je arriveert veel later dan gepland.',
      vocab: [
        { w: 'het recht op', d: 'the right to' },
        { w: 'de compensatie', d: 'the compensation' },
        { w: 'Europese regels', d: 'European rules / regulations' },
        { w: 'ontvangen', d: 'to receive' },
      ],
      choices: [
        { text: 'Je belt het noodnummer dat op het briefje staat', hint: 'Praktisch', next: 'c5a' },
        { text: 'Je zoekt een ander hotel in de buurt', hint: 'Zelfstandig', next: 'c5b' },
      ],
      quiz: { q: 'Hoeveel compensatie krijg je?', opts: ['Honderd euro', 'Honderdvijftig euro', 'Tweehonderd euro', 'Driehonderd euro'], a: 2 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Het noodnummer',
      text: 'Je hebt het noodnummer gebeld en een vriendelijke man genaamd Nikos heeft opgenomen. Hij is de eigenaar van het hotel en hij excuseert zich voor het ongemak. Nikos zegt dat je kamer volgeboekt is, want er was een fout in het systeem. Hij biedt je een kamer aan in zijn neef zijn hotel, vlakbij het strand.',
      vocab: [
        { w: 'de eigenaar', d: 'the owner' },
        { w: 'het ongemak', d: 'the inconvenience' },
        { w: 'volgeboekt', d: 'fully booked' },
        { w: 'aanbieden', d: 'to offer' },
      ],
      choices: [
        { text: 'Je accepteert het aanbod van Nikos', hint: 'Flexibel', next: 'c6a' },
        { text: 'Je eist je geld terug voor het hotel', hint: 'Assertief', next: 'c6b' },
      ],
      quiz: { q: 'Waarom is je kamer volgeboekt?', opts: ['Het hotel is gesloten', 'Er was een fout in het systeem', 'Je reservering is verlopen', 'Er was brand in het hotel'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Op zoek naar onderdak',
      text: 'Je hebt op je telefoon gezocht naar hotels in de buurt. Er is een klein bed-and-breakfast twee straten verder, maar het is duurder dan je had gepland. De eigenares heet Sofia en ze heeft een kamer vrij. Ze vraagt of je meekomt, want ze wil je de kamer laten zien. Je bent moe en je wilt gewoon slapen.',
      vocab: [
        { w: 'het onderdak', d: 'the accommodation / shelter' },
        { w: 'het bed-and-breakfast', d: 'the bed and breakfast' },
        { w: 'de eigenares', d: 'the owner (female)' },
        { w: 'duurder', d: 'more expensive' },
      ],
      choices: [
        { text: 'Je accepteert de kamer bij Sofia', hint: 'Flexibel', next: 'c6a' },
        { text: 'Je eist je geld terug voor het hotel', hint: 'Assertief', next: 'c6b' },
      ],
      quiz: { q: 'Hoe heet de eigenares van het bed-and-breakfast?', opts: ['Maria', 'Nikos', 'Sofia', 'Elena'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Nieuwe accommodatie',
      text: 'Je nieuwe kamer is klein maar schoon en je kunt het geluid van de zee horen. Je hebt goed geslapen en de volgende ochtend ben je naar het strand gegaan. Helaas is het begonnen te regenen, want er was een onverwacht onweer. Je bent snel teruggegaan naar de accommodatie, teleurgesteld maar niet wanhopig.',
      vocab: [
        { w: 'de accommodatie', d: 'the accommodation' },
        { w: 'het onweer', d: 'the thunderstorm' },
        { w: 'onverwacht', d: 'unexpected' },
        { w: 'wanhopig', d: 'desperate' },
      ],
      choices: [
        { text: 'Je gaat het plaatsje verkennen ondanks de regen', hint: 'Avontuurlijk', next: 'c7a' },
        { text: 'Je blijft binnen en leest een boek', hint: 'Ontspannen', next: 'c7b' },
      ],
      quiz: { q: 'Waarom ben je snel teruggegaan?', opts: ['Je was moe', 'Het begon te regenen', 'Je had honger', 'Je kamer was niet goed'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Geld terugvragen',
      text: 'Je hebt de nacht in een goedkoop hostel geslapen, want dat was het enige wat nog beschikbaar was. De volgende ochtend heb je een officiële klacht ingediend bij het hotel. Ze hebben beloofd dat ze je geld terugstorten binnen tien werkdagen. Maar je vakantie loopt al niet lekker en het begint ook nog te regenen.',
      vocab: [
        { w: 'de klacht', d: 'the complaint' },
        { w: 'indienen', d: 'to submit / to file' },
        { w: 'terugstorten', d: 'to refund / to transfer back' },
        { w: 'de werkdag', d: 'the working day' },
      ],
      choices: [
        { text: 'Je gaat het plaatsje verkennen ondanks de regen', hint: 'Avontuurlijk', next: 'c7a' },
        { text: 'Je besluit vroeger naar huis te gaan', hint: 'Opgeven', next: 'c7b' },
      ],
      quiz: { q: 'Binnen hoeveel dagen krijg je je geld terug?', opts: ['Drie werkdagen', 'Vijf werkdagen', 'Zeven werkdagen', 'Tien werkdagen'], a: 3 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Het plaatsje verkennen',
      text: 'Je hebt een regenjas aangetrokken en bent gaan wandelen in het plaatsje. De straten zijn smal en gezellig, met veel kleine winkeltjes. Je hebt een bakkerij gevonden waar heerlijk brood ruikt. Een oude man heeft je uitgenodigd om binnen te komen en je een kopje koffie aangeboden, omdat je er verkleumd uitzag.',
      vocab: [
        { w: 'verkleumd', d: 'chilled / numb with cold' },
        { w: 'de regenjas', d: 'the raincoat' },
        { w: 'uitnodigen', d: 'to invite' },
        { w: 'gezellig', d: 'cosy / pleasant' },
      ],
      choices: [
        { text: 'Je accepteert de koffie en praat met de man', hint: 'Sociaal', next: 'c8a' },
        { text: 'Je bedankt hem maar loopt verder', hint: 'Onafhankelijk', next: 'c8b' },
      ],
      quiz: { q: 'Waarom heeft de man je uitgenodigd?', opts: ['Hij wilde iets verkopen', 'Je zag er verkleumd uit', 'Hij sprak Nederlands', 'Het restaurant zat vol'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Binnen blijven',
      text: 'Je bent binnen gebleven en hebt een film gekeken op je laptop. Maar je voelt je schuldig, want je hebt veel geld betaald voor deze vakantie. Na een paar uur is de regen gestopt en is de zon doorgekomen. Je pakt je spullen en gaat naar buiten om het plaatsje te ontdekken.',
      vocab: [
        { w: 'schuldig voelen', d: 'to feel guilty' },
        { w: 'doorkomen', d: 'to come through / to break through' },
        { w: 'de zon', d: 'the sun' },
        { w: 'ontdekken', d: 'to discover' },
      ],
      choices: [
        { text: 'Je gaat naar een lokaal restaurant voor het avondeten', hint: 'Nieuwsgierig', next: 'c8a' },
        { text: 'Je loopt naar het strand nu de zon schijnt', hint: 'Optimistisch', next: 'c8b' },
      ],
      quiz: { q: 'Waarom voel je je schuldig?', opts: ['Je hebt te veel geld uitgegeven', 'Je hebt veel betaald voor de vakantie', 'Je hebt de regen niet verwacht', 'Je bent te laat teruggekomen'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Het lokale restaurant',
      text: 'Je bent in een klein restaurant terechtgekomen dat verborgen is in een steegje. Er staat geen naam boven de deur, maar binnen ruikt het heerlijk. De eigenaar, een vrouw die Eleni heet, heeft je welkom geheten met een glimlach. Ze heeft je aanbevolen om de dagschotel te nemen, want dat is vers en lokaal.',
      vocab: [
        { w: 'het steegje', d: 'the alley / narrow street' },
        { w: 'aanbevelen', d: 'to recommend' },
        { w: 'de dagschotel', d: 'the dish of the day' },
        { w: 'vers', d: 'fresh' },
      ],
      choices: [
        { text: 'Je bestelt de dagschotel en praat met Eleni', hint: 'Avontuurlijk', next: 'c9a' },
        { text: 'Je vraagt Eleni om tips voor het eiland', hint: 'Nieuwsgierig', next: 'c9b' },
      ],
      quiz: { q: 'Hoe heet de eigenaar van het restaurant?', opts: ['Sofia', 'Nikos', 'Eleni', 'Maria'], a: 2 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Strand in de zon',
      text: 'Je bent naar het strand gegaan en het is prachtig. Het water is helder blauw en het zand is warm. Je hebt gezwommen en in de zon gelegen. Op het strand heb je een stel ontmoet dat ook uit Nederland komt, en jullie hebben de hele middag samen doorgebracht. Ze kennen een geweldig restaurant voor vanavond.',
      vocab: [
        { w: 'het zand', d: 'the sand' },
        { w: 'zwemmen', d: 'to swim' },
        { w: 'het stel', d: 'the couple' },
        { w: 'doorbrengen', d: 'to spend (time)' },
      ],
      choices: [
        { text: 'Je gaat mee naar het restaurant met het stel', hint: 'Sociaal', next: 'c9a' },
        { text: 'Je bedankt ze maar gaat liever alleen eten', hint: 'Zelfstandig', next: 'c9b' },
      ],
      quiz: { q: 'Waar vandaan komt het stel op het strand?', opts: ['België', 'Duitsland', 'Nederland', 'Engeland'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Een geweldige avond',
      text: 'Het eten was fantastisch en je hebt nieuwe vrienden gemaakt. De Nederlanders hebben je verteld over een prachtige wandeling die je morgen kunt maken. Eleni heeft ook dessert gebracht, cadeau van het huis. Je realiseert je dat deze vakantie, ondanks alle problemen, toch bijzonder is geworden.',
      vocab: [
        { w: 'cadeau van het huis', d: 'on the house / complimentary' },
        { w: 'het dessert', d: 'the dessert' },
        { w: 'bijzonder', d: 'special' },
        { w: 'realiseren', d: 'to realise' },
      ],
      choices: [
        { text: 'Je maakt de wandeling de volgende dag', hint: 'Actief', next: 'c10g' },
        { text: 'Je geniet van de rest van de vakantie op het strand', hint: 'Ontspannen', next: 'c10n' },
      ],
      quiz: { q: 'Wat heeft Eleni gebracht aan het einde van het diner?', opts: ['Een drankje', 'Een kaart van het eiland', 'Dessert cadeau van het huis', 'De rekening'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Terug naar huis?',
      text: 'Je zit op je kamer en je denkt aan alles wat er is misgegaan. De vlucht was vertraagd, het hotel was volgeboekt en het heeft geregend. Je begint te twijfelen of je niet gewoon vroeger naar huis moet gaan. Je hebt de website van de luchtvaartmaatschappij geopend om te kijken of je kunt omboeken.',
      vocab: [
        { w: 'omboeken', d: 'to rebook / to change booking' },
        { w: 'twijfelen', d: 'to doubt / to hesitate' },
        { w: 'misgaan', d: 'to go wrong' },
        { w: 'openen', d: 'to open' },
      ],
      choices: [
        { text: 'Je geniet van de rest van de vakantie op het strand', hint: 'Optimistisch', next: 'c10n' },
        { text: 'Je boekt een vroegere vlucht naar huis', hint: 'Klaar', next: 'c10b' },
      ],
      quiz: { q: 'Wat doe je op je kamer?', opts: ['Je slaapt', 'Je belt naar huis', 'Je denkt na over vroeger naar huis gaan', 'Je pakt je koffer'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'De beste vakantie', ending: 'good',
      text: 'De wandeling was adembenemend. Je hebt uitzicht gehad over de hele baai en foto\'s gemaakt die je nooit zult vergeten. De Nederlanders en Eleni zijn aan het einde van de vakantie goede vrienden geworden. Je hebt meer beleefd dan op elke andere vakantie. Ondanks alle tegenslagen was het de beste vakantie van je leven.',
      vocab: [
        { w: 'adembenemend', d: 'breathtaking' },
        { w: 'de baai', d: 'the bay' },
        { w: 'de tegenslag', d: 'the setback' },
        { w: 'beleven', d: 'to experience' },
      ],
      choices: [],
      quiz: { q: 'Hoe eindig je de vakantie?', opts: ['Teleurgesteld', 'Zo snel mogelijk naar huis', 'Met nieuwe vrienden en mooie herinneringen', 'Met een klacht'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Goed genoeg', ending: 'neutral',
      text: 'De rest van de vakantie was rustig. Je hebt genoten van het strand en lekker gegeten. Er zijn geen nieuwe problemen geweest, maar je hebt ook niet het gevoel dat het een bijzondere vakantie was. Op de terugvlucht denk je: "Volgend jaar plan ik het beter." De compensatie van de luchtvaartmaatschappij staat al op je rekening.',
      vocab: [
        { w: 'de terugvlucht', d: 'the return flight' },
        { w: 'de rekening', d: 'the (bank) account' },
        { w: 'genieten van', d: 'to enjoy' },
        { w: 'bijzonder', d: 'special / exceptional' },
      ],
      choices: [],
      quiz: { q: 'Wat denk je op de terugvlucht?', opts: ['"Dit was perfect"', '"Ik ga nooit meer op vakantie"', '"Volgend jaar plan ik het beter"', '"Ik wil terug"'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Vroeg naar huis', ending: 'bad',
      text: 'Je hebt een vroegere vlucht geboekt en bent twee dagen eerder naar huis gegaan. Op Schiphol heb je direct een klacht ingediend en om een volledige terugbetaling gevraagd. Thuis voel je je moe en teleurgesteld. Je hebt je vrienden verteld hoe erg de vakantie was. Volgend jaar ga je gewoon naar Zeeland.',
      vocab: [
        { w: 'de terugbetaling', d: 'the refund / reimbursement' },
        { w: 'volledig', d: 'full / complete' },
        { w: 'teleurgesteld', d: 'disappointed' },
        { w: 'erg', d: 'bad / terrible' },
      ],
      choices: [],
      quiz: { q: 'Hoeveel dagen eerder ben je naar huis gegaan?', opts: ['Één dag', 'Twee dagen', 'Drie dagen', 'Vier dagen'], a: 1 },
    },
  },
};
