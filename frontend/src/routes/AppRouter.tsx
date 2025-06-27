import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/page/MainPage';
import { NotFoundPage } from '@/page/NotFoundPage';
import { TypographyShowcasePage } from '@/page/TypographyShowcasePage';

export const AppRouter = createBrowserRouter([
  { path: '/', Component: MainPage },
  { path: 'test-typography', Component: TypographyShowcasePage },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
