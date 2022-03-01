import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { memoryState, draggedState, fixDrag, fixDrop, looseDrop, pop, drop, droppedState } from "../redux/addMemorySlice";
import { add, count, resultState } from "../redux/addNumberSlice";

const styleOuter = { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: '#F5F5F5', width: '100%', maxWidth: 280, height: 45, borderRadius: 20, padding: 5, overflow: 'scroll' }
const styleDrop = { position: 'absolute', color: 'white', fontSize: 25, marginTop: 20 }
const styleInner = { fontWeight: 'bold', borderRadius: 10, padding: 10, backgroundColor: '#E6E6E6', margin: 5, height: 35, display: 'flex', alignItems: 'center' }

const MemoryZone = () => {
    const [isEntered, setIsEntered] = useState(false)
    const dispatch = useDispatch()
    const result = useSelector(resultState)
    const memory = useSelector(memoryState)
    const dragged = useSelector(draggedState)
    const dropped = useSelector(droppedState)
    return (
        <div
            onDragEnter={(e) => { 
                if (dragged.id != 'test') {
                    setIsEntered(true); 
                }
                dispatch(fixDrop(e.target.innerHTML)) 
            }}
            onDragLeave={() => { setIsEntered(false) }}
            onDrop={() => dispatch(looseDrop())}
            style={styleOuter}
        >
            <span
                className={isEntered ? 'entered' : 'left'}
            >
                {isEntered && <p className='appear' style={styleDrop}> Drop it here! </p>}
                {
                    !isEntered &&
                    React.Children.toArray(memory.map(e => (
                        <p 
                        id='test'
                        draggable={true}
                        onDragStart={(e) => {
                            dispatch(fixDrag({id: e.target.id, data: e.target.innerHTML}))
                        }} 
                        onDragEnd={() => {dispatch(add(result + (dropped + dragged.data))); dispatch(count()); dispatch(pop())}}
                        className='appear' style={styleInner}
                        >
                            {e}
                        </p>
                    )))
                }
            </span>
        </div>
    )
}

export default MemoryZone;