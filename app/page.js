import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import shared components
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Assuming you have a Footer.js in /components

// Import data
import { posts } from '@/lib/posts';

// --- Re-usable Components specific to this page ---

const HeroSection = () => (
    <div className="relative h-96 md:h-[500px] bg-stone-200 flex items-center justify-center text-center text-white mb-16">
        <Image 
            src="/hero-background.jpg" 
            alt="Välkomstbakgrund för Hildashem" 
            fill 
            style={{objectFit: 'cover'}} 
            priority 
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-4">Välkommen till min värld</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-sans">Här delar jag med mig av inspiration för hemmet, trädgården och hantverk som förgyller livet.</p>
        </div>
    </div>
);

const BlogPostCard = ({ post }) => {
    // Construct the correct URL based on whether the post has a year/month or not
    const postUrl = post.year && post.month 
        ? `/${post.year}/${post.month}/${post.slug}.html`
        : `/${post.slug}`;

    return (
      <div className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
        <Link href={postUrl} className="block">
          <div className="overflow-hidden relative h-48">
            <Image 
                src={post.imageUrl} 
                alt={`Bild för inlägget ${post.title}`} 
                fill 
                style={{objectFit: 'cover'}} 
                className="group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">{post.category} - {new Date(post.date).toLocaleDateString('sv-SE')}</p>
            <h3 className="text-xl font-serif font-medium text-gray-800 group-hover:text-rose-800 transition-colors duration-300">{post.title}</h3>
          </div>
        </Link>
      </div>
    );
};

// Main page component
export default function HomePage() {
  // Sort posts by date to get the most recent ones, then take the first 6
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  return (
    <div className="bg-stone-50 font-sans text-gray-700">
      <Header />
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-gray-800">Senaste inläggen</h2>
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
