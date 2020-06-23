import React, { useCallback, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Product from 'components/Product';

export default function ProductContainer() {
  // const { id } = route.params;
  const chosenProduct: any = useStoreState((state) =>
    state.products.getById('1'),
  );

  //  map our action 👇
  const addProductToBasket = useStoreActions(
    (actions: any) => actions.basket.addProduct,
  );

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    await addProductToBasket(chosenProduct.id);

    setAdding(false);
  }, [chosenProduct, addProductToBasket]);

  return (
    <Product
      product={chosenProduct}
      onAdd={onAddToBasketClick}
      loading={adding}
    />
  );
}
