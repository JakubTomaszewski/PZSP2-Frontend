import {useDrop} from "react-dnd";

const ChosenQuestions = () => {
    const [{}, dropRef] = useDrop({
        accept: 'question',
        drop: (item) => {
            console.log(item)
        }
    })

    return (
        <div className='dropArea' ref={dropRef}>
            <h2> Utwórz test </h2>
        </div>
    )
}

export default ChosenQuestions