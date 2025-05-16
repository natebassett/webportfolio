import React from 'react';
import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface FileRendererProps {
  fileName: string;
  fileContent: string;
}

export default function FileRenderer({ fileName, fileContent }: FileRendererProps) {
  const isMarkdown = fileName.endsWith('.md');

  if (isMarkdown) {
    const lines = fileContent.split('\n');

    return (
      <div className="font-mono text-[#D9D9D9] text-sm whitespace-pre leading-snug pl-6">
        {lines.map((line, index) => {
          const imageMatch = line.match(/!\[.*\]\((.*)\)/);

          if (imageMatch) {
            const src = imageMatch[1];
            return (
              <div key={index} className="my-4 flex justify-center">
                <Image
                  src={src}
                  alt="Markdown image"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            );
          }

          return <div key={index}>{line}</div>;
        })}
      </div>
    );
  }

  const getLanguage = (name: string) => {
    if (name.endsWith('.json')) return 'json';
    if (name.endsWith('.js')) return 'javascript';
    if (name.endsWith('.md')) return 'markdown';
    if (name.endsWith('.tsx')) return 'typescript';
    return 'plaintext';
  };

  return (
    <SyntaxHighlighter
      language={getLanguage(fileName)}
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
  );
}
