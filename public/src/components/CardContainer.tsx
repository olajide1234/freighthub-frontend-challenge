import { useObserver } from 'mobx-react';
import * as React from 'react';
import { StoreContext } from '../index';
import Card from './ShipmentSummaryCard';
import Sort from './Sort';
import '../styles/card_container.scss';
import PaginationBottom from './PaginationBottom';
import { LIMIT, TOTAL_ITEMS } from '../constants';

export default function CardContainer(props) {
  const store = React.useContext(StoreContext);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    store.shipmentStore.getShipments(page);
  }, [page]);

  const onPageChanged = (page: number) => {
    setPage(page);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    store.shipmentStore.searchShipments(query);
  };

  const renderShipments = () => {
    if (
      store.shipmentStore.searchQuery
      && !store.shipmentStore.filteredShipments.length
    ) {
      return <p>No results found</p>;
    }

    if (store.shipmentStore.searchQuery) {
      return (
        <div className="card-container">
          <div className="row row-cols-1 row-cols-md-4">
            {store.shipmentStore.filteredShipments.map((shipment) => (
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
      );
    }

    return (
      <div className="card-container">
        <div className="row row-cols-1 row-cols-md-4">
          {store.shipmentStore.shipments.map((shipment) => (
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
    );
  };

  return useObserver(() => (
    <>
      <h2 className="header">Details of FreightHub shipments</h2>
      <div className="d-flex justify-content-between">
        <p>
          Total shipments:
          {TOTAL_ITEMS}
        </p>
        {/* <div className="d-flex justify-content-between"> */}
        <Sort store={store.shipmentStore} />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search by id"
          onChange={handleChange}
        />
        {/* </div> */}
      </div>
      {renderShipments()}
      {store.shipmentStore.searchQuery ? null : (
        <PaginationBottom
          active={page}
          total={TOTAL_ITEMS}
          onPageChanged={onPageChanged}
        />
      )}
    </>
  ));
}
