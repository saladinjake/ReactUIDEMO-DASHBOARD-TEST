import React from 'react';

export default class Header extends React.Component{
   constructor(){
     super()
   }

   render(){
      return (
        <div className="topbar">
                <div className="topbar-left">
                    <div className="text-center">

                    </div>
                </div>

                <div className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="">
                            <div className="pull-left" >
                            <a href="#" className="waves-effect waves-light" style={{fontWeight: "bold",fontSize: "30px", marginLeft: "20px"}}>BlueBox</a>

                            </div>

                          <ul className="nav navbar-nav hidden-xs">

                            </ul>

                            <form style={{marginLeft: "90px"}} role="search" className="navbar-left app-search pull-left hidden-xs">
			                     <input type="text" placeholder="Search..." className="form-control" />
			                     <a href=""><i className="fa fa-search"></i></a>
			                </form>



                            <ul className="nav navbar-nav navbar-right pull-right">
								<li className="dropdown top-menu-item-xs" style={{marginRight:"-40px"}}>
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs">
                   <img src="https://www.w3schools.com/w3images/avatar2.png" style={{width:"40px",height: "40px", borderRadius:"50%"}} />
                </a>
								</li>


                <li className="dropdown top-menu-item-xs" style={{marginRight:"-40px"}}>
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
" style={{width:"20px",height: "20px", borderRadius:"50%"}} />

                </a>
								</li>

                <li className="dropdown top-menu-item-xs" style={{marginRight:"-40px"}}>
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
" style={{width:"20px",height: "20px", borderRadius:"50%"}} />

                </a>
								</li>
                <li className="dropdown top-menu-item-xs" style={{marginRight:"-40px"}}>
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs">

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Duo_icon.svg/768px-Google_Duo_icon.svg.png
" style={{width:"20px",height: "20px", borderRadius:"50%"}} />

                     </a>
								</li>


              </ul>


                        </div>

                    </div>
                </div>
            </div>
    )
   }
}
