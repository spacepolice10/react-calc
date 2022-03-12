import { Divider, Tooltip, Typography } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    inputState,
    resultState,
    count,
    remove,
    add,
} from '../../redux/addNumberSlice'
import { drop, fixDrag } from '../../redux/addMemorySlice'

const { Title } = Typography

interface DraggableElement {
    id: string
    data: string
    target: HTMLElement
}

interface Props {
    setIsFocus: Function
}

const HiddenInput = (props: Props) => {
    const inputElement = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const changeInput = (e: React.KeyboardEvent) => {
        if (encodeURI(e.key) == 'Enter') {
            dispatch(count())
        }
        if (e.key == 'Backspace') {
            dispatch(remove(e.key))
            return
        }
        if (!/[\d]/.test(e.key) && !/[\+\-\/\*]/.test(e.key)) {
            return
        }
        dispatch(add(e.key))
    }
    useEffect(() => {
        if (inputElement && inputElement.current) inputElement.current.focus()
    })
    return (
        <input
            style={{
                position: 'absolute',
                opacity: '0%',
                pointerEvents: 'none',
            }}
            onBlur={() => {
                props.setIsFocus(false)
            }}
            onKeyDown={changeInput}
            id="input"
            ref={inputElement}
        />
    )
}

const Input = () => {
    const [isFocused, setIsFocus] = useState(true)
    const inputElement = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const numbers = useSelector(inputState) as string
    const result = useSelector(resultState) as string
    return (
        <>
            <div
                style={{
                    width: '100%',
                    maxWidth: 280,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Tooltip
                    placement="bottom"
                    title={
                        <span>
                            You can use keyboard instead of buttons on the
                            screen
                        </span>
                    }
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Title
                            onClick={(e) => {
                                if (inputElement && inputElement.current)
                                    inputElement.current.focus()
                                setIsFocus(true)
                            }}
                        >
                            {numbers}
                        </Title>
                        {isFocused && (
                            <Divider
                                className="caret"
                                style={{
                                    backgroundColor: '#0086FF',
                                    height: '42px',
                                    width: '2px',
                                    marginBottom: '14px',
                                }}
                                type="vertical"
                            />
                        )}
                    </div>
                </Tooltip>
                <Title
                    // @ts-ignore
                    // Here's the error connected with Ant Design library (it doesn't know about 'draggable'), so i ignored it
                    draggable={true}
                    onDragStart={(e: DraggableElement) => {
                        if (e.target) {
                            dispatch(
                                fixDrag({
                                    id: e.target.id,
                                    data: e.target.innerHTML,
                                })
                            )
                        }
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
