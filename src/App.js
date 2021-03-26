import React from 'react';
//import all css here
import './core.css';  //the main styling
import './responsive.css';  // making some components responsive
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state ={

      }
  }

  componentDidMount(){

  }

  render() {
    return (

            <div className="">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
    );
  }



}
