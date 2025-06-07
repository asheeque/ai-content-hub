import React from 'react';
import TrendingVideos from '../components/TrendingVideos';
import TopAIChannels from '../components/TopAIChannels';
import Categories from '../components/Categories';

// TODO: Add this to your index.html <head> for Spline Sans:
// <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700&display=swap" rel="stylesheet">

const trendingVideos = [
  {
    title: 'AI Art Showcase: Evolving Styles',
    img: 'https://placehold.co/240x135?text=AI+Art',
  },
  {
    title: 'Top AI Music Tracks of the Week',
    img: 'https://placehold.co/240x135?text=AI+Music',
  },
  {
    title: "Mastering AI Tools: A Beginner's Guide",
    img: 'https://placehold.co/240x135?text=AI+Tools',
  },
  {
    title: 'AI Animation Festival: Best Shorts',
    img: 'https://placehold.co/240x135?text=AI+Animation',
  },
];

const topChannels = [
  {
    name: 'AI Artistry',
    desc: 'Showcasing the latest in AI-generated visual art.',
    img: 'https://placehold.co/191x191?text=Artistry',
    video: {
      title: 'Digital Dreams',
      img: 'https://placehold.co/176x99?text=Art+Video',
      desc: 'Explore the latest in AI-generated visual art.'
    }
  },
  {
    name: 'Sonic AI',
    desc: 'Exploring the world of AI-composed music.',
    img: 'https://placehold.co/191x191?text=Sonic+AI',
    video: {
      title: 'Melodies of the Future',
      img: 'https://placehold.co/176x99?text=Music+Video',
      desc: 'Discover the newest AI-composed music tracks.'
    }
  },
  {
    name: 'Tech AI Insights',
    desc: 'In-depth reviews and tutorials on AI tools.',
    img: 'https://placehold.co/191x191?text=Tech+AI',
    video: {
      title: 'Productivity Boosters',
      img: 'https://placehold.co/176x99?text=Tools+Video',
      desc: 'In-depth reviews and tutorials on AI tools.'
    }
  },
  {
    name: 'AnimAI',
    desc: 'The best in AI-generated animations and shorts.',
    img: 'https://placehold.co/191x191?text=AnimAI',
    video: {
      title: 'Short Film Festival',
      img: 'https://placehold.co/176x99?text=Animation+Video',
      desc: 'The best in AI-generated animations and shorts.'
    }
  },
];

const categories = [
  'AI Art',
  'AI Music',
  'AI Tools',
  'AI Animation',
  'AI Writing',
  'AI Research',
];

const LandingPage = () => (
  <div style={{
    minHeight: '100vh',
    background: '#0f1a24',
    fontFamily: 'Spline Sans, sans-serif',
    color: '#fff',
  }}>
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem 0' }}>
      {/* Search bar (large) */}
      <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: '#21364a', borderRadius: 12, height: 48, width: 928 }}>
          <span role="img" aria-label="search" style={{ margin: '0 16px', color: '#8fadcc' }}>🔍</span>
          <input
            type="text"
            placeholder="Search  for AI videos, channels, or categories"
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#8fadcc',
              fontSize: 16,
              width: '100%',
              fontFamily: 'inherit',
            }}
          />
        </div>
      </div>
      <TrendingVideos />
      <TopAIChannels />
      <Categories />
    </main>
  </div>
);

export default LandingPage; 