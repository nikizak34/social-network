import React from 'react';
import {addPostActionCreator, InitialStateProfileType, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";





type MapStateToPropsType={
    posts:InitialStateProfileType
    newPostText:InitialStateProfileType
}

type MapDispatchToPropsType={
    addPost:()=>void
    onPostChange:(text:string)=>void
}

export type PostPropsType=MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps=(state:AppStateType)=>{
    return{
        posts:state.profilePage,
        newPostText:state.profilePage

    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
        onPostChange:(text:string)=>{
            dispatch(updateNewPostActionCreator(text))
        }


    }
}


export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);





/*type myPostsType = {
    store:StoreType
}

function MyPostsContainer(props: myPostsType) {
    let state=props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostActionCreator(text))

    }
    return <MyPosts addPost={addPost}
                    onPostChange={onPostChange}
                    posts={state.profilePage.postData}
                    newPostText={state.profilePage.newPostText}
    />


}*/

