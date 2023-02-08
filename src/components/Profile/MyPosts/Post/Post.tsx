import React from 'react';
import ty from "./Post.module.css"

type PostPropsType={
    name:string
}
function Post(props:PostPropsType) {
    return (


        <div className={ty.item}>{props.name}
            <div>
                <img src="https://er.ru/media/people/member_photos_site/photos_845374/photo-1639383169.jpg"
                     alt="error"/>
            </div>
        </div>


    )
}

export default Post