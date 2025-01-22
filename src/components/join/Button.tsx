import styled from "@emotion/styled";

const ButtonWrapStyle = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: rgb(0, 0, 128);
  border-radius: 10px;
  height: 50px;

  border: 3px solid skyblue;

  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  color: white;
  background-color: rgb(0, 0, 128);
  font-weight: bold;
  font-size: large;
  border: none;
`;

const Button = () => {
  return (
    <ButtonWrapStyle>
      <ButtonStyle>회원가입</ButtonStyle>
    </ButtonWrapStyle>
  );
};
export default Button;
