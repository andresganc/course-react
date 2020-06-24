
import React from 'react';

import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Rutas
import Pagina3 from '../views/1.basico/pages/Pagina3';
import Pagina2 from '../views/1.basico/pages/Pagina2';
import PaginaInicio from '../views/1.basico/pages/PaginaInicio';
import NoFound from '../views/1.basico/pages/PaginaNoFound';

var hist = createBrowserHistory();

function Routes() {
    return (
        <Router history={hist} >
            <Switch>
                    <Route exact path="/pagina3" component={Pagina3} />
                    <Route exact path="/pagina2" component={Pagina2} />
                    <Route exact path="/" component={PaginaInicio} />
                    <Route component={NoFound} />
            </Switch>
        </Router>
    );
}

export default Routes;

