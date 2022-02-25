import { Row, Col, Button, Space } from 'antd'

const style={margin: '5px'}

const Numbers = () => {
    return (
    <div>
        <Row justify='center'>
            <Col span={8}>
                <Button style={style} shape='circle'>7</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>8</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>9</Button>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Button style={style} shape='circle'>4</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>5</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>6</Button>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <Button style={style} shape='circle'>1</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>2</Button>
            </Col>
            <Col span={8}>
                <Button style={style} shape='circle'>3</Button>
            </Col>
        </Row>
        <Row>
            <Col span={12}>
                <Button style={style} shape='circle'>0</Button>
            </Col>
        </Row>
    </div>
    )
}

export default Numbers