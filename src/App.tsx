import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App=()=> {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="flex-00">
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                    </div>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;
