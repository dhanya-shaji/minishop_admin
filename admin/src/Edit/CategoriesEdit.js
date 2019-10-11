import React from 'react'
import SideNavbar from '../Common/SideNavbar'
import Navbar from '../Common/Navbar'
export default class CategoriesEdit extends React.Component{
  constructor(props){
    super(props);
    console.log("cooo",this.props.location) 
    this.state={
    name:[],
    id:[],
     text:'',
    }; 
    this.OnChange=this.OnChange.bind(this);
    this.HandleSubmit=this.HandleSubmit.bind(this);
  }; 
  componentWillMount(){
    const {Catagory_Details}=this.props.location.CatagoryParam;
    this.setState({name:Catagory_Details.Cate_Name,id:Catagory_Details.Cate_Id})
  }
  OnChange(e){
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
    console.log("name",this.state.name);
  };  
  HandleSubmit()
{
  
    fetch('http://localhost/adminapi/catagories.php?type=UpdateCategory&id='+this.state.id+
    '&name='+this.state.name

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
       <label className="col-sm-2">Categories_Id:</label>
         <div className="col-sm-10">
         <input name="id" type="text" 
         value={this.state.id} 
          className="form-control form-control-success"/>
         </div>
         </div>
      <div className="form-group row">
       <label className="col-sm-2">Categories:</label>
         <div className="col-sm-10">
         <input name="name" type="text" 
         defaultValue={this.state.name}
         onChange={this.OnChange}
          className="form-control form-control-success"/>
         </div>
         </div>
         <div >
        <button type="button"  onClick={this.HandleSubmit}>ADD</button>
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