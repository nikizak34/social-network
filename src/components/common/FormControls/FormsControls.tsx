import React, {ElementType, FC} from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps} from "redux-form";
import {InputBase, TextField} from "@material-ui/core";
import {WrappedFieldInputProps} from "redux-form/lib/Field";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    input: WrappedFieldInputProps
}
export const Textarea: FC<FormControlPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div style={{marginTop: "5px"}}>
                <InputBase {...input} {...props} />
            </div>
            <div className={styles.formControl + " " + styles.error}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};


export const Input: FC<FormControlPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
                <TextField {...input} {...props} style={{width: "300px"}}/>
            </div>
            <div className={styles.formControl + " " + styles.error}>
                {hasError && <span>{meta.error}</span>}
            </div>

        </div>
    );
};


export const createField = (placeholder: string, name: string, validators:Array<(value:string)=>string|undefined>, component: ElementType, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </div>
)

