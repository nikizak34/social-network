import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, AppType, StoreType} from "./redux/state";




type AllType={
    state:AppType
    dispatch:(action:ActionsTypes)=>void
    store:StoreType

}
const App:React.FC<AllType>=(props)=> {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="flex-00">
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs'
                               render={() => <Dialogs
                                                      store={props.store}
                               />}/>

                        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                      dispatch={props.dispatch}


                        />}/>

                    </div>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;
