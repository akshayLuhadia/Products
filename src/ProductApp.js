import React from "react";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditProduct from "./components/EditProduct";

export default function ProductApp() {
  return (
    <div className="product-app">
      <Router>
        <div>
          <Route exact path="/Products" component={ProductList} />
          <Route path="/Products/edit-product/:id" component={EditProduct} />
        </div>
      </Router>
    </div>
  );
}
