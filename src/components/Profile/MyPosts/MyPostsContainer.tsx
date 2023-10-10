import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";


let mapStateToProps=(state:AppStateType)=>{
    return{
        postData:state.profilePage.postData,
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        addPost:(newPostText:string)=>{
            dispatch(addPostActionCreator(newPostText))
        },

    }
}


export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts);


