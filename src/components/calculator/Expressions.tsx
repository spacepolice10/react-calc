import { Row, Col, Button } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { draggedState, droppedState, fixDrop } from '../../redux/addMemorySlice'
import { add, count } from '../../redux/addNumberSlice'

const style = {
    margin: '5px',
    width: '65px',
    height: '65px',
    overflow: 'hidden',
}

const Expressions = () => {
    // These states indicating the drop status of every expression button. They affect visuals of the buttons
    const [plusIsEntered, setPlusIsEntered] = useState(false)
    const [minusIsEntered, setMinusIsEntered] = useState(false)
    const [divideIsEntered, setDivideIsEntered] = useState(false)
    const [multiplyIsEntered, setMultiplyIsEntered] = useState(false)
    const dispatch = useDispatch()
    const dragged = useSelector(draggedState)
    const dropped = useSelector(droppedState)
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Button
                        onDragEnter={(e) => {
                            const target = e.target as HTMLElement
                            dispatch(fixDrop(target.children[0].innerHTML))
                            setPlusIsEntered(true)
                        }}
                        onDragLeave={() => {
                            setPlusIsEntered(false)
                        }}
                        onClick={() => {
                            dispatch(add('+'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        <span className={plusIsEntered ? 'entered' : 'left'}>
                            +
                        </span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button
                        onDragEnter={(e) => {
                            const target = e.target as HTMLElement
                            dispatch(fixDrop(target.children[0].innerHTML))
                            setMinusIsEntered(true)
                        }}
                        onDragLeave={() => {
                            setMinusIsEntered(false)
                        }}
                        onClick={() => {
                            dispatch(add('-'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        <span className={minusIsEntered ? 'entered' : 'left'}>
                            -
                        </span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button
                        onDragEnter={(e) => {
                            const target = e.target as HTMLElement
                            dispatch(fixDrop(target.children[0].innerHTML))
                            setDivideIsEntered(true)
                        }}
                        onDragLeave={() => {
                            setDivideIsEntered(false)
                        }}
                        onClick={() => {
                            dispatch(add('/'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        <span className={divideIsEntered ? 'entered' : 'left'}>
                            /
                        </span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button
                        onDragEnter={(e) => {
                            const target = e.target as HTMLElement
                            dispatch(fixDrop(target.children[0].innerHTML))
                            setMultiplyIsEntered(true)
                        }}
                        onDragLeave={() => {
                            setMultiplyIsEntered(false)
                        }}
                        onClick={() => {
                            dispatch(add('*'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        <span
                            className={multiplyIsEntered ? 'entered' : 'left'}
                        >
                            *
                        </span>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Expressions
