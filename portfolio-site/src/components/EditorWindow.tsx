import { useTab } from '@/contexts/TabContext';
import { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/hljs/markdown';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Register languages
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export default function EditorWindow() {
  const { activeTab } = useTab();
  const [fileContent, setFileContent] = useState<string>('');

  useEffect(() => {
    if (activeTab?.url) {
      fetch(activeTab.url)
        .then(res => res.text())
        .then(text => setFileContent(text))
        .catch(() => setFileContent('// Failed to load file.'));
    } else if (activeTab) {
      setFileContent(activeTab.content);
    }
  }, [activeTab]);

  if (!activeTab) {
    return <div className="flex-1 bg-gray-900" />;
  }

  const getLanguage = (name: string) => {
    if (name.endsWith('.json')) return 'json';
    if (name.endsWith('.js')) return 'javascript';
    if (name.endsWith('.md')) return 'markdown';
    return 'plaintext';
  };

  return (
    <div
      className="flex-1 bg-gray-900 overflow-auto"
      style={{
        padding: '4px 8px',
      }}
    >
      <SyntaxHighlighter
        language={getLanguage(activeTab.name)}
        style={atomOneDark}
        customStyle={{
          backgroundColor: 'transparent',
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontFamily: 'Fira Code, monospace',
          lineHeight: '1.6',
        }}
        showLineNumbers={false}
      >
        {fileContent}
      </SyntaxHighlighter>
    </div>
  );
}
