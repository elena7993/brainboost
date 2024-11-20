// import dummyQuizData from "./dummyQuizData";

// const BASE_URL = "https://opentdb.com/api.php";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// export const fetchQuizData = async (category, difficulty) => {
//   const cacheKey = `quiz-${category}-${difficulty}`;
//   const cachedData = localStorage.getItem(cacheKey);

//   console.log("Category:", category, "Difficulty:", difficulty);
//   console.log("Cached Data:", cachedData);

//   if (cachedData) {
//     try {
//       return JSON.parse(cachedData);
//     } catch (error) {
//       console.error("Error parsing cached data:", error);
//       localStorage.removeItem(cacheKey); // 잘못된 캐시 삭제
//     }
//   }

//   const amount = 5;
//   const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
//   let retries = 3;

//   while (retries > 0) {
//     try {
//       console.log("Fetching data from URL:", url);
//       await delay(1000);
//       const response = await fetch(url);

//       console.log("Response Status:", response.status); // 상태 코드 확인
//       if (response.status === 429) throw new Error("Too Many Requests");
//       if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

//       const data = await response.json();
//       console.log("Full API Response:", data);

//       if (!data.results || data.results.length === 0) {
//         console.warn("No data available for the given parameters.");
//         return [];
//       }

//       localStorage.setItem(cacheKey, JSON.stringify(data.results));
//       console.log("Cached Data Saved:", localStorage.getItem(cacheKey));
//       return data.results;
//     } catch (error) {
//       console.error("Error fetching quiz data:", error);
//       if (retries === 1 || !error.message.includes("Too Many Requests")) {
//         return [];
//       }
//       retries--;
//       console.log(`Retrying... (${3 - retries}/3)`);
//       await delay(1000); // 재시도 전 추가 딜레이
//     }
//   }
// };

// export const fetchCategories = async () => {
//   const CATEGORY_URL = `${BASE_URL.replace("/api.php", "")}/api_category.php`;
//   try {
//     console.log("Fetching categories from URL:", CATEGORY_URL);
//     const response = await fetch(CATEGORY_URL);

//     console.log("Category Response Status:", response.status); // 상태 코드 확인
//     if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

//     const data = await response.json();
//     console.log("Fetched Categories:", data);
//     return data.trivia_categories;
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// const BASE_URL = "https://opentdb.com/api.php";

// // 딜레이 함수 (429 Too Many Requests 방지)
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// /**
//  * 퀴즈 데이터를 가져오는 함수
//  * @param {number} category - 퀴즈 카테고리 ID
//  * @param {string} difficulty - 난이도 (easy, medium, hard)
//  * @param {number} amount - 가져올 퀴즈 수 (기본값: 5)
//  * @returns {Array} 퀴즈 데이터 배열
//  */
// export const fetchQuizData = async (category, difficulty, amount = 5) => {
//   const cacheKey = `quiz-${category}-${difficulty}`;
//   const cachedData = localStorage.getItem(cacheKey);

//   // 캐시 데이터 확인 및 반환
//   if (cachedData) {
//     try {
//       console.log("Using cached data");
//       return JSON.parse(cachedData);
//     } catch (error) {
//       console.error("Error parsing cached data:", error);
//       localStorage.removeItem(cacheKey);
//     }
//   }

//   // API 요청 URL 생성
//   const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
//   console.log("API URL:", url); // 디버깅용

//   try {
//     await delay(1000); // 요청 간 딜레이 추가 (1초)
//     const response = await fetch(url);

//     // 응답 상태 확인
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("API Response:", data);

//     // 데이터 유효성 확인
//     if (!data.results || data.results.length === 0) {
//       console.warn("No quiz data available for the given parameters.");
//       return [];
//     }

//     // 데이터 캐싱 후 반환
//     localStorage.setItem(cacheKey, JSON.stringify(data.results));
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching quiz data:", error);
//     return [];
//   }
// };

// /**
//  * 카테고리 데이터를 가져오는 함수
//  * @returns {Array} 카테고리 데이터 배열
//  */
// export const fetchCategories = async () => {
//   const CATEGORY_URL = `${BASE_URL.replace("/api.php", "")}/api_category.php`;

//   try {
//     console.log("Fetching categories from URL:", CATEGORY_URL);
//     const response = await fetch(CATEGORY_URL);

//     // 응답 상태 확인
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Fetched Categories:", data);

//     return data.trivia_categories || [];
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

const BASE_URL = "https://opentdb.com/api.php";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 퀴즈 데이터를 가져오는 함수
 * @param {number} category - 퀴즈 카테고리 ID
 * @param {string} difficulty - 난이도 (easy, medium, hard)
 * @param {number} amount - 가져올 퀴즈 수 (기본값: 5)
 * @returns {Promise<Array>} 퀴즈 데이터 배열
 */
export const fetchQuizData = async (category, difficulty, amount = 5) => {
  const url = `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  console.log("API URL:", url);

  try {
    await delay(7000); // 요청 간 7초 딜레이
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch quiz data. HTTP Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Full API Response:", data);

    if (
      data.response_code === 2 ||
      !data.results ||
      data.results.length === 0
    ) {
      console.warn(
        "No data available for the given parameters. Trying default parameters..."
      );
      // 기본 카테고리와 난이도로 재시도
      return fetchQuizData(9, "easy", amount); // General Knowledge, easy
    }

    return data.results; // 유효한 데이터 반환
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
};

/**
 * 카테고리 데이터를 가져오는 함수
 * @returns {Promise<Array>} 카테고리 데이터 배열
 */
export const fetchCategories = async () => {
  const CATEGORY_URL = `${BASE_URL.replace("/api.php", "")}/api_category.php`;
  console.log("Fetching categories from URL:", CATEGORY_URL);

  try {
    const response = await fetch(CATEGORY_URL);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories. HTTP Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Fetched Categories:", data);

    return data.trivia_categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
