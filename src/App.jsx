import { Typography } from "antd"
import Numbers from "./components/Numbers"
import Input from "./components/Input"
import Expressions from "./components/Expressions";
import Settings from "./components/Settings";

const { Title } = Typography;
const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}

const App = () => {
  return (
    <div style={style}>
      <Settings />
      <Input />
      <div style={{display: 'flex'}}>
        <Numbers />
        <Expressions />
      </div>
    </div>
  )
}

export default App