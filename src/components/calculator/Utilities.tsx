import { Row, Col, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { add, clear, remove } from '../../redux/addNumberSlice'

const style = { margin: '5px', width: '65px', height: '65px' }

const Utilities = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Row>
                <Col span={6}>
                    <Button
                        onClick={() => {
                            dispatch(clear())
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        AC
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        disabled
                        onClick={() => {
                            dispatch(add('-'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        ^
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        disabled
                        onClick={() => {
                            dispatch(add('/'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        %
                    </Button>
                </Col>
                <Col span={6}>
                    <Button
                        onClick={() => {
                            dispatch(remove('Backspace'))
                        }}
                        style={style}
                        shape="circle"
                        size="large"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Utilities
