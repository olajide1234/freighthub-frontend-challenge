import * as React from 'react';

import { ISortProps } from '../interfaces/index';
import '../styles/sort.scss';

export default function Sort(props: ISortProps) {
  const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    props.store.sortShipments(evt.target.value);
  };
  return (
    <div className="select-container">
      <p>Sort by: </p>
      <select onChange={onChange} defaultValue="name">
        <option value="name">name</option>
        <option value="id">id</option>
        <option value="total">total</option>
      </select>
    </div>
  );
}
