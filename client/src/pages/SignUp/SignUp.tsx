import React, { useState, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import classnames from 'classnames';
import { FormInput } from '../../components/Form/FormInput';
import { axiosGetContentAction, userData } from '../../features/crypto/actions';
import { IState } from '../../store/root-reducer';
import './SignUp.scss';

interface IPropsFromState {
  auth: any
  error: any
}

interface IPropsFromDispatch {
  onRequestData: (d: userData) => ReturnType<typeof axiosGetContentAction.request>
}

type Props = IPropsFromState & IPropsFromDispatch;

function SignUp(props: Props) {
  const initialState: userData = {
    user_id: "",
    name: "",
    app_name: "",
    email: "",
    phone: '',
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
      user_id,
      name,
      app_name,
      email,
      phone,
      checked
    } = userData;
    userData.user_id = props.auth.user.id;
    userData.name = userData.name.trim();
    userData.app_name = userData.app_name.trim();
    userData.email = userData.email.trim();
    userData.phone = userData.phone.trim();

    isChecked();

    props.onRequestData(userData);
  }

  const isChecked = () => {
    userData.checked = $('#agree').is(':checked')

    $('#agree').is(':checked') ? $('#agree').removeClass('is-invalid') : $('#agree').addClass('is-invalid');
  }

  return(
    <>
    <div className="container-fluid">
      <h2>Token/Crypto asset withdrawal</h2>
      <div className="context">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3 mt-3 corporation">
            <input 
              name="name"
              list="names"
              value={userData.name}
              onChange={handleChange}
              className={classnames('form-control', props.error.name && 'is-invalid')}
              placeholder="Desired to take back crypto asset name" />
            <datalist id="names">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>    
            <div className="invalid-feedback">{props.error.name}</div>
          </div>
          <FormInput
            type='text'
            name='app_name'
            class='applicant'
            placeholder='Applicant Name'
            text={props.error.app_name} 
            error={props.error.app_name && true}
            value={userData.app_name}
            onChange={handleChange}
          />
          <FormInput
            type='text'
            name='email'
            class='email'
            placeholder='Email'
            text={props.error.email} 
            error={props.error.email && true}
            value={userData.email}
            onChange={handleChange}
          />
          <FormInput
            type='text'
            name='phone'
            class='phone'
            placeholder='Phone Number'
            text={props.error.phone} 
            error={props.error.phone && true}
            value={userData.phone}
            onChange={handleChange}
          />
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" id="agree" />
              <label className="form-check-label">I agree to the terms of use and the handling of personal information.</label>
            </label>
          </div>
          <input type="submit" className="btn btn-dark" id="signup" value="Sign up" />
        </form>  
      </div>
    </div>
    </>
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
    onRequestData: (data: userData) => {
      return dispatch(axiosGetContentAction.request(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
