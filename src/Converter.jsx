import { ClockCircleOutlined, CopyrightOutlined, DollarOutlined, ExpandAltOutlined } from "@ant-design/icons"
import { Radio, Tooltip } from "antd"
import { useState } from "react"
import DistanceConverter from "./components/converter/DistanceConverter"
import MoneyConverter from "./components/converter/MoneyConverter"
import Error from "./components/Error"

const style = {margin: '5px'}

const Converter = () => {
    const [metrics, setMetrics] = useState()
    let screen = <MoneyConverter />
    switch (metrics) {
        case 'money': screen = <MoneyConverter />; break
        case 'distances': screen = <DistanceConverter />; break
        case 'degrees': screen = <Error />; break
        case 'time': screen = <Error />; break
    }
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Radio.Group onChange={(e) => {setMetrics(e.target.value)}} defaultValue="a">
                    <Tooltip placement="bottom" title="Convert money">
                        <Radio.Button style={style} value="money"><DollarOutlined /></Radio.Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Convert distances">
                        <Radio.Button style={style} value="distances"><ExpandAltOutlined /></Radio.Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Convert degrees">
                        <Radio.Button style={style} value="degrees"><CopyrightOutlined /></Radio.Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title="Convert time">
                        <Radio.Button style={style} value="time"><ClockCircleOutlined /></Radio.Button>
                    </Tooltip>
                </Radio.Group>
                {screen}
            </div>
        </>
    )
}

export default Converter