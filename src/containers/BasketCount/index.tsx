import React from 'react';
import { useStoreState } from 'easy-peasy';
import BasketCount from 'components/BasketCount';

export default function BasketCountContainer() {
  const count = useStoreState((state) => state.basket.count);

  return <BasketCount count={count} onLinkPress={() => {}} />;
}
