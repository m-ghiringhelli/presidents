import List from './views/List/List';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>PRESIDENTS</h1>
      <Switch>
        <Route exact path='/'>
          <Link to='/list'>Click here to view the presidents</Link>
        </Route>
        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </>
  )
}
