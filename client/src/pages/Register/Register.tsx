import React, { ChangeEvent, useEffect,  useState } from "react";
import $ from 'jquery';

import { axiosSetContentAction, RUser } from "../../features/auth/actions";
import { FormInput } from "../../components/Form/FormInput";

import './Register.scss';
import { IState } from "../../store/root-reducer";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IPropsFromState {
  auth: any,
  error: any
}

interface IPropsFromDispatch {
  onRequestUser: (d: RUser) => ReturnType<typeof axiosSetContentAction.request>
}

type Props = IPropsFromState & IPropsFromDispatch;

const Register = (props: Props) => {
  const initialState: RUser = {
    name: "",
    email: "",
    password: "",
    password2: "",
    authority: 0,
    checked: false
  }

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e:ChangeEvent<any>): void => {
    const { name, value } = e.target;
    setUserData({ ...userData, ...{ [name]: value } });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { 
      name,
      email,
      password,
      password2,
      authority,
      checked
    } = userData;
    
    userData.name = userData.name.trim();
    userData.email = userData.email.trim();

    isChecked();

    props.onRequestUser(userData);
    //setUserData(initialState);
  }

  const show_hide_password = (pass: boolean) => {
    pass ? $('#password :password').length == 1 ? $('#password :password').attr('type', 'text') : $('#password :text').attr('type', 'password') : $('#password2 :password').length == 1 ? $('#password2 :password').attr('type', 'text') : $('#password2 :text').attr('type', 'password');
  };

  const isChecked = () => {
    userData.checked = $('#agree').is(':checked') && $('#notcommercial').is(':checked');

    $('#agree').is(':checked') ? $('#agree').removeClass('is-invalid') : $('#agree').addClass('is-invalid');

    $('#notcommercial').is(':checked') ? $('#notcommercial').removeClass('is-invalid') : $('#notcommercial').addClass('is-invalid');
  }

  return (
    <div className="container-fluid">
      <div className="logo">
        <div className="content">
          <div className="logo_title">
            <h2>Logo</h2>
          </div>
          <h2>Registeration</h2>
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3 mt-3 form_main">
              <FormInput
                id='name'
                type='text'
                name='name'
                placeholder='Full Name'
                text={props.error.name} 
                error={props.error.name && true}
                value={userData.name}
                onChange={handleChange}
              />
              <div className="mb-3 mt-3 authority">
                <select 
                  className="form-select"
                  name="authority"
                  onChange={handleChange}
                  >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <FormInput
                id='email'
                type='text'
                name='email'
                class='email'
                placeholder='Email' 
                value={userData.email}
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
                value={userData.password}
                text={props.error.password}
                error={props.error.password && true}
                onChange={handleChange}
                onShowPass={() => show_hide_password(true)}
              />
              <FormInput
                id="password2"
                type='password'
                name='password2'
                class='complex_input'
                placeholder='Confirm Password'
                value={userData.password2}
                text={props.error.password2}
                error={props.error.password2 && true}
                onChange={handleChange}
                onShowPass={() => show_hide_password(false)}
              />
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input  
                    className="form-check-input" 
                    type="checkbox" 
                    id="agree"
                  />
                  <label className="form-check-label">I agree on blabla. I agree to the terms of use and the handling of personal information.</label>
                </label>
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input 
                    className="form-check-input" 
                    type="checkbox"   
                    id="notcommercial"
                  />
                  <label className="form-check-label">It is not for commercial use such as calculation agency of tax return business.</label>
                </label>
                <a href="#" id="commercial">For commercial use, please click here.</a>
              </div>
              <input 
                type="submit" 
                className="btn btn-dark" 
                id="register_" 
                value="Register"
              />
            </div>
          </form>
          <div className="residual">
            <a href="/" id="login">Login here.</a>
          </div>
        </div>
      </div>
    </div>
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
    onRequestUser: (data: RUser) => {
      return dispatch(axiosSetContentAction.request(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);