import { Row, Col, Button } from "antd"
import { useDispatch } from 'react-redux'
import { add, count } from '../redux/addNumberSlice'
const style={margin: '5px'}

const Expressions = () => {
    const dispatch = useDispatch()
    return (
        <div>
        <Row>
            <Col span={24}>
                <Button onClick={() => {dispatch(add('+'))}} style={style} shape="circle" size="large">+</Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button onClick={() => {dispatch(add('-'))}} style={style} shape="circle" size="large">-</Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button onClick={() => {dispatch(add('/'))}} style={style} shape="circle" size="large">/</Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button onClick={() => {dispatch(add('*'))}} style={style} shape="circle" size="large">*</Button>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button onClick={() => {dispatch(count())}} style={style} shape="circle" size="large">=</Button>
            </Col>
        </Row>
        </div>
    )
}

export default Expressions