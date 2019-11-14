import React from 'react';
import styled from 'styled-components';

const TransButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  width: 360px;
  height: 640px;
  position: absolute;
  z-index: 2;
`;

export default function Page() {
  return <TransButton />;
}
