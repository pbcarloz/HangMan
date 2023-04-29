import { useState } from "react"
import words from "./wordList.json"
import './App.styles.css'
import { HangmanDrwaing } from "./components/HangmanDrawing/HangmanDrawing.component";
import { HangmanWord } from "./components/HangmanWord/HangmanWord.component";
import { Keyboard } from "./components/Keyboard/Keyboard.component";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    // obtain a random number between 0 -1 and multiply it by the lenght of my wordlist, then take it and round it down
    return words[Math.floor(Math.random() * words.length)]
  });

  // Store letters we have guessed, typing string
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  console.log(wordToGuess);

  return <div className="main-container">
    <div className="main-title">
      Lose Win
    </div>
    <HangmanDrwaing numberOfGuesses={incorrectLetters.length} />
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
    <div className="key-wrappers">
      <Keyboard />
    </div>

  </div>

}

export default App
