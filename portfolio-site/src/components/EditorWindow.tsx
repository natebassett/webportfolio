import { useTab } from '@/contexts/TabContext';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function EditorWindow() {
  const { activeTab } = useTab();
  const [fileContent, setFileContent] = useState<string>('');

  useEffect(() => {
    if (activeTab?.url) {
      fetch(activeTab.url)
        .then((res) => res.text())
        .then((text) => setFileContent(text))
        .catch(() => setFileContent('// Failed to load file.'));
    } else if (activeTab) {
      setFileContent(activeTab.content);
    }
  }, [activeTab]);

  // Preload image for markdown
  useEffect(() => {
    const img = new window.Image();
    img.src = '/assets/profilePic.jpg';
  }, []);

  if (!activeTab) {
    return <div className="flex-1 bg-gray-900" />;
  }

  const isMarkdown = activeTab.name.endsWith('.md');

  const getLanguage = (name: string) => {
    if (name.endsWith('.json')) return 'json';
    if (name.endsWith('.js')) return 'javascript';
    if (name.endsWith('.md')) return 'markdown';
    if (name.endsWith('.tsx')) return 'typescript';
    return 'plaintext';
  };

  if (isMarkdown) {
    const lines = fileContent.split('\n');
    const processedLines = lines.map((line) => {
      const imageMatch = line.match(/!\[.*\]\((.*)\)/);
      if (imageMatch) return null; // Remove the image link line
      return line;
    }).filter((line) => line !== null) as string[]; // filter out nulls

    const imageLinks = [...fileContent.matchAll(/!\[.*\]\((.*)\)/g)].map((match) => match[1]);

    return (
      <div className="custom-scroll overflow-auto flex-1 w-full h-full bg-gray-900">
        <div className="relative">
          <SyntaxHighlighter
            language={getLanguage(activeTab.name)}
            style={atomOneDark}
            customStyle={{
              backgroundColor: 'transparent',
              padding: 0,
              margin: 0,
              fontSize: '14px',
              fontFamily: 'Fira Code, monospace',
              lineHeight: '1.6',
              minHeight: '100%',
              paddingLeft: '12px',
              paddingTop: '4px',
              paddingRight: '8px',
            }}
            showLineNumbers={false}
          >
            {processedLines.join('\n')}
          </SyntaxHighlighter>

          {imageLinks.map((src, index) => (
            <div key={index} className="pl-[12px] mt-2">
              <Image
                src={src}
                alt="Markdown image"
                width={170}
                height={170}
                className="rounded-full object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="custom-scroll overflow-auto flex-1 w-full h-full bg-gray-900">
      <SyntaxHighlighter
        language={getLanguage(activeTab.name)}
        style={atomOneDark}
        customStyle={{
          backgroundColor: 'transparent',
          padding: 0,
          margin: 0,
          fontSize: '14px',
          fontFamily: 'Fira Code, monospace',
          lineHeight: '1.6',
          minHeight: '100%',
          paddingLeft: '12px',
          paddingTop: '4px',
          paddingRight: '8px',
        }}
        showLineNumbers={false}
      >
        {fileContent}
      </SyntaxHighlighter>
    </div>
  );
}
