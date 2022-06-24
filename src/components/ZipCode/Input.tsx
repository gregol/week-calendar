import React, {useState} from 'react';
import _ from 'lodash';

interface InputProps extends Partial<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
  onChange: (e: any) => void;
  onKeyDown: (e: any) => void;
  zipCode: string,
}
export const Input = ({
  onChange,
  onKeyDown,
  zipCode,
  ...otherProps
}: InputProps) => {
  return (
    <input
        value={zipCode}
        pattern='[0-9]*'
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={'capitalize appearance-none block px-3 py-4 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-1/2'} 
        {...otherProps}
    />
  );
};
