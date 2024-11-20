import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuizData } from "../../api";
import { ClimbingBoxLoader } from "react-spinners";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border-radius: 15px;
`;
const QuestionBox = styled.div`
  width: 390px;
  height: 321px;
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
  }
`;
const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    all: unset;
    width: 350px;
    height: 60px;
    border: 1px solid rgba(161, 106, 233, 0.7);
    border-radius: 50px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 0 20px;
    opacity: 0.7;
    cursor: pointer;
    .num {
      font-weight: 600;
    }

    .answers {
      margin: 0 auto;
    }
  }
`;

// const NextBtn = styled.button`
//   all: unset;
//   width: 62px;
//   height: 25px;
//   background-color: rgba(1161, 106, 233, 0.8);
//   color: #fff;
//   border-radius: 20px;
//   opacity: 0.7;
//   font-size: 14px;
//   margin-top: 10px;
//   /* text-align: center; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: auto;
//   cursor: pointer;
// `;

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const { category = "", level = "" } = location.state || {};

  // const { category, level } = location.state; // Home 페이지에서 전달된 데이터

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData(category, level);
        setQuizData(data || []);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log("error", error);
        setQuizData([]);
        setIsLoading(false);
      }
    };
    loadQuizData();
  }, [category, level]);

  const handleAnswerClick = (answer) => {
    const correctAnswer = quizData[currentQuestion].correct_answer;

    setSelectedAnswer(answer);

    if (answer !== correctAnswer) {
      setWrongAnswers((prev) => [
        ...prev,
        { ...quizData[currentQuestion], userAnswer: answer },
      ]);
    }

    setTimeout(() => {
      setSelectedAnswer("");
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        navigate("/results", {
          state: { wrongAnswers, total: quizData.length },
        });
      }
    }, 1000);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <ClimbingBoxLoader color="#6c63ff" size={15} />
      </div>
    );
  }

  return (
    <Wrapper>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ color: "#632CAB", marginBottom: "20px" }}
      ></FontAwesomeIcon>
      <QuestionBox>
        <p className="q_count">
          Question {currentQuestion + 1} / {quizData.length || 0}
        </p>
        <div className="question">{quizData[currentQuestion].question}</div>
      </QuestionBox>
      <AnswerBox>
        {[
          ...quizData[currentQuestion].incorrect_answers,
          quizData[currentQuestion].correct_answer,
        ]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              style={{
                backgroundColor:
                  selectedAnswer === answer
                    ? answer === quizData[currentQuestion].correct_answer
                      ? "#A16AE9" // 보라색 (정답)
                      : "red" // 빨간색 (오답)
                    : "transparent", // 기본 색상
                color: selectedAnswer === answer ? "#fff" : "#000",
              }}
            >
              <span className="num">{String.fromCharCode(65 + index)}</span>{" "}
              <span className="answers">{answer}</span>
            </button>
          ))}
      </AnswerBox>
      {/* <NextBtn>Next</NextBtn> */}
    </Wrapper>
  );
};

export default Quiz;
