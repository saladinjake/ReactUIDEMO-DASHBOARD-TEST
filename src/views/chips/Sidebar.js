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



                            <li className="dropdown top-menu-item-xs">
                                    <a href="" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                                    <img src="https://www.w3schools.com/w3images/avatar2.png
                    " style={{width:"60px",height: "60px", borderRadius:"50%"}} />
                    <div  style={{float:"right", marginLeft:"-30px"}}>
                    <p style={{fontWeight: "bold"}}>Angelina Jolie</p>
                    <p style={{fontWeight: "bold"}}>Account Manager</p>

                    </div>


                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><i class="ti-user m-r-10 text-custom"></i> Profile</a></li>
                                    </ul>
                                </li>


                                <li className="has_sub">
                                    <a href="javascript:void(0);" className="waves-effect"><i className="ti-location-pin"></i>
                                    <span> Dashboard</span>
                                    <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikvMfXSm_KGdWaPI9y-t-oXE_v5tYlmD2uw&usqp=CAU
                                    " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px", position:"fixed"}} />
                                    </a>

                                </li>




                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="ti-location-pin"></i>
                                <span> Data Tables</span>
                                <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikvMfXSm_KGdWaPI9y-t-oXE_v5tYlmD2uw&usqp=CAU
                                " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px", position:"fixed"}} />
                                </a>

                            </li>


                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-account-balance-wallet"></i>
                                 <span> Data Tables </span>
                                 <img
                                 src="https://media.istockphoto.com/vectors/face-mask-flu-mask-icon-vector-id1136493595?k=6&m=1136493595&s=612x612&w=0&h=CeSFxD8OK4RdWGKBuSwEeYyrRFI0EpblLHaSpvOG3RU=
                                 " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px"}} />
                                  </a>

                            </li>


                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-headset"></i>
                                <span> Data Tables </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
                                " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px"}} />
                                </a>

                            </li>

                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="ti-light-bulb"></i>
                                <span> Data Tables </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png
                                " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px"}} />
                                </a>

                            </li>

                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-headset"></i>
                                <span> Data Tables </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
                                " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px"}} />
                                </a>

                            </li>

                            <li className="has_sub">
                                <a href="javascript:void(0);" className="waves-effect"><i className="md-headset"></i>
                                <span> Data Tables </span>
                                <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
                                " style={{width:"10px",height: "10px", borderRadius:"50%", marginLeft:"50px"}} />
                                </a>

                            </li>
                        </ul>
                        <div className="clearfix"></div>

                        <button style={{marginLeft:"50px", width:"150px", backgroundColor:"	#7B68EE"}} className="btn btn-primary">Add Project</button>
                    </div>
                    <div className="clearfix"></div>
                </div></div>
            </div>
    )
   }
}
