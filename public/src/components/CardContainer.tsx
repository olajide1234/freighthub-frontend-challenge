import * as React from 'react';
import Card from './ShipmentSummaryCard';
import '../styles/card_container.scss';
import PaginationBottom from './PaginationBottom';

export default function CardContainer(props) {
  return (
    <>
      <h2 className="header">Details of FreightHub shipments</h2>
      <div className="summary-controls">
        <p>Total shipments: 30</p>
      </div>
      <div className="card-container">
        <div className="row row-cols-1 row-cols-md-4">
          {[
            {
              id: 'S1000',
              name: 'T-shirts(Summer2018) from Shanghai to Hamburg',
              cargo: [
                {
                  type: 'Fabric',
                  description: '1000 Blue T-shirts',
                  volume: '2',
                },
                {
                  type: 'Fabric',
                  description: '2000 Green T-shirts',
                  volume: '3',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Shanghai Port',
              services: [
                {
                  type: 'customs',
                },
              ],
              total: '1000',
              status: 'ACTIVE',
              userId: 'U1000',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1000',
              name: 'T-shirts(Summer2018) from Shanghai to Hamburg',
              cargo: [
                {
                  type: 'Fabric',
                  description: '1000 Blue T-shirts',
                  volume: '2',
                },
                {
                  type: 'Fabric',
                  description: '2000 Green T-shirts',
                  volume: '3',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Shanghai Port',
              services: [
                {
                  type: 'customs',
                },
              ],
              total: '1000',
              status: 'ACTIVE',
              userId: 'U1000',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
            {
              id: 'S1001',
              name: 'New spring collection(2018)',
              cargo: [
                {
                  type: 'Furniture',
                  description: '300 Tables',
                  volume: '20',
                },
                {
                  type: 'Furniture',
                  description: '1500 Chairs',
                  volume: '15',
                },
              ],
              mode: 'sea',
              type: 'FCL',
              destination: 'Saarbrücker Str. 38, 10405 Berlin',
              origin: 'Ningbo port',
              services: [
                {
                  type: 'customs',
                },
                {
                  type: 'insurance',
                  value: '100',
                },
              ],
              total: '3000',
              status: 'ACTIVE',
              userId: 'U1002',
            },
          ].map((shipment) => (
            <Card
              key={shipment.id}
              id={shipment.id}
              name={shipment.name}
              cargoLength={shipment.cargo.length}
              total={shipment.total}
              origin={shipment.origin}
              status={shipment.status}
            />
          ))}
        </div>
      </div>
      <PaginationBottom active={2} total={10} />
    </>
  );
}
