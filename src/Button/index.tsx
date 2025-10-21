import React, { memo } from 'react';
import './styles/index.less';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props;
  return (
    <button
      type="button"
      className={`dumi-btn ${type ? `dumi-btn-${type}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
