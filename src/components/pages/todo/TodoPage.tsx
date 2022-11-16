import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {changePage, fetchTodos} from "../../../store/reducers/todoSlice";
import TodoCard from "./TodoCard";
import UserList from "../user/UserList";
import MyButton from "../../UI/MyButton";

const TodoPage = () => {
    const {todos, page, limit} = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchTodos({page, limit}))
    }, [page, limit, dispatch]);
    const pages: number[]= []
    for(let i = 0;  i < Math.floor(200/limit); i++) {
        pages[i]=i;
    }
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
            {pages.map(page =>
                <MyButton onClick={() => dispatch(changePage(page))} key={page}>{page+1}</MyButton>
            )}
        </div>
    );
};

export default TodoPage;
