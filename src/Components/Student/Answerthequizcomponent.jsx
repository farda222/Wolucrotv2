import { useState } from "react";
import Navbar from "../Student/NavbarStudent";
import BlueWhaleImage from "../../assets/img/Quizquestion.svg";
import Paris from "../../assets/img/Paris.jpeg";
import AccountIcon from "../../assets/img/Account.jpg";
import Iconrepeat from "../../assets/img/Vector.svg";

const Answerthequizcomponent = () => {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      image: Paris,
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which the most danger animal",
      options: ["Elephant", "Tiger", "Lion", "Giraffe"],
      answer: "Lion",
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      id: 4,
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NH3"],
      answer: "H2O",
    },
    {
      id: 5,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Ernest Hemingway", "Harper Lee", "Mark Twain", "Charles Dickens"],
      answer: "Harper Lee",
    },
    {
      id: 6,
      question: "What is that?  ",
      image: BlueWhaleImage,
      options: ["Mountain", "Forest", "Yard", "tree"],
      answer: "Mountain",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const percentageScore = Math.round((score / questions.length) * 100);

  if (showResult) {
    return (
      <div className="font-Jakarta">
        <Navbar />
        <div className="flex justify-center align-middle items-center mx-auto container gap-28 mt-10 ml-1 font-Jakarta lg:mt-28 2xl:mt-32 mb-4">
          <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:ml-60">English XI PPLG 1</h1>
          <div className="relative flex-row -ml-4">
            <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:block lg:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 2
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 flex justify-center px-2">
          <div className="bg-white rounded px-8 py-4 mb-4 flex items-center justify-center gap-6 border border-solid border-neutral-300">
            <img src={AccountIcon} alt="Account Icon" className="w-11 h-11 -ml-3 rounded-full" />
            <h1 className="text-lg font-semibold -ml-2">Alexander Agung</h1>
            <p className="font-semibold mt-1 text-lg ml-4">{percentageScore}/100</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-28">
          <p className="font-semibold">Ranking <span className="text-yellow-500"> 1 </span> / 36</p>
          <p className="font-semibold">Duration 10.5m</p>
        </div>
        <div className="flex justify-center items-center ml-5 mt-10">
          <div className="flex-row-2">
            <button className="px-12 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all flex mr-4" onClick={handleRestartQuiz}>
              <img className="mt-[0.4rem] mr-7" src={Iconrepeat} alt="Repeat Icon" />
              Repeat
            </button>
            <button className="mt-3 px-[4.6rem] font-base py-2 border border-solid border-neutral-500 bg-white text-black rounded hover:bg-indigo-700 hover:border-indigo-600 hover:text-white transition-all flex mr-4">Save</button>
            <button className="mt-3 px-[4.3rem] py-2 border border-solid border-neutral-500 bg-white text-black rounded hover:bg-indigo-700 transition-all flex">Home</button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="font-Jakarta">
      <Navbar />
      <div className="container mx-auto mt-12">
        <div className="flex justify-center align-middle items-center mx-auto container gap-28 mt-1 ml-1 font-Jakarta lg:mt-28 2xl:mt-32 mb-4">
          <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:ml-60">English XI PPLG 1</h1>
          <div className="relative flex-row -ml-4">
            <button className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:block lg:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 2
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-12">
          <p className="h-full ml-10 absolute mt-[1.93rem]">
            {currentQuestion + 1}/{questions.length}
          </p>
          <div className="bg-gray-200 h-2 rounded-full w-44 overflow-hidden mx-auto mb-10 mt-10">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${progress}%`, transition: "width 0.5s ease-in-out" }}></div>
          </div>
        </div>
        {questions[currentQuestion].image && <img src={questions[currentQuestion].image} alt="Question" className="mx-auto mb-4 rounded-lg" style={{ maxWidth: "100%", height: "auto" }} />}
        <h2 className="text-xl font-semibold mb-4 justify-center flex">{questions[currentQuestion].question}</h2>
        <div className="grid grid-row-2 gap-4 px-12">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`py-2 rounded-md  option-button ${selectedOption !== null ? (option === questions[currentQuestion].answer ? "bg-indigo-600 text-white" : "bg-red-500 text-white") : "bg-gray-200"}`}
              disabled={selectedOption !== null}
              onClick={() => handleOptionSelect(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answerthequizcomponent;
