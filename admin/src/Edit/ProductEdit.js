import React from "react";
import SideNavbar from "../Common/SideNavbar";
import Navbar from "../Common/Navbar";
export default class ProductEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log("cooo", this.props.location);
    this.state = {
      PId: [],
      PName: [],
      PImage: [],
      PDescription: [],
      PPrice: [],
      DPrice: [],
      IssuedDate: [],
      ISActive: [],
      text: ""
    };
    this.OnChange = this.OnChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }
  componentWillMount() {
    const { Product_Details } = this.props.location.ProductParam;
    this.setState({
      PName: Product_Details.Product_Name,
      PId: Product_Details.Product_Id,
      PImage: Product_Details.Product_Image,
      PDescription: Product_Details.Product_Description,
      PPrice: Product_Details.Product_Price,
      DPrice: Product_Details.Discount_Price,
      IssuedDate: Product_Details.Issued_Date,
      ISActive: Product_Details.IS_Active
    });
  }
  OnChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log("name", this.state.PName);
  }
  HandleSubmit() {
    fetch(
      'http://localhost/adminapi/updateProduct.php?type=UpdateProduct&PId=' +
        this.state.PId +
        '&PName='+
        this.state.PName +
        '&PImage=' +
        this.state.PImage +
        '&PDescription=' +
        this.state.PDescription +
        '&PPrice=' +
        this.state.PPrice +
        '&DPrice=' +
        this.state.DPrice +
        '&IssuedDate=' +
        this.state.IssuedDate +
        '&ISActive=' +
        this.state.ISActive
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
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header d-flex align-items-center">
                  <h4>ADD NEW PRODUCT</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>PRODUCT NAME :</label>
                      <input
                        type="text"
                        name="PName"
                        defaultValue={this.state.PName}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>PRODUCT IMAGE :</label>
                      <input
                        type="text"
                        name="PImage"
                        defaultValue={this.state.PImage}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>PRODUCT DESCRIPTION :</label>
                      <input
                        type="text"
                        name="PDescription"
                        defaultValue={this.state.PDescription}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>PRODUCT PRICE :</label>
                      <input
                        type="text"
                        name="PPrice"
                        defaultValue={this.state.PPrice}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>DISCOUNT PRICE :</label>
                      <input
                        type="text"
                        name="DPrice"
                        defaultValue={this.state.DPrice}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>ISSUED DATE :</label>
                      <input
                        type="text"
                        name="IssuedDate"
                        defaultValue={this.state.IssuedDate}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>ISACTIVE :</label>
                      <input
                        type="text"
                        name="ISActive"
                        defaultValue={this.state.ISActive}
                        class="form-control"
                        onChange={this.OnChange}
                      />
                    </div>
                    <div className="form-group">
                      <button type="button" onClick={this.HandleSubmit}>
                        ADD
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
