// src/PrimaryButton/__tests__/index.test.tsx
import { render } from '@testing-library/react';
import React from 'react';
import Foo from '..';

describe('Button 组件', () => {
  it('能够正确渲染按钮文字', () => {
    const buttonText = '按钮文字';
    const { getByText } = render(<Foo title={buttonText}></Foo>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement.innerHTML).toBe(buttonText);
  });
});
