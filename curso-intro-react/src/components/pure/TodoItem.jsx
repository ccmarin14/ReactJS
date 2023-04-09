import React from 'react';
import '../../styles/TodoItem.css'

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <img 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                alt="check"
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <img 
                className="Icon Icon-delete"
                alt="delete"
            />
        </li>
    );
}

export {TodoItem};
