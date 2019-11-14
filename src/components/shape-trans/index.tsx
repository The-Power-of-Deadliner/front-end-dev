import React from 'react';
import styled from 'styled-components';

const ShapeButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 3;
`;

export default function Page() {
  return <ShapeButton />;
}
