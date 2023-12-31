import { FC, ChangeEvent } from 'react';
import { StyledInput } from './styled';

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
