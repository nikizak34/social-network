import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


export type AppType = {
    state: {
        dialogsPage: dialogsPageType
        profilePage: profilePageType
    }
}
export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}

export type profilePageType = {
    postData:Array<PostDataType>
}


export type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number

}

function App(props: AppType) {
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
                        <Route path='/profile' render={() => <Profile postData={props.state.profilePage.postData}/>}/>

                    </div>

                </div>

            </div>

        </BrowserRouter>

    );
}

export default App;
