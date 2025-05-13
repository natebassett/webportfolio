function FileItem({ file, depth = 0 }: { file: FileType; depth?: number }) {
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
              overflow: 'hidden',
            }}
            onClick={() => setOpen(!open)}
          >
            <div style={{ flexShrink: 0 }}>
              {open ? <ChevronDown size={12} strokeWidth={2} /> : <ChevronRight size={12} strokeWidth={2} />}
            </div>
            <span style={{ marginLeft: '4px', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {file.name}
            </span>
          </div>
          {open && (
            <div>
              {file.children?.map(child => (
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
        <span style={{ marginLeft: '4px', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {file.name}
        </span>
      </div>
    );
  }
  