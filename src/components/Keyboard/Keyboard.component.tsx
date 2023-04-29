import './Keyboard.styles.css'

const KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

type KeyboardProps = {
    disabled: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false, }: KeyboardProps) {
    return <div className="keyboard-container">
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return (
                <button onClick={() => addGuessedLetter(key)} className={
                    `${isActive ? "button-styled-active" : "button-styled"} 
                     ${isInactive ? "button-styled-inactive" : "button-styled"}`}
                    disabled={isActive || isInactive || disabled}
                    key={key}>
                    {key}
                </button>
            )
        })}
    </div>
}