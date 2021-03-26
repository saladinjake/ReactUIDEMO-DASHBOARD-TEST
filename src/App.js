import React from 'react';
import './App.css';
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
