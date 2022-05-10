import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvidePresidents } from './context/PresidentContext';
import List from './views/List/List';

export default function App() {
  return (
    <>
      <ProvidePresidents>
        <Router>
          <Switch>
            <Route exact path='/'>
              <List />
            </Route>
          </Switch>
        </Router>
      </ProvidePresidents>
    </>
  )
}
