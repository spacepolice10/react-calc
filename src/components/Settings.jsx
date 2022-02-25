import { Menu } from 'antd';
import { SettingOutlined, CalculatorOutlined, MergeCellsOutlined } from '@ant-design/icons';

const { SubMenu } = Menu

const Settings = () => {
    return (
        <Menu style={{borderRadius: '10px'}}>
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Settings" style={{borderRadius: '10px'}}>
                <Menu.Item key="1" icon={<CalculatorOutlined />}>Switch to calculator</Menu.Item>
                <Menu.Item key="2" icon={<MergeCellsOutlined />}>Switch to converter</Menu.Item>
                <Menu.Item key="3" icon={<SettingOutlined />}>Options</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default Settings