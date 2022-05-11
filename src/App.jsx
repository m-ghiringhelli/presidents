import List from './views/List/List';
import { Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </>
  )
}
