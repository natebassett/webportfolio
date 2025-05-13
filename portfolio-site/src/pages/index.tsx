import Explorer from '@/components/Explorer';
import Tabs from '@/components/Tabs';
import EditorWindow from '@/components/EditorWindow';
import Terminal from '@/components/Terminal';
import Header from '@/components/Header';
import { TabProvider } from '@/contexts/TabContext';

export default function Home() {
  return (
    <TabProvider>
      <div className="h-screen flex flex-col bg-[#1E1E1E] text-[#D9D9D9] font-mono">
        {/* Fixed header */}
        <Header />

        {/* Main workspace */}
        <div className="flex flex-1 overflow-hidden">
          <Explorer />

          <div className="flex flex-col flex-1 overflow-hidden">
            <Tabs />
            <EditorWindow />
          </div>
        </div>

        <Terminal />
      </div>
    </TabProvider>
  );
}
