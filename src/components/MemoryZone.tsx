import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    memoryState,
    draggedState,
    fixDrag,
    fixDrop,
    looseDrop,
    pop,
    drop,
    droppedState,
} from '../redux/addMemorySlice'
import { add, count, resultState } from '../redux/addNumberSlice'

const styleOuter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F5F5F5',
    width: '100%',
    maxWidth: 280,
    height: 45,
    borderRadius: 20,
    padding: 5,
    overflow: 'scroll',
}
const styleDrop = {
    position: 'absolute' as 'absolute',
    color: 'white',
    fontSize: 25,
    marginTop: 20,
}
const styleInner = {
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#E6E6E6',
    margin: 5,
    height: 35,
    display: 'flex',
    alignItems: 'center',
}

interface DraggedInterface {
    id: string
    data: string
}

const MemoryZone = () => {
    const [isEntered, setIsEntered] = useState(false)
    const dispatch = useDispatch()
    const result = useSelector(resultState)
    const memory = useSelector(memoryState) as String[]
    const dragged = useSelector(draggedState) as DraggedInterface
    const dropped = useSelector(droppedState) as string
    return (
        <div
            onDragEnter={(e) => {
                if (dragged.id != 'drop') {
                    setIsEntered(true)
                }
                const target = e.target as HTMLElement
                dispatch(fixDrop(target.innerHTML))
            }}
            onDragLeave={() => {
                setIsEntered(false)
            }}
            onDrop={() => dispatch(looseDrop())}
            style={styleOuter}
        >
            {/* This is a block that changes its style when covered with draggable element. 'isEntered' is a state that shows if element has to change its style or not */}
            <span className={isEntered ? 'entered' : 'left'}>
                {isEntered && (
                    <p className="appear" style={styleDrop}>
                        {' '}
                        Drop it here!{' '}
                    </p>
                )}
                {!isEntered &&
                    React.Children.toArray(
                        memory.map((e) => (
                            <p
                                id="drop"
                                draggable={true}
                                onDragStart={(e) => {
                                    const target = e.target as HTMLElement
                                    dispatch(
                                        fixDrag({
                                            id: target.id,
                                            data: target.innerHTML,
                                        })
                                    )
                                }}
                                onDragEnd={() => {
                                    dispatch(
                                        add(result + (dropped + dragged.data))
                                    )
                                    dispatch(count())
                                    dispatch(pop())
                                }}
                                className="appear"
                                style={styleInner}
                            >
                                {e}
                            </p>
                        ))
                    )}
            </span>
        </div>
    )
}

export default MemoryZone
