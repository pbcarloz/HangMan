import './HangmanWord.styles.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {

    return <div className="word-container">
        {wordToGuess.split("").map((letter, index) => (
            <span className='split-word' key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}