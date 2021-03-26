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
                            <a href="#" className="waves-effect waves-light" style={{fontSize: "40px"}}>BlueBox</a>

                            </div>

                          <ul className="nav navbar-nav hidden-xs">

                            </ul>

                            <form style={{marginLeft: "90px"}} role="search" className="navbar-left app-search pull-left hidden-xs">
			                     <input type="text" placeholder="Search..." className="form-control" />
			                     <a href=""><i className="fa fa-search"></i></a>
			                </form>



                            <ul className="nav navbar-nav navbar-right pull-right">
								<li className="dropdown top-menu-item-xs">
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs"> icon</a>
								</li>

                <li className="dropdown top-menu-item-xs">
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs"> icon</a>
								</li>

                <li className="dropdown top-menu-item-xs">
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs"> icon</a>
								</li>
                <li className="dropdown top-menu-item-xs">
								<a href="topup-wallet.html" className="text-custom header-title wallet-balance-top hidden-xs"> icon</a>
								</li>


              </ul>


                        </div>

                    </div>
                </div>
            </div>
    )
   }
}
