import React from 'react';
import ty from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number


}

function Post(props: PostPropsType) {
    return (

        <div className={ty.item}>
            <div>
                <img src="https://er.ru/media/people/member_photos_site/photos_845374/photo-1639383169.jpg"
                     alt="error"/>
            </div>
            {props.message}
        </div>


    )
}

export default Post