import Explorer from '@/components/Explorer';
import Tabs from '@/components/Tabs';
import EditorWindow from '@/components/EditorWindow';
import Terminal from '@/components/Terminal';
import { TabProvider } from '@/contexts/TabContext';

export default function Home() {
  return (
    <TabProvider>
      <div className="h-screen flex flex-col bg-[#1E1E1E] text-[#D9D9D9] font-mono">
        {/* Header (optional) */}
        <div className="h-8 bg-[#1A1A40] flex items-center px-4">
          <div className="text-sm text-white">Nathaniel's Portfolio</div>
        </div>

        {/* Main workspace area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar (Explorer) */}
          <Explorer />

          {/* Main Content Area */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Tabs */}
            <Tabs />
            {/* Editor */}
            <EditorWindow />
          </div>
        </div>

        {/* Terminal footer */}
        <Terminal />
      </div>
    </TabProvider>
  );
}
