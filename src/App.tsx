import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppType} from "./redux/state";




type fokeorktype={
    state:AppType
    addPost:(postMessage:string)=>void

}
function App(props: fokeorktype) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="flex-00">
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/dialogs'
                               render={() => <Dialogs messages={props.state.dialogsPage.messages}
                                                      dialogs={props.state.dialogsPage.dialogs}/>}/>
                        <Route path='/profile' render={() => <Profile postData={props.state.profilePage.postData} addPost={props.addPost}/>}/>

                    </div>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;
