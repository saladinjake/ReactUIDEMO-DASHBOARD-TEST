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
                          <h4 className="page-title"><img src="https://www.w3schools.com/w3images/avatar2.png" style={{width:"40px",height: "40px", borderRadius:"50%", marginRight: "10px"}} />
                        Dashboard</h4>
                      </div>
              </div>



              <div className="row container" style={{marginTop:"30px"}}>
                    <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                        <div className="widget-bg-color-icon card-box" style={{backgroundColor:"#9400D3"}}>
                            <div className="bg-icon bg-icon-custom pull-left">
                                <img style={{height:"20px",width:"20px"}} src="https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/home.png" />
                                <h3 className="text-dark"><b className="" style={{color:"#fff",fontSize:"15px"}}>Stock Total</b></h3>
                                <p className="text-muted" style={{color:"#fff"}}>$150000</p>
                                <p className="text-muted" style={{color:"#fff"}}>Increased by 60%</p>
                            </div>
                            <div className="col-lg-6 pull-right text-right">

                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div></a>


                  <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                      <div className="widget-bg-color-icon card-box" style={{backgroundColor:"#7B68EE"}} >
                          <div className="bg-icon bg-icon-custom pull-left">
                          <img style={{height:"20px",width:"20px"}} src="https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/home.png" />
                          <h3 className="text-dark"><b className="" style={{color:"#fff", fontSize:"15px"}}>Total profit</b></h3>
                          <p className="text-muted" style={{color:"#fff"}}>$25000</p>
                              <p className="text-muted" style={{color:"#fff"}}>Increased by 60%</p>
                          </div>
                          <div className="col-lg-6 pull-right text-right">

                          </div>
                          <div className="clearfix"></div>
                      </div>
                  </div></a>


                  <a href="#"><div className="col-sm-6  col-md-6 col-lg-3">
                      <div className="widget-bg-color-icon card-box" style={{backgroundColor:"lightpink"}}>
                          <div className="bg-icon bg-icon-custom pull-left">
                          <img style={{height:"20px",width:"20px"}} src="https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/home.png" />
                          <h3 className="text-dark"><b className="" style={{color:"#fff", fontSize:"15px"}}>Unique Visitors</b></h3>
                          <p className="text-muted" style={{color:"#fff"}}>250000</p>
                              <p className="text-muted" style={{color:"#fff"}}>Increased by 60%</p>
                          </div>
                          <div className="col-lg-6 ">

                          </div>
                          <div className="clearfix"></div>
                      </div>
                  </div></a>


          </div>

        </div>
    )
   }
}
