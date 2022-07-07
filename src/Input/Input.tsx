import React from 'react';
import { useField } from 'formik';
import { FormGroup } from './style';

export interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  className?: string;
  variant?: 'contained' | 'normal';
}

const Input = ({
  id,
  label,
  placeholder,
  className,
  name,
  variant,
}: InputProps): JSX.Element => {
  const [field, meta] = useField(name);
  return (
    <FormGroup
      className={`formGroup ${className || ''} ${variant || 'normal'}`}
    >
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...field}
        className="inputField"
      />
      <label htmlFor={id} className="inputLabel">
        {label}
      </label>
      {meta.touched && meta.error && <div className="helper">{meta.error}</div>}
    </FormGroup>
  );
};

export default Input;
