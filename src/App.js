import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import BadClassPage from './class-components/Bad/MyPage';
import BetterClassPage from './class-components/Better/MyPage';
import BestClassPage from './class-components/Best/MyPage';
import BadFunctionalPage from './functional-components/Bad/MyPage';
import BetterFunctionalPage from './functional-components/Better/MyPage';
import BestFunctionalPage from './functional-components/Best/MyPage';
import { Menu } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu fixed="left" vertical>
          <Menu.Item as="h1">
            Class
            <Menu.Menu>
              <Menu.Item><Link as="h2" to="/class/bad">Bad</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/class/better">Better</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/class/best">Best</Link></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item as="h1">
            Functional
            <Menu.Menu>
              <Menu.Item><Link as="h2" to="/functional/bad">Bad</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/functional/better">Better</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/functional/best">Best</Link></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/class/bad">
            <BadClassPage />
          </Route>
          <Route path="/class/better">
            <BetterClassPage />
          </Route>
          <Route path="/class/best">
            <BestClassPage />
          </Route>
          <Route path="/functional/bad">
            <BadFunctionalPage />
          </Route>
          <Route path="/functional/better">
            <BetterFunctionalPage />
          </Route>
          <Route path="/functional/best">
            <BestFunctionalPage />
          </Route>
          <Redirect to="/class/bad" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
