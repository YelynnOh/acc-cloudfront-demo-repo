import "./App.css";
import mainPicture from "../src/assets/main_pic.png";
import Lottie from "lottie-react";
import confetti from "./assets/confetti.json";

function App() {
  return (
    <main>
      <div>
        <Lottie animationData={confetti} loop={false} />
      </div>
      <div className="content">
        <h1>⛅ 2024년 ACC EWHA도 화이팅 ⛅</h1>
        <img src={mainPicture} alt="mainPicture" width="600px" />
      </div>
      <div>
        <Lottie animationData={confetti} loop={false} />
      </div>
    </main>
  );
}

export default App;
