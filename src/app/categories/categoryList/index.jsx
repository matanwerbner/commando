import React from 'react'
import './categoryList.scss';



export default ({categories, onClicked}) => {
    const category = (c) => <div onClick={ () => onClicked(c)}  key={c.name}>{c.title}</div>;

    return <div className="categoryListContainer">
        {
            categories.map(category)
        }
    </div>
}