import type { Story } from './types';

export const storyNlA1_6: Story = {
  id: 'nl-a1-6', level: 'A1', title: 'De Nieuwe Buurvrouw', genre: 'Vriendschap', emoji: '👋',
  coverColor: '#1e3a2a', accentColor: '#60b890',
  description: 'Je nieuwe buurvrouw heeft hulp nodig. Kun jij haar helpen?',
  startChapter: 'c1',
  chapters: {
    c1: { id: 'c1', num: 1, title: 'Een nieuwe buur',
      text: 'Je woont in een flat. Er is een nieuwe buurvrouw. Ze heet mevrouw De Vries. Ze is oud en vriendelijk. Ze heeft veel dozen bij de deur. Je zegt: "Goedemiddag! Kan ik helpen?"',
      vocab: [{ w: 'de buurvrouw', d: 'the (female) neighbour' }, { w: 'de doos', d: 'the box' }, { w: 'oud', d: 'old' }, { w: 'helpen', d: 'to help' }],
      choices: [
        { text: 'Dozen voor haar naar binnen dragen', hint: 'Behulpzaam', next: 'c2a' },
        { text: 'Vragen of ze thee wil drinken', hint: 'Vriendelijk', next: 'c2b' },
      ],
      quiz: { q: 'Hoe heet de nieuwe buurvrouw?', opts: ['Mevrouw Jansen', 'Mevrouw De Vries', 'Mevrouw Bakker', 'Mevrouw Peters'], a: 1 } },

    c2a: { id: 'c2a', num: 2, title: 'Dozen dragen',
      text: 'Je draagt de dozen naar binnen. Ze zijn zwaar! Mevrouw De Vries lacht. "Dank je wel! Jij bent sterk." Je ziet haar woonkamer. Hij is leeg maar mooi.',
      vocab: [{ w: 'dragen', d: 'to carry' }, { w: 'zwaar', d: 'heavy' }, { w: 'sterk', d: 'strong' }, { w: 'leeg', d: 'empty' }],
      choices: [
        { text: 'Een schilderij voor haar ophangen', hint: 'Handig', next: 'c3a' },
        { text: 'Vragen waar de dozen naartoe moeten', hint: 'Praktisch', next: 'c3b' },
      ],
      quiz: { q: 'Hoe zijn de dozen?', opts: ['Licht', 'Zwaar', 'Klein', 'Leeg'], a: 1 } },

    c2b: { id: 'c2b', num: 2, title: 'Thee drinken',
      text: 'Mevrouw De Vries zegt: "Wat lief! Ja graag." Jullie drinken thee in haar keuken. Ze vertelt over haar kat. "Mijn kat Poes is ook hier." Je ziet een kleine oranje kat.',
      vocab: [{ w: 'lief', d: 'sweet / kind' }, { w: 'de keuken', d: 'the kitchen' }, { w: 'vertellen', d: 'to tell' }, { w: 'de kat', d: 'the cat' }],
      choices: [
        { text: 'Aanbieden om dozen in te pakken', hint: 'Handig', next: 'c3a' },
        { text: 'Vragen of ze hulp nodig heeft vandaag', hint: 'Attent', next: 'c3b' },
      ],
      quiz: { q: 'Wat heeft mevrouw De Vries?', opts: ['Een hond', 'Een kat', 'Een vogel', 'Een konijn'], a: 1 } },

    c3a: { id: 'c3a', num: 3, title: 'Het schilderij',
      text: 'Mevrouw De Vries heeft een groot schilderij. "Waar wil je het hebben?" vraag je. "Daar, aan die muur." Je hangt het op. Het ziet er mooi uit.',
      vocab: [{ w: 'het schilderij', d: 'the painting' }, { w: 'de muur', d: 'the wall' }, { w: 'ophangen', d: 'to hang up' }, { w: 'mooi', d: 'beautiful' }],
      choices: [
        { text: 'Haar helpen de weg naar het postkantoor te vinden', hint: 'Behulpzaam', next: 'c4a' },
        { text: 'Samen de woonkamer inrichten', hint: 'Gezellig', next: 'c4b' },
      ],
      quiz: { q: 'Wat hang je op voor mevrouw De Vries?', opts: ['Een lamp', 'Een kalender', 'Een schilderij', 'Een spiegel'], a: 2 } },

    c3b: { id: 'c3b', num: 3, title: 'Dozen uitpakken',
      text: 'Jullie pakken dozen uit. Er zijn boeken, borden en foto\'s. Mevrouw De Vries houdt een foto vast. "Dit is mijn man. Hij is dood." Ze kijkt verdrietig.',
      vocab: [{ w: 'uitpakken', d: 'to unpack' }, { w: 'het bord', d: 'the plate' }, { w: 'de foto', d: 'the photo' }, { w: 'verdrietig', d: 'sad' }],
      choices: [
        { text: 'Haar hand vasthouden en luisteren', hint: 'Vriendelijk', next: 'c4a' },
        { text: 'Snel over iets anders praten', hint: 'Afleiden', next: 'c4b' },
      ],
      quiz: { q: 'Wat zit er in de dozen?', opts: ['Kleren en schoenen', 'Boeken, borden en foto\'s', 'Speelgoed en spellen', 'Voedsel en drank'], a: 1 } },

    c4a: { id: 'c4a', num: 4, title: 'Naar het postkantoor',
      text: 'Mevrouw De Vries vraagt: "Waar is het postkantoor?" Je weet het. "Ik ga met je mee!" Jullie lopen samen door de straat. Ze loopt langzaam maar ze praat veel.',
      vocab: [{ w: 'het postkantoor', d: 'the post office' }, { w: 'de straat', d: 'the street' }, { w: 'langzaam', d: 'slowly' }, { w: 'samen', d: 'together' }],
      choices: [
        { text: 'Haar telefoon helpen instellen', hint: 'Modern', next: 'c5a' },
        { text: 'Een broodje eten bij de bakker', hint: 'Gezellig', next: 'c5b' },
      ],
      quiz: { q: 'Hoe lopen jullie naar het postkantoor?', opts: ['Met de auto', 'Met de bus', 'Op de fiets', 'Te voet'], a: 3 } },

    c4b: { id: 'c4b', num: 4, title: 'De woonkamer',
      text: 'Jullie zetten meubels op de goede plek. De bank gaat bij het raam. De tafel staat in het midden. Mevrouw De Vries klapt in haar handen. "Prachtig!"',
      vocab: [{ w: 'het meubel', d: 'the piece of furniture' }, { w: 'de bank', d: 'the sofa' }, { w: 'het raam', d: 'the window' }, { w: 'prachtig', d: 'wonderful' }],
      choices: [
        { text: 'Haar helpen haar telefoon te repareren', hint: 'Technisch', next: 'c5a' },
        { text: 'Gaan lunchen bij de bakker', hint: 'Hongerig', next: 'c5b' },
      ],
      quiz: { q: 'Waar zetten jullie de bank?', opts: ['Naast de deur', 'In de keuken', 'Bij het raam', 'In de hal'], a: 2 } },

    c5a: { id: 'c5a', num: 5, title: 'De telefoon',
      text: 'Mevrouw De Vries heeft een oude telefoon. "Hij doet het niet goed." Je kijkt ernaar. Het probleem is de wifi. Je zet de wifi aan. Nu werkt hij weer.',
      vocab: [{ w: 'de telefoon', d: 'the phone' }, { w: 'het probleem', d: 'the problem' }, { w: 'de wifi', d: 'the wifi' }, { w: 'werken', d: 'to work' }],
      choices: [
        { text: 'Haar leren hoe ze kan bellen', hint: 'Geduldig', next: 'c6a' },
        { text: 'Apps voor haar installeren', hint: 'Handig', next: 'c6b' },
      ],
      quiz: { q: 'Wat is het probleem met de telefoon?', opts: ['De batterij is leeg', 'De wifi staat uit', 'Het scherm is kapot', 'De telefoon is oud'], a: 1 } },

    c5b: { id: 'c5b', num: 5, title: 'Bij de bakker',
      text: 'Jullie gaan naar de bakker op de hoek. Je koopt twee broodjes. Mevrouw De Vries neemt een kop koffie. "Wat een fijne buurt", zegt ze.',
      vocab: [{ w: 'de bakker', d: 'the baker / bakery' }, { w: 'het broodje', d: 'the bread roll' }, { w: 'de koffie', d: 'the coffee' }, { w: 'de buurt', d: 'the neighbourhood' }],
      choices: [
        { text: 'Haar vertellen over de buurt', hint: 'Informatief', next: 'c6a' },
        { text: 'Samen teruglopen naar de flat', hint: 'Rustig', next: 'c6b' },
      ],
      quiz: { q: 'Wat koopt mevrouw De Vries bij de bakker?', opts: ['Een broodje', 'Een taart', 'Een kop koffie', 'Een koekje'], a: 2 } },

    c6a: { id: 'c6a', num: 6, title: 'De buurt',
      text: 'Je vertelt mevrouw De Vries alles over de buurt. De supermarkt is links. De bibliotheek is rechts. Ze luistert goed en schrijft alles op.',
      vocab: [{ w: 'de supermarkt', d: 'the supermarket' }, { w: 'de bibliotheek', d: 'the library' }, { w: 'links', d: 'left' }, { w: 'rechts', d: 'right' }],
      choices: [
        { text: 'Haar meenemen naar de supermarkt', hint: 'Praktisch', next: 'c7a' },
        { text: 'Vragen of ze morgen wil eten', hint: 'Vriendelijk', next: 'c7b' },
      ],
      quiz: { q: 'Waar is de bibliotheek?', opts: ['Links', 'Rechts', 'Recht vooruit', 'Achter jullie'], a: 1 } },

    c6b: { id: 'c6b', num: 6, title: 'Terug in de flat',
      text: 'Jullie zijn weer thuis. Mevrouw De Vries is moe. "Ik ga even uitrusten." Je zegt: "Roep me als je iets nodig hebt." Ze knikt en glimlacht.',
      vocab: [{ w: 'moe', d: 'tired' }, { w: 'uitrusten', d: 'to rest' }, { w: 'roepen', d: 'to call out' }, { w: 'glimlachen', d: 'to smile' }],
      choices: [
        { text: 'Later terugkomen met eten', hint: 'Zorgzaam', next: 'c7a' },
        { text: 'Haar een briefje schrijven', hint: 'Attent', next: 'c7b' },
      ],
      quiz: { q: 'Hoe voelt mevrouw De Vries?', opts: ['Blij', 'Boos', 'Moe', 'Ziek'], a: 2 } },

    c7a: { id: 'c7a', num: 7, title: 'Boodschappen doen',
      text: 'Jullie gaan naar de supermarkt. Mevrouw De Vries koopt groente, brood en melk. Ze weet niet waar de suiker is. Jij weet het wel en je laat het haar zien.',
      vocab: [{ w: 'de groente', d: 'the vegetables' }, { w: 'de melk', d: 'the milk' }, { w: 'de suiker', d: 'the sugar' }, { w: 'laten zien', d: 'to show' }],
      choices: [
        { text: 'Haar tassen naar huis dragen', hint: 'Sterk', next: 'c8a' },
        { text: 'Samen koken vanavond', hint: 'Gezellig', next: 'c8b' },
      ],
      quiz: { q: 'Wat koopt mevrouw De Vries niet?', opts: ['Groente', 'Brood', 'Melk', 'Kaas'], a: 3 } },

    c7b: { id: 'c7b', num: 7, title: 'Het briefje',
      text: 'Je schrijft een briefje voor mevrouw De Vries. "Hallo! Ik ben je buurman/buurvrouw. Bel me als je hulp nodig hebt." Je legt het voor haar deur.',
      vocab: [{ w: 'het briefje', d: 'the note' }, { w: 'schrijven', d: 'to write' }, { w: 'bellen', d: 'to call' }, { w: 'de deur', d: 'the door' }],
      choices: [
        { text: 'Wachten of ze belt', hint: 'Geduldig', next: 'c8a' },
        { text: 'Later kloppen om te vragen hoe het gaat', hint: 'Actief', next: 'c8b' },
      ],
      quiz: { q: 'Wat schrijf je op het briefje?', opts: ['Je naam en adres', 'Je telefoonnummer en hulpaanbod', 'Een recept', 'Een uitnodiging'], a: 1 } },

    c8a: { id: 'c8a', num: 8, title: 'Een ongeluk',
      text: 'Je bent bij mevrouw De Vries thuis. Je pakt een doos van de plank. Je stoot iets om. Een vaas valt op de grond. Hij is kapot!',
      vocab: [{ w: 'de plank', d: 'the shelf' }, { w: 'omstoten', d: 'to knock over' }, { w: 'de vaas', d: 'the vase' }, { w: 'kapot', d: 'broken' }],
      choices: [
        { text: 'Meteen sorry zeggen en uitleggen', hint: 'Eerlijk', next: 'c9a' },
        { text: 'De scherven snel opruimen', hint: 'Praktisch', next: 'c9b' },
      ],
      quiz: { q: 'Wat valt er op de grond?', opts: ['Een bord', 'Een glas', 'Een vaas', 'Een foto'], a: 2 } },

    c8b: { id: 'c8b', num: 8, title: 'Koken samen',
      text: 'Jullie koken soep in de keuken. Mevrouw De Vries snijdt de groente. Jij roert in de pan. Het ruikt heerlijk. Poes de kat kijkt toe.',
      vocab: [{ w: 'de soep', d: 'the soup' }, { w: 'snijden', d: 'to cut' }, { w: 'roeren', d: 'to stir' }, { w: 'heerlijk', d: 'delicious' }],
      choices: [
        { text: 'Aan tafel gaan eten', hint: 'Gezellig', next: 'c9a' },
        { text: 'Mevrouw vragen of ze iets mist in de buurt', hint: 'Nieuwsgierig', next: 'c9b' },
      ],
      quiz: { q: 'Wat maken jullie in de keuken?', opts: ['Pasta', 'Soep', 'Salade', 'Rijst'], a: 1 } },

    c9a: { id: 'c9a', num: 9, title: 'Sorry zeggen',
      text: 'Je zegt sorry voor de vaas. "Het geeft niet", zegt mevrouw De Vries vriendelijk. "Jij helpt mij zo veel. Dat is veel meer waard." Ze knijpt even in je hand.',
      vocab: [{ w: 'sorry', d: 'sorry' }, { w: 'het geeft niet', d: 'it doesn\'t matter' }, { w: 'waard', d: 'worth' }, { w: 'knijpen', d: 'to squeeze' }],
      choices: [
        { text: 'Beloven een nieuwe vaas te kopen', hint: 'Eerlijk', next: 'c10g' },
        { text: 'Blij zijn dat ze niet boos is', hint: 'Opgelucht', next: 'c10n' },
      ],
      quiz: { q: 'Hoe reageert mevrouw De Vries op je sorry?', opts: ['Ze is boos', 'Ze huilt', 'Ze zegt het geeft niet', 'Ze zegt niets'], a: 2 } },

    c9b: { id: 'c9b', num: 9, title: 'De vaas',
      text: 'Je ruimt de scherven op. Mevrouw De Vries ziet het. Haar gezicht wordt rood. "Dat was mijn lievelingsvaas!" Ze kijkt boos. Je voelt je schuldig.',
      vocab: [{ w: 'de scherf', d: 'the shard' }, { w: 'opruimen', d: 'to tidy up' }, { w: 'de lievelingsvaas', d: 'the favourite vase' }, { w: 'schuldig', d: 'guilty' }],
      choices: [
        { text: 'Aanbieden een nieuwe vaas te kopen', hint: 'Eerlijk', next: 'c10n' },
        { text: 'Weglopen en haar alleen laten', hint: 'Laf', next: 'c10b' },
      ],
      quiz: { q: 'Hoe voelt mevrouw De Vries als ze de kapotte vaas ziet?', opts: ['Blij', 'Verdrietig', 'Boos', 'Verrast'], a: 2 } },

    c10g: { id: 'c10g', num: 10, title: 'Een echte vriendin', ending: 'good',
      text: 'Je koopt een nieuwe vaas voor mevrouw De Vries. Ze is heel blij. De volgende dag klopt ze op jouw deur. "Ik heb een taart gebakken voor jou!" De taart is lekker en warm. "Jij bent de beste buurman die ik ooit had", zegt ze. Je lacht. Dit is een echte vriendschap.',
      vocab: [{ w: 'de taart', d: 'the cake' }, { w: 'bakken', d: 'to bake' }, { w: 'de vriendschap', d: 'the friendship' }, { w: 'de beste', d: 'the best' }],
      choices: [],
      quiz: { q: 'Wat brengt mevrouw De Vries als bedankje?', opts: ['Bloemen', 'Een taart', 'Een fles wijn', 'Een boek'], a: 1 } },

    c10n: { id: 'c10n', num: 10, title: 'Een beetje beter', ending: 'neutral',
      text: 'Mevrouw De Vries is nog een beetje boos, maar ze is ook dankbaar voor je hulp. "Je hebt veel gedaan vandaag", zegt ze. Jullie zeggen welterusten. De vriendschap groeit langzaam maar zeker.',
      vocab: [{ w: 'dankbaar', d: 'grateful' }, { w: 'welterusten', d: 'good night' }, { w: 'groeien', d: 'to grow' }, { w: 'zeker', d: 'certainly' }],
      choices: [],
      quiz: { q: 'Hoe eindigt de dag?', opts: ['Met ruzie', 'Met een feestje', 'Met welterusten zeggen', 'Met huilen'], a: 2 } },

    c10b: { id: 'c10b', num: 10, title: 'Een slechte dag', ending: 'bad',
      text: 'Je loopt weg zonder iets te zeggen. Mevrouw De Vries is erg verdrietig en boos. Ze groet je niet meer in de gang. Je voelt je slecht. Je hebt haar lievelingsvaas gebroken en nu is de vriendschap kapot.',
      vocab: [{ w: 'weglopen', d: 'to walk away' }, { w: 'groeten', d: 'to greet' }, { w: 'de gang', d: 'the hallway' }, { w: 'slecht', d: 'bad' }],
      choices: [],
      quiz: { q: 'Wat doet mevrouw De Vries daarna in de gang?', opts: ['Ze groet je vriendelijk', 'Ze groet je niet meer', 'Ze geeft je een cadeautje', 'Ze praat veel met je'], a: 1 } },
  },
};
