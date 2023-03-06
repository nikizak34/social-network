import store, {AppType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css'


const rerenderEntireTree=(state:AppType)=>{

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />,
        </BrowserRouter>,
        document.getElementById('root')
    );}


store.subscribe(rerenderEntireTree)
rerenderEntireTree(store.getState())
