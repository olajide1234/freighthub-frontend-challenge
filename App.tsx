import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardContainer from './public/src/components/CardContainer';
import ShipmentDetailsView from './public/src/components/ShipmentDetailsView';

import './public/src/styles/app.scss';

export default function App() {
  return (
    <div className="home-container">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <CardContainer {...props} />}
          />
          <Route
            exact
            path="/shipments/:shipmentId"
            render={(props) => (
              <ShipmentDetailsView {...props} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}
