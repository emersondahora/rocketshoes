/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

const itens = [1, 2];
export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {itens.map(() => (
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-nike-court-air-zoom-zero-hc-masculino/26/HZM-1219-026/HZM-1219-026_zoom1.jpg?ts=1581513612&ims=326x"
                  alt="Tênis"
                />
              </td>
              <td>
                <strong>Tênis Nike Court Air Zoom Zero Hc Masculino</strong>
                <span>R$ 579,99</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 1159,98</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">FinalizarPedido</button>
        <Total>
          <span>Total</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
