import './HangmanWord.styles.css'

const word = "test"

export function HangmanWord() {
    return <div className="word-container">
        {word.split("").map((letter, index) => (
            <span className='split-word'>
                <span className='status-word'>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}