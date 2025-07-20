// src/layouts/PageLayout.tsx
import Main from './MainLayout/Main';
import type { JSX } from '@emotion/react/jsx-runtime';

type Props = {
  children: JSX.Element;
};

const PageLayout = ({ children }: Props) => {
  return <Main>{children}</Main>;
};

export default PageLayout;
