import Numbers from "./components/calculator/Numbers"
import Input from "./components/calculator/Input"
import Expressions from "./components/calculator/Expressions";
import Utilities from "./components/calculator/Utilities";

const Calculator = () => {
    return (
        <>
            <Input />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Utilities />
                <div style={{ display: 'flex' }}>
                    <Numbers />
                    <Expressions />
                </div>
            </div>
        </>
    )
}

export default Calculator