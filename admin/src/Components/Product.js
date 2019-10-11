import React from 'react'
import SideNavbar from '../Common/SideNavbar'
import Navbar from '../Common/Navbar'
export default class Product extends React.Component{
  constructor(props){
    super(props)
    this.state={
      PName:"",
      PImage:'',
      PDescription:"",
      PPrice:"",
      DPrice:"",
      IssuedDate:"",
      ISActive:"",
      text:"",
    };
    this.OnChange=this.OnChange.bind(this);
    this.HandleSubmit=this.HandleSubmit.bind(this);
  };
  OnChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };
  HandleSubmit()
{
    fetch('http://localhost/adminapi/product_details.php?type=InsertProduct&PName='
    +this.state.PName+'&PImage='+this.state.PImage+" &PDescription="
    +this.state.PDescription+"&PPrice="+this.state.PPrice+'&DPrice='
    +this.state.DPrice+'&IssuedDate='+this.state.IssuedDate+'&ISActive='
    +this.state.ISActive
      )
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
      }
    render(){
        return(
          <div>
                <SideNavbar/>
                <div className="page">
                   <Navbar/>
  <div class="row" >
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
    type="text" name="PName" 
    value={this.state.PName} class="form-control"onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>PRODUCT IMAGE :</label>
    <input type="text" name="PImage" 
    value={this.state.PImage} class="form-control" onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>PRODUCT DESCRIPTION :</label>
    <input type="text" name="PDescription"
     value={this.state.PDescription} class="form-control" onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>PRODUCT PRICE :</label>
    <input type="text" name="PPrice"  
    value={ this.state.PPrice}class="form-control"onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>DISCOUNT PRICE :</label>
    <input type="text" name="DPrice"
     value={this.state.DPrice} class="form-control"onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>ISSUED DATE :</label>
    <input type="text" name="IssuedDate" 
    value={this.state.IssuedDate} class="form-control" onChange={this.OnChange}/>
     </div>
     <div className="form-group">
     <label>ISACTIVE :</label>
    <input type="text" name="ISActive" 
    value={this.state.ISActive} class="form-control" onChange={this.OnChange}/>
     </div>
     <div className="form-group">       
     <button type="button" onClick={this.HandleSubmit}>ADD</button>
     </div>
     </form>
    </div>
    </div>
     </div>
     </div>
     </div>
     </div>
        )
    }
}