import React from 'react'
import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

function CollectionPreview({ title, items }) {
    // console.log(items);

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.slice(0, 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
