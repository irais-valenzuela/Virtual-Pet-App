const Buttons = ({ setCareType, setFeeling }) => {
  const handleClick = (care) => {
    window.localStorage.removeItem("feeling");
    setCareType(care);
    if (care === "cuddles") {
      setFeeling("happier-dog.png");
    } else if (care === "water") {
      setFeeling("fine-dog.png");
    } else if (care === "words-of-affirmation") {
      setFeeling("happier-dog.png");
    }
  };

  return (
    <div>
      <button className="button" onClick={() => handleClick("cuddles")}>
        Cuddles
      </button>
      <button className="button" onClick={() => handleClick("water")}>
        Drink water
      </button>
      <button onClick={() => handleClick("words-of-affirmation")}>
        Offer words of encouragement
      </button>
    </div>
  );
};

export default Buttons;
