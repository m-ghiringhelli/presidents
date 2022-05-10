import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProvidePresidents } from './context/PresidentContext';
import List from './views/List/List';
import Detail from './views/Detail/Detail'

export default function App() {
  return (
    <>
      <ProvidePresidents>
        <Router>
          <Switch>
            <Route>
              <List />
            </Route>
          </Switch>
        </Router>
      </ProvidePresidents>
    </>
  )
}
