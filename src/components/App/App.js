import React, {Component} from 'react';
import './App.css';
import { DataTable } from '../DataTable/DataTable.js';
import {MuiThemeProvider} from "material-ui/styles/index";
import {AppBar, Toolbar, Typography} from "material-ui";
import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

//Do site
//import {Button, TextField, Typography} from "material-ui";
import FirebaseService from "../../services/FirebaseService";
//import {urls} from "../../utils/urlUtils";
//import {withRouter} from "react-router-dom";


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
                    <AppBar position="static">
                        <Toolbar>
                            <Typography type="title" color="inherit">
                                My Awesome React App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <DataTable data={this.state.data}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;