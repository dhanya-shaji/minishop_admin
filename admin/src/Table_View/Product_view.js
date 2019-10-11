import React from "react";
import SideNavbar from "../Common/SideNavbar";
import Navbar from "../Common/Navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class Product_view extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productDeatils: [] };
    this.onFetchProductDetails();
    this.DeleteProduct = this.DeleteProduct.bind(this);
  }
  onFetchProductDetails = () => {
    fetch("http://localhost/adminapi/product_details.php?type=getByAllId")
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data, "datssssssssssssssssss");
        this.setState({ productDeatils: data });
      });
  };
  DeleteProduct(Product_Id) {
    fetch(
      "http://localhost/adminapi/product_details.php?type=DeleteProduct&id=" +
        Product_Id
    ).then(function(response) {
      return response.json();
    });
  }
  render() {
    return (
      <div>
        <SideNavbar />
        <div className="page">
          <Navbar />
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4>PRODUCT LISTS</h4>
                <button
                  style={{ marginLeft: "900px","Color":"ffff" }}
                >
                  <Link
                    to={{
                      pathname: "/Product"
                    }} >
                    CREATE
                  </Link>
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT IMAGE</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>PRODUCT PRICE</th>
                        <th>DISCOUNT PRICE</th>
                        <th>ISSUED DATE</th>
                        <th>IS ACTIVE</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.productDeatils.map((product, index) => (
                        <tr>
                          <td>{product.Product_Name}</td>
                          <td>{product.Product_Image}</td>
                          <td>{product.Product_Description}</td>
                          <td>{product.Product_Price}</td>
                          <td>{product.Discount_Price}</td>
                          <td>{product.Issued_Date}</td>
                          <td>{product.IS_Active}</td>
                          <td>
                            <button>
                              <Link to={{ pathname: "/ProductEdit",ProductParam: 
                    { Product_Details:product}}}>
                                EDIT
                              </Link>
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                this.DeleteProduct(product.Product_Id)
                              }
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
