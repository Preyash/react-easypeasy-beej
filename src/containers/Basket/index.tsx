import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Basket from 'components/Basket';

export default function BasketContainer() {
  const basketProducts = useStoreState((state) => state.basket.products);

  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions: any) => actions.basket.removeProduct,
  );

  return (
    <Basket
      products={basketProducts}
      onProductPress={() => {}}
      onRemoveProduct={(idx) => removeProductFromBasket(idx)}
    />
  );
}
