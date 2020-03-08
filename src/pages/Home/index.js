import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

const itens = [1, 2, 3, 4, 5, 6];

export default function Home() {
  return (
    <ProductList>
      {itens.map(() => (
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-nike-court-air-zoom-zero-hc-masculino/26/HZM-1219-026/HZM-1219-026_zoom1.jpg?ts=1581513612&ims=326x"
            alt="Tênis"
          />
          <strong>Tênis Nike Court Air Zoom Zero Hc Masculino</strong>
          <span>R$ 579,99</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
