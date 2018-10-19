import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './components/Home/home'
import Layout from './hoc/layout'
import BookView from './containers/restaurant-view'


const Routes = () => {
    return (

        <Layout>
            <div>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/restaurant/:id' exact component={BookView}/>

            </Switch>
            </div>
        </Layout>
    );
}

export default Routes;
