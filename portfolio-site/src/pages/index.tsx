import Explorer from '@/components/Explorer';
import Sidebar1 from '@/components/Sidebar1';
import Tabs from '@/components/Tabs';
import EditorWindow from '@/components/EditorWindow';
import Terminal from '@/components/Terminal';
import Header from '@/components/Header';
import { TabProvider } from '@/contexts/TabContext';

export default function Home() {
  return (
    <TabProvider>
      <div className="h-screen flex flex-col bg-[#1E1E1E] text-[#D9D9D9] font-mono">
        {/* Header */}
        <Header />

        {/* Main workspace area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar1 + Explorer */}
          <div className="flex">
            <Sidebar1 />
            <Explorer />
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <Tabs />
            <div className="flex-1 flex flex-col overflow-hidden">
              <EditorWindow />
              {/* Place Terminal INSIDE this area */}
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </TabProvider>
  );
}
