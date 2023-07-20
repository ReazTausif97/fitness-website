const QuestionList = ({ question, answer, show, setShow }) => {
  return (
    <div
      onClick={() => setShow(show === question ? "" : question)}
      className="flex flex-col gap-4 border-b border-[#67696D] pb-7 cursor-pointer"
    >
      <h2 className="font-bold text-2xl">{question}</h2>
      {show === question && (
        <div className="">
          <p className="text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};
export default QuestionList;
