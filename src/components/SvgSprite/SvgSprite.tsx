import { JSX } from 'react';

import Logo from '@assets/svg/logo.svg?react';
import Spinner from '@assets/svg/spinner.svg?react';

export function SvgSprite(): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <Logo />
        <Spinner />
      </defs>
    </svg>
  );
}
