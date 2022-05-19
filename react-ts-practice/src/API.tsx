export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answer: string[];
  question: string;
  type: string;
};

//correct answer and incorrect answer in one state
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opendb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();

  //   console.log(data);
  return data.results.map((question: Question) => ({
    ...question,
    answer: [question.incorrect_answer, question.correct_answer],
  }));
};
