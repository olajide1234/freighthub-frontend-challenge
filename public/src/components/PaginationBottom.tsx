import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { IPaginationBottomProps } from '../interfaces/index';
import { LIMIT, TOTAL_ITEMS } from '../constants';
import '../styles/pagination_bottom.scss';

export default function PaginationBottom({ active, total, onPageChanged }: IPaginationBottomProps) {
  const items = [];
  for (let number = 1; number <= (TOTAL_ITEMS / LIMIT); number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="pagination">
      <Pagination onClick={(e) => onPageChanged(Number(e.target.text))}>{items}</Pagination>
    </div>
  );
}
