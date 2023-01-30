import {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndpoint} from "Frontend/generated/endpoints";

export default function TodoView() {
    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(()=>{
        TodoEndpoint.findAll().then(setTodos)
    },[])
    return (
        <div>
            <h1>
                Here is Hilla View!
            </h1>
        </div>
    );
};