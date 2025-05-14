import { useTab } from '@/contexts/TabContext';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// Register JSON language
SyntaxHighlighter.registerLanguage('json', json);

export default function EditorWindow() {
  const { activeTab } = useTab();

  if (!activeTab) {
    return <div className="flex-1 bg-gray-900" />;
  }

  // Hardcode as JSON (or you can dynamically detect based on file name extension)
  const isJson = activeTab.name.endsWith('.json');
  const language = isJson ? 'json' : 'plaintext';

  return (
    <div
      className="flex-1 bg-gray-900 overflow-auto"
      style={{
        padding: '8px 8px', 
      }}
    >
      <SyntaxHighlighter
        language={language}
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
        {activeTab.content}
      </SyntaxHighlighter>
    </div>
  );
}
