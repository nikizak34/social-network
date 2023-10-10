import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {

        return (
            <Header {...this.props} />
        );
    }
}

type HeaderPropsType=
    mapStateToPropsType &
    mapDispatchToPropsType

type mapStateToPropsType={
    isAuth:boolean
    login:string|null

}
type mapDispatchToPropsType={
    logOut:()=>void
}
const mapStateToProps=(state:AppStateType)=>{
     return{
         isAuth:state.auth.isAuth,
         login:state.auth.login
     }
}
export default connect(mapStateToProps,{logOut})(HeaderContainer)


