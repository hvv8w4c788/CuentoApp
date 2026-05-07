import type { Story } from './types';

export const storyNlA2_5: Story = {
  id: 'nl-a2-5',
  level: 'A2',
  title: 'Koken voor Vrienden',
  genre: 'Humor',
  emoji: '👨‍🍳',
  coverColor: '#3a1e1e',
  accentColor: '#d07070',
  description: 'Je nodigt vrienden uit voor een zelfgekookt diner. Wat kan er misgaan?',
  startChapter: 'c1',
  chapters: {
    c1: {
      id: 'c1', num: 1, title: 'Het plan',
      text: 'Je hebt vier vrienden uitgenodigd voor een diner zaterdagavond. Het is een geweldig idee geweest in theorie, maar nu het zaterdag is begin je te twijfelen. Je wilt indruk maken want je hebt gezegd dat je goed kunt koken. De vraag is: wat ga je maken? Je bladert door een kookboek op zoek naar inspiratie.',
      vocab: [
        { w: 'uitnodigen', d: 'to invite' },
        { w: 'in theorie', d: 'in theory' },
        { w: 'indruk maken', d: 'to impress' },
        { w: 'het kookboek', d: 'the cookbook' },
      ],
      choices: [
        { text: 'Je kiest een ambitieus gerecht dat je nog nooit hebt gemaakt', hint: 'Ambitieus', next: 'c2a' },
        { text: 'Je kiest een eenvoudig gerecht dat je al kent', hint: 'Verstandig', next: 'c2b' },
      ],
      quiz: { q: 'Hoeveel vrienden heb je uitgenodigd?', opts: ['Twee', 'Drie', 'Vier', 'Vijf'], a: 2 },
    },
    c2a: {
      id: 'c2a', num: 2, title: 'Het menu',
      text: 'Je hebt gekozen voor een driegangenmenu: een salade als voorgerecht, zelfgemaakte pasta als hoofdgerecht en tiramisu als nagerecht. Het ziet er fantastisch uit in het kookboek. Je schrijft een boodschappenlijst en telt de ingrediënten. Er zijn wel twaalf verschillende dingen die je nodig hebt. Dat is misschien een beetje veel.',
      vocab: [
        { w: 'het driegangenmenu', d: 'the three-course menu' },
        { w: 'het voorgerecht', d: 'the starter' },
        { w: 'het nagerecht', d: 'the dessert' },
        { w: 'het ingrediënt', d: 'the ingredient' },
      ],
      choices: [
        { text: 'Je gaat direct naar de supermarkt met de lijst', hint: 'Enthousiast', next: 'c3a' },
        { text: 'Je vereenvoudigt het menu want twaalf ingrediënten is te veel', hint: 'Realistisch', next: 'c3b' },
      ],
      quiz: { q: 'Wat is het hoofdgerecht dat je wilt maken?', opts: ['Risotto', 'Zelfgemaakte pasta', 'Stoofvlees', 'Kipfilet'], a: 1 },
    },
    c2b: {
      id: 'c2b', num: 2, title: 'Eenvoudig maar lekker',
      text: 'Je hebt besloten om een eenvoudig maar lekker gerecht te maken: pasta met tomatensaus en gehaktballen. Je weet hoe je het moet koken want je moeder heeft het je geleerd. Je schrijft een korte boodschappenlijst. Er zijn maar acht ingrediënten en de meeste heb je al thuis. Het lijkt haalbaar.',
      vocab: [
        { w: 'de tomatensaus', d: 'the tomato sauce' },
        { w: 'de gehaktbal', d: 'the meatball' },
        { w: 'haalbaar', d: 'feasible / achievable' },
        { w: 'de meeste', d: 'most (of them)' },
      ],
      choices: [
        { text: 'Je gaat naar de supermarkt om de rest te halen', hint: 'Voorbereid', next: 'c3a' },
        { text: 'Je controleert eerst je voorraadkast nauwkeurig', hint: 'Zorgvuldig', next: 'c3b' },
      ],
      quiz: { q: 'Van wie heb je geleerd hoe je dit gerecht moet koken?', opts: ['Je vader', 'Je moeder', 'Op school', 'Via YouTube'], a: 1 },
    },
    c3a: {
      id: 'c3a', num: 3, title: 'De supermarkt',
      text: 'Je bent in de supermarkt en je hebt bijna alles gevonden. Maar als je thuis de boodschappen uitpakt, merk je dat je de mascarpone of het gehakt bent vergeten want je was afgeleid door een aanbieding. Dat is een essentieel ingrediënt voor je gerecht. De vrienden komen over drie uur en je moet snel handelen.',
      vocab: [
        { w: 'uitpakken', d: 'to unpack' },
        { w: 'afgeleid', d: 'distracted' },
        { w: 'de aanbieding', d: 'the special offer' },
        { w: 'essentieel', d: 'essential' },
      ],
      choices: [
        { text: 'Je gaat snel terug naar de supermarkt', hint: 'Opgelost', next: 'c4a' },
        { text: 'Je improviseert met wat je hebt', hint: 'Creatief', next: 'c4b' },
      ],
      quiz: { q: 'Wat is het probleem met de boodschappen?', opts: ['Je hebt te veel gekocht', 'Je bent een essentieel ingrediënt vergeten', 'De supermarkt was dicht', 'Je hebt geen geld meer'], a: 1 },
    },
    c3b: {
      id: 'c3b', num: 3, title: 'De voorraadkast',
      text: 'Je hebt je voorraadkast nauwkeurig gecontroleerd en nu weet je precies wat je nog nodig hebt. Maar dan zie je dat de pasta die je thuis hebt al over datum is, want je hebt hem een jaar geleden gekocht. Je kunt die niet gebruiken. Je moet verse pasta kopen maar je hebt al weinig tijd meer.',
      vocab: [
        { w: 'de voorraadkast', d: 'the pantry / food cupboard' },
        { w: 'nauwkeurig', d: 'carefully / precisely' },
        { w: 'over datum', d: 'past its use-by date' },
        { w: 'vers', d: 'fresh' },
      ],
      choices: [
        { text: 'Je rent naar de supermarkt voor verse pasta', hint: 'Snel', next: 'c4a' },
        { text: 'Je maakt rijst in plaats van pasta want dat heb je wel', hint: 'Improviserend', next: 'c4b' },
      ],
      quiz: { q: 'Wat is het probleem met de pasta thuis?', opts: ['Het is te weinig', 'Het is over datum', 'Je hebt het al opgegeten', 'Het is het verkeerde soort'], a: 1 },
    },
    c4a: {
      id: 'c4a', num: 4, title: 'Terug van de supermarkt',
      text: 'Je hebt het ingrediënt gehaald en bent terug thuis. Maar je hebt kostbare tijd verloren. Je hebt nu nog twee uur tot de vrienden komen. Je begint meteen met koken want je moet het deeg maken of de saus laten sudderen. De keuken is al een beetje rommelig maar je hebt er geen tijd voor om op te ruimen.',
      vocab: [
        { w: 'kostbaar', d: 'precious / valuable' },
        { w: 'het deeg', d: 'the dough' },
        { w: 'sudderen', d: 'to simmer' },
        { w: 'rommelig', d: 'messy' },
      ],
      choices: [
        { text: 'Je kookt georganiseerd stap voor stap', hint: 'Gestructureerd', next: 'c5a' },
        { text: 'Je probeert alles tegelijk te doen om tijd te besparen', hint: 'Chaotisch', next: 'c5b' },
      ],
      quiz: { q: 'Hoeveel tijd heb je nog als je terug bent van de supermarkt?', opts: ['Een halfuur', 'Een uur', 'Twee uur', 'Drie uur'], a: 2 },
    },
    c4b: {
      id: 'c4b', num: 4, title: 'Improviseren',
      text: 'Je hebt besloten te improviseren met de ingrediënten die je hebt. Je hebt online een recept gevonden dat lijkt op wat je wilt maken maar met andere ingrediënten. Het ziet er eigenlijk interessant uit. Je begint enthousiast met koken en de keuken ruikt al lekker. Misschien is improviseren wel de beste aanpak.',
      vocab: [
        { w: 'improviseren', d: 'to improvise' },
        { w: 'het recept', d: 'the recipe' },
        { w: 'de aanpak', d: 'the approach' },
        { w: 'ruiken', d: 'to smell' },
      ],
      choices: [
        { text: 'Je volgt het nieuwe recept nauwkeurig', hint: 'Precies', next: 'c5a' },
        { text: 'Je combineert het recept met je eigen ideeën', hint: 'Creatief', next: 'c5b' },
      ],
      quiz: { q: 'Waar heb je het nieuwe recept gevonden?', opts: ['In een kookboek', 'Online', 'Van een vriend', 'Van je moeder'], a: 1 },
    },
    c5a: {
      id: 'c5a', num: 5, title: 'Iets aanbrandt',
      text: 'Je bent georganiseerd aan het koken maar dan ruik je plotseling iets verbrands. De saus in de pan is aangebrand want je bent vergeten het vuur lager te zetten. Er staat nu een zwarte laag op de bodem van de pan. De rookmelder begint te piepen en de keuken vult zich met rook.',
      vocab: [
        { w: 'aanbrandenaan', d: 'to burn (food)' },
        { w: 'het vuur', d: 'the heat / fire' },
        { w: 'de bodem', d: 'the bottom' },
        { w: 'de rookmelder', d: 'the smoke detector' },
      ],
      choices: [
        { text: 'Je opent het raam en redt wat er te redden valt', hint: 'Snel handelen', next: 'c6a' },
        { text: 'Je gooit de pan weg en begint opnieuw', hint: 'Opnieuw beginnen', next: 'c6b' },
      ],
      quiz: { q: 'Wat is er aan de hand in de keuken?', opts: ['De oven is kapot', 'De saus is aangebrand', 'Je hebt je gesneden', 'Het gas doet het niet'], a: 1 },
    },
    c5b: {
      id: 'c5b', num: 5, title: 'De creatieve kok',
      text: 'Je kookt met veel enthousiasme maar de keuken is inmiddels een chaos. Er liggen groenten op het aanrecht, er staat een pan op elk pit en er is overal meel als je pasta wilt maken. Je hebt ook de tijdsinschatting een beetje verkeerd gemaakt want het duurt allemaal langer dan het recept zei.',
      vocab: [
        { w: 'het aanrecht', d: 'the kitchen counter' },
        { w: 'de pit', d: 'the hob burner' },
        { w: 'het meel', d: 'the flour' },
        { w: 'de tijdsinschatting', d: 'the time estimate' },
      ],
      choices: [
        { text: 'Je ruimt snel de keuken op voor de vrienden komen', hint: 'Opruimen', next: 'c6a' },
        { text: 'Je blijft koken en laat de rommel voor later', hint: 'Prioriteit koken', next: 'c6b' },
      ],
      quiz: { q: 'Wat is overal in de keuken als je pasta maakt?', opts: ['Zout', 'Olie', 'Meel', 'Suiker'], a: 2 },
    },
    c6a: {
      id: 'c6a', num: 6, title: 'Vrienden komen aan',
      text: 'Net als je de keuken een beetje hebt opgeruimd of de rook is weggetrokken, gaat de deur bel. De vrienden zijn er. Je hebt snel je schort afgedaan en doet de deur open. Ze staan daar met wijn en bloemen. "Het ruikt lekker!" zegt Emma. Je hoopt dat ze gelijk heeft.',
      vocab: [
        { w: 'de deurbel', d: 'the doorbell' },
        { w: 'het schort', d: 'the apron' },
        { w: 'afdoen', d: 'to take off' },
        { w: 'de bloemen', d: 'the flowers' },
      ],
      choices: [
        { text: 'Je verwelkomt ze enthousiast en legt de situatie uit', hint: 'Eerlijk', next: 'c7a' },
        { text: 'Je doet alsof alles onder controle is', hint: 'Waardig', next: 'c7b' },
      ],
      quiz: { q: 'Wat nemen de vrienden mee als cadeau?', opts: ['Chocolade en kaas', 'Wijn en bloemen', 'Een taart', 'Bier en chips'], a: 1 },
    },
    c6b: {
      id: 'c6b', num: 6, title: 'Koken in chaos',
      text: 'Je kookt nog steeds hard door terwijl de deurbel al gaat. De vrienden staan voor de deur maar de keuken is een complete ramp. Er ligt meel op de vloer, de saus borrelt over en er staat afwas opgestapeld. Je roept: "Kom binnen!" maar schaaamt je een beetje voor de chaos.',
      vocab: [
        { w: 'de ramp', d: 'the disaster' },
        { w: 'borrelen', d: 'to bubble / boil over' },
        { w: 'opgestapeld', d: 'piled up' },
        { w: 'zich schamen', d: 'to feel ashamed / embarrassed' },
      ],
      choices: [
        { text: 'Je vraagt de vrienden om te helpen in de keuken', hint: 'Hulp vragen', next: 'c7a' },
        { text: 'Je stuurt ze naar de woonkamer en gaat verder koken', hint: 'Doorzetten', next: 'c7b' },
      ],
      quiz: { q: 'Hoe is de keuken als de vrienden aankomen?', opts: ['Netjes en schoon', 'Een beetje rommelig', 'Een complete ramp', 'Leeg'], a: 2 },
    },
    c7a: {
      id: 'c7a', num: 7, title: 'Iedereen helpt',
      text: 'De vrienden hebben je geholpen in de keuken en dat was heel gezellig. Tom heeft de salade gemaakt, Sara heeft afgewassen en jij hebt het hoofdgerecht afgemaakt. De sfeer is goed en jullie lachen veel om de chaos. "Dit is het leukste diner ooit," zegt Tom terwijl hij de sla snijdt.',
      vocab: [
        { w: 'afwassen', d: 'to wash up (dishes)' },
        { w: 'de sfeer', d: 'the atmosphere / vibe' },
        { w: 'de sla', d: 'the lettuce / salad' },
        { w: 'snijden', d: 'to cut / chop' },
      ],
      choices: [
        { text: 'Je serveert het eten en het gaat goed', hint: 'Succesvol', next: 'c8a' },
        { text: 'Er is een nieuw probleem met het nagerecht', hint: 'Nog meer chaos', next: 'c8b' },
      ],
      quiz: { q: 'Wat heeft Tom gedaan om te helpen?', opts: ['De pasta gekookt', 'De salade gemaakt', 'De tafel gedekt', 'De wijn opengemaakt'], a: 1 },
    },
    c7b: {
      id: 'c7b', num: 7, title: 'Alleen koken',
      text: 'Je hebt de vrienden in de woonkamer gezet en kookt alleen verder. Ze drinken wijn en lachen en je kunt hun stemmen horen. Je mist de gezelligheid maar je wilt het eten perfect maken. De pasta is bijna klaar maar de saus heeft nog een kwartier nodig. Je vraagt je af of je het haalt.',
      vocab: [
        { w: 'de woonkamer', d: 'the living room' },
        { w: 'de stem', d: 'the voice' },
        { w: 'de gezelligheid', d: 'the cosiness / sociability' },
        { w: 'halen', d: 'to make it (in time)' },
      ],
      choices: [
        { text: 'Je roept ze naar de keuken want je hebt toch hulp nodig', hint: 'Toegeven', next: 'c8a' },
        { text: 'Je haast je en probeert alles klaar te krijgen', hint: 'Doorzetten', next: 'c8b' },
      ],
      quiz: { q: 'Hoelang heeft de saus nog nodig?', opts: ['Vijf minuten', 'Tien minuten', 'Een kwartier', 'Een halfuur'], a: 2 },
    },
    c8a: {
      id: 'c8a', num: 8, title: 'Aan tafel',
      text: 'Eindelijk zit iedereen aan tafel. Het eten ziet er goed uit en de vrienden zijn enthousiast. Je hebt het eten geserveerd en de eerste hap genomen. Er is even stilte. Dan zegt Emma: "Dit is echt lekker!" Je ademhaalt uit van opluchting. Soms zijn de beste diners de meest chaotische.',
      vocab: [
        { w: 'serveren', d: 'to serve' },
        { w: 'de hap', d: 'the bite (of food)' },
        { w: 'de stilte', d: 'the silence' },
        { w: 'uitademen', d: 'to breathe out / exhale' },
      ],
      choices: [
        { text: 'Het eten is heerlijk en iedereen is blij', hint: 'Succes', next: 'c9a' },
        { text: 'Het eten is oké maar niet geweldig', hint: 'Redelijk', next: 'c9b' },
      ],
      quiz: { q: 'Wat zegt Emma als ze de eerste hap neemt?', opts: ['"Het is een beetje zout"', '"Dit is echt lekker!"', '"Ik lust dit niet"', '"Is het zelfgemaakt?"'], a: 1 },
    },
    c8b: {
      id: 'c8b', num: 8, title: 'Het nagerecht gaat fout',
      text: 'Het hoofdgerecht is goed gegaan maar het nagerecht is een ramp. De tiramisu is te vloeibaar want je hebt de slagroom niet goed opgeklopt, of de mascarpone was niet koud genoeg. Het ziet eruit als een soep. De vrienden kijken ernaar en proberen niet te lachen. Tom houdt het niet en giechelt.',
      vocab: [
        { w: 'vloeibaar', d: 'liquid / runny' },
        { w: 'de slagroom', d: 'the whipped cream' },
        { w: 'opkloppen', d: 'to whip (cream)' },
        { w: 'giechelen', d: 'to giggle' },
      ],
      choices: [
        { text: 'Je lacht mee en biedt ijs aan als alternatief', hint: 'Flexibel', next: 'c9a' },
        { text: 'Je biedt aan om pizza te bestellen als troost', hint: 'Oplossing', next: 'c9b' },
      ],
      quiz: { q: 'Wat is er mis met de tiramisu?', opts: ['Het is te zoet', 'Het is te vloeibaar', 'Het is aangebrand', 'Er zit geen koffie in'], a: 1 },
    },
    c9a: {
      id: 'c9a', num: 9, title: 'Een geslaagd diner',
      text: 'Ondanks alle chaos is het diner geweldig geworden. Iedereen heeft genoten en de sfeer aan tafel is fantastisch. Na het eten zitten jullie nog uren te praten bij kaarslicht. Sara zegt: "Dit moeten we vaker doen!" Je bent zo blij en trots. Het was chaotisch maar ook perfect.',
      vocab: [
        { w: 'geslaagd', d: 'successful' },
        { w: 'genieten', d: 'to enjoy' },
        { w: 'het kaarslicht', d: 'the candlelight' },
        { w: 'trots', d: 'proud' },
      ],
      choices: [
        { text: 'Je plant al het volgende diner voor volgende maand', hint: 'Enthousiast', next: 'c10g' },
        { text: 'Je geniet van het moment zonder plannen te maken', hint: 'Aanwezig', next: 'c10n' },
      ],
      quiz: { q: 'Wat zegt Sara na het eten?', opts: ['"De volgende keer koken wij"', '"Dit moeten we vaker doen!"', '"Het was oké"', '"Ik ga naar huis"'], a: 1 },
    },
    c9b: {
      id: 'c9b', num: 9, title: 'Lachen om de chaos',
      text: 'Het eten was niet perfect maar de avond was heerlijk vanwege de goede sfeer en het lachen. Tom heeft foto\'s gemaakt van de vloeibare tiramisu en ze op zijn telefoon laten zien. Iedereen lag in een deuk. "De volgende keer nemen wij het nagerecht mee," heeft Emma beloofd lachend.',
      vocab: [
        { w: 'vanwege', d: 'because of / due to' },
        { w: 'in een deuk liggen', d: 'to be in stitches (laughing)' },
        { w: 'beloven', d: 'to promise' },
        { w: 'lachend', d: 'laughingly' },
      ],
      choices: [
        { text: 'Je vindt het een geslaagde avond ondanks alles', hint: 'Positief', next: 'c10n' },
        { text: 'Je besluit pizza te bestellen want het eten was niet genoeg', hint: 'Eerlijk', next: 'c10b' },
      ],
      quiz: { q: 'Wat heeft Emma beloofd voor de volgende keer?', opts: ['Te koken voor jou', 'Het nagerecht mee te nemen', 'De wijn te betalen', 'Te helpen met afwassen'], a: 1 },
    },
    c10g: {
      id: 'c10g', num: 10, title: 'De perfecte avond',
      ending: 'good',
      text: 'Het diner was verrassend heerlijk en de vrienden zijn allemaal weg met grote glimlachen. Je hebt de keuken opgeruimd en zit nu op de bank met een glas wijn. Je hebt al een datum gepland voor het volgende diner en Sara gaat dan de tiramisu maken. Je hebt bewezen dat je kunt koken, ook als het niet perfect gaat.',
      vocab: [
        { w: 'verrassend', d: 'surprisingly' },
        { w: 'de datum', d: 'the date' },
        { w: 'bewijzen', d: 'to prove' },
        { w: 'de bank', d: 'the sofa / couch' },
      ],
      choices: [],
      quiz: { q: 'Wie gaat de volgende keer de tiramisu maken?', opts: ['Tom', 'Emma', 'Sara', 'Jijzelf weer'], a: 2 },
    },
    c10n: {
      id: 'c10n', num: 10, title: 'Een goede avond',
      ending: 'neutral',
      text: 'Het eten was niet perfect maar de avond was gezellig en vol lachen. De vrienden zijn blij weggegaan en je hebt goede herinneringen gemaakt. De keuken was een ramp maar dat hoort er ook bij. Je denkt: "Vrienden komen niet voor het eten, ze komen voor de gezelligheid." En dat klopt.',
      vocab: [
        { w: 'de herinnering', d: 'the memory' },
        { w: 'erbij horen', d: 'to be part of it' },
        { w: 'de gezelligheid', d: 'the togetherness / fun' },
        { w: 'kloppen', d: 'to be true / correct' },
      ],
      choices: [],
      quiz: { q: 'Wat denk je aan het einde van de avond over vrienden?', opts: ['"Ze komen voor het eten"', '"Ze komen voor de gezelligheid"', '"Ze moeten vaker komen"', '"Ik nodig ze nooit meer uit"'], a: 1 },
    },
    c10b: {
      id: 'c10b', num: 10, title: 'Pizza gered de dag',
      ending: 'bad',
      text: 'Het zelfgekookte diner was niet goed genoeg dus jullie hebben pizza besteld. De bezorger stond tien minuten later voor de deur met vier grote dozen. Iedereen was opgelucht en hongerig. Je voelt je een beetje beschaamd maar ook een beetje blij want de pizza was heerlijk. De vrienden hebben er wel om gelachen.',
      vocab: [
        { w: 'de bezorger', d: 'the delivery person' },
        { w: 'de doos', d: 'the box' },
        { w: 'beschaamd', d: 'embarrassed / ashamed' },
        { w: 'hongerig', d: 'hungry' },
      ],
      choices: [],
      quiz: { q: 'Hoelang duurde het voordat de pizza er was?', opts: ['Vijf minuten', 'Tien minuten', 'Twintig minuten', 'Een halfuur'], a: 1 },
    },
  },
};
