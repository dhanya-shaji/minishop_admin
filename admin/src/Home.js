import React from 'react'
import SideNavbar from './Common/SideNavbar'
import Navbar from './Common/Navbar'
export default class Home extends React.Component{
    render()
    {
        return(
            <div>
                <SideNavbar/>
                <div className="page">
                   <Navbar/>
                </div>
            </div>
        )
    }
}