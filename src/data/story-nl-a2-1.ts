import type { Story } from './types';

export const storyNlA2_1: Story = {
  id: 'nl-a2-1',
  level: 'A2',
  title: 'De Fietsreis',
  genre: 'Avontuur',
  emoji: '🚴',
  coverColor: '#2a3d3a',
  accentColor: '#7ab8a0',
  description: 'Je maakt een meerdaagse fietstocht door Nederland. Alles gaat niet zoals gepland.',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'De route plannen',
      text: 'Je staat in je keuken met een grote kaart van Nederland op tafel. Je wilt drie dagen fietsen van Amsterdam naar Utrecht via kleine dorpen. Je hebt een tent, wat eten en een goed humeur. Maar je weet niet zeker welke route je moet nemen. Je kijkt naar de kaart en moet een beslissing maken.',
      vocab: [
        { w: 'de fietstocht', d: 'the cycling trip' },
        { w: 'de kaart', d: 'the map' },
        { w: 'het humeur', d: 'the mood' },
        { w: 'de beslissing', d: 'the decision' },
      ],
      choices: [
        { text: 'Je neemt de route langs de rivieren', hint: 'Schilderachtig', next: 'c2a' },
        { text: 'Je kiest de snellere route door de polders', hint: 'Efficiënt', next: 'c2b' },
      ],
      quiz: { q: 'Hoeveel dagen wil je fietsen?', opts: ['Één dag', 'Twee dagen', 'Drie dagen', 'Vier dagen'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'De rivierroute',
      text: 'Je hebt gekozen voor de route langs de rivieren en het is prachtig. Je fietst langs de Lek en je ziet oude windmolens in de verte. Na twee uur hoort je een hard geluid: je band is lek. Je stapt af en bekijkt het wiel. Je hebt een reparatieset meegenomen, maar je hebt dit nog nooit alleen gedaan.',
      vocab: [
        { w: 'de windmolen', d: 'the windmill' },
        { w: 'de band', d: 'the tyre' },
        { w: 'lek', d: 'punctured / flat' },
        { w: 'de reparatieset', d: 'the repair kit' },
      ],
      choices: [
        { text: 'Je probeert de band zelf te repareren', hint: 'Zelfstandig', next: 'c3a' },
        { text: 'Je vraagt een fietser om hulp', hint: 'Sociaal', next: 'c3b' },
      ],
      quiz: { q: 'Wat is er met de fiets gebeurd?', opts: ['De ketting is gebroken', 'De band is lek', 'Het stuur is kapot', 'Het wiel is krom'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'De polderroute',
      text: 'Je fietst door de polders en het landschap is heel open en plat. Er staat een sterke wind en fietsen kost veel energie. Na een uur zie je dat je band lek is. Je bent moe en je staat midden op een verlaten weg zonder huizen in de buurt. Je pakt je reparatieset uit je tas.',
      vocab: [
        { w: 'de polder', d: 'the polder (reclaimed land)' },
        { w: 'verlaten', d: 'deserted / empty' },
        { w: 'de energie', d: 'the energy' },
        { w: 'in de buurt', d: 'nearby' },
      ],
      choices: [
        { text: 'Je probeert de band zelf te repareren', hint: 'Zelfstandig', next: 'c3a' },
        { text: 'Je wacht op een voorbijganger die kan helpen', hint: 'Geduldig', next: 'c3b' },
      ],
      quiz: { q: 'Hoe is het weer op de polderroute?', opts: ['Warm en zonnig', 'Regenachtig', 'Winderig', 'Mistig'], a: 2 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'De reparatie',
      text: 'Je hebt de band zelf gerepareerd en dat is gelukt! Je bent trots op jezelf. Maar het heeft lang geduurd en het is nu al laat in de middag. Je moet nog steeds een camping vinden voor de nacht. Je hebt op je telefoon gezien dat er twee campings in de buurt zijn, maar je weet niet welke beter is.',
      vocab: [
        { w: 'trots', d: 'proud' },
        { w: 'duren', d: 'to take (time)' },
        { w: 'de camping', d: 'the campsite' },
        { w: 'de nacht', d: 'the night' },
      ],
      choices: [
        { text: 'Je gaat naar de camping aan het water', hint: 'Romantisch', next: 'c4a' },
        { text: 'Je kiest de camping in het dorp', hint: 'Praktisch', next: 'c4b' },
      ],
      quiz: { q: 'Hoe voelt je je nadat je de band hebt gerepareerd?', opts: ['Boos', 'Trots', 'Bang', 'Verdrietig'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'Hulp van een vreemde',
      text: 'Een vrouw op een fiets stopt en helpt je. Ze heet Lena en ze fietst ook meerdere dagen. Ze heeft de band in tien minuten gerepareerd want ze heeft het vaak gedaan. "Ik ken hier een goede camping," zegt ze. "Wil je meegaan?" Je bent blij dat je haar hebt ontmoet.',
      vocab: [
        { w: 'stoppen', d: 'to stop' },
        { w: 'meerdere', d: 'several / multiple' },
        { w: 'meegaan', d: 'to come along' },
        { w: 'ontmoeten', d: 'to meet' },
      ],
      choices: [
        { text: 'Je gaat mee naar de camping die Lena kent', hint: 'Gezellig', next: 'c4a' },
        { text: 'Je bedankt haar maar gaat liever alleen', hint: 'Onafhankelijk', next: 'c4b' },
      ],
      quiz: { q: 'Wie heeft de band gerepareerd?', opts: ['Jijzelf', 'Een man met een auto', 'Lena', 'Een monteur'], a: 2 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'De camping aan het water',
      text: 'Je bent op de camping aangekomen en het is prachtig gelegen aan een rivier. Lena is er ook of je hebt zelf een mooie plek gevonden. Je hebt je tent opgezet en nu kook je pasta op je kleine campingkooktoestel. Een andere fietser vraagt of hij erbij mag zitten. Hij heet Tom.',
      vocab: [
        { w: 'aankomen', d: 'to arrive' },
        { w: 'gelegen', d: 'situated / located' },
        { w: 'opzetten', d: 'to set up (a tent)' },
        { w: 'het kooktoestel', d: 'the camping stove' },
      ],
      choices: [
        { text: 'Je nodigt Tom uit om mee te eten', hint: 'Vriendelijk', next: 'c5a' },
        { text: 'Je zegt dat je liever alleen wilt zijn', hint: 'Rustig', next: 'c5b' },
      ],
      quiz: { q: 'Wat kook je op de camping?', opts: ['Soep', 'Rijst', 'Pasta', 'Eieren'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Het dorp',
      text: 'Je hebt de camping in het dorp gekozen en dat was een goede keuze. Het kleine dorp heet Wijk en het heeft een gezellige kroeg en een bakkerij. Je hebt je tent opgezet en bent daarna een broodje gaan halen. De bakker heeft je verteld dat er morgen een markt is in het dorp.',
      vocab: [
        { w: 'de keuze', d: 'the choice' },
        { w: 'de kroeg', d: 'the pub / bar' },
        { w: 'de bakkerij', d: 'the bakery' },
        { w: 'de markt', d: 'the market' },
      ],
      choices: [
        { text: 'Je gaat morgenochtend vroeg naar de markt', hint: 'Nieuwsgierig', next: 'c5a' },
        { text: 'Je vertrekt vroeg om op schema te blijven', hint: 'Gedisciplineerd', next: 'c5b' },
      ],
      quiz: { q: 'Wat heeft de bakker je verteld?', opts: ['Er is een festival', 'Er is een markt morgen', 'De weg is afgesloten', 'Er is slecht weer op komst'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Een nieuw contact',
      text: 'Je hebt Lena of Tom goed leren kennen vanavond. Jullie hebben uren gepraat over fietsen, reizen en het leven. Lena heeft dezelfde route als jij en stelt voor om morgen samen verder te fietsen. Je voelt je gelukkig want je had niet verwacht zulke goede mensen te ontmoeten op deze reis.',
      vocab: [
        { w: 'leren kennen', d: 'to get to know' },
        { w: 'voorstellen', d: 'to suggest / propose' },
        { w: 'verwachten', d: 'to expect' },
        { w: 'de reis', d: 'the journey / trip' },
      ],
      choices: [
        { text: 'Je fietst morgen samen met Lena verder', hint: 'Samen', next: 'c6a' },
        { text: 'Je bedankt haar maar prefereert solo rijden', hint: 'Solo', next: 'c6b' },
      ],
      quiz: { q: 'Wat stelt Lena voor?', opts: ['Haar fiets lenen', 'Samen verder fietsen morgen', 'Teruggaan naar Amsterdam', 'Een andere route nemen'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'Alleen onderweg',
      text: 'Je hebt de avond rustig doorgebracht en goed geslapen in je tent. Vroeg in de ochtend ben je vertrokken. De lucht is helder en blauw en je voelt je uitgerust. Na een uur kom je bij een kruispunt waar het bordje slecht leesbaar is. Je weet niet zeker welke richting je op moet.',
      vocab: [
        { w: 'doorbrengen', d: 'to spend (time)' },
        { w: 'uitgerust', d: 'rested / refreshed' },
        { w: 'het kruispunt', d: 'the crossroads / junction' },
        { w: 'de richting', d: 'the direction' },
      ],
      choices: [
        { text: 'Je volgt je gevoel en slaat rechtsaf', hint: 'Intuïtief', next: 'c6a' },
        { text: 'Je opent de kaart-app op je telefoon', hint: 'Verstandig', next: 'c6b' },
      ],
      quiz: { q: 'Wat is het probleem bij het kruispunt?', opts: ['De weg is afgesloten', 'Het bordje is slecht leesbaar', 'Je fiets is weer lek', 'Je telefoon is leeg'], a: 1 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Verdwaald in het groen',
      text: 'Je bent verdwaald geraakt op een klein bospad dat niet op de kaart staat. Maar het is zo mooi hier dat je er geen spijt van hebt. Je hebt een klein dorp ontdekt dat Schoonrewoerd heet. De huizen zijn oud en er is een prachtige kerk uit de zestiende eeuw. Je besluit hier even te stoppen.',
      vocab: [
        { w: 'verdwalen', d: 'to get lost' },
        { w: 'het bospad', d: 'the forest path' },
        { w: 'spijt hebben van', d: 'to regret' },
        { w: 'ontdekken', d: 'to discover' },
      ],
      choices: [
        { text: 'Je bezoekt de oude kerk in het dorp', hint: 'Cultureel', next: 'c7a' },
        { text: 'Je vraagt iemand de weg naar Utrecht', hint: 'Praktisch', next: 'c7b' },
      ],
      quiz: { q: 'Hoe voel je je over verdwaald raken?', opts: ['Boos en gefrustreerd', 'Bang', 'Geen spijt, want het is mooi', 'Erg moe'], a: 2 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Terug op de goede weg',
      text: 'Dankzij de kaart-app ben je de goede weg gevonden. Je fietst goed op schema en het gaat prima. Lena heeft je een berichtje gestuurd: ze heeft ook een mooi dorp gevonden onderweg. Jullie hebben afgesproken om elkaar vanavond te ontmoeten bij de camping in Culemborg.',
      vocab: [
        { w: 'dankzij', d: 'thanks to' },
        { w: 'op schema', d: 'on schedule' },
        { w: 'het berichtje', d: 'the message (text)' },
        { w: 'afspreken', d: 'to arrange / agree to meet' },
      ],
      choices: [
        { text: 'Je rijdt door zonder te stoppen', hint: 'Doorzetten', next: 'c7a' },
        { text: 'Je neemt een pauze in een café onderweg', hint: 'Ontspannen', next: 'c7b' },
      ],
      quiz: { q: 'Waar hebben jij en Lena afgesproken?', opts: ['In Amsterdam', 'Bij de rivier', 'Bij de camping in Culemborg', 'In Utrecht'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Moe maar blij',
      text: 'Je bent de derde dag begonnen en je benen zijn moe. Je hebt al meer dan honderd kilometer gefietst. Maar je weet dat Utrecht maar twintig kilometer verder is. Lena fietst naast je en ze zegt: "Kom op, we zijn er bijna!" Je voelt nieuwe energie in je benen komen.',
      vocab: [
        { w: 'de kilometer', d: 'the kilometre' },
        { w: 'de energie', d: 'the energy' },
        { w: 'er bijna zijn', d: 'to be almost there' },
        { w: 'doorzetten', d: 'to persevere / push through' },
      ],
      choices: [
        { text: 'Je zet door en fietst naar Utrecht', hint: 'Doorzetten', next: 'c8a' },
        { text: 'Je stelt voor om even te rusten', hint: 'Verstandig', next: 'c8b' },
      ],
      quiz: { q: 'Hoeveel kilometer is Utrecht nog weg?', opts: ['Vijf kilometer', 'Tien kilometer', 'Twintig kilometer', 'Vijftig kilometer'], a: 2 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'De pauze',
      text: 'Je hebt een pauze genomen in een klein café langs de weg. Je hebt een kop koffie en een stroopwafel besteld. De eigenaar van het café heeft je verteld dat de route naar Utrecht heel mooi is via de Kromme Rijn. Je benen voelen al beter na het rusten en je bent klaar voor de laatste etappe.',
      vocab: [
        { w: 'bestellen', d: 'to order' },
        { w: 'de stroopwafel', d: 'the stroopwafel (caramel waffle)' },
        { w: 'de eigenaar', d: 'the owner' },
        { w: 'de etappe', d: 'the stage / leg (of a journey)' },
      ],
      choices: [
        { text: 'Je neemt de route via de Kromme Rijn', hint: 'Schilderachtig', next: 'c8a' },
        { text: 'Je kiest de snelste weg naar Utrecht', hint: 'Efficiënt', next: 'c8b' },
      ],
      quiz: { q: 'Wat heb je in het café besteld?', opts: ['Thee en een koek', 'Koffie en een stroopwafel', 'Limonade en een broodje', 'Water en appeltaart'], a: 1 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Bijna in Utrecht',
      text: 'Je kunt de torens van Utrecht al zien. Je hart klopt snel van opwinding. Lena fietst naast je en jullie lachen en praten. Maar dan begint het hard te regenen. Jullie hebben geen regenjas bij je. Je moet snel beslissen wat je gaat doen want de regen wordt steeds heviger.',
      vocab: [
        { w: 'de toren', d: 'the tower' },
        { w: 'de opwinding', d: 'the excitement' },
        { w: 'de regenjas', d: 'the raincoat' },
        { w: 'hevig', d: 'heavy / intense' },
      ],
      choices: [
        { text: 'Je fietst door ondanks de regen', hint: 'Stoer', next: 'c9a' },
        { text: 'Je zoekt een bushalte om te schuilen', hint: 'Verstandig', next: 'c9b' },
      ],
      quiz: { q: 'Wat gebeurt er als jullie bijna in Utrecht zijn?', opts: ['De fiets gaat kapot', 'Het begint hard te regenen', 'Ze zijn verdwaald', 'Lena moet terug'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Een moeilijk moment',
      text: 'Je benen doen pijn en je bent heel moe. Je begint te twijfelen of je de reis moet afmaken. Lena ziet dat het niet goed gaat met je. "Hoe gaat het?" vraagt ze bezorgd. Je vertelt haar eerlijk hoe je je voelt. Ze luistert goed en geeft je de tijd om te beslissen.',
      vocab: [
        { w: 'twijfelen', d: 'to doubt / hesitate' },
        { w: 'afmaken', d: 'to finish / complete' },
        { w: 'bezorgd', d: 'worried / concerned' },
        { w: 'eerlijk', d: 'honest / honestly' },
      ],
      choices: [
        { text: 'Je besluit door te gaan tot Utrecht', hint: 'Volhouden', next: 'c9a' },
        { text: 'Je neemt de trein voor de laatste kilometers', hint: 'Realistisch', next: 'c9b' },
      ],
      quiz: { q: 'Wat vraagt Lena bezorgd aan jou?', opts: ['"Wil je stoppen?"', '"Hoe gaat het?"', '"Kun je nog fietsen?"', '"Heb je pijn?"'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'De aankomst',
      text: 'Ondanks de regen en de vermoeidheid zijn jullie in Utrecht aangekomen. Je hebt de fiets tegen een paal gezet en jullie hebben elkaar een high five gegeven. Je bent zo trots op jezelf dat je bijna moet huilen. Jullie zoeken nu een droog café om te vieren dat de reis is geslaagd.',
      vocab: [
        { w: 'de vermoeidheid', d: 'the fatigue / tiredness' },
        { w: 'de paal', d: 'the pole / post' },
        { w: 'vieren', d: 'to celebrate' },
        { w: 'geslaagd', d: 'successful' },
      ],
      choices: [
        { text: 'Je ruilt nummers uit met Lena en maakt plannen', hint: 'Vriendschap', next: 'c10g' },
        { text: 'Je neemt afscheid en gaat naar huis', hint: 'Vermoeid', next: 'c10n' },
      ],
      quiz: { q: 'Hoe reageren jullie als jullie in Utrecht aankomen?', opts: ['Jullie zijn boos', 'Jullie zijn teleurgesteld', 'Jullie geven elkaar een high five', 'Jullie huilen van verdriet'], a: 2 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Haast bij Utrecht',
      text: 'Je hebt de trein genomen voor de laatste twintig kilometer of je bent doorgereden maar nat en uitgeput. Je bent in Utrecht aangekomen maar je voelt je niet echt trots. Lena probeert je op te vrolijken: "Je hebt al meer dan tachtig kilometer gefietst, dat is geweldig!" Je weet dat ze gelijk heeft maar toch voelt het onvolledig.',
      vocab: [
        { w: 'uitgeput', d: 'exhausted' },
        { w: 'opvrolijken', d: 'to cheer up' },
        { w: 'geweldig', d: 'great / amazing' },
        { w: 'onvolledig', d: 'incomplete' },
      ],
      choices: [
        { text: 'Je spreekt af om de route volgend jaar te herhalen', hint: 'Optimistisch', next: 'c10n' },
        { text: 'Je neemt de trein naar huis en geeft op', hint: 'Teleurgesteld', next: 'c10b' },
      ],
      quiz: { q: 'Hoe voelt de aankomst in Utrecht voor jou?', opts: ['Geweldig en trots', 'Onvolledig en niet helemaal trots', 'Heel blij', 'Helemaal niet moe'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'Vriendschap en succes',
      ending: 'good',
      text: 'Je hebt de volledige route gefietst en een goede vriendin gemaakt. Lena en jij zitten in een gezellig café in Utrecht met twee grote koppen koffie. Jullie hebben elkaars nummer uitgewisseld en plannen gemaakt voor een nieuwe fietstocht volgend jaar. Je kijkt terug op een perfecte reis vol avontuur, prachtige landschappen en nieuwe vriendschap.',
      vocab: [
        { w: 'uitwisselen', d: 'to exchange' },
        { w: 'terugkijken op', d: 'to look back on' },
        { w: 'het landschap', d: 'the landscape' },
        { w: 'de vriendschap', d: 'the friendship' },
      ],
      choices: [],
      quiz: { q: 'Wat hebben Lena en jij gedaan in het café?', opts: ['Gevochten over de route', 'Nummers uitgewisseld en plannen gemaakt', 'Afscheid genomen voor altijd', 'De fiets gerepareerd'], a: 1 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een gemengd gevoel',
      ending: 'neutral',
      text: 'Je bent in Utrecht aangekomen maar je bent heel moe. Je hebt het meeste van de route gefietst en dat is al veel. Lena stuurt je een berichtje: "Goed gedaan! Tot de volgende keer?" Je glimlacht. Het was niet perfect maar je hebt veel geleerd over fietsen, jezelf en de mooie Nederlandse natuur.',
      vocab: [
        { w: 'gemengd', d: 'mixed' },
        { w: 'glimlachen', d: 'to smile' },
        { w: 'de natuur', d: 'nature' },
        { w: 'goed gedaan', d: 'well done' },
      ],
      choices: [],
      quiz: { q: 'Wat stuurt Lena je aan het einde?', opts: ['Een foto', 'Een boek', 'Een berichtje', 'Een brief'], a: 2 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'De trein naar huis',
      ending: 'bad',
      text: 'Je bent halverwege gestopt en hebt de trein naar huis genomen. In de trein kijk je uit het raam naar de polders die voorbij flitsen. Je voelt je teleurgesteld maar ook opgelucht. Thuis besluit je dat je eerst moet oefenen op kortere routes voordat je zo\'n grote tocht maakt. Volgend jaar doe je het beter.',
      vocab: [
        { w: 'halverwege', d: 'halfway' },
        { w: 'teleurgesteld', d: 'disappointed' },
        { w: 'opgelucht', d: 'relieved' },
        { w: 'oefenen', d: 'to practise' },
      ],
      choices: [],
      quiz: { q: 'Hoe voel je je in de trein naar huis?', opts: ['Blij en trots', 'Teleurgesteld maar opgelucht', 'Boos op Lena', 'Helemaal niet moe'], a: 1 },
    },
  },
};
