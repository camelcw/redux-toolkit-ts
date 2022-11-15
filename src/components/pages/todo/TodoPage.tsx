import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {fetchTodos} from "../../../store/reducers/todoSlice";
import UserCard from "../user/UserCard";
import TodoCard from "./TodoCard";
import UserList from "../user/UserList";

const TodoPage = () => {
    const {todos, error, loading} = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);

    return (
        <div>
            <UserList
            items={todos}
            renderItem={(todo) => (
                <TodoCard
                    key={todo.id}
                    id={todo.id}
                   title = {todo.title}
                />
                )}
            />
        </div>
    );
};

export default TodoPage;
