import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border-radius: 15px;
  background-color: #f5edfe;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(133, 107, 254, 0.2);
  padding-bottom: 20px;
  margin-bottom: 10px;
  position: relative;
  button {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
  }
  h3 {
    font-size: 22px;
    font-weight: 700;
    color: rgba(117, 24, 250, 1);
  }
`;

const WrongAnswersList = styled.ul`
  list-style: none;
  li {
    font-size: 14px;
    opacity: 0.8;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(133, 107, 254, 0.2);
    cursor: pointer;
  }
`;

const Oxnote = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const wrongAnswers = state?.wrongAnswers || [];

  // console.log(wrongAnswers);

  const handleQuestionClick = (question) => {
    navigate("/quiz", { state: { question } });
  };

  return (
    <Wrapper>
      <Header>
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#632CAB" }}
          ></FontAwesomeIcon>
        </button>

        <h3>오답노트</h3>
      </Header>

      <WrongAnswersList>
        {wrongAnswers.map((item, index) => (
          <li key={index} onClick={() => handleQuestionClick(item)}>
            {`${index + 1}. ${item.question}`}
          </li>
        ))}
      </WrongAnswersList>
    </Wrapper>
  );
};

export default Oxnote;
