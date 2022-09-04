import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Country from './components/Country'
import Favorite from './components/FavoriteList/Favorite'
import Home from './components/Home'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/country/:id" component={Country} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default Routes
