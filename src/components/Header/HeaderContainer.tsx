import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

 class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(response => {
                if (response.data.resultCode===0){
                    let {id,login,email}=response.data.data
                   this.props.setUserData(id,email, login)
                }
            })
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
    setUserData:(id:string,email:string,login:string)=>void
}
const mapStateToProps=(state:AppStateType)=>{
     return{
         isAuth:state.auth.isAuth,
         login:state.auth.login

     }
}
export default connect(mapStateToProps,{setUserData})(HeaderContainer)


