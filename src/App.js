import React from 'react'
import { HashRouter, Route} from 'react-router-dom'
import Header from './Header'
import Common from './Common'
import Main from './Main'
import Trailer from './Trailer'
import Characters from './Characters'
import Synopsys from './Synopsys'
import './common.css'
function App() {
    return (
        <div id='wrap'>
            <HashRouter>
                <Route path="/" component={Header} />
                <Route path="/" exact={true} component={Main} />
                <Route path="/" component={Common} />
                <Route path="/trailer" component={Trailer} />
                <Route path="/characters" component={Characters} />
                <Route path="/sysnopsis" component={Synopsys} />
            </HashRouter>
        </div>
    );
}

export default App;