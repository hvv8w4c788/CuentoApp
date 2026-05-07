import type { Story } from './types';

export const storyNlA2_8: Story = {
  id: 'nl-a2-8',
  level: 'A2',
  title: 'De Vlooienmarkt',
  genre: 'Mysterie',
  emoji: '🗝️',
  coverColor: '#2a1e2a',
  accentColor: '#b070d0',
  description: 'Op de vlooienmarkt vind je een mysterieus voorwerp. Wat is de geschiedenis ervan?',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De bijzondere vondst',
      text: 'Op zaterdagochtend ben je naar de vlooienmarkt gegaan in het centrum van de stad. Er staan tientallen kraampjes met oude spullen. Op een klein kraampje zie je een houten kistje met een ongewone sleutel eraan. De sleutel is van koper en heeft een vreemde vorm. De prijs is maar twee euro. Je bent nieuwsgierig geworden.',
      vocab: [
        { w: 'de vlooienmarkt', d: 'the flea market' },
        { w: 'het kraampje', d: 'the stall / small stand' },
        { w: 'het kistje', d: 'the small box / casket' },
        { w: 'het koper', d: 'the copper' },
      ],
      choices: [
        { text: 'Je koopt het kistje meteen voor twee euro', hint: 'Impulsief', next: 'c2a' },
        { text: 'Je vraagt de verkoper eerst meer over het kistje', hint: 'Voorzichtig', next: 'c2b' },
      ],
      quiz: { q: 'Hoeveel kost het kistje?', opts: ['Één euro', 'Twee euro', 'Vijf euro', 'Tien euro'], a: 1 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'De aankoop',
      text: 'Je hebt het kistje gekocht zonder te vragen. De verkoper keek je een beetje vreemd aan toen je het kistje pakte. Thuis heb je het kistje op tafel gelegd. Je hebt de sleutel geprobeerd, maar het slot gaat niet open. De sleutel past wel in het slot, maar hij draait niet. Er moet iets mis zijn, of het slot is geblokkeerd.',
      vocab: [
        { w: 'het slot', d: 'the lock' },
        { w: 'geblokkeerd', d: 'blocked' },
        { w: 'draaien', d: 'to turn' },
        { w: 'passen', d: 'to fit' },
      ],
      choices: [
        { text: 'Je gaat terug naar de markt om de verkoper te vragen', hint: 'Direct', next: 'c3a' },
        { text: 'Je zoekt een antiekhandelaar die je kan helpen', hint: 'Deskundig', next: 'c3b' },
      ],
      quiz: { q: 'Waarom gaat het slot niet open?', opts: ['De sleutel past niet', 'Het slot is geblokkeerd', 'De sleutel is gebroken', 'Er zit geen slot op'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'De verhalen van de verkoper',
      text: 'De verkoper, een oudere man met een baard, zegt dat hij het kistje heeft gekocht op een andere markt in Utrecht. Hij weet niet veel meer, maar hij zegt dat het kistje minstens tachtig jaar oud is. Hij heeft ook geprobeerd het te openen, maar het slot geeft niet mee. Je koopt het voor twee euro en gaat naar huis.',
      vocab: [
        { w: 'minstens', d: 'at least' },
        { w: 'meegeven', d: 'to give way / to yield' },
        { w: 'de baard', d: 'the beard' },
        { w: 'oud', d: 'old' },
      ],
      choices: [
        { text: 'Je gaat terug naar de markt om meer te vragen', hint: 'Direct', next: 'c3a' },
        { text: 'Je zoekt een antiekhandelaar die je kan helpen', hint: 'Deskundig', next: 'c3b' },
      ],
      quiz: { q: 'Hoe oud is het kistje minstens?', opts: ['Vijftig jaar', 'Zestig jaar', 'Zeventig jaar', 'Tachtig jaar'], a: 3 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'Terug naar de markt',
      text: 'Je bent teruggegaan naar de markt, maar de verkoper is al vertrokken. Zijn buurkraampje wordt gerund door een vrouw die Greet heet. Zij zegt dat ze de man niet kent, maar dat hij elke maand op de markt staat. Ze heeft opgemerkt dat de man snel wegliep nadat jij het kistje had gekocht. Dat is merkwaardig.',
      vocab: [
        { w: 'het buurkraampje', d: 'the neighbouring stall' },
        { w: 'opmerken', d: 'to notice' },
        { w: 'merkwaardig', d: 'remarkable / strange' },
        { w: 'weglopen', d: 'to walk away / to leave quickly' },
      ],
      choices: [
        { text: 'Je zoekt nu een antiekhandelaar', hint: 'Praktisch', next: 'c4a' },
        { text: 'Je vraagt Greet of ze meer weet over het kistje', hint: 'Nieuwsgierig', next: 'c4b' },
      ],
      quiz: { q: 'Hoe heet de vrouw van het buurkraampje?', opts: ['Anna', 'Greet', 'Lies', 'Mia'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De antiekwinkel',
      text: 'Je hebt een antiekwinkel gevonden in een smalle straat in de binnenstad. De winkel heet "Oud en Waard" en ruikt naar hout en leer. Een man van middelbare leeftijd kijkt je vriendelijk aan. Hij stelt zich voor als Herman, en hij is meteen geïnteresseerd in het kistje als je het hem laat zien.',
      vocab: [
        { w: 'de antiekwinkel', d: 'the antique shop' },
        { w: 'de binnenstad', d: 'the city centre / old town' },
        { w: 'het leer', d: 'the leather' },
        { w: 'van middelbare leeftijd', d: 'middle-aged' },
      ],
      choices: [
        { text: 'Je vraagt Herman om het slot te openen', hint: 'Direct', next: 'c4a' },
        { text: 'Je vraagt Herman wat hij weet over het kistje', hint: 'Nieuwsgierig', next: 'c4b' },
      ],
      quiz: { q: 'Hoe heet de antiekhandelaar?', opts: ['Henk', 'Herman', 'Hans', 'Harry'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Het slot openen',
      text: 'Herman heeft een speciale techniek gebruikt om het oude slot voorzichtig te openen. Het duurde bijna twintig minuten, maar uiteindelijk klikte het slot open. In het kistje liggen een oude brief en een kleine zwart-witfoto. Op de foto staan twee mensen voor een groot huis. Je hart klopt snel van opwinding.',
      vocab: [
        { w: 'voorzichtig', d: 'carefully / gently' },
        { w: 'klikken', d: 'to click' },
        { w: 'de brief', d: 'the letter' },
        { w: 'zwart-wit', d: 'black and white' },
      ],
      choices: [
        { text: 'Je leest de brief meteen', hint: 'Ongeduldig', next: 'c5a' },
        { text: 'Je vraagt Herman of hij de brief kan lezen', hint: 'Voorzichtig', next: 'c5b' },
      ],
      quiz: { q: 'Wat zit er in het kistje?', opts: ['Geld en sieraden', 'Een oude brief en een zwart-witfoto', 'Een sleutel en een kaart', 'Niets'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'De geschiedenis van het kistje',
      text: 'Herman bekijkt het kistje heel zorgvuldig. Hij zegt dat het een typisch Hollands kistje is uit de jaren veertig. Het hout is eikenhout en het koper is handgemaakt. "Dit soort kistjes werden gebruikt om waardevolle documenten te bewaren," zegt hij. "Het feit dat het op de markt lag, is heel bijzonder."',
      vocab: [
        { w: 'zorgvuldig', d: 'carefully / thoroughly' },
        { w: 'het eikenhout', d: 'the oak wood' },
        { w: 'handgemaakt', d: 'handmade' },
        { w: 'bewaren', d: 'to store / to keep' },
      ],
      choices: [
        { text: 'Je vraagt Herman om het slot te openen', hint: 'Direct', next: 'c5a' },
        { text: 'Je neemt het kistje mee naar huis om zelf te onderzoeken', hint: 'Zelfstandig', next: 'c5b' },
      ],
      quiz: { q: 'Uit welke periode is het kistje volgens Herman?', opts: ['De jaren dertig', 'De jaren veertig', 'De jaren vijftig', 'De jaren zestig'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'De brief',
      text: 'Je hebt de brief gelezen. Hij is geschreven in een oud handschrift en gedateerd op 12 maart 1944. De brief is van iemand die "Anna" heet, en ze schrijft aan haar neef "Willem". Ze zegt dat ze het kistje aan hem nalaat, want ze moet het land verlaten. De brief eindigt met: "Zoek ons thuis, dan vind je de rest."',
      vocab: [
        { w: 'het handschrift', d: 'the handwriting' },
        { w: 'nalaten', d: 'to leave behind / to bequeath' },
        { w: 'het land verlaten', d: 'to leave the country' },
        { w: 'gedateerd', d: 'dated' },
      ],
      choices: [
        { text: 'Je probeert de nakomelingen van Willem te vinden', hint: 'Detectives', next: 'c6a' },
        { text: 'Je gaat naar het adres op de foto', hint: 'Avontuurlijk', next: 'c6b' },
      ],
      quiz: { q: 'Wanneer is de brief geschreven?', opts: ['12 maart 1940', '12 maart 1942', '12 maart 1944', '12 maart 1946'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Onderzoek thuis',
      text: 'Thuis heb je het kistje verder onderzocht. Je hebt een geheim vakje gevonden aan de onderkant. Erin zit een kleine sleutel die anders is dan de eerste. Er is ook een papiertje met een adres: "Kerkstraat 14, Haarlem." Je hebt dit adres opgezocht op internet en gevonden dat het een oud herenhuis is dat nu te koop staat.',
      vocab: [
        { w: 'het vakje', d: 'the compartment / small space' },
        { w: 'de onderkant', d: 'the bottom / underside' },
        { w: 'het herenhuis', d: 'the townhouse / manor house' },
        { w: 'te koop', d: 'for sale' },
      ],
      choices: [
        { text: 'Je probeert de nakomelingen van de eigenaar te vinden', hint: 'Detectives', next: 'c6a' },
        { text: 'Je gaat naar het adres in Haarlem', hint: 'Avontuurlijk', next: 'c6b' },
      ],
      quiz: { q: 'Wat staat er op het papiertje in het geheime vakje?', opts: ['Een naam', 'Een telefoonnummer', 'Een adres in Haarlem', 'Een datum'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Op zoek naar nakomelingen',
      text: 'Je hebt online gezocht naar de naam "Willem" in combinatie met het adres. Via een genealogiewebsite heb je een lijst gevonden van mensen met die achternaam in die buurt. Er is een man die "Pieter de Vries" heet en die zegt dat zijn grootvader "Willem de Vries" heette. Je hebt hem een bericht gestuurd.',
      vocab: [
        { w: 'de nakomeling', d: 'the descendant' },
        { w: 'de genealogiewebsite', d: 'the genealogy website' },
        { w: 'de achternaam', d: 'the surname / family name' },
        { w: 'de grootvader', d: 'the grandfather' },
      ],
      choices: [
        { text: 'Je wacht op een antwoord van Pieter', hint: 'Geduldig', next: 'c7a' },
        { text: 'Je gaat ook naar het adres in Haarlem', hint: 'Actief', next: 'c7b' },
      ],
      quiz: { q: 'Hoe heet de man die je hebt gevonden?', opts: ['Pieter de Vries', 'Willem de Vries', 'Jan de Vries', 'Herman de Vries'], a: 0 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Naar Haarlem',
      text: 'Je bent met de trein naar Haarlem gegaan. De Kerkstraat is een mooie oude straat in het centrum. Nummer veertien is een groot herenhuis met een blauwe deur. Er staat een makelaarsbord voor de deur. Je hebt aangebeld, maar er is niemand thuis. Een buurvrouw zegt dat het huis al twee jaar leegstaat.',
      vocab: [
        { w: 'het makelaarsbord', d: 'the estate agent\'s sign' },
        { w: 'aanbellen', d: 'to ring the doorbell' },
        { w: 'leegstaan', d: 'to stand empty' },
        { w: 'de buurvrouw', d: 'the female neighbour' },
      ],
      choices: [
        { text: 'Je vraagt de buurvrouw meer over het huis', hint: 'Nieuwsgierig', next: 'c7a' },
        { text: 'Je belt de makelaar om meer te weten te komen', hint: 'Praktisch', next: 'c7b' },
      ],
      quiz: { q: 'Hoe lang staat het huis al leeg?', opts: ['Één jaar', 'Twee jaar', 'Drie jaar', 'Vijf jaar'], a: 1 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Nieuwe aanwijzingen',
      text: 'Pieter de Vries heeft geantwoord. Hij is heel verrast en schrijft dat zijn grootvader Willem dit kistje nooit heeft gekregen en er altijd naar heeft gezocht. Willem is vijf jaar geleden gestorven, maar Pieter wil het kistje graag zien. Hij stelt voor om elkaar te ontmoeten in een café in Amsterdam.',
      vocab: [
        { w: 'de aanwijzing', d: 'the clue / lead' },
        { w: 'verrast', d: 'surprised' },
        { w: 'ontmoeten', d: 'to meet' },
        { w: 'stellen voor', d: 'to suggest / to propose' },
      ],
      choices: [
        { text: 'Je gaat naar het café om Pieter te ontmoeten', hint: 'Beslissend', next: 'c8a' },
        { text: 'Je vraagt Pieter eerst meer informatie per e-mail', hint: 'Voorzichtig', next: 'c8b' },
      ],
      quiz: { q: 'Wanneer is Willems grootvader gestorven?', opts: ['Twee jaar geleden', 'Drie jaar geleden', 'Vijf jaar geleden', 'Tien jaar geleden'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'De makelaar belt',
      text: 'De makelaar heeft je teruggebeld en verteld dat het huis eigendom is van een stichting. Hij weet niet veel over de geschiedenis, maar hij heeft een naam gegeven van de notaris die de stichting beheert. De notaris heet mevrouw Bakker en ze werkt in Haarlem. Ze kan je misschien meer vertellen over de vroegere eigenaren.',
      vocab: [
        { w: 'de stichting', d: 'the foundation / charity' },
        { w: 'de notaris', d: 'the notary' },
        { w: 'beheren', d: 'to manage / to administer' },
        { w: 'de eigenaar', d: 'the owner' },
      ],
      choices: [
        { text: 'Je maakt een afspraak met mevrouw Bakker', hint: 'Formeel', next: 'c8a' },
        { text: 'Je zoekt ook online naar de stichting', hint: 'Zelfstandig', next: 'c8b' },
      ],
      quiz: { q: 'Wie beheert de stichting die het huis bezit?', opts: ['Herman', 'Mevrouw Bakker', 'Pieter de Vries', 'Greet'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'De ontmoeting',
      text: 'Je hebt Pieter de Vries ontmoet in een café in Amsterdam. Hij is een man van zestig jaar oud met vriendelijke ogen. Je hebt hem het kistje en de brief laten zien. Pieter heeft de brief gelezen en zijn ogen zijn nat geworden. Hij zegt dat Anna de zus was van zijn grootvader Willem, en dat ze in de oorlog zijn gevlucht.',
      vocab: [
        { w: 'nat worden', d: 'to become wet / to well up (eyes)' },
        { w: 'de zus', d: 'the sister' },
        { w: 'de oorlog', d: 'the war' },
        { w: 'vluchten', d: 'to flee / to escape' },
      ],
      choices: [
        { text: 'Je geeft het kistje aan Pieter', hint: 'Grootmoedig', next: 'c9a' },
        { text: 'Je vraagt Pieter meer over de geschiedenis', hint: 'Nieuwsgierig', next: 'c9b' },
      ],
      quiz: { q: 'Wie was Anna voor Willems grootvader?', opts: ['Zijn vrouw', 'Zijn moeder', 'Zijn zus', 'Zijn dochter'], a: 2 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Meer onderzoek',
      text: 'Je hebt meer informatie gevonden over de stichting en de familie die vroeger in het huis woonde. De familie heette "De Vries" en ze zijn in 1944 gevlucht tijdens de Tweede Wereldoorlog. Via het Joods Historisch Museum in Amsterdam heb je meer documenten gevonden. De geschiedenis is verdrietig maar ook fascinerend.',
      vocab: [
        { w: 'de Tweede Wereldoorlog', d: 'the Second World War' },
        { w: 'fascinerend', d: 'fascinating' },
        { w: 'het museum', d: 'the museum' },
        { w: 'verdrietig', d: 'sad' },
      ],
      choices: [
        { text: 'Je neemt contact op met het museum', hint: 'Formeel', next: 'c9a' },
        { text: 'Je probeert zelf de familie te vinden', hint: 'Onafhankelijk', next: 'c9b' },
      ],
      quiz: { q: 'Via welk museum heb je meer documenten gevonden?', opts: ['Het Rijksmuseum', 'Het Stedelijk Museum', 'Het Joods Historisch Museum', 'Het Anne Frank Huis'], a: 2 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Het familieerfgoed',
      text: 'Pieter is diep bewogen door het kistje en de brief. Hij vertelt je dat zijn familie altijd heeft geweten dat er ergens een kistje was, maar dat ze het nooit hebben gevonden. Hij wil je graag bedanken met een etentje. Je begrijpt nu waarom dit kleine kistje zo belangrijk is: het is een stukje familiegeschiedenis.',
      vocab: [
        { w: 'het familieerfgoed', d: 'the family heirloom' },
        { w: 'bewogen', d: 'moved / touched' },
        { w: 'het etentje', d: 'the dinner (informal)' },
        { w: 'de familiegeschiedenis', d: 'the family history' },
      ],
      choices: [
        { text: 'Je geeft het kistje aan Pieter en gaat mee eten', hint: 'Warm', next: 'c10g' },
        { text: 'Je geeft het kistje maar gaat niet mee eten', hint: 'Bescheiden', next: 'c10n' },
      ],
      quiz: { q: 'Wat biedt Pieter je aan als dank?', opts: ['Geld', 'Een boek over de familie', 'Een etentje', 'Een schilderij'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Het mysterie blijft',
      text: 'Je hebt veel ontdekt over het kistje, maar je hebt de originele eigenaar niet gevonden. De brief blijft raadselachtig en je weet niet zeker wie Anna echt was. Herman heeft gezegd dat het kistje misschien toch niet zo waardevol is. Je bent een beetje teleurgesteld, maar je vindt het toch een interessante dag geweest.',
      vocab: [
        { w: 'raadselachtig', d: 'mysterious / enigmatic' },
        { w: 'waardevol', d: 'valuable' },
        { w: 'de originele eigenaar', d: 'the original owner' },
        { w: 'ontdekken', d: 'to discover' },
      ],
      choices: [
        { text: 'Je houdt het kistje als herinnering', hint: 'Sentimenteel', next: 'c10n' },
        { text: 'Je zet het kistje terug op een andere markt', hint: 'Losgelaten', next: 'c10b' },
      ],
      quiz: { q: 'Wat zegt Herman over het kistje?', opts: ['Het is erg waardevol', 'Het kistje is niet zo waardevol', 'Het is gestolen', 'Het komt uit een museum'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Een ontroerende reünie', ending: 'good',
      text: 'Je hebt het kistje aan Pieter gegeven en samen hebben jullie heerlijk gegeten. Pieter heeft zijn hele familie gebeld om het nieuws te vertellen. Zijn dochter is ook gekomen en ze heeft gehuild van blijdschap. Ze zeggen dat ze het kistje in hun woonkamer zullen zetten als eerbetoon aan Anna en Willem. Jij bent blij dat je die ochtend naar de vlooienmarkt bent gegaan.',
      vocab: [
        { w: 'ontroerend', d: 'moving / touching' },
        { w: 'de blijdschap', d: 'the joy' },
        { w: 'het eerbetoon', d: 'the tribute / homage' },
        { w: 'de reünie', d: 'the reunion' },
      ],
      choices: [],
      quiz: { q: 'Waar gaat de familie het kistje neerzetten?', opts: ['In een museum', 'In de slaapkamer', 'In hun woonkamer', 'In een kluis'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een curiositeit', ending: 'neutral',
      text: 'Je hebt het kistje thuis gehouden als herinnering aan een bijzondere dag. Je weet nu wat meer over de geschiedenis, maar er blijft veel onbekend. Het kistje staat op je boekenplank en soms pak je het op en denk je aan Anna en Willem. Het mysterie is niet volledig opgelost, maar het heeft je wel aan het denken gezet.',
      vocab: [
        { w: 'de curiositeit', d: 'the curiosity / curio' },
        { w: 'de boekenplank', d: 'the bookshelf' },
        { w: 'onbekend', d: 'unknown' },
        { w: 'aan het denken zetten', d: 'to make one think' },
      ],
      choices: [],
      quiz: { q: 'Waar staat het kistje aan het einde?', opts: ['Bij Pieter thuis', 'In een museum', 'Op je boekenplank', 'Op de markt'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een verspilde middag', ending: 'bad',
      text: 'Je hebt het kistje teruggezet op een andere vlooienmarkt, want je weet niet wat je ermee aan moet. De middag was interessant maar ook frustrerend, omdat je geen antwoorden hebt gevonden. Op de markt pakt een andere man het kistje op en betaalt twee euro. Je hoopt dat hij meer geluk heeft dan jij.',
      vocab: [
        { w: 'verspild', d: 'wasted' },
        { w: 'frustrerend', d: 'frustrating' },
        { w: 'het antwoord', d: 'the answer' },
        { w: 'het geluk', d: 'the luck / happiness' },
      ],
      choices: [],
      quiz: { q: 'Wat doe je met het kistje aan het einde?', opts: ['Je gooit het weg', 'Je geeft het aan een museum', 'Je zet het op een andere markt', 'Je houdt het voor jezelf'], a: 2 },
    },
  },
};
