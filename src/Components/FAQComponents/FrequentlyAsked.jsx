import { useEffect, useState } from "react";
import QuestionList from "./QuestionList";

const FrequentlyAsked = () => {
  const [show, setShow] = useState("");
  const URL = "data/AllQuestions.json";
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const resp = await fetch(URL);
        const data = await resp.json();
        setQuestions(data);
      } catch (error) {
        alert(error);
      }
    };
    getQuestions();
  }, []);
  return (
    <section className="max-w-7xl mx-auto py-32">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">F.A.Q</h2>
        <h2 className="text-6xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
        <p>
          Here you can find answers on frequently asked questions. If you cannot
          find the answer , feel free to contact us via email or phone.
        </p>
      </div>
      <div className="flex flex-col gap-7 mt-10">
        {questions.map((value) => (
          <QuestionList
            key={value.qId}
            question={value.question}
            answer={value.answer}
            setShow={setShow}
            show={show}
          />
        ))}
      </div>
    </section>
  );
};
export default FrequentlyAsked;
