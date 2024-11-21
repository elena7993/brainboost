import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border-radius: 15px;
  /* background-color: #f5edfe; */
`;
const QABox = styled.div`
  width: 390px;
  height: 460px;
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
    margin-top: 20px;
  }
  .answers {
    text-align: center;
    margin-bottom: 80px;
    opacity: 0.8;
    color: #5a3de2;
    font-size: 32px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  const navigate = useNavigate();
  const { question, correctAnswer } = location.state || {};
  // 이게 전달받은 데이터임

  const wrongAnswers = location.state?.wrongAnswers || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < wrongAnswers.length - 1) {
      setCurrentIndex((prev) => prev + 1); // 다음 문제로 이동
    } else {
      navigate("/oxresult"); // 마지막 문제라면 결과 페이지로 이동
    }
  };

  const encodeHTML = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={() => navigate(-1)}
        style={{ color: "#632CAB", marginBottom: "20px", cursor: "pointer" }}
      ></FontAwesomeIcon>
      <QABox>
        <p className="q_count">
          {" "}
          Question {currentIndex + 1} of {wrongAnswers.length}
        </p>
        <div className="question">
          {question ? encodeHTML(question) : "No question available"}
        </div>
        <div className="answers">
          {correctAnswer ? encodeHTML(correctAnswer) : "No answer available"}
        </div>
      </QABox>
      <NextBtn onClick={handleNext}>Next</NextBtn>
    </Wrapper>
  );
};

export default CheckWrongAnswers;
