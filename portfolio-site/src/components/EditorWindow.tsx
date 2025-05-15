import { useTab } from '@/contexts/TabContext';
import { useEffect, useState } from 'react';
import FileRenderer from '@/components/FileRenderer';

export default function EditorWindow() {
  const { activeTab } = useTab();
  const [fileContent, setFileContent] = useState<string>('');

  useEffect(() => {
    if (activeTab?.url) {
      fetch(activeTab.url)
        .then((res) => res.text())
        .then((text) => setFileContent(text))
        .catch(() => setFileContent('// Failed to load file.'));
    } else if (activeTab) {
      setFileContent(activeTab.content);
    }
  }, [activeTab]);

  // Optional aggressive preload
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/profilePic.jpg';
  }, []);

  if (!activeTab) return <div className="flex-1 bg-gray-900" />;

  return (
    <div className="custom-scroll overflow-auto flex-1 w-full h-full bg-gray-900">
      <div className="min-h-full w-full px-6 py-4">
        {activeTab.name && fileContent ? (
          <FileRenderer fileName={activeTab.name} fileContent={fileContent} />
        ) : (
          <div className="text-gray-400">Loading file...</div>
        )}
      </div>
    </div>
  );
}
