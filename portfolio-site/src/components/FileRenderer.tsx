import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/hljs/markdown';

SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('markdown', markdown);

interface FileRendererProps {
  fileName: string;
  fileContent: string;
}

export default function FileRenderer({ fileName, fileContent }: FileRendererProps) {
  const isMarkdown = fileName.endsWith('.md');

  const getLanguage = (name: string) => {
    if (name.endsWith('.json')) return 'json';
    if (name.endsWith('.js')) return 'javascript';
    if (name.endsWith('.md')) return 'markdown';
    if (name.endsWith('.tsx')) return 'typescript';
    return 'plaintext';
  };

  if (isMarkdown) {
    return (
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => {
              const src = typeof props.src === 'string' ? props.src : '/assets/profilePic.jpg';
              return (
                <Image
                  src={src}
                  alt={props.alt ?? 'Profile image'}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto my-4"
                  priority
                />
              );
            },
          }}
        >
          {fileContent}
        </ReactMarkdown>
      </div>
    );
  }

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
