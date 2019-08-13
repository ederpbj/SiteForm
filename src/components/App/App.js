/* import React, {Component} from 'react';
import './App.css';
import { DataTable } from '../DataTable/DataTable.js';
import {MuiThemeProvider} from "material-ui/styles/index";
import {AppBar, Toolbar, Typography} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
 */

//Do site
//import {Button, TextField, Typography} from "material-ui";
import FirebaseService from "../../services/FirebaseService";
//Teste
import React, {Component} from 'react';
import './App.css';
import {MuiThemeProvider} from "material-ui/styles/index";
import {Card, CardContent} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import {DataTable} from "../DataTable/DataTable";
import {Route, withRouter} from "react-router-dom";
import {privateUrls, urls} from "../../utils/urlUtils";
import Add from "../Add/Add";
import {Welcome} from "../Welcome/Welcome";
import TopBar from "./TopBar";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {login, logout} from "../../action/actionCreator";
import {compose} from "recompose";
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import NavigationLoggedWrapper from "../NavigationWrapper/NavigationLoggedWrapper";
 
const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});


class App extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>

                <React.Fragment>

                    <TopBar/>

                    <Card style={{margin: '50px'}}>
                        <CardContent>
                            <Route exact path={urls.login.path}
                                   render={(props) =>
                                       <NavigationLoggedWrapper component={Login} {...props}/>}
                            />
                            <Route exact path={urls.home.path}
                                   render={(props) =>
                                       <NavigationWrapper component={Welcome} {...props}/>}
                            />
                            <Route exact path={urls.data.path}
                                   render={(props) =>
                                       <NavigationWrapper component={DataTable}
                                                          {...props}
                                                          data={this.state.data}
                                       />}
                            />
                            <Route exact path={urls.add.path}
                                   render={(props) =>
                                       <NavigationWrapper component={Add} {...props}/>}
                            />
                            <Route exact path={privateUrls.edit.path}
                                   render={(props) =>
                                       <NavigationWrapper component={Add} {...props}/>}
                            />
                        </CardContent>
                    </Card>

                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;