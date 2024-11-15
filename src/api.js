export const fetchQuizData = async () => {
  const amount = 10;
  const baseUrl = "https://opentdb.com/api.php";
  const url = `${baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}`;
  try {
    const response = await fetch();
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
  }
};
