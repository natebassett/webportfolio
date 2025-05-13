import { files, FileType } from '@/data/files';
import { useTab } from '@/contexts/TabContext';

function FileItem({ file, depth = 0 }: { file: FileType; depth?: number }) {
  const { openFile } = useTab();

  if (file.type === 'folder') {
    return (
      <div className={`ml-${depth * 4}`}>
        <div className="font-bold text-white">{file.name}</div>
        <div className="ml-4">
          {file.children?.map(child => (
            <FileItem key={child.id} file={child} depth={depth + 1} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`cursor-pointer hover:bg-[#1A1A40] p-1 rounded ml-${depth * 4}`}
      onClick={() => openFile(file)}
    >
      {file.name}
    </div>
  );
}

export default function Explorer() {
  return (
    <div className="w-64 bg-[#121212] text-[#D9D9D9] p-4 font-mono overflow-y-auto">
      <h2 className="text-xs font-bold mb-4 text-white">EXPLORER</h2>
      {files.map(file => (
        <FileItem key={file.id} file={file} />
      ))}
    </div>
  );
}
