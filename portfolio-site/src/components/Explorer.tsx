import { useTab } from '@/contexts/TabContext';
import { files } from '@/data/files';

export default function Explorer() {
  const { openFile } = useTab();

  return (
    <div className="w-64 bg-gray-900 text-gray-300 p-4">
      <h2 className="text-xs font-bold mb-4">EXPLORER</h2>
      <ul>
        {files.map(file => (
          <li
            key={file.id}
            className="cursor-pointer hover:text-white"
            onClick={() => openFile(file)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
