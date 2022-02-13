import React from 'react'
import Card from "./Card"

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Card
                    key={task.id}
                    task={task} />
            ))}
        </>
    )

}

export default Tasks;