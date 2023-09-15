import React, {FC} from 'react';
import s from './FormsControls.module.css'



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

