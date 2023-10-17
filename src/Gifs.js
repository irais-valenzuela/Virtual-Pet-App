const Gifs = ({ careType }) => {
  return (
    <div>
      {careType === "water" ? (
        <iframe
          src="https://giphy.com/embed/J2guaXC4kr0qnEteNe"
          width="32"
          height="48"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      ) : careType === "cuddles" || careType === "words-of-affirmation" ? (
        <iframe
          src="https://giphy.com/embed/2voGcsEiAQUc2kn4sA"
          width="48"
          height="45"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      ) : careType === "" ? (
        ""
      ) : (
        ""
      )}
    </div>
  );
};

export default Gifs;
