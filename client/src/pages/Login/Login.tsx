import React, { ChangeEvent, useState } from 'react';
import $ from 'jquery';
import { Dispatch } from 'redux';
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { axiosGetContentAction, User } from '../../features/auth/actions';
import { FormInput } from '../../components/Form/FormInput';
import './Login.scss';
import { IState } from '../../store/root-reducer';

interface IPropsFromState {
  auth: any,
  error: any
}

interface IPropsFromDispatch {
  onRequestUser: (d: User) => ReturnType<typeof axiosGetContentAction.request>
}

type Props = IPropsFromState & IPropsFromDispatch;

const Login = (props: Props) => {
  const initialState: User = {
    email: "",
    password: ""
  };

  const [userCredentials, setUserCredentials] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, ...{ [name]: value } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = userCredentials;
    userCredentials.email = userCredentials.email.trim();
    console.log(`After submit: email: ${email} password: ${password}`);
    
    // dispatch must be here
    props.onRequestUser(userCredentials);

    //setUserCredentials(initialState);
  }

  const authUser = useSelector((x: IState) => x.auth);

  const show_hide_password = () => {
    $('#password :password').length == 1  ? $('#password :password').attr('type', 'text') : $('#password :text').attr('type', 'password');
  }

  return (
    !authUser.isAuthenticated ?
    (<div className="container-fluid">
      <div className="logo">
        <div className="content">
          <div className="logo_title">
            <h2>Logo</h2>
          </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3 mt-3 form_main">
              <FormInput
                id='email'
                type='text'
                name='email'
                class='email'
                placeholder='Email'
                value={userCredentials.email}
                text={props.error.email}
                error={props.error.email && true}
                onChange={handleChange}
              />
              <FormInput
                id="password"
                type='password'
                name='password'
                class='complex_input'
                placeholder='Password'
                value={userCredentials.password}
                text={props.error.password}
                error={props.error.password && true}
                onChange={handleChange}
                onShowPass={show_hide_password}
              />
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" name="remember" id="remember" /> Remember me
                </label>
              </div>
              <input type="submit" className="btn btn-dark" id="login" value="Login" />
            </div>
          </form>
          <div className="residual">
            <a href="#" id='forgot'>Did you forget your password?</a>
            <hr />
            <a href="/register" id='create'>Create a new account</a>
          </div>
        </div>
      </div>
    </div>
    ) : (
      <Navigate to="/auth/" />
    )
  );
}

const mapStateToProps = (state: IState) => {
  return {
    auth: state.auth,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onRequestUser: (data: User) => {
      return dispatch(axiosGetContentAction.request(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
