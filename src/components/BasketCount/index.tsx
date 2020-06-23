import React from 'react';

type Props = {
  count: number;
  onLinkPress: () => any;
};

export default function BasketCount({ count, onLinkPress }: Props) {
  return (
    <div>
      <button type="button" onClick={onLinkPress}>
        Basket({count} items)
      </button>
    </div>
  );
}
