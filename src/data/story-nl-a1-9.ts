import type { Story } from './types';

export const storyNlA1_9: Story = {
  id: 'nl-a1-9', level: 'A1', title: 'Het Huisdier', genre: 'Familie', emoji: '🐹',
  coverColor: '#2a3a1e', accentColor: '#80b860',
  description: 'Je wilt een huisdier. Welk dier past het best bij jou?',
  startChapter: 'c1',
  chapters: {
    c1: { id: 'c1', num: 1, title: 'Een huisdier!',
      text: 'Je woont in een flat met je huisgenoot Lena. Je wilt al lang een huisdier. Vandaag ga je naar de dierenwinkel. Je bent heel blij en een beetje zenuwachtig.',
      vocab: [{ w: 'het huisdier', d: 'the pet' }, { w: 'de dierenwinkel', d: 'the pet shop' }, { w: 'de huisgenoot', d: 'the flatmate' }, { w: 'zenuwachtig', d: 'nervous' }],
      choices: [
        { text: 'Meteen naar de dierenwinkel fietsen', hint: 'Enthousiast', next: 'c2a' },
        { text: 'Eerst met Lena praten over het plan', hint: 'Beleefd', next: 'c2b' },
      ],
      quiz: { q: 'Met wie woon je in de flat?', opts: ['Met je broer', 'Met Lena', 'Alleen', 'Met je ouders'], a: 1 } },

    c2a: { id: 'c2a', num: 2, title: 'De dierenwinkel',
      text: 'Je fietst naar de dierenwinkel. Het heet "Dierenparadijs". Je opent de deur en hoort allerlei geluiden. Een papegaai roept: "Hallo! Hallo!" Je lacht.',
      vocab: [{ w: 'fietsen', d: 'to cycle' }, { w: 'het geluid', d: 'the sound' }, { w: 'de papegaai', d: 'the parrot' }, { w: 'roepen', d: 'to call out' }],
      choices: [
        { text: 'Naar de hamsters in de etalage kijken', hint: 'Schattig', next: 'c3a' },
        { text: 'Een medewerker om advies vragen', hint: 'Slim', next: 'c3b' },
      ],
      quiz: { q: 'Hoe heet de dierenwinkel?', opts: ['Dierenland', 'Dierenparadijs', 'Dierenhoek', 'Dierenwereld'], a: 1 } },

    c2b: { id: 'c2b', num: 2, title: 'Lena vragen',
      text: 'Je gaat naar Lena in de keuken. "Lena, ik wil een huisdier. Vind jij dat goed?" Lena kijkt op. "Welk dier?" vraagt ze. "Nog niet zeker. Een hamster of een kat misschien."',
      vocab: [{ w: 'vragen', d: 'to ask' }, { w: 'zeker', d: 'certain / sure' }, { w: 'misschien', d: 'maybe' }, { w: 'goed vinden', d: 'to be okay with' }],
      choices: [
        { text: 'Samen naar de dierenwinkel gaan', hint: 'Gezellig', next: 'c3a' },
        { text: 'Alleen naar de dierenwinkel gaan', hint: 'Zelfstandig', next: 'c3b' },
      ],
      quiz: { q: 'Welke dieren noem je als mogelijkheden?', opts: ['Hond en vis', 'Hamster en kat', 'Konijn en vogel', 'Kat en hond'], a: 1 } },

    c3a: { id: 'c3a', num: 3, title: 'De hamsters',
      text: 'Je ziet drie kleine hamsters in een kooi. Ze rennen in een wieltje. Ze zijn bruin en oranje. Ze zijn heel schattig. Eén hamster kijkt je recht aan.',
      vocab: [{ w: 'de hamster', d: 'the hamster' }, { w: 'de kooi', d: 'the cage' }, { w: 'het wieltje', d: 'the little wheel' }, { w: 'schattig', d: 'cute' }],
      choices: [
        { text: 'De winkelier vragen over de hamsters', hint: 'Informatie', next: 'c4a' },
        { text: 'Ook de vissen en de kat bekijken', hint: 'Vergelijken', next: 'c4b' },
      ],
      quiz: { q: 'Wat doen de hamsters in de kooi?', opts: ['Ze slapen', 'Ze eten', 'Ze rennen in een wieltje', 'Ze spelen met een bal'], a: 2 } },

    c3b: { id: 'c3b', num: 3, title: 'Advies vragen',
      text: 'De medewerker heet Tom. "Ik wil een huisdier. Wat adviseer jij voor een flat?" vraag je. Tom denkt na. "Een hamster is goed in een flat. Een kat ook, maar die vraagt meer aandacht."',
      vocab: [{ w: 'adviseren', d: 'to advise' }, { w: 'de aandacht', d: 'the attention' }, { w: 'de medewerker', d: 'the employee' }, { w: 'goed', d: 'good' }],
      choices: [
        { text: 'Meer vragen over de hamster', hint: 'Geïnteresseerd', next: 'c4a' },
        { text: 'De kat en de vissen ook bekijken', hint: 'Vergelijken', next: 'c4b' },
      ],
      quiz: { q: 'Wat vraagt een kat meer dan een hamster?', opts: ['Voedsel', 'Water', 'Aandacht', 'Ruimte'], a: 2 } },

    c4a: { id: 'c4a', num: 4, title: 'De winkelier',
      text: 'Tom vertelt je alles over de hamster. "Hij eet groente en graankorrels. Hij is \'s nachts actief. Hij heeft een grote kooi nodig." Je luistert goed.',
      vocab: [{ w: 'de graankorrel', d: 'the grain' }, { w: '\'s nachts', d: 'at night' }, { w: 'actief', d: 'active' }, { w: 'nodig hebben', d: 'to need' }],
      choices: [
        { text: 'Beslissen de hamster te kopen', hint: 'Zeker', next: 'c5a' },
        { text: 'Vragen over de vissen ook stellen', hint: 'Twijfelend', next: 'c5b' },
      ],
      quiz: { q: 'Wanneer is de hamster actief?', opts: ['Overdag', 'In de ochtend', '\'s Nachts', 'In de middag'], a: 2 } },

    c4b: { id: 'c4b', num: 4, title: 'Alle dieren bekijken',
      text: 'Je bekijkt de vissen in een groot aquarium. Ze zijn blauw, rood en geel. Dan zie je een grijze kat in een mand. Hij slaapt. Hij is groot en zacht.',
      vocab: [{ w: 'het aquarium', d: 'the aquarium' }, { w: 'de vis', d: 'the fish' }, { w: 'grijs', d: 'grey' }, { w: 'zacht', d: 'soft' }],
      choices: [
        { text: 'Kiezen voor de hamster', hint: 'Beslissing', next: 'c5a' },
        { text: 'Kiezen voor de vissen', hint: 'Rustig', next: 'c5b' },
      ],
      quiz: { q: 'Welke kleur heeft de kat in de mand?', opts: ['Oranje', 'Zwart', 'Grijs', 'Wit'], a: 2 } },

    c5a: { id: 'c5a', num: 5, title: 'De hamster kopen',
      text: 'Je kiest de oranje hamster. Je koopt ook een kooi, een wieltje en voedsel. Alles kost veertig euro. Je draagt alles naar buiten. De hamster zit rustig in een doosje.',
      vocab: [{ w: 'kiezen', d: 'to choose' }, { w: 'het voedsel', d: 'the food' }, { w: 'het doosje', d: 'the small box' }, { w: 'rustig', d: 'calm' }],
      choices: [
        { text: 'Snel naar huis fietsen met de hamster', hint: 'Enthousiast', next: 'c6a' },
        { text: 'Eerst Tom bedanken voor zijn advies', hint: 'Beleefd', next: 'c6b' },
      ],
      quiz: { q: 'Hoeveel kost alles voor de hamster?', opts: ['Twintig euro', 'Dertig euro', 'Veertig euro', 'Vijftig euro'], a: 2 } },

    c5b: { id: 'c5b', num: 5, title: 'De vissen',
      text: 'Je kiest drie kleurrijke vissen en een klein aquarium. Tom helpt je alles inpakken. "Vissen zijn rustig en mooi", zegt hij. Je betaalt vijfentwintig euro.',
      vocab: [{ w: 'kleurrijk', d: 'colourful' }, { w: 'inpakken', d: 'to pack up' }, { w: 'vijfentwintig', d: 'twenty-five' }, { w: 'rustig', d: 'calm / quiet' }],
      choices: [
        { text: 'Naar huis gaan met de vissen', hint: 'Klaar', next: 'c6a' },
        { text: 'Tom vragen hoe je de vissen verzorgt', hint: 'Grondig', next: 'c6b' },
      ],
      quiz: { q: 'Hoeveel vissen koop je?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 1 } },

    c6a: { id: 'c6a', num: 6, title: 'Thuis',
      text: 'Je bent thuis. Je zet de kooi op de tafel. Je haalt de hamster uit het doosje. Hij loopt rond en snuffelt aan alles. "Hoe heet hij?" vraagt Lena.',
      vocab: [{ w: 'snuffelen', d: 'to sniff' }, { w: 'rondlopen', d: 'to walk around' }, { w: 'heten', d: 'to be called' }, { w: 'het doosje', d: 'the little box' }],
      choices: [
        { text: 'De hamster "Pinda" noemen', hint: 'Grappig', next: 'c7a' },
        { text: 'Lena laten kiezen wat de naam is', hint: 'Vriendelijk', next: 'c7b' },
      ],
      quiz: { q: 'Wat doet de hamster als je hem uit het doosje haalt?', opts: ['Hij slaapt', 'Hij loopt rond en snuffelt', 'Hij bijt', 'Hij piept'], a: 1 } },

    c6b: { id: 'c6b', num: 6, title: 'Verzorging leren',
      text: 'Tom geeft je een folder over de verzorging. "Schoon water elke dag. Groente twee keer per week." Je leest alles goed. Je voelt je nu een verantwoordelijke baasje.',
      vocab: [{ w: 'de verzorging', d: 'the care' }, { w: 'de folder', d: 'the leaflet' }, { w: 'verantwoordelijk', d: 'responsible' }, { w: 'het baasje', d: 'the owner (of a pet)' }],
      choices: [
        { text: 'Naar huis gaan en de kooi opzetten', hint: 'Klaar', next: 'c7a' },
        { text: 'Tom nog een vraag stellen', hint: 'Grondig', next: 'c7b' },
      ],
      quiz: { q: 'Hoe vaak geef je het huisdier groente?', opts: ['Elke dag', 'Eén keer per week', 'Twee keer per week', 'Eén keer per maand'], a: 2 } },

    c7a: { id: 'c7a', num: 7, title: 'Lena en het huisdier',
      text: 'Lena kijkt naar het huisdier. Ze lacht. "Hij is zo schattig!" Ze wil hem aanraken. Het huisdier lijkt rustig. Lena is duidelijk blij.',
      vocab: [{ w: 'aanraken', d: 'to touch' }, { w: 'lijken', d: 'to seem' }, { w: 'duidelijk', d: 'clearly' }, { w: 'blij', d: 'happy' }],
      choices: [
        { text: 'Lena laten helpen de kooi op te zetten', hint: 'Samen', next: 'c8a' },
        { text: 'Het huisdier alvast wat eten geven', hint: 'Zorgzaam', next: 'c8b' },
      ],
      quiz: { q: 'Hoe reageert Lena op het huisdier?', opts: ['Ze is bang', 'Ze is boos', 'Ze is blij en vindt het schattig', 'Ze reageert niet'], a: 2 } },

    c7b: { id: 'c7b', num: 7, title: 'De kooi opzetten',
      text: 'Je zet de kooi op de vensterbank. Je legt zaagsel op de bodem. Je vult het drinkbakje met water. Het huisdier kijkt nieuwsgierig toe.',
      vocab: [{ w: 'de vensterbank', d: 'the windowsill' }, { w: 'het zaagsel', d: 'the sawdust' }, { w: 'de bodem', d: 'the bottom / floor' }, { w: 'het drinkbakje', d: 'the drinking bowl' }],
      choices: [
        { text: 'Lena roepen om te kijken', hint: 'Trots', next: 'c8a' },
        { text: 'Het huisdier wat eten geven', hint: 'Zorgzaam', next: 'c8b' },
      ],
      quiz: { q: 'Wat leg je op de bodem van de kooi?', opts: ['Gras', 'Zand', 'Zaagsel', 'Papier'], a: 2 } },

    c8a: { id: 'c8a', num: 8, title: 'Een verrassing',
      text: 'De volgende morgen niest Lena. En nog een keer. "Mijn ogen jeuken ook", zegt ze. Ze kijkt bezorgd. "Ben ik allergisch voor het dier?"',
      vocab: [{ w: 'niezen', d: 'to sneeze' }, { w: 'jeuken', d: 'to itch' }, { w: 'allergisch', d: 'allergic' }, { w: 'bezorgd', d: 'worried' }],
      choices: [
        { text: 'Lena aanraden naar de dokter te gaan', hint: 'Voorzichtig', next: 'c9a' },
        { text: 'Zeggen dat het vast van de kou is', hint: 'Hoopvol', next: 'c9b' },
      ],
      quiz: { q: 'Wat zijn Lena\'s symptomen?', opts: ['Keelpijn en koorts', 'Niezen en jeukende ogen', 'Buikpijn', 'Hoofdpijn'], a: 1 } },

    c8b: { id: 'c8b', num: 8, title: 'De eerste nacht',
      text: 'Het huisdier is \'s nachts actief. Je hoort hem rennen in het wieltje. Lena klopt op jouw deur. "Ik kan niet slapen door dat geluid." Je voelt je schuldig.',
      vocab: [{ w: 'actief', d: 'active' }, { w: 'kloppen', d: 'to knock' }, { w: 'door', d: 'because of' }, { w: 'schuldig voelen', d: 'to feel guilty' }],
      choices: [
        { text: 'De kooi in de badkamer zetten', hint: 'Oplossing', next: 'c9a' },
        { text: 'Met Lena praten over het probleem', hint: 'Eerlijk', next: 'c9b' },
      ],
      quiz: { q: 'Waarom kan Lena niet slapen?', opts: ['Het is te warm', 'Ze is ziek', 'Ze hoort het huisdier', 'Ze maakt zich zorgen'], a: 2 } },

    c9a: { id: 'c9a', num: 9, title: 'Goede buren',
      text: 'Lena gaat naar de dokter. De dokter zegt: "Geen allergie. Het is gewoon de lente." Lena is opgelucht. Ze komt thuis en knuffelt het huisdier voorzichtig.',
      vocab: [{ w: 'de allergie', d: 'the allergy' }, { w: 'de lente', d: 'the spring' }, { w: 'opgelucht', d: 'relieved' }, { w: 'knuffelen', d: 'to cuddle' }],
      choices: [
        { text: 'Blij zijn en het huisdier samen verzorgen', hint: 'Samen', next: 'c10g' },
        { text: 'Lena vragen of het echt oké is voor haar', hint: 'Bezorgd', next: 'c10n' },
      ],
      quiz: { q: 'Wat zegt de dokter over Lena?', opts: ['Ze is allergisch', 'Ze heeft griep', 'Ze heeft geen allergie', 'Ze moet rust houden'], a: 2 } },

    c9b: { id: 'c9b', num: 9, title: 'Een moeilijk gesprek',
      text: 'Jij en Lena praten eerlijk. Lena zegt: "Het huisdier geeft me problemen." Je voelt je verdrietig. Misschien moet je het huisdier een nieuw thuis geven.',
      vocab: [{ w: 'eerlijk', d: 'honest / honestly' }, { w: 'het gesprek', d: 'the conversation' }, { w: 'het thuis', d: 'the home' }, { w: 'verdrietig', d: 'sad' }],
      choices: [
        { text: 'Het huisdier weggeven aan een vriend', hint: 'Moeilijk', next: 'c10n' },
        { text: 'Toch houden en hopen dat het beter wordt', hint: 'Optimistisch', next: 'c10b' },
      ],
      quiz: { q: 'Wat zegt Lena eerlijk?', opts: ['Ze vindt het huisdier geweldig', 'Het huisdier geeft haar problemen', 'Ze wil ook een huisdier', 'Ze is niet bang voor het dier'], a: 1 } },

    c10g: { id: 'c10g', num: 10, title: 'Een perfecte match', ending: 'good',
      text: 'Jij en Lena verzorgen het huisdier samen. Lena geeft hem elke dag vers water. Jij geeft hem groente. Het huisdier is blij en gezond. Lena zegt: "Ik ben blij dat jij hem hebt meegenomen. Hij maakt de flat gezellig."',
      vocab: [{ w: 'de match', d: 'the match' }, { w: 'gezellig', d: 'cosy / sociable' }, { w: 'meegenomen', d: 'brought along' }, { w: 'gezond', d: 'healthy' }],
      choices: [],
      quiz: { q: 'Hoe vindt Lena het huisdier uiteindelijk?', opts: ['Vervelend', 'Bang', 'Hij maakt de flat gezellig', 'Te luid'], a: 2 } },

    c10n: { id: 'c10n', num: 10, title: 'Een nieuw thuis', ending: 'neutral',
      text: 'Je geeft het huisdier aan je vriend Bas. Bas heeft een grote tuin. Het huisdier heeft daar meer ruimte. Je bent verdrietig maar je weet het is beter zo. Bas stuurt je elke week een foto.',
      vocab: [{ w: 'de tuin', d: 'the garden' }, { w: 'de ruimte', d: 'the space' }, { w: 'sturen', d: 'to send' }, { w: 'de foto', d: 'the photo' }],
      choices: [],
      quiz: { q: 'Aan wie geef je het huisdier?', opts: ['Je zus', 'Je buurvrouw', 'Je vriend Bas', 'De dierenwinkel'], a: 2 } },

    c10b: { id: 'c10b', num: 10, title: 'Een lastige situatie', ending: 'bad',
      text: 'Lena is steeds moe en boos. Ze slaapt slecht door het huisdier. Jullie hebben ruzie. Ze zegt: "Jij of het dier!" Het is een vervelende situatie. Je weet niet wat je moet doen.',
      vocab: [{ w: 'steeds', d: 'increasingly / always' }, { w: 'de ruzie', d: 'the quarrel' }, { w: 'vervelend', d: 'unpleasant' }, { w: 'de situatie', d: 'the situation' }],
      choices: [],
      quiz: { q: 'Wat zegt Lena uiteindelijk?', opts: ['Ik hou ook van het dier', 'Jij of het dier', 'Ik ga weg', 'Het is oké'], a: 1 } },
  },
};
