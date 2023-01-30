import {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoint} from "Frontend/generated/endpoints";
import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";

export default function TodoView() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [task, setTask] = useState('')

    useEffect(() => {
        TodoEndpoint.findAll().then(setTodos)
    }, [])

    async function addTodo() {
        const saved = await TodoEndpoint.add(task);
        if (saved) {
            setTodos([...todos, saved])
            setTask('')
        }
    }

    return (
        <div className="p-m">
            <h1>
                Here is Hilla View!
            </h1>
            <div className="flex gap-xl">
                <TextField value={task} onChange={e => setTask(e.target.value)}/>
                <Button theme="primary" onClick={addTodo}>Add Task</Button>
            </div>

        </div>
    );
};