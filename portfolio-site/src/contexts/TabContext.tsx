import { createContext, useContext, useState, ReactNode } from 'react';
import { FileType } from '@/data/files';

interface TabContextProps {
  openTabs: FileType[];
  activeTab: FileType | null;
  openFile: (file: FileType) => void;
  setActiveTab: (file: FileType) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<FileType[]>([]);
  const [activeTab, setActiveTab] = useState<FileType | null>(null);

  const openFile = (file: FileType) => {
    if (!openTabs.find(t => t.id === file.id)) {
      setOpenTabs([...openTabs, file]);
    }
    setActiveTab(file);
  };

  return (
    <TabContext.Provider value={{ openTabs, activeTab, openFile, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
}
