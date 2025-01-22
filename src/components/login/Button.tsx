/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom"; // navigate 훅 사용

const ButtonStyle = styled.button`
  cursor: pointer;
  color: white;
  background-color: rgb(0, 0, 128);
  font-weight: bold;
  font-size: large;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  margin-top: 30px;
`;

const Button = () => {
  const navigate = useNavigate();
  const handleContinueLogin = () => {
    navigate("/home"); // 로그인 후 이동할 경로
  };
  return <ButtonStyle onClick={handleContinueLogin}>로그인</ButtonStyle>;
};

export default Button;
