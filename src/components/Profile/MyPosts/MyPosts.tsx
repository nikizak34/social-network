import React from 'react';
import s from "./MyPosts.module.css"
import {PostFormDataType, PostReduxForm} from "./Post/MyPostForm";
import {PostDataType} from "../../../redux/profileReducer";
import Post from "./Post/Post";

type PostPropsType={
    postData:PostDataType[]
    addPost:(newPostText:string)=>void
}
const MyPosts =React.memo( (props: PostPropsType) => {

    let postElement = props.postData.map(el => <Post key={el.id} message={el.message}
                                                           likesCount={el.likesCount}/>)

    let onAddPost = (values: PostFormDataType) => {
        props.addPost(values.newPostText)

    };


    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
})

export default MyPosts