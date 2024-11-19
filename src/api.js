const BASE_URL = "https://opentdb.com/api";

export const fetchQuizData = async (category, difficulty) => {
  const amount = 10;
  const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchCategories = async () => {
  const url = `${BASE_URL}_category.php`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.log("Error fetching categories:", error);
    return []; // 오류 발생 시 빈 배열 반환하도록!
  }
};
