import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/page/MainPage';
import { NotFoundPage } from '@/page/NotFoundPage';
import { IconShowcasePage } from '@/page/IconShowcasePage';
import { BadgeShowcasePage } from '@/page/BadgeShowcasePage';
import { ButtonShowcasePage } from '@/page/ButtonShowcasePage';
import { TypographyShowcasePage } from '@/page/TypographyShowcasePage';

export const AppRouter = createBrowserRouter([
  { path: '/', Component: MainPage },
  { path: 'test-icon', Component: IconShowcasePage },
  { path: 'test-badge', Component: BadgeShowcasePage },
  { path: 'test-button', Component: ButtonShowcasePage },
  { path: 'test-typography', Component: TypographyShowcasePage },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
