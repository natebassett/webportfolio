import { useTab } from '@/contexts/TabContext';

export default function Tabs() {
  const { openTabs, activeTab, setActiveTab } = useTab();

  return (
    <div className="flex bg-gray-800 text-gray-200 h-10 items-center">
      {openTabs.map(tab => (
        <div
          key={tab.id}
          className={`px-4 cursor-pointer ${activeTab?.id === tab.id ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
}
