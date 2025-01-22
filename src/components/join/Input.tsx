import InputItem from "./InputItem";
import styled from "@emotion/styled";

const InputWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = () => {
  return (
    <InputWrapStyle>
      <InputItem content="별명" />
      <InputItem content="아이디" />
      <InputItem content="비밀번호" />
      <InputItem content="비밀번호 확인" />
    </InputWrapStyle>
  );
};

export default Input;
