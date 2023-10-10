import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitialAuthStateType, initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Grid} from "@material-ui/core";
import Preloader from "./components/common/Preloader/Preloader";
import {PageIsInProgress} from "./components/common/PageIsInProgress/PageIsInProgress";


type HeaderPropsType = mapDispatchToPropsType

type mapDispatchToPropsType = {
    initializeApp: () => void
    initialized: boolean

}

class App extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Grid container spacing={5} style={{marginTop: "20px", padding: "0 40px 40px"}}>
                    <Grid item xs={4}>
                        <Navbar/>
                    </Grid>
                    <Grid item xs={8}
                          style={{padding: "0", display: "flex", justifyContent: "center", marginTop: "20px"}}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>

                            <Route path='/dialogs'
                                   render={() => <DialogsContainer/>}/>

                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                            <Route path='/users' render={() => <UsersContainer/>}/>

                            <Route path='/login' render={() => <Login/>}/>

                            <Route path='/news' render={() => <PageIsInProgress/>}/>

                            <Route path='/music' render={() => <PageIsInProgress/>}/>

                            <Route path='/settings' render={() => <PageIsInProgress/>}/>

                            <Route path='*' render={() => <div>404 NOT FOUND</div>}/>

                        </Switch>
                    </Grid>

                </Grid>

            </div>

        )

    }
}


const mapStateToProps = (state: AppStateType): InitialAuthStateType => {
    return {
        initialized: state.app.initialized
    }

}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
