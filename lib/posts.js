// lib/posts.js

// This file acts as a simple in-memory database for our blog posts.
// In a real-world application, this data would come from a CMS, a database, or markdown files.

export const posts = [
  // Posts with Year/Month in URL
  {
    year: '2015',
    month: '09',
    slug: 'i-vantan-pa-nagot-battre',
    title: "I väntan på något bättre",
    category: "Tankar",
    date: "1 september 2015",
    imageUrl: "/post-vantan.jpg",
    author: "Hilda Shem",
    content: `
      <p>Ibland känns det som att livet består av en enda lång väntan. Vi väntar på att helgen ska komma, på att semestern ska börja, på att barnen ska bli äldre, eller på att det där stora projektet äntligen ska bli klart. I denna ständiga väntan på 'något bättre' är det lätt att glömma bort att leva i nuet.</p>
      <p>Men vad händer med dagarna som passerar medan vi väntar? Är de bara transportsträckor till en framtida lycka? Jag har kommit att inse att den verkliga magin ofta finns i de små, till synes obetydliga ögonblicken. En kopp kaffe i morgonsolen, doften av nyklippt gräs, ett oväntat leende från en främling.</p>
      <h2>Att praktisera vardagsglädje</h2>
      <p>Att aktivt leta efter och uppskatta dessa små stunder av glädje har förändrat mitt perspektiv. Det handlar inte om att sluta drömma eller planera för framtiden, utan om att inte låta framtidsdrömmarna överskugga den skönhet som finns här och nu. Det är en övning i mindfulness, att vara närvarande i sitt eget liv.</p>
      <p>Så nästa gång du finner dig själv i väntans tider, försök att stanna upp. Se dig omkring. Vad finns det för vackert i din närhet just i denna stund? Kanske är det just det ögonblicket, inte det du väntar på, som är 'något bättre'.</p>
    `
  },
  {
    year: '2014',
    month: '12',
    slug: 'dag-4-gor-egna-julkort',
    title: "Gör egna julkort",
    category: "Pysseltips",
    date: "4 december 2014",
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
      <p>Börja med att vika ditt papper till en kortbas. Planera din design innan du börjar limma. Ett tips är att skapa ett fokus på kortet, kanske en vacker stämpel eller en torkad blomma, och sedan bygga resten av dekorationen runt det. Mindre är ofta mer. När du är nöjd med utsidan, skriv din hälsning inuti. Ett personligt och handgjort kort är en gåva i sig.</p>
    `
  },
  {
    year: '2014',
    month: '12',
    slug: 'dag-17-gor-om-dina-julgranskulor',
    title: "Gör om dina julgranskulor",
    category: "Pysseltips",
    date: "17 december 2014",
    imageUrl: "/post-julgranskulor.jpg",
    author: "Hilda Shem",
    content: `
      <p>Har du en låda med gamla julgranskulor som har sett sina bästa dagar? Kanske är färgen avskavd eller så passar de helt enkelt inte in i årets färgtema. Släng dem inte! Med lite färg och fantasi kan du ge dem ett helt nytt och personligt utseende.</p>
      <h2>Enkla idéer för förvandling:</h2>
      <p><strong>Måla om dem:</strong> En av de enklaste metoderna är att måla om kulorna. Använd hobbyfärg som fäster på glas eller plast. Du kan måla dem enfärgade i en ny kulör, göra mönster med en tunn pensel eller kanske dutta på färg med en svamp för en texturerad yta.</p>
      <p><strong>Klä med tyg eller papper:</strong> Klipp vackert tyg eller papper (kanske från en gammal bok eller nothäfte) i små bitar och limma fast dem på kulan med decoupagelim. Detta ger en vacker och unik finish.</p>
      <p><strong>Glitter och glamour:</strong> För en mer glamorös look, pensla kulan med lim och rulla den i glitter. Låt torka ordentligt. Detta är ett roligt pyssel att göra tillsammans med barnen.</p>
      <p>Att återbruka julpynt är inte bara bra för plånboken och miljön, det ger också dekorationer med en personlig historia.</p>
    `
  },
  {
    year: '2013',
    month: '12',
    slug: 'atervinning-av-varmeljus',
    title: "Återvinning av värmeljus",
    category: "Hållbarhet",
    date: "5 december 2013",
    imageUrl: "/post-atervinning.jpg",
    author: "Hilda Shem",
    content: `
      <p>Under de mörka månaderna tänder vi svenskar miljontals värmeljus. De skänker ett vackert och stämningsfullt ljus, men de lämnar också efter sig ett berg av tomma aluminiumkoppar. Visste du att korrekt återvinning av dessa små koppar kan göra stor skillnad för miljön?</p>
      <h2>Så här gör du rätt:</h2>
      <p>Aluminium är en värdefull resurs som kan återvinnas oändligt många gånger. Att återvinna aluminium sparar hela 95% av den energi som krävs för att framställa nytt. Problemet med värmeljus är den lilla vekeshållaren av stål som sitter i botten av koppen.</p>
      <p>När aluminium och stål blandas i återvinningsprocessen försämras kvaliteten på det återvunna materialet. Därför är det viktigt att du, innan du slänger koppen i metallåtervinningen, pillar loss den lilla stålbiten med en kniv eller ett annat spetsigt föremål. Både koppen (aluminium) och vekeshållaren (stål) sorteras sedan som metallförpackningar. Det är en liten ansträngning som har stor positiv inverkan.</p>
    `
  },
  // Posts with simple slugs (no date in URL)
  {
    slug: 'gor-en-kruka-av-pinnar',
    title: "Gör en kruka av pinnar",
    category: "Trädgård",
    date: "15 Augusti 2016",
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
    date: "20 November 2014",
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
    date: "10 December 2014",
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
    date: "18 December 2014",
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
