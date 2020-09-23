import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { IPaginationBottomProps } from '../interfaces/index';
import '../styles/pagination_bottom.scss';

export default function PaginationBottom({ active, total }: IPaginationBottomProps) {
  const items = [];
  for (let number = 1; number <= total; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="pagination">
      <Pagination>{items}</Pagination>
    </div>
  );
}
