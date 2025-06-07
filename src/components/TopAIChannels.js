import React from 'react';

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

const TopAIChannels = () => (
  <section>
    <h2 style={{ fontSize: 22, fontWeight: 700, margin: '2rem 0 1rem 0' }}>Top AI Channels</h2>
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {topChannels.map((ch, i) => (
        <div key={i} style={{ width: 223, background: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 191, height: 191, borderRadius: '50%', overflow: 'hidden', marginBottom: 16 }}>
            <img src={ch.img} alt={ch.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 500, fontSize: 16 }}>{ch.name}</div>
            <div style={{ color: '#8fadcc', fontSize: 14, marginTop: 4 }}>{ch.desc}</div>
          </div>
          {/* Channel featured video */}
          <div style={{ marginTop: 16, width: '100%' }}>
            <img src={ch.video.img} alt={ch.video.title} style={{ width: '100%', height: 99, borderRadius: 8, objectFit: 'cover' }} />
            <div style={{ fontWeight: 500, fontSize: 14, marginTop: 8 }}>{ch.video.title}</div>
            <div style={{ color: '#8fadcc', fontSize: 13 }}>{ch.video.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopAIChannels; 