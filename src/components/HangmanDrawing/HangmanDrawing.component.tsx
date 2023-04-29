import './HangmanDrawing.style.css'

const head = (
    <div className='draw-head' />
)

const body = (
    <div className='draw-body' />
)

const rightArm = (
    <div className='draw-rightarm' />
)
const leftArm = (
    <div className='draw-leftarm' />
)

const rightLeg = (
    <div className='draw-rightleg' />
)

const leftLeg = (
    <div className='draw-leftleg' />
)

const BODY_PARTS = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrwaing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div className="draw-container">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className='draw-drop' />
        <div className='draw-top' />
        <div className='draw-vertical' />
        <div className='draw-bottom' />
    </div>
}