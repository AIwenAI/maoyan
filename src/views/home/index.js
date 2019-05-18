import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Movie from './movie';
import Cinema from './cinema';
import Content from './content';
import Footer from '../../common/footer';

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/movie" component={ Movie }></Route>
          <Route path="/cinema" component={ Cinema }></Route>
          <Route path="/content" component={ Content }></Route>
          <Redirect to="/movie"></Redirect>
        </Switch>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default Home;
