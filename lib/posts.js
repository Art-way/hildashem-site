// lib/posts.js

// This file acts as a simple in-memory database for our blog posts.
// All dates are now in YYYY-MM-DD format for consistency and to prevent build errors.
// Internal links have been added to the content for better SEO.

export const posts = [
  {
    year: '2015',
    month: '09',
    slug: 'i-vantan-pa-nagot-battre',
    title: "I väntan på något bättre",
    category: "Tankar",
    date: "2015-09-01",
    imageUrl: "/post-vantan.jpg",
    author: "Hilda Shem",
    content: `
      <p>Ibland känns det som att livet består av en enda lång väntan. Vi väntar på att helgen ska komma, på att semestern ska börja, på att barnen ska bli äldre, eller på att det där stora projektet äntligen ska bli klart. I denna ständiga väntan på 'något bättre' är det lätt att glömma bort att leva i nuet.</p>
      <p>Men vad händer med dagarna som passerar medan vi väntar? Är de bara transportsträckor till en framtida lycka? Jag har kommit att inse att den verkliga magin ofta finns i de små, till synes obetydliga ögonblicken. En kopp kaffe i morgonsolen, doften av nyklippt gräs, ett oväntat leende från en främling. Läs gärna mina tankar om <a href="/om-att-gora-det-man-ar-bra-pa">att göra det man är bra på</a> för mer inspiration.</p>
      <h2>Att praktisera vardagsglädje</h2>
      <p>Att aktivt leta efter och uppskatta dessa små stunder av glädje har förändrat mitt perspektiv. Det handlar inte om att sluta drömma eller planera för framtiden, utan om att inte låta framtidsdrömmarna överskugga den skönhet som finns här och nu. Det är en övning i mindfulness, att vara närvarande i sitt eget liv.</p>
      <p>Så nästa gång du finner dig själv i väntans tider, försök att stanna upp. Se dig omkring. Vad finns det för vackert i din närhet just i denna stund? Kanske är det just det ögonblicket, inte det du väntar på, som är 'något bättre'.</p>
    `
  },
  
  {
    year: '2014',
    month: '12',
    slug: 'dag-17-gor-om-dina-julgranskulor',
    title: "Gör om dina julgranskulor",
    category: "Pysseltips",
    date: "2014-12-17",
    imageUrl: "/post-julgranskulor.jpg",
    author: "Hilda Shem",
    content: `
      <p>Har du en låda med gamla julgranskulor som har sett sina bästa dagar? Kanske är färgen avskavd eller så passar de helt enkelt inte in i årets färgtema. Släng dem inte! Med lite färg och fantasi kan du ge dem ett helt nytt och personligt utseende.</p>
      <h2>Enkla idéer för förvandling:</h2>
      <p><strong>Måla om dem:</strong> En av de enklaste metoderna är att måla om kulorna. Använd hobbyfärg som fäster på glas eller plast. Du kan måla dem enfärgade i en ny kulör, göra mönster med en tunn pensel eller kanske dutta på färg med en svamp för en texturerad yta.</p>
      <p><strong>Klä med tyg eller papper:</strong> Klipp vackert tyg eller papper (kanske från en gammal bok eller nothäfte) i små bitar och limma fast dem på kulan med decoupagelim. Detta ger en vacker och unik finish.</p>
      <p><strong>Glitter och glamour:</strong> För en mer glamorös look, pensla kulan med lim och rulla den i glitter. Låt torka ordentligt. Detta är ett roligt pyssel att göra tillsammans med barnen.</p>
      <p>Att återbruka julpynt är inte bara bra för plånboken och miljön, det ger också dekorationer med en personlig historia. Se fler idéer i mitt inlägg om <a href="/julpyssel-fran-kollektive">julpyssel från kollektivet</a>.</p>
    `
  },
  {
    year: '2013',
    month: '12',
    slug: 'atervinning-av-varmeljus',
    title: "Återvinning av värmeljus",
    category: "Hållbarhet",
    date: "2013-12-05",
    imageUrl: "/post-atervinning.jpg",
    author: "Hilda Shem",
    content: `
      <p>Under de mörka månaderna tänder vi svenskar miljontals värmeljus. De skänker ett vackert och stämningsfullt ljus, men de lämnar också efter sig ett berg av tomma aluminiumkoppar. Visste du att korrekt återvinning av dessa små koppar kan göra stor skillnad för miljön?</p>
      <h2>Så här gör du rätt:</h2>
      <p>Aluminium är en värdefull resurs som kan återvinnas oändligt många gånger. Att återvinna aluminium sparar hela 95% av den energi som krävs för att framställa nytt. Problemet med värmeljus är den lilla vekeshållaren av stål som sitter i botten av koppen.</p>
      <p>När aluminium och stål blandas i återvinningsprocessen försämras kvaliteten på det återvunna materialet. Därför är det viktigt att du, innan du slänger koppen i metallåtervinningen, pillar loss den lilla stålbiten med en kniv eller ett annat spetsigt föremål. Både koppen (aluminium) och vekeshållaren (stål) sorteras sedan som metallförpackningar. Det är en liten ansträngning som har stor positiv inverkan. Läs mer om hållbarhet i mitt inlägg om <a href="/gron-hudvard">grön hudvård</a>.</p>
    `
  },
  {
    year: '2012',
    month: '02',
    slug: 'sma-skyltar-till-frosadden',
    title: "Små skyltar till frösådden",
    category: "Trädgård",
    date: "2012-02-15",
    imageUrl: "/post-froskyltar.jpg",
    author: "Hilda Shem",
    content: `
      <p>När vårsolen börjar värma är det dags att förbereda årets frösådder. För att hålla ordning på alla små krukor och sålådor är det både praktiskt och charmigt med hemgjorda skyltar. Det är ett enkelt pyssel som gör stor skillnad i fönsterkarmen.</p>
      <h2>Material för enkla skyltar:</h2>
      <ul>
        <li><strong>Träpinnar:</strong> Glasspinnar eller blompinnar fungerar utmärkt.</li>
        <li><strong>Vattenfast penna:</strong> En tunn, permanent märkpenna är ett måste så att texten inte försvinner när du vattnar.</li>
        <li><strong>Alternativ:</strong> Du kan också använda lera för att forma egna skyltar som du sedan skriver på och låter torka, eller måla på släta stenar.</li>
      </ul>
      <p>Att skriva namnet på det du sått hjälper dig inte bara att komma ihåg vad som är vad, det blir också en vacker och personlig detalj i din odling. Jag har även skapat <a href="/odlingsskyltar-att-skriva-ut">utskrivbara odlingsskyltar</a> om du föredrar det. Lycka till med sådderna!</p>
    `
  },
  {
    year: '2013',
    month: '07',
    slug: 'tips-nar-du-beskar-dina-trad',
    title: "Tips när du beskär dina träd",
    category: "Trädgård",
    date: "2013-07-10",
    imageUrl: "/post-beskara-trad.jpg",
    author: "Hilda Shem",
    content: `
      <p>Att beskära fruktträd är en konst som kan kännas skrämmande, men med några grundläggande principer kan du hjälpa dina träd att må bättre och ge mer frukt. Den bästa tiden att beskära äppel- och päronträd är under JAS-perioden (juli, augusti, september).</p>
      <h2>Grundläggande beskärningstips:</h2>
      <p><strong>1. Ta bort döda och skadade grenar:</strong> Detta är det första och viktigaste steget. Döda grenar kan sprida sjukdomar. Klipp ända in till stammen eller en frisk sidogren.</p>
      <p><strong>2. Klipp bort korsande grenar:</strong> Grenar som växer inåt i kronan eller skaver mot varandra bör tas bort. Detta öppnar upp kronan för mer ljus och luft, vilket minskar risken för svampsjukdomar.</p>
      <p><strong>3. Vattenskott:</strong> Ta bort de raka, uppåtväxande skotten som växer från stammen eller större grenar. De tar energi från trädet och ger sällan frukt.</p>
      <p>Kom ihåg att använda rena och vassa verktyg för att få fina snittytor. Ett välmående träd kommer att tacka dig med en riklig skörd!</p>
    `
  },
  {
    year: '2011',
    month: '11',
    slug: 'sota-sma-honungskakor',
    title: "Söta små honungskakor",
    category: "Recept",
    date: "2011-11-20",
    imageUrl: "/post-honungskakor.jpg",
    author: "Hilda Shem",
    content: `
      <p>Dessa små honungskakor är underbart goda och sprider en ljuvlig doft i hela huset när de gräddas. De passar perfekt till en kopp te eller som en del av julens gottebord. Receptet är enkelt och roligt att baka tillsammans med familjen.</p>
      <h2>Ingredienser:</h2>
      <ul>
        <li>100 g smör</li>
        <li>1 dl flytande honung</li>
        <li>1 ägg</li>
        <li>4 dl vetemjöl</li>
        <li>1 tsk bikarbonat</li>
        <li>1 tsk malen kanel</li>
        <li>1/2 tsk malen ingefära</li>
      </ul>
      <h2>Gör så här:</h2>
      <p>Smält smöret och blanda det med honungen. Låt svalna något och rör sedan ner ägget. Blanda de torra ingredienserna i en separat skål och rör sedan ner dem i smörblandningen. Arbeta ihop till en smidig deg. Låt degen vila i kylen i minst 30 minuter. Kavla ut degen tunt och stansa ut kakor med pepparkaksformar. Grädda i 175°C i cirka 8-10 minuter. Låt svalna på galler. För fler julrecept, se mitt inlägg om <a href="/julens-goda">julens goda</a>.</p>
    `
  },
  {
    year: '2014',
    month: '04',
    slug: 'var-fantastiska-resa',
    title: "Vår fantastiska resa",
    category: "Resor",
    date: "2014-04-20",
    imageUrl: "/post-resa.jpg",
    author: "Hilda Shem",
    content: `
      <p>Att resa är att leva, brukar man säga, och jag kan inte annat än att hålla med. Nyligen kom vi hem från en oförglömlig resa som tog oss till platser vi länge drömt om. Det var en resa fylld av nya intryck, smaker och möten som har gett oss minnen för livet.</p>
      <h2>Höjdpunkter från resan:</h2>
      <p>Vi började vårt äventyr i en pulserande storstad där vi utforskade historiska gator och njöt av fantastisk mat. Därefter reste vi vidare till landsbygden där vi upplevde en helt annan takt. Tystnaden, naturen och den stjärnklara himlen var en balsam för själen.</p>
      <p>En av de starkaste upplevelserna var att vandra i bergen och se solen gå upp över dalen. Det är i sådana stunder man känner sig liten och samtidigt oändligt tacksam. Att resa handlar inte bara om att se nya platser, utan också om att se sig själv och sin egen tillvaro med nya ögon.</p>
    `
  },
  {
    year: '2012',
    month: '05',
    slug: 'hildas-inspiration-2',
    title: "Hildas Inspiration #2: Vårens färger",
    category: "Inspiration",
    date: "2012-05-10",
    imageUrl: "/post-inspiration-2.jpg",
    author: "Hilda Shem",
    content: `
      <p>Våren är en explosion av färger och liv! Efter en lång och mörk vinter är det som att naturen äntligen får visa upp sin fulla prakt. I detta inspirationsinlägg vill jag dela med mig av de färger och stämningar som inspirerar mig mest just nu.</p>
      <h2>En palett av pasteller och grönska:</h2>
      <p><strong>Ljusgrönt:</strong> Färgen av de första, skira björklöven. Den symboliserar nystart och hopp. Jag tar in den i hemmet genom kvistar i vaser och textilier.</p>
      <p><strong>Ljusrosa:</strong> Som körsbärsblommorna som blommar för en kort, intensiv period. En mjuk och romantisk färg som är vacker i buketter och på kuddar.</p>
      <p><strong>Himmelsblått:</strong> En klar och krispig vårdag. Färgen ger en känsla av rymd och lugn. Perfekt som accentfärg på en vägg eller i porslin. För mer inspiration, se <a href="/premiar-for-hildas-inspiration-1">mitt första inspirationsinlägg</a>.</p>
      <p>Låt dig inspireras av naturens egen färgpalett och bjud in våren i ditt hem. Det kan vara så enkelt som en bukett tulpaner på köksbordet.</p>
    `
  },
  {
    year: '2011',
    month: '11',
    slug: 'en-bra-ga-bort-present',
    title: "En bra gå-bort-present",
    category: "Pysseltips",
    date: "2011-11-05",
    imageUrl: "/post-present.jpg",
    author: "Hilda Shem",
    content: `
      <p>Att bli bortbjuden på middag är alltid trevligt, och att ha med sig en liten present till värdparet är en fin gest som visar uppskattning. Men det kan vara svårt att komma på något annat än den klassiska vinflaskan eller blombuketten. Här är ett tips på en personlig och hemgjord present som garanterat blir en succé.</p>
      <h2>Hemgjort örtsalt i vacker burk:</h2>
      <p>Att göra eget örtsalt är otroligt enkelt och blir en lyxig och användbar present. Du kan anpassa smaken efter säsong och vad du själv tycker om.</p>
      <h3>Du behöver:</h3>
      <ul>
        <li>Grovt havssalt</li>
        <li>Färska örter, t.ex. rosmarin, timjan och salvia</li>
        <li>En fin glasburk med tättslutande lock</li>
        <li>Etikett och snöre</li>
      </ul>
      <p>Mixa salt och färska örter i en matberedare tills allt är finfördelat. Sprid ut blandningen på en plåt med bakplåtspapper och låt torka i rumstemperatur i ett dygn, eller på låg värme (50°C) i ugnen med luckan på glänt. Häll upp det torra saltet i en vacker burk, skriv en fin etikett och knyt ett snöre runt. En omtänksam och användbar present!</p>
    `
  },
  {
    year: '2012',
    month: '01',
    slug: 'vinn-en-tavla-till-nagon-du-tycker-om',
    title: "Tävling: Vinn en tavla till någon du tycker om!",
    category: "Tävling",
    date: "2012-01-15",
    imageUrl: "/post-tavling-tavla.jpg",
    author: "Hilda Shem",
    content: `
      <p>Året har precis börjat och vad passar bättre än att starta det med en fin tävling? I samarbete med en fantastisk konstnär har jag fått äran att tävla ut en vacker och personlig tavla. En perfekt gåva till någon du håller kär, eller varför inte till dig själv?</p>
      <h2>Så här deltar du i tävlingen:</h2>
      <p>För att vara med och tävla var det enkelt. Deltagarna ombads att lämna en kommentar där de motiverade vem de skulle vilja ge tavlan till och varför. Kärlek och uppskattning är teman som alltid ligger mig varmt om hjärtat, och det var underbart att läsa alla fina motiveringar.</p>
      <p><em>Notera: Tävlingen är nu avslutad. Ett stort grattis till vinnaren och tack till alla som deltog och delade med sig av sina berättelser! Håll utkik för framtida tävlingar.</em></p>
    `
  },
  {
    year: '2012',
    month: '02',
    slug: 'tavla-om-ordning-reda',
    title: "Tävla om ordning & reda",
    category: "Tävling",
    date: "2012-02-20",
    imageUrl: "/post-tavling-forvaring.jpg",
    author: "Hilda Shem",
    content: `
      <p>Februari kan kännas som en lång och grå månad, men det är också en perfekt tid för att organisera och skapa ordning i hemmet inför våren. För att ge er lite extra motivation på vägen anordnade jag en tävling i samarbete med ett företag som specialiserar sig på smart förvaring!</p>
      <h2>Vinsten: Ett komplett förvaringskit</h2>
      <p>I potten låg ett fantastiskt kit med vackra och praktiska förvaringslådor, perfekta för allt från pysselmaterial till viktiga papper. Att skapa ordning behöver inte vara tråkigt – med rätt produkter kan det bli ett rent nöje. Läs mina bästa tips i inlägget om <a href="/ordning-och-reda-med-ratt-forvaring">ordning och reda</a>.</p>
      <p>Tävlingsuppgiften var att dela med sig av sitt bästa organisationstips i kommentarsfältet. Det kom in så många smarta och kreativa idéer!</p>
      <p><em>Notera: Tävlingen är nu avslutad. Tack till alla som delade med sig av sina smarta tips! Jag hoppas ni alla känner er inspirerade att ta tag i röran där hemma.</em></p>
    `
  },
  {
    year: '2011',
    month: '11',
    slug: 'vinn-personlig-barntavla',
    title: "Vinn en personlig barntavla",
    category: "Tävling",
    date: "2011-11-12",
    imageUrl: "/post-tavling-barntavla.jpg",
    author: "Hilda Shem",
    content: `
      <p>En personlig barntavla är en underbar och tidlös doppresent, födelsedagspresent eller bara en fin detalj till barnrummet. Därför var jag extra glad över att kunna anordna en tävling där en lycklig vinnare fick en specialdesignad tavla med barnets namn, födelsedatum och andra personliga detaljer.</p>
      <h2>En gåva att minnas</h2>
      <p>Dessa tavlor är mer än bara dekoration; de är ett minne för livet. Tävlingen gick ut på att berätta vilket motiv man skulle önska på sin tavla om man vann. Fantasin flödade i kommentarerna, med allt från sagodjur till rymdraketer.</p>
      <p>Det är alltid lika roligt att kunna erbjuda er läsare chansen att vinna något så unikt och personligt.</p>
      <p><em>Notera: Tävlingen är nu avslutad. Stort grattis till vinnaren! Håll ögonen öppna för fler spännande tävlingar framöver.</em></p>
    `
  },
  {
    year: '2012',
    month: '03',
    slug: 'vinn-ett-valfritt-smycke',
    title: "Tävling: Vinn ett valfritt smycke!",
    category: "Tävling",
    date: "2012-03-05",
    imageUrl: "/post-tavling-smycke.jpg",
    author: "Hilda Shem",
    content: `
      <p>Våren är på ingång och det är dags att pigga upp sig med något vackert! Denna gång hade jag ett spännande samarbete med en talangfull smyckesdesigner, där en av er läsare hade chansen att vinna ett valfritt smycke från hennes senaste kollektion.</p>
      <h2>Personlig stil och hantverk</h2>
      <p>Kollektionen bestod av handgjorda smycken i silver och mässing, med inspiration från naturens organiska former. Varje smycke var unikt och bar på en egen historia. Vinnaren fick själv välja sitt favoritsmycke – ett halsband, ett par örhängen eller ett armband.</p>
      <p>För att delta i tävlingen skulle man beskriva vilket smycke man skulle välja och hur man skulle styla det. Det var fantastiskt att se hur era personliga stilar kom till uttryck i era svar!</p>
      <p><em>Notera: Tävlingen är nu avslutad. Grattis till den lyckliga vinnaren! Tack för ert engagemang.</em></p>
    `
  },
  {
    year: '2012',
    month: '04',
    slug: 'vinn-en-snygg-pall',
    title: "Tävling: Vinn en snygg pall!",
    category: "Tävling",
    date: "2012-04-16",
    imageUrl: "/post-tavling-pall.jpg",
    author: "Hilda Shem",
    content: `
      <p>En snygg och funktionell pall kan vara den där lilla detaljen som lyfter ett helt rum. Den kan fungera som en extra sittplats, ett litet sidobord eller bara en vacker inredningsdetalj. I ett samarbete med ett svenskt designföretag fick jag möjlighet att tävla ut en av deras mest populära pallar.</p>
      <h2>Design som håller</h2>
      <p>Vinsten var en stilren pall i massivt trä med en tidlös design som passar i de flesta hem. För att delta i tävlingen skulle man svara på frågan: "Var i ditt hem skulle denna pall få sin hedersplats?".</p>
      <p>Det var inspirerande att läsa om alla era idéer – allt från en plats i hallen för att knyta skorna, till en plats bredvid sängen som nattduksbord. Det visar verkligen hur mångsidig en enkel möbel kan vara.</p>
      <p><em>Notera: Tävlingen är nu avslutad. Stort grattis till vinnaren som nu har en ny vacker möbel i sitt hem!</em></p>
    `
  },
  {
    year: '2012',
    month: '08',
    slug: 'vinn-en-lysande-glob',
    title: "Tävling: Vinn en lysande glob!",
    category: "Tävling",
    date: "2012-08-22",
    imageUrl: "/post-tavling-glob.jpg",
    author: "Hilda Shem",
    content: `
      <p>När höstmörkret börjar smyga sig på finns det inget mysigare än stämningsfull belysning. Därför var det extra roligt att kunna tävla ut en "lysande glob" – en vacker ljusslinga formad som bollar i olika färger som skapar ett mjukt och behagligt sken.</p>
      <h2>Skapa en mysig atmosfär</h2>
      <p>Dessa ljusslingor är otroligt mångsidiga och kan användas för att skapa en mysig stämning i vilket rum som helst. Häng den över sänggaveln, lägg den i en stor glasvas eller dekorera en hylla. Vinnaren fick själv välja färgkombination för att matcha sitt eget hem.</p>
      <p>Tävlingsfrågan var enkel: "Vilken färgkombination skulle du välja och varför?". Alla era svar gav en härlig inblick i era personliga inredningsstilar.</p>
      <p><em>Notera: Tävlingen är nu avslutad. Grattis till vinnaren! Hoppas globen lyser upp fint i höstmörkret.</em></p>
    `
  },
  {
    year: '2012',
    month: '12',
    slug: 'hildas-inspiration-3',
    title: "Hildas Inspiration #3: Julens magi",
    category: "Inspiration",
    date: "2012-12-10",
    imageUrl: "/post-inspiration-3.jpg",
    author: "Hilda Shem",
    content: `
      <p>Julen handlar om så mycket mer än bara julklappar och mat. För mig ligger magin i de små detaljerna, traditionerna och stämningen som vi skapar tillsammans. I detta inspirationsinlägg delar jag med mig av några av mina favoritsätt att fånga julens magi.</p>
      <h2>Dofterna, ljuset och pysslet:</h2>
      <p><strong>Dofterna:</strong> Inget säger jul som doften av hyacinter, kanel och nybakta pepparkakor. Ställ fram en skål med apelsiner dekorerade med nejlikor, eller låt en kastrull med glöggkryddor sjuda på spisen för att sprida juldoft i hela hemmet.</p>
      <p><strong>Ljuset:</strong> Levande ljus är ett måste. Fyll hemmet med värmeljus, blockljus och adventsljusstakar. Ljuset skapar en omedelbar känsla av värme och trygghet i vintermörkret.</p>
      <p><strong>Pysslet:</strong> Att skapa något med händerna är ett fantastiskt sätt att varva ner. Gör egna julkort, bind en krans till dörren eller pyssla ihop enkla dekorationer av naturmaterial. Det behöver inte vara perfekt – det är tanken och processen som räknas. Hitta mer inspiration i mitt inlägg om <a href="/samlad-julinspiration">samlad julinspiration</a>.</p>
    `
  },
  {
    slug: 'the-creative-collective',
    title: "The Creative Collective - En gemenskap för skapande",
    category: "Samarbeten",
    date: "2018-10-05",
    imageUrl: "/post-creative-collective.jpg",
    author: "Hilda Shem",
    content: `
      <p>Jag är så otroligt glad och stolt över att få presentera ett nytt, spännande projekt: The Creative Collective! Det är ett nätverk och en gemenskap som jag har startat tillsammans med några andra kreativa bloggare och influencers som jag beundrar.</p>
      <h2>Vad är The Creative Collective?</h2>
      <p>Vår vision är att skapa en plattform där vi kan inspirera varandra och er läsare genom gemensamma teman, utmaningar och projekt. Varje månad kommer vi att presentera ett nytt tema – det kan vara allt från "återbruk" till "dukning" eller "vårens första blommor". Vi kommer alla att tolka temat på vårt eget unika sätt och dela med oss av resultaten på våra respektive kanaler. Se vårt första samarbete i inlägget om <a href="/julpyssel-fran-kollektive">julpyssel från kollektivet</a>.</p>
      <p>Syftet är att lyfta fram den otroliga kreativitet som finns där ute och att skapa en känsla av gemenskap. Vi tror att vi blir starkare och mer kreativa tillsammans. Följ oss på resan och använd gärna vår gemensamma hashtag för att dela med dig av dina egna tolkningar!</p>
    `
  },
  {
    year: '2011',
    month: '09',
    slug: 'vinn-snygg-lampa-eller-lada',
    title: "Tävling: Vinn en snygg lampa eller låda!",
    category: "Tävling",
    date: "2011-09-15",
    imageUrl: "/post-tavling-lampa.jpg",
    author: "Hilda Shem",
    content: `
      <p>Hösten är här och det är dags att boa in sig och göra hemmet mysigt. I ett roligt samarbete fick jag chansen att tävla ut en valfri produkt från en webbshop fylld med vacker inredning. Vinnaren fick välja mellan en stilren industrilampa eller en vacker förvaringslåda i trä.</p>
      <h2>Ljus eller ordning?</h2>
      <p>Det var ett svårt val för deltagarna! Lampan var perfekt för att skapa en mysig läshörna, medan lådan var idealisk för att få ordning på småsaker i hallen eller på skrivbordet. För att delta skulle man helt enkelt lämna en kommentar och berätta vilken produkt man skulle välja och varför.</p>
      <p>Det är alltid lika roligt att se vilken produkt som är mest populär och att läsa era kreativa idéer om hur ni skulle använda dem i era hem.</p>
      <p><em>Notera: Tävlingen är nu avslutad. Ett stort grattis till vinnaren! Tack till alla som var med och tävlade.</em></p>
    `
  },
  {
    year: '2012',
    month: '01',
    slug: 'premiar-for-hildas-inspiration-1',
    title: "Premiär för Hildas Inspiration #1",
    category: "Inspiration",
    date: "2012-01-02",
    imageUrl: "/post-inspiration-1.jpg",
    author: "Hilda Shem",
    content: `
      <p>Gott nytt år, alla fina läsare! Jag startar det nya året med ett helt nytt koncept här på bloggen: "Hildas Inspiration". Det är en serie återkommande inlägg där jag kommer att samla och dela med mig av bilder, tankar, färger och stämningar som inspirerar mig för stunden.</p>
      <h2>Ett nytt år, en ny början</h2>
      <p>Januari är en månad för nystart och reflektion. Naturen vilar under ett täcke av snö, och det finns en stillhet som bjuder in till eftertanke. Jag inspireras av det enkla och avskalade: krispiga vinterpromenader, ljuset från ett ensamt ljus i mörkret, och drömmar om den kommande vårens odlingar.</p>
      <p>Det första temat i denna serie är "Nystart". Det handlar om att rensa ut det gamla, både i hemmet och i sinnet, för att göra plats för nya idéer och möjligheter. Jag hoppas att ni vill följa med på denna resa och att ni också hittar inspiration i de små sakerna.</p>
    `
  },
  {
    year: '2013',
    month: '01',
    slug: 'ordning-och-reda-med-ratt-forvaring',
    title: "Ordning och reda med rätt förvaring",
    category: "Inredning",
    date: "2013-01-20",
    imageUrl: "/post-forvaring.jpg",
    author: "Hilda Shem",
    content: `
      <p>Ett av de vanligaste nyårslöftena är att få bättre ordning hemma. Men för att lyckas med det krävs mer än bara viljestyrka – det krävs ett bra system och framför allt, rätt förvaring. Att investera i smart och snygg förvaring är A och O för ett harmoniskt och lättstädat hem.</p>
      <h2>Mina bästa förvaringstips:</h2>
      <p><strong>1. Rensa först:</strong> Innan du köper en enda förvaringslåda, gå igenom dina saker och rensa ut det du inte längre behöver eller älskar. Det är ingen idé att organisera och förvara saker som bara tar upp onödig plats.</p>
      <p><strong>2. Tänk vertikalt:</strong> Utnyttja höjden i dina rum. Hyllsystem som går från golv till tak ger massor av förvaringsyta utan att ta upp mycket golvyta.</p>
      <p><strong>3. Välj dold och öppen förvaring:</strong> Allt behöver inte stå framme. Kombinera öppna hyllor för vackra saker du vill visa upp, med skåp och lådor för sådant som lätt skapar ett rörigt intryck.</p>
      <p><strong>4. Enhetliga behållare:</strong> Använd likadana burkar, korgar och lådor för att skapa ett lugnt och enhetligt intryck. Märk upp dem med etiketter så att du enkelt hittar det du letar efter.</p>
    `
  },
  {
  year: '2014',
  month: '08',
  slug: 'snabb-tomatsas',
  title: "Världens enklaste och snabbaste tomatsås",
  category: "Recept",
  date: "2014-08-15",
  imageUrl: "/post-tomatsas.jpg",
  author: "Hilda Shem",
  content: `
    <p>Ibland är det de enklaste recepten som är de allra bästa. Den här tomatsåsen är ett perfekt exempel – den tar bara några minuter att svänga ihop och smakar oändligt mycket bättre än den färdigköpta varianten. Den är perfekt som bas till pasta, pizza eller i en lasagne.</p>
    <h2>Ingredienser:</h2>
    <ul>
      <li>1 burk krossade tomater av god kvalitet (gärna San Marzano)</li>
      <li>2 vitlöksklyftor, tunt skivade</li>
      <li>2 msk olivolja</li>
      <li>1 tsk torkad oregano</li>
      <li>En nypa socker (för att balansera syran)</li>
      <li>Salt och nymalen svartpeppar</li>
      <li>Färska basilikablad (valfritt)</li>
    </ul>
    <h2>Gör så här:</h2>
    <p><strong>1. Fräs vitlöken:</strong> Värm olivoljan i en kastrull på medelvärme. Tillsätt den skivade vitlöken och fräs den i ungefär en minut tills den blir doftande, men utan att den tar färg.</p>
    <p><strong>2. Tillsätt tomaterna:</strong> Häll i de krossade tomaterna, oregano och en nypa socker. Rör om och låt såsen sjuda på låg värme i minst 10-15 minuter. Ju längre den får puttra, desto fylligare blir smaken.</p>
    <p><strong>3. Smaka av:</strong> Smaka av såsen med salt och peppar. Om du använder färsk basilika, rör ner den precis innan servering. Klart! Enklare än så här blir det inte att få till en äkta italiensk smak i ditt eget kök. Denna sås är en utmärkt bas för <a href="/2013/09/vegetariska-enchiladas.html">vegetariska enchiladas</a>.</p>
  `
},
  {
    year: '2013',
    month: '01',
    slug: 'tavling-vinn-massor-av-pyssel',
    title: "Tävling: Vinn massor av pyssel!",
    category: "Tävling",
    date: "2013-01-28",
    imageUrl: "/post-tavling-pyssel.jpg",
    author: "Hilda Shem",
    content: `
      <p>Vad passar bättre för att bota januaritröttheten än en stor dos kreativitet? I ett fantastiskt samarbete med en av mina favoritbutiker för pysselmaterial fick jag äran att tävla ut ett gigantiskt pysselpaket till en lycklig vinnare!</p>
      <h2>Ett drömpaket för den kreativa</h2>
      <p>Paketet var fyllt till bredden med allt man kan önska sig: vackra papper i olika mönster, stämplar, stämpeldynor, klistermärken, band, pärlor och mycket, mycket mer. En riktig dröm för den som älskar att skapa.</p>
      <p>För att delta i tävlingen skulle man dela med sig av sitt bästa pysseltips eller berätta vad man skulle vilja skapa om man vann paketet. Det var så roligt att läsa alla era kreativa och inspirerande idéer!</p>
      <p><em>Notera: Tävlingen är nu avslutad. Ett stort grattis till vinnaren! Jag hoppas att paketet kommer att leda till många timmars skaparglädje.</em></p>
    `
  },
  {
    year: '2014',
    month: '06',
    slug: 'nagra-tips-infor-sommarloppisarna',
    title: "Några tips inför sommarloppisarna",
    category: "Inredning",
    date: "2014-06-15",
    imageUrl: "/post-loppis.jpg",
    author: "Hilda Shem",
    content: `
      <p>Sommaren är högsäsong för loppisar! Det är en fantastisk möjlighet att hitta unika och personliga föremål till hemmet för en billig peng. Men för att göra de bästa fynden gäller det att vara förberedd. Här är mina bästa tips för en lyckad loppisrunda.</p>
      <h2>Mina bästa loppistips:</h2>
      <p><strong>1. Var ute i god tid:</strong> De bästa sakerna försvinner oftast först. Försök att vara på plats precis när loppisen öppnar.</p>
      <p><strong>2. Ha en idé, men var öppen:</strong> Det är bra att ha en lista på saker du letar efter, men var också öppen för oväntade fynd. Ibland är det de sakerna man inte visste att man behövde som blir de bästa köpen.</p>
      <p><strong>3. Kontanter är kung:</strong> Många mindre loppisar, särskilt på landsbygden, tar inte kort eller Swish. Se till att ha med dig kontanter i små valörer.</p>
      <p><strong>4. Pruta med ett leende:</strong> Att pruta hör till på loppis, men gör det alltid på ett trevligt och respektfullt sätt. Ett leende kommer man långt med. Läs även mina <a href="/auktionstips-i-tidningen">tips för att fynda på auktion</a>!</p>
    `
  },
  {
    
    slug: 'dag-21-kanderade-mandlar-med-lakrits',
    title: "Dag 21: Kanderade mandlar med lakrits",
    category: "Recept",
    date: "2014-12-21",
    imageUrl: "/post-kanderade-mandlar.jpg",
    author: "Hilda Shem",
    content: `
      <p>Kanderade mandlar, eller brända mandlar som de också kallas, är ett klassiskt julgodis som sprider en oemotståndlig doft. I det här receptet har jag gett dem en modern twist med hjälp av lakritspulver, vilket ger en spännande kontrast till det söta. De är perfekta att ge bort i en fin cellofanpåse.</p>
      <h2>Ingredienser:</h2>
      <ul>
        <li>200 g sötmandel</li>
        <li>1.5 dl strösocker</li>
        <li>0.5 dl vatten</li>
        <li>1 msk lakritspulver (rålakrits)</li>
        <li>En nypa flingsalt</li>
      </ul>
      <h2>Gör så här:</h2>
      <p>Blanda socker och vatten i en stekpanna och koka upp. Tillsätt mandlarna och rör om. Fortsätt att koka och röra tills sockret kristalliseras och blir torrt och sandigt runt mandlarna. Sänk värmen något och fortsätt röra tills sockret smälter igen och blir gyllenbrunt och karamelliserat. Häll snabbt ut mandlarna på ett bakplåtspapper. Strö över lakritspulver och flingsalt och sära på mandlarna med två gafflar. Låt svalna helt.</p>
    `
  },
  {
    slug: 'god-jul-faglarna',
    title: "God jul, fåglarna!",
    category: "Trädgård",
    date: "2019-12-23",
    imageUrl: "/post-fagelmat.jpg",
    author: "Hilda Shem",
    content: `
      <p>Mitt i allt julfirande är det lätt att glömma bort våra små vänner i trädgården. Fåglarna har det tufft under vintern när marken är frusen och det är ont om mat. Att göra egen fågelmat är ett roligt och uppskattat pyssel för hela familjen, och en fin julklapp till fåglarna.</p>
      <h2>Enkelt recept på fågelmat:</h2>
      <p>Du behöver bara två ingredienser: osaltat smör eller kokosfett och en blandning av fågelfrön (t.ex. solrosfrön, hampafrön och hackade nötter).</p>
      <p>Smält fettet försiktigt i en kastrull. Rör ner fröblandningen. Häll sedan upp smeten i tomma pepparkaksformar som du lagt på ett bakplåtspapper. Glöm inte att sticka ner ett snöre i varje form innan smeten stelnar, så att du kan hänga upp dem i träden. Låt dem stelna i kylen eller utomhus om det är kallt. En liten gest som gör stor skillnad för våra bevingade vänner. God Jul!</p>
    `
  },
  {
    slug: 'om-att-gora-det-man-ar-bra-pa',
    title: "Om att göra det man är bra på",
    category: "Tankar",
    date: "2019-04-15",
    imageUrl: "/post-gora-sitt-basta.jpg",
    author: "Hilda Shem",
    content: `
      <p>I en värld fylld av ständiga jämförelser på sociala medier är det lätt att känna sig otillräcklig. Man ser andras perfekta hem, vältränade kroppar och framgångsrika karriärer och tänker att man själv borde göra mer, vara mer. Men tänk om vi istället skulle fokusera på det vi faktiskt är bra på?</p>
      <h2>Hitta din unika styrka</h2>
      <p>Vi har alla våra unika talanger och styrkor. Kanske är du en mästare på att baka surdegsbröd, otroligt duktig på att lyssna på dina vänner, eller har en enastående förmåga att få orkidéer att blomma om. Det spelar ingen roll vad det är, stort som smått. När vi ägnar oss åt det vi är bra på och tycker om, känner vi en genuin glädje och självkänsla som inte kan mätas i likes eller följare.</p>
      <p>Att identifiera och odla sina styrkor är en form av självkärlek. Det handlar om att acceptera sig själv för den man är och att fira sina egna, unika förmågor. Så min uppmaning till dig idag är: vad är du riktigt bra på? Gör mer av det!</p>
    `
  },
  {
    year: '2011',
    month: '10',
    slug: 'auktionstips-i-tidningen',
    title: "Auktionstips i tidningen",
    category: "Inredning",
    date: "2011-10-05",
    imageUrl: "/post-auktionstips.jpg",
    author: "Hilda Shem",
    content: `
      <p>Vilken rolig överraskning! I det senaste numret av en av mina favoritinredningstidningar hittade jag ett reportage där jag fick dela med mig av mina bästa tips för att fynda på auktion. Det är alltid en ära att få bidra med sin kunskap och passion.</p>
      <h2>Att fynda på auktion:</h2>
      <p>Auktioner kan vara ett fantastiskt sätt att hitta unika möbler och föremål med en historia, ofta till ett mycket bra pris. I artikeln delade jag med mig av några av mina gyllene regler:</p>
      <ul>
        <li><strong>Gör din research:</strong> Gå på visningen innan auktionen för att inspektera de föremål du är intresserad av. Kontrollera skick och eventuella skador.</li>
        <li><strong>Sätt en budget:</strong> Bestäm i förväg hur mycket du är villig att betala för ett föremål och håll dig till det. Det är lätt att ryckas med i budgivningens hetta.</li>
        <li><strong>Ha tålamod:</strong> Ibland gör man inga fynd alls, och ibland hittar man en riktig skatt. Det är en del av charmen.</li>
      </ul>
      <p>Att handla på auktion är både spännande och hållbart. Ett perfekt sätt att skapa ett personligt hem.</p>
    `
  },
  {
    year: '2012',
    month: '02',
    slug: 'allt-ar-inte-guld-som-glimmar',
    title: "Allt är inte guld som glimmar",
    category: "Tankar",
    date: "2012-02-28",
    imageUrl: "/post-guld.jpg",
    author: "Hilda Shem",
    content: `
      <p>Det gamla ordspråket "allt är inte guld som glimmar" har sällan känts mer relevant än i dagens samhälle. I flödet av till synes perfekta liv på sociala medier är det lätt att dras med i en jakt på en polerad yta. Men vad döljer sig egentligen bakom fasaden?</p>
      <h2>Värdet av det äkta</h2>
      <p>Jag har alltid dragits till det nötta, det imperfekta, det som bär på en historia. En ärvd fåtölj med ett litet märke på armstödet, en handdrejad kopp som inte är helt symmetrisk, en trädgård där ogräset också får ta lite plats. För mig är det där det äkta värdet ligger. Det är i sprickorna som ljuset sipprar in, och det är i det operfekta som personligheten och charmen bor.</p>
      <p>Detta inlägg är en påminnelse, både till mig själv och till er, att våga uppskatta det som inte är perfekt. Att se skönheten i det autentiska och att komma ihåg att ett meningsfullt liv sällan är lika glänsande som ett guldsmycke, men oändligt mycket mer värdefullt.</p>
    `
  },
  {
    year: '2012',
    month: '02',
    slug: 'en-riktig-skattgomma',
    title: "En riktig skattgömma",
    category: "Loppis",
    date: "2012-02-22",
    imageUrl: "/post-skattgomma.jpg",
    author: "Hilda Shem",
    content: `
      <p>Ibland snubblar man över platser som känns som en väl bevarad hemlighet, en riktig skattgömma. I helgen besökte jag en liten, undanskymd loppis på landsbygden som visade sig vara precis en sådan plats. Dammiga lador fyllda från golv till tak med föremål från svunna tider, där varje pryl bar på en egen berättelse.</p>
      <h2>Dagens fynd:</h2>
      <p>Det är en speciell känsla att sakta vandra runt och låta blicken svepa över hyllorna. Man vet aldrig vad man kan hitta. Denna gång kom jag hem med några riktiga pärlor:</p>
      <ul>
        <li>En vacker gammal soppterrin i porslin, perfekt för att servera höstens soppor i.</li>
        <li>Några handvävda linnedukar med vackra monogram.</li>
        <li>En liten träpall med precis rätt patina, som kommer att bli perfekt som blombord.</li>
      </ul>
      <p>Att besöka sådana här platser är mer än bara shopping för mig. Det är en tidsresa, en inspirationskälla och en påminnelse om värdet i att ge gamla saker ett nytt liv. Har ni några egna skattgömmor ni brukar besöka?</p>
    `
  },
  {
    year: '2012',
    month: '03',
    slug: 'bla-bla-toner',
    title: "Blå, blå toner",
    category: "Inredning",
    date: "2012-03-12",
    imageUrl: "/post-bla-toner.jpg",
    author: "Hilda Shem",
    content: `
      <p>Jag har alltid haft en förkärlek för blått. Det är en färg som är både lugnande och tidlös, och den finns i en oändlig mängd vackra nyanser. Från den djupaste midnattsblå till den ljusaste, nästan vita, himmelsblå. Just nu är jag särskilt förtjust i de lite dovare, gråblå tonerna.</p>
      <h2>Att inreda med blått:</h2>
      <p>Blått är en tacksam färg att inreda med eftersom den fungerar som en utmärkt bas som är lätt att kombinera med andra färger. Här är några sätt jag använder blått i mitt hem:</p>
      <p><strong>På väggarna:</strong> En fondvägg i en mörkblå nyans kan skapa ett ombonat och elegant djup i ett rum. I ett sovrum kan en lugn, ljusblå färg bidra till en rofylld atmosfär.</p>
      <p><strong>I textilier:</strong> Kuddar, plädar och gardiner i olika blå nyanser och mönster är ett enkelt sätt att addera färg utan att det blir permanent. Jag älskar att blanda olika blåmönstrade textilier, som klassiska ränder och blommiga mönster.</p>
      <p><strong>Porslin och detaljer:</strong> Blåvitt porslin är en tidlös klassiker som aldrig går ur tiden. Att samla på och duka med vackert blått porslin är en fröjd för ögat.</p>
    `
  },
  {
    year: '2012',
    month: '12',
    slug: 'en-buffe-med-applen',
    title: "En buffé med äpplen",
    category: "Recept",
    date: "2012-12-05",
    imageUrl: "/post-apple-buffe.jpg",
    author: "Hilda Shem",
    content: `
      <p>Hösten och vintern är äpplenas tid! Om du, som jag, har turen att ha ett äppelträd i trädgården eller bara älskar svenska äpplen, varför inte ställa till med en festlig äppelbuffé? Det är ett roligt och annorlunda sätt att bjuda på fika eller dessert.</p>
      <h2>Idéer till din äppelbuffé:</h2>
      <p>Här är några förslag på både söta och salta rätter där äpplet får spela huvudrollen:</p>
      <ul>
        <li><strong>Mini-äppelpajer:</strong> Grädda små, portionsstora äppelpajer i muffinsformar. Servera med vaniljsås eller en klick grädde.</li>
        <li><strong>Äppel- och kanelsnurror:</strong> Byt ut den klassiska kanelbullen mot en variant med tunt skivade äpplen i fyllningen.</li>
        <li><strong>Äppelklyftor med dipp:</strong> Skär krispiga äpplen i klyftor och servera med en dipp gjord på lika delar jordnötssmör och grekisk yoghurt, smaksatt med lite honung och kanel.</li>
        <li><strong>Äppelglögg:</strong> Värm äppelmust med klassiska glöggkryddor som kanelstänger, stjärnanis och nejlikor. En alkoholfri och uppfriskande variant av den traditionella glöggen.</li>
      </ul>
      <p>En äppelbuffé är ett perfekt sätt att fira skördetiden och njuta av en av våra mest älskade frukter.</p>
    `
  },
  {
    year: '2013',
    month: '11',
    slug: 'hudvard-fran-koket',
    title: "Hudvård från köket",
    category: "Hållbarhet",
    date: "2013-11-18",
    imageUrl: "/post-hudvard-koket.jpg",
    author: "Hilda Shem",
    content: `
      <p>Visste du att några av de bästa ingredienserna för din hud kanske redan finns i ditt eget kök? Att göra sin egen hudvård är inte bara ekonomiskt och hållbart, det är också ett sätt att ha full kontroll över vad du applicerar på din kropp. Här är två av mina favoritrecept på hemgjord hudvård.</p>
      <h2>Kaffeskrubb för kroppen:</h2>
      <p>Kaffesump är en fantastisk exfoliering som gör huden mjuk och len, och koffeinet sägs även ha en uppstramande effekt. Blanda helt enkelt kaffesump med lite kokosolja eller olivolja till en lagom tjock pasta. Skrubba kroppen i duschen och skölj av. Huden blir otroligt mjuk!</p>
      <h2>Honungsmask för ansiktet:</h2>
      <p>Honung är naturligt antibakteriell och återfuktande, vilket gör den till en perfekt ingrediens i en ansiktsmask. Applicera ett tunt lager ren honung (gärna en ekologisk, raw variant) på rengjort ansikte. Låt verka i 15-20 minuter och skölj sedan av med ljummet vatten. Ansiktet känns omedelbart mjukare och får en fin lyster.</p>
    `
  },
  {
    year: '2014',
    month: '01',
    slug: 'en-ny-hobby',
    title: "En ny hobby: Att dreja",
    category: "Pysseltips",
    date: "2014-01-10",
    imageUrl: "/post-dreja.jpg",
    author: "Hilda Shem",
    content: `
      <p>Att börja ett nytt år innebär ofta en vilja att lära sig något nytt. För mig föll valet denna gång på att börja dreja. Jag har alltid varit fascinerad av keramik och det vackra hantverket bakom en handgjord kopp eller skål. Att själv få sitta vid drejskivan och forma en klump lera till något användbart är en nästintill meditativ upplevelse.</p>
      <h2>Att komma igång</h2>
      <p>Jag anmälde mig till en nybörjarkurs, vilket jag varmt kan rekommendera. Det är svårare än det ser ut! Att lära sig centrera leran på skivan är det första och kanske svåraste steget. Men när man väl hittar känslan och ser hur leran svarar på händernas rörelser är det ren magi.</p>
      <p>Mina första alster blev kanske inte perfekta – de är lite sneda och ojämna, men de är mina. De bär spår av min läroprocess, och det är just det som gör dem så speciella. Har du någon ny hobby du drömmer om att prova?</p>
    `
  },
  {
    year: '2014',
    month: '01',
    slug: 'lattjans-tider',
    title: "Lättjans tider: Konsten att göra ingenting",
    category: "Tankar",
    date: "2014-01-25",
    imageUrl: "/post-lattja.jpg",
    author: "Hilda Shem",
    content: `
      <p>I vårt moderna, uppkopplade samhälle hyllas ofta produktivitet och effektivitet. Vi fyller våra kalendrar till bredden och känner oss nästan skyldiga om vi har en oplanerad stund över. Jag vill slå ett slag för motsatsen: den medvetna lättjan. Konsten att göra absolut ingenting.</p>
      <h2>Varför vi behöver vara lata</h2>
      <p>Att tillåta sig själv att bara vara, utan krav på prestation, är avgörande för vår kreativitet och vårt välmående. Det är ofta i de stunderna av stillhet som de bästa idéerna föds. När hjärnan får vandra fritt, utan att vara fokuserad på en specifik uppgift, kan den göra oväntade kopplingar och lösa problem som vi kört fast i.</p>
      <p>Så nästa gång du har en ledig stund, försök att motstå impulsen att plocka upp telefonen eller starta ett nytt projekt. Sätt dig istället i en bekväm fåtölj, titta ut genom fönstret och låt tankarna vandra. Det är inte slöseri med tid – det är en investering i dig själv.</p>
    `
  },
  {
    year: '2014',
    month: '02',
    slug: 'bra-podcasts',
    title: "Bra podcasts för den kreativa själen",
    category: "Inspiration",
    date: "2014-02-12",
    imageUrl: "/post-podcasts.jpg",
    author: "Hilda Shem",
    content: `
      <p>Jag älskar att lyssna på podcasts när jag pysslar i trädgården, målar om en möbel eller bara tar en promenad. Det är ett fantastiskt sätt att lära sig något nytt och få inspiration. Här är några av mina nuvarande favoriter som jag tror att ni också kommer att gilla.</p>
      <h2>Mina podcast-tips:</h2>
      <ul>
        <li><strong>Design- och inredningspodden:</strong> En podd som djupdyker i svensk designhistoria och intervjuar spännande formgivare. Perfekt för den inredningsintresserade.</li>
        <li><strong>Odla!:</strong> En praktisk och inspirerande trädgårdspodd som täcker allt från hur man odlar tomater på balkongen till hur man anlägger en perennrabatt.</li>
        <li><strong>Kreativt med Hilda:</strong> (Fiktiv podd) Här delar jag med mig av mina egna tankar kring kreativitet, pyssel och ett hållbart liv.</li>
      </ul>
      <p>Att ha en röst i örat som delar samma passioner känns som att ha en kreativ vän med sig. Har ni några favoritpoddar som ni vill tipsa om? Lämna gärna en kommentar!</p>
    `
  },
  {
    year: '2014',
    month: '05',
    slug: 'odla-enkla-och-goda-artskott',
    title: "Odla enkla och goda ärtskott",
    category: "Trädgård",
    date: "2014-05-10",
    imageUrl: "/post-artskott.jpg",
    author: "Hilda Shem",
    content: `
      <p>Vill du odla något som är både otroligt enkelt och ger skörd på bara ett par veckor? Då måste du prova att odla ärtskott! De är krispiga, har en söt smak av färska ärtor och är supergoda att ha på smörgåsen, i salladen eller som dekoration på maten.</p>
      <h2>Så här odlar du ärtskott:</h2>
      <p><strong>1. Blötlägg ärtorna:</strong> Du behöver en påse vanliga, torkade gula ärtor från mataffären. Lägg en näve ärtor i en skål med vatten och låt dem ligga i blöt över natten.</p>
      <p><strong>2. Plantera:</strong> Häll av vattnet. Fyll en grund bricka eller ett fat med ett par centimeter planteringsjord. Sprid ut de blötlagda ärtorna tätt över jordytan.</p>
      <p><strong>3. Vattna och vänta:</strong> Vattna försiktigt och ställ brickan på en ljus plats, till exempel i ett fönster. Håll jorden fuktig. Efter bara några dagar kommer du att se hur de börjar gro.</p>
      <p><strong>4. Skörda:</strong> När skotten är ungefär 10 cm höga är det dags att skörda. Klipp av dem med en sax precis ovanför jorden. Du kan ofta få en andra, mindre skörd från samma sådd. Enklare och snabbare blir det inte att odla sina egna vitaminer!</p>
    `
  },
  {
    year: '2015',
    month: '07',
    slug: 'den-hemliga-gomman',
    title: "Den hemliga gömman",
    category: "Trädgård",
    date: "2015-07-05",
    imageUrl: "/post-hemlig-gomma.jpg",
    author: "Hilda Shem",
    content: `
      <p>Alla trädgårdar borde ha en hemlig gömma. En plats dit man kan dra sig undan för en stunds stillhet, med en bok och en kopp te. En plats som känns lite avskild och undangömd från resten av världen.</p>
      <h2>Att skapa sin egen oas</h2>
      <p>Min hemliga gömma är en liten bänk som jag har placerat bakom en stor, yvig syrenbuske. På våren är den omgiven av doftande blommor, och på sommaren skapar lövverket ett lummigt och skyddat tak. Det är en plats som inte syns från huset, vilket gör den extra speciell.</p>
      <p>Att skapa en sådan plats behöver inte vara komplicerat. Det kan vara en enkel stol under ett äppelträd, en hängmatta mellan två björkar, eller en liten uteplats som ramas in av klätterväxter. Det viktiga är att det är en plats som känns som din egen, där du kan hämta andan och bara vara. Har du en hemlig gömma i din trädgård?</p>
    `
  },
  {
    slug: 'bloggkarlek-pyssla-till-tusen',
    title: "Bloggkärlek: Pyssla till tusen",
    category: "Inspiration",
    date: "2016-11-18",
    imageUrl: "/post-bloggkarlek.jpg",
    author: "Hilda Shem",
    content: `
      <p>Bloggvärlden är en fantastisk plats, fylld av kreativa och inspirerande människor. En av de bloggar jag följt under lång tid och som ständigt ger mig ny energi är "Pyssla till tusen". Bakom bloggen står en otroligt talangfull kreatör som delar med sig av allt från storslagna möbelrenoveringar till små, enkla pyssel för hela familjen.</p>
      <h2>Varför jag älskar Pyssla till tusen:</h2>
      <p>Det jag uppskattar mest är den genuina skaparglädjen som lyser igenom i varje inlägg. Det handlar inte om att uppnå perfektion, utan om glädjen i att skapa något med sina egna händer. Bilderna är alltid vackra och inspirerande, och instruktionerna är lätta att följa.</p>
      <p>Om du, som jag, älskar pyssel och DIY-projekt och letar efter ny inspiration, kan jag varmt rekommendera ett besök. Det är en riktig guldgruva för den kreativa själen. Att lyfta och hylla andra kreatörer är viktigt för att hålla inspirationen flödande för oss alla.</p>
    `
  },
  {
    year: '2012',
    month: '12',
    slug: 'hjalp-musikhjalpen-att-hjalpa',
    title: "Hjälp Musikhjälpen att hjälpa",
    category: "Välgörenhet",
    date: "2012-12-12",
    imageUrl: "/post-musikhjalpen.jpg",
    author: "Hilda Shem",
    content: `
      <p>Varje år i december går Musikhjälpen av stapeln – ett fantastiskt initiativ från SVT, Sveriges Radio och Radiohjälpen som samlar in pengar till en undanskymd humanitär katastrof. I en glasbur på ett torg sänder kända programledare radio och TV dygnet runt i en hel vecka, utan att äta fast föda.</p>
      <h2>Mitt engagemang</h2>
      <p>Jag tycker att detta är ett otroligt viktigt och fint initiativ. Som bloggare och medmänniska känner jag ett ansvar att använda min plattform för att sprida ordet och uppmuntra till engagemang. I samband med detta brukade jag anordna egna insamlingar och auktioner här på bloggen, där alla intäkter oavkortat gick till Musikhjälpens bössa.</p>
      <p>Det är fantastiskt att se den kraft som finns när vi går samman för att hjälpa andra. Varje krona räknas och kan göra verklig skillnad för människor i nöd. Tillsammans kan vi göra världen lite bättre.</p>
    `
  },
  {
    year: '2013',
    month: '09',
    slug: 'vegetariska-enchiladas',
    title: "Vegetariska enchiladas med svarta bönor",
    category: "Recept",
    date: "2013-09-15",
    imageUrl: "/post-enchiladas.jpg",
    author: "Hilda Shem",
    content: `
      <p>Letar du efter en smakrik och mättande vegetarisk rätt som hela familjen kommer att älska? Då måste du prova dessa enchiladas fyllda med svarta bönor, majs och en massa goda kryddor. De är perfekta för en fredagsmiddag eller när du vill bjuda på något extra gott.</p>
      <h2>Ingredienser (4 portioner):</h2>
      <ul>
        <li>8 medelstora tortillabröd</li>
        <li>1 burk svarta bönor, avsköljda</li>
        <li>1 burk majs, avrunnen</li>
        <li>1 röd lök, finhackad</li>
        <li>2 vitlöksklyftor, pressade</li>
        <li>1 tsk spiskummin</li>
        <li>1 tsk paprikapulver</li>
        <li>400g krossade tomater</li>
        <li>2 dl gräddfil eller crème fraîche</li>
        <li>Riven ost</li>
      </ul>
      <h2>Gör så här:</h2>
      <p>Fräs lök och vitlök i olja. Tillsätt bönor, majs och kryddor och låt puttra en stund. Fördela fyllningen på tortillabröden, rulla ihop dem och lägg i en ugnsfast form. Häll över krossade tomater och en klick gräddfil på varje rulle. Toppa med rikligt med riven ost. Gratinera i 225°C i cirka 15-20 minuter, tills osten har fått en gyllenbrun färg. Servera med en fräsch sallad och en klick guacamole.</p>
    `
  },
 {
    year: '2013',
    month: '11',
    slug: 'gron-hudvard',
    title: "Grön hudvård: Skönhet från naturen",
    category: "Hållbarhet",
    date: "2013-11-10",
    imageUrl: "/post-gron-hudvard.jpg",
    author: "Hilda Shem",
    content: `
      <p>Allt fler upptäcker fördelarna med naturlig och ekologisk hudvård. Att välja produkter med ingredienser från växtriket är inte bara snällare mot vår hud, utan också mot vår planet. Men vad innebär egentligen "grön hudvård"?</p>
      <h2>Vad ska man leta efter?</h2>
      <p>Grön hudvård handlar om att använda produkter med råvaror som är odlade utan kemiska bekämpningsmedel och konstgödsel. Ingredienslistan är ofta kort och lätt att förstå. Leta efter certifieringar som Ecocert eller Soil Association för att vara säker på att produkten uppfyller strikta krav.</p>
      <p>Många av de mest effektiva ingredienserna kommer direkt från naturen: sheasmör för återfuktning, tea tree-olja för dess antibakteriella egenskaper, och nyponfröolja för att motverka ålderstecken. Att byta till grön hudvård är ett enkelt steg mot en mer hållbar och hälsosam livsstil. Läs även mitt inlägg om <a href="/2013/11/hudvard-fran-koket.html">hudvård från köket</a>.</p>
    `
  },
  {
  year: '2013',
  month: '05',
  slug: 'olympiska-spel-i-grona-kulorer',
  title: "Olympiska spel i gröna kulörer",
  category: "Trädgård",
  date: "2013-05-25",
  imageUrl: "/post-tradgardsspel.jpg",
  author: "Hilda Shem",
  content: `
    <p>Med sommaren runt hörnet är det dags att planera för roliga utomhusaktiviteter för hela familjen. Varför inte arrangera ett alldeles eget olympiskt spel i trädgården? Det är ett fantastiskt sätt att få barnen att röra på sig och uppskatta naturen, samtidigt som det skapar oförglömliga minnen.</p>
    <h2>Grenar för trädgårds-OS:</h2>
    <p>Här är några idéer på grenar som kräver minimalt med förberedelser och maximalt med skratt:</p>
    <ul>
      <li><strong>Skottkärre-race:</strong> En klassiker! En person sitter i skottkärran medan den andra kör. Perfekt för att träna samarbete och styrka.</li>
      <li><strong>Stövelkastning:</strong> Vem kan kasta en gummistövel längst? Enkelt, roligt och överraskande svårt.</li>
      <li><strong>Kott-prickskytte:</strong> Sätt upp några tomma burkar eller hinkar på olika avstånd. Deltagarna får sedan ett visst antal kottar och ska försöka pricka målen.</li>
      <li><strong>Hinderbana:</strong> Använd det som finns i trädgården. Kryp under en buske, balansera på en stock, hoppa över en trädgårdsslang och runda ett träd.</li>
    </ul>
    <p>Glöm inte att göra hemgjorda medaljer av kartong och guldfärg till alla deltagare. Det viktigaste är inte att vinna, utan att ha roligt tillsammans i det gröna!</p>
  `
},
  {
    slug: 'julpyssel-fran-kollektive',
    title: "Julpyssel från kollektivet",
    category: "Pysseltips",
    date: "2017-12-01",
    imageUrl: "/post-julpyssel-kollektiv.jpg",
    author: "Hilda Shem",
    content: `
      <p>December är här och det är hög tid för julstök och pyssel! I år har jag och mina vänner i <a href="/the-creative-collective">The Creative Collective</a> gått samman för att ge er en extra stor dos jul-inspiration. Vi har alla tolkat temat "Naturjul" och skapat vackra, hållbara dekorationer med material som vi hittat i naturen.</p>
      <h2>Våra projekt:</h2>
      <p>Besök våra bloggar för att se alla projekt i sin helhet! Du hittar allt från vackra dörrkransar av granris och torkade nypon, till enkla girlanger av kottar och apelsinskivor. Det är ett fantastiskt sätt att se hur samma tema kan tolkas på så många olika och personliga sätt. Låt dig inspireras att skapa en jul med en nära koppling till naturen!</p>
    `
  },
  {
  slug: 'julens-goda',
  title: "Julens goda – Samlade recept och favoriter",
  category: "Recept",
  date: "2018-12-01",
  imageUrl: "/post-julgodis.jpg",
  author: "Hilda Shem",
  content: `
    <p>Julen är för mig starkt förknippad med dofter och smaker. Doften av nybakta pepparkakor, smaken av knäck och ischoklad. Det är smakerna av barndomens jular, fyllda av förväntan och magi. Här har jag samlat några av mina absoluta favoritrecept på julgodis som jag återkommer till år efter år.</p>
    <h2>Mina favoriter till gottebordet:</h2>
    <p><strong>Krämig nougatfudge:</strong> Ett recept som aldrig slår fel och som är farligt gott. Den krämiga konsistensen tillsammans med den rika nougatsmaken är oslagbar. Du hittar receptet <a href="/underbar-nougatfudge">här</a>.</p>
    <p><strong>Kanderade mandlar med lakrits:</strong> En modern twist på en klassiker. Det söta från sockret, det salta från flingsaltet och den djupa smaken från lakritsen skapar en perfekt balans. Se hur du gör dem <a href="/2014/12/dag-21-kanderade-mandlar-med-lakrits.html">här</a>.</p>
    <p><strong>Söta små honungskakor:</strong> Dessa kakor är inte bara goda, de sprider också en ljuvlig doft i hela hemmet. Perfekta att hänga i granen eller bara njuta av till en kopp glögg. Receptet finns <a href="/2011/11/sota-sma-honungskakor.html">här</a>.</p>
    <p>Att göra eget julgodis är ett underbart sätt att komma i julstämning. Vad är dina favoriter?</p>
  `
},
{
  slug: 'odlingsskyltar-att-skriva-ut',
  title: "Odlingsskyltar att skriva ut",
  category: "Printables",
  date: "2019-03-10",
  imageUrl: "/post-odlingsskyltar.jpg",
  author: "Hilda Shem",
  content: `
    <p>Att hålla reda på allt man sår under våren kan vara en utmaning, särskilt när de små plantorna är nästan identiska. För att underlätta i odlingsdjungeln har jag skapat ett ark med vackra, utskrivbara odlingsskyltar. Perfekt för att hålla reda på allt från tomatplantor till sommarblommor.</p>
    <h2>Gör dina odlingar vackrare och mer organiserade</h2>
    <p>Dessa skyltar är designade med en enkel och rustik känsla som passar perfekt i trädgårdslandet eller i krukorna på balkongen. Det är bara att ladda ner, skriva ut och göra dina odlingar både mer organiserade och vackrare!</p>
    <p><strong><a href="#" title="Ladda ner odlingsskyltarna här">KLICKA HÄR FÖR ATT LADDA NER DINA SKYLTAR (PDF)</a></strong></p>
    <p>Jag rekommenderar att du skriver ut dem på ett tjockare papper. För att göra dem väderbeständiga kan du laminera dem innan du klipper ut dem och fäster dem på en blompinne. Om du vill göra egna från grunden, se mitt inlägg om <a href="/2012/02/sma-skyltar-till-frosadden.html">små skyltar till frösådden</a>. Lycka till med odlandet!</p>
  `
},
  {
 
    slug: 'dag-4-gor-egna-julkort',
    title: "Gör egna julkort",
    category: "Pysseltips",
    date: "2014-12-04",
    imageUrl: "/post-julkort.jpg",
    author: "Hilda Shem",
    content: `
      <p>I en digital tidsålder finns det något alldeles speciellt med att få ett handskrivet julkort i brevlådan. Att dessutom ha gjort kortet själv ger en extra personlig och kärleksfull touch som garanterat kommer att uppskattas av mottagaren. Att göra egna julkort behöver varken vara svårt eller tidskrävande. Här är en enkel guide för att komma igång!</p>
      <h2>Material du behöver:</h2>
      <ul>
        <li><strong>Kortbas:</strong> Kraftigare papper eller färdiga kortstommar i valfri färg. Naturvitt eller brunt kvistpapper ger en rustik känsla.</li>
        <li><strong>Dekorationer:</strong> Använd din fantasi! Torkade apelsinskivor, kanelstänger, stjärnanis, små grankvistar, vackra band, eller varför inte stämplar med julmotiv?</li>
        <li><strong>Lim och sax:</strong> Ett bra limstift eller en limpistol för tredimensionella dekorationer.</li>
        <li><strong>Pennor:</strong> En fin penna för din personliga hälsning. En guld- eller silverpenna kan ge en extra festlig känsla.</li>
      </ul>
      <h2>Steg för steg:</h2>
      <p>Börja med att vika ditt papper till en kortbas. Planera din design innan du börjar limma. Ett tips är att skapa ett fokus på kortet, kanske en vacker stämpel eller en torkad blomma, och sedan bygga resten av dekorationen runt det. Mindre är ofta mer. När du är nöjd med utsidan, skriv din hälsning inuti. Ett personligt och handgjort kort är en gåva i sig. För mer idéer, se mitt inlägg om <a href="/samlad-julinspiration">samlad julinspiration</a>.</p>
    `
  },
  {
    slug: 'samlad-julinspiration',
    title: "Samlad julinspiration",
    category: "Inspiration",
    date: "2018-12-10",
    imageUrl: "/post-samlad-jul.jpg",
    author: "Hilda Shem",
    content: `
      <p>För att göra det enkelt för er att hitta allt som har med julen att göra här på bloggen, har jag skapat detta samlingsinlägg. Det är en levande sida som jag kommer att uppdatera varje år med nya pyssel, recept och idéer för att skapa en magisk jul.</p>
      <h2>Hitta det du söker:</h2>
      <p>Här hittar du länkar till alla mina jul-relaterade inlägg, uppdelade i kategorier:</p>
      <ul>
        <li><strong>Julpyssel:</strong> Allt från <a href="/dag-4-gor-egna-julkort">hemgjorda julkort</a> till <a href="/2014/12/dag-17-gor-om-dina-julgranskulor.html">förnyade julgranskulor</a>.</li>
        <li><strong>Julgodis & Recept:</strong> Mina bästa recept på allt från <a href="/underbar-nougatfudge">nougatfudge</a> till <a href="/dag-21-kanderade-mandlar-med-lakrits">kanderade mandlar</a>.</li>
        <li><strong>Juldukning & Dekoration:</strong> Idéer för hur du skapar en stämningsfull miljö för julens alla fester.</li>
      </ul>
      <p>Jag hoppas att detta inlägg kan fungera som er go-to-guide för en kreativ och stämningsfull jul. Bokmärk gärna sidan och återkom när inspirationen tryter!</p>
    `
  },
  {
    slug: 'gor-en-kruka-av-pinnar',
    title: "Gör en kruka av pinnar",
    category: "Trädgård",
    date: "2016-08-15",
    imageUrl: "/post-kruka-pinnar.jpg",
    author: "Hilda Shem",
    content: `
      <p>Att ta in naturen i hemmet är ett av mina favoritsätt att skapa en lugn och harmonisk atmosfär. Idag ska vi göra just det genom att skapa en rustik och charmig kruka av pinnar som du enkelt kan hitta under en promenad i skogen. Detta är ett perfekt pyssel för en ledig eftermiddag.</p>
      <h2>Du behöver:</h2>
      <ul>
        <li>En gammal konservburk eller en enkel plastkruka.</li>
        <li>Pinnar i någorlunda jämn tjocklek.</li>
        <li>En sekatör eller en liten såg.</li>
        <li>En limpistol eller ett starkt, vattenfast lim.</li>
        <li>Jutesnöre eller annat vackert band (valfritt).</li>
      </ul>
      <h2>Gör så här:</h2>
      <p><strong>1. Förbered pinnarna:</strong> Klipp eller såga pinnarna så att de alla är lite högre än den burk eller kruka du använder som bas.</p>
      <p><strong>2. Limma fast:</strong> Applicera en sträng lim vertikalt på burken och tryck fast en pinne. Fortsätt på samma sätt, pinne för pinne, tätt intill varandra, tills du har täckt hela burken.</p>
      <p><strong>3. Dekorera:</strong> När limmet har torkat kan du, om du vill, vira ett vackert jutesnöre runt krukan för en extra detalj. Fyll sedan din nya, unika kruka med jord och plantera din favoritväxt. En perfekt detalj för fönsterbrädan eller uteplatsen!</p>
    `
  },
  {
    slug: 'chokladklubbor-till-varm-choklad',
    title: "Chokladklubbor till varm choklad",
    category: "Recept",
    date: "2014-11-20",
    imageUrl: "/post-chokladklubbor.jpg",
    author: "Hilda Shem",
    content: `
      <p>Finns det något mysigare än en kopp rykande varm choklad en kall vinterdag? Jo, att göra den med sin alldeles egna chokladklubba! Dessa är otroligt enkla att göra, blir en uppskattad hemgjord present och är ett roligt pyssel att göra med barnen.</p>
      <h2>Recept på chokladklubbor (ca 6-8 st)</h2>
      <h3>Ingredienser:</h3>
      <ul>
        <li>200g mörk choklad av god kvalitet (minst 70%)</li>
        <li>Valfri smaksättning: krossade polkagrisar, mini-marshmallows, kanel, kardemumma, chiliflakes...</li>
        <li>Träpinnar (typ glasspinnar)</li>
        <li>En isbitsform i silikon eller små pappersformar</li>
      </ul>
      <h3>Instruktioner:</h3>
      <p><strong>1. Smält chokladen:</strong> Hacka chokladen och smält den försiktigt över ett vattenbad eller i mikrovågsugnen. Rör om tills den är helt slät.</p>
      <p><strong>2. Häll upp:</strong> Fördela den smälta chokladen i dina formar.</p>
      <p><strong>3. Dekorera:</strong> Strö över din valda smaksättning. Tryck försiktigt ner en pinne i mitten av varje form.</p>
      <p><strong>4. Låt stelna:</strong> Ställ formarna i kylen i minst en timme, eller tills chokladen har stelnat helt. Förvara sedan klubborna svalt. För att servera, rör bara ner en klubba i en kopp varm mjölk och se hur den förvandlas till den godaste varma chokladen!</p>
    `
  },
  {
    slug: 'gratis-etiketter-till-julklapparna',
    title: "Gratis etiketter till julklapparna",
    category: "Printables",
    date: "2014-12-10",
    imageUrl: "/post-etiketter.jpg",
    author: "Hilda Shem",
    content: `
      <p>En vackert inslagen julklapp blir ännu mer speciell med en personlig etikett. För att göra julstöket lite enklare och roligare för er har jag designat ett ark med vackra, utskrivbara julklappsetiketter som ni kan ladda ner helt gratis!</p>
      <h2>Så här gör du:</h2>
      <p>Det är superenkelt. Klicka på länken nedan för att ladda ner en högupplöst PDF-fil med etiketterna. För bästa resultat rekommenderar jag att du skriver ut dem på ett lite tjockare papper, gärna ett matt fotopapper eller en vit kartong.</p>
      <p><strong><a href="#" title="Ladda ner etiketterna här">LADDA NER DINA GRATIS JULKLAPPSETIKETTER HÄR</a></strong></p>
      <p>När du har skrivit ut arket är det bara att klippa ut etiketterna längs de streckade linjerna. Använd en håltång för att göra ett hål och trä sedan igenom ett vackert snöre, kanske ett rött sidenband eller ett rustikt jutesnöre. Fäst på dina paket och njut av att ge bort klappar med en extra personlig och genomtänkt detalj. God Jul!</p>
    `
  },
  {
    slug: 'underbar-nougatfudge',
    title: "Underbar nougatfudge",
    category: "Recept",
    date: "2014-12-18",
    imageUrl: "/post-nougatfudge.jpg",
    author: "Hilda Shem",
    content: `
      <p>Letar du efter det perfekta julgodiset som är både löjligt gott och otroligt enkelt att göra? Då måste du prova detta recept på krämig nougatfudge. Den smälter i munnen och kräver bara några få ingredienser och minimal ansträngning.</p>
      <h2>Ingredienser:</h2>
      <ul>
        <li>1 burk sötad kondenserad mjölk (ca 400g)</li>
        <li>300g mörk choklad av god kvalitet</li>
        <li>100g mjuk nougat (t.ex. Odense)</li>
        <li>25g smör</li>
        <li>1 nypa flingsalt</li>
      </ul>
      <h2>Gör så här:</h2>
      <p><strong>1. Förbered en form:</strong> Klä en liten fyrkantig form (ca 20x20 cm) med bakplåtspapper.</p>
      <p><strong>2. Smält samman:</strong> Häll kondenserad mjölk i en kastrull. Bryt ner chokladen och nougaten i mindre bitar och lägg i kastrullen tillsammans med smöret och saltet.</p>
      <p><strong>3. Rör om:</strong> Värm alltsammans på låg värme under konstant omrörning. Det är viktigt att det inte börjar koka. Rör tills allt har smält samman till en tjock och glansig smet.</p>
      <p><strong>4. Häll upp och kyl:</strong> Häll smeten i formen och jämna till ytan. Låt den svalna och ställ sedan in den i kylskåpet i minst 4 timmar, eller tills den har stelnat helt. Skär sedan fudgen i små, munsbitstora kuber. Förvara i en burk med lock i kylen. Njut!</p>
    `
  }
];

/**
 * Finds a post by its year, month, and slug (for dated URLs).
 * @param {string} year
 * @param {string} month
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getPostByParams(year, month, slug) {
  return posts.find(post => post.year === year && post.month === month && post.slug === slug);
}

/**
 * Finds a post by its simple slug (for non-dated URLs).
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug && !post.year); // Find post with this slug that does NOT have a year
}

/**
 * Gets all posts belonging to a specific category.
 * @param {string} categoryName - The name of the category (e.g., "Pysseltips").
 * @returns {Array<object>} An array of post objects.
 */
export function getPostsByCategory(categoryName) {
  // Decode URI component to handle special characters and normalize case for comparison
  const decodedCategoryName = decodeURIComponent(categoryName).toLowerCase();
  return posts.filter(post => post.category.toLowerCase() === decodedCategoryName);
}
