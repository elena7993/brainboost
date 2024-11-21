import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border-radius: 15px;
  /* background-color: #f5edfe; */
`;
const Q_ABox = styled.div`
  width: 390px;
  height: 460px;
  border-radius: 15px;
  background-color: rgba(145, 71, 241, 0.1);
  padding: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .q_count {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    font-size: 14px;
    color: #a16ae9;
  }
  .question {
    font-size: 16px;
    text-align: center;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
  .answers {
    text-align: center;
    margin-bottom: 30px;
    opacity: 0.8;
  }
`;
const NextBtn = styled.button`
  all: unset;
  width: 350px;
  height: 60px;
  color: #fff;
  background-color: rgba(161, 106, 233, 1);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  opacity: 0.7;
  cursor: pointer;
`;

const CheckWrongAnswers = () => {
  const location = useLocation();
  const { question, correctAnswer } = location.state || {};
  // 이게 전달받은 데이터임

  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: "#632CAB", marginBottom: "20px" }}
      ></FontAwesomeIcon>
      <Q_ABox>
        <p className="q_count">Check Your Wrong Answer</p>
        <div className="question">{question || "No question available"}</div>
        <div className="answers">{correctAnswer || "No answer available"}</div>
      </Q_ABox>
      <NextBtn>Next</NextBtn>
    </Wrapper>
  );
};

export default CheckWrongAnswers;
