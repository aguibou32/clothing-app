import React from 'react'
import './MenuItem.scss';

function MenuItem({title, imageUrl, size}) {
    return (
        <div
          style={{
            backgroundImage:`url(${imageUrl})`
          }}

         className={`${size} menu-item `}>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
    )
}

export default MenuItem
