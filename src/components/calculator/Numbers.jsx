import { Row, Col, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { add, count } from '../../redux/addNumberSlice'
const style = { margin: '5px', width: '65px', height: '65px' }

const Numbers = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Row justify='center'>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('7')) }} style={style} shape='circle' size='large' type='primary'>7</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('8')) }} style={style} shape='circle' size='large' type='primary'>8</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('9')) }} style={style} shape='circle' size='large' type='primary'>9</Button>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('4')) }} style={style} shape='circle' size='large' type='primary'>4</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('5')) }} style={style} shape='circle' size='large' type='primary'>5</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('6')) }} style={style} shape='circle' size='large' type='primary'>6</Button>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('1')) }} style={style} shape='circle' size='large' type='primary'>1</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('2')) }} style={style} shape='circle' size='large' type='primary'>2</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('3')) }} style={style} shape='circle' size='large' type='primary'>3</Button>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('0')) }} style={style} shape='circle' size='large' type='primary'>0</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(add('.')) }} style={style} shape='circle' size='large' type='primary'>.</Button>
                </Col>
                <Col span={8}>
                    <Button onClick={() => { dispatch(count()) }} style={style} shape="circle" size="large">=</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Numbers