import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import database from "./database/db";
import './App.css';
import FormProduct from './components/FormProduct/FormProduct';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import ClosestProducts from './components/ClosestProducts/ClosestProducts';


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(database)
  }, []);

  const addNewProduct = (elem) => {
    products.unshift(elem)
    setProducts(products)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact={true}
          path="/create"
          render={(props) => (
            <FormProduct
              addNewProduct={addNewProduct}
              {...props}
            />
          )}
        />
        <Route
          exact={true}
          path="/"
          render={(props) => (
            <ProductList
              {...props}
              products={products}
            />
          )}
        />
        <Route
          exact={true}
          path="/closestProducts/:productID"
          render={(props) => (
            <ClosestProducts
              {...props}
              products={products}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
