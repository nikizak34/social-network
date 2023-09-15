import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})


export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>

    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

