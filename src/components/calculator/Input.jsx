import { Tooltip, Typography } from "antd"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { inputState, count, remove, add } from "../../redux/addNumberSlice"

const { Title } = Typography

const HiddenInput = ({ numbers }) => {
    const dispatch = useDispatch()
    const changeInput = (event) => {
        if (event.key == 'Enter') {dispatch(count())}
        if (event.key == 'Backspace') {dispatch(remove(event.key)); return}
        if (!/[\d]/.test(event.key) && !/[\+\-\/\*]/.test(event.key)) {return}
        dispatch(add(event.key))
    }
    useEffect(() => {
        input.focus()
    })
    return(
        <input
            style={{position: 'absolute', opacity: '0%', pointerEvents: 'none'}}
            onKeyDown={changeInput}
            id="input" 
        />
    )
}

const Input = () => {
    const numbers = useSelector(inputState)
    return (
    <>
        <Tooltip placement="bottom" title={<span>You can use keyboard instead of buttons on the screen</span>}>

        <Title onClick={() => {input.focus()}}>
            {numbers}
        </Title>
        </Tooltip>
        <HiddenInput numbers={numbers} />
    </>
    )
}

export default Input