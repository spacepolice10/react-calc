import { ClockCircleOutlined, CopyrightOutlined, DollarOutlined, ExpandAltOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"

const style = {margin: '5px', width: '65px', height: '65px'}

const Converter = () => {
    return (
        <>
            <div>
                <Tooltip placement="bottom" title="Convert currencies">
                    <Button style={style} shape="circle" type="primary" icon={<DollarOutlined style={{fontSize: '30px'}} />}></Button>
                </Tooltip>
                <Tooltip placement="bottom" title="Convert distances">
                    <Button style={style} shape="circle" type="primary" icon={<ExpandAltOutlined style={{fontSize: '30px'}} />}></Button>
                </Tooltip>
                <Tooltip placement="bottom" title="Convert degrees">
                    <Button style={style} shape="circle" type="primary" icon={<CopyrightOutlined style={{fontSize: '30px'}} />}></Button>
                </Tooltip>
                <Tooltip placement="bottom" title="Convert time">
                    <Button style={style} shape="circle" type="primary" icon={<ClockCircleOutlined style={{fontSize: '30px'}} />}></Button>
                </Tooltip>
            </div>
        </>
    )
}

export default Converter