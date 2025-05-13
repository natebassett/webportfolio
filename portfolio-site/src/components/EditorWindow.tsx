import { useTab } from '@/contexts/TabContext';

export default function EditorWindow() {
  const { activeTab } = useTab();

  if (!activeTab) {
    return <div className="flex-1 bg-gray-900 text-gray-400 p-4">Select a file to open...</div>;
  }

  return (
    <div className="flex-1 bg-gray-900 text-gray-200 p-4 whitespace-pre-wrap">
      {activeTab.content}
    </div>
  );
}
