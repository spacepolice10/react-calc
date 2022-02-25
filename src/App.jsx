import { Typography } from 'antd';
import Numbers from './components/Numbers';

const { Title } = Typography;
const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}

const App = () => {
  return (
    <div style={style}>
      <Title>
        Hello!
      </Title>
      <Numbers />
    </div>
  )
}

export default App