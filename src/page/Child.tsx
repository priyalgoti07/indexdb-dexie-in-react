import React from 'react'

interface ChildProps {
    iCount: () => void
    count: number
}

const Child: React.FC<ChildProps> = ({ iCount,count }) => {
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={iCount}>Inc</button>
        </div>
    )
}

export default Child