import React from 'react';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => any;
  onRemoveProduct: (idx: number) => any;
}

export default function Basket({
  products,
  onProductPress,
  onRemoveProduct,
}: Props) {
  return (
    <div>
      <h1>The merchandise</h1>
      <ul>
        {products.map((product: any, idx: number) => {
          const key = idx + 1;

          return (
            <li key={key}>
              <button type="button" onClick={() => onProductPress(product)}>
                {product.name}
              </button>

              <button type="button" onClick={() => onRemoveProduct(idx)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
