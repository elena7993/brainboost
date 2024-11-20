// import dummyQuizData from "./dummyQuizData";

const BASE_URL = "https://opentdb.com/api.php";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchQuizData = async (category, difficulty) => {
  const cacheKey = `quiz-${category}-${difficulty}`;
  const cachedData = localStorage.getItem(cacheKey);
  // console.log(cachedData); 값없음

  if (cachedData) {
    try {
      return JSON.parse(cachedData);
    } catch (error) {
      console.error("error", error);
      localStorage.removeItem(cacheKey);
    }
  }

  const amount = 5;
  const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  console.log("api_url:", url);
  let retries = 3;
  // try {
  //   console.log("기다리고있니");
  //   await delay(7000);
  //   const response = await fetch(url);
  //   if (!response.ok) throw new Error(`Error: ${response.status}`);
  //   const data = await response.json();
  //   localStorage.setItem(cacheKey, JSON.stringify(data.results));
  //   return data.results;
  // } catch (error) {
  //   console.log("error", error);
  //   return [];
  // }
  while (retries > 0) {
    try {
      console.log("Fetching data from URL:", url);
      await delay(1000); // 1초 대기
      const response = await fetch(url);

      if (response.status === 429) throw new Error("Too Many Requests");
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      console.log("API Response Data:", data);

      if (!data.results || data.results.length === 0) {
        console.warn("No data available for the given parameters.");
        return []; // 빈 데이터 반환
      }

      localStorage.setItem(cacheKey, JSON.stringify(data.results));
      console.log("Cached Data Saved:", localStorage.getItem(cacheKey)); // 캐시 확인
      return data.results;
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      if (retries === 1 || !error.message.includes("Too Many Requests")) {
        return []; // 실패 시 빈 배열 반환
      }
      retries--;
      console.log(`Retrying... (${3 - retries}/3)`);
      await delay(1000); // 재시도 전 추가 딜레이
    }
  }
};

// export const fetchQuizData = async (category, difficulty) => {
//   console.log("Using dummy data");
//   return dummyQuizData;
// };

export const fetchCategories = async () => {
  const CATEGORY_URL = `${BASE_URL.replace("/api.php", "")}/api_category.php`;
  try {
    const response = await fetch(CATEGORY_URL);
    const data = await response.json();
    console.log(data);
    return data.trivia_categories;
  } catch (error) {
    console.log("error", error);
    return []; // 오류 발생 시 빈 배열 반환하도록!
  }
};

// data 값없음!
