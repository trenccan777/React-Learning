import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <input type="checkbox" />
            <p>{props.todo.name}</p>
        </div>
    )
}