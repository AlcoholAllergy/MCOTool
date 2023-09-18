'use client';

import React from 'react';
import { useState } from 'react';

import { BiSolidCopy } from 'react-icons/bi';

type InputComponentProps = {
  as?: 'input' | 'textarea';
  className?: string;
  style?: React.CSSProperties;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputComponent: React.FC<InputComponentProps> = ({
  as = 'textarea',
  className = '',
  style = {},
  ...props
}) => {
  const Component = as === 'input' ? 'input' : 'textarea';
  const [emploeeId, setEmploeeId] = useState('');

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmploeeId(e.target.value);
  };

  const onclickHandler = () => {
    navigator.clipboard.writeText(emploeeId);
  };

  return (
    <div className="flex items-center">
      {React.createElement(Component, {
        className: `input-default-styles ${className}`,
        value: emploeeId,
        onChange: onChangeHandler,
        style: style,
        ...props,
      })}
      <BiSolidCopy
        color="yellow"
        onClick={onclickHandler}
        className="mr-10 transform active:scale-90 hover:scale-105 hover:bg-blue-800 hover:shadow-md"
        size="2rem"
      />
    </div>
  );
};

export default InputComponent;
