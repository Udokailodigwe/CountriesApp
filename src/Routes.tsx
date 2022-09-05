import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Country from './Pages/Country/Country'
import Favorite from './Pages/FavoriteList/Favorite'
import Home from './Pages/Home/Home'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/country/:name" component={Country} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  )
}

export default Routes
