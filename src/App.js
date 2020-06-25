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
import Chance from 'chance';
import { times } from 'ramda';

// Mock Server Start ---------
const chance = new Chance();

const products = [
  {
    name: 'ACME Dinamite',
    id: 'pId1234',
    price: 249.99
  },
  {
    name: 'ACME Rocket',
    id: 'pId1235',
    price: 428.99
  }
].concat(times(() => ({
  name: chance.animal(),
  id: chance.string({ length: 7 }),
  price: chance.floating({ min: 55, max: 2000, fixed: 2 })
}), chance.integer({ min: 55, max: 100 })));

window.fetch = (path) => {
  const limit = parseInt(path.match(/(?<=limit=)\w+/g)[0]);
  const offset = parseInt(path.match(/(?<=offset=)\w+/g)[0]);

  return Promise.resolve({
    json: () => Promise.resolve({
      total: products.length,
      products: products.slice(offset, offset + limit)
    })
  });
};

// Mock Server End ---------

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu fixed="left" vertical>
          <Menu.Item as="h1">
            Class
            <Menu.Menu>
              <Menu.Item><Link as="h2" to="/scaling-frontends/class/bad">Bad</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/scaling-frontends/class/better">Better</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/scaling-frontends/class/best">Best</Link></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item as="h1">
            Functional
            <Menu.Menu>
              <Menu.Item><Link as="h2" to="/scaling-frontends/functional/bad">Bad</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/scaling-frontends/functional/better">Better</Link></Menu.Item>
              <Menu.Item><Link as="h2" to="/scaling-frontends/functional/best">Best</Link></Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/scaling-frontends/class/bad">
            <BadClassPage />
          </Route>
          <Route path="/scaling-frontends/class/better">
            <BetterClassPage />
          </Route>
          <Route path="/scaling-frontends/class/best">
            <BestClassPage />
          </Route>
          <Route path="/scaling-frontends/functional/bad">
            <BadFunctionalPage />
          </Route>
          <Route path="/scaling-frontends/functional/better">
            <BetterFunctionalPage />
          </Route>
          <Route path="/scaling-frontends/functional/best">
            <BestFunctionalPage />
          </Route>
          <Redirect to="/scaling-frontends/class/bad" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
