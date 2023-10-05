import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {InitialAuthStateType, initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


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
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <div className="flex-00">
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/dialogs'
                                       render={() => <DialogsContainer/>}/>

                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                                <Route path='/users' render={() => <UsersContainer/>}/>

                                <Route path='/login' render={() => <Login/>}/>

                                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>


                        </div>

                    </div>

                </div>

            </BrowserRouter>

        );
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
