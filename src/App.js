import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

//Importing components
import Home from './components/Home/Home';
import Incomplete from './components/Incomplete/Incomplete';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/incomplete_page" component={ Incomplete } />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;
