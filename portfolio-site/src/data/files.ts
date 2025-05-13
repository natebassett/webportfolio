export interface FileType {
    id: string;
    name: string;
    content: string;
  }
  
  export const files: FileType[] = [
    { id: 'about', name: 'aboutMe.md', content: 'About Me content...' },
    { id: 'tech', name: 'techStack.tsx', content: 'Tech Stack content...' },
    { id: 'languages', name: 'languages.json', content: 'Languages content...' },
  ];
  