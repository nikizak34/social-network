import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    GetProfileResponseType,
    getStatus,
    profileThunk,
    savePhoto,
    saveProfile,
    updateStatus,
} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {SubmitForm} from "./ProfileInfo/ProfileInfo";


type PathParamsType = {
    userId: string

}
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<CommonPropsType> {
    refreshProfile() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId!
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileThunk(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId}
                     {...this.props}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        );
    }

}


export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: GetProfileResponseType
    status: string
    authorizedUserId: number|null
    isAuth: boolean

}

type MapDispatchToPropsType = {
    profileThunk: (userId: number) => void,
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile:(value:SubmitForm)=>Promise<void>

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {profileThunk, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)






