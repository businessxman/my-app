import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { IState } from '../../features/auth/reducer';
import { loadState as getState } from '../../services/local-storage-service';

interface IPrivateProps {
  component: any
  isAuthenticated: boolean
  path?: string
}

const PrivateRoute = (props: IPrivateProps) => {
  const {
    component: ReactNode,
    ...rest
  } = props;

  const data = getState() as any;

  type Props = {
    children?: React.ReactNode
  };

  return (
     <Route
    //   {...rest}
    //   element={ 
    //     data.isAuthenticated ? (
    //       <component />
    //     ) : (
    //       <Route element={<Navigate to="login" />} />
    //     )
    //   }
     />
  )
}

const mapStateToProps = (state: IState) => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(PrivateRoute);