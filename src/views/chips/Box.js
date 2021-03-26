import React from 'react';

export default class Box extends React.Component{
   constructor(){
     super()
   }

   render(){
      return (

        <div className="container" style={{marginTop:"80px",marginLeft:"300px"}}>

              <div className="row">
                      <div className="col-sm-12">
                          <h4 className="page-title">Dashboard</h4>
                      </div>
              </div>



              <div className="row" style={{marginTop:"30px"}}>
                    <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                        <div className="widget-bg-color-icon card-box" style={{backgroundColor:"#9932cc"}}>
                            <div className="bg-icon bg-icon-custom pull-left">
                                <i className="md md-account-balance-wallet text-custom"></i>
                            </div>
                            <div className="col-lg-6 pull-right text-right">
                                <h3 className="text-dark"><b className="" style={{color:"#fff"}}>Stock Total</b></h3>
                                <p className="text-muted" style={{color:"#fff"}}>$150000</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div></a>


                  <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                      <div className="widget-bg-color-icon card-box" style={{backgroundColor:"#ff1493"}} >
                          <div className="bg-icon bg-icon-custom pull-left">
                              <i className="md md-account-balance-wallet text-custom"></i>
                          </div>
                          <div className="col-lg-6 pull-right text-right">
                              <h3 className="text-dark"><b className="" style={{color:"#fff"}}>Total profit</b></h3>
                              <p className="text-muted" style={{color:"#fff"}}>$25000</p>
                          </div>
                          <div className="clearfix"></div>
                      </div>
                  </div></a>


                  <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                      <div className="widget-bg-color-icon card-box" style={{backgroundColor:"purple"}}>
                          <div className="bg-icon bg-icon-custom pull-left">
                              <i className="md md-account-balance-wallet text-custom"></i>
                          </div>
                          <div className="col-lg-6 pull-right text-right">
                              <h3 className="text-dark"><b className="" style={{color:"#fff"}}>Unique Visitors</b></h3>
                              <p className="text-muted" style={{color:"#fff"}}>250000</p>
                          </div>
                          <div className="clearfix"></div>
                      </div>
                  </div></a>


          </div>

        </div>
    )
   }
}
