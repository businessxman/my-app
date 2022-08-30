import { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { logoutUser } from "../../features/auth/actions";
import {IState} from '../../store/root-reducer';

import "./Header.scss";

interface IPropsFromDispatch {
  onLogout: () => ReturnType<typeof logoutUser>
}

type Props = IPropsFromDispatch;

const Header = (props: Props) => {
  const authUser = useSelector((x: IState) => x.auth);
  
  const [showPerson, setShowPerson] = useState(false);
  
  const onUserClick = () => {
    setShowPerson(!showPerson);
  }

  const PersonInfo = (
    <div className="person_menu">
			<div className="menu-item px-3">
				<div className="menu-content d-flex px-3">
					<div className="me-2">
						<img alt="Logo" src="/img/Ellipse1.png"></img>
					</div>
					<div className="d-flex flex-column">
						<div className="fw-bolder d-flex fs-5">{authUser.user.name}</div>
            <a href="#" className="fw-bold fs-7">{authUser.user.email}</a>
						</div>
					</div>
					<div style={{textAlign:"center"}}>
						<button  type="button" className="btn py-3" style={{ color: "white" }} onClick={props.onLogout}> Sign Out</button>					
				</div> 
			</div>    					  
		</div>
  );

  return (
    authUser.isAuthenticated ? (
    <header>
      <div className="status row">
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
          <span>Logo</span>
        </div>
        <div className="col-sm-2">
          <img 
            src="/img/account.svg"
            onClick={onUserClick}
          />
          <img src="/img/settings-line.svg" />
        </div>
        <div className="col-sm-1"></div>
      </div>
      {showPerson&&PersonInfo}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse row" id="mynavbar">
                  <div className="col-sm-1"></div>
                  <ul className="navbar-nav me-auto col-sm-8">
                      <li className="nav-item">
                      <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="#">BC</a>
                      </li>
                      <li className="nav-item">
                      <a className="nav-link" href="#">Portfoilo</a>
                      </li>
                  </ul>
                  <ul className="navbar-nav me-auto d-flex col-sm-2">
                    <li className="nav-item">
                      <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Inquiry</a>
                    </li>
                  </ul>
                  <div className="col-sm-1"></div>
              </div>
          </div>
      </nav>
    </header>
    ): (
      <Navigate to="/" />
    )
  );
}

const mapStateToProps = (state: IState) => {
  return state
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLogout: () => {
      return dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);