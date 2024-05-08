import "./styles.css";
import { useState } from "react";
import findEmotion from "./helperFunction";
import Gifs from "./Gifs";
import Buttons from "./Buttons";

export default function App() {
  const [feeling, setFeeling] = useState(
    window.localStorage.getItem("feeling") || "fine-dog.png",
  );
  const [careType, setCareType] = useState("");

  const thirtyMinutes = 30 * 60 * 1000;
  setInterval(() => {
    window.localStorage.setItem("feeling", "sad-dog.png");
    setFeeling("sad-dog.png");
    setCareType("");
  }, thirtyMinutes);

  const oneHour = 60 * 60 * 1000;
  setInterval(function () {
    window.localStorage.setItem("feeling", "distressed-dog.png");
    setFeeling("distressed-dog.png");
    setCareType("");
  }, oneHour);

  return (
    <div className="App">
      <h1>Help Yuri feel better by taking care of her!</h1>
      <p>Engage and care for Yuri to see how she reacts.</p>
      <div className="current-feeling-flex">
        <h3 className="toast">{`Yuri currently feels ${findEmotion(
          feeling,
        )}`}</h3>
      </div>
      <img alt={`Dog feeling ${feeling}`} src={`/images/${feeling}`} />
      <Gifs careType={careType} />
      <br />
      <Buttons setCareType={setCareType} setFeeling={setFeeling} />
    </div>
  );
}
