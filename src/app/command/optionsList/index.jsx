import React from 'react'
import './optionsList.scss';

export default ({options}) => {
    const option = (c) => <div key={c.name}>{c.title}</div>;
    return <div className="optionsListContainer">
        {
            options.map(option)
        }
    </div>
}