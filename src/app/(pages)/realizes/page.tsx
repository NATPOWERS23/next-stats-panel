'use client';

import { useState } from 'react';

export default function Realizes() {
  const [contentItems, setContentItems] = useState([
    { title: 'Show 1', body: 'Show 1 body' },
    { title: 'Show 2', body: 'Show 2 body' },
    { title: 'Show 3', body: 'Show 3 body' },
    { title: 'Show 4', body: 'Show 4 body' },
    { title: 'Show 5', body: 'Show 5 body' },
    { title: 'Show 6', body: 'Show 6 body' },
  ]);

  return (
    <div className="page-wrapper">
      <h1>Show Realizes</h1>

      <div className="grid-wrapper">
        {contentItems.map((item) => (
          <div className="card">
            <div className="card-title">{item.title}</div>
            <div className="card-body">...</div>
            <div className="card-actions"></div>
          </div>
        ))}
      </div>

      <div>
        <button>+ Propose new content</button>
      </div>
    </div>
  );
}
