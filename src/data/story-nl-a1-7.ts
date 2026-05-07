import type { Story } from './types';

export const storyNlA1_7: Story = {
  id: 'nl-a1-7', level: 'A1', title: 'Bij de Dokter', genre: 'Dagelijks leven', emoji: '🏥',
  coverColor: '#1a2a3d', accentColor: '#6090d4',
  description: 'Je voelt je niet goed. Je gaat naar de dokter.',
  startChapter: 'c1',
  chapters: {
    c1: { id: 'c1', num: 1, title: 'Ik ben ziek',
      text: 'Je wordt wakker. Je hoofd doet pijn. Je keel is ook pijn. Je voelt je warm en moe. "Ik ben ziek", denk je. Je moet naar de dokter.',
      vocab: [{ w: 'ziek', d: 'ill / sick' }, { w: 'het hoofd', d: 'the head' }, { w: 'de keel', d: 'the throat' }, { w: 'warm', d: 'warm / feverish' }],
      choices: [
        { text: 'Meteen bellen voor een afspraak', hint: 'Snel', next: 'c2a' },
        { text: 'Eerst thee drinken en wachten', hint: 'Rustig', next: 'c2b' },
      ],
      quiz: { q: 'Wat heeft de persoon als klacht?', opts: ['Buikpijn', 'Hoofdpijn en keelpijn', 'Rugpijn', 'Koorts alleen'], a: 1 } },

    c2a: { id: 'c2a', num: 2, title: 'De afspraak',
      text: 'Je belt de doktersassistente. "Goedemorgen, ik ben ziek. Kan ik vandaag komen?" "Ja, om elf uur is er een plek." Je schrijft de tijd op. Elf uur.',
      vocab: [{ w: 'de afspraak', d: 'the appointment' }, { w: 'de assistente', d: 'the assistant' }, { w: 'de plek', d: 'the slot / place' }, { w: 'opschrijven', d: 'to write down' }],
      choices: [
        { text: 'Op tijd vertrekken naar de praktijk', hint: 'Stipt', next: 'c3a' },
        { text: 'Nog even in bed blijven liggen', hint: 'Moe', next: 'c3b' },
      ],
      quiz: { q: 'Hoe laat is de afspraak bij de dokter?', opts: ['Tien uur', 'Elf uur', 'Twaalf uur', 'Twee uur'], a: 1 } },

    c2b: { id: 'c2b', num: 2, title: 'Thee en honing',
      text: 'Je maakt thee met honing. Het is warm en lekker. Maar je keel blijft pijn doen. Na een uur voel je je niet beter. Je besluit toch naar de dokter te gaan.',
      vocab: [{ w: 'de honing', d: 'the honey' }, { w: 'blijven', d: 'to stay / keep' }, { w: 'beslissen', d: 'to decide' }, { w: 'toch', d: 'still / after all' }],
      choices: [
        { text: 'Bellen voor een afspraak bij de dokter', hint: 'Verstandig', next: 'c3a' },
        { text: 'Naar de dokter lopen zonder afspraak', hint: 'Direct', next: 'c3b' },
      ],
      quiz: { q: 'Wat drink je met de thee?', opts: ['Melk', 'Suiker', 'Honing', 'Citroen'], a: 2 } },

    c3a: { id: 'c3a', num: 3, title: 'De wachtkamer',
      text: 'Je bent op tijd in de praktijk. De wachtkamer is klein maar netjes. Er zitten drie mensen. Je neemt een stoel en wacht. Er zijn tijdschriften op tafel.',
      vocab: [{ w: 'de wachtkamer', d: 'the waiting room' }, { w: 'de praktijk', d: 'the surgery / practice' }, { w: 'netjes', d: 'tidy / neat' }, { w: 'het tijdschrift', d: 'the magazine' }],
      choices: [
        { text: 'Een tijdschrift lezen terwijl je wacht', hint: 'Geduldig', next: 'c4a' },
        { text: 'Aan de assistente vragen hoe lang het duurt', hint: 'Ongeduldig', next: 'c4b' },
      ],
      quiz: { q: 'Hoeveel mensen zitten er in de wachtkamer?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 1 } },

    c3b: { id: 'c3b', num: 3, title: 'Zonder afspraak',
      text: 'Je loopt naar de praktijk. De assistente kijkt verbaasd. "Hebt u een afspraak?" "Nee, maar ik voel me echt niet goed." Ze denkt even na. "Wacht dan maar. De dokter heeft misschien tijd."',
      vocab: [{ w: 'verbaasd', d: 'surprised' }, { w: 'nadenken', d: 'to think / consider' }, { w: 'misschien', d: 'maybe / perhaps' }, { w: 'wachten', d: 'to wait' }],
      choices: [
        { text: 'Rustig wachten in de wachtkamer', hint: 'Geduldig', next: 'c4a' },
        { text: 'Vragen of het lang duurt', hint: 'Ongeduldig', next: 'c4b' },
      ],
      quiz: { q: 'Wat zegt de assistente?', opts: ['Ga maar naar huis', 'Wacht maar, misschien heeft de dokter tijd', 'Bel morgen terug', 'Ga naar het ziekenhuis'], a: 1 } },

    c4a: { id: 'c4a', num: 4, title: 'Bij de dokter',
      text: 'De dokter heet dokter Smit. Hij is vriendelijk. "Wat is er aan de hand?" vraagt hij. Je vertelt over je keel en je hoofd. Hij luistert goed.',
      vocab: [{ w: 'de dokter', d: 'the doctor' }, { w: 'aan de hand zijn', d: 'to be the matter' }, { w: 'vertellen', d: 'to tell' }, { w: 'luisteren', d: 'to listen' }],
      choices: [
        { text: 'Ook vertellen over je koorts', hint: 'Volledig', next: 'c5a' },
        { text: 'Alleen over je keel praten', hint: 'Kort', next: 'c5b' },
      ],
      quiz: { q: 'Hoe heet de dokter?', opts: ['Dokter Jansen', 'Dokter Peters', 'Dokter Smit', 'Dokter De Boer'], a: 2 } },

    c4b: { id: 'c4b', num: 4, title: 'Eindelijk aan de beurt',
      text: 'Na veertig minuten ben je aan de beurt. Je bent al moe van het wachten. De dokter heet dokter Smit. "Kom erin. Wat zijn uw klachten?"',
      vocab: [{ w: 'aan de beurt', d: 'your turn' }, { w: 'veertig', d: 'forty' }, { w: 'de minuut', d: 'the minute' }, { w: 'de klacht', d: 'the complaint / symptom' }],
      choices: [
        { text: 'Alles vertellen over hoe je je voelt', hint: 'Volledig', next: 'c5a' },
        { text: 'Alleen zeggen dat je keelpijn hebt', hint: 'Kort', next: 'c5b' },
      ],
      quiz: { q: 'Hoe lang wacht je voordat je aan de beurt bent?', opts: ['Tien minuten', 'Twintig minuten', 'Dertig minuten', 'Veertig minuten'], a: 3 } },

    c5a: { id: 'c5a', num: 5, title: 'Het onderzoek',
      text: 'Dokter Smit kijkt in je keel. "Rood", zegt hij. Hij meet ook je temperatuur. "Achtendertig komma vijf graden. Je hebt een beetje koorts." Hij schrijft iets op.',
      vocab: [{ w: 'het onderzoek', d: 'the examination' }, { w: 'de temperatuur', d: 'the temperature' }, { w: 'de koorts', d: 'the fever' }, { w: 'de graad', d: 'the degree' }],
      choices: [
        { text: 'Vragen wat er precies aan de hand is', hint: 'Nieuwsgierig', next: 'c6a' },
        { text: 'Wachten op zijn uitleg', hint: 'Geduldig', next: 'c6b' },
      ],
      quiz: { q: 'Hoe hoog is jouw temperatuur?', opts: ['Zeven en dertig', 'Achtendertig', 'Achtendertig komma vijf', 'Negenendertig'], a: 2 } },

    c5b: { id: 'c5b', num: 5, title: 'Keelpijn',
      text: 'Dokter Smit kijkt in je keel met een lampje. "Je keel is echt rood. Heb je ook koorts?" Je voelt je voorhoofd. "Ik denk het wel." Hij pakt een thermometer.',
      vocab: [{ w: 'het lampje', d: 'the small light / torch' }, { w: 'rood', d: 'red' }, { w: 'het voorhoofd', d: 'the forehead' }, { w: 'de thermometer', d: 'the thermometer' }],
      choices: [
        { text: 'Hem vragen wat hij denkt', hint: 'Direct', next: 'c6a' },
        { text: 'Wachten op de uitslag van de meting', hint: 'Geduldig', next: 'c6b' },
      ],
      quiz: { q: 'Waarmee kijkt de dokter in je keel?', opts: ['Een spiegel', 'Een lamp', 'Een lampje', 'Een camera'], a: 2 } },

    c6a: { id: 'c6a', num: 6, title: 'Het recept',
      text: '"Je hebt een verkoudheid met een lichte ontsteking", zegt dokter Smit. "Ik geef je een recept voor tabletten." Hij schrijft het recept. "Ga naar de apotheek."',
      vocab: [{ w: 'het recept', d: 'the prescription' }, { w: 'de ontsteking', d: 'the infection / inflammation' }, { w: 'de tablet', d: 'the tablet' }, { w: 'de apotheek', d: 'the pharmacy' }],
      choices: [
        { text: 'Direct naar de apotheek gaan', hint: 'Snel', next: 'c7a' },
        { text: 'Nog een vraag stellen aan de dokter', hint: 'Grondig', next: 'c7b' },
      ],
      quiz: { q: 'Wat heeft de dokter geconstateerd?', opts: ['Griep', 'Een verkoudheid met ontsteking', 'Allergie', 'Angina'], a: 1 } },

    c6b: { id: 'c6b', num: 6, title: 'Rust en water',
      text: 'Dokter Smit zegt: "Je hebt rust nodig en veel water drinken. Ik geef je ook een recept." Hij geeft je een papiertje. "Breng dit naar de apotheek naast de praktijk."',
      vocab: [{ w: 'de rust', d: 'the rest' }, { w: 'nodig hebben', d: 'to need' }, { w: 'het papiertje', d: 'the slip of paper' }, { w: 'naast', d: 'next to' }],
      choices: [
        { text: 'Meteen naar de apotheek gaan', hint: 'Direct', next: 'c7a' },
        { text: 'Hem vragen hoe lang je ziek bent', hint: 'Bezorgd', next: 'c7b' },
      ],
      quiz: { q: 'Wat adviseert de dokter naast het recept?', opts: ['Sporten', 'Rust en veel water', 'Warm eten', 'Buiten wandelen'], a: 1 } },

    c7a: { id: 'c7a', num: 7, title: 'De apotheek',
      text: 'Je gaat naar de apotheek. De apotheker heet Fatima. Je geeft het recept. Ze zoekt de tabletten. "Neem drie keer per dag één tablet. Na het eten." Je knikt.',
      vocab: [{ w: 'de apotheker', d: 'the pharmacist' }, { w: 'zoeken', d: 'to look for / find' }, { w: 'keer', d: 'time(s)' }, { w: 'per dag', d: 'per day' }],
      choices: [
        { text: 'Vragen of er bijwerkingen zijn', hint: 'Voorzichtig', next: 'c8a' },
        { text: 'Betalen en naar huis gaan', hint: 'Moe', next: 'c8b' },
      ],
      quiz: { q: 'Hoe vaak per dag moet je de tablet nemen?', opts: ['Eén keer', 'Twee keer', 'Drie keer', 'Vier keer'], a: 2 } },

    c7b: { id: 'c7b', num: 7, title: 'Een extra vraag',
      text: 'Je vraagt dokter Smit: "Hoe lang ben ik ziek?" Hij denkt na. "Twee tot drie dagen. Rust goed uit." Je bedankt hem en gaat naar de apotheek.',
      vocab: [{ w: 'extra', d: 'extra' }, { w: 'tot', d: 'until / to' }, { w: 'uitrusten', d: 'to rest' }, { w: 'bedanken', d: 'to thank' }],
      choices: [
        { text: 'In de apotheek vragen om uitleg over de tabletten', hint: 'Grondig', next: 'c8a' },
        { text: 'Snel betalen en naar huis gaan', hint: 'Moe', next: 'c8b' },
      ],
      quiz: { q: 'Hoe lang zegt de dokter dat je ziek bent?', opts: ['Één dag', 'Twee tot drie dagen', 'Één week', 'Twee weken'], a: 1 } },

    c8a: { id: 'c8a', num: 8, title: 'Thuis met rust',
      text: 'Je bent thuis. Je neemt de eerste tablet met water. Je gaat op de bank liggen. Je drinkt veel thee. Na twee uur slaap je in.',
      vocab: [{ w: 'de eerste', d: 'the first' }, { w: 'liggen', d: 'to lie down' }, { w: 'ingeslapen', d: 'fallen asleep' }, { w: 'het uur', d: 'the hour' }],
      choices: [
        { text: 'Iemand bellen om te vertellen dat je ziek bent', hint: 'Sociaal', next: 'c9a' },
        { text: 'Gewoon slapen en rusten', hint: 'Verstandig', next: 'c9b' },
      ],
      quiz: { q: 'Wat doe je na het nemen van de tablet?', opts: ['Je gaat koken', 'Je gaat op de bank liggen', 'Je belt de dokter', 'Je gaat wandelen'], a: 1 } },

    c8b: { id: 'c8b', num: 8, title: 'Op de bank',
      text: 'Thuis val je op de bank. Je bent heel moe. Je drinkt wat water. Je pakt je telefoon. Er zijn drie berichten van je werk. "Kom je morgen?"',
      vocab: [{ w: 'het bericht', d: 'the message' }, { w: 'het werk', d: 'the work' }, { w: 'morgen', d: 'tomorrow' }, { w: 'vallen', d: 'to fall / drop down' }],
      choices: [
        { text: 'Antwoorden dat je ziek bent', hint: 'Eerlijk', next: 'c9a' },
        { text: 'Het bericht negeren en slapen', hint: 'Moe', next: 'c9b' },
      ],
      quiz: { q: 'Hoeveel berichten zijn er van je werk?', opts: ['Één', 'Twee', 'Drie', 'Vier'], a: 2 } },

    c9a: { id: 'c9a', num: 9, title: 'Beter worden',
      text: 'Je belt je werk en zegt dat je ziek bent. Je baas zegt: "Geen probleem. Rust maar goed uit." Je voelt je al iets beter na de tabletten. Je slaapt goed die nacht.',
      vocab: [{ w: 'de baas', d: 'the boss' }, { w: 'geen probleem', d: 'no problem' }, { w: 'iets beter', d: 'a bit better' }, { w: 'die nacht', d: 'that night' }],
      choices: [
        { text: 'Morgen vroeg op staan en naar het werk', hint: 'Optimistisch', next: 'c10g' },
        { text: 'Nog een dag thuisblijven voor zekerheid', hint: 'Voorzichtig', next: 'c10n' },
      ],
      quiz: { q: 'Hoe reageert je baas?', opts: ['Hij is boos', 'Hij zegt geen probleem', 'Hij vraagt je toch te komen', 'Hij belt de dokter'], a: 1 } },

    c9b: { id: 'c9b', num: 9, title: 'Een nacht slapen',
      text: 'Je slaapt de hele dag. Je droomt vreemde dingen. \'s Avonds neem je weer een tablet. Je eet een beetje brood. Je keel doet nog steeds pijn.',
      vocab: [{ w: 'dromen', d: 'to dream' }, { w: 'vreemd', d: 'strange' }, { w: 'steeds', d: 'still' }, { w: 'eten', d: 'to eat' }],
      choices: [
        { text: 'Morgen naar het werk proberen te gaan', hint: 'Sterk', next: 'c10n' },
        { text: 'Nog een dag thuisblijven met rust', hint: 'Ziek', next: 'c10b' },
      ],
      quiz: { q: 'Wat eet je \'s avonds?', opts: ['Soep', 'Rijst', 'Brood', 'Niets'], a: 2 } },

    c10g: { id: 'c10g', num: 10, title: 'Snel beter!', ending: 'good',
      text: 'De volgende ochtend voel je je veel beter. Je keel doet geen pijn meer. Je gaat naar het werk. Je baas is blij. "Wat snel beter!" zegt hij. Jij lacht. De tabletten van dokter Smit werken goed. Je drinkt veel water en je bent weer gezond.',
      vocab: [{ w: 'de ochtend', d: 'the morning' }, { w: 'geen pijn meer', d: 'no pain anymore' }, { w: 'gezond', d: 'healthy' }, { w: 'werken', d: 'to work' }],
      choices: [],
      quiz: { q: 'Hoe voel je je de volgende ochtend?', opts: ['Nog steeds ziek', 'Iets beter', 'Veel beter', 'Heel slecht'], a: 2 } },

    c10n: { id: 'c10n', num: 10, title: 'Langzaam beter', ending: 'neutral',
      text: 'Je gaat naar het werk maar je bent nog moe. Je collega\'s zien dat je ziek bent. "Ga maar vroeg naar huis", zegt je baas. Je slaapt die middag. Na drie dagen ben je echt beter.',
      vocab: [{ w: 'de collega', d: 'the colleague' }, { w: 'vroeg', d: 'early' }, { w: 'die middag', d: 'that afternoon' }, { w: 'echt', d: 'really' }],
      choices: [],
      quiz: { q: 'Wat zegt je baas als hij ziet dat je nog ziek bent?', opts: ['Blijf morgen ook thuis', 'Ga maar vroeg naar huis', 'Ga naar de dokter', 'Werk door'], a: 1 } },

    c10b: { id: 'c10b', num: 10, title: 'Een hele week ziek', ending: 'bad',
      text: 'Je blijft thuis, maar je wordt niet beter. Je moet de hele week rusten. Je mist een belangrijke vergadering op het werk. Je baas belt en klinkt niet blij. "Dit is een slecht moment." Je voelt je schuldig en ziek.',
      vocab: [{ w: 'de vergadering', d: 'the meeting' }, { w: 'missen', d: 'to miss' }, { w: 'klinken', d: 'to sound' }, { w: 'het moment', d: 'the moment' }],
      choices: [],
      quiz: { q: 'Wat mis je door je ziekte?', opts: ['Een feestje', 'Een verjaardag', 'Een belangrijke vergadering', 'Een vakantie'], a: 2 } },
  },
};
