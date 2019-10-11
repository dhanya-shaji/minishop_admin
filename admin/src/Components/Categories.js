import React from 'react'
import SideNavbar from '../Common/SideNavbar'
import Navbar from '../Common/Navbar'
export default class Categories extends React.Component{
  constructor(props){
    super(props);
    this.state={
     name:[],
     text:''
    }; 
    this.OnChange=this.OnChange.bind(this);
    this.HandleSubmit=this.HandleSubmit.bind(this);
  };     
  OnChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    console.log("dghh",this.state.name);
  };
HandleSubmit()
{
  
    fetch('http://localhost/adminapi/catagories.php?type=InsertCategory&name='+
      this.state.name
)
.then(function(response) {
      return response.json()
        })
      }
    render()
    {
        return(
            <div>
                <SideNavbar/>
                <div className="page">
                   <Navbar/>
     <div className="card">
     <div className="card-header d-flex align-items-center">
     <h4>Add new Categories</h4>
     </div>
    <div className="card-body">
      <form className="form-horizontal">
      <div className="form-group row">
       <label className="col-sm-2">Categories:</label>
         <div className="col-sm-10">
         <input id="CategoryValue" name="name" type="text" 
         value={this.state.name}  onChange={this.OnChange}
          className="form-control form-control-success"/>
         </div>
         </div>
         <div >
        <button type="button"  className="btn btn-primary" onClick={this.HandleSubmit}>ADD</button>
      <input type="button"
      className="btn btn-primary" style={{"marginLeft":"10px"}} value="Cancel"/>
        </div>
     </form>
     </div>
    </div>
    </div>
    </div>

        )
    }
}