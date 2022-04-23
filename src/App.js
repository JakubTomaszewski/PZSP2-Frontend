import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/Questions";

const questions = [
  {
    id: 1,
    courseCode: "A04",
    type: "c",
    text: "Gdzie urodził się Kopernik?",
    teacherId: 1,
    answers: ["w Warszawie", "w Gdańsku", "w Berlinie", "w Toruniu"],
    areCorrect: [false, false, false, true],
  },
  {
    id: 2,
    courseCode: "A04",
    type: "c",
    text: "Gdzie mieszka Papież?",
    teacherId: 1,
    answers: ["w Warszawie", "w Watykanie", "w Berlinie", "w Toruniu"],
    areCorrect: [false, true, false, false],
  },
  {
    id: 3,
    courseCode: "A04",
    type: "c",
    text: "Ile voltów mamy w gniazdku?",
    teacherId: 1,
    answers: ["230", "50", "1000", "2"],
    areCorrect: [true, false, false, false],
  },
];

function App() {
  return (
    <div className="App">
      <div className="container tags-box"></div>
      <div className="container questions">
        <header className="header">
          <h2>Questions</h2>
          <button className="add-question-button btn">Add</button>
        </header>
        <Questions questions={questions} />
      </div>
    </div>
  );
}

export default App;
