import React from 'react';

export default class Table extends React.Component{
   constructor(){
     super()
   }

   render(){
      return (
        <div className="container" style={{marginTop:"80px",marginLeft:"300px"}}>

        <div class="row">
          <div class="col-lg-10">
            <div class="card-box">

              <h4 class="text-dark header-title m-t-0">Standard Table Design</h4>


              <div class="table-responsive">
                        <table class="table table-actions-bar">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>User Type</th>
                                    <th>Joined</th>
                                    <th style={{minWidth: "80px"}}>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Saladin jake </td>
                                    <td>juwavictor@gmail.com</td>
                                    <td><a href="#">Admin</a></td>
                                    <td>26/03/2021</td>
                                    <td>
                                      <a href="#" class="table-action-btn"><i class="md md-edit"></i></a>

                                    </td>
                                </tr>

                                <tr>
                                    <td>Saladin jake </td>
                                    <td>juwavictor@gmail.com</td>
                                    <td><a href="#">Admin</a></td>
                                    <td>26/03/2021</td>
                                    <td>
                                      <a href="#" class="table-action-btn"><i class="md md-edit"></i></a>

                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

            </div>
          </div>
      </div>

      </div>
    )
   }
}
