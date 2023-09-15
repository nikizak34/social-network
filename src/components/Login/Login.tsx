import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/FormControls/FormsControls.module.css'


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (

        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[required]} type={'password'}
                />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/><span></span> remember me
            </div>
            {error && <div className={s.summaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginProps={
    isAuth:boolean
    login:(email: string, password: string, rememberMe: boolean)=>void
}
const Login = (props: LoginProps) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1> LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state:AppStateType) => {
    return {
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)