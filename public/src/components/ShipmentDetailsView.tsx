import * as React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../index';
import ShipmentDetailCard from './ShipmentDetailCard';
import Modal from './Modal';
import { IShipment } from '../interfaces/index';
import '../styles/shipment_details_view.scss';

export default function ShipmentDetailsView(props) {
  const store = React.useContext(StoreContext);
  const [name, setName] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);
  React.useEffect(() => {
    store.shipmentDetailsStore.getShipmentDetails(props.match.params.shipmentId);
  }, [modalShow]);

  const openModal = () => setModalShow(true);

  const closeModal = () => setModalShow(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value);

  const handleSave = () => {
    store.shipmentDetailsStore.updateshipmentName(
      name,
      props.match.params.shipmentId,
    );
    setName('');
    setModalShow(false);
  };

  return useObserver(() => (
    <>
      <Modal
        oldName={store.shipmentDetailsStore.shipment.name}
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
        {store.shipmentDetailsStore.shipmentName}
        {' '}
        <sup className="edit-superscript" onClick={openModal}>
          edit
        </sup>
      </h3>
      <div className="details-card-container">
        <div className="row row-cols-1 row-cols-md-4">
          <ShipmentDetailCard
            name="Shipment id"
            value={store.shipmentDetailsStore.shipment.id}
          />
          <ShipmentDetailCard
            name="Mode of transport"
            value={store.shipmentDetailsStore.shipment.mode}
          />
          <ShipmentDetailCard
            name="Type of shipment"
            value={store.shipmentDetailsStore.shipment.type}
          />
          <ShipmentDetailCard
            name="Shipment destination"
            value={store.shipmentDetailsStore.shipment.destination}
          />
          <ShipmentDetailCard
            name="Shipment origin"
            value={store.shipmentDetailsStore.shipment.origin}
          />
          <ShipmentDetailCard
            name="Status"
            value={store.shipmentDetailsStore.shipment.status}
          />
          <ShipmentDetailCard
            name="User ID"
            value={store.shipmentDetailsStore.shipment.userId}
          />
          <ShipmentDetailCard
            name="Total"
            value={store.shipmentDetailsStore.shipment.total}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p>Cargo</p>
            {store.shipmentDetailsStore.shipment.cargo.map((item) => (
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
            {store.shipmentDetailsStore.shipment.services.map((item) => (
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
  ));
}
