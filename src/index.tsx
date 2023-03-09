import store, {AppType} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css'


const rerenderEntireTree=(state:AppType)=>{

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />,
        </BrowserRouter>,
        document.getElementById('root')
    );}


rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

