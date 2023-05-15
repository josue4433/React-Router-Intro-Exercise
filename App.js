import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li>
          <Link to="/snack/chips">Chips</Link>
        </li>
        <li>
          <Link to="/snack/candy">Candy</Link>
        </li>
        <li>
          <Link to="/snack/soda">Soda</Link>
        </li>
      </ul>
    </div>
  );
};


const Snack = ({ match }) => {
  const snackName = match.params.name;
  return (
    <div>
      <h2>{snackName}</h2>
      <p>This is the {snackName} snack.</p>
      <Link to="/">Go back</Link>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Route exact path="/" component={VendingMachine} />
      <Route path="/snack/:name" component={Snack} />
    </Router>
  );
};

export default App;
