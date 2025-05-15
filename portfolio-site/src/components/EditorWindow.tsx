import { useTab } from '@/contexts/TabContext';
import { useEffect, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/hljs/markdown';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import profilePic from '@/assets/images/profilePic.jpg';

<img
  src={profilePic.src}
  alt="Profile"
  className="absolute bottom-4 right-4 rounded-full"
  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
/>


// Register languages
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export default function EditorWindow() {
  const { activeTab } = useTab();
  const [fileContent, setFileContent] = useState<string>('');
  const isAboutMe = activeTab?.name === 'aboutMe.md';

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
    if (name.endsWith('.tsx')) return 'typescript';
    return 'plaintext';
  };

  return (
    <div className="custom-scroll overflow-auto flex-1 w-full h-full bg-gray-900">
      <div className="min-h-full w-full px-2 py-1">
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
            minHeight: '100%',
            paddingLeft: '12px',
            paddingTop: '4px',
          }}
          showLineNumbers={false}
        >
          {fileContent}
        </SyntaxHighlighter>

        {isAboutMe && (
          <img
          src={profilePic.src}
          alt="Profile"
          className="absolute bottom-4 right-4 rounded-full"
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
        )}
      </div>
    </div>
  );
}

