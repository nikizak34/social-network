import state, {AppType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";
import './index.css'
import {subscribe} from "./redux/state";

const rerenderEntireTree=(state:AppType)=>{

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        </BrowserRouter>,
        document.getElementById('root')
    );}


subscribe(rerenderEntireTree)
rerenderEntireTree(state)
