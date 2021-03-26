import React from 'react';

export default class Sidebar extends React.Component{
   constructor(){
     super()
   }

   render(){
      return (
        <div className="left side-menu">
                <div className="slimScrollDiv" style={{ position: "relative", overflow: "hidden", width: "auto", height: "530px"}}>
                <div className="sidebar-inner slimscrollleft" style={{backgroundColor: "#fff",overflow: "hidden",
                 width: "auto", height: "530px",}}>

                    <div id="sidebar-menu">
                        <ul>

                            <li className="text-muted menu-title">Navigation</li>

                            <li className="dropdown top-menu-item-xs">
                                    <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                    <img src="https://www.w3schools.com/w3images/avatar2.png
                    " style={{width:"60px",height: "60px", borderRadius:"50%"}} />
                    <div  style={{float:"right", marginLeft:"-30px"}}>
                    <p >Angelina Jolie</p>
                    <p>Account Manager</p>

                    </div>


                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="profile.html"><i class="ti-user m-r-10 text-custom"></i> Profile</a></li>
                                    </ul>
                                </li>

							<li className="active">
                                <a href="index.html" className="waves-effect active"><i className="md md-dashboard"></i>
                                <span> Dashboard </span> </a>
                            </li>

                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="ti-location-pin"></i>
                                <span> Ui Elements</span></a>

                            </li>


                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-account-balance-wallet"></i>
                                 <span> Components </span> </a>

                            </li>


                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-headset"></i>
                                <span> Form Stuff </span> </a>

                            </li>

                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="ti-light-bulb"></i>
                                <span> Data Tables </span></a>

                            </li>

							<li className="has_sub">
                                <a href="request-car-repair.html" className="waves-effect"><i className="ti-car"></i>
                                <span> Sample Page </span> </a>

                            </li>

                            <li className="has_sub">
                                              <a href="request-car-repair.html" className="waves-effect"><i className="ti-car"></i>
                                              <span> Extras </span> </a>

                                          </li>
                        </ul>
                        <div className="clearfix"></div>

                        <button style={{marginLeft:"50px", width:"150px"}} className="btn btn-primary">Add Project</button>
                    </div>
                    <div className="clearfix"></div>
                </div></div>
            </div>
    )
   }
}
