// modules
import { Fragment} from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Header from './modules/components/Header'

// pages
import Home from './modules/pages/Home';
import Doodle from './modules/pages/Doodle';
import Administration from './modules/pages/Administration';
import NoMatch from './modules/pages/NoMatch';

//
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
            <Route render={({ location, history }) => (
                <Fragment>
                    <main>
                        <Switch>
                            <Route component={Home} path="/" exact />
                            <Route component={Doodle} path="/doodle/:id" exact />
                            <Route component={Administration} path="/doodle/:id/admin/:pwd" exact />
                            <Route component={NoMatch} path="*" />
                        </Switch>
                    </main>
                </Fragment>
            )}
            />
        </BrowserRouter>
    </div>
  );
}

export default App;
