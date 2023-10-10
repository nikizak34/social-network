import React, {ChangeEvent, FC, useState} from "react";
import classes from "../Profile.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ContactsType, GetProfileResponseType} from "../../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/1200px-User_font_awesome.svg.png";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {Button, Grid, List, Paper, Typography} from "@material-ui/core";


type ProfileInfoType = {
    profile: GetProfileResponseType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (value: SubmitForm) => Promise<void>
}

export type SubmitForm = {
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({
                                                           profile,
                                                           saveProfile,
                                                           savePhoto,
                                                           isOwner,
                                                           updateStatus,
                                                           status
                                                       }) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile.photos) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }
    }
    const onSubmit = (formData: SubmitForm) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }


    return (
        <Grid container>
            <Grid item xs={4} style={{marginRight: "70px"}}>
                <img className={classes.profilePicture}
                     src={profile.photos.large || userPhoto}
                     alt="avatar"/>
                <div>
                    {isOwner && <label className={classes.uploadFile}>
                        <input type={"file"} onChange={onMainPhotoSelected} className={classes.uploadFile}/>
                        Change Photo
                    </label>}
                </div>
            </Grid>
            <Grid item xs={7}>
                <Paper style={{padding: "20px", backgroundColor: "aliceblue"}}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {editMode
                        ?
                        < ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile}/>
                        :
                        <ProfileData profile={profile} isOwner={isOwner}
                                     goToEditMode={() => setEditMode(true)}/>}


                </Paper>
            </Grid>
        </Grid>
    )
}

type ProfileData = {
    profile: GetProfileResponseType
    isOwner: boolean
    goToEditMode: (value: any) => void
}
const ProfileData: FC<ProfileData> = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            <Typography variant="h4">{profile.fullName}</Typography>
            <List className={classes.listContainer}>
                <div><b>About me:</b> {profile.aboutMe}</div>
                <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
                {profile.lookingForAJob &&
                    <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>}
                <div>
                    <b>Contacts:</b>
                    <div className={classes.contactsContainer}>
                        {Object.keys(profile.contacts).map(key =>

                            <Contact contactTitle={key} key={key}
                                     contactValue={profile.contacts[key as keyof ContactsType]}/>
                        )}
                    </div>

                </div>
            </List>
            {isOwner && <div>
                <Button variant="outlined" color="primary" onClick={goToEditMode}>Edit</Button>
            </div>}
        </>
    )
}


type Contact = {
    contactTitle: string
    contactValue: string
}
export const Contact: FC<Contact> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <span><b>{contactTitle}: </b></span>
            <span>{contactValue}</span>
        </div>
    )
}