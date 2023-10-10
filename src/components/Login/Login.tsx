import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {Button, Checkbox, FormControl, FormControlLabel, Paper, Typography} from "@material-ui/core";
import styles from './../common/FormControls/FormsControls.module.css'


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaURL: string

}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captcha = useSelector<AppStateType, null | string>(state => state.auth.captchaUrl)

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Field placeholder={'Login'} name={'login'} component={Input}
                       validate={[required]}
                />
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[required]} type={'password'}
                />

                <FormControlLabel
                    label={'Remember me'}
                    control={<Checkbox name={"rememberMe"}
                    />}
                />

                {captcha && <img src={captcha} alt='captcha'/>}

                {captcha && createField('Symbols from image', 'captchaURL', [required], Input)}

                {error && <div className={styles.summaryError}>{error}</div>}
                <Button type={'submit'} variant={'contained'} color={'primary'}
                        style={{marginTop: "15px"}}>Login</Button>
            </FormControl>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginProps = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captchaURL: string) => void
}
const Login = (props: LoginProps) => {
    const onSubmit = (formData: FormDataType) => {

        props.login(formData.login, formData.password, formData.rememberMe, formData.captchaURL)

    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <Paper style={{padding: "20px 60px 40px", marginTop: "20px"}}>
            <Typography variant={"h3"} component={"h3"} style={{textAlign: "center", marginBottom: "15px"}}>Login</Typography>
            <LoginReduxForm onSubmit={onSubmit}/>
        </Paper>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,


    }
}
export default connect(mapStateToProps, {login})(Login)