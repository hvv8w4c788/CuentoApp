import type { Story } from './types';

export const storyNlA1_3: Story = {
  id: 'nl-a1-3',
  level: 'A1',
  title: 'Het Verjaardagsfeest',
  genre: 'Familie',
  emoji: '🎂',
  coverColor: '#3d1a2e',
  accentColor: '#e87db8',
  description: 'Vandaag is het de verjaardag van je moeder. Organiseer het beste feest ooit!',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Moeders verjaardag',
      text: 'Vandaag is het de verjaardag van je moeder. Zij wordt vijftig jaar oud.\n\nJij bent Emma en je wilt een verrassing organiseren. Je moeder weet nog niets.\n\nJe staat in de keuken met een lijst. Er is veel te doen.\n\nWat doe je eerst?',
      vocab: [
        { w: 'de verjaardag', d: 'the birthday' },
        { w: 'de verrassing', d: 'the surprise' },
        { w: 'organiseren', d: 'to organise' },
        { w: 'de lijst', d: 'the list' },
      ],
      choices: [
        { text: 'Bel de familie om iedereen uit te nodigen', hint: 'Familie', next: 'c2a' },
        { text: 'Ga eerst de taart kopen in de winkel', hint: 'Taart', next: 'c2b' },
      ],
      quiz: { q: 'Hoe oud wordt de moeder van Emma?', opts: ['Veertig', 'Vijfenveertig', 'Vijftig', 'Vijfenvijftig'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Familie bellen',
      text: 'Je belt tante Roos en oom Jan. "Kom vanavond om zeven uur. Vertel niets aan mama!"\n\nTante Roos is enthousiast. "Wij komen! Ik breng bloemen mee."\n\nJe belt ook je broer Daan. Hij zegt: "Ik kom en ik breng champagne."',
      vocab: [
        { w: 'de tante', d: 'the aunt' },
        { w: 'de oom', d: 'the uncle' },
        { w: 'de broer', d: 'the brother' },
        { w: 'de champagne', d: 'the champagne' },
      ],
      choices: [
        { text: 'Ga nu de taart ophalen in de bakkerij', hint: 'Taart', next: 'c3a' },
        { text: 'Begin met het versieren van het huis', hint: 'Versieren', next: 'c3b' },
      ],
      quiz: { q: 'Wat brengt tante Roos mee?', opts: ['Taart', 'Champagne', 'Bloemen', 'Een cadeau'], a: 2 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Naar de bakkerij',
      text: 'Je loopt naar de bakkerij op de hoek. Er ruikt het heerlijk naar brood en taart.\n\nJe bestelt een grote chocoladetaart met vijftig kaarsjes.\n\nDe bakker zegt: "Klaar om vier uur. Dan kunt u hem ophalen."',
      vocab: [
        { w: 'de bakkerij', d: 'the bakery' },
        { w: 'ruiken', d: 'to smell' },
        { w: 'de chocoladetaart', d: 'the chocolate cake' },
        { w: 'het kaarsje', d: 'the (little) candle' },
      ],
      choices: [
        { text: 'Bel nu de familie om uit te nodigen', hint: 'Familie', next: 'c3a' },
        { text: 'Begin met het versieren van het huis', hint: 'Versieren', next: 'c3b' },
      ],
      quiz: { q: 'Hoeveel kaarsjes zijn er op de taart?', opts: ['Veertig', 'Vijfenveertig', 'Vijftig', 'Zestig'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'De taart ophalen',
      text: 'Je gaat om vier uur naar de bakkerij. De taart is klaar en hij is prachtig.\n\nMaar de doos is groot en zwaar. Je loopt langzaam naar huis.\n\nPlotseling regent het. Je beschermt de taartdoos met je jas.',
      vocab: [
        { w: 'prachtig', d: 'beautiful / magnificent' },
        { w: 'zwaar', d: 'heavy' },
        { w: 'regenen', d: 'to rain' },
        { w: 'beschermen', d: 'to protect' },
      ],
      choices: [
        { text: 'Loop snel naar huis met de taart', hint: 'Snel', next: 'c4a' },
        { text: 'Wacht even onder een afdak', hint: 'Droog', next: 'c4b' },
      ],
      quiz: { q: 'Wat gebeurt er als Emma de taart draagt?', opts: ['Ze valt', 'Het regent', 'Ze vergeet hem', 'De doos breekt'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Het huis versieren',
      text: 'Je haalt ballonnen en slingers uit de kast. Je plakt ze op de muren en het plafond.\n\nHet huis ziet er feestelijk uit. Rood, roze en goud — de kleuren van mama.\n\nMaar je hebt de taart nog niet opgehaald. Het is al drie uur!',
      vocab: [
        { w: 'de ballon', d: 'the balloon' },
        { w: 'de slinger', d: 'the garland / streamer' },
        { w: 'het plafond', d: 'the ceiling' },
        { w: 'feestelijk', d: 'festive' },
      ],
      choices: [
        { text: 'Ga snel de taart ophalen bij de bakkerij', hint: 'Snel', next: 'c4a' },
        { text: 'Stuur je broer om de taart te halen', hint: 'Hulp', next: 'c4b' },
      ],
      quiz: { q: 'Welke kleuren gebruikt Emma voor de versiering?', opts: ['Blauw, groen en wit', 'Rood, roze en goud', 'Geel, oranje en paars', 'Zwart, wit en grijs'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Gasten komen',
      text: 'Om zeven uur belt de deurbel. De gasten zijn er! Tante Roos, oom Jan en broer Daan.\n\nJedereen spreekt zacht. Mama weet nog niets.\n\n"Ze is over vijf minuten thuis", fluistert Daan.',
      vocab: [
        { w: 'de deurbel', d: 'the doorbell' },
        { w: 'de gast', d: 'the guest' },
        { w: 'spreken', d: 'to speak' },
        { w: 'fluisteren', d: 'to whisper' },
      ],
      choices: [
        { text: 'Doe de lichten uit voor de verrassing', hint: 'Spannend', next: 'c5a' },
        { text: 'Zet muziek aan voor een feestelijke sfeer', hint: 'Vrolijk', next: 'c5b' },
      ],
      quiz: { q: 'Wat doet iedereen terwijl ze wachten op mama?', opts: ['Ze zingen', 'Ze spreken zacht', 'Ze eten taart', 'Ze gaan zitten'], a: 1 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Bijna klaar',
      text: 'Je broer haalt de taart op. Jij maakt het huis verder klaar. Je zet glazen op tafel.\n\nDaan komt terug met de taart. Hij lacht. "De taart is perfect."\n\nNu is alles klaar voor mama.',
      vocab: [
        { w: 'verder', d: 'further / additionally' },
        { w: 'de glazen', d: 'the glasses' },
        { w: 'de tafel', d: 'the table' },
        { w: 'perfect', d: 'perfect' },
      ],
      choices: [
        { text: 'Doe de lichten uit voor de verrassing', hint: 'Spannend', next: 'c5a' },
        { text: 'Geef iedereen een taak voor de verrassing', hint: 'Georganiseerd', next: 'c5b' },
      ],
      quiz: { q: 'Wat zet Emma op tafel?', opts: ['Borden', 'Glazen', 'Bloemen', 'Kaarsjes'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'De verrassing',
      text: 'Iedereen staat stil in het donkere huis. Je houd de taart vast.\n\nDe deur gaat open. Mama komt binnen.\n\n"VERRASSING!" roepen jullie allemaal. Mama schrikt en dan lacht ze. Ze heeft tranen in haar ogen.',
      vocab: [
        { w: 'stil', d: 'still / silent' },
        { w: 'donker', d: 'dark' },
        { w: 'tranen', d: 'tears' },
        { w: 'de ogen', d: 'the eyes' },
      ],
      choices: [
        { text: 'Geef mama de taart meteen', hint: 'Feest', next: 'c6a' },
        { text: 'Omhels mama eerst heel lang', hint: 'Liefde', next: 'c6b' },
      ],
      quiz: { q: 'Hoe reageert mama op de verrassing?', opts: ['Ze is boos', 'Ze is verdrietig', 'Ze schrikt en lacht dan', 'Ze is niet verrast'], a: 2 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Het feest begint',
      text: 'Iedereen staat klaar bij de deur. De muziek speelt zacht.\n\nMama komt binnen en ziet alle mensen en ballonnen.\n\n"O, wat mooi!" zegt ze. Haar wangen zijn rood van vreugde.',
      vocab: [
        { w: 'klaarstaan', d: 'to be ready / to stand by' },
        { w: 'de muziek', d: 'the music' },
        { w: 'de vreugde', d: 'the joy' },
        { w: 'mooi', d: 'beautiful / nice' },
      ],
      choices: [
        { text: 'Geef mama de taart en zing samen', hint: 'Feest', next: 'c6a' },
        { text: 'Vertel mama hoe je alles hebt georganiseerd', hint: 'Trots', next: 'c6b' },
      ],
      quiz: { q: 'Hoe zijn de wangen van mama?', opts: ['Bleek', 'Rood van vreugde', 'Nat van tranen', 'Bleek van schrik'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Gelukkige verjaardag',
      text: 'Je brengt de taart. Iedereen zingt "Lang zal ze leven".\n\nMama blaast de vijftig kaarsjes uit. Niet in één keer, maar bijna.\n\nZe lacht: "Dit is de mooiste verjaardag ooit!" Iedereen klapt.',
      vocab: [
        { w: 'zingen', d: 'to sing' },
        { w: 'uitblazen', d: 'to blow out' },
        { w: 'klappen', d: 'to clap' },
        { w: 'ooit', d: 'ever' },
      ],
      choices: [
        { text: 'Snijd de taart aan en geef iedereen een stuk', hint: 'Delen', next: 'c7a' },
        { text: 'Geef mama haar cadeau nu', hint: 'Cadeau', next: 'c7b' },
      ],
      quiz: { q: 'Lukt het mama om alle kaarsjes in één keer uit te blazen?', opts: ['Ja, alle vijftig', 'Bijna, maar niet helemaal', 'Nee, ze heeft hulp nodig', 'Ze blaast er geen uit'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Het verhaal',
      text: 'Je vertelt mama hoe je alles hebt georganiseerd. Ze luistert en lacht.\n\n"Jij hebt al dit zelf gedaan? Wat een lief kind ben jij!" — zegt ze.\n\nTante Roos zegt: "Ze heeft zo hard gewerkt."',
      vocab: [
        { w: 'vertellen', d: 'to tell' },
        { w: 'lief', d: 'sweet / dear' },
        { w: 'hard werken', d: 'to work hard' },
        { w: 'het kind', d: 'the child' },
      ],
      choices: [
        { text: 'Zet nu de taart neer en zing samen', hint: 'Feest', next: 'c7a' },
        { text: 'Geef mama haar cadeau', hint: 'Cadeau', next: 'c7b' },
      ],
      quiz: { q: 'Wat zegt tante Roos over Emma?', opts: ['Ze is slim', 'Ze heeft hard gewerkt', 'Ze is mooi', 'Ze zingt goed'], a: 1 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'De taart aansnijden',
      text: 'Je snijdt de chocoladetaart in stukken. Iedereen krijgt een groot stuk.\n\nDe taart is heerlijk. Mama eet twee stukken. Dat doet ze bijna nooit!\n\n"De bakker heeft zijn best gedaan", zegt oom Jan.',
      vocab: [
        { w: 'aansnijden', d: 'to cut / to slice' },
        { w: 'heerlijk', d: 'delicious' },
        { w: 'nooit', d: 'never' },
        { w: 'zijn best doen', d: 'to do one\'s best' },
      ],
      choices: [
        { text: 'Speel een spel met de familie', hint: 'Spelen', next: 'c8a' },
        { text: 'Praat met mama in de keuken', hint: 'Persoonlijk', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel stukken taart eet mama?', opts: ['Één', 'Twee', 'Drie', 'Geen'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Het cadeau',
      text: 'Je geeft mama een groot pakje. Ze maakt het langzaam open.\n\nHet is een fotoboek met foto\'s van de familie. Mama begint te huilen van blijdschap.\n\n"Dit is het mooiste cadeau ooit", fluistert ze.',
      vocab: [
        { w: 'het pakje', d: 'the package / parcel' },
        { w: 'het fotoboek', d: 'the photo book' },
        { w: 'huilen', d: 'to cry' },
        { w: 'de blijdschap', d: 'the joy / happiness' },
      ],
      choices: [
        { text: 'Kijk samen door het fotoboek', hint: 'Herinneringen', next: 'c8a' },
        { text: 'Zing nu samen een liedje', hint: 'Feest', next: 'c8b' },
      ],
      quiz: { q: 'Wat zit er in het cadeau?', opts: ['Een jurk', 'Sieraden', 'Een fotoboek', 'Bloemen'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Familietijd',
      text: 'De familie zit samen aan de tafel. Ze praten en lachen.\n\nOom Jan vertelt een grappig verhaal over mama vroeger. Iedereen lacht hard.\n\nMama slaat haar hand voor haar mond: "Jan! Dat vertel je niet!"',
      vocab: [
        { w: 'grappig', d: 'funny' },
        { w: 'vroeger', d: 'in the past / before' },
        { w: 'hard lachen', d: 'to laugh loudly' },
        { w: 'het verhaal', d: 'the story' },
      ],
      choices: [
        { text: 'Vraag mama naar haar mooiste herinnering', hint: 'Persoonlijk', next: 'c9a' },
        { text: 'Snijd meer taart aan voor iedereen', hint: 'Feest', next: 'c9b' },
      ],
      quiz: { q: 'Wat vertelt oom Jan?', opts: ['Een triest verhaal', 'Een grappig verhaal over mama', 'Een verhaal over zijn werk', 'Een verhaal over Emma'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Liedje zingen',
      text: 'Daan haalt zijn gitaar. Iedereen zingt samen een liedje.\n\nMama zingt ook en ze heeft een mooie stem. Je wist dat niet.\n\n"Mama, jij zingt zo mooi!" zeg je. Ze glimlacht verlegen.',
      vocab: [
        { w: 'de gitaar', d: 'the guitar' },
        { w: 'de stem', d: 'the voice' },
        { w: 'verlegen', d: 'shy / bashful' },
        { w: 'weten', d: 'to know' },
      ],
      choices: [
        { text: 'Vraag mama naar haar mooiste herinnering', hint: 'Persoonlijk', next: 'c9a' },
        { text: 'Zing nog een liedje samen', hint: 'Muziek', next: 'c9b' },
      ],
      quiz: { q: 'Wat ontdekt Emma over haar moeder?', opts: ['Ze danst goed', 'Ze heeft een mooie stem', 'Ze speelt gitaar', 'Ze schildert graag'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Mooi moment',
      text: 'Je zit alleen met mama. "Wat is jouw mooiste herinnering?" vraag je.\n\nZe denkt na. "De dag dat jij geboren werd. Dat is de mooiste dag."\n\nJe omhelst haar lang. Je voelt je warm van binnen.',
      vocab: [
        { w: 'de herinnering', d: 'the memory' },
        { w: 'geboren worden', d: 'to be born' },
        { w: 'warm', d: 'warm' },
        { w: 'van binnen', d: 'inside / inwardly' },
      ],
      choices: [
        { text: 'Ga terug naar de gasten, het is laat', hint: 'Feest', next: 'c10g' },
        { text: 'Blijf even met mama praten', hint: 'Persoonlijk', next: 'c10n' },
      ],
      quiz: { q: 'Wat is de mooiste herinnering van mama?', opts: ['Haar eigen verjaardag', 'De dag dat Emma geboren werd', 'Haar bruiloft', 'Een vakantie'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Het feest gaat door',
      text: 'Het is tien uur. De gasten zijn moe, maar niemand wil naar huis.\n\nMama drinkt thee en lacht veel. Tante Roos zegt: "Dit is het beste feest ooit."\n\nJe bent trots. Je hebt het goed gedaan vandaag.',
      vocab: [
        { w: 'niemand', d: 'nobody' },
        { w: 'moe', d: 'tired' },
        { w: 'trots', d: 'proud' },
        { w: 'het beste', d: 'the best' },
      ],
      choices: [
        { text: 'Breng de gasten naar de deur en zeg goedenacht', hint: 'Afsluiten', next: 'c10g' },
        { text: 'Laat iedereen rustig naar huis gaan', hint: 'Rustig', next: 'c10n' },
      ],
      quiz: { q: 'Hoe laat is het tijdens het feest?', opts: ['Acht uur', 'Negen uur', 'Tien uur', 'Elf uur'], a: 2 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Het perfecte feest', ending: 'good',
      text: 'De gasten gaan naar huis. Mama omhelst jou als laatste.\n\n"Emma, dank je wel voor dit prachtige feest. Ik ben zo trots op jou."\n\nZe huilt een beetje van geluk. Jij ook.\n\nHet was het perfecte feest. En mama wist helemaal niets van tevoren.',
      vocab: [
        { w: 'als laatste', d: 'last of all' },
        { w: 'van tevoren', d: 'in advance / beforehand' },
        { w: 'het geluk', d: 'the happiness' },
        { w: 'prachtig', d: 'magnificent / wonderful' },
      ],
      choices: [],
      quiz: { q: 'Wat zegt mama aan het einde?', opts: ['Ze is boos', 'Ze is moe', 'Ze is trots op Emma', 'Ze wist alles al'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een goed feest', ending: 'neutral',
      text: 'De gasten vertrekken. Mama is blij, maar een beetje moe.\n\n"Het was een mooi feest, Emma. Maar ik wist het al van Daan."\n\nJe kijkt naar je broer. Daan haalt zijn schouders op. "Sorry."\n\nHet feest was goed, maar de verrassing was niet perfect.',
      vocab: [
        { w: 'vertrekken', d: 'to leave / to depart' },
        { w: 'de schouders ophalen', d: 'to shrug' },
        { w: 'al', d: 'already' },
        { w: 'niet perfect', d: 'not perfect' },
      ],
      choices: [],
      quiz: { q: 'Wie heeft de verrassing al verteld aan mama?', opts: ['Tante Roos', 'Oom Jan', 'Daan', 'De buurvrouw'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Een chaotisch feest', ending: 'bad',
      text: 'De taart was de verkeerde smaak. De gasten kwamen te laat. Het huis was een chaos.\n\nMama lacht toch. "Emma, je hebt het geprobeerd. Dat is het belangrijkste."\n\nJij lacht ook. Volgend jaar organiseert Daan het feest. Dat is beter.',
      vocab: [
        { w: 'de smaak', d: 'the flavour / taste' },
        { w: 'de chaos', d: 'the chaos' },
        { w: 'het belangrijkste', d: 'the most important thing' },
        { w: 'volgend jaar', d: 'next year' },
      ],
      choices: [],
      quiz: { q: 'Wat was er mis met de taart?', opts: ['Hij was te klein', 'Hij was de verkeerde smaak', 'Hij was te duur', 'Hij was niet klaar'], a: 1 },
    },
  },
};
