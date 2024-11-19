import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../api";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 425px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px ${mainStyle.Padding_main};
  border-radius: 15px;
  background-color: #f5edfe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 32px;
    font-weight: 800;
    align-self: flex-start;
  }
`;

const LevelWrap = styled.div`
  margin: 20px 0 30px 0;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .levelBox {
    display: flex;
    justify-content: space-between;
    button {
      all: unset;
      width: 124px;
      height: 37px;
      border: 1px solid rgba(161, 106, 233, 0.5);
      border-radius: 25px;
      font-size: 16px;
      background-color: #fff;
      text-align: center;
      cursor: pointer;
    }
    button.active {
      background-color: #a16ae9;
      opacity: 0.5;
      color: #fff;
    }
  }
`;

const CategoryWrap = styled.div`
  margin-bottom: 30px;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .categorybox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    button {
      all: unset;
      width: 124px;
      height: 82px;
      border: 1px solid rgba(161, 106, 233, 0.5);
      border-radius: 10px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      cursor: pointer;
    }
    button.active {
      background-color: #a16ae9;
      opacity: 0.5;
      color: #fff;
    }
  }
`;

const ViewMoreBtn = styled.button`
  all: unset;
  color: #7518fa;
  opacity: 0.7;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-self: flex-end;
  cursor: pointer;
`;

const QuizBtn = styled.button`
  width: 390px;
  height: 110px;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: none;
  border-radius: 15px;
  background: rgb(117, 24, 250);
  background: linear-gradient(
    49deg,
    rgba(117, 24, 250, 1) 0%,
    rgba(186, 56, 250, 1) 100%
  );
  cursor: pointer;
  transition: all 0.3s ease;
  /* &:hover {
    transform: scale(1.05);
  } */

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  &:hover span {
    background: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow 3s linear infinite;
    font-weight: 800;
  }

  img {
    width: 110px;
    height: 110px;
    transition: transform 0.3s ease-in-out;
  }

  @keyframes rainbow {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const OxBtn = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: rgba(161, 106, 233, 0.6);
  margin-top: 30px;
  color: #fff;
  cursor: pointer;
`;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const handleQuizStart = () => {
    if (!selectedLevel) {
      alert("Please select a level!");
      return;
    }
    if (!selectedCategory) {
      alert("Please select a category!");
      return;
    }
    navigate("/quiz", {
      state: { level: selectedLevel, category: selectedCategory },
    });
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  const viewCategories = viewAll ? categories : categories.slice(0, 12);

  return (
    <Wrapper>
      <h3>Welcome!</h3>
      <LevelWrap>
        <h4>Level</h4>
        <div className="levelBox">
          {["Easy", "Medium", "Hard"].map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={selectedLevel === level ? "active" : ""}
            >
              {level}
            </button>
          ))}
        </div>
      </LevelWrap>
      <CategoryWrap>
        <h4>Category</h4>
        <div className="categorybox">
          {viewCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={selectedCategory === category.name ? "active" : ""}
            >
              {category.name}
            </button>
          ))}
        </div>
        {!viewAll && (
          <ViewMoreBtn onClick={() => setViewAll(true)}>View all</ViewMoreBtn>
        )}
      </CategoryWrap>
      <QuizBtn onClick={handleQuizStart}>
        <img
          src={`${process.env.PUBLIC_URL}/awesome_10917529.png`}
          alt="Brain_icon"
        />
        <span>Let's Play Today's Quiz!</span>
      </QuizBtn>
      <OxBtn onClick={() => navigate("/oxnote")}>오답노트</OxBtn>
    </Wrapper>
  );
};

export default Home;
