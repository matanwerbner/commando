import React from 'react'
import './optionsList.scss';

export default ({options}) => {
    const option = (c) => <div key={c.name}>{c.title}</div>;
    return <div className="optionsListInner">
        {
            options.map(option)
        }
    </div>
}