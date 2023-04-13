import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsConteiner";
import {UsersContainer} from "./components/Users/UsersContainer";





/*type AllType={
    state:AppType
}*/

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

                        <Route path='/profile' render={() => <Profile/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                    </div>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;
