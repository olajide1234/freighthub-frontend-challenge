import * as React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import ShipmentDetailCard from './ShipmentDetailCard';
import Modal from './Modal';
import { IShipment } from '../interfaces/index';
import '../styles/shipment_details_view.scss';

const shipment: IShipment = {
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
};

export default function ShipmentDetailsView(props) {
  const [name, setName] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);

  const openModal = () => setModalShow(true);

  const closeModal = () => setModalShow(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value);

  const handleSave = () => {
    // Post to store
    setName('');
    setModalShow(false);
  };

  return (
    <>
      <Modal
        oldName={shipment.name}
        modalShow={modalShow}
        isNameInputEmpty={Boolean(name)}
        handleSave={handleSave}
        closeModal={closeModal}
      >
        <div />
        <input
          id="shipmentName"
          type="text"
          name="name"
          placeholder="Enter new shipment name..."
          value={name}
          onChange={handleChange}
        />
      </Modal>

      <div className="d-flex justify-content-between">
        <Link to="/">
          <Button> Back </Button>
        </Link>
        <h2 className="header">Shipment detail</h2>
        <div />
      </div>

      <h3 className="header">
        {shipment.name}
        {' '}
        <sup className="edit-superscript" onClick={openModal}>edit</sup>
      </h3>
      <div className="details-card-container">
        <div className="row row-cols-1 row-cols-md-4">
          <ShipmentDetailCard name="Shipment id" value={shipment.id} />
          <ShipmentDetailCard name="Mode of transport" value={shipment.mode} />
          <ShipmentDetailCard name="Type of shipment" value={shipment.type} />
          <ShipmentDetailCard
            name="Shipment destination"
            value={shipment.destination}
          />
          <ShipmentDetailCard name="Shipment origin" value={shipment.origin} />
          <ShipmentDetailCard name="Status" value={shipment.status} />
          <ShipmentDetailCard name="User ID" value={shipment.userId} />
          <ShipmentDetailCard name="Total" value={shipment.total} />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p>Cargo</p>
            {shipment.cargo.map((item) => (
              <ul key={uuidv4()}>
                <li>{item.type}</li>
                <li>{item.description}</li>
                <li>
                  Volume:
                  {' '}
                  {item.volume}
                  m
                  <sup>3</sup>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <p>Services</p>
            {shipment.services.map((item) => (
              <ul key={uuidv4()}>
                <li>
                  Type:
                  {item.type}
                </li>
                {item.value && (
                  <li>
                    Value:
                    {item.value}
                  </li>
                )}
              </ul>
            ))}
          </div>
          <div />
        </div>
      </div>
    </>
  );
}
