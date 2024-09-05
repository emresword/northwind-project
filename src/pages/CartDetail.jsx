import React from 'react'
import { useSelector } from 'react-redux'
import {

  CardHeader,
  CardMeta,
  CardContent,

  Card

} from 'semantic-ui-react';
export default function CartDetail() {
  const { cartItems } = useSelector(state => state.cart)

  return (
    <div>
      {
        cartItems.map((cartItem) => (
          <Card.Group>
            <Card fluid size="large">
              <CardContent>

                <CardHeader>{cartItem.product.productName}</CardHeader>
                <CardMeta>{ cartItem.product.category.categoryName }</CardMeta>
                <CardMeta>{ cartItem.product.description }</CardMeta>
                <CardHeader>{cartItem.quantity}</CardHeader>

              </CardContent>

            </Card>
          </Card.Group>
        ))
      }

    </div>
  )
}
