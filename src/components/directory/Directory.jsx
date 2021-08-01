import React, { Component } from 'react'
import MenuItem from '../menu-items/MenuItem';
import './Directory.scss';

export default class Directory extends Component {

    constructor(){
        super();
        this.state = {
             sections: [
                {
                  id: 1,
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  linkUrl: 'shop/hats'
                },
                {
                  id: 2,
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  linkUrl: 'shop/jackets'
                },
                {
                  id: 3,
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'women',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/women'
                },
                {
                  id: 5,
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, title, imageUrl, size, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                ))}
            </div>
        )
    }
}
