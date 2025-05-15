import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { files, FileType } from '@/data/files';
import { useTab } from '@/contexts/TabContext';
import ExplorerHeader from '@/components/ExplorerHeader';

function FileItem({ file, depth = 0 }: { file: FileType; depth?: number }) {function FileItem({ file, depth = 0 }: { file: FileType; depth?: number }) {
  const { openFile } = useTab();
  const [open, setOpen] = useState(true);

  const indent = `${depth * 8}px`;

  if (file.type === 'folder') {
    return (
      <div style={{ marginLeft: indent, width: 'calc(100% - 8px)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '2px 4px',
            borderRadius: '4px',
            color: '#D9D9D9',
            width: '100%',
          }}
          onClick={() => setOpen(!open)}
        >
          <div style={{ flexShrink: 0 }}>
            {open ? <ChevronDown size={12} strokeWidth={2} /> : <ChevronRight size={12} strokeWidth={2} />}
          </div>
          <span
            style={{
              marginLeft: '4px',
              flex: 1,
            }}
          >
            {file.name}
          </span>
        </div>
        {open && (
          <div>
            {file.children?.map((child) => (
              <FileItem key={child.id} file={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        marginLeft: indent,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '2px 4px',
        borderRadius: '4px',
        color: '#D9D9D9',
        width: 'calc(100% - 8px)',
      }}
      onClick={() => openFile(file)}
    >
      <span
        style={{
          marginLeft: '16px',
          flex: 1,
          // Removed nowrap, overflow, textOverflow to allow wrapping or overflow
        }}
      >
        {file.name}
      </span>
    </div>
  );
}

  const { openFile } = useTab();
  const [open, setOpen] = useState(true);

  const indent = `${depth * 8}px`;

  if (file.type === 'folder') {
    return (
      <div style={{ marginLeft: indent, width: 'calc(100% - 8px)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            padding: '2px 4px',
            borderRadius: '4px',
            color: '#D9D9D9',
            width: '100%',
            overflow: 'hidden',
          }}
          onClick={() => setOpen(!open)}
        >
          <div style={{ flexShrink: 0 }}>
            {open ? <ChevronDown size={12} strokeWidth={2} /> : <ChevronRight size={12} strokeWidth={2} />}
          </div>
          <span
            style={{
              marginLeft: '4px',
              flex: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {file.name}
          </span>
        </div>
        {open && (
          <div>
            {file.children?.map((child) => (
              <FileItem key={child.id} file={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        marginLeft: indent,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '2px 4px',
        borderRadius: '4px',
        color: '#D9D9D9',
        width: 'calc(100% - 8px)',
        overflow: 'hidden',
      }}
      onClick={() => openFile(file)}
    >
      <span
        style={{
          marginLeft: '16px',
          flex: 1,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {file.name}
      </span>
    </div>
  );
}

export default function Explorer() {
  return (
    <div
      style={{
        width: '280px',
        minWidth: '280px',
        maxWidth: '280px',
        backgroundColor: '#2C2C54',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <ExplorerHeader />
      <div
        className="custom-scroll"
        style={{
          flex: 1,
          padding: '8px',
          paddingTop: '24px',
          overflowY: 'auto',
          overflowX: 'auto', // Optional if you expect long filenames
          fontFamily: 'monospace',
          fontSize: '15px',
          lineHeight: '1.2',
        }}
      >
        {files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}