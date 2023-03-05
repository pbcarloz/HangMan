import { useState } from "react"
import words from "./wordList.json"
import './App.styles.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // obtain a random number between 0 -1 and multiply it by the lenght of my wordlist, then take it and round it down
    return words[Math.floor(Math.random() * words.length)]
  });

  // Store letters we have guessed, typing string
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  console.log(wordToGuess);

  return <div className="main-container">
    <div className="main-title">
      Hello
    </div>
  </div>

}

export default App
