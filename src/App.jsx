import { Typography } from "antd"
import Settings from "./components/Settings"
import { Routes, Route } from "react-router"
import Calculator from "./Calculator"
import Converter from "./Converter"

const { Title } = Typography;
const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}

const App = () => {
  return (
    <div style={style}>
      <Settings />
      <Routes>
        <Route path='calculator' element={<Calculator />} />
        <Route path='converter' element={<Converter />} />
      </Routes>
    </div>
  )
}

export default App