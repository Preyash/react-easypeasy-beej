import React from 'react';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => any;
}

export default function ProductList({ products, onProductPress }: Props) {
  return (
    <div>
      <h1>Our products</h1>

      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <button type="button" onClick={() => onProductPress(product)}>
              {product.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
