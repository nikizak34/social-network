import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {GetProfileResponseType, getStatus, profileThunk, updateStatus,} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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
        this.props.getStatus(userId)
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={updateStatus}/>
        );
    }

}





export type ProfilePropsType=MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType={
    profile:GetProfileResponseType
    status:string
    authorizedUserId:string|null
    isAuth:boolean
}

type MapDispatchToPropsType={
    profileThunk:(userId: string)=>void,
    getStatus:(userId:string)=>void
    updateStatus:(status:string)=>void

}

const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return {
        profile:state.profilePage.profile,
        status:state.profilePage.status,
        authorizedUserId:state.auth.userId,
        isAuth:state.auth.isAuth
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps,{profileThunk,getStatus,updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)






