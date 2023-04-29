import './Keyboard.styles.css'

const KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

export function Keyboard() {
    return <div className="keyboard-container">
        {KEYS.map(key => {
            return (
                <button className='button-styled' key={key}>{key}</button>
            )
        })}
    </div>
}