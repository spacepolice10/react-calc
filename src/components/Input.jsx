import { useSelector } from "react-redux"
import { inputState } from "../redux/addNumberSlice"

const Input = () => {
    const numbers = useSelector(inputState)
    return (
        <div>
            {numbers}
        </div>
    )
}

export default Input