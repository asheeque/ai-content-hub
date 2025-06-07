import React from 'react';

const categories = [
  'AI Art',
  'AI Music',
  'AI Tools',
  'AI Animation',
  'AI Writing',
  'AI Research',
];

const Categories = () => (
  <section>
    <h2 style={{ fontSize: 22, fontWeight: 700, margin: '2rem 0 1rem 0' }}>AI Content Categories</h2>
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {categories.map((cat, i) => (
        <div key={i} style={{ background: '#21364a', borderRadius: 12, padding: '8px 24px', fontWeight: 500, fontSize: 14 }}>
          {cat}
        </div>
      ))}
    </div>
  </section>
);

export default Categories; 