import { Typography } from "antd"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { inputState } from "../redux/addNumberSlice"
import { useDispatch } from 'react-redux'
import { remove, add } from '../redux/addNumberSlice'

const { Title } = Typography

const HiddenInput = ({ numbers }) => {
    const dispatch = useDispatch()
    const tryToCount = () => {
        try {
            alert(eval(numbers))
        } catch (e) {
            alert('Incorrect expression. Please, consider changing it')
        }
    }
    const changeInput = (event) => {
        if (event.key == 'Enter') {tryToCount()}
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
        <Title onClick={() => {input.focus()}}>
            {numbers}
        </Title>
        <HiddenInput numbers={numbers} />
    </>
    )
}

export default Input