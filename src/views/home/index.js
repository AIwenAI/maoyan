import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Movie from './movie';
import Cinema from './cinema'
import Footer from '../../common/footer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/movie" component={ Movie }></Route>
          <Route path="/cinema" component={ Cinema }></Route>
          <Redirect to="/movie"></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home;
