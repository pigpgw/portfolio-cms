import { FigmaIcon } from '@/components/common/icons/figma-icon';
import { GitHubIcon } from '@/components/common/icons/github-icon';
import { ReactIcon } from '@/components/common/icons/react-icon';
import { NextjsIcon } from '@/components/common/icons/nextjs-icon';
import { TypescriptIcon } from '@/components/common/icons/typescript-icon';
import { JavascriptIcon } from '@/components/common/icons/javascript-icon';
import { TailwindcssIcon } from '@/components/common/icons/tailwindcss-icon';
import { ShadcnuiIcon } from '@/components/common/icons/shadcnui-icon';
import { RadixuiIcon } from '@/components/common/icons/radixui-icon';
import { StyledcomponentsIcon } from '@/components/common/icons/styledcomponents-icon';
import { ViteIcon } from '@/components/common/icons/vite-icon';
import { ZustandIcon } from '@/components/common/icons/zustand-icon';
import { ReactQueryIcon } from '@/components/common/icons/reactquery-icon';
import { JestIcon } from '@/components/common/icons/jest-icon';
import { VercelIcon } from '@/components/common/icons/vercel-icon';
import { NodejsIcon } from '@/components/common/icons/nodejs-icon';
import { ExpressIcon } from '@/components/common/icons/express-icon';
import { MongodbIcon } from '@/components/common/icons/mongodb-icon';
import { PostgresqlIcon } from '@/components/common/icons/postgresql-icon';
import { DockerIcon } from '@/components/common/icons/docker-icon';
import { TestingLibraryIcon } from '@/components/common/icons/testinglibrary-icon';
import { PnpmIcon } from '@/components/common/icons/pnpm-icon';
import type { IconItem } from '@/components/common/icons/icon.type';

export const icons: IconItem[] = [
  // 디자인 / 협업 툴
  { Comp: FigmaIcon, name: 'Figma', category: 'Design' },

  // 💻 프론트엔드 프레임워크 / 라이브러리
  { Comp: ReactIcon, name: 'React', category: 'Frontend' },
  { Comp: NextjsIcon, name: 'Next.js', category: 'Frontend' },
  { Comp: ViteIcon, name: 'Vite', category: 'Frontend' },

  // UI 라이브러리 / 스타일링
  { Comp: TailwindcssIcon, name: 'Tailwind CSS', category: 'UI' },
  { Comp: ShadcnuiIcon, name: 'shadcn/ui', category: 'UI' },
  { Comp: RadixuiIcon, name: 'Radix UI', category: 'UI' },
  { Comp: StyledcomponentsIcon, name: 'styled-components', category: 'UI' },

  // 상태 관리 / 데이터 패칭
  { Comp: ZustandIcon, name: 'Zustand', category: 'State' },
  { Comp: ReactQueryIcon, name: 'React Query', category: 'State' },

  // 테스팅 / 빌드 도구
  { Comp: JestIcon, name: 'Jest', category: 'Testing' },
  { Comp: TestingLibraryIcon, name: 'Testing Library', category: 'Testing' },

  // 언어 / 패키지 매니저
  { Comp: TypescriptIcon, name: 'TypeScript', category: 'Language' },
  { Comp: JavascriptIcon, name: 'JavaScript', category: 'Language' },
  { Comp: PnpmIcon, name: 'pnpm', category: 'Language' },

  // 백엔드 / 서버
  { Comp: NodejsIcon, name: 'Node.js', category: 'Backend' },
  { Comp: ExpressIcon, name: 'Express', category: 'Backend' },

  // 데이터베이스 / 인프라
  { Comp: MongodbIcon, name: 'MongoDB', category: 'Infra' },
  { Comp: PostgresqlIcon, name: 'PostgreSQL', category: 'Infra' },
  { Comp: DockerIcon, name: 'Docker', category: 'Infra' },

  // 배포 / 버전 관리
  { Comp: GitHubIcon, name: 'GitHub', category: 'Deployment' },
  { Comp: VercelIcon, name: 'Vercel', category: 'Deployment' },
];
