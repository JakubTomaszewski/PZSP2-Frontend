import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";
import Question from "./components/Question";

const questions = [
  {
    id: 1,
    text: "Gdzie urodził się Kopernik?",
    answers: ["w Warszawie", "w Grańsku", "w Berlinie", "w Toruniu"],
  },
  {
    id: 2,
    text: "Gdzie mieszka Papież?",
    answers: ["w Warszawie", "w Watykanie", "w Berlinie", "w Toruniu"],
  },
  {
    id: 3,
    text: "Ile voltów mamy w gniazdku?",
    answers: ["230", "50", "1000", "2"],
  },
];

function App() {
  return (
    <div className="questions">
      <h2>Questions</h2>
      <Questions questions={questions} />
      {/* <Question />
      <Question />
      <Question /> */}
    </div>
  );
}

export default App;
