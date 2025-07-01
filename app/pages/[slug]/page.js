import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { pages, getPageBySlug } from '@/lib/pages';

export async function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function StaticPage({ params }) {
  const { slug } = params;
  const page = getPageBySlug(slug);

  if (!page) {
    return (
      <div className="bg-white">
        <Header />
        <main className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800">404 - Sidan hittades inte</h1>
          <p className="text-gray-600 mt-4">Tyvärr kunde vi inte hitta sidan du letar efter.</p>
          <Link href="/" className="mt-8 inline-block bg-rose-800 text-white font-bold py-3 px-6 rounded-full hover:bg-rose-900">
            Tillbaka till startsidan
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="relative h-80 bg-stone-200 flex items-center justify-center text-center text-white">
            <Image src={page.imageUrl} alt={`Bakgrundsbild för ${page.title}`} fill style={{objectFit: 'cover'}} priority />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">{page.title}</h1>
            </div>
        </div>
        <div className="container mx-auto px-6 py-12">
            <article className="max-w-4xl mx-auto">
                <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-gray-800 font-serif" dangerouslySetInnerHTML={{ __html: page.content }} />
            </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
