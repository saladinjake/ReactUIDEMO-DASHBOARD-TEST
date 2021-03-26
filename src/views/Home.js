import React from 'react';
import Header from './chips/Header';
import Sidebar from  './chips/Sidebar';
import Box from './chips/Box';
import Table from './chips/Table'

export default class Home extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
      return (
        <div>
          <Header />
          <Sidebar />
          <Box />
          <Table />
        </div>
    )
   }
}
