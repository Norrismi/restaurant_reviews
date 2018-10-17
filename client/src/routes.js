import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './components/Home/home'
import Layout from './hoc/layout'


const Routes = () => {
    return (

        <Layout>
            <div>
            <Switch>
                <Route path='/' exact component={Home}/>

            </Switch>
            </div>
        </Layout>
    );
}

export default Routes;
