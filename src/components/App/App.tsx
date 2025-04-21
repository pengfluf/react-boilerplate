import { JSX } from 'react';
import { Outlet } from 'react-router';

import { Container, SvgSprite } from '@components';

import { GlobalStyle } from './GlobalStyle';

export function App(): JSX.Element {
  return (
    <>
      <SvgSprite />
      <GlobalStyle />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
