import { useState } from 'react';

const tabs = ['TERMINAL', 'LOGS', 'PROCESSES', 'ERRORS', 'DEBUG', 'SYSTEM'];

export default function Terminal() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('TERMINAL');

  const tabContent: Record<string, string[]> = {
    TERMINAL: ['Starting dev server...', 'Compiling...', '✓ Compiled successfully!'],
    LOGS: ['[LOG] User logged in.', '[LOG] Data fetched.'],
    PROCESSES: ['Process 1 running...', 'Process 2 idle.'],
    ERRORS: ['Error: Cannot read property undefined.', 'Warning: Deprecated method used.'],
    DEBUG: ['Debug Info: State = true', 'Debug Info: Rendering App...'],
    SYSTEM: ['CPU Usage: 45%', 'RAM Usage: 60%'],
  };

  return (
    <div
      className="bg-black text-green-400 font-mono"
      style={{
        height: open ? '200px' : '30px',
        backgroundColor: '#121212',
        borderTop: '1px solid #333',
        transition: 'height 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Tabs Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4px 8px',
          backgroundColor: '#121212',
          color: '#D9D9D9',
          fontSize: '15px',
          userSelect: 'none',
        }}
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              marginRight: '16px',
              cursor: 'pointer',
              borderBottom: activeTab === tab ? '2px solid #D9D9D9' : '2px solid transparent',
              paddingBottom: '2px',
            }}
          >
            {tab}
          </div>
        ))}
        {/* Collapse Icon */}
        <div
          style={{ marginLeft: 'auto', color: '#888', cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {open ? '▼' : '▲'}
        </div>
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
          {tabContent[activeTab]?.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      )}
    </div>
  );
}
