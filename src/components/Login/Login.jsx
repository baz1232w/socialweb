import React from 'react'
import style from '../common/FormsControls/FormsControls.module.css'
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {loginMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {InputCreator} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {Navigate} from "react-router-dom";

const validators = [required, maxLengthCreator(30)]
const inputType = InputCreator('input')


const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={validators} placeholder={'Your email'} name={'email'} component={inputType}/>
            </div>
            <div>
                <Field validate={validators} placeholder={'Your password'} name={'password'} component={inputType}
                       type={'password'}/>
            </div>
            <div>
                <label>Remember me
                    <Field type="checkbox" component={'input'} name={'rememberMe'}/>
                </label>
            </div>
            {props.error
                ? <div className={style.formsSummeryError}>
                    {props.error}
                  </div>
                : null
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        if (formData) {
            props.loginMe(formData)
        }
    }

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={s.container}>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    )
}


const ConteinerComponent = connect((state) => ({isAuth: state.auth.isAuth}), {
    loginMe
})(Login)

export default ConteinerComponent