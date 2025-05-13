import { useState } from 'react';

export default function Terminal() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className="bg-black text-green-400 font-mono"
      style={{
        height: open ? '200px' : '30px',
        borderTop: '1px solid #333',
        transition: 'height 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4px 8px',
          cursor: 'pointer',
          backgroundColor: '#111',
        }}
        onClick={() => setOpen(!open)}
      >
        <span>TERMINAL ➜ portfolio-site</span>
        <span style={{ color: '#888' }}>{open ? '▼' : '▲'}</span>
      </div>

      {/* Content */}
      {open && (
        <div
          style={{
            flex: 1,
            padding: '8px',
            overflowY: 'auto',
          }}
        >
          <div>Starting dev server...</div>
          <div>Compiling...</div>
          <div>✓ Compiled successfully!</div>
        </div>
      )}
    </div>
  );
}
