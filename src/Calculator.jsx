import Numbers from "./components/calculator/Numbers"
import Input from "./components/calculator/Input"
import Expressions from "./components/calculator/Expressions";

const Calculator = () => {
    return(
        <>
            <Input />
            <div style={{display: 'flex'}}>
            <Numbers />
            <Expressions />
            </div>
        </>
    )
}

export default Calculator