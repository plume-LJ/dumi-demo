// src/PrimaryButton/__tests__/index.test.tsx
import { render } from '@testing-library/react';
import { ButtonProps } from 'antd';
import React from 'react';
import PrimaryButton from '..';

describe('Button 组件', () => {
  const buttonProps: ButtonProps = {
    loading: false,
    onClick: jest.fn(),
  };
  it('能够正确渲染按钮文字', () => {
    const buttonText = '按钮文字';
    const { getByText } = render(<PrimaryButton>{buttonText}</PrimaryButton>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement.innerHTML).toBe(buttonText);
  });

  it('能够正确渲染 default 样式的按钮', () => {
    const { getByRole } = render(
      <PrimaryButton {...buttonProps}>按钮</PrimaryButton>,
    );
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('ant-btn-primary')).toBe(true);
  });
});
