import { Typography } from 'antd'
import Numbers from './components/Numbers'
import Input from './components/Input'

const { Title } = Typography;
const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}

const App = () => {
  return (
    <div style={style}>
      <Title>
        Hello!
      </Title>
      <Input />
      <Numbers />
    </div>
  )
}

export default App