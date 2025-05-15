import {
    Search,
    Folder,
    GitBranch,
    Terminal,
    User,
    Wrench,
    Settings,
  } from 'lucide-react';
  
  export default function Sidebar1() {
    return (
      <div className="w-12 bg-[#1A1A40] flex flex-col justify-between items-centerv text-[#A0A0A0]" style={{ paddingTop: '18px', paddingBottom: '12px' }}>
         {/* Top icons with side margin */}
      <div className="flex flex-col items-center" style={{ gap: '24px' }}>
        <Search size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
        <Folder size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
        <GitBranch size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
        <Terminal size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
        <Wrench size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
        <User size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
      </div>

      {/* Settings pinned at bottom */}
      <div>
        <Settings size={24} strokeWidth={2} style={{ marginLeft: '4px', marginRight: '4px' }} />
      </div>
    </div>
    );
  }
  