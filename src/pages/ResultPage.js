import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border: 1px solid rgba(161, 106, 233, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 292px;
    height: 292px;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 5px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 60px;
  }
`;
const BtnWrap = styled.div`
  button {
    all: unset;
    width: 350px;
    height: 60px;
    background-color: rgba(161, 106, 233, 1);
    border-radius: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
  }
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { wrongAnswers = [] } = location.state || {};

  console.log("Received wrongAnswers in ResultPage:", wrongAnswers);

  return (
    <Wrapper>
      <img
        src={`${process.env.PUBLIC_URL}/well-done_15221603.png`}
        alt="Brain_icon"
      />
      <h4>Congrats!</h4>
      <p>You've done today's quiz.</p>

      <BtnWrap>
        <button onClick={() => navigate("/home")}>홈</button>
        <button
          onClick={() => navigate("/oxnote", { state: { wrongAnswers } })}
        >
          오답노트
        </button>
      </BtnWrap>
    </Wrapper>
  );
};

export default ResultPage;
