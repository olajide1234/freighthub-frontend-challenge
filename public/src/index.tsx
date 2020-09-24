import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shipmentDetailsStore } from './stores/shipment_details.store';
import { shipmentStore } from './stores/shipments.store';

import App from './App';

export const StoreContext = React.createContext({ shipmentStore, shipmentDetailsStore });

ReactDOM.render(
  <StoreContext.Provider value={{ shipmentStore, shipmentDetailsStore }}>
    <App />
    ,
  </StoreContext.Provider>,
  document.getElementById('root'),
);
