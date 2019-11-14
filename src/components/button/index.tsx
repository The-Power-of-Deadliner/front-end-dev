import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  color: #00b14d;
`;

export interface Props {
  buttonText: string;
}

export default function Page({ buttonText }: Props) {
  return <DefaultButton>{buttonText}</DefaultButton>;
}
