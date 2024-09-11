import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    type: state.settingsReducer.type
});

const withTypeRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(props.type !== 2) return <Navigate to='/home' />

        return <Component {...props} />
    }
      
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}

export default withTypeRedirect