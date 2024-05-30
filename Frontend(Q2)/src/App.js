import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './productList';
import ProductDetails from './ProductDetails';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/products/:id" render={({ match }) => <ProductDetails productId={match.params.id} />} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
