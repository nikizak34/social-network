import React from 'react';
import s from './FormsControls.module.css'


// @ts-ignore
export const Textarea = ({input,meta,...props}) => {
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


// @ts-ignore
export const Input = ({input,meta,...props}) => {
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

