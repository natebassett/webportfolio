import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { files, FileType } from '@/data/files';

interface TabContextProps {
  openTabs: FileType[];
  activeTab: FileType | null;
  openFile: (file: FileType) => void;
  setActiveTab: (file: FileType) => void;
  closeTab: (fileId: string) => void;
  setOpenTabs: (tabs: FileType[]) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<FileType[]>([]);
  const [activeTab, setActiveTab] = useState<FileType | null>(null);

  const openFile = (file: FileType) => {
    if (!openTabs.find((t) => t.id === file.id)) {
      setOpenTabs((prev) => [...prev, file]);
    }
    setActiveTab(file);
  };

  const closeTab = (fileId: string) => {
    const updatedTabs = openTabs.filter((tab) => tab.id !== fileId);
    setOpenTabs(updatedTabs);
    if (activeTab?.id === fileId) {
      setActiveTab(updatedTabs.length > 0 ? updatedTabs[0] : null);
    }
  };

  // ✅ Recursive finder for README.md anywhere in tree
  const findReadme = (nodes: FileType[]): FileType | null => {
    for (const node of nodes) {
      if (node.name === 'README.md') return node;
      if (node.children) {
        const found = findReadme(node.children);
        if (found) return found;
      }
    }
    return null;
  };

  useEffect(() => {
    const readme = findReadme(files);
    if (readme) openFile(readme);
  }, []);

  return (
    <TabContext.Provider
      value={{ openTabs, activeTab, openFile, setActiveTab, closeTab, setOpenTabs }}
    >
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
