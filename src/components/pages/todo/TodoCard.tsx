import React, {FC} from 'react';
import {ITodo} from "../../../store/reducers/todoSlice";
import styles from './TodoCard.module.css'
import {useNavigate} from "react-router-dom";
import MyButton from "../../UI/MyButton";

const TodoCard: FC<ITodo> = ({id, title}) => {
    const navigate = useNavigate()
    return (
        <div className={styles.todo}>
            <div className={styles.todo__content}>
                <MyButton margin={'0 0 10px 0'} onClick={() => navigate(-1)}>Back</MyButton>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
            </div>
        </div>
    );
};

export default TodoCard;
