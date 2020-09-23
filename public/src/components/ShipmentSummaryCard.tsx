import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { IShipmentSummaryCardProps } from '../interfaces/index';
import '../styles/shipment_summary_card.scss';

export default function ShipmentSummaryCard(shipment:IShipmentSummaryCardProps) {
  return (
    <div className="col mb-4">
      <Card key={shipment.id}>
        <Card.Body>
          <Card.Title className="card-title">{shipment.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {shipment.origin}
            {' '}
            {shipment.id}
          </Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Cargo num.:
              {shipment.cargoLength}
            </ListGroup.Item>
            <ListGroup.Item>
              Status:
              {shipment.status}
            </ListGroup.Item>
            <ListGroup.Item>
              Total:
              {shipment.total}
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary">View shipment</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
