import "./App.css";
import { useState } from "react";

function App() {
  const [exactPhrases, setExactPhrases] = useState([
    "internship",
    "undergraduate",
  ]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log("do validate");
      setExactPhrases((oldArray) => [...oldArray, e.target.value]);
      console.log({ exactPhrases });
    }
  }

  function handleClick(index) {
    console.log(index);
    setExactPhrases((oldArray) =>
      exactPhrases.filter((phrase) => phrase != exactPhrases[index])
    );
  }

  return (
    <div className="flex flex-col	w-full items-center justify-center min-h-screen text-center my-auto">
      <div className="flex flex-row gap-10 my-10">
        <div className="flex flex-col justify-start items-start">
          <label>Exact Phrases</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label>Excluded Words</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      {/* <div className="flex flex-col justify-start items-start">
          <label>Excluded Words</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onChange={(e) => setSpecificPhrase(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label>Specific Sites</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onChange={(e) => setSpecificPhrase(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label>Similar</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onChange={(e) => setSpecificPhrase(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label>Before</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onChange={(e) => setSpecificPhrase(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <label>After</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
            onChange={(e) => setSpecificPhrase(e.target.value)}
          />
        </div> */}

      <div className="flex flex-row">
        {exactPhrases.map((exactPhrase, index) => {
          return (
            <p
              key={index}
              className="hover:cursor-pointer"
              onClick={(e) => handleClick(index)}
            >
              "{exactPhrase}"&nbsp;
            </p>
          );
        })}
        {/* <h1>{exactPhrases[1]}</h1> */}
      </div>
    </div>
  );
}

export default App;
