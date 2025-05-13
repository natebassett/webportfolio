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
      color: '#D9D9D9',
      fontSize: '15px',
    //   fontWeight: 'bold',
      letterSpacing: '0.05em',
    }}>
      <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>EXPLORER</div>
      <div style={{ paddingRight: '12px', paddingTop: '20px'  }}>
        <MoreHorizontal size={24} strokeWidth={2} />
      </div>
    </div>
  );
}
