// lib/pages.js

// This file acts as a simple database for our static pages.
export const pages = [
  {
    slug: 'om-mig',
    title: 'Om Mig',
    // The image path assumes you have placed 'page-om-mig.jpg' in the 'public' folder.
    imageUrl: '/page-om-mig.jpg',
    content: `
      <p class="lead">Hej och varmt välkommen! Jag heter Hilda, och det här är min kreativa fristad på nätet. Hildashem är platsen där jag delar med mig av min största passion: att skapa ett vackert och personligt hem, en prunkande trädgård och ett liv fyllt av meningsfull kreativitet.</p>
      <p>Jag bor i ett charmigt sekelskifteshus med min familj, där varje hörn bär på en historia och varje projekt är ett äventyr. För mig handlar det inte om att följa de senaste trenderna, utan om att skapa en miljö som känns äkta, hållbar och fylld av kärlek. Återbruk, loppisfynd och naturens egna material är grundstenarna i min filosofi.</p>
      <h2>Min vision för Hildashem</h2>
      <p>Min förhoppning är att den här bloggen ska fungera som en outsinlig källa till inspiration för dig. Oavsett om du vill lära dig att beskära dina äppelträd, letar efter det perfekta receptet på julens knäck eller bara vill ha en stunds avkoppling med vackra bilder, så hoppas jag att du ska hitta det här.</p>
      <p>Tack för att du tittar in. Din närvaro här betyder oerhört mycket!</p>
    `
  },
  {
    slug: 'mina-magasin',
    title: 'Mina Magasin',
    // The image path assumes you have placed 'page-mina-magasin.jpg' in the 'public' folder.
    imageUrl: '/page-mina-magasin.jpg',
    content: `
      <p class="lead">Att få se sina egna projekt och sitt hem i tryck är en alldeles speciell och surrealistisk känsla. Under årens lopp har jag haft den stora äran att få samarbeta med och bli publicerad i några av Sveriges finaste inrednings- och livsstilsmagasin.</p>
      <p>Här har jag samlat ett urval av de reportage jag medverkat i. Det är en fantastisk möjlighet att få dela med sig av sin passion på en större plattform och nå ut till ännu fler som delar samma intressen.</p>
      
      <div class="border-l-4 border-rose-800 pl-4 my-6">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Hus & Hem, Nr 5 2022</h3>
        <p class="text-gray-600">"Kreativt återbruk i sekelskifteshuset" - Ett djuplodande reportage om hur vi förvandlat vårt hus med hjälp av loppisfynd och smarta DIY-lösningar.</p>
      </div>

      <div class="border-l-4 border-rose-800 pl-4 my-6">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Allt i Hemmet, Julspecial 2021</h3>
        <p class="text-gray-600">"Skapa julens vackraste dekorationer" - En guide fylld med pyssel och inspiration för att skapa ett magiskt och personligt julhem med naturen som främsta material.</p>
      </div>

      <div class="border-l-4 border-rose-800 pl-4 my-6">
        <h3 class="text-2xl font-serif font-semibold text-gray-800">Drömhem & Trädgård, Nr 2 2020</h3>
        <p class="text-gray-600">"En prunkande oas mitt i stan" - Reportaget fokuserar på vår trädgård och hur vi på en liten yta lyckats skapa olika rum och en känsla av lummighet.</p>
      </div>
    `
  },
  {
    slug: 'kontakt',
    title: 'Kontakt',
    // The image path assumes you have placed 'page-kontakt.jpg' in the 'public' folder.
    imageUrl: '/page-kontakt.jpg',
    content: `
      <p class="lead">Jag blir alltid lika glad över att höra från er läsare! Oavsett om du har en fråga, en idé för ett samarbete, eller bara vill säga hej, är du varmt välkommen att höra av dig.</p>
      
      <h2>Samarbeten & Press</h2>
      <p>Är du intresserad av ett samarbete, pressutskick eller fotografering? Jag är öppen för förslag som ligger i linje med Hildashems varumärke och värderingar. Skicka ett mail till <a href="mailto:hilda@hildashem.se" class="text-rose-800 hover:underline">hilda@hildashem.se</a> så kan vi prata vidare.</p>

      <h2>Sociala Medier</h2>
      <p>För daglig inspiration och en mer personlig inblick bakom kulisserna är du välkommen att följa mig på mina sociala kanaler. Det är ofta där jag delar de små ögonblicken från vardagen.</p>
      <ul class="list-none space-y-2">
        <li><strong>Instagram:</strong> <a href="#" class="text-rose-800 hover:underline">@hildashem</a></li>
        <li><strong>Pinterest:</strong> <a href="#" class="text-rose-800 hover:underline">/hildashem</a></li>
        <li><strong>Facebook:</strong> <a href="#" class="text-rose-800 hover:underline">/hildashem</a></li>
      </ul>
    `
  }
];

/**
 * Finds a static page by its slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getPageBySlug(slug) {
  return pages.find(page => page.slug === slug);
}
