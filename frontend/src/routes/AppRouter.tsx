import { MainPage } from '@/page/MainPage';
import { NotFoundPage } from '@/page/NotFoundPage';
import { TypographyShowcasePage } from '@/page/TypographyShowcasePage';
import { createBrowserRouter } from 'react-router-dom';

export const AppRouter = createBrowserRouter([
  { path: '/', Component: MainPage },
  { path: 'test-typography', Component: TypographyShowcasePage },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);
