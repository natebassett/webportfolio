import { MoreHorizontal } from 'lucide-react';

export default function ExplorerHeader() {
  return (
    <div style={{
      height: '32px',
      backgroundColor: '#2C2C54',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px',
      color: '#A0A0A0',
      fontSize: '15px',
      fontWeight: 'bold',
      letterSpacing: '0.05em',
    }}>
      EXPLORER
      <MoreHorizontal size={16} strokeWidth={2} />
    </div>
  );
}
