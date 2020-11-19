import { createStructuredSelector } from 'reselect';
import React from 'react';
import { connect } from 'redux';

import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({ collections }) => (
  <div className='Shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
