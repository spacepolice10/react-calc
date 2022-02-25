import { DollarOutlined, ExpandAltOutlined } from "@ant-design/icons"
import { Button } from "antd"

const style = {margin: '5px', width: '65px', height: '65px'}

const Converter = () => {
    return (
        <>
            <div>
                <Button icon={<DollarOutlined />}></Button>
                <Button icon={<ExpandAltOutlined />}></Button>
            </div>
        </>
    )
}

export default Converter