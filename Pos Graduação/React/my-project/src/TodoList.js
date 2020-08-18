import React from 'react';
import PropTypes from 'prop-types'

export function TodoList(props){
    return (
        <div>
            <input type="checkbox" onChange={(event) => props.onToggleCompleted(props.id,event)} />
            <b style={{textDecoration : props.status === 'completed' ? 'line-through':'none'}}>{props.nome}</b>
        </div>
    )
}

TodoList.propTypes = {
    onToggleCompleted:PropTypes.func,
}
