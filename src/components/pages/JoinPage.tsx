import Input from "../join/Input";
import Button from "../join/Button";
import styled from "@emotion/styled";
import GotoLogin from "../join/GotoLogin";

const JoinContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  height: 60%;
  justify-content: center;
  align-items: center;

  /* 페이지 전체 화면에서 중앙 정렬 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 40px;
  }
`;

const JoinWperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const JoinPage = () => {
  return (
    <>
      <JoinContainerStyle>
        <h1>회원가입</h1>
        <JoinWperStyle>
          <Input />
          <Button />
          <GotoLogin />
        </JoinWperStyle>
      </JoinContainerStyle>
    </>
  );
};

export default JoinPage;
