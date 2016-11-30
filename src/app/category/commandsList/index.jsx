import React from 'react'
import './commandsList.scss';

export default ({commands, onClicked}) => {
    const command = (c) => <div onClick={ () => onClicked(c)}  key={c.name}>{c.title}</div>;
    return <div className="commandsListContainer">
        {
            commands.map(command)
        }
    </div>
}