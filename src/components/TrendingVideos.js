import React from 'react';
import { Link } from 'react-router-dom';

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

const TrendingVideos = () => (
  <section>
    <h2 style={{ fontSize: 22, fontWeight: 700, margin: '2rem 0 1rem 0' }}>Trending AI Videos</h2>
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {trendingVideos.map((video, i) => (
        <Link
          key={i}
          to={`/video/${i + 1}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div style={{ background: '#21364a', borderRadius: 8, width: 240, padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
            <img src={video.img} alt={video.title} style={{ width: '100%', height: 135, objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '0.5rem 1rem', minHeight: 48, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 500, fontSize: 16 }}>{video.title}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default TrendingVideos; 