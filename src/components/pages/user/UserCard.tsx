import React, { FC } from 'react';
import styles from './UserCard.module.css';
import {IUser} from "../../../types/types";
import MyButton from "../../UI/MyButton";
import {Link} from "react-router-dom";


const UserCard: FC<IUser> = ({ id, name, address, company }) => {
  return (
    <div className={styles.user}>
      <ul className={styles.user__content}>
        <li>
          ФИО: <strong>{name}</strong>
        </li>
        <li>
          ID: <strong>{id}</strong>
        </li>
        <li>
          Город: <strong>{address?.city}</strong>
        </li>
        <li>
          Компания: <strong>{company?.name}</strong>
        </li>
      </ul>
      <MyButton><Link to={`/${id}/todo`} style={{textDecoration: 'none', color: 'teal'}}>Список дел</Link></MyButton>
    </div>
  );
};

export default UserCard;
