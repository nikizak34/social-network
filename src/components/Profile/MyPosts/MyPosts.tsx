import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type myPostsType = {
    postData: Array<PostDataType>
    addPost:(postMessage:string)=>void
}

function MyPosts(props: myPostsType) {

    let postElement = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost=()=>{
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)

        }else{
            return''
        }
        newPostElement.current.value = ''


    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea><br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts