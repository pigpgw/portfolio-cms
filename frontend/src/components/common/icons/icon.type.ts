import type { FC } from 'react';

export type IconProps = {
  size?: number | string;
  className?: string;
  title?: string;
};

export type IconCategory =
  | 'Design'
  | 'Frontend'
  | 'UI'
  | 'State'
  | 'Testing'
  | 'Language'
  | 'Backend'
  | 'Infra'
  | 'Deployment';

export type IconItem = {
  Comp: FC<IconProps>;
  name: string;
  category: IconCategory;
};
