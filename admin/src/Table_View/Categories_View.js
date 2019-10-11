import React from "react";
import SideNavbar from "../Common/SideNavbar";
import Navbar from "../Common/Navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoryDeatils: [],
      Category: []
    };
    this.onFetchCatagoryDetails();
    this.DeleteCatagory = this.DeleteCatagory.bind(this);

    console.log("haiii");
  }
  onFetchCatagoryDetails = () => {
    fetch("http://localhost/adminapi/catagories.php?type=getByAllId")
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data, "datssssssssssssssssss");
        this.setState({ CategoryDeatils: data });
      });
  };
  DeleteCatagory(Cate_Id) {
    console.log("cateid", Cate_Id);
    fetch(
      "http://localhost/adminapi/delete.php?type=DeleteCategory&id=" + Cate_Id
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

          <div className="col-lg-11">
            <div className="card">
              <div className="card-header">
                <h4>CATEGORIES LISTS</h4>
                <button
                  style={{ marginLeft: "800px" }} >
                  <Link
                    to={{
                      pathname: "/Categories"
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
                        <th>CATEGORIES NAME</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.CategoryDeatils.map((catagory, index) => (
                        <tr>
                          <td>{catagory.Cate_Name}</td>

                          <td>
                            <button>
                              <Link
                                to={{
                                  pathname: "/CategoriesEdit",
                                  CatagoryParam: { Catagory_Details: catagory }
                                }}
                              >
                                EDIT
                              </Link>
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                this.DeleteCatagory(catagory.Cate_Id)
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
