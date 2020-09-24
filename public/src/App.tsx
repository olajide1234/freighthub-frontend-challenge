import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import ShipmentDetailsView from './components/ShipmentDetailsView';

import './styles/app.scss';

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
