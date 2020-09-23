import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { IShipmentDetailCardProps } from '../interfaces/index';
import '../styles/shipment_detail_card.scss';

export default function ShipmentSummaryCard(
  { name, value }: IShipmentDetailCardProps,
) {
  return (
    <div className="col mb-4">
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Text>{value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
