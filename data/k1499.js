/* K1499 Artificial intelligence: werken met generatieve AI — weekinhoud */
(function(){
const T = (nieuws, uitleg, werk, disc) => [['0:00–0:20','AI-nieuws van de week: '+nieuws],['0:20–1:20',uitleg],['1:20–2:30',werk],['2:30–3:00',disc]];

window.KD = {
code:'k1499',
titel:'Werken met generatieve AI',
kort:'AI-gebruiker in je eigen beroep',
intro:'Je leert hoe generatieve AI werkt, hoe je de juiste AI-tool kiest voor jouw beroep en hoe je er verantwoord en kritisch mee werkt: slim prompten, controleren, aanpassen. Alles doe je in de context van <b>jouw eigen vak</b>.',
fases:[
  {naam:'1 · Begrijpen', weken:[1,2,3,4]},
  {naam:'2 · Kiezen (W1)', weken:[5,6,7,8]},
  {naam:'3 · Inzetten (W2)', weken:[9,10,11,12,13,14,15]},
  {naam:'4 · Bewijzen', weken:[16,17,18]}
],
weken:[
/* ================= FASE 1 BEGRIJPEN ================= */
{nr:1, fase:'Begrijpen', titel:'Waar zit AI in mijn vak?', dossier:'oriëntatie', urenLeren:3,
 doelen:['uitleggen wat generatieve AI is en wat het verschil is met "gewone" software','voorbeelden noemen van AI in jouw eigen beroep','je eigen startniveau (nulmeting) vastleggen'],
 contact:{tijdlijn:T('wat heb jij deze week aan AI gezien of gebruikt?','Kennismaking, opbouw keuzedeel, toetsing. Mini-demo: één vraag aan vier AI-tools, wat valt op?','Nulmeting invullen, profiel instellen, eerste verkenning in tweetallen per beroep','Stelling + afspraken over verantwoord gebruik in de les'),
   stelling:'Over vijf jaar werkt niemand in mijn vak meer zonder AI.',
   docent:'Laat deelnemers per beroep groeperen (ICT / bouw / T&T / design / LLO). Leg de lat: het gaat om AI in hún beroep, niet om AI als hobby. Bespreek de privacy-afspraak (geen persoonsgegevens) direct in les 1.'},
 uitleg:`<h3>Wat is generatieve AI?</h3>
<p><b>Artificial intelligence (AI)</b> is software die taken uitvoert waarvoor je normaal menselijke intelligentie nodig hebt: taal begrijpen, patronen herkennen, beslissen. "Gewone" software volgt regels die een programmeur heeft geschreven (<i>als dit, dan dat</i>). AI-software heeft die regels zelf <b>geleerd uit voorbeelden</b>: data.</p>
<p><b>Generatieve AI</b> is een soort AI die <b>nieuwe content maakt</b>: tekst, beeld, geluid, video of code. Voorbeelden: ChatGPT, Copilot, Claude en Gemini (tekst, code en vaak ook beeld), beeldgenerators en muziek- of stemgenerators.</p>
<div class="kader"><b>Vooraf getraind.</b> In dit keuzedeel werk je met <i>vooraf getrainde</i> AI-tools. Een bedrijf heeft het model al getraind op enorme hoeveelheden data. Jij gebruikt het alleen. Zelf een AI-oplossing samenstellen doe je in het vervolgkeuzedeel K1515.</div>
<h3>Waarom dit keuzedeel?</h3>
<ul><li>Werkgevers verwachten steeds vaker dat je met AI kunt werken, maar veel mensen weten niet goed hoe je dat <b>goed en veilig</b> doet.</li>
<li>De Europese <b>AI-verordening (AI Act)</b> verplicht organisaties sinds februari 2025 om te zorgen voor <b>AI-geletterdheid</b> van medewerkers die met AI werken.</li>
<li>AI verandert werkprocessen: sommige taken worden sneller, sommige verdwijnen, er komen nieuwe bij.</li></ul>
<h3>De rode draad: AI in jóúw vak</h3>
<p>Alles wat je in dit keuzedeel doet, doe je voor je eigen (toekomstige) beroep. Aan het eind heb je:</p>
<ol><li><b>Beroepsproduct 1 – Tooladvies</b>: een onderbouwde keuze voor de AI-tool(s) die passen bij jouw werk (werkproces 1).</li>
<li><b>Beroepsproduct 2 – Praktijkopdracht</b>: een echte taak uit jouw werk, uitgevoerd met AI, gecontroleerd en verantwoord (werkproces 2).</li></ol>
<h3>Wat AI níét is</h3>
<p>Een taalmodel "weet" niets zoals een mens dat weet. Het voorspelt welke tekst waarschijnlijk volgt. Daardoor klinkt het altijd zelfverzekerd, ook als het fout zit. <b>Jij blijft verantwoordelijk</b> voor wat je ermee doet. Dat principe komt elke week terug.</p>`,
 bronnen:[['Rijksoverheid – AI-verordening','https://www.rijksoverheid.nl/onderwerpen/kunstmatige-intelligentie-ai','overheidsinformatie'],['Autoriteit Persoonsgegevens – AI-geletterdheid','https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai','wat organisaties moeten doen']],
 oefening:[{type:'zelfscan', id:'nulmeting', ico:'📊', titel:'Nulmeting: hoe AI-geletterd ben ik nu?', intro:'Schat jezelf eerlijk in. In week 18 doe je dezelfde scan opnieuw en zie je je groei.',
   items:['Ik kan uitleggen hoe een taalmodel tekst maakt','Ik weet welke AI-tools er zijn voor mijn beroep','Ik schrijf prompts die in één keer goed resultaat geven','Ik controleer AI-antwoorden op fouten en bronnen','Ik herken bias (vooroordelen) in AI-content','Ik weet wat wel en niet mag qua privacy en auteursrecht','Ik weet wat de AI Act betekent voor mijn werk','Ik gebruik AI om beelden of geluid te maken']},
   {type:'sorteer', id:'isdatai', ico:'🤔', titel:'Is dit generatieve AI?', cats:['Generatieve AI','Andere AI','Geen AI'],
   items:[{t:'Een chatbot schrijft een offertetekst voor een klant.',c:0,u:'Maakt nieuwe tekst.'},{t:'Een camera op de bouwplaats herkent of iemand een helm draagt.',c:1,u:'Beeldherkenning: AI die classificeert, maar niets nieuws maakt.'},{t:'Excel berekent met SOM() het totaal van een kolom.',c:2,u:'Vaste regel, geen geleerd gedrag.'},{t:'Een tool maakt een moodboard-afbeelding op basis van een beschrijving.',c:0,u:'Beeldgeneratie.'},{t:'Netflix raadt je een serie aan.',c:1,u:'Aanbevelingssysteem: AI, maar niet generatief.'},{t:'GitHub Copilot vult je code aan.',c:0,u:'Genereert nieuwe code.'},{t:'Een thermostaat schakelt de verwarming bij 19 °C.',c:2,u:'Simpele regel.'}]}],
 opdrachten:[
  {id:'a', titel:'Mijn beroep in beeld', uren:2, tekst:'<p>Beschrijf je (toekomstige) beroep in 5 tot 10 typische taken. Geef bij elke taak aan: <b>kan AI hier helpen?</b> (ja / misschien / nee) en waarom.</p>', invoer:'Taak 1: … – AI? ja/misschien/nee, omdat …'},
  {id:'b', titel:'AI-interview met een professional', uren:3, tekst:'<p>Interview iemand uit je vakgebied: je BPV-begeleider, een collega of een docent uit je vak. Vragen: Gebruik je AI? Waarvoor? Wat zijn de regels in jullie bedrijf? Waar ben je bang voor? Wat verwacht je van nieuwe collega\'s?</p><p>Noteer de antwoorden en je 3 belangrijkste inzichten.</p>', invoer:'Wie (functie, geen naam): …\nAntwoorden: …\nMijn 3 inzichten: …'},
  {id:'c', titel:'Eerste kennismaking met 2 tools', uren:2, tool:'Copilot + 1 andere', tekst:'<p>Stel dezelfde vakvraag aan Copilot (schoolaccount) en aan één andere tool. Kopieer de antwoorden niet volledig; beschrijf de verschillen in lengte, toon, juistheid en bruikbaarheid.</p>', invoer:'Mijn vraag: …\nVerschillen: …',
   pro:'Gebruik je betaalde versie en de gratis versie van dezelfde tool naast elkaar. Merk je verschil in kwaliteit, snelheid of mogelijkheden (bijvoorbeeld bestanden uploaden of op het web zoeken)?'}
 ],
 context:{ict:'Een servicedesk-medewerker die AI gebruikt om een storingsmelding samen te vatten en een eerste antwoord aan de gebruiker op te stellen.',bouw:'Een werkvoorbereider die AI een bestek laat samenvatten of een planning-opzet laat maken voor een renovatie.',tt:'Een monteur die AI vraagt een foutcode van een PLC te verklaren of een onderhoudsinstructie te vereenvoudigen.',design:'Een mediavormgever die AI gebruikt voor moodboards, tekstvarianten voor een campagne of een eerste schets.',llo:'Een docent die AI laat helpen bij het maken van oefenvragen, of een kantoormedewerker die notulen laat samenvatten.'},
 quiz:[{v:'Wat is het belangrijkste verschil tussen generatieve AI en andere AI?',o:['Generatieve AI is altijd online','Generatieve AI maakt nieuwe content','Generatieve AI gebruikt geen data','Generatieve AI maakt nooit fouten'],g:1,u:'Generatief = genereren = iets nieuws maken (tekst, beeld, geluid, code).'},
  {v:'Wat betekent "vooraf getraind"?',o:['Jij moet het model eerst trainen','Het model is al getraind door de maker; jij gebruikt het','Het model kan niet meer leren van jouw prompts','Het model werkt alleen offline'],g:1,u:'Je gebruikt een bestaand model. Zelf samenstellen en trainen komt in K1515.'},
  {v:'Sinds wanneer verplicht de AI Act organisaties om te zorgen voor AI-geletterdheid?',o:['2023','februari 2025','2030','Dat verplicht de AI Act niet'],g:1,u:'Artikel 4 AI Act geldt sinds 2 februari 2025.'},
  {v:'Wie is verantwoordelijk voor een fout in een tekst die je met AI hebt gemaakt en hebt verstuurd?',o:['De maker van de AI-tool','Niemand','Jij (en je werkgever)','De AI zelf'],g:2,u:'Jij gebruikt en verstuurt het, dus jij blijft verantwoordelijk.'}],
 reflectie:'Wat verwacht je van AI in jouw beroep: kans, bedreiging of allebei? Waarom?'},

{nr:2, fase:'Begrijpen', titel:'Hoe werkt het? Data, modellen en tokens', dossier:'vakkennis', urenLeren:4,
 doelen:['in eigen woorden uitleggen wat machine learning, een taalmodel en beeldherkenning zijn','uitleggen hoe een taalmodel woord voor woord (token voor token) tekst maakt','begrijpen wat temperature doet'],
 contact:{tijdlijn:T('een nieuw model of nieuwe functie','Van regels naar leren: machine learning, neurale netwerken, taalmodellen (LLM), beeldherkenning en beeldgeneratie (diffusie). Live: het tokenspel klassikaal.','Tokenspel en uitleg-opdracht; docent loopt rond','"Begrijpt" AI wat het zegt? Discussie.'),
   stelling:'Een taalmodel begrijpt wat het schrijft.',
   docent:'Laat de klas eerst zelf het volgende woord raden voordat je de kansen toont. Benadruk: een taalmodel voorspelt, het zoekt niet op (tenzij het een zoekfunctie heeft).'},
 uitleg:`<h3>Machine learning: leren van voorbeelden</h3>
<p>Bij <b>machine learning</b> geef je een computer heel veel voorbeelden en laat je hem zelf de patronen ontdekken. Wil je dat een systeem foto's van scheuren in beton herkent? Dan train je het met duizenden foto's mét en zónder scheur. Het systeem past zijn interne instellingen (<i>parameters</i>) aan tot het zo weinig mogelijk fouten maakt.</p>
<h3>Neurale netwerken en deep learning</h3>
<p>De meeste moderne AI gebruikt <b>neurale netwerken</b>: lagen van rekeneenheden ("neuronen") die met gewichten aan elkaar verbonden zijn. Met veel lagen heet het <b>deep learning</b>. Grote taalmodellen hebben honderden miljarden parameters.</p>
<h3>Taalmodellen (LLM's)</h3>
<p>Een <b>large language model</b> is getraind op een enorme hoeveelheid tekst. Het heeft één taak geleerd: <b>voorspel het volgende stukje tekst</b>. Zo'n stukje heet een <b>token</b>: een woord of een deel van een woord. (Nederlands kost meestal meer tokens dan Engels.)</p>
<div class="kader">Prompt: "De fundering van een woning wordt gemaakt van …"<br>Het model berekent voor elk mogelijk volgend token een kans: <i>beton</i> 62%, <i>gewapend</i> 18%, <i>hout</i> 4%… Het kiest er één, plakt hem erachter en herhaalt dit honderden keren. Zo ontstaat een heel antwoord.</div>
<p>Na de basistraining wordt het model <b>bijgestuurd</b> met menselijke feedback, zodat het behulpzaam, beleefd en veiliger antwoordt (dit heet RLHF; daarover meer in K1515).</p>
<h3>Temperature: creatief of voorspelbaar</h3>
<p>Met de instelling <b>temperature</b> bepaal je hoe "gewaagd" het model kiest. Laag = bijna altijd het meest waarschijnlijke woord (feitelijk, saai). Hoog = meer variatie (creatief, maar meer kans op onzin). In de chat-apps kun je dit meestal niet zelf instellen, wel via instellingen of API's.</p>
<h3>Beeld: herkennen en genereren</h3>
<ul><li><b>Beeldherkenning</b>: het model zegt wat er op een afbeelding staat (classificeren, objecten vinden). Voorbeeld: helmdetectie op de bouwplaats.</li>
<li><b>Beeldgeneratie</b>: veel beeldgenerators zijn <b>diffusiemodellen</b>. Ze beginnen met ruis en halen die stap voor stap weg, gestuurd door jouw tekst, tot er een afbeelding ontstaat.</li>
<li><b>Multimodaal</b>: moderne modellen kunnen tekst, beeld en soms geluid tegelijk verwerken. Je kunt bijvoorbeeld een foto van een schakelkast uploaden en er vragen over stellen.</li></ul>
<h3>Wat volgt hieruit?</h3>
<p>Omdat een taalmodel voorspelt wat <i>waarschijnlijk</i> klinkt en niet wat <i>waar</i> is, kan het overtuigend klinkende fouten maken. Dat heet <b>hallucineren</b>. Daarover gaat week 3.</p>`,
 bronnen:[['3Blue1Brown – Large Language Models explained briefly (video, EN)','https://www.youtube.com/watch?v=LPZh9BOjkQs','8 minuten, met ondertiteling'],['Nationale AI-cursus','https://ai-cursus.nl/','gratis Nederlandstalige basiscursus']],
 oefening:{type:'tokenspel', ico:'🎲', titel:'Tokenspel: voorspel het volgende woord', intro:'Zo werkt een taalmodel: het berekent kansen voor het volgende woord. Speel met temperature en top-p.',
  rondes:[
   {zin:'De fundering van een woning wordt meestal gemaakt van', kansen:[['beton',.62],['gewapend',.18],['hout',.04],['staal',.06],['kaas',.001],['palen',.09]], uitleg:'Het model kiest vaak "beton" omdat dat in de trainingsdata het vaakst volgt. "Kaas" heeft bijna 0% kans, maar bij een hoge temperature kan het toch voorkomen.'},
   {zin:'Een goede wachtwoordzin bestaat uit minimaal vier', kansen:[['woorden',.71],['tekens',.12],['cijfers',.07],['letters',.06],['katten',.002]], uitleg:'Context bepaalt de kansen: door "wachtwoordzin" is "woorden" veel waarschijnlijker dan "tekens".'},
   {zin:'Het logo voor de bakkerij krijgt een warme kleur, zoals', kansen:[['oranje',.34],['geel',.22],['rood',.21],['bruin',.15],['ijsblauw',.01]], uitleg:'Bij creatieve taken liggen de kansen dichter bij elkaar. Een hogere temperature geeft dan meer gevarieerde ideeën.'},
   {zin:'De hoofdstad van Australië is', kansen:[['Canberra',.55],['Sydney',.38],['Melbourne',.06],['Perth',.01]], uitleg:'Let op: "Sydney" heeft een flinke kans omdat het vaak in teksten over Australië voorkomt, maar het is fout. Zo ontstaan hallucinaties: waarschijnlijk ≠ waar.'}]},
 opdrachten:[
  {id:'a', titel:'Leg het uit aan een collega', uren:2, tekst:'<p>Schrijf in maximaal 150 woorden voor een collega zonder AI-kennis hoe een taalmodel een antwoord maakt. Gebruik de woorden <i>training</i>, <i>token</i>, <i>kans</i> en <i>hallucinatie</i>. Gebruik géén AI om dit te schrijven: je moet het zelf kunnen uitleggen.</p>', invoer:'Mijn uitleg (max. 150 woorden)…'},
  {id:'b', titel:'Laat AI zichzelf uitleggen en check het', uren:2, tekst:'<p>Vraag een AI-tool: "Leg uit hoe jij werkt, alsof ik 15 ben." Vergelijk het antwoord met de uitleg van deze week. Wat klopt? Wat is vaag of fout? Wat laat de AI weg?</p>', invoer:'Wat klopt / wat is vaag / wat ontbreekt…'},
  {id:'c', titel:'Waar zit AI in mijn vakgereedschap?', uren:2, tekst:'<p>Zoek uit welke software in jouw vak al AI-functies heeft (bijv. CAD-, ontwerp-, ontwikkel-, kantoor- of onderhoudssoftware). Noem er minimaal 3 en zeg per stuk: herkent het (andere AI) of maakt het iets nieuws (generatief)?</p>', invoer:'Software – AI-functie – herkennend of generatief'}
 ],
 context:{ict:'Denk aan GitHub Copilot in je code-editor, AI in Microsoft 365, AI-samenvattingen in ticketsystemen.',bouw:'Denk aan AI in BIM- en CAD-software (Revit, Archicad), automatische hoeveelheden-uittrekken, AI-render-tools.',tt:'Denk aan voorspellend onderhoud, beeldinspectie in productie, AI-assistenten in PLC- of CAD-software.',design:'Denk aan generatieve vulling in Photoshop, Adobe Firefly, Canva Magic, AI in Figma.',llo:'Denk aan Copilot in Word/Outlook/Teams, AI-functies in je leer- of administratiesysteem.'},
 quiz:[{v:'Wat doet een taalmodel eigenlijk bij elke stap?',o:['Het zoekt het antwoord op internet op','Het voorspelt het volgende token','Het kopieert een zin uit de trainingsdata','Het denkt na zoals een mens'],g:1,u:'Een LLM voorspelt steeds het meest passende volgende token.'},
  {v:'Wat gebeurt er bij een hoge temperature?',o:['Antwoorden worden korter','Het model gebruikt meer bronnen','Er komt meer variatie (en meer kans op onzin)','Het model wordt nauwkeuriger'],g:2,u:'Hoge temperature betekent dat ook minder waarschijnlijke woorden gekozen worden.'},
  {v:'Een helmdetector op de bouwplaats is een voorbeeld van…',o:['beeldgeneratie','beeldherkenning','een taalmodel','geen AI'],g:1,u:'Het herkent iets op een beeld en maakt niets nieuws.'},
  {v:'Waarom kan een taalmodel overtuigend fout zijn?',o:['Omdat het liegt','Omdat het kiest wat waarschijnlijk klinkt, niet wat waar is','Omdat het internet fout is','Dat kan niet'],g:1,u:'Waarschijnlijk ≠ waar. Daarom moet je altijd controleren.'}],
 reflectie:'Wat verraste je het meest aan hoe een taalmodel werkt? Verandert dat hoe je het gaat gebruiken?'},

{nr:3, fase:'Begrijpen', titel:'Mogelijkheden, beperkingen en hallucinaties', dossier:'vakkennis', urenLeren:3,
 doelen:['benoemen waar AI goed en minder goed in is','hallucinaties herkennen','uitleggen wat een kennisdatum en een contextvenster zijn'],
 contact:{tijdlijn:T('een opvallende AI-fout uit het nieuws','Sterk en zwak: taal, samenvatten, ideeën ↔ rekenen, actuele feiten, bronnen, nuance. Begrippen: kennisdatum, contextvenster, hallucinatie, "sycophancy" (naar de mond praten).','Hallucinatie-jacht: wie krijgt AI zover dat het iets verzint over het eigen vak?','Wanneer vertrouw je AI wel/niet?'),
   stelling:'Als AI een bron noemt, kun je ervan uitgaan dat die bron bestaat.',
   docent:'Hallucinatie-jacht werkt goed met nichevragen over het eigen vak (lokale regelgeving, specifieke normen, bedrijven uit Helmond).'},
 uitleg:`<h3>Waar is generatieve AI goed in?</h3>
<ul><li><b>Taal</b>: schrijven, herschrijven, samenvatten, vertalen, toon aanpassen.</li>
<li><b>Structuur</b>: lijstjes, tabellen, stappenplannen, opzetjes.</li>
<li><b>Ideeën</b>: brainstormen, variaties bedenken, invalshoeken.</li>
<li><b>Uitleg</b>: moeilijke stof eenvoudiger maken, voorbeelden geven.</li>
<li><b>Code</b>: schrijven, uitleggen, fouten zoeken.</li>
<li><b>Beeld en geluid</b>: schetsen, moodboards, stemmen, achtergrondmuziek.</li></ul>
<h3>Waar is het minder goed in?</h3>
<ul><li><b>Actuele feiten</b>: een model heeft een <b>kennisdatum</b> (knowledge cutoff). Wat daarna gebeurde, weet het niet, tenzij het kan zoeken op internet.</li>
<li><b>Exacte feiten, getallen en bronnen</b>: het kan bronnen, wetsartikelen of normen <b>verzinnen</b>.</li>
<li><b>Rekenen en tellen</b> (beter met een rekentool of code), en <b>lokale of specialistische kennis</b> (bedrijfsprocedures, gemeentelijke regels, NEN-normen).</li>
<li><b>Verantwoordelijkheid en context</b>: het kent jouw klant, situatie en bedrijfsafspraken niet.</li></ul>
<h3>Hallucinaties</h3>
<p>Een <b>hallucinatie</b> is een antwoord dat overtuigend klinkt maar niet klopt. Het model "liegt" niet bewust. Het maakt wat waarschijnlijk klinkt. Typische signalen:</p>
<ul><li>heel precieze getallen, data of namen zonder bron;</li><li>bronnen, boeken of URL's die niet bestaan;</li><li>wetsartikelen of normnummers die net niet kloppen;</li><li>een antwoord dat meebuigt als jij zegt dat het fout is, ook als het eerst goed was (<b>naar de mond praten</b>).</li></ul>
<h3>Contextvenster</h3>
<p>Een model kan maar een beperkte hoeveelheid tekst tegelijk "zien": het <b>contextvenster</b>. Bij lange gesprekken of grote documenten kan informatie van het begin "uit beeld" raken. Tip: begin een nieuw gesprek voor een nieuwe taak en vat belangrijke informatie samen.</p>
<div class="kader"><b>Vuistregel:</b> gebruik AI als een snelle, slimme stagiair die nooit "ik weet het niet" zegt. Handig voor een eerste versie, maar alles wat ertoe doet controleer je zelf.</div>`,
 oefening:[{type:'klikfouten', ico:'🔍', titel:'Spot de hallucinaties', intro:'Dit antwoord kwam uit een AI-tool op de vraag "Wat moet ik weten over de AI Act?". Klik op de zinnen die niet kloppen.',
  delen:[{t:'De AI Act is een Europese verordening over kunstmatige intelligentie.'},{t:'Hij werd in 2018 ingevoerd, tegelijk met de AVG.',fout:true,u:'De AI Act trad op 1 augustus 2024 in werking. De AVG geldt sinds 2018.'},{t:'De wet deelt AI-systemen in naar risico.'},{t:'Er zijn precies twee risicoklassen: hoog en laag.',fout:true,u:'Er zijn vier niveaus: onaanvaardbaar (verboden), hoog, beperkt (transparantie) en minimaal.'},{t:'Bepaalde toepassingen, zoals social scoring door overheden, zijn verboden.'},{t:'Volgens artikel 112b moet elke werknemer een AI-diploma halen.',fout:true,u:'Verzonnen artikel. Artikel 4 vraagt om "voldoende AI-geletterdheid", niet om een diploma.'},{t:'Bij chatbots moet duidelijk zijn dat je met AI praat.'},{t:'Boetes kunnen oplopen tot 2% van de wereldwijde omzet, met een maximum van €500.',fout:true,u:'De maximale boetes zijn veel hoger: tot €35 miljoen of 7% van de wereldwijde jaaromzet voor verboden praktijken.'}]},
  {type:'sorteer', id:'goedslecht', ico:'⚖️', titel:'Goede of riskante taak voor AI?', cats:['Prima met AI','Kan, maar check goed','Liever niet'],
  items:[{t:'Vijf varianten bedenken voor een slogan.',c:0,u:'Creatief, laag risico.'},{t:'De dragende constructie van een uitbouw doorrekenen.',c:2,u:'Veiligheidskritisch: dat doet een constructeur met erkende software.'},{t:'Een lange handleiding samenvatten voor collega\'s.',c:1,u:'Handig, maar check of er niets belangrijks wegvalt.'},{t:'Een e-mail beleefder herschrijven.',c:0,u:'Laag risico, en je leest het zelf na.'},{t:'De juiste NEN-norm opzoeken voor een elektrische installatie.',c:1,u:'AI kan normnummers verzinnen: altijd checken in de officiële bron.'},{t:'Medische gegevens van een klant laten analyseren in een gratis chatbot.',c:2,u:'Bijzondere persoonsgegevens horen niet in een gratis AI-tool (AVG).'},{t:'Een foutmelding in je code laten uitleggen.',c:0,u:'Prima. Test de oplossing wel.'}]}],
 opdrachten:[
  {id:'a', titel:'Hallucinatie-jacht in mijn vak', uren:3, tekst:'<p>Probeer een AI-tool een hallucinatie te laten maken over je eigen vakgebied: vraag naar specifieke normen, regels, bronnen, lokale bedrijven of recente ontwikkelingen. Controleer de antwoorden met een betrouwbare bron.</p><p>Leg vast: je prompt, wat de AI beweerde, wat er écht klopt (met bron) en hoe je het had kunnen merken.</p>', invoer:'Prompt: …\nAI beweerde: …\nWerkelijkheid (bron): …\nSignaal dat ik had kunnen zien: …'},
  {id:'b', titel:'Sterk/zwak-overzicht voor mijn beroep', uren:2, tekst:'<p>Maak een tabel met minimaal 4 taken uit je beroep waar AI <b>sterk</b> is en 4 waar AI <b>zwak of riskant</b> is. Geef bij elke taak aan waarom.</p>', invoer:'Sterk: …\nZwak/riskant: …'},
  {id:'c', titel:'Kennisdatum testen', uren:1, tekst:'<p>Vraag aan twee tools wat hun kennisdatum is en stel een vraag over iets van de afgelopen maand. Zoekt de tool op internet? Hoe zie je dat (bronvermelding)?</p>', invoer:'Tool 1: … / Tool 2: …',
   pro:'Gebruik de "deep research"- of onderzoeksfunctie van je betaalde tool voor een vakvraag. Controleer 3 van de genoemde bronnen: bestaan ze en staat er écht wat de AI zegt?'}
 ],
 quiz:[{v:'Wat is een hallucinatie?',o:['Een AI die een afbeelding maakt','Een overtuigend klinkend maar onjuist antwoord','Een AI die weigert te antwoorden','Een storing van de server'],g:1},
  {v:'Wat is de kennisdatum van een model?',o:['De datum waarop jij het gebruikt','Tot wanneer de trainingsdata loopt','De datum van de laatste update van de app','De houdbaarheid van je abonnement'],g:1},
  {v:'Je zegt tegen de AI "Dat klopt niet" en hij geeft je meteen gelijk. Wat is het risico?',o:['Geen, de AI is eerlijk','De AI praat je naar de mond, ook als het eerst goed was','De AI wordt trager','De AI onthoudt het voor altijd'],g:1,u:'Modellen zijn getraind om behulpzaam te zijn en buigen soms te makkelijk mee.'},
  {v:'Welke taak is het meest riskant om aan AI over te laten?',o:['Een tekst inkorten','Brainstormen over namen','Een veiligheidsberekening voor een constructie','Een e-mail vertalen'],g:2}],
 reflectie:'Bij welke taak in je vak zou een hallucinatie de meeste schade doen? Hoe voorkom je dat?'},

{nr:4, fase:'Begrijpen', titel:'Ethiek, privacy en digitale veiligheid', dossier:'vakkennis', urenLeren:3,
 doelen:['uitleggen wat er met je invoer gebeurt bij AI-tools','bepalen welke informatie je wel en niet in een AI-tool mag zetten','ethische dilemma\'s rond AI in je beroep bespreken'],
 contact:{tijdlijn:T('een privacy- of datalek-incident met AI','Wat gebeurt er met je prompt? Gratis vs. zakelijk/school, training op gebruikersdata, AVG basis, bedrijfsgeheimen, phishing en deepfakes.','Privacy-stoplicht + eigen beroepsrichtlijn opstellen','Ethisch dilemma per beroep'),
   stelling:'Als ik de naam weglaat, mag ik klantgegevens gewoon in ChatGPT zetten.',
   docent:'Laat zien waar in de instellingen van elke tool het "trainen op mijn gegevens" uitgezet kan worden. Wijs op het verschil tussen persoonlijke accounts en het schoolaccount (Copilot met gegevensbescherming).'},
 uitleg:`<h3>Wat gebeurt er met wat je intypt?</h3>
<p>Alles wat je in een AI-tool zet (tekst, bestanden, foto's) gaat naar de servers van de aanbieder. Afhankelijk van de tool en je account:</p>
<ul><li>kan je invoer gebruikt worden om toekomstige modellen te <b>trainen</b> (bij gratis consumentenversies vaak standaard aan, soms uit te zetten);</li>
<li>wordt je gesprek een tijd <b>bewaard</b>, soms ook om misbruik te controleren;</li>
<li>gelden bij <b>zakelijke of schoolaccounts</b> meestal strengere afspraken: invoer wordt niet gebruikt voor training. Bij Microsoft Copilot met je schoolaccount zie je dat aan een schildje of de melding "beveiligd".</li></ul>
<h3>Wat zet je er níét in?</h3>
<table><tr><th>🟥 Nooit</th><th>🟧 Alleen met toestemming en zakelijk account</th><th>🟩 Prima</th></tr>
<tr><td>Wachtwoorden, BSN, medische gegevens, gegevens van klanten/leerlingen/patiënten, geheime bedrijfsinformatie</td><td>Interne documenten, niet-openbare tekeningen of code, offertes</td><td>Openbare informatie, je eigen teksten, geanonimiseerde en verzonnen voorbeelden</td></tr></table>
<p><b>Anonimiseren</b> is lastiger dan je denkt: een functie + bedrijfsnaam + woonplaats kan samen al naar één persoon wijzen. Dan is het nog steeds een <b>persoonsgegeven</b> volgens de AVG.</p>
<h3>Digitale veiligheid</h3>
<ul><li><b>Phishing</b> wordt overtuigender: AI schrijft foutloze nepmails in perfect Nederlands.</li>
<li><b>Deepfakes</b>: nep-stemmen en -video's. Bel bij een vreemd verzoek (bijv. "maak snel geld over") altijd terug via een bekend nummer.</li>
<li><b>Code en bestanden</b> van AI kunnen kwetsbaarheden bevatten. Voer niets blind uit.</li>
<li><b>Prompt injection</b>: verborgen instructies in een document of website kunnen een AI met toegang tot je mail of bestanden misleiden.</li></ul>
<h3>Ethiek: meer dan de wet</h3>
<p>Iets kan legaal zijn en toch onverstandig. Vragen die je jezelf stelt:</p>
<ul><li><b>Eerlijkheid</b>: weet de ontvanger dat AI meegeschreven heeft? Moet dat?</li>
<li><b>Gelijkheid</b>: benadeelt de output bepaalde groepen? (week 13)</li>
<li><b>Vakmanschap</b>: leer ik nog genoeg zelf, of word ik afhankelijk?</li>
<li><b>Duurzaamheid</b>: AI kost veel energie en water. Gebruik het waar het waarde toevoegt.</li></ul>`,
 bronnen:[['Autoriteit Persoonsgegevens – AI-chatbots en privacy','https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai','let op persoonsgegevens'],['Veiliginternetten.nl','https://veiliginternetten.nl/','phishing en deepfakes herkennen']],
 oefening:[{type:'sorteer', id:'stoplicht', ico:'🚦', titel:'Privacy-stoplicht: mag dit in een gratis AI-tool?', cats:['🟩 Prima','🟧 Alleen zakelijk + toestemming','🟥 Nooit'],
  items:[{t:'De openbare tekst van een bouwbesluit-artikel, om het te laten uitleggen.',c:0,u:'Openbare informatie.'},{t:'Een Excel-lijst met namen en cijfers van je klasgenoten.',c:2,u:'Persoonsgegevens van anderen.'},{t:'Je eigen sollicitatiebrief, om de spelling te checken.',c:0,u:'Je eigen tekst. Laat je adres eventueel weg.'},{t:'De broncode van een klantproject van je stagebedrijf.',c:1,u:'Bedrijfseigendom: alleen als je bedrijf dat toestaat, met een zakelijk account.'},{t:'Een foto van een zieke collega, om een beterschapskaart te maken.',c:2,u:'Gezondheid en gezicht: bijzondere en herleidbare gegevens.'},{t:'Een verzonnen klantvraag om een antwoordsjabloon te maken.',c:0,u:'Verzonnen voorbeelden zijn veilig.'},{t:'De bouwtekening van een nog niet aangekondigd project.',c:1,u:'Vertrouwelijk. Alleen binnen de afspraken van het bedrijf.'},{t:'Het wachtwoord van de Wi-Fi, "zodat de AI kan helpen met de configuratie".',c:2,u:'Wachtwoorden nooit.'}]},
  {type:'klikfouten', id:'anoniem', ico:'🕵️', titel:'Anonimiseer deze melding', intro:'Klik alles aan wat je moet weglaten of vervangen voordat deze melding in een AI-tool mag.',
  delen:[{t:'Melding van'},{t:'Sanne de Vries',fout:true,u:'naam'},{t:'(klantnr.'},{t:'204-5531',fout:true,u:'klantnummer is herleidbaar'},{t:'), wonend aan de'},{t:'Kerkstraat 12 in Mierlo',fout:true,u:'adres'},{t:': de cv-ketel geeft foutcode F28. Ze is'},{t:'zwanger',fout:true,u:'gezondheid = bijzonder persoonsgegeven en niet nodig'},{t:'en wil graag snel hulp. Bereikbaar op'},{t:'06-12345678',fout:true,u:'telefoonnummer'},{t:'. Ketel: merk X, bouwjaar 2014.'}]}],
 opdrachten:[
  {id:'a', titel:'Instellingen doorlichten', uren:2, tekst:'<p>Zoek in de AI-tools die jij gebruikt op: (1) wordt mijn invoer gebruikt voor training, en kan ik dat uitzetten? (2) hoe lang wordt mijn gesprek bewaard? (3) wat is de minimumleeftijd? Zet waar mogelijk training op jouw gegevens uit.</p>', invoer:'Tool – training aan/uit – bewaartermijn – minimumleeftijd'},
  {id:'b', titel:'Mijn AI-richtlijn (versie 1)', uren:3, product:'bouwsteen BP1', tekst:'<p>Schrijf voor jouw beroep of stagebedrijf een richtlijn van maximaal één A4 voor het gebruik van AI. Neem op: welke gegevens nooit, welke tools wel/niet, hoe je controleert, wanneer je meldt dat AI gebruikt is. Vraag of je stagebedrijf of werkgever al zo\'n richtlijn heeft en vergelijk die.</p>', invoer:'Mijn AI-richtlijn: …'},
  {id:'c', titel:'Ethisch dilemma uit mijn vak', uren:1, tekst:'<p>Beschrijf één situatie uit je beroep waarin AI gebruiken legaal is maar ethisch twijfelachtig. Wat zou jij doen en waarom?</p>', invoer:'Situatie: …\nMijn keuze en waarom: …'}
 ],
 context:{ict:'Dilemma: je mag een AI-tool de logbestanden van een klantserver laten analyseren. Die bevatten IP-adressen en gebruikersnamen.',bouw:'Dilemma: AI maakt een prachtige impressie van een nieuwbouwwijk, maar de omgeving ziet er rooskleuriger uit dan in werkelijkheid. Mag dat in een verkoopbrochure?',tt:'Dilemma: een AI-assistent stelt een snellere werkwijze voor bij onderhoud, maar slaat een veiligheidsstap (LOTO) over.',design:'Dilemma: een klant vraagt een illustratie "in de stijl van" een levende illustrator. Met AI kan dat in seconden.',llo:'Dilemma: je laat AI feedback geven op werk van studenten of collega\'s. Moeten zij dat weten?'},
 quiz:[{v:'Je verwijdert de naam uit een klantmelding, maar het adres en geboortejaar staan er nog in. Is het nu anoniem?',o:['Ja, zonder naam is het anoniem','Nee, adres en geboortejaar zijn samen herleidbaar','Ja, als het een zakelijke klant is','Alleen in Copilot'],g:1},
  {v:'Waarom is Copilot met je schoolaccount veiliger dan een gratis consumentenaccount?',o:['Het model is slimmer','Je invoer wordt onder zakelijke afspraken verwerkt en niet gebruikt voor training','Het werkt zonder internet','Het maakt nooit fouten'],g:1},
  {v:'Je krijgt een spraakbericht van je "manager" die vraagt snel een betaling te doen. Wat doe je?',o:['Direct betalen','Terugbellen via een bekend nummer om te checken','Het bericht in een AI-tool zetten','Niets, negeren is altijd goed'],g:1,u:'Stemmen zijn met AI na te maken. Verifieer via een ander kanaal.'},
  {v:'Welk gegeven is een bijzonder persoonsgegeven?',o:['E-mailadres','Gezondheidsinformatie','Postcode','Functietitel'],g:1}],
 reflectie:'Welke afspraak uit je eigen AI-richtlijn vind je het belangrijkst, en waarom?'},

/* ================= FASE 2 KIEZEN (W1) ================= */
{nr:5, fase:'Kiezen', titel:'Het AI-landschap: welke tools zijn er?', dossier:'W1 · informatie zoeken', urenLeren:3,
 doelen:['de belangrijkste AI-tools en hun basisfuncties kennen','doelgericht betrouwbare informatie over AI-tools zoeken','een longlist maken van tools die relevant zijn voor jouw beroep'],
 contact:{tijdlijn:T('een nieuwe tool of prijswijziging','Overzicht: algemene assistenten (Copilot, ChatGPT, Claude, Gemini) en specialistische tools (beeld, geluid, video, code, onderzoek, vakspecifiek). Betrouwbare informatiebronnen over tools.','Longlist maken per beroepsgroep, informatie verzamelen','Waarom is "de beste AI" een slechte vraag?'),
   stelling:'De duurste AI-tool is altijd de beste keuze voor een bedrijf.',
   docent:'Start beroepsproduct 1 (Tooladvies). Laat studenten bij hun BPV-bedrijf of werkgever navragen welke tools daar toegestaan zijn: dat is een harde randvoorwaarde.'},
 uitleg:`<h3>Soorten AI-tools</h3>
<table><tr><th>Soort</th><th>Voorbeelden</th><th>Gebruik</th></tr>
<tr><td>Algemene AI-assistent</td><td>Microsoft Copilot, ChatGPT, Claude, Google Gemini</td><td>schrijven, samenvatten, uitleggen, code, analyseren, vaak ook beeld</td></tr>
<tr><td>Ingebouwd in software</td><td>Copilot in Word/Excel/Teams, Gemini in Google Docs, AI in Photoshop/Canva/Figma, AI in CAD/BIM</td><td>AI direct in je werkproces</td></tr>
<tr><td>Onderzoek en zoeken</td><td>Perplexity, onderzoeksfuncties in de assistenten, NotebookLM</td><td>antwoorden met bronnen, werken met je eigen documenten</td></tr>
<tr><td>Beeld en video</td><td>beeldgeneratie in de assistenten, Adobe Firefly, Canva, videogenerators</td><td>afbeeldingen, mock-ups, video</td></tr>
<tr><td>Geluid</td><td>stem- en muziekgenerators</td><td>voice-overs, jingles, voorlezen</td></tr>
<tr><td>Code</td><td>GitHub Copilot, AI in code-editors</td><td>programmeren, uitleg, tests</td></tr></table>
<h3>Gratis of betaald?</h3>
<p>De vier grote assistenten hebben allemaal een <b>gratis versie</b>, met beperkingen: een maximum aantal berichten, soms een minder krachtig model en minder functies. <b>Betaalde versies</b> geven meer gebruik, de sterkste modellen en extra functies, zoals eigen assistenten maken, uitgebreid onderzoek en grotere bestanden. Een <b>zakelijke licentie</b> (via school of werk) heeft daarnaast betere afspraken over je gegevens.</p>
<h3>Betrouwbare informatie over tools vinden</h3>
<ul><li><b>Officiële bron</b>: de website, prijspagina, privacyverklaring en gebruiksvoorwaarden van de aanbieder. Let op de minimumleeftijd: die verschilt per tool (Claude.ai bijvoorbeeld is 18+).</li>
<li><b>Onafhankelijke tests</b>: vakbladen, Consumentenbond, tech-sites. Let op datum: AI verandert per maand.</li>
<li><b>Vakgenoten</b>: brancheorganisaties, collega's, je BPV-bedrijf.</li>
<li><b>Pas op voor</b> reclame vermomd als review, influencers met affiliate-links en "top 10"-lijstjes zonder datum.</li></ul>
<div class="kader"><b>Werkproces 1 vraagt:</b> informatie verzamelen en <b>documenteren</b> over kosten, gebruiksgemak, basisfunctionaliteiten en mogelijkheden voor jouw beroep. Begin deze week je longlist.</div>`,
 oefening:{type:'toolkaart', ico:'🗺️', titel:'Tool-landkaart (stand november 2026)', intro:'Filter op soort. Klopt alles nog? Check het zelf: dat is onderdeel van de opdracht.',
  tools:[
   {naam:'Microsoft Copilot', ico:'🟦', soort:['assistent','beeld','ingebouwd'], wat:'Assistent van Microsoft, ook ingebouwd in Windows, Edge en Microsoft 365.', gratis:'Met Microsoft-account; met je school- of werkaccount (Copilot Chat) met gegevensbescherming.', betaald:'Copilot in Word, Excel, PowerPoint, Outlook en Teams (M365 Copilot-licentie); meer gebruik.', let:'Gebruik voor schoolwerk je schoolaccount.'},
   {naam:'ChatGPT', ico:'🟩', soort:['assistent','beeld','onderzoek'], wat:'De bekendste AI-assistent (OpenAI). Tekst, beeld, spraak, bestanden.', gratis:'Beperkt aantal berichten met het sterkste model, beperkt beeld maken.', betaald:'Meer gebruik, eigen GPTs maken, uitgebreider onderzoek en agentfuncties.', let:'Minimumleeftijd en training op je gegevens: check de instellingen.'},
   {naam:'Claude', ico:'🟧', soort:['assistent','onderzoek','code'], wat:'AI-assistent van Anthropic. Sterk in lange teksten, schrijven, analyseren en code. Maakt geen foto-afbeeldingen, wel diagrammen, webpagina\'s en code.', gratis:'Beperkt aantal berichten; kan documenten lezen en kleine apps of webpagina\'s maken (artifacts).', betaald:'Veel meer gebruik, Projects met eigen kennis, onderzoeksfunctie.', let:'Claude.ai is alleen voor 18+.'},
   {naam:'Google Gemini', ico:'🟪', soort:['assistent','beeld','onderzoek','ingebouwd'], wat:'Assistent van Google, ook in Gmail, Docs en Android.', gratis:'Met Google-account; beeld maken, Gems (eigen assistenten), onderzoek beperkt.', betaald:'Sterkste modellen, meer onderzoek, video, integratie in Google Workspace.', let:'Leeftijdsregels verschillen per land en accounttype.'},
   {naam:'NotebookLM', ico:'📒', soort:['onderzoek'], wat:'Google-tool die alleen antwoordt op basis van jóúw geüploade bronnen, met verwijzingen. Kan ook een audio-samenvatting maken.', gratis:'Ja, met Google-account.', betaald:'Hogere limieten.', let:'Upload alleen documenten die je mag delen.'},
   {naam:'Perplexity', ico:'🔎', soort:['onderzoek'], wat:'AI-zoekmachine die antwoorden geeft met bronvermelding.', gratis:'Ja, met beperkingen.', betaald:'Meer diepgaand zoeken, keuze uit modellen.', let:'Check de bronnen zelf.'},
   {naam:'Adobe Firefly / Photoshop', ico:'🎨', soort:['beeld','ingebouwd'], wat:'Beeldgeneratie en generatieve vulling, getraind op gelicenseerd materiaal.', gratis:'Beperkt aantal credits.', betaald:'Meer credits, volledige integratie in Creative Cloud.', let:'Let op de licentievoorwaarden voor commercieel gebruik.'},
   {naam:'Canva (Magic Studio)', ico:'🖌️', soort:['beeld','ingebouwd'], wat:'Ontwerptool met AI voor tekst, beeld, presentaties.', gratis:'Basisfuncties.', betaald:'Meer AI-functies (Canva Pro / Education).', let:'Canva for Education is vaak gratis via school.'},
   {naam:'GitHub Copilot', ico:'👩‍💻', soort:['code','ingebouwd'], wat:'AI-programmeerhulp in je code-editor.', gratis:'Gratis basisversie; gratis voor geverifieerde studenten (GitHub Education).', betaald:'Meer gebruik en sterkere modellen.', let:'Controleer en test gegenereerde code altijd.'},
   {naam:'Stem- en muziekgenerators', ico:'🎵', soort:['geluid'], wat:'Voice-overs, voorleesstemmen en muziek uit tekst (bijv. ElevenLabs, Suno).', gratis:'Beperkt, vaak alleen niet-commercieel.', betaald:'Commercieel gebruik, meer stemmen.', let:'Stemmen van echte personen klonen zonder toestemming mag niet.'}
  ]},
 opdrachten:[
  {id:'a', titel:'Longlist: 6 tot 10 tools voor mijn beroep', uren:4, product:'BP1 Tooladvies', tekst:'<p>Maak een longlist van 6 tot 10 AI-tools die relevant kunnen zijn voor jouw beroep: algemene assistenten én minimaal 2 vakspecifieke of ingebouwde tools. Documenteer per tool:</p><ul><li>aanbieder en soort tool</li><li>basisfunctionaliteiten</li><li>kosten (gratis/betaald, prijs per maand)</li><li>mogelijk gebruik in jouw werk</li><li>bron van je informatie + datum</li></ul>', invoer:'Tool | aanbieder | functies | kosten | gebruik in mijn werk | bron + datum'},
  {id:'b', titel:'Wat mag er bij mijn stagebedrijf of werkgever?', uren:2, tekst:'<p>Vraag na welke AI-tools in je stagebedrijf of organisatie toegestaan zijn, of er een AI-beleid is en of er zakelijke licenties zijn. Dit is een harde randvoorwaarde voor je tooladvies.</p>', invoer:'Toegestaan: …\nBeleid: …\nLicenties: …'},
  {id:'c', titel:'Bronnenkritiek', uren:1, tekst:'<p>Zoek één online "beste AI-tools voor [jouw beroep]"-artikel. Beoordeel: wie schreef het, wanneer, verdient de schrijver eraan (affiliate)? Hoe betrouwbaar is het?</p>', invoer:'Artikel: …\nOordeel: …'}
 ],
 context:{ict:'Denk naast de assistenten aan GitHub Copilot, AI in je IDE, AI in monitoring- of ticketingsoftware.',bouw:'Denk aan AI-render-tools, AI in Revit/Archicad/SketchUp, tools die bestekken of bouwbesluit-teksten doorzoeken.',tt:'Denk aan AI in CAD (bijv. Fusion, SolidWorks), PLC-programmeerhulp, beeldinspectie, onderhoudsdocumentatie.',design:'Denk aan Firefly, Canva, Figma AI, videogenerators, stem- en muziektools.',llo:'Denk aan Copilot in M365, AI in je leerplatform, tools om toetsvragen of lesmateriaal te maken.'},
 quiz:[{v:'Welke bron is het betrouwbaarst voor de actuele prijs van een AI-tool?',o:['Een TikTok-video','De prijspagina van de aanbieder','Een "top 10"-artikel uit 2023','Het antwoord van de AI-tool zelf'],g:1},
  {v:'Waarom gebruik je voor schoolwerk bij voorkeur Copilot met je schoolaccount?',o:['Het is de slimste AI','Betere afspraken over je gegevens','Het heeft geen limieten','Het werkt offline'],g:1},
  {v:'Wat moet je volgens werkproces 1 per tool documenteren?',o:['Alleen de prijs','Kosten, gebruiksgemak, basisfunctionaliteiten en mogelijkheden voor je beroep','Alleen of het gratis is','De naam van de CEO'],g:1},
  {v:'Waarom is een "top 10 AI-tools"-artikel zonder datum verdacht?',o:['AI-tools veranderen snel; info kan verouderd zijn','Artikelen zonder datum zijn altijd nep','Er zijn maar 5 AI-tools','Het maakt niet uit'],g:0}],
 reflectie:'Welke tool op je longlist kende je nog niet, en waarom is die interessant voor jouw werk?'},

{nr:6, fase:'Kiezen', titel:'Beoordelen: criteria en beslismatrix', dossier:'W1 · vergelijken en selecteren', urenLeren:2,
 doelen:['criteria opstellen waarop je AI-tools vergelijkt','een gewogen beslismatrix gebruiken','van longlist naar shortlist (2 tot 4 tools) gaan'],
 contact:{tijdlijn:T('nieuws over een AI-toolstoring of -prijsstijging','Criteria: functionaliteit, kwaliteit, gebruiksgemak, kosten, privacy/AVG, beschikbaarheid (licentie), integratie, leeftijd, taal. Gewichten bepalen vanuit je beroep.','Beslismatrix invullen en shortlist bepalen; peerfeedback','Wie bepaalt de gewichten: jij of je werkgever?'),
   stelling:'Privacy is belangrijker dan kwaliteit bij het kiezen van een AI-tool.',
   docent:'Controleer of studenten "harde eisen" (knock-outcriteria, zoals "moet toegestaan zijn door werkgever") scheiden van wensen. Tools die een harde eis niet halen vallen af vóór de matrix.'},
 uitleg:`<h3>Van longlist naar shortlist</h3>
<ol><li><b>Knock-outcriteria</b>: harde eisen. Haalt een tool die niet, dan valt hij af. Bijv. "toegestaan door mijn werkgever", "Nederlandse taal", "geschikt voor mijn leeftijd", "geen klantdata naar de VS zonder afspraken".</li>
<li><b>Beoordelingscriteria</b> met <b>gewicht</b>: wat is voor jóúw werk belangrijk?</li>
<li><b>Scoren</b> op basis van gedocumenteerde informatie (en volgende week: testen).</li></ol>
<h3>Veelgebruikte criteria</h3>
<table><tr><th>Criterium</th><th>Vragen</th></tr>
<tr><td>Functionaliteit</td><td>Kan het wat ik nodig heb (tekst, beeld, bestanden lezen, zoeken)?</td></tr>
<tr><td>Kwaliteit en betrouwbaarheid</td><td>Hoe goed en juist zijn de resultaten voor míjn taken?</td></tr>
<tr><td>Gebruiksgemak</td><td>Snel te leren? Nederlands? Werkt het op mijn apparaten?</td></tr>
<tr><td>Kosten</td><td>Gratis genoeg? Prijs per gebruiker per maand? Verborgen kosten?</td></tr>
<tr><td>Privacy en veiligheid</td><td>Training op data? Waar staan de servers? Zakelijke versie?</td></tr>
<tr><td>Integratie</td><td>Werkt het samen met mijn software (M365, Google, CAD, IDE)?</td></tr>
<tr><td>Rechten</td><td>Mag ik de output commercieel gebruiken?</td></tr></table>
<h3>De gewogen beslismatrix</h3>
<p>Geef elk criterium een gewicht (1–5) en elke tool een score (1–5). Gewicht × score, opgeteld, geeft een totaal. <b>Let op:</b> de matrix is een hulpmiddel. Je advies moet je altijd <b>onderbouwen in woorden</b>: waarom die score, op basis van welke informatie of test?</p>`,
 oefening:{type:'matrix', id:'matrix', ico:'📐', titel:'Mijn beslismatrix (eerste versie)', intro:'Pas de tools en criteria aan voor jouw beroep. Volgende week vul je de kwaliteitsscores aan op basis van je tests.',
  opties:['Copilot','ChatGPT','Gemini','Claude'], criteria:['Functionaliteit voor mijn taken','Kwaliteit resultaten','Gebruiksgemak','Kosten','Privacy / toegestaan','Integratie met mijn software']},
 opdrachten:[
  {id:'a', titel:'Knock-outcriteria en gewichten', uren:2, product:'BP1 Tooladvies', tekst:'<p>Bepaal 2 tot 4 knock-outcriteria en 5 tot 7 beoordelingscriteria met gewicht. Leg uit waarom elk gewicht past bij jouw beroep.</p>', invoer:'Knock-out: …\nCriteria + gewicht + waarom: …'},
  {id:'b', titel:'Shortlist met onderbouwing', uren:4, product:'BP1 Tooladvies', tekst:'<p>Pas de knock-outcriteria toe op je longlist en vul de matrix in (zie Oefenen). Kies 2 tot 4 tools voor je shortlist. Schrijf per afgevallen tool in één zin waarom.</p>', invoer:'Shortlist: …\nAfgevallen + reden: …'},
  {id:'c', titel:'Peerfeedback', uren:1, tekst:'<p>Wissel je matrix uit met iemand uit een ander beroep. Welke criteria of gewichten verschillen? Wat neem je over?</p>', invoer:'Feedback ontvangen: …\nAanpassing: …'}
 ],
 context:{ict:'Een developer weegt integratie met de IDE en codekwaliteit zwaar; privacy van klantcode is knock-out.',bouw:'Een werkvoorbereider weegt "kan PDF-tekeningen en bestekken lezen" zwaar; Nederlandse vaktaal is belangrijk.',tt:'Een monteur weegt "werkt op telefoon/tablet op locatie" en "kan foto\'s analyseren" zwaar.',design:'Een vormgever weegt beeldkwaliteit en commerciële gebruiksrechten zwaar.',llo:'Een docent weegt privacy (leerlinggegevens) en beschikbaarheid via de schoollicentie zwaar.'},
 quiz:[{v:'Wat is een knock-outcriterium?',o:['Het criterium met het hoogste gewicht','Een harde eis: haalt een tool die niet, dan valt hij af','Een criterium dat je mag overslaan','De prijs'],g:1},
  {v:'Tool A scoort 4 op een criterium met gewicht 5, tool B scoort 5 op gewicht 2. Wie verdient op deze twee samen meer punten?',o:['Tool A (20 tegen 10)','Tool B','Gelijk','Niet te zeggen'],g:0},
  {v:'Waarom is alleen een matrix niet genoeg voor een goed advies?',o:['Matrices kloppen nooit','Je moet scores onderbouwen met informatie en tests','Werkgevers lezen geen tabellen','Een matrix is te lang'],g:1},
  {v:'Welk criterium hoort bij "rechten"?',o:['Mag ik de output commercieel gebruiken?','Hoe snel is de tool?','Werkt het in het Nederlands?','Hoeveel kost het?'],g:0}],
 reflectie:'Welk criterium vond je het moeilijkst om een gewicht te geven? Waarom?'},

{nr:7, fase:'Kiezen', titel:'Testen: gebruiksgemak, betrouwbaarheid, kwaliteit', dossier:'W1 · testen', urenLeren:2,
 doelen:['een eerlijk testprotocol opzetten','tools deskundig testen met vaktaken','bevindingen helder en gestructureerd documenteren'],
 contact:{tijdlijn:T('een benchmark of vergelijkingstest in het nieuws','Eerlijk testen: dezelfde prompts, dezelfde taak, beoordelingsschaal vooraf. Betrouwbaarheid: herhaal dezelfde prompt (geeft hij steeds hetzelfde?), check feiten.','Testprotocol uitvoeren (in tweetallen: één bedient, één beoordeelt)','Is een test door één persoon objectief?'),
   stelling:'Je kunt een AI-tool pas beoordelen als je hem minstens een week gebruikt hebt.',
   docent:'Laat studenten vooraf per testtaak een "goed antwoord"-beschrijving maken, anders beoordelen ze op gevoel.'},
 uitleg:`<h3>Een eerlijke test</h3>
<ol><li>Kies <b>3 tot 5 echte taken</b> uit je beroep (bijv. "vat deze werkinstructie samen voor een collega", "schrijf een klantmail over vertraging", "leg deze foutcode uit").</li>
<li>Schrijf per taak <b>één prompt</b> en gebruik precies die prompt bij elke tool.</li>
<li>Bepaal <b>vooraf</b> wat een goed resultaat is (je beoordelingscriteria).</li>
<li>Beoordeel per tool op een vaste schaal (1–5) en noteer opvallende dingen.</li>
<li>Test <b>betrouwbaarheid</b>: stel dezelfde prompt nog eens. Hoe verschillend is het antwoord? Kloppen de feiten?</li></ol>
<h3>Wat test je?</h3>
<table><tr><th>Aspect</th><th>Hoe</th></tr>
<tr><td>Gebruiksgemak</td><td>Hoe snel kom je tot resultaat? Aantal stappen, duidelijkheid, Nederlands, mobiel.</td></tr>
<tr><td>Betrouwbaarheid</td><td>Feiten checken, bronnen controleren, herhaalbaarheid, toegeven van onzekerheid.</td></tr>
<tr><td>Kwaliteit</td><td>Inhoudelijk juist, volledig, juiste toon en vaktaal, direct bruikbaar?</td></tr></table>
<div class="kader"><b>Documenteer zo dat een ander je test kan herhalen</b>: datum, tool, versie of account (gratis/betaald), prompt, beoordeling en toelichting.</div>`,
 oefening:{type:'tabel', id:'testprotocol', ico:'🧪', titel:'Mijn testprotocol', intro:'Eén rij per taak per tool. Gebruik precies dezelfde prompt bij elke tool.',
  kolommen:[{n:'Taak + prompt',b:180},{n:'Tool',t:'keuze',o:['Copilot','ChatGPT','Claude','Gemini','anders']},{n:'Gebruiksgemak',t:'keuze',o:['1','2','3','4','5']},{n:'Betrouwbaarheid',t:'keuze',o:['1','2','3','4','5']},{n:'Kwaliteit',t:'keuze',o:['1','2','3','4','5']},{n:'Toelichting',b:180}]},
 opdrachten:[
  {id:'a', titel:'Testtaken en "goed antwoord" bepalen', uren:2, product:'BP1 Tooladvies', tekst:'<p>Kies 3 tot 5 echte taken uit je beroep. Schrijf per taak de prompt en een beschrijving van wat een goed resultaat is.</p>', invoer:'Taak 1: … Prompt: … Goed resultaat = …'},
  {id:'b', titel:'Testen uitvoeren', uren:4, product:'BP1 Tooladvies', tekst:'<p>Voer je testprotocol uit met alle tools van je shortlist (vul de tabel bij Oefenen in). Herhaal minimaal één prompt om de betrouwbaarheid te testen. Werk je matrix van week 6 bij.</p>', invoer:'Belangrijkste bevindingen: …',
   pro:'Test bij minimaal één taak ook de gratis versie tegen jouw betaalde versie. Is het verschil de prijs waard voor jouw beroep? Neem dit op in je kostenafweging.'},
  {id:'c', titel:'Test een nieuwe tool', uren:1, tekst:'<p>Werkproces 1 vraagt ook dat je <b>nieuwe tools</b> test die op de markt komen. Zoek een tool (of nieuwe functie) die minder dan 3 maanden oud is en test hem met één van je taken.</p>', invoer:'Nieuwe tool/functie: …\nBevinding: …'}
 ],
 quiz:[{v:'Waarom gebruik je bij elke tool exact dezelfde prompt?',o:['Dat is sneller','Zo vergelijk je eerlijk','Tools accepteren geen andere prompts','Dat hoeft niet'],g:1},
  {v:'Hoe test je betrouwbaarheid?',o:['Kijken hoe snel het antwoord komt','Feiten checken en dezelfde prompt herhalen','De prijs vergelijken','Kijken naar het logo'],g:1},
  {v:'Wanneer bepaal je wat een goed resultaat is?',o:['Na het testen','Vooraf','Dat bepaalt de AI','Nooit'],g:1,u:'Anders beoordeel je op gevoel of laat je je leiden door het eerste mooie antwoord.'},
  {v:'Wat hoort minimaal in je testdocumentatie?',o:['Alleen de winnaar','Datum, tool en versie, prompt, score en toelichting','Een screenshot van het logo','Je wachtwoord'],g:1}],
 reflectie:'Welke tool verraste je positief of negatief tijdens het testen?'},

{nr:8, fase:'Kiezen', titel:'Kiezen en adviseren', dossier:'W1 · afstemmen en kiezen', urenLeren:2,
 doelen:['bevindingen bespreken met een collega of leidinggevende','een onderbouwde keuze maken','beroepsproduct 1 (Tooladvies) afronden'],
 contact:{tijdlijn:T('AI-beleid bij bedrijven','Een advies opbouwen: situatie, eisen, vergelijking, testresultaten, keuze, risico\'s en afspraken. Gesprekstechniek: je bevindingen helder presenteren aan een leidinggevende.','Rollenspel adviesgesprek (student = medewerker, medestudent = leidinggevende) + feedback','Wat doe je als je leidinggevende het niet met je eens is?'),
   stelling:'Een medewerker moet zelf mogen kiezen welke AI-tool hij of zij gebruikt.',
   docent:'Inleveren BP1 aan het eind van deze week. Het gesprek met de BPV-begeleider of leidinggevende mag ook een opname of verslag zijn. Bij LLO-deelnemers: gesprek met eigen leidinggevende.'},
 uitleg:`<h3>Opbouw van je tooladvies</h3>
<ol><li><b>Situatie</b>: je beroep/organisatie, welke taken je met AI wilt ondersteunen.</li>
<li><b>Eisen</b>: knock-outcriteria en gewogen criteria.</li>
<li><b>Verkenning</b>: longlist met gedocumenteerde informatie (bronnen + datum).</li>
<li><b>Test</b>: testprotocol en resultaten.</li>
<li><b>Keuze</b>: welke tool(s), voor welke taken, waarom. Eventueel per taak een andere tool.</li>
<li><b>Verantwoord gebruik</b>: afspraken over privacy, controle en AI-richtlijn (week 4).</li>
<li><b>Afstemming</b>: wat zei je collega/leidinggevende? Wat heb je aangepast?</li></ol>
<h3>Het adviesgesprek</h3>
<ul><li>Begin met de <b>conclusie</b> (de keuze) en onderbouw dan.</li>
<li>Laat <b>bewijs</b> zien: je testresultaten, niet je gevoel.</li>
<li>Benoem <b>risico's en kosten</b> eerlijk.</li>
<li><b>Vraag door</b>: wat vindt de ander belangrijk? Zijn er eisen die je over het hoofd zag?</li>
<li>Leg vast wat jullie <b>afspreken</b>.</li></ul>
<div class="kader">"Stemt tijdig af met relevante betrokkenen" staat in de beoordelingscriteria. Een advies zonder afstemming is dus niet compleet.</div>`,
 oefening:{type:'bouwer', id:'gesprek', ico:'🗣️', titel:'Gespreksvoorbereiding adviesgesprek', meter:true, uitvoerTitel:'Mijn spiekbrief',
  velden:[{k:'met',l:'Met wie spreek ik (functie)?',p:'BPV-begeleider, teamleider…',verplicht:true},{k:'keuze',l:'Mijn advies in één zin',p:'Ik adviseer … voor … omdat …',verplicht:true,g:2},{k:'bewijs',l:'Mijn 3 sterkste argumenten (uit testen)',lang:true,verplicht:true,g:2},{k:'risico',l:'Risico\'s / nadelen die ik eerlijk noem',lang:true,verplicht:true},{k:'kosten',l:'Kosten',p:'gratis / … per maand per gebruiker'},{k:'vragen',l:'Vragen die ik ga stellen',lang:true,verplicht:true}],
  sjabloon:['ADVIESGESPREK met {met}','','1. Mijn advies: {keuze}','2. Onderbouwing:','{bewijs}','3. Risico\'s en hoe we die beperken:','{risico}','4. Kosten: {kosten}','5. Mijn vragen:','{vragen}','6. Afspraken: (invullen na het gesprek)']},
 opdrachten:[
  {id:'a', titel:'Adviesgesprek voeren', uren:2, product:'BP1 Tooladvies', tekst:'<p>Bespreek je bevindingen met je BPV-begeleider, leidinggevende of (als dat niet lukt) een docent uit je vakgebied. Maak een kort verslag: wat zei de ander, welke vragen kwamen er, wat heb je aangepast?</p>', invoer:'Gesprek met (functie): …\nReactie en vragen: …\nWat ik heb aangepast: …'},
  {id:'b', titel:'Beroepsproduct 1: Tooladvies afronden', uren:5, product:'BP1 Tooladvies', tekst:'<p>Bundel je werk van week 4 t/m 8 tot een tooladvies van 4 tot 8 pagina\'s volgens de opbouw bij Leren. Voeg toe als bijlage: longlist, matrix, testprotocol, gespreksverslag, AI-richtlijn. Lever in via de afgesproken leeromgeving.</p><p>Gebruik je AI bij het schrijven? Mag, maar vermeld <b>hoe</b> (zie de AI-verantwoording in week 15).</p>', invoer:'Link naar mijn document / samenvatting van mijn keuze…'}
 ],
 quiz:[{v:'Waarmee begin je een adviesgesprek bij voorkeur?',o:['Met alle testresultaten','Met je conclusie (de keuze)','Met de prijs','Met een grap'],g:1},
  {v:'Je leidinggevende noemt een eis die je vergeten was. Wat doe je?',o:['Negeren, je advies is af','Je advies aanpassen en dat vastleggen','Een andere leidinggevende zoeken','Opnieuw beginnen met een nieuwe longlist'],g:1},
  {v:'Wat maakt een keuze "onderbouwd"?',o:['Hij is gebaseerd op gedocumenteerde informatie en testbevindingen','De AI heeft hem aangeraden','Iedereen gebruikt die tool','Hij is het goedkoopst'],g:0},
  {v:'Mag je AI gebruiken bij het schrijven van je tooladvies?',o:['Nee, nooit','Ja, als je vermeldt hoe je het gebruikt hebt en je het zelf controleert','Ja, zonder vermelding','Alleen Copilot'],g:1}],
 reflectie:'Wat heb je geleerd van het gesprek met je begeleider of leidinggevende?'},

/* ================= FASE 3 INZETTEN (W2) ================= */
{nr:9, fase:'Inzetten', titel:'Prompten: inhoud, toon en stijl', dossier:'W2 · prompts formuleren', urenLeren:3,
 doelen:['een prompt opbouwen met rol, taak, context, inhoud, toon, stijl en vorm','het effect van elk onderdeel zien','prompts schrijven voor taken uit je eigen beroep'],
 contact:{tijdlijn:T('nieuwe prompt-technieken of systeemprompts die uitlekten','Anatomie van een goede prompt. Live: van "schrijf een mail" naar een volledige prompt, met het verschil op het scherm.','Promptbouwer gebruiken voor 3 eigen taken, prompts uitwisselen','Is prompten een vak of verdwijnt het?'),
   stelling:'Over twee jaar hoef je niet meer te leren prompten, want AI begrijpt je dan altijd.',
   docent:'Start beroepsproduct 2 (Praktijkopdracht): elke student kiest uiterlijk deze week een echte taak uit BPV of werk die ze in week 10 t/m 17 met AI uitvoeren.'},
 uitleg:`<h3>De bouwstenen van een goede prompt</h3>
<table><tr><th>Bouwsteen</th><th>Wat</th><th>Voorbeeld</th></tr>
<tr><td><b>Rol</b></td><td>Wie moet de AI zijn?</td><td>"Je bent een ervaren werkvoorbereider in de woningbouw."</td></tr>
<tr><td><b>Taak</b></td><td>Wat moet er gebeuren? (werkwoord!)</td><td>"Schrijf een bewonersbrief…"</td></tr>
<tr><td><b>Context</b></td><td>Achtergrond, doelgroep, situatie</td><td>"…over werkzaamheden aan de gevel van 12 tot 16 mei. Bewoners zijn deels ouderen."</td></tr>
<tr><td><b>Inhoud</b></td><td>Wat moet erin staan?</td><td>"Noem: data, geluidsoverlast, steiger, contactpersoon."</td></tr>
<tr><td><b>Toon</b></td><td>Hoe moet het klinken?</td><td>"Vriendelijk, geruststellend, niet te formeel."</td></tr>
<tr><td><b>Stijl</b></td><td>Taalniveau, schrijfstijl</td><td>"B1-niveau, korte zinnen, geen vaktermen."</td></tr>
<tr><td><b>Vorm</b></td><td>Lengte, opmaak, formaat</td><td>"Max. 200 woorden, met kopjes."</td></tr>
<tr><td><b>Voorbeeld</b></td><td>Laat zien wat je bedoelt</td><td>"Gebruik deze brief als stijlvoorbeeld: …"</td></tr></table>
<h3>Extra technieken</h3>
<ul><li><b>Laat de AI eerst vragen stellen</b>: "Stel me eerst 3 vragen voordat je begint."</li>
<li><b>Stap voor stap</b>: "Maak eerst een opzet, wacht op mijn akkoord, schrijf dan de tekst."</li>
<li><b>Varianten</b>: "Geef 3 varianten: formeel, neutraal en informeel."</li>
<li><b>Grenzen</b>: "Als je iets niet zeker weet, zeg dat dan en verzin niets."</li>
<li><b>Afbakenen</b> met tekens: zet brontekst tussen """ of onder een kopje "Tekst:".</li></ul>
<div class="kader"><b>Gebruik geen echte persoonsgegevens</b> in je prompts: gebruik [naam klant], [adres] en vul die pas in je eigen document in.</div>`,
 oefening:{type:'bouwer', id:'prompt', ico:'🛠️', titel:'Promptbouwer', intro:'Vul de bouwstenen in voor een taak uit jouw beroep. De meter laat zien hoe compleet je prompt is. Kopieer de prompt en probeer hem uit.',
  velden:[{k:'rol',l:'Rol',p:'Je bent een ervaren …'},{k:'taak',l:'Taak (begin met een werkwoord)',p:'Schrijf / Vat samen / Leg uit / Maak een lijst…',verplicht:true,g:3},{k:'context',l:'Context en doelgroep',lang:true,p:'Situatie, voor wie, waarom…',verplicht:true,g:2},{k:'inhoud',l:'Inhoud: wat moet erin?',lang:true,p:'Noem in ieder geval…',g:2},{k:'toon',l:'Toon',opties:['zakelijk','vriendelijk','geruststellend','enthousiast','formeel','informeel','technisch-precies'],verplicht:true},{k:'stijl',l:'Stijl / taalniveau',p:'B1, korte zinnen, vaktaal toegestaan…',verplicht:true},{k:'vorm',l:'Vorm en lengte',p:'max. 150 woorden, opsomming, tabel…'},{k:'voorbeeld',l:'Voorbeeld (optioneel)',lang:true},{k:'grens',l:'Grenzen',p:'Verzin geen feiten; zeg het als je iets niet weet.'}],
  sjabloon:['{rol}','','Taak: {taak}','','Context: {context}','','Inhoud: {inhoud}','Toon: {toon}','Stijl: {stijl}','Vorm: {vorm}','','Voorbeeld van de gewenste stijl:','{voorbeeld}','','{grens}']},
 opdrachten:[
  {id:'a', titel:'Kale prompt vs. volledige prompt', uren:2, tekst:'<p>Kies een taak uit je beroep. Stel eerst een kale prompt (één zin) en daarna een volledige prompt uit de promptbouwer. Vergelijk de resultaten: wat is beter en waardoor?</p>', invoer:'Kale prompt: …\nVolledige prompt: …\nVerschil: …'},
  {id:'b', titel:'Toon en stijl variëren', uren:2, tekst:'<p>Laat dezelfde inhoud in 3 tonen of stijlen schrijven (bijv. voor een klant, een collega en een leidinggevende). Beoordeel welke het best past en waarom.</p>', invoer:'Doelgroep 1/2/3 + oordeel: …'},
  {id:'c', titel:'Kies je praktijkopdracht (BP2)', uren:2, product:'BP2 Praktijkopdracht', tekst:'<p>Kies een <b>echte taak</b> uit je BPV of werk die je in de komende weken met AI gaat uitvoeren. Voorwaarden: het levert content op die echt gebruikt wordt (tekst, beeld en/of geluid), je moet informatie verzamelen en het mag binnen de regels van je bedrijf. Stem de keuze af met je begeleider en docent.</p>', invoer:'Mijn praktijkopdracht: …\nResultaat dat ik ga maken: …\nAkkoord van (functie): …'},
  {id:'d', titel:'Promptbibliotheek starten', uren:1, tekst:'<p>Begin een eigen promptbibliotheek (document of notitie) met je 3 beste prompts voor je beroep, met [placeholders] in plaats van specifieke gegevens.</p>', invoer:'Prompt 1: …',
   pro:'Sla je beste prompt op als herbruikbare instructie in je betaalde tool (bijv. als eigen GPT, Gem, Project of opgeslagen prompt) en test hem met 2 verschillende inputs.'}
 ],
 context:{ict:'Prompt voor een servicedesk-antwoord: rol = 1e-lijns medewerker, context = gebruiker kan niet inloggen na wachtwoordwijziging, toon = vriendelijk, vorm = stappenplan.',bouw:'Prompt voor een bewonersbrief of werkinstructie, met B1-taalniveau en een duidelijke planning.',tt:'Prompt om een onderhoudsprocedure te vereenvoudigen voor een nieuwe collega, met de veiligheidswaarschuwingen behouden.',design:'Prompt voor 5 slogans of een campagnetekst, met doelgroep, merkwaarden en tone of voice.',llo:'Prompt voor een lesopzet, oefenvragen op 3 niveaus of een beleidssamenvatting voor collega\'s.'},
 quiz:[{v:'Welke bouwsteen ontbreekt in: "Je bent een HR-adviseur. Schrijf een vacaturetekst."?',o:['Rol','Taak','Context, toon en vorm','Niets'],g:2},
  {v:'Waarom zet je [naam klant] in een prompt in plaats van de echte naam?',o:['Dat is korter','Privacy: geen persoonsgegevens in de AI-tool','De AI kent geen namen','Dat is verplicht volgens de tool'],g:1},
  {v:'Wat doet "Stel me eerst 3 vragen voordat je begint"?',o:['De AI wordt trager','De AI verzamelt ontbrekende context voordat hij schrijft','Niets','De AI weigert'],g:1},
  {v:'Wat valt onder "stijl"?',o:['De datum','Taalniveau en schrijfstijl, bijv. B1 en korte zinnen','Het aantal woorden','De rol'],g:1}],
 reflectie:'Welke bouwsteen maakte bij jouw taken het grootste verschil?'},

{nr:10, fase:'Inzetten', titel:'Iteratief werken: prompt → check → bijstellen', dossier:'W2 · iteratief werken', urenLeren:2,
 doelen:['de iteratieve werkwijze toepassen tot het resultaat goed is','gericht feedback geven aan een AI-tool','je iteraties vastleggen in een logboek'],
 contact:{tijdlijn:T('een voorbeeld van AI die iets steeds beter maakt','De iteratieve cyclus uit het dossier: formuleren → controleren → aanpassen → controleren. Gerichte feedback: "korter" vs. "haal alinea 2 weg en noem de prijs eerder". Wanneer begin je een nieuw gesprek?','Werken aan BP2 met iteratielog; docent geeft feedback op logs','Wanneer is "goed genoeg" goed genoeg?'),
   stelling:'Als je meer dan drie keer moet bijsturen, kun je het beter zelf doen.',
   docent:'Het iteratielog is kernbewijs voor W2 ("past een iteratieve werkwijze toe"). Laat studenten minimaal 3 iteraties per deeltaak vastleggen.'},
 uitleg:`<h3>De cyclus uit werkproces 2</h3>
<ol><li><b>Prompt formuleren</b>: met bouwstenen uit week 9.</li>
<li><b>Content controleren</b>: inhoud juist? Toon en stijl goed? Volledig? Logisch en consistent?</li>
<li><b>Prompt aanpassen</b>: gericht, op basis van wat je zag.</li>
<li><b>Opnieuw controleren</b>, tot je tevreden bent. Dan pas: betrouwbaarheid checken met andere bronnen (week 11).</li></ol>
<h3>Gerichte feedback geven</h3>
<table><tr><th>❌ Vaag</th><th>✅ Gericht</th></tr>
<tr><td>"Beter."</td><td>"De tweede alinea is te technisch voor bewoners. Vervang vaktermen door gewone woorden."</td></tr>
<tr><td>"Korter."</td><td>"Maximaal 120 woorden. Schrap de inleiding."</td></tr>
<tr><td>"Klopt niet."</td><td>"De datum is 14 mei, niet 12 mei. De rest kan blijven."</td></tr>
<tr><td>"Anders."</td><td>"Begin met de oplossing en daarna pas de uitleg."</td></tr></table>
<h3>Bijsturen of opnieuw beginnen?</h3>
<ul><li><b>Bijsturen</b> als de basis goed is.</li>
<li><b>Prompt verbeteren en een nieuw gesprek starten</b> als het steeds verder afdwaalt, of als het gesprek erg lang wordt (contextvenster!).</li>
<li><b>Zelf afmaken</b> als de laatste 10% sneller met de hand gaat. Dat is ook vakmanschap.</li></ul>
<div class="kader"><b>Tip:</b> zet je verbeterde prompt terug in je promptbibliotheek. Dan heb je de volgende keer meteen een sterke start.</div>`,
 oefening:{type:'tabel', id:'iteratielog', ico:'🔁', titel:'Iteratielog (bewijs voor BP2)', intro:'Leg per iteratie vast wat je vroeg, wat je zag en wat je aanpaste.',
  kolommen:[{n:'Prompt / aanpassing',b:200},{n:'Wat zag ik? (controle)',b:180},{n:'Oordeel',t:'keuze',o:['✘ niet bruikbaar','~ bijna','✔ goed']},{n:'Volgende stap',b:150}]},
 opdrachten:[
  {id:'a', titel:'Eerste versie BP2 met iteratielog', uren:5, product:'BP2 Praktijkopdracht', tekst:'<p>Maak met AI een eerste versie van (een deel van) je praktijkopdracht. Doorloop minimaal 3 iteraties en leg ze vast in het iteratielog bij Oefenen.</p>', invoer:'Wat heb ik gemaakt, en hoe ging de iteratie?'},
  {id:'b', titel:'Vaag → gericht', uren:1, tekst:'<p>Neem 3 vage bijstuur-opdrachten die je zelf gaf en herschrijf ze tot gerichte feedback. Test of het resultaat beter wordt.</p>', invoer:'Vaag → gericht → effect'},
  {id:'c', titel:'Promptbibliotheek bijwerken', uren:1, tekst:'<p>Voeg je verbeterde eindprompt toe aan je promptbibliotheek, met een notitie over wat je onderweg leerde.</p>', invoer:'Verbeterde prompt: …'}
 ],
 quiz:[{v:'Wat is de juiste volgorde volgens werkproces 2?',o:['Prompt → opslaan → controleren','Prompt → controleren → aanpassen → controleren …','Controleren → prompt → opslaan','Opslaan → prompt → versturen'],g:1},
  {v:'Welke feedback is het meest gericht?',o:['"Beter graag"','"Korter"','"Maak alinea 2 B1-niveau en noem de datum 14 mei"','"Dit is niks"'],g:2},
  {v:'Wanneer begin je beter een nieuw gesprek?',o:['Altijd na één antwoord','Als het gesprek afdwaalt of erg lang wordt','Nooit','Alleen bij betaalde versies'],g:1},
  {v:'Waarom houd je een iteratielog bij?',o:['Dat vindt de AI fijn','Als bewijs van je iteratieve werkwijze en om ervan te leren','Om tokens te besparen','Het is verplicht volgens de AVG'],g:1}],
 reflectie:'Hoeveel iteraties had je nodig? Wat zou je de volgende keer meteen in je eerste prompt zetten?'},

{nr:11, fase:'Inzetten', titel:'Informatie verzamelen en betrouwbaarheid checken', dossier:'W2 · informatie ophalen en controleren', urenLeren:3,
 doelen:['AI-tools gebruiken om informatie te verzamelen','AI-informatie controleren met andere bronnen (lateraal lezen)','betrouwbaarheid, logica en consistentie beoordelen'],
 contact:{tijdlijn:T('desinformatie of een nep-bron die viral ging','AI als zoekhulp: met en zonder webtoegang. Bronnen checken: bestaat de bron, staat het er echt, is de bron betrouwbaar? Lateraal lezen. De vier checks: feit, bron, logica, consistentie.','Bronnencheck op eigen BP2-informatie','Is AI-zoeken het einde van Google?'),
   stelling:'Een antwoord met bronvermelding is betrouwbaar.',
   docent:'Laat studenten minimaal één bron uit een AI-antwoord echt openen en de geciteerde zin opzoeken. Vaak staat het er net anders.'},
 uitleg:`<h3>AI gebruiken om informatie te verzamelen</h3>
<ul><li><b>Zonder webtoegang</b>: het model antwoordt uit zijn trainingsdata (kennisdatum!). Goed voor uitleg en overzicht, slecht voor actuele of precieze feiten.</li>
<li><b>Met webtoegang of onderzoeksfunctie</b>: de tool zoekt online en geeft bronnen. Beter, maar bronnen kunnen verkeerd geciteerd zijn.</li>
<li><b>Met je eigen documenten</b> (uploaden, NotebookLM, Projects): de AI antwoordt op basis van jouw bronnen. Handig voor handleidingen, bestekken en beleid. Upload alleen wat je mag delen.</li></ul>
<h3>De vier checks</h3>
<table><tr><th>Check</th><th>Vraag</th></tr>
<tr><td><b>Feit</b></td><td>Klopt dit? Kan ik het terugvinden in een onafhankelijke, betrouwbare bron?</td></tr>
<tr><td><b>Bron</b></td><td>Bestaat de bron? Staat er écht wat de AI zegt? Wie is de afzender, hoe actueel?</td></tr>
<tr><td><b>Logica</b></td><td>Volgt de conclusie uit de argumenten? Rekenwerk correct?</td></tr>
<tr><td><b>Consistentie</b></td><td>Spreekt het zichzelf niet tegen? Geeft een tweede tool of een tweede poging hetzelfde?</td></tr></table>
<h3>Lateraal lezen</h3>
<p>Professionele factcheckers lezen niet één bron van boven naar beneden, maar openen <b>andere tabbladen</b>: wat zeggen anderen over deze bron en deze bewering? Doe dat ook met AI-antwoorden.</p>
<h3>Betrouwbare bronnen per vakgebied</h3>
<p>Officiële bronnen gaan altijd voor: wetten.overheid.nl, rijksoverheid.nl, NEN (normen), fabrikantdocumentatie, brancheorganisaties, vakliteratuur, de documentatie van de software zelf.</p>`,
 oefening:{type:'bouwer', id:'bronnencheck', ico:'🔎', titel:'Bronnencheck-formulier', meter:true, uitvoerTitel:'Mijn factcheck',
  velden:[{k:'claim',l:'Bewering van de AI',lang:true,verplicht:true,g:2},{k:'tool',l:'Tool + met/zonder webtoegang'},{k:'bron',l:'Bron die de AI noemde (of "geen")'},{k:'bestaat',l:'Bestaat de bron en staat het er echt?',opties:['ja, klopt','bron bestaat, maar zegt iets anders','bron bestaat niet','geen bron genoemd']},{k:'check',l:'Mijn onafhankelijke bron(nen)',lang:true,verplicht:true,g:2},{k:'logica',l:'Logica en consistentie (2e poging/2e tool)',lang:true},{k:'oordeel',l:'Eindoordeel',opties:['betrouwbaar','deels juist, aangepast','onjuist, niet gebruikt'],verplicht:true}],
  sjabloon:['FACTCHECK','Bewering: {claim}','Tool: {tool}','Genoemde bron: {bron} → {bestaat}','Gecontroleerd met: {check}','Logica/consistentie: {logica}','Oordeel: {oordeel}']},
 opdrachten:[
  {id:'a', titel:'Informatie verzamelen voor BP2', uren:3, product:'BP2 Praktijkopdracht', tekst:'<p>Gebruik AI om de informatie te verzamelen die je nodig hebt voor je praktijkopdracht. Probeer minimaal één manier met bronnen (webtoegang/onderzoek) en één manier met je eigen documenten (als dat mag).</p>', invoer:'Welke informatie, met welke tool, hoe?'},
  {id:'b', titel:'5 factchecks', uren:3, product:'BP2 Praktijkopdracht', tekst:'<p>Controleer minimaal 5 belangrijke beweringen uit je AI-informatie met het bronnencheck-formulier. Neem de checks op in je BP2-dossier.</p>', invoer:'Samenvatting van mijn 5 factchecks…',
   pro:'Gebruik de deep research-functie voor je BP2-onderwerp. Check minimaal 5 van de bronnen uit het rapport en geef een betrouwbaarheidspercentage: hoeveel bronnen klopten echt?'},
  {id:'c', titel:'Bronnenlijst voor mijn vak', uren:1, tekst:'<p>Maak een lijst van 5 betrouwbare bronnen voor jouw vakgebied waarmee je AI-informatie kunt controleren.</p>', invoer:'1. … 2. …'}
 ],
 context:{ict:'Check: bestaat dat PowerShell-commando echt, met die parameters? (Microsoft Learn-documentatie)',bouw:'Check: noemt de AI het juiste artikel uit het Besluit bouwwerken leefomgeving (Bbl)? (wetten.overheid.nl)',tt:'Check: klopt de aanhaalmoment-tabel of foutcode? (fabrikantdocumentatie)',design:'Check: klopt de uitleg over licenties of beeldrechten? (de licentietekst zelf)',llo:'Check: klopt wat de AI zegt over de onderwijswetgeving of cao? (officiële bron)'},
 quiz:[{v:'Wat is lateraal lezen?',o:['Heel snel lezen','Andere bronnen openen om een bron en bewering te checken','Alleen de eerste alinea lezen','Lezen in een tweede taal'],g:1},
  {v:'Een AI geeft een bron. Wat is de eerste check?',o:['Bestaat de bron en staat het er echt?','Hoe mooi is de website?','Is de bron Engels?','Niets, bron = betrouwbaar'],g:0},
  {v:'Wat is het voordeel van AI laten antwoorden op je eigen documenten?',o:['Het is altijd gratis','Antwoorden zijn gebaseerd op jouw bronnen en dus beter te controleren','Je hoeft niets meer te checken','Het werkt zonder internet'],g:1},
  {v:'Welke bron is het betrouwbaarst voor een wetsartikel?',o:['Een forum','wetten.overheid.nl','Een AI-chat','Een blog uit 2019'],g:1}],
 reflectie:'Hoeveel van je factchecks klopten? Wat zegt dat over hoe je AI voor informatie gebruikt?'},

{nr:12, fase:'Inzetten', titel:'Beelden en geluid genereren', dossier:'W2 · content produceren', urenLeren:3,
 doelen:['basisfuncties gebruiken om beelden en geluid te genereren','een beeldprompt opbouwen (onderwerp, stijl, compositie, licht)','gegenereerd beeld en geluid kritisch beoordelen'],
 contact:{tijdlijn:T('nieuwe beeld- of videogenerator','Beeldprompts: onderwerp, stijl, compositie, licht, kleur, verhouding. Bewerken: delen aanpassen, uitbreiden. Geluid: voice-over, muziek. Herkenbare fouten (handen, tekst, techniek die niet kan). Labels/watermerken.','Beeldprompt-challenge per beroep + eigen BP2-beeld/geluid','Mag een AI-beeld in een offerte of portfolio?'),
   stelling:'Een AI-impressie van een product dat nog niet bestaat is misleidend.',
   docent:'Niet elke BP2 heeft beeld/geluid nodig. Wie geen beeld in BP2 heeft, maakt deze week een beeld of geluid dat bij het beroep past (bijv. instructie-afbeelding of voice-over).'},
 uitleg:`<h3>Een goede beeldprompt</h3>
<table><tr><th>Onderdeel</th><th>Voorbeeld</th></tr>
<tr><td>Onderwerp</td><td>een monteur die een zonnepaneel installeert op een plat dak</td></tr>
<tr><td>Stijl</td><td>realistische foto / technische illustratie / isometrisch / schets / vlak icoon</td></tr>
<tr><td>Compositie</td><td>van schuin boven, monteur links, veel lucht, close-up van de handen</td></tr>
<tr><td>Licht en kleur</td><td>ochtendlicht, warme tinten, huisstijlkleur oranje</td></tr>
<tr><td>Formaat</td><td>liggend 16:9, vierkant voor social media</td></tr>
<tr><td>Wat níét</td><td>geen tekst in beeld, geen logo's</td></tr></table>
<h3>Typische fouten in AI-beeld</h3>
<ul><li>Vingers, handen en tekst die vervormd zijn.</li>
<li><b>Technisch onmogelijke</b> dingen: een leiding die nergens heen gaat, een trap zonder steun, verkeerde gereedschappen, onveilige werksituaties zonder PBM.</li>
<li>Stereotypen: wie is "de monteur", "de verpleegkundige", "de CEO"? (week 13)</li></ul>
<h3>Geluid</h3>
<ul><li><b>Tekst-naar-spraak</b>: voice-overs voor instructievideo's, voorleesversies.</li>
<li><b>Muziek</b>: achtergrondmuziek of jingles.</li>
<li><b>Transcriptie</b>: spraak naar tekst (vergadering, interview). Let op de toestemming van deelnemers.</li></ul>
<div class="kader"><b>Eerlijk zijn:</b> label AI-beeld waar dat nodig is ("beeld gegenereerd met AI"), zeker als het echt lijkt. De AI Act verplicht dit voor <i>deepfakes</i>, en veel organisaties en platforms vragen het ook.</div>`,
 oefening:{type:'bouwer', id:'beeldprompt', ico:'🖼️', titel:'Beeldprompt-bouwer', intro:'Bouw een beeldprompt voor een afbeelding uit jouw beroep. Test hem in Copilot, ChatGPT of Gemini (Claude maakt geen foto-afbeeldingen).',
  velden:[{k:'onderwerp',l:'Onderwerp (wie/wat, waar, doet wat)',lang:true,verplicht:true,g:3},{k:'stijl',l:'Stijl',opties:['realistische foto','technische illustratie','isometrische tekening','potloodschets','vlakke vectorillustratie','3D-render','aquarel'],verplicht:true},{k:'compositie',l:'Compositie / camerastandpunt',p:'van schuin boven, close-up, groothoek…'},{k:'licht',l:'Licht en kleur',p:'daglicht, warme tinten, huisstijlkleuren…'},{k:'formaat',l:'Formaat',opties:['liggend 16:9','staand 9:16','vierkant 1:1','A4 staand']},{k:'niet',l:'Wat moet er níét in?',p:'geen tekst, geen logo\'s, geen onveilige situaties'},{k:'doel',l:'Waarvoor gebruik je het?',p:'instructiekaart, presentatie, social post…',verplicht:true}],
  sjabloon:['Maak een afbeelding: {onderwerp}.','Stijl: {stijl}.','Compositie: {compositie}.','Licht en kleur: {licht}.','Formaat: {formaat}.','Niet in beeld: {niet}.','(Doel: {doel})']},
 opdrachten:[
  {id:'a', titel:'Beeld voor mijn beroep', uren:3, product:'BP2 Praktijkopdracht', tekst:'<p>Maak met de beeldprompt-bouwer een beeld dat je echt kunt gebruiken in je werk of BP2. Doorloop minimaal 3 iteraties. Beoordeel het eindbeeld op technische juistheid, stereotypen en bruikbaarheid.</p>', invoer:'Prompt v1 → v3, beoordeling…'},
  {id:'b', titel:'Geluid: voice-over of transcriptie', uren:2, tekst:'<p>Maak óf een korte voice-over (30–60 s) voor een instructie uit je vak, óf transcribeer een (eigen, of met toestemming opgenomen) gesprek en laat AI er een verslag van maken. Beoordeel de kwaliteit.</p>', invoer:'Wat gemaakt, met welke tool, oordeel…'},
  {id:'c', titel:'Spot de AI-fout', uren:1, tekst:'<p>Zoek of maak 3 AI-beelden uit je vakgebied en beschrijf per beeld wat er technisch of inhoudelijk niet klopt.</p>', invoer:'Beeld 1: fout … / Beeld 2: … / Beeld 3: …',
   pro:'Gebruik een betaalde beeld- of videofunctie (bijv. een kort videofragment of beeldbewerking met je eigen foto). Wat kan het extra, en wat zijn de risico\'s (deepfake, rechten)?'}
 ],
 context:{ict:'Een schema of icoon voor een handleiding, of een illustratie voor een phishing-awareness-poster.',bouw:'Een sfeerimpressie van een interieur of een uitlegtekening voor bewoners. Let op: maatvoering klopt bij AI nooit.',tt:'Een instructieplaatje "zo NIET" en "zo WEL" voor een veilige werkplek.',design:'Moodboard, stijlvarianten of mock-up. En de vraag: waar zit jouw vakmanschap nog?',llo:'Een illustratie voor lesmateriaal of een voorleesversie van een tekst voor leerlingen met dyslexie.'},
 quiz:[{v:'Welke tool maakt géén foto-achtige afbeeldingen?',o:['Copilot','ChatGPT','Gemini','Claude'],g:3,u:'Claude kan wel diagrammen, SVG en webpagina\'s maken, maar geen foto-afbeeldingen.'},
  {v:'Waar moet je bij AI-beeld in een technisch vak extra op letten?',o:['De kleur','Technische juistheid en veilige situaties','De bestandsgrootte','Niets'],g:1},
  {v:'Wanneer verplicht de AI Act een label op AI-content?',o:['Nooit','Bij deepfakes: realistische, gemanipuleerde beelden, geluid of video van echte personen of situaties','Alleen bij muziek','Alleen in de VS'],g:1},
  {v:'Wat zet je in "wat níét" van een beeldprompt?',o:['Je naam','Elementen die je niet wilt, zoals tekst of logo\'s','De prijs','Niets, dat werkt niet'],g:1}],
 reflectie:'Zou je AI-beeld of -geluid in je eigen beroep echt inzetten? Waarvoor wel en waarvoor niet?'},

{nr:13, fase:'Inzetten', titel:'Bias en representativiteit', dossier:'W2 · beoordelen', urenLeren:3,
 doelen:['uitleggen hoe bias in AI ontstaat','bias en gebrek aan representativiteit herkennen in tekst en beeld','prompts en output aanpassen om bias te verminderen'],
 contact:{tijdlijn:T('een bias-incident (bijv. toeslagenaffaire of een AI-beeldgenerator)','Waar komt bias vandaan: trainingsdata, labels, ontwerpkeuzes, gebruik. Soorten: stereotypering, ondervertegenwoordiging, taal/culturele bias, automation bias (te veel vertrouwen in de AI). Representativiteit.','Bias-experiment: "laat AI 4 beelden maken van [beroep]" en analyseren','Wie is verantwoordelijk voor bias: maker, gebruiker of data?'),
   stelling:'AI is objectiever dan een mens, want een computer heeft geen mening.',
   docent:'Verbind met de toeslagenaffaire als Nederlands voorbeeld van algoritmische discriminatie (geen generatieve AI, wel hetzelfde mechanisme). Houd het gesprek veilig en respectvol.'},
 uitleg:`<h3>Wat is bias?</h3>
<p><b>Bias</b> is een systematische scheefheid: de AI bevoordeelt of benadeelt bepaalde groepen, of laat een vertekend beeld van de werkelijkheid zien. AI leert van data die door mensen gemaakt zijn, inclusief hun vooroordelen.</p>
<h3>Waar komt het vandaan?</h3>
<ul><li><b>Trainingsdata</b>: meer Engelstalige en westerse teksten, meer foto's van mannen in technische beroepen.</li>
<li><b>Historische bias</b>: de data laten het verleden zien ("verpleegkundigen zijn vrouwen"), niet hoe het zou moeten.</li>
<li><b>Ontwerp en bijsturing</b>: keuzes van de makers, filters.</li>
<li><b>Gebruik</b>: jouw prompt ("een succesvolle ondernemer") en <b>automation bias</b>: mensen vertrouwen de computer te snel.</li></ul>
<h3>Soorten bias die je kunt herkennen</h3>
<table><tr><th>Soort</th><th>Voorbeeld</th></tr>
<tr><td>Stereotypering</td><td>Elke "monteur" is een witte man van 40; elke "secretaresse" een jonge vrouw.</td></tr>
<tr><td>Ondervertegenwoordiging</td><td>Mensen met een beperking of oudere werknemers komen nooit voor.</td></tr>
<tr><td>Taal- en culturele bias</td><td>Amerikaanse regels of voorbeelden in een Nederlandse context (bijv. imperial units, Amerikaanse wetgeving).</td></tr>
<tr><td>Waarde-bias</td><td>De AI geeft één mening als "de waarheid" bij een onderwerp waarover je kunt verschillen.</td></tr>
<tr><td>Automation bias</td><td>Jij neemt het AI-advies over zonder na te denken.</td></tr></table>
<h3>Wat kun je doen?</h3>
<ul><li>Wees <b>specifiek</b> in je prompt over diversiteit en context ("Nederlandse situatie", "divers team").</li>
<li><b>Vraag de AI</b> zijn eigen output te controleren op stereotypen of eenzijdigheid.</li>
<li><b>Laat anderen meekijken</b>, vooral mensen uit de groep waar het over gaat.</li>
<li><b>Representativiteit</b>: past het beeld bij de mensen die je echt bedient (klanten, bewoners, studenten)?</li></ul>`,
 oefening:{type:'sorteer', id:'biassoort', ico:'🎭', titel:'Welke bias is dit?', cats:['Stereotypering','Ondervertegenwoordiging','Taal/cultuur','Automation bias'],
  items:[{t:'Je vraagt 4 beelden van "een software developer" en krijgt 4 jonge mannen met een hoodie.',c:0,u:'Een stereotiep beeld van een beroep.'},{t:'In 50 gegenereerde beelden van "klanten in een winkel" zit niemand met een rolstoel of rollator.',c:1,u:'Een groep ontbreekt.'},{t:'Een AI-antwoord over bouwregels noemt "building codes" en voeten en inches.',c:2,u:'Amerikaanse context in een Nederlandse situatie.'},{t:'Een collega stuurt een AI-berekening door "want de computer zal het wel goed hebben".',c:3,u:'Te veel vertrouwen in AI.'},{t:'"Een succesvolle CEO" geeft steeds een man in pak.',c:0},{t:'Een AI-sollicitatietekst-checker vindt namen als "Mohammed" vaker "minder passend".',c:0,u:'Stereotype gekoppeld aan afkomst: dit is ook discriminatie.'},{t:'Een AI-samenvatting van Nederlandse wetgeving gebruikt Amerikaanse begrippen als "Fair Use".',c:2}]},
 opdrachten:[
  {id:'a', titel:'Bias-experiment in mijn vak', uren:3, tekst:'<p>Laat een AI-tool 4 afbeeldingen (of 4 korte teksten/persona\'s) maken van mensen in jouw beroep en van jouw klanten/doelgroep. Analyseer: geslacht, leeftijd, afkomst, beperking, situatie. Vergelijk met de werkelijkheid (zoek cijfers, bijv. CBS). Pas daarna je prompt aan en herhaal.</p>', invoer:'Wat zag ik / werkelijkheid (bron) / aangepaste prompt / nieuw resultaat'},
  {id:'b', titel:'Bias-check op BP2', uren:2, product:'BP2 Praktijkopdracht', tekst:'<p>Controleer de content van je praktijkopdracht op bias en representativiteit. Vraag ook de AI zelf: "Controleer deze tekst op stereotypen, eenzijdigheid of een niet-Nederlandse context." Wat neem je over?</p>', invoer:'Bevindingen en aanpassingen…'},
  {id:'c', titel:'Toeslagenaffaire: wat leren we?', uren:2, tekst:'<p>Lees een betrouwbaar artikel over de rol van algoritmes in de toeslagenaffaire. Schrijf in 150 woorden wat dit betekent voor jouw gebruik van AI in je beroep.</p>', invoer:'Mijn les (150 woorden)…'}
 ],
 quiz:[{v:'Waar komt bias in AI vooral vandaan?',o:['Van de stroomvoorziening','Uit trainingsdata en ontwerpkeuzes die door mensen gemaakt zijn','Uit het internet van de toekomst','Bias bestaat niet in AI'],g:1},
  {v:'Wat is automation bias?',o:['Bias in fabrieksrobots','Te veel vertrouwen in de uitkomst van een computer','Een bug in de AI','Een soort virus'],g:1},
  {v:'Wat betekent representativiteit?',o:['De content past bij de echte groep mensen of situatie','De AI is snel','Het beeld is mooi','De tekst is lang'],g:0},
  {v:'Wat is een goede eerste stap om stereotypen in AI-beelden te verminderen?',o:['Nooit meer AI gebruiken','Specifiek prompten over diversiteit en context, en kritisch beoordelen','De kleuren aanpassen','Het beeld kleiner maken'],g:1}],
 reflectie:'Welke bias zag je in je eigen vak, en wat ga je daar in de praktijk aan doen?'},

{nr:14, fase:'Inzetten', titel:'Auteursrecht, AI Act en andere regels', dossier:'W2 · (wettelijke) kaders', urenLeren:4,
 doelen:['de basis van auteursrecht bij AI-content uitleggen','de risicoklassen van de AI Act kennen en herkennen','weten welke regels gelden voor AI in jouw beroepspraktijk'],
 contact:{tijdlijn:T('een rechtszaak over AI en auteursrecht','Auteursrecht: wie is eigenaar van AI-output? Trainingsdata en opt-out. Gebruiksvoorwaarden. AI Act: risicoklassen, verboden toepassingen, transparantieplicht, AI-geletterdheid. AVG kort herhaald.','AI Act-wijzer + casussen per beroep','Moet AI-gebruik altijd gemeld worden?'),
   stelling:'Wat AI maakt, is van mij: ik heb de prompt immers geschreven.',
   docent:'Wees voorzichtig met stellige juridische uitspraken: het recht rond AI is in ontwikkeling. Leer studenten vooral de goede vragen stellen en de gebruiksvoorwaarden lezen.'},
 uitleg:`<h3>Auteursrecht en AI-content</h3>
<ul><li>In Nederland en de EU beschermt het auteursrecht werken met een <b>eigen, creatief karakter en een persoonlijk stempel van een mens</b>. Content die volledig door AI is gemaakt, is daarom naar de huidige opvatting meestal <b>niet</b> auteursrechtelijk beschermd. Als jij creatieve keuzes maakt en het werk flink bewerkt, kan jouw bijdrage wél beschermd zijn.</li>
<li>AI-output kan <b>lijken op bestaand werk</b> (een logo, een personage, een stuk code of tekst). Gebruik je dat, dan kun je inbreuk maken op het recht van een ander. Jij bent daarvoor verantwoordelijk.</li>
<li><b>Gebruiksvoorwaarden</b> van de tool bepalen wat jij met de output mag (bijv. commercieel gebruik). Lees ze, zeker bij gratis tools.</li>
<li><b>Trainingsdata</b>: makers mogen in de EU onder voorwaarden openbare content gebruiken voor training (text-and-data-mining), tenzij de rechthebbende dat heeft uitgesloten (opt-out). Hierover lopen veel rechtszaken.</li></ul>
<h3>De AI Act (EU AI-verordening)</h3>
<p>In werking sinds 1 augustus 2024 en stap voor stap van kracht. De wet kijkt naar het <b>risico</b> van een toepassing:</p>
<table><tr><th>Risico</th><th>Wat</th><th>Voorbeelden</th></tr>
<tr><td>🟥 Onaanvaardbaar</td><td>Verboden (sinds feb. 2025)</td><td>social scoring, emotieherkenning op werk en school, manipulatie van kwetsbare groepen</td></tr>
<tr><td>🟧 Hoog</td><td>Strenge eisen (risicobeheer, documentatie, menselijk toezicht)</td><td>AI voor sollicitanten selecteren, toetsen beoordelen of toelating tot onderwijs, kritieke infrastructuur, veiligheidscomponenten</td></tr>
<tr><td>🟨 Beperkt</td><td>Transparantieplicht</td><td>chatbots (zeg dat het AI is), deepfakes en AI-gegenereerde content labelen</td></tr>
<tr><td>🟩 Minimaal</td><td>Geen extra eisen</td><td>spamfilter, AI in games, tekst herschrijven voor intern gebruik</td></tr></table>
<p>Daarnaast: <b>AI-geletterdheid</b> (art. 4) is verplicht voor organisaties die AI gebruiken, en makers van grote AI-modellen hebben eigen verplichtingen.</p>
<h3>Andere regels</h3>
<ul><li><b>AVG</b>: persoonsgegevens (week 4).</li>
<li><b>Bedrijfsregels</b>: AI-beleid, geheimhouding, contracten met klanten.</li>
<li><b>Beroepsregels</b>: bijv. normen en keuringen in techniek en bouw, beroepscodes in zorg en onderwijs.</li></ul>`,
 bronnen:[['Rijksoverheid – AI-verordening','https://www.rijksoverheid.nl/onderwerpen/kunstmatige-intelligentie-ai','officiële uitleg'],['Ondernemersplein – AI-verordening','https://ondernemersplein.overheid.nl/','wat betekent het voor bedrijven']],
 oefening:[{type:'sorteer', id:'aiact', ico:'🇪🇺', titel:'AI Act-wijzer: welk risiconiveau?', cats:['Verboden','Hoog','Beperkt','Minimaal'],
  items:[{t:'Een chatbot op de website van een installatiebedrijf die klantvragen beantwoordt.',c:2,u:'Transparantie: de klant moet weten dat het AI is.'},{t:'Software die cv\'s van sollicitanten automatisch rangschikt.',c:1,u:'Werving en selectie = hoog risico.'},{t:'Een camera die de emotie van werknemers meet om hun productiviteit te beoordelen.',c:0,u:'Emotieherkenning op de werkplek is verboden (op enkele medische/veiligheidsuitzonderingen na).'},{t:'Copilot dat een interne e-mail herschrijft.',c:3},{t:'AI die automatisch examencijfers van studenten bepaalt.',c:1,u:'Beoordelen in het onderwijs = hoog risico.'},{t:'Een AI-gegenereerde, realistische video van een wethouder die iets zegt wat hij nooit zei.',c:2,u:'Deepfake: transparantieplicht (labelen). Kan daarnaast onrechtmatig zijn.'},{t:'Een spamfilter in je mailbox.',c:3}]},
  {type:'sorteer', id:'auteursrecht', ico:'©️', titel:'Auteursrecht: mag dit?', cats:['Ja','Opletten','Nee'],
  items:[{t:'Een AI-afbeelding gebruiken op je eigen stage-presentatie.',c:0,u:'Prima voor intern gebruik, check wel de voorwaarden van de tool.'},{t:'Een AI-logo voor een klant maken dat sterk lijkt op het logo van een bekend merk.',c:2,u:'Inbreuk op merk- en auteursrecht van dat merk.'},{t:'AI-tekst verkopen als jouw eigen boek.',c:1,u:'Mogelijk niet beschermd, check de voorwaarden en wees transparant.'},{t:'De volledige tekst van een betaald vakboek in een AI-tool plakken en de samenvatting publiceren.',c:2,u:'Je publiceert een afgeleide van beschermd werk.'},{t:'AI-code gebruiken in een klantproject.',c:1,u:'Kan stukken bestaande (gelicenseerde) code bevatten; check licenties en het beleid van je bedrijf.'}]}],
 opdrachten:[
  {id:'a', titel:'Gebruiksvoorwaarden lezen', uren:2, tekst:'<p>Zoek in de gebruiksvoorwaarden van je gekozen tool (uit BP1): Wie is eigenaar van de output? Mag je die commercieel gebruiken? Wat gebeurt er met je invoer? Vat samen in eigen woorden.</p>', invoer:'Tool: …\nEigenaar output: …\nCommercieel gebruik: …\nInvoer: …'},
  {id:'b', titel:'Regels in mijn beroepspraktijk', uren:3, product:'BP2 Praktijkopdracht', tekst:'<p>Welke (wettelijke) kaders gelden voor je praktijkopdracht? Denk aan AVG, auteursrecht, AI Act-risiconiveau, bedrijfsbeleid en beroepsregels. Leg per kader uit hoe je eraan voldoet.</p>', invoer:'Kader – wat betekent het – hoe voldoe ik eraan'},
  {id:'c', titel:'AI-richtlijn versie 2', uren:1, tekst:'<p>Werk je AI-richtlijn uit week 4 bij met wat je nu weet over auteursrecht en de AI Act.</p>', invoer:'Wijzigingen in mijn richtlijn…'}
 ],
 quiz:[{v:'Is een volledig door AI gemaakte afbeelding in Nederland auteursrechtelijk beschermd?',o:['Ja, altijd van degene die promptte','Meestal niet: er ontbreekt een menselijk, creatief stempel','Ja, van de AI','Ja, van de maker van de AI'],g:1},
  {v:'Een chatbot op een website valt onder…',o:['verboden','hoog risico','beperkt risico: transparantieplicht','geen regels'],g:2},
  {v:'Welke toepassing is hoog risico?',o:['Spamfilter','AI die sollicitanten selecteert','Een AI-game','Een tekst herschrijven'],g:1},
  {v:'Wat verplicht artikel 4 van de AI Act?',o:['Een AI-diploma voor iedereen','Voldoende AI-geletterdheid van medewerkers','Het gebruik van Europese AI','Een verbod op ChatGPT'],g:1}],
 reflectie:'Welke regel verraste je het meest? Verandert dat hoe je AI in je beroep gebruikt?'},

{nr:15, fase:'Inzetten', titel:'Verwerken, opslaan en verantwoorden', dossier:'W2 · verwerken en opslaan', urenLeren:2,
 doelen:['AI-content correct verwerken in je eigen werk','content en prompts nauwkeurig opslaan','AI-gebruik verantwoorden (AI-verantwoording)'],
 contact:{tijdlijn:T('AI-labels of transparantie-afspraken bij bedrijven en media','De laatste stappen van W2: content aanpassen met je vakkennis, opslaan (versies, bestandsnamen, bronnen, prompts), AI-verantwoording schrijven. De hele workflow op een rij.','Workflow-oefening + BP2 afronden tot conceptversie; peerreview','Hoeveel AI mag er in "jouw" werk zitten?'),
   stelling:'Als ik AI-tekst helemaal herschrijf, hoef ik niet te vermelden dat ik AI gebruikt heb.',
   docent:'Laat studenten elkaars BP2-concept reviewen met de beoordelingscriteria (zelfcheck op de Toetsing-pagina).'},
 uitleg:`<h3>Verwerken: jouw vakkennis maakt het af</h3>
<p>AI levert ruw materiaal. Jij maakt het geschikt voor je werk:</p>
<ul><li>feiten en vaktermen corrigeren;</li><li>aanpassen aan de huisstijl, het sjabloon of de procedure van je bedrijf;</li><li>specifieke gegevens invullen (die je niet in de AI zette);</li><li>controleren op toon, doelgroep en volledigheid;</li><li>laten meelezen door een collega bij belangrijke content.</li></ul>
<h3>Nauwkeurig opslaan</h3>
<ul><li><b>Eindversie</b> op de juiste plek (bijv. het projectdossier of de juiste map), met een duidelijke bestandsnaam en versie.</li>
<li><b>Prompt en tool</b> bewaren, zodat je (of een collega) het kunt herhalen of verbeteren.</li>
<li><b>Bronnen</b> van je factchecks bewaren.</li>
<li>Geen gevoelige gegevens in chatgeschiedenis laten staan. Verwijder gesprekken die je niet meer nodig hebt.</li></ul>
<h3>AI-verantwoording</h3>
<p>Vermeld bij schoolwerk (en vaak ook op het werk) hoe je AI gebruikt hebt. Bijvoorbeeld:</p>
<div class="kader">"Voor dit document heb ik Microsoft Copilot (schoolaccount, november 2026) gebruikt om een eerste opzet van hoofdstuk 2 te maken en de tekst naar B1-niveau te herschrijven. Alle feiten heb ik gecontroleerd met [bronnen]. De conclusies en het advies zijn van mijzelf."</div>
<h3>De complete workflow (werkproces 2)</h3>
<p>Doel en kaders bepalen → content bepalen → prompten → controleren → bijstellen (iteratief) → betrouwbaarheid checken met andere bronnen → onjuistheden aanpassen (eventueel met een collega) → opslaan en gebruiken.</p>`,
 oefening:{type:'volgorde', id:'workflow', ico:'🔢', titel:'Zet de workflow van werkproces 2 in de juiste volgorde',
  stappen:['Bepalen hoe je de AI-tool inzet, binnen de (wettelijke) kaders','Bepalen welke content je wilt genereren','Een prompt formuleren met inhoud, toon en stijl','De gegenereerde content controleren','De prompt aanpassen en opnieuw controleren (iteratief)','Betrouwbaarheid en kwaliteit checken met andere bronnen','Onjuistheden aanpassen, zo nodig met collega\'s','De content opslaan en gebruiken voor je taak'],
  uitleg:'Dit is precies de volgorde uit de omschrijving van werkproces 2 in het kwalificatiedossier.'},
 opdrachten:[
  {id:'a', titel:'BP2 verwerken en opslaan', uren:4, product:'BP2 Praktijkopdracht', tekst:'<p>Verwerk je AI-content tot het eindproduct voor je praktijkopdracht, met je eigen vakkennis. Sla het nauwkeurig op en beschrijf wat je hebt aangepast ten opzichte van de AI-versie.</p>', invoer:'Wat heb ik aangepast en waarom? Waar staat het opgeslagen?'},
  {id:'b', titel:'AI-verantwoording schrijven', uren:1, product:'BP2 Praktijkopdracht', tekst:'<p>Schrijf de AI-verantwoording voor je praktijkopdracht (welke tool, waarvoor, hoe gecontroleerd, wat is van jou).</p>', invoer:'Mijn AI-verantwoording…'},
  {id:'c', titel:'Peerreview', uren:2, tekst:'<p>Beoordeel het BP2-concept van een medestudent met de zelfcheck op de Toetsing-pagina en geef 2 tops en 2 tips. Verwerk de feedback die je zelf krijgt.</p>', invoer:'Ontvangen feedback + wat ik ermee doe…'}
 ],
 quiz:[{v:'Wat sla je naast de eindversie ook op?',o:['Niets','De gebruikte prompt, tool en bronnen','Je wachtwoord','Alle mislukte afbeeldingen'],g:1},
  {v:'Wat hoort in een AI-verantwoording?',o:['Alleen "met AI gemaakt"','Welke tool, waarvoor, hoe gecontroleerd en wat van jou is','Je prompts van het hele jaar','De prijs van de tool'],g:1},
  {v:'Wanneer check je de betrouwbaarheid met andere bronnen?',o:['Vóór het prompten','Als je tevreden bent over de content, vóór je hem gebruikt','Nooit','Alleen bij beelden'],g:1},
  {v:'Wat doe je met gevoelige gesprekken in je chatgeschiedenis?',o:['Laten staan','Verwijderen als je ze niet meer nodig hebt','Delen met collega\'s','Exporteren naar social media'],g:1}],
 reflectie:'Hoeveel procent van je eindproduct is "AI" en hoeveel is "jij"? Ben je daar tevreden mee?'},

/* ================= FASE 4 BEWIJZEN ================= */
{nr:16, fase:'Bewijzen', titel:'Praktijkopdracht afronden', dossier:'BP2', urenLeren:1,
 doelen:['je praktijkopdracht (BP2) compleet maken','je dossier controleren aan de hand van de beoordelingscriteria'],
 contact:{tijdlijn:T('vrije keuze van de deelnemers','Wat moet er in BP2? Rondgang met de zelfcheck. Veelgemaakte fouten.','Werktijd met individuele feedback van de docent','Wat was je grootste "aha" tot nu toe?'),
   stelling:'Ik ben nu beter in mijn vak dankzij AI.',
   docent:'Deadline BP2 aan het eind van deze week. Plan de criteriumgerichte gesprekken van week 18 nu in.'},
 uitleg:`<h3>Checklist beroepsproduct 2: Praktijkopdracht</h3>
<ol><li><b>Opdracht</b>: welke taak, voor wie, welk resultaat, akkoord van begeleider/leidinggevende.</li>
<li><b>Kaders</b>: welke regels gelden (AVG, auteursrecht, AI Act, bedrijfsbeleid) en hoe je eraan voldoet.</li>
<li><b>Prompts en iteratielog</b>: minimaal 3 iteraties per deeltaak, met wat je zag en aanpaste.</li>
<li><b>Informatie en factchecks</b>: minimaal 5 gecontroleerde beweringen met bronnen.</li>
<li><b>Bias-check</b> op je content.</li>
<li><b>Eindproduct</b>: de verwerkte content (tekst, beeld en/of geluid) zoals die in de praktijk gebruikt wordt.</li>
<li><b>Verwerking</b>: wat heb je zelf aangepast en waarom; hoe opgeslagen.</li>
<li><b>AI-verantwoording.</b></li>
<li><b>Feedback</b> van begeleider, collega of peer en wat je ermee deed.</li></ol>
<p>Kijk ook op de pagina <a href="#toetsing">Toetsing</a> voor de beoordelingscriteria.</p>`,
 opdrachten:[
  {id:'a', titel:'BP2 compleet maken', uren:7, product:'BP2 Praktijkopdracht', tekst:'<p>Maak je praktijkopdracht compleet volgens de checklist bij Leren. Exporteer je logboek (dit bevat je iteratielog en factchecks) en voeg het toe als bijlage.</p>', invoer:'Wat moet ik nog doen? / Link naar mijn eindproduct'},
  {id:'b', titel:'Zelfcheck', uren:1, tekst:'<p>Loop de beoordelingscriteria op de Toetsing-pagina na. Welke criteria haal je zeker, waar twijfel je?</p>', invoer:'Zeker: …\nTwijfel: …'}
 ],
 quiz:[{v:'Hoeveel factchecks moeten er minimaal in BP2?',o:['1','3','5','20'],g:2},
  {v:'Wat bewijst je iteratieve werkwijze?',o:['Het eindproduct','Het iteratielog','De AI-verantwoording','De factchecks'],g:1}],
 reflectie:'Waar ben je het meest trots op in je praktijkopdracht?'},

{nr:17, fase:'Bewijzen', titel:'Presenteren en delen', dossier:'BP1 + BP2', urenLeren:1,
 doelen:['je resultaten presenteren aan medestudenten en het werkveld','van elkaars beroepen leren','je voorbereiden op het criteriumgericht gesprek'],
 contact:{tijdlijn:T('terugblik: wat is er in 17 weken veranderd in de AI-wereld?','AI-markt: elke deelnemer presenteert 5 minuten "AI in mijn vak": tooladvies + praktijkopdracht + tip.','Presentaties in carrouselvorm (per beroep) + feedback','Wat neem je mee van andere beroepen?'),
   stelling:'AI zou een verplicht onderdeel moeten zijn van elke mbo-opleiding.',
   docent:'Nodig waar mogelijk BPV-begeleiders, werkgevers of collega-docenten uit. Bij LLO-groepen: laat deelnemers presenteren aan hun eigen team.'},
 uitleg:`<h3>Je presentatie (5 minuten)</h3>
<ol><li><b>Mijn beroep</b> en waar AI het verschil maakt (30 s).</li>
<li><b>Mijn tooladvies</b>: welke tool en waarom (1 min).</li>
<li><b>Mijn praktijkopdracht</b>: voor en na, met een iteratie en een factcheck als voorbeeld (2 min).</li>
<li><b>Wat ging mis</b> en wat leerde ik ervan (1 min).</li>
<li><b>Mijn tip</b> voor een collega in mijn vak (30 s).</li></ol>
<h3>Voorbereiden op het criteriumgericht gesprek</h3>
<p>In het gesprek laat je zien dat je je beroepsproducten zelf gemaakt hebt en dat je kunt uitleggen <b>waarom</b> je keuzes maakte. Bekijk de voorbeeldvragen op de pagina <a href="#toetsing">Toetsing</a> en oefen ze met een medestudent.</p>`,
 opdrachten:[
  {id:'a', titel:'Presentatie maken en geven', uren:4, tekst:'<p>Maak je presentatie volgens de opbouw bij Leren. Je mag AI gebruiken voor de opzet of afbeeldingen. Vermeld dat dan op je laatste dia.</p>', invoer:'Opbouw van mijn presentatie / ontvangen feedback'},
  {id:'b', titel:'Oefengesprek', uren:2, tekst:'<p>Oefen het criteriumgericht gesprek met een medestudent: stel elkaar 5 vragen uit de lijst op de Toetsing-pagina. Noteer welke vragen lastig waren.</p>', invoer:'Lastige vragen + hoe ik ze nu zou beantwoorden…'}
 ],
 quiz:[{v:'Wat laat je in het criteriumgericht gesprek vooral zien?',o:['Dat je snel kunt typen','Dat je je keuzes kunt uitleggen en onderbouwen','Dat je alle tools kent','Dat je nooit fouten maakt'],g:1}],
 reflectie:'Wat heb je geleerd van de presentaties van andere beroepen?'},

{nr:18, fase:'Bewijzen', titel:'Criteriumgericht gesprek en terugblik', dossier:'examen', urenLeren:1,
 doelen:['het criteriumgericht gesprek voeren','je groei in AI-geletterdheid zien','bepalen of je doorgaat met K1515'],
 contact:{tijdlijn:[['gepland','Criteriumgerichte gesprekken (±20 min per deelnemer) op ingeplande tijden'],['tussendoor','Eindmeting en terugblik zelfstandig'],['slot','Afsluiting en vooruitblik op K1515: van gebruiker naar bouwer']],
   stelling:'Ik wil zelf een AI-oplossing kunnen bouwen voor mijn vak.',
   docent:'Gebruik het beoordelingsformulier in de docentenhandleiding. Bespreek met geïnteresseerden de overstap naar K1515.'},
 uitleg:`<h3>Het criteriumgericht gesprek</h3>
<p>Je voert een gesprek van ongeveer 20 minuten met een of twee beoordelaars. Je brengt je beroepsproducten en je geëxporteerde logboek mee. De beoordelaars stellen vragen over je keuzes, je werkwijze en de regels. Ze beoordelen aan de hand van de gedragscriteria uit het kwalificatiedossier.</p>
<h3>Terugblik</h3>
<p>Doe bij Oefenen de eindmeting: dezelfde scan als in week 1. Je ziet direct hoeveel je gegroeid bent.</p>
<h3>Hoe verder?</h3>
<p>In <b>K1515 – Een eigen generatieve AI-oplossing samenstellen</b> word je van AI-gebruiker een AI-<b>bouwer</b>. Je stelt een eigen AI-assistent of agent samen voor een probleem uit je vak, voegt kennis toe, test en verbetert hem.</p>`,
 oefening:{type:'zelfscan', id:'eindmeting', ico:'📈', titel:'Eindmeting: hoe AI-geletterd ben ik nu?', intro:'Dezelfde vragen als in week 1. Onder elk schuifje zie je je startscore.',
   vergelijk:{opslag:'aikd_k1499', sleutel:'1.nulmeting'},
   items:['Ik kan uitleggen hoe een taalmodel tekst maakt','Ik weet welke AI-tools er zijn voor mijn beroep','Ik schrijf prompts die in één keer goed resultaat geven','Ik controleer AI-antwoorden op fouten en bronnen','Ik herken bias (vooroordelen) in AI-content','Ik weet wat wel en niet mag qua privacy en auteursrecht','Ik weet wat de AI Act betekent voor mijn werk','Ik gebruik AI om beelden of geluid te maken']},
 opdrachten:[
  {id:'a', titel:'Eindreflectie', uren:2, tekst:'<p>Schrijf een eindreflectie (300–500 woorden): Wat kun je nu dat je in week 1 niet kon? Hoe ga je AI in je beroep gebruiken? Waar blijf je kritisch op? Wat zou je anders doen?</p>', invoer:'Mijn eindreflectie…'}
 ],
 quiz:[],
 reflectie:'Eén zin aan jezelf in week 1: wat zou je jezelf willen vertellen?'}
],

toetsing:{
 intro:'Je sluit K1499 af met twee beroepsproducten en een criteriumgericht gesprek. De beoordeling volgt de gedragscriteria van de twee werkprocessen uit het kwalificatiedossier (D1-K1-W1 en D1-K1-W2).',
 producten:[
  {id:'bp1', ico:'🧭', naam:'Beroepsproduct 1: Tooladvies', dossier:'D1-K1-W1 Zoekt informatie over en kiest AI-tool(s)', week:8,
   wat:'Een onderbouwd advies over de AI-tool(s) die passen bij jouw beroepspraktijk, afgestemd met een collega of leidinggevende.',
   inhoud:['situatie en taken','knock-out- en gewogen criteria','longlist met gedocumenteerde informatie (kosten, gebruiksgemak, functies, gebruik in beroep, bron + datum)','testprotocol en resultaten (gebruiksgemak, betrouwbaarheid, kwaliteit), incl. een nieuwe tool','beslismatrix en onderbouwde keuze','AI-richtlijn (verantwoord gebruik)','verslag van het afstemmingsgesprek'],
   criteria:['doorzoekt doelgericht relevante informatiebronnen over AI-tools','vergelijkt en selecteert AI-tools zorgvuldig op basis van verzamelde informatie','test de geselecteerde AI-tools deskundig op gebruiksgemak, betrouwbaarheid en kwaliteit','stemt tijdig af met relevante betrokkenen','gebruikt beschikbare middelen en informatie effectief','documenteert bevindingen helder en gestructureerd','werkt volgens (wettelijke) kaders en richtlijnen omtrent AI-gebruik']},
  {id:'bp2', ico:'🛠️', naam:'Beroepsproduct 2: Praktijkopdracht', dossier:'D1-K1-W2 Zet AI-tools in bij werkzaamheden', week:16,
   wat:'Een echte taak uit je BPV of werk, uitgevoerd met AI: van prompt tot gecontroleerde, verwerkte en opgeslagen content.',
   inhoud:['opdrachtomschrijving + akkoord','kaders en hoe je eraan voldoet','prompts en iteratielog','5+ factchecks met bronnen','bias-check','eindproduct (tekst, beeld en/of geluid)','beschrijving van eigen verwerking en opslag','AI-verantwoording','feedback en verwerking'],
   criteria:['formuleert heldere en relevante prompts met instructies voor inhoud, toon en stijl','controleert nauwgezet de betrouwbaarheid, logica en consistentie van de informatie','past de prompt doelgericht aan om bruikbare content te verkrijgen','past een iteratieve werkwijze toe','verwerkt de gegenereerde content correct en zorgvuldig','slaat de content nauwkeurig op','werkt volgens (wettelijke) kaders en richtlijnen omtrent AI-gebruik']}
 ],
 gesprek:'Ongeveer 20 minuten, met je beroepsproducten en logboek erbij. Je laat zien dat je het werk zelf gedaan hebt en dat je de vakkennis beheerst: hoe AI werkt, mogelijkheden en beperkingen, ethiek en privacy, bias, auteursrecht en wet- en regelgeving.',
 vragen:['Leg uit hoe een taalmodel een antwoord maakt. Waarom kan het fout zijn?','Waarom koos je deze tool en niet de andere? Welke test gaf de doorslag?','Wat deed je toen je leidinggevende of begeleider kritiek had?','Laat een iteratie zien: wat zag je, wat paste je aan, waarom?','Welke bewering bleek bij je factcheck niet te kloppen? Hoe ontdekte je dat?','Welke bias zag je, en wat deed je eraan?','Mag de content die je maakte commercieel gebruikt worden? Hoe weet je dat?','Onder welk risiconiveau van de AI Act valt jouw toepassing?','Welke gegevens heb je bewust níét in de AI-tool gezet?','Een nieuwe AI-tool komt op de markt. Wat doe je?'],
 norm:'Per gedragscriterium: onvoldoende / voldoende / goed. Voor een voldoende moeten alle criteria minimaal voldoende zijn. Het gesprek bevestigt (of corrigeert) de beoordeling van de beroepsproducten. Het definitieve beoordelingsformulier en de cesuur stelt de examencommissie van Ter AA vast.'
}
};
})();
