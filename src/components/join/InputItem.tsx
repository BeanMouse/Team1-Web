import styled from "@emotion/styled";

interface InputItemProps {
  content: string;
}

const InputItemStyle = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 45px;
  background-color: #e3e3e3;
  border: none;
`;

const InputItem = ({ content }: InputItemProps) => {
  return (
    <div>
      <InputItemStyle placeholder={content} />
    </div>
  );
};
export default InputItem;
