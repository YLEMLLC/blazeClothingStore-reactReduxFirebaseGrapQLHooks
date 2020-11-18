import React from 'react';

import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router';

import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'> Your cart is empty </span>
      )}
    </div>

    <CustomButton onClick={() => history.push('/checkout')}>
      {' '}
      GO TO CHECKOUT{' '}
    </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItemsCount(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
