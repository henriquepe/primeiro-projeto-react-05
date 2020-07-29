import React from 'react'

import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import Dashboard from '../pages/Dashboard/index'
import Repository from '../pages/Repository/index'


const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route path='/repository' component={Repository}/>
            </Switch>
        </Router>
        );
        
    }
    
    export default Routes;