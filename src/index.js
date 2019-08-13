import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

//Site import
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from "./utils/urlUtils";

//Origin
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
        <Router>
            <Route path={urls.home.path} component={App}/>
        </Router>
        , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* 
Com esta declaração estamos explicitando uma rota para 
o componente App.js, ao acessar o caminho ‘/’, o sistema 
irá renderizar o componente lá dentro. Ao subirmos o sistema 
podemos ver o comportamento citado acima, porém, ao entrar em 
‘/data’ não é exibido nada. Então, dentro do render adicionaremos 
as seguintes rotas onde tínhamos <DataTable/> 
*/