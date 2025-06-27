import { TypographyShowcase } from '@/page/TypographyShowcase';
import { createBrowserRouter } from 'react-router-dom';

export const AppRouter = createBrowserRouter([
  { path: 'test-typography', Component: TypographyShowcase },
]);
