import { Divider, Tooltip, Typography } from "antd"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { inputState, resultState, count, remove, add } from "../../redux/addNumberSlice"
import { drop, fixDrag } from "../../redux/addMemorySlice"

const { Title } = Typography

const HiddenInput = ({ setIsFocus }) => {
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
            onBlur={() => { setIsFocus(false) }}
            onKeyDown={changeInput}
            id="input"
        />
    )
}

const Input = () => {
    const [isFocused, setIsFocus] = useState(true);
    const dispatch = useDispatch()
    const numbers = useSelector(inputState)
    const result = useSelector(resultState)
    return (
        <>
            <div style={{ width: '100%', maxWidth: 280, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Tooltip placement="bottom" title={<span>You can use keyboard instead of buttons on the screen</span>}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Title onClick={(e) => { input.focus(); setIsFocus(true) }}>
                            {numbers}
                        </Title>
                        {isFocused &&
                            <Divider 
                                id="caret" 
                                style={{ backgroundColor: '#0086FF', height: '42px', width: '2px', marginBottom: '14px' }} 
                                type="vertical" 
                            />
                        }
                    </div>
                </Tooltip>
                <Title 
                    draggable={true} 
                    onDragStart={(e) => {
                        dispatch(fixDrag({id: e.target.id, data: e.target.innerHTML}))
                    }} 
                    onDragEnd={() => dispatch(drop())}
                    className="appear" 
                    style={{ color: '#0086FF' }}
                >
                    {result}
                </Title>
            </div>
            <HiddenInput setIsFocus={setIsFocus} />
        </>
    )
}

export default Input