import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Show from './pages/Show';

// Components
import Header from './components/Header';

function App() {

    return (
        <BrowserRouter>
        <div className="wrapper">
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/shows/:id">
                    <Show />
                </Route>
                <Route path="*">
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
