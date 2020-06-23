import React from 'react';

interface Props {
  product: Product;
  onAdd: () => any;
  loading: boolean;
}

export default function Product({ product, onAdd, loading }: Props) {
  return (
    <div>
      <span>{product.name}</span>
      <span>£ {product.price}</span>

      <button type="button" onClick={onAdd}>
        {loading ? 'Adding...' : 'Add to basket'}
      </button>
    </div>
  );
}
