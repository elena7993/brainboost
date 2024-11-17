import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";

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
  .q_count {
    padding: 10px;
  }
  .question {
    margin: 0 auto;
  }
`;
const AnswerBox = styled.div`
  button {
    all: unset;
    width: 390px;
    height: 69px;
    border: 1px solid rgba(161, 106, 233, 0.7);
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      justify-self: flex-start;
    }
  }
`;

const NextBtn = styled.button`
  all: unset;
  color: #7518fa;
  opacity: 0.7;
  font-size: 14px;
  margin-top: 10px;
  display: flex;
  justify-self: flex-end;
  cursor: pointer;
`;

const Quiz = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      <QuestionBox>
        <p className="q_count">Question 1 for 10</p>
        <p className="queistion">질문</p>
      </QuestionBox>
      <AnswerBox>
        <button>
          <span>A</span>aaa
        </button>
        <button>
          <span>B</span>bbb
        </button>
        <button>
          <span>C</span>ccc
        </button>
        <button>
          <span>D</span>ddd
        </button>
      </AnswerBox>
      <NextBtn>Next</NextBtn>
    </Wrapper>
  );
};

export default Quiz;
