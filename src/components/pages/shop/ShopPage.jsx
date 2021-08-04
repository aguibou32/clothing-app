import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../preview-collection/CollectionPreview";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}

        {/* Same as above. HERE IT IS VERY IMPORTANT TO REMEMBER WE HAVE AN ARRAY INSIDE ANOTHER ARRAY */}

        {/* {collections.map((collection) => (
          <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
        ))} */}

      </div>
    );
  }
}
