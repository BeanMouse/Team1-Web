// src/components/login/InputItem.tsx
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface InputItemProps {
  content: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: #e3e3e3;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 400;
`;

const InputItemStyle = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: #e3e3e3;
  padding: 5px;
`;

const InputItem = ({ content, type, value, onChange }: InputItemProps) => {
  return (
    <InputItemStyle>
      <InputStyle
        placeholder={content}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputItemStyle>
  );
};

export default InputItem;
