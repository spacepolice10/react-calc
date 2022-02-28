import { Typography } from "antd"

const { Title } = Typography

const AppPicker = () => {
    return (
        <div>
            <div id="arrow" style={{fontSize: '36px'}}>^</div>
            <Title>Choose an app</Title>
        </div>
    )
}

export default AppPicker