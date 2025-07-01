import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts, getPostByParams } from '@/lib/posts';

// This function tells Next.js which dated posts to pre-render at build time
export async function generateStaticParams() {
  // Filter for posts that have a year and month
  const datedPosts = posts.filter(p => p.year && p.month);
  return datedPosts.map((post) => ({
    year: post.year,
    month: post.month,
    slug: post.slug,
  }));
}

// This function generates dynamic metadata for each post page
export async function generateMetadata({ params }) {
  const post = getPostByParams(params.year, params.month, params.slug);

  if (!post) {
    return {
      title: 'Inlägg hittades inte',
    };
  }

  // Create a short description from the post content for SEO
  const description = post.content.substring(0, 155).replace(/<[^>]*>/g, '').trim() + '...';
  const siteUrl = 'https://www.hildashem.se'; // Replace with your actual domain

  return {
    title: `${post.title} | Hildashem`,
    description: description,
    // Open Graph tags for social media sharing
    openGraph: {
      title: `${post.title} | Hildashem`,
      description: description,
      url: `${siteUrl}/${post.year}/${post.month}/${post.slug}.html`,
      siteName: 'Hildashem',
      images: [
        {
          url: `${siteUrl}${post.imageUrl}`, // Assumes imageUrl starts with a '/'
          width: 1200,
          height: 630,
        },
      ],
      locale: 'sv_SE',
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      author: post.author,
    },
    // Twitter-specific tags
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Hildashem`,
      description: description,
      images: [`${siteUrl}${post.imageUrl}`],
    },
  };
}


// The main component for the dated post page
export default function DatedPostPage({ params }) {
  const post = getPostByParams(params.year, params.month, params.slug);
  const siteUrl = 'https://www.hildashem.se';

  if (!post) {
    // You can create a dedicated 404 component or just return a simple message
    return (
        <div>
            <Header />
            <main className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-4xl">404 - Inlägg hittades inte</h1>
            </main>
            <Footer />
        </div>
    );
  }

  // JSON-LD Structured Data for Google Rich Snippets
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${siteUrl}/${post.year}/${post.month}/${post.slug}.html`,
    },
    'headline': post.title,
    'image': `${siteUrl}${post.imageUrl}`,
    'datePublished': new Date(post.date).toISOString(),
    'dateModified': new Date(post.date).toISOString(), // Use a modified date if you have one
    'author': {
      '@type': 'Person',
      'name': post.author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Hildashem',
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteUrl}/logo.png`,
      },
    },
    'description': post.content.substring(0, 155).replace(/<[^>]*>/g, '').trim() + '...',
  };

  return (
    <div className="bg-white">
      {/* The structured data script is injected into the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="container mx-auto px-6 py-8 md:py-12">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <p className="text-md text-gray-500 font-sans mb-2">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">{post.title}</h1>
            <p className="text-sm text-gray-500 mt-4">Publicerad den {post.date} av {post.author}</p>
          </header>

          <div className="mb-8 rounded-lg overflow-hidden relative h-[400px] md:h-[500px]">
            <Image src={post.imageUrl} alt={`Huvudbild för ${post.title}`} fill style={{objectFit: 'cover'}} priority />
          </div>

          <div 
            className="prose prose-lg lg:prose-xl max-w-none mx-auto text-gray-800 font-serif"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
