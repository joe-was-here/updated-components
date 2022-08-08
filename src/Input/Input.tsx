import React, { useRef } from 'react';
import { useField } from 'formik';
import { FormGroup } from './style';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
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
  ...rest
}: InputProps): JSX.Element => {
  const [field, meta] = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FormGroup
      className={`formGroup ${className || ''} ${variant || 'normal'} ${
        meta.value ? 'populated' : ''
      }`}
    >
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...field}
        {...rest}
        className="inputField"
        ref={inputRef}
      />
      <label htmlFor={id} className="inputLabel" onClick={handleLabelClick}>
        {label}
      </label>
      {meta.touched && meta.error && <div className="helper">{meta.error}</div>}
    </FormGroup>
  );
};

export default Input;
