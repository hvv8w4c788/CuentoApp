import type { Story } from './types';

export const storyNlA1_8: Story = {
  id: 'nl-a1-8', level: 'A1', title: 'Op de Markt', genre: 'Avontuur', emoji: '🧺',
  coverColor: '#3a2a1a', accentColor: '#c8a060',
  description: 'Je gaat naar de zaterdagmarkt. Er is veel te zien en te kopen.',
  startChapter: 'c1',
  chapters: {
    c1: { id: 'c1', num: 1, title: 'Zaterdag op de markt',
      text: 'Het is zaterdag. De zon schijnt. Je neemt je mand en gaat naar de markt. De markt is groot en kleurrijk. Er zijn veel kramen met eten, kleren en boeken.',
      vocab: [{ w: 'de mand', d: 'the basket' }, { w: 'de markt', d: 'the market' }, { w: 'de kraam', d: 'the market stall' }, { w: 'kleurrijk', d: 'colourful' }],
      choices: [
        { text: 'Eerst naar de groentekraam gaan', hint: 'Gezond', next: 'c2a' },
        { text: 'Rondlopen en alles bekijken', hint: 'Nieuwsgierig', next: 'c2b' },
      ],
      quiz: { q: 'Welke dag is het?', opts: ['Vrijdag', 'Zaterdag', 'Zondag', 'Maandag'], a: 1 } },

    c2a: { id: 'c2a', num: 2, title: 'De groentekraam',
      text: 'Je loopt naar de groentekraam. Er zijn tomaten, uien, wortels en aardappelen. De verkoper roept: "Verse groente! Goedkoop vandaag!" Je koopt tomaten en wortels.',
      vocab: [{ w: 'de tomaat', d: 'the tomato' }, { w: 'de wortel', d: 'the carrot' }, { w: 'vers', d: 'fresh' }, { w: 'goedkoop', d: 'cheap' }],
      choices: [
        { text: 'Naar de boekenstand lopen', hint: 'Lezen', next: 'c3a' },
        { text: 'Een verloren kind helpen', hint: 'Hulpvaardig', next: 'c3b' },
      ],
      quiz: { q: 'Wat koop je bij de groentekraam?', opts: ['Uien en aardappelen', 'Tomaten en wortels', 'Brood en kaas', 'Fruit en noten'], a: 1 } },

    c2b: { id: 'c2b', num: 2, title: 'Rondkijken',
      text: 'Je loopt door de markt. Je ruikt vers brood en kruiden. Je ziet een man die muziek maakt. Een vrouw verkoopt zelfgemaakte sieraden. Het is heel gezellig.',
      vocab: [{ w: 'ruiken', d: 'to smell' }, { w: 'de kruiden', d: 'the herbs / spices' }, { w: 'zelfgemaakt', d: 'homemade' }, { w: 'het sieraad', d: 'the jewellery item' }],
      choices: [
        { text: 'Naar de boekenstand gaan', hint: 'Lezen', next: 'c3a' },
        { text: 'Een huilend kind helpen', hint: 'Vriendelijk', next: 'c3b' },
      ],
      quiz: { q: 'Wat maakt de man op de markt?', opts: ['Sieraden', 'Muziek', 'Brood', 'Kunst'], a: 1 } },

    c3a: { id: 'c3a', num: 3, title: 'De boekenstand',
      text: 'Je vindt een boekenstand. Er zijn oude boeken voor weinig geld. Je pakt een boek over planten. Het kost maar één euro. De verkoper glimlacht: "Goede keus!"',
      vocab: [{ w: 'de boekenstand', d: 'the book stall' }, { w: 'oud', d: 'old' }, { w: 'de keus', d: 'the choice' }, { w: 'de euro', d: 'the euro' }],
      choices: [
        { text: 'Nog meer boeken bekijken', hint: 'Boekenliefhebber', next: 'c4a' },
        { text: 'Naar een eettent gaan', hint: 'Hongerig', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel kost het boek?', opts: ['Vijftig cent', 'Eén euro', 'Twee euro', 'Vijf euro'], a: 1 } },

    c3b: { id: 'c3b', num: 3, title: 'Een verloren kind',
      text: 'Je ziet een klein meisje. Ze huilt. "Ik kan mijn mama niet vinden!" Je knielt neer. "Hoe heet je mama?" vraag je vriendelijk. "Mama heet Sara."',
      vocab: [{ w: 'verloren', d: 'lost' }, { w: 'huilen', d: 'to cry' }, { w: 'knielen', d: 'to kneel' }, { w: 'vinden', d: 'to find' }],
      choices: [
        { text: 'Met het meisje haar mama zoeken', hint: 'Behulpzaam', next: 'c4a' },
        { text: 'De marktmeester om hulp vragen', hint: 'Slim', next: 'c4b' },
      ],
      quiz: { q: 'Hoe heet de mama van het meisje?', opts: ['Anna', 'Maria', 'Sara', 'Lisa'], a: 2 } },

    c4a: { id: 'c4a', num: 4, title: 'Zoeken op de markt',
      text: 'Jij en het meisje lopen samen door de markt. "Mama! Mama!" roept het meisje. Bij de bloemenstand staat een vrouw. Ze draait zich om. "Emma!" Ze rent naar haar kind.',
      vocab: [{ w: 'de bloemenstand', d: 'the flower stall' }, { w: 'omdraaien', d: 'to turn around' }, { w: 'rennen', d: 'to run' }, { w: 'het kind', d: 'the child' }],
      choices: [
        { text: 'Blij zijn en verder winkelen', hint: 'Gelukkig', next: 'c5a' },
        { text: 'Wachten om te zien of alles goed is', hint: 'Zorgzaam', next: 'c5b' },
      ],
      quiz: { q: 'Waar staat de mama van het meisje?', opts: ['Bij de groentekraam', 'Bij de boekenstand', 'Bij de bloemenstand', 'Bij de ingang'], a: 2 } },

    c4b: { id: 'c4b', num: 4, title: 'De marktmeester',
      text: 'Je gaat naar de marktmeester. Hij heeft een geel hesje aan. "Dit meisje is haar mama kwijt. Haar mama heet Sara." De marktmeester pakt een microfoon en roept de naam.',
      vocab: [{ w: 'de marktmeester', d: 'the market manager' }, { w: 'het hesje', d: 'the vest / tabard' }, { w: 'kwijt zijn', d: 'to have lost' }, { w: 'de microfoon', d: 'the microphone' }],
      choices: [
        { text: 'Bij het meisje blijven tot mama komt', hint: 'Zorgzaam', next: 'c5a' },
        { text: 'Zelf ook naar Sara zoeken', hint: 'Actief', next: 'c5b' },
      ],
      quiz: { q: 'Wat doet de marktmeester?', opts: ['Hij belt de politie', 'Hij roept de naam via de microfoon', 'Hij zoekt zelf', 'Hij neemt het meisje mee'], a: 1 } },

    c5a: { id: 'c5a', num: 5, title: 'Samen eten',
      text: 'Je vindt een eettent met stroopwafels en poffertjes. Het ruikt heel lekker. Je koopt een zakje poffertjes. Ze zijn warm en zoet. Je eet ze op terwijl je loopt.',
      vocab: [{ w: 'de stroopwafel', d: 'the syrup waffle' }, { w: 'de poffertjes', d: 'the mini pancakes' }, { w: 'het zakje', d: 'the small bag' }, { w: 'zoet', d: 'sweet' }],
      choices: [
        { text: 'Naar de sjaalenkraam gaan', hint: 'Inkopen', next: 'c6a' },
        { text: 'Nog meer eten proberen', hint: 'Lekker', next: 'c6b' },
      ],
      quiz: { q: 'Wat koop je bij de eettent?', opts: ['Stroopwafels', 'Poffertjes', 'Brood', 'Kaas'], a: 1 } },

    c5b: { id: 'c5b', num: 5, title: 'Een beloning',
      text: 'De mama van het meisje bedankt je heel erg. "Dank je wel! Jij bent zo lief." Ze geeft je een rozenbottelaanbieding van haar kraam. Het meisje zwaait lachend naar je.',
      vocab: [{ w: 'de beloning', d: 'the reward' }, { w: 'bedanken', d: 'to thank' }, { w: 'zwaaien', d: 'to wave' }, { w: 'lachend', d: 'laughing / smiling' }],
      choices: [
        { text: 'Naar de sjaalenkraam gaan', hint: 'Inkopen', next: 'c6a' },
        { text: 'Iets lekkers gaan eten', hint: 'Hongerig', next: 'c6b' },
      ],
      quiz: { q: 'Wat doet het meisje als je weggaat?', opts: ['Ze huilt', 'Ze zwaait lachend', 'Ze rent weg', 'Ze zegt niets'], a: 1 } },

    c6a: { id: 'c6a', num: 6, title: 'De sjaalenkraam',
      text: 'Je ziet een kraam met sjaals. Er zijn sjaals in veel kleuren: blauw, rood, groen en geel. Een mooie rode sjaal kost tien euro. Je vindt hem mooi.',
      vocab: [{ w: 'de sjaal', d: 'the scarf' }, { w: 'de kleur', d: 'the colour' }, { w: 'blauw', d: 'blue' }, { w: 'rood', d: 'red' }],
      choices: [
        { text: 'Proberen de prijs te onderhandelen', hint: 'Slim', next: 'c7a' },
        { text: 'De volle prijs betalen', hint: 'Eerlijk', next: 'c7b' },
      ],
      quiz: { q: 'Hoeveel kost de rode sjaal?', opts: ['Vijf euro', 'Zeven euro', 'Tien euro', 'Vijftien euro'], a: 2 } },

    c6b: { id: 'c6b', num: 6, title: 'Meer eten proeven',
      text: 'Je vindt een kraam met kaas. De man geeft gratis stukjes. Je proeft oude kaas en jonge kaas. De oude kaas is lekkerder. Je koopt een stuk.',
      vocab: [{ w: 'proeven', d: 'to taste' }, { w: 'gratis', d: 'free' }, { w: 'jong', d: 'young' }, { w: 'het stuk', d: 'the piece' }],
      choices: [
        { text: 'Naar de sjaalenkraam kijken', hint: 'Inkopen', next: 'c7a' },
        { text: 'Nog meer kramen bekijken', hint: 'Verkennen', next: 'c7b' },
      ],
      quiz: { q: 'Welke kaas koop je?', opts: ['Jonge kaas', 'Oude kaas', 'Zachte kaas', 'Geen kaas'], a: 1 } },

    c7a: { id: 'c7a', num: 7, title: 'Onderhandelen',
      text: 'Je vraagt: "Kan de sjaal ook voor acht euro?" De verkoper denkt na. "Oké, voor jou negen euro." Je lacht en zegt: "Akkoord!" Je betaalt negen euro.',
      vocab: [{ w: 'onderhandelen', d: 'to negotiate' }, { w: 'akkoord', d: 'agreed / deal' }, { w: 'betalen', d: 'to pay' }, { w: 'de verkoper', d: 'the seller' }],
      choices: [
        { text: 'Blij naar huis gaan', hint: 'Tevreden', next: 'c8a' },
        { text: 'Nog even rondlopen', hint: 'Genieten', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel betaal je uiteindelijk voor de sjaal?', opts: ['Acht euro', 'Negen euro', 'Tien euro', 'Twaalf euro'], a: 1 } },

    c7b: { id: 'c7b', num: 7, title: 'Gewoon kopen',
      text: 'Je besluit de volle prijs te betalen. Je geeft tien euro. De verkoper geeft je de sjaal in een papiertje. "Dank je wel! Fijne dag!" zegt hij.',
      vocab: [{ w: 'beslissen', d: 'to decide' }, { w: 'vol', d: 'full' }, { w: 'het papiertje', d: 'the paper wrapping' }, { w: 'fijne dag', d: 'have a nice day' }],
      choices: [
        { text: 'Naar huis gaan met je aankopen', hint: 'Klaar', next: 'c8a' },
        { text: 'Nog meer rondkijken', hint: 'Genieten', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel betaal je voor de sjaal?', opts: ['Acht euro', 'Negen euro', 'Tien euro', 'Twaalf euro'], a: 2 } },

    c8a: { id: 'c8a', num: 8, title: 'Op weg naar huis',
      text: 'Je mand is vol. Je hebt groente, een boek en een sjaal. Je bent blij met je dag. Maar dan voel je in je zak. Je portemonnee is weg!',
      vocab: [{ w: 'vol', d: 'full' }, { w: 'de zak', d: 'the pocket' }, { w: 'de portemonnee', d: 'the wallet' }, { w: 'weg', d: 'gone' }],
      choices: [
        { text: 'Snel teruggaan en zoeken', hint: 'Hoopvol', next: 'c9a' },
        { text: 'Naar de politie gaan op de markt', hint: 'Verstandig', next: 'c9b' },
      ],
      quiz: { q: 'Wat ontdek je als je weggaat?', opts: ['Je mand is stuk', 'Je sjaal is weg', 'Je portemonnee is weg', 'Je boek is weg'], a: 2 } },

    c8b: { id: 'c8b', num: 8, title: 'Nog een rondje',
      text: 'Je loopt nog één keer over de markt. Je koopt een bosje bloemen voor thuis. Ze zijn geel en vrolijk. Dan besluit je naar huis te gaan. Het is een mooie ochtend geweest.',
      vocab: [{ w: 'het bosje', d: 'the bunch' }, { w: 'de bloem', d: 'the flower' }, { w: 'geel', d: 'yellow' }, { w: 'vrolijk', d: 'cheerful' }],
      choices: [
        { text: 'Gelukkig naar huis lopen', hint: 'Tevreden', next: 'c9a' },
        { text: 'Eerst nog koffie drinken op de markt', hint: 'Genieten', next: 'c9b' },
      ],
      quiz: { q: 'Welke kleur hebben de bloemen die je koopt?', opts: ['Rood', 'Roze', 'Geel', 'Wit'], a: 2 } },

    c9a: { id: 'c9a', num: 9, title: 'De portemonnee',
      text: 'Je zoekt overal. Je gaat terug naar de sjaalenkraam. De verkoper lacht. "Hier! Iemand vond dit op de grond." Het is jouw portemonnee! Alles zit er nog in.',
      vocab: [{ w: 'overal', d: 'everywhere' }, { w: 'de grond', d: 'the ground' }, { w: 'iemand', d: 'someone' }, { w: 'alles', d: 'everything' }],
      choices: [
        { text: 'De verkoper hartelijk bedanken', hint: 'Dankbaar', next: 'c10g' },
        { text: 'Snel naar huis gaan', hint: 'Opgelucht', next: 'c10n' },
      ],
      quiz: { q: 'Wie vindt jouw portemonnee?', opts: ['De marktmeester', 'Een politieagent', 'Iemand bij de sjaalenkraam', 'Het kleine meisje'], a: 2 } },

    c9b: { id: 'c9b', num: 9, title: 'Zakkenroller',
      text: 'Je gaat naar de politiepost op de markt. De agent schrijft alles op. "Er zijn vandaag drie zakkenrollers gezien", zegt hij. Je portemonnee is weg. Je hebt geen geld meer.',
      vocab: [{ w: 'de zakkenroller', d: 'the pickpocket' }, { w: 'de politiepost', d: 'the police post' }, { w: 'de agent', d: 'the police officer' }, { w: 'gezien', d: 'seen' }],
      choices: [
        { text: 'Naar huis bellen om geld te lenen', hint: 'Hulp zoeken', next: 'c10n' },
        { text: 'Teleurgesteld naar huis lopen', hint: 'Verdrietig', next: 'c10b' },
      ],
      quiz: { q: 'Hoeveel zakkenrollers zijn er gezien op de markt?', opts: ['Eén', 'Twee', 'Drie', 'Vier'], a: 2 } },

    c10g: { id: 'c10g', num: 10, title: 'Een perfecte dag', ending: 'good',
      text: 'Je bedankt de verkoper met een warme handdruk. Je mand zit vol goede dingen. Je hebt groente gekocht, een kind geholpen en een goede sjaal gevonden. Thuis zet je de bloemen in een vaas. Het was een perfecte zaterdagochtend.',
      vocab: [{ w: 'de handdruk', d: 'the handshake' }, { w: 'perfect', d: 'perfect' }, { w: 'de zaterdagochtend', d: 'Saturday morning' }, { w: 'zetten', d: 'to put / place' }],
      choices: [],
      quiz: { q: 'Wat doe je thuis met de bloemen?', opts: ['Je gooit ze weg', 'Je geeft ze aan een buur', 'Je zet ze in een vaas', 'Je droogt ze'], a: 2 } },

    c10n: { id: 'c10n', num: 10, title: 'Een gewone dag', ending: 'neutral',
      text: 'Je loopt naar huis. Je mand is niet zo vol als je had gehoopt. Maar je hebt leuke dingen gezien en lekker gegeten. Volgende week ga je weer naar de markt. Dan let je beter op je spullen.',
      vocab: [{ w: 'gehoopt', d: 'hoped' }, { w: 'leuk', d: 'fun / nice' }, { w: 'volgende week', d: 'next week' }, { w: 'letten op', d: 'to pay attention to' }],
      choices: [],
      quiz: { q: 'Wanneer ga je weer naar de markt?', opts: ['Morgen', 'Over twee dagen', 'Volgende week', 'Volgende maand'], a: 2 } },

    c10b: { id: 'c10b', num: 10, title: 'Een slechte dag', ending: 'bad',
      text: 'Je loopt verdrietig naar huis. Je portemonnee is weg met al je geld. Je moet de dag vroeg beëindigen. Thuis bel je je bank om de kaart te blokkeren. Wat een rotdag!',
      vocab: [{ w: 'beëindigen', d: 'to end' }, { w: 'blokkeren', d: 'to block' }, { w: 'de kaart', d: 'the card' }, { w: 'de rotdag', d: 'the rotten day' }],
      choices: [],
      quiz: { q: 'Wat doe je als eerste als je thuis bent?', opts: ['Slapen', 'Eten koken', 'Je bank bellen', 'Tv kijken'], a: 2 } },
  },
};
