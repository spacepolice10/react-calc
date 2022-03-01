import { Divider, Tooltip, Typography } from "antd"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { inputState, count, remove, add } from "../../redux/addNumberSlice"

const { Title } = Typography

const HiddenInput = ({ numbers }) => {
    const dispatch = useDispatch()
    const changeInput = (event) => {
        if (event.key == 'Enter') { dispatch(count()) }
        if (event.key == 'Backspace') { dispatch(remove(event.key)); return }
        if (!/[\d]/.test(event.key) && !/[\+\-\/\*]/.test(event.key)) { return }
        dispatch(add(event.key))
    }
    useEffect(() => {
        input.focus()
    })
    return (
        <input
            style={{ position: 'absolute', opacity: '0%', pointerEvents: 'none' }}
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Title onClick={() => { input.focus() }}>
                        {numbers}
                    </Title>
                    <Divider id="caret" style={{ backgroundColor: '#0086FF', height: '42px', width: '2px', marginBottom: '14px' }} type="vertical" />
                </div>
            </Tooltip>
            <HiddenInput numbers={numbers} />
        </>
    )
}

export default Input