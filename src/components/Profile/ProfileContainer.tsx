import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {GetProfileResponseType, profileThunk, } from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId: string,

}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){
            userId='2'
        }
       this.props.profileThunk(userId)
    }

    render(){
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}



export type ProfilePropsType=MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType={
    profile:GetProfileResponseType
    isAuth:boolean
}
type MapDispatchToPropsType={
    profileThunk:(userId: string)=>void
}

const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return {
        profile:state.profilePage.profile,
        isAuth:state.auth.isAuth

    }

}

const WithUrlDataContainerComponent= withRouter(ProfileContainer);
export default connect(mapStateToProps,{profileThunk})(WithUrlDataContainerComponent)





