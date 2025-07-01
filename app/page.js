import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import all posts from our data file
import { posts } from '@/lib/posts';

// --- Re-usable Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const SocialIcon = ({ path }) => (
  <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors duration-300"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d={path}></path></svg></a>
);

const Header = () => (
  <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="md:hidden"><button className="text-gray-700"><MenuIcon /></button></div>
      <div className="text-center md:text-left">
        <Link href="/" className="text-3xl font-serif font-bold text-gray-800 tracking-wider">Hildashem</Link>
        <p className="text-sm text-gray-500 font-sans">Inspiration & kreativa idéer</p>
      </div>
      <nav className="hidden md:flex items-center space-x-6 font-sans text-gray-700">
        <Link href="/" className="hover:text-rose-800 transition-colors">Hem</Link>
        <Link href="/p/om-mig.html" className="hover:text-rose-800 transition-colors">Om mig</Link>
        <Link href="/category/pysseltips" className="hover:text-rose-800 transition-colors">Pysseltips</Link>
        <Link href="/p/kontakt.html" className="hover:text-rose-800 transition-colors">Kontakt</Link>
      </nav>
      <div><button className="text-gray-700"><SearchIcon /></button></div>
    </div>
  </header>
);

const Footer = () => (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
        <div className="container mx-auto px-6 py-12 text-center text-gray-700">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Hildashem</h3>
            <p className="mb-6 max-w-2xl mx-auto text-gray-600">En plats för kreativitet och skönhet i vardagen. Följ mig för kontinuerlig inspiration inom inredning, trädgård, recept och gör-det-själv-projekt.</p>
            <div className="flex justify-center space-x-6 mb-8">
                <SocialIcon path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </div>
            <div className="font-sans text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Hildashem. Alla rättigheter förbehållna.</p>
            </div>
        </div>
    </footer>
);

const HeroSection = () => (
    <div className="relative h-96 md:h-[500px] bg-stone-200 flex items-center justify-center text-center text-white mb-16">
        <Image src="/hero-background.jpg" alt="Välkomstbakgrund för Hildashem" fill style={{objectFit: 'cover'}} priority />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-4">Välkommen till min värld</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-sans">Här delar jag med mig av inspiration för hemmet, trädgården och hantverk som förgyller livet.</p>
        </div>
    </div>
);

const BlogPostCard = ({ post }) => {
    const postUrl = post.year && post.month 
        ? `/${post.year}/${post.month}/${post.slug}.html`
        : `/${post.slug}`;

    return (
      <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
        <Link href={postUrl} className="block">
          <div className="overflow-hidden relative h-48">
            <Image src={post.imageUrl} alt={`Bild för inlägget ${post.title}`} fill style={{objectFit: 'cover'}} className="group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">{post.category} - {post.date}</p>
            <h3 className="text-xl font-serif font-medium text-gray-800 group-hover:text-rose-800 transition-colors duration-300">{post.title}</h3>
          </div>
        </Link>
      </div>
    );
};


// Main page component
export default function App() {
  const latestPosts = posts.slice(0, 6);

  return (
    <div className="bg-stone-50 font-sans text-gray-700">
      <Header />
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-gray-800">Senaste inläggen</h2>
            <div className="w-20 h-0.5 bg-rose-700 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/category/pysseltips" className="bg-rose-800 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Se alla pysseltips
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
