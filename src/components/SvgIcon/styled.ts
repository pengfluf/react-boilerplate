import styled from 'styled-components';

import { iconSize } from './constants';

interface WrapperProps {
  $size?: string;
}

export const Wrapper = styled.svg<WrapperProps>`
  width: ${({ $size }) => $size ?? iconSize.sm};
  height: ${({ $size }) => $size ?? iconSize.sm};
`;
