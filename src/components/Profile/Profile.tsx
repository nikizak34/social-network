import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div className={ty.content}>
            <img
                src="https://upload.wikimedia.org/wikipedia/ru/6/66/%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%BD%D0%B0%D1%8F_1.jpg"
                alt="error"/>
            <div> ava + description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile