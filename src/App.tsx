import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import './App.styles.css'
import { HangmanDrwaing } from "./components/HangmanDrawing/HangmanDrawing.component";
import { HangmanWord } from "./components/HangmanWord/HangmanWord.component";
import { Keyboard } from "./components/Keyboard/Keyboard.component";


function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  // obtain a random number between 0 -1 and multiply it by the lenght of my wordlist, then take it and round it down
  const [wordToGuess, setWordToGuess] = useState(getWord);

  // Store letters we have guessed, typing string
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner)
        return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }


    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }


    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  console.log(wordToGuess);


  return <div className="main-container">
    <div className="main-title">
      {isWinner && "Win! Refresh to Try Again"}
      {isLoser && "Nice try! Refresh to Try Again"}
    </div>
    <HangmanDrwaing
      numberOfGuesses={incorrectLetters.length} />
    <HangmanWord
      reveal={isLoser}
      guessedLetters={guessedLetters}
      wordToGuess={wordToGuess} />
    <div className="key-wrappers">
      <Keyboard
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isWinner || isLoser}
      />
    </div>

  </div>

}

export default App

