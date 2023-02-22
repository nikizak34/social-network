import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, AppType} from "./redux/state";
import React from "react";
import './index.css'

export const rerenderEntireTree=(state:AppType)=>{

    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} />,
    </BrowserRouter>,
    document.getElementById('root')
);}