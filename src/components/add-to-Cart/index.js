'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@/store/slices/cart-slice';

export default function AddToCart({ productItem }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Remove from cart handler
  function handleRemoveFromCart() {
    dispatch(removeFromCart(productItem.id)); // Pass productItem.id when removing
  }

  // Add to cart handler
  function handleAddToCart() {
    dispatch(addToCart(productItem)); // Pass whole productItem
  }

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? 'Remove from cart'
          : 'Add to cart'}
      </Button>
    </div>
  );
}
