import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/state";


type myPostsType = {
    profilePage:profilePageType
    addPost:(postMessage:string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}

function MyPosts(props: myPostsType) {

    let postElement = props.profilePage.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let addPost=()=>{
            props.addPost(props.newPostText)



    }
    const onPostChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)

    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText} onKeyDown={(e)=>{if (e.key==='Enter'){
                    props.addPost(props.newPostText)}

                }} onChange={onPostChange}></textarea><br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts