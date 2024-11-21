import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  padding: 100px ${mainStyle.Padding_main};
  /* border-radius: 15px; */
  background: rgb(248, 243, 255);
  background: linear-gradient(
    -20deg,
    rgba(248, 243, 255, 1) 0%,
    rgba(174, 131, 255, 1) 52%,
    rgba(133, 107, 254, 1) 100%
  );
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h3 {
    font-size: 52px;
    font-weight: 800;
    color: #fff;
    span {
      margin-left: 10px;
    }
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 100px;
    transform: rotate(90deg);
  }

  button {
    all: unset;
    width: 300px;
    height: 50px;
    background-color: rgba(161, 106, 233, 0.6);
    font-size: 22px;
    font-weight: 500;
    color: #fff;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
`;

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Wrapper>
      <Wrap>
        <h3>
          <span>Brain</span>
          <br />
          Boost
        </h3>
        <img
          src={`${process.env.PUBLIC_URL}/brain_3058773.png`}
          alt="Brain_icon"
        />
        <button onClick={handleClick}>START</button>
      </Wrap>
    </Wrapper>
  );
};

export default Main;
