import { useSelector, useDispatch } from "react-redux"
import { memoryState } from "../redux/addMemorySlice";


const MemoryZone = () => {
    const memory = useSelector(memoryState)
    return (
        <>
        {memory}
        </>
    )
}

export default MemoryZone;