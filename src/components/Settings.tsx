import { Menu } from 'antd'
import {
    SettingOutlined,
    CalculatorOutlined,
    MergeCellsOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

const Settings = () => {
    return (
        <Menu style={{ borderRadius: '10px' }}>
            <SubMenu
                key="sub1"
                icon={<SettingOutlined />}
                title="Settings"
                style={{ borderRadius: '10px' }}
            >
                <Menu.Item key="1" icon={<CalculatorOutlined />}>
                    <Link to="/calculator">Switch to calculator</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<MergeCellsOutlined />}>
                    <Link to="/converter">Switch to converter</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<SettingOutlined />}>
                    <Link to="/settings">Options</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Settings
