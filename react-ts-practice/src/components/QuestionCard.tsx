import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p>Question Card</p>
      <p className="number">
        Question : {questionNr} / {totalQuestions}
      </p>
      <div>
        {answers.map((answer) => (
          <p>{userAnswer}</p>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
