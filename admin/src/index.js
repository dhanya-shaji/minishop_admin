import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Home'
import * as serviceWorker from './serviceWorker'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Product_view from './Table_View/Product_view'
import  Categories_View from './Table_View/Categories_View'
import  Categories from './Components/Categories'
import Product from './Components/Product'
import CategoriesEdit from './Edit/CategoriesEdit'
import ProductEdit from './Edit/ProductEdit'
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/Product_view" component={Product_view}/>
            <Route path="/Categories_View" component={Categories_View}/>
            <Route path="/Categories" component={Categories}/>
            <Route path="/Product" component={Product}/>
            <Route path="/CategoriesEdit" component={CategoriesEdit}/>
            <Route path="/ProductEdit" component={ProductEdit}/>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
