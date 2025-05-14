import languagesJson from '@/code-snippets/languages.json';

export interface FileType {
    id: string;
    name: string;
    path: string;
    content: string;
    type: 'file' | 'folder' | 'exe';
    children?: FileType[];
  }
  
  export const files: FileType[] = [
    {
      id: 'webportfolio',
      name: 'WEBPORTFOLIO',
      path: '/webportfolio',
      content: '',
      type: 'folder',
      children: [
        {
          id: 'readme',
          name: 'README.md',
          path: '/webportfolio/README.md',
          content: '# Welcome to my portfolio',
          type: 'file',
        },
        {
          id: 'license',
          name: 'LICENSE',
          path: '/webportfolio/LICENSE',
          content: 'MIT License',
          type: 'file',
        },
        {
          id: 'webportfolio-inner',
          name: 'webportfolio',
          path: '/webportfolio/webportfolio',
          content: '',
          type: 'folder',
          children: [
            {
              id: 'portfolio-website',
              name: 'portfolio-website',
              path: '/webportfolio/webportfolio/portfolio-website',
              content: '',
              type: 'folder',
              children: [
                {
                  id: 'package',
                  name: 'package.json',
                  path: '/webportfolio/webportfolio/portfolio-website/package.json',
                  content: '{ "name": "portfolio-website" }',
                  type: 'file',
                },
                {
                  id: 'tsconfig',
                  name: 'tsconfig.json',
                  path: '/webportfolio/webportfolio/portfolio-website/tsconfig.json',
                  content: '{ "compilerOptions": {} }',
                  type: 'file',
                },
                {
                  id: 'gitignore',
                  name: '.gitignore',
                  path: '/webportfolio/webportfolio/portfolio-website/.gitignore',
                  content: 'node_modules',
                  type: 'file',
                },
              ],
            },
            {
              id: 'src',
              name: 'src',
              path: '/webportfolio/webportfolio/src',
              content: '',
              type: 'folder',
              children: [
                {
                  id: 'about',
                  name: 'aboutMe.md',
                  path: '/webportfolio/webportfolio/src/aboutMe.md',
                  content: '# About Me\n\n...',
                  type: 'file',
                },
                {
                  id: 'case-studies',
                  name: 'caseStudies',
                  path: '/webportfolio/webportfolio/src/caseStudies',
                  content: '',
                  type: 'folder',
                  children: [
                    {
                      id: 'bt-router',
                      name: 'bt-router-project.exe',
                      path: '/webportfolio/webportfolio/src/caseStudies/bt-router-project.exe',
                      content: 'Executable case study: BT Router Project',
                      type: 'exe',
                    },
                    {
                      id: 'canine',
                      name: 'canineRehabilitation.exe',
                      path: '/webportfolio/webportfolio/src/caseStudies/canineRehabilitation.exe',
                      content: 'Executable case study: Canine Rehab',
                      type: 'exe',
                    },
                    {
                      id: 'mavis',
                      name: 'mavis.exe',
                      path: '/webportfolio/webportfolio/src/caseStudies/mavis.exe',
                      content: 'Executable case study: Mavis',
                      type: 'exe',
                    },
                  ],
                },
                {
                  id: 'tech',
                  name: 'techStack.tsx',
                  path: '/webportfolio/webportfolio/src/techStack.tsx',
                  content: 'const tech = ["React", "Spring", "Python"];',
                  type: 'file',
                },
                {
                  id: 'languages',
                  name: 'languages.json',
                  path: '/webportfolio/webportfolio/src/languages.json',
                  content: JSON.stringify(languagesJson, null, 2),
                  type: 'file',
                },
                {
                  id: 'contacts',
                  name: 'contacts.js',
                  path: '/webportfolio/webportfolio/src/contacts.js',
                  content: 'const contacts = {};',
                  type: 'file',
                },
                {
                  id: 'assets',
                  name: 'assets',
                  path: '/webportfolio/webportfolio/src/assets',
                  content: '',
                  type: 'folder',
                  children: [
                    {
                      id: 'profile-pic',
                      name: 'profilePic.png',
                      path: '/webportfolio/webportfolio/src/assets/profilePic.png',
                      content: '',
                      type: 'file',
                    },
                    {
                      id: 'logo',
                      name: 'logo.svg',
                      path: '/webportfolio/webportfolio/src/assets/logo.svg',
                      content: '',
                      type: 'file',
                    },
                    {
                      id: 'favicon',
                      name: 'favicon.ico',
                      path: '/webportfolio/webportfolio/src/assets/favicon.ico',
                      content: '',
                      type: 'file',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  