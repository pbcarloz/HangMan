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
export function HangmanDrwaing() {
    return <div className="draw-container">
        {head}
        {body}
        {rightArm}
        {leftArm}
        {rightLeg}
        {leftLeg}
        <div className='draw-drop' />
        <div className='draw-top' />
        <div className='draw-vertical' />
        <div className='draw-bottom' />
    </div>
}