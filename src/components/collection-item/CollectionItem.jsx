import React from "react";
import './CollectionItem.scss';
import CustomButton from "../custom-button/CustomButton";
import { connect } from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

function CollectionItem({ item, addItem }) {
  // console.log(imageUrl);

  const {name,price, imageUrl} = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={()=>addItem(item)}> ADD TO CART </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps) (CollectionItem);
