import Explorer from '@/components/Explorer';
import Tabs from '@/components/Tabs';
import EditorWindow from '@/components/EditorWindow';
import Terminal from '@/components/Terminal';
import { TabProvider } from '@/contexts/TabContext';

export default function Home() {
  return (
    <TabProvider>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <Explorer />
          <div className="flex flex-col flex-1">
            <Tabs />
            <EditorWindow />
          </div>
        </div>
        <Terminal />
      </div>
    </TabProvider>
  );
}
