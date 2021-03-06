import { Routes, Route } from 'react-router'
import Settings from './components/Settings'
import Calculator from './Calculator'
import Converter from './Converter'
import AppPicker from './AppPicker'
import Error from './components/Error'
import MemoryZone from './components/MemoryZone'

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
}

const App = () => {
    return (
        <div style={style}>
            <Settings />
            <MemoryZone />
            <Routes>
                <Route path="/" element={<AppPicker />} />
                <Route path="calculator" element={<Calculator />} />
                <Route path="converter" element={<Converter />} />
                <Route path="settings" element={<Error />} />
            </Routes>
        </div>
    )
}

export default App
