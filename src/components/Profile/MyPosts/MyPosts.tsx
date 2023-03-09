import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {ActionsTypes, PostDataType} from "../../../redux/state";






type myPostsType = {
    postData: Array<PostDataType>
    newPostText: string
    dispatch:(action:ActionsTypes)=>void
}

function MyPosts(props: myPostsType) {

    let postElement = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text=e.currentTarget.value
        props.dispatch(updateNewPostActionCreator(text))

    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText}
                          onChange={onPostChange}>

                </textarea><br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts