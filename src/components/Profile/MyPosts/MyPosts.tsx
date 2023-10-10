import React from 'react';
import {PostFormDataType, PostReduxForm} from "./Post/MyPostForm";
import {PostDataType} from "../../../redux/profileReducer";
import Post from "./Post/Post";
import {Paper, Typography} from "@material-ui/core";
import classes from './MyPosts.module.css'

type PostPropsType = {
    postData: PostDataType[]
    addPost: (newPostText: string) => void
}
const MyPosts = React.memo((props: PostPropsType) => {

    let postElement = props.postData.map(el => <Post key={el.id} message={el.message}
                                                     likesCount={el.likesCount}/>)

    let onAddPost = (values: PostFormDataType) => {
        props.addPost(values.newPostText)

    };


    return (
        <Paper style={{marginTop: "30px", padding: "15px", backgroundColor: "aliceblue"}}>
            <Typography variant="h3" className={classes.postsHeader}>My Posts</Typography>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={classes.postsContainer}>
                {postElement}
            </div>
        </Paper>
    )
})

export default MyPosts