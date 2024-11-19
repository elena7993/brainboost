import dummyQuizData from "./dummyQuizData";

const BASE_URL = "/api.php";

// export const fetchQuizData = async (category, difficulty) => {
//   const cacheKey = `quiz-${category}-${difficulty}`;
//   const cachedData = localStorage.getItem(cacheKey);

//   if (cachedData) {
//     return JSON.parse(cachedData); // 캐시된 데이터 사용
//   }

//   const amount = 1;
//   const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error(`Error: ${response.status}`);
//     const data = await response.json();
//     localStorage.setItem(cacheKey, JSON.stringify(data.results));
//     return data.results;
//   } catch (error) {
//     console.log("error", error);
//     return [];
//   }
// };

export const fetchQuizData = async (category, difficulty) => {
  console.log("Using dummy data");
  return dummyQuizData;
};

export const fetchCategories = async () => {
  const CATEGORY_URL = `${BASE_URL.replace("/api.php", "")}/api_category.php`;
  try {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.log("error", error);
    return []; // 오류 발생 시 빈 배열 반환하도록!
  }
};
