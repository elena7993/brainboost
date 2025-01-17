import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border: 1px solid rgba(161, 106, 233, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 29px rgba(0, 0, 0, 0.1);
  img {
    width: 250px;
    height: 250px;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
  .text_2 {
    margin-bottom: 100px;
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

const OxResultPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <img
        src={`${process.env.PUBLIC_URL}/yay_15221646.png`}
        alt="Brain_icon"
      />
      <h4>Congrats!</h4>
      <p>You've mastered</p>
      <p className="text_2">all your wrong answers.</p>

      <BtnWrap>
        <button onClick={() => navigate("/home")}>홈</button>
      </BtnWrap>
    </Wrapper>
  );
};

export default OxResultPage;
