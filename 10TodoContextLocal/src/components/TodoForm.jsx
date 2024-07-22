import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [input, setInput] = useState("")
    const { addTodo } = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!input) return

        addTodo({ todo: input, completed: false })
        setInput("")
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

