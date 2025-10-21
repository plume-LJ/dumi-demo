// src/Button/__tests__/index.test.tsx
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '..';

describe('Button 组件', () => {
  it('能够正确渲染按钮文字', () => {
    const buttonText = '按钮文字';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement.innerHTML).toBe(buttonText);
  });

  it('能够正确渲染 default 样式的按钮', () => {
    const { getByRole } = render(<Button>按钮</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('dumi-btn')).toBe(true);
  });

  it('能够正确渲染 primary 样式的按钮', () => {
    const { getByRole } = render(<Button type="primary">按钮</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('dumi-btn-primary')).toBe(true);
  });

  it('能够正确渲染 dashed 样式的按钮', () => {
    const { getByRole } = render(<Button type="dashed">按钮</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement.classList.contains('dumi-btn-dashed')).toBe(true);
  });

  it('能够触发点击事件', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>按钮</Button>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
