import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


 class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
      this.props.authThunk()
    }

    render() {
        return (
            <Header {...this.props}/>
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
    authThunk:()=>void
}
const mapStateToProps=(state:AppStateType)=>{
     return{
         isAuth:state.auth.isAuth,
         login:state.auth.login
     }
}
export default connect(mapStateToProps,{authThunk})(HeaderContainer)


