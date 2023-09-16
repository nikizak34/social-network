import React, {FC} from 'react';
import s from './FormsControls.module.css'
import {Field} from "redux-form";



export const Textarea:FC<any> = ({input,meta,...props}) => {
const hasError=meta.touched&&meta.error
    return (
        <div>
            <div>
                <textarea  className={hasError && s.error} {...props} {...input} />
            </div>
            { hasError&&<span className={s.span}>{meta.error}</span>}

        </div>
    );
};



export const Input:FC<any> = ({input,meta,...props}) => {
    const hasError=meta.touched&&meta.error
    return (
        <div>
            <div>
                <input  className={hasError && s.error} {...props} {...input} />
            </div>
            { hasError&&<span className={s.span}>{meta.error}</span>}

        </div>
    );
};



export const createField=(placeholder:string,name:string,validators:[],component:any,props={},text='')=>(
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
               {...props}

        />{text}
    </div>
)

